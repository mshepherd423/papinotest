import React from 'react';

class MenuTabs extends React.Component {
    render() {
        const { onTabSelected } = this.props;
        return (
            <div className={'menuTabs'}>
                <button className={'tabButton'} onClick={() => onTabSelected(false)}>Characters List</button>
                <button className={'tabButton'} onClick={() => onTabSelected(true)}>Favorites List</button>
            </div>
        )
    }
}

export default MenuTabs