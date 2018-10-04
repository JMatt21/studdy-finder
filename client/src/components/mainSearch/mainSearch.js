import React from "react";
import "./mainSearch.css";
import { Input } from 'react-materialize';
import SearchResults from "../searchResults/index";



class MainSearch extends React.Component {

    render() {
        return (
            <div>
                <Input className="mainSearch" validate placeholder='Enter Subject' />
                <SearchResults searchData={this.props.data} />
            </div>
        )
    }
};

export default MainSearch;