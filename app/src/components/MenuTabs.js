import React from 'react';

class MenuTabs extends React.Component {
    render() {
        const { onTabSelected } = this.props;
        return (
            <div>
                <button onClick={() => onTabSelected(false)}>Characters List</button>
                <button onClick={() => onTabSelected(true)}>Favorites List</button>
            </div>
        )
    }
}

export default MenuTabs