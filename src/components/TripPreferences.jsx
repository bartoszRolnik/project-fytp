// import React, {Component} from 'react';
// import Button from './Button';
// import '../App.css';
// import FormAboutYou from './FormAboutYou';
// import NextButton from './NextButton'
// // import { Button } from 'reactstrap';
// import ReactDOM from 'react-dom';
// import Geosuggest from 'react-geosuggest';
// import PlacesAutocomplete from 'react-places-autocomplete';
// import {
//     geocodeByAddress,
//     geocodeByPlaceId,
//     getLatLng,
//   } from 'react-places-autocomplete';





// class TripPreferences extends Component {

    

//     render(){
        
//         return(
//             <div  id="section3" className="container">
//                 <p className="titleSection3">Where do you want to go?</p>
                


//             </div>

//         );
//     }
// }

// export default TripPreferences;


import React from 'react';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker,
  } from "react-google-maps";
 
class TripPreferences extends React.Component {
  constructor(props) {
    super(props);
    this.state = { address: '' };
  }
 
  handleChange = address => {
    this.setState({ address });
  };
 
  handleSelect = address => {
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => console.log('Success', latLng))
      .catch(error => console.error('Error', error));
  };
 
  render() {
    return (
      <PlacesAutocomplete
        value={this.state.address}
        onChange={this.handleChange}
        onSelect={this.handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div id="section3" className="container">
          <p>Where do you want to go?</p>
            <input className="searchPlacesInput"
              {...getInputProps({
                placeholder: 'Search Places ...',
                className: 'location-search-input',
              })}
            />
            <div className="autocomplete-dropdown-container">
              {loading && <div>Loading...</div>}
              {suggestions.map(suggestion => {
                const className = suggestion.active
                  ? 'suggestion-item--active'
                  : 'suggestion-item';
                // inline style for demonstration purpose
                const style = suggestion.active
                  ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                  : { backgroundColor: '#ffffff', cursor: 'pointer' };
                return (
                  <div
                    {...getSuggestionItemProps(suggestion, {
                      className,
                      style,
                    })}
                  >
                    <span>{suggestion.description}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
    );
  }
}
export default TripPreferences;