import React from "react";
import "./mainSearch.css";
import { Input } from 'react-materialize';




class MainSearch extends React.Component {

    render() {
        return (
            
                <Input className="mainSearch" validate placeholder='Enter Subject' />
            
        )
    }
};

export default MainSearch;