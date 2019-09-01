import React from 'react';

class CharacterGrid extends React.Component {
    render() {
        const { rows, showFavs, addFav, showDetails, searchKey } = this.props;
        return(
            <table style={{ display: 'block', overflowY: 'auto', height: '400px', width: 'max-content' }}>
                <thead>
                    <tr>
                        <td>Names</td>
                    </tr>
                </thead>
                <tbody>
                    {rows.filter((row) => {
                        if (showFavs && row.name.toLowerCase().match(searchKey.toLowerCase())) {
                            return row.favorite;
                        }
                        return row.name.toLowerCase().match(searchKey.toLowerCase());
                    }).map((row) => {
                        return (
                            <tr key={row.id}>
                                <td style={{ display: 'flex' }}>
                                    <div>{row.name}</div>
                                    <button onClick={() => addFav(row.i, row.favorite)}>{ row.favorite ? 'delete fav': 'add fav'}</button>
                                    <button onClick={() => showDetails(row.i)}>details</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        )
    }
}

export default CharacterGrid