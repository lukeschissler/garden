import React from 'react';
import Plant from './Plant';
import SearchBar from "./SearchBar";



class FilteredList extends React.Component {
    state = {
        plants : this.props.plants
    }

    filterResults = e => {
        console.log(e)
    }

    render() { return (
        <div>
            <SearchBar filterResults={this.filterResults}/>
            {Object.keys(this.state.plants).map(key => (
                <Plant
                    key={key}
                    index={key}
                    details={this.state.plants[key]}
                    addToGarden={this.props.addToGarden}
                />
            ))}
        </div>
    ) }
}

export default FilteredList;