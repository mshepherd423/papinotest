import React from 'react';

class CharacterInfo extends React.Component {
    render() {
        if (this.props.data) {
            const { name = '-', homeworld, species = [], films = [], starships = []} = this.props.data;
            return (
                // <div style={{ position: 'absolute', right: 0, top: 0, width: 600, height: 800 }}>
                <div className={'characterInfo'}>
                    <div className={'charInfoCell title'}><label>{name}</label></div>
                    <div className={'charInfoCell'}>
                        <div>
                            <label>Homeworld</label>
                            <ul><li>{ homeworld === null ? 'Unknown' : homeworld.name }</li></ul>
                        </div>
                        <div>
                            <label>Specie</label>
                            <ul>{
                            species.length > 0 ?
                                species.map((item) => {
                                    return (
                                        <li key={item.id}>{item.name}</li>
                                    )
                                }) : <li>Unknown</li>
                        }</ul></div>
                    </div>
                    <div className={'charInfoCell'}>
                        <div>
                            <label>Starships</label>
                            <ul>{
                                starships.length > 0 ?
                                    starships.map((item) => {
                                        return (
                                            <li key={item.id}>{item.name}</li>
                                        )
                                    }) : <li>Unknown</li>
                            }</ul>
                        </div>
                        <div>
                            <label>Films</label>
                            <ul>{
                                films.length > 0 ?
                                    films.map((item) => {
                                        return (
                                            <li key={item.id}>{item.title}</li>
                                        )
                                    }) : <li>Unknown</li>
                            }</ul>
                        </div>
                    </div>
                </div>
            );
        }
        return null;
    }
}

export default CharacterInfo