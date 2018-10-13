import React from "react";
import "./mainSearch.css";
import { Input } from 'react-materialize';
import SearchResults from "../searchResults/index";



class MainSearch extends React.Component {

    state = {
        search: ''
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };
    
    render() {
        return (
            <div className="search-wrapper">
                <form onSubmit={this.props.onSubmit}>
                    <Input onChange={this.handleInputChange}
                    value={this.state.search} 
                    name="search"
                    className="main-search-input"
                    validate placeholder='Enter Subject'/>
                </form>
                <SearchResults searchData={this.props.data} />
            </div>
        )
    }
};
// onSubmit={this.props.onSubmit}

export default MainSearch;