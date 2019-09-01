import React from 'react';

class SearchInput extends React.Component {
    render() {
        return (
            //<div style={{ display: 'flex' }}>
            <div className={'searchInput'}>
                <label>Search: </label><input onChange={(evt) => this.props.handleInput(evt.target.value)}></input>
            </div>
        )
    }
}

export default SearchInput