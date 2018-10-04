import React from "react";
import "./mainSearch.css";
import { Row, Input } from 'react-materialize';




class MainSearch extends React.Component {

    render() {
        return (
            <form>
                <Input list="searchList" className="mainSearch" validate placeholder='Enter Subject' />
                <datalist id="searchList">
                    <option value="fite me irl"/>
                </datalist>
            </form>
        )
    }
};

export default MainSearch;