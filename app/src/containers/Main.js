import React from 'react';
import Loading from "../components/Loading";
import CharacterGrid from "../components/CharacterGrid";
import MenuTabs from "../components/MenuTabs";
import CharacterInfo from "../components/CharacterInfo";
import SearchInput from "../components/SearchInput";

import '../css/dest/main.css';

class Main extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            characters: [],
            showFavs: false,
            selected: -1,
            searchKey: '',
        };
    }

    componentDidMount() {
    const query = `
        query characters {
          allPersons(orderBy: name_ASC) {
            id
            name
            homeworld {
              id
              name
            }
            species {
              id
              name
            }
            starships {
              id
              name
            }
            films {
              id
              title
            }
          }
        }
    `;

    fetch('https://api.graphcms.com/simple/v1/swapi', {
        method: 'POST',
        headers: new Headers({
            'content-type': 'application/json',
        }),
        body: JSON.stringify({
            query,
            variables: null,
        }),
    })
        .then((res) => res.json())
        .then((json) => {
            console.log(json);
            this.setState({
                characters: json.data.allPersons.map((char, idx) => {
                    char.i = idx;
                    return char;
                }),
            });
        })
        .catch((e) => console.log(e));
    }

    addFav(idx, fav) {
        this.setState((prevState) => {
            const { characters } = prevState;
            characters[idx].favorite = !fav;
            return { characters };
        })
    }

    showDetails(idx) {
        this.setState({ selected: idx })
    }

    onTabSelected(showFavs) {
        this.setState({ showFavs });
    }

    handleInput(searchKey) {
        console.log('what', searchKey);
        this.setState({ searchKey })
    }

    render(){
        const { characters, showFavs, selected, searchKey } = this.state;
        if (characters.length > 0) {
            return <div className={'main'}>
                <div className={'mainCol1'}>
                    <MenuTabs onTabSelected={this.onTabSelected.bind(this)} />
                    <SearchInput handleInput={this.handleInput.bind(this)} />
                    <CharacterGrid
                        rows={characters}
                        showFavs={showFavs}
                        addFav={this.addFav.bind(this)}
                        showDetails={this.showDetails.bind(this)}
                        searchKey={searchKey}
                    />
                </div>
                <div className={'mainCol2'}>
                    <CharacterInfo data={characters[selected]} />
                </div>
            </div>
        }
        return <Loading />
    }
}

export default Main