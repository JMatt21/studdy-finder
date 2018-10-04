import React from "react";
import "./mainSearch.css";
import { Input } from 'react-materialize';
import SearchResults from "../searchResults/index";



class MainSearch extends React.Component {

    render() {
        return (
<<<<<<< HEAD
            <form>
                <Input list="searchList" className="mainSearch" validate placeholder='Enter Subject' />
                <datalist id="searchList">
                    <option value="fite me irl"/>
                </datalist>
            </form>
=======
            <div>
                <Input className="mainSearch" validate placeholder='Enter Subject' />
                <SearchResults searchData={this.props.data} />
            </div>
>>>>>>> fdb07d69f7e0da8e44c309ed6c888276f7e6cb22
        )
    }
};

export default MainSearch;