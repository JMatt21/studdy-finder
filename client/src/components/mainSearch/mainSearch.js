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

    clearInput = (e) => {
        e.preventDefault()
        this.setState({
            search: ''
        })
        document.getElementById('the-search').blur()
    }

    render() {
        return (
            <div>
                <div className="search-wrapper">
                    <form onSubmit={this.props.onSubmit}>
                        <form onSubmit={this.clearInput}>
                            <Input onChange={this.handleInputChange}
                                value={this.state.search}
                                name="search"
                                className="main-search-input"
                                id="the-search"
                                validate placeholder='Search A Subject. Find A Study Partner!' />
                        </form>
                    </form>
                </div>
                <SearchResults user={this.props.user} searchData={this.props.data} />
            </div>
        )
    }
};

export default MainSearch;