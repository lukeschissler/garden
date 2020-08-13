import React from 'react';
import TemplatePlant from './TemplatePlant';

class FilteredList extends React.Component {
    state = {
        allPlants : this.props.plants,
        plants : this.props.plants
    };

    searchRef = React.createRef();

    filterResults = () => {
        const keyWord = this.searchRef.current.value.toLowerCase();
        const allPlants = this.state.allPlants;
        let searchPlants = {};

        Object.keys(allPlants).forEach(key => {
            const lowerName = allPlants[key].name.toLowerCase();

            if (lowerName.includes(keyWord)) {
                searchPlants[key] = allPlants[key];
                }
            })
        this.setState({plants : searchPlants})
    }


    render() { return (
        <div>
            <input className = "plant-search"
                   ref={this.searchRef}
                   onChange={this.filterResults}
                   onFocus="this.value=''"
                   type="text"
                   placeholder="Search for plants!"/>
            {Object.keys(this.state.plants).map(key => (
                <TemplatePlant
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