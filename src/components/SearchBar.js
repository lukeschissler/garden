import React from 'react';

class SearchBar extends React.Component {

    render() { return (
        <div>
            <input type="text" placeholder="Search for Plants" />
            <button type="submit" onChange={this.props.filterResults('asd')}>
                Search!
            </button>
        </div>
    ) }
}

export default SearchBar;