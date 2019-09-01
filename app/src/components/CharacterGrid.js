import React from 'react';
import favIconSrc from  '../res/images/icon_fav.png';
import favIcon2Src from'../res/images/icon_fav2.png';
import detailsIconSrc from '../res/images/icon_detail.png';

class CharacterGrid extends React.Component {
    render() {
        let favIcon1 = <img src={favIconSrc} title={'Add favorite'}/>;
        let favIcon2 = <img src={favIcon2Src} title={'Delete favorite'} />;
        let detailsIcon = <img src={detailsIconSrc} title={'Show details'}/>;
        const { rows, showFavs, addFav, showDetails, searchKey } = this.props;
        return(
            //<table style={{ display: 'block', overflowY: 'auto', height: '400px', width: 'max-content' }}>
            <table className={'characterGrid'}>
                <thead>
                    <tr>
                        <td className={'columnName'}>Names</td>
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
                                    <button onClick={() => addFav(row.i, row.favorite)}>{ row.favorite || showFavs ? favIcon2 : favIcon1}</button>
                                    <button onClick={() => showDetails(row.i)}>{detailsIcon}</button>
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