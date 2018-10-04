import React from "react";
import "./searchResults.css";
import CarouselTable from "../carouselTable/index";




class SearchResults extends React.Component {

    render() {
        return (
            <div>
            <div className="resultsWrapper">
                <div>
                    <h5 className="resultsName righteous">UserName A.</h5>
                    <img className="resultsImage" src="https://cdn.pixabay.com/photo/2016/04/01/10/11/avatar-1299805_960_720.png" alt="img"/>
                    <button className="resultsButton btn">Message</button>
                </div>
                <div className="resultsSection">
                    <CarouselTable className="resultsTable" />
                    <CarouselTable className="resultsTable" />
                </div>
            </div>

            <div className="resultsWrapper">
                <div>
                    <h5 className="resultsName righteous">UserName B.</h5>
                    <img className="resultsImage" src="https://cdn.pixabay.com/photo/2016/04/01/10/11/avatar-1299805_960_720.png" alt="img"/>
                    <button className="resultsButton btn">Message</button>
                </div>
                <div className="resultsSection">
                    <CarouselTable className="resultsTable" />
                    <CarouselTable className="resultsTable" />
                </div>
            </div>
            <div className="resultsWrapper">
                <div>
                    <h5 className="resultsName righteous">UserName C.</h5>
                    <img className="resultsImage" src="https://cdn.pixabay.com/photo/2016/04/01/10/11/avatar-1299805_960_720.png" alt="img"/>
                    <button className="resultsButton btn">Message</button>
                </div>
                <div className="resultsSection">
                    <CarouselTable className="resultsTable" />
                    <CarouselTable className="resultsTable" />
                </div>
            </div>
            <div className="resultsWrapper">
                <div>
                    <h5 className="resultsName righteous">UserName D.</h5>
                    <img className="resultsImage" src="https://cdn.pixabay.com/photo/2016/04/01/10/11/avatar-1299805_960_720.png" alt="img"/>
                    <button className="resultsButton btn">Message</button>
                </div>
                <div className="resultsSection">
                    <CarouselTable className="resultsTable" />
                    <CarouselTable className="resultsTable" />
                </div>
            </div>
            </div>
        )
    }
};

export default SearchResults;