import React from "react";
import "./mainSearch.css";
import { Input } from 'react-materialize';
import { Animated } from "react-animated-css";
import SearchResults from "../searchResults/index";

class MainSearch extends React.Component {

    state = {
        search: '',
        initialSearch: true
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
            search: '',
            initialSearch: false
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
                                validate placeholder='Enter Interests. Find a Study Partner!' />
                        </form>
                    </form>
                </div>
                {/* <SearchResults user={this.props.user} searchData={this.props.data} /> */}
                {(this.props.data.length < 1 && this.state.initialSearch === false ? <Animated animationIn="bounceIn"><div className="no-search-results"><p>Sorry! No Results Found.<br />Try another Interest of yours!</p></div></Animated> : <SearchResults user={this.props.user} searchData={this.props.data} />
                    
                )}
            </div>
        )
    }
};

export default MainSearch;