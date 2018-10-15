import React from "react";
import "./searchResults.css";
import { Card, Table } from "react-materialize";
import { Link } from "react-router-dom";

function roomName(id1, id2) {
    if (id1 > id2)
        return `${id2}+${id1}`
    else
        return `${id1}+${id2}`
}


class SearchResults extends React.Component {
    render() {
        // const miles = (this.props.miles ? `this.props.miles miles` : `undefined`);
        const displaySearchResults = this.props.searchData.map((element, index) => {
            return (
                // <div key={index} className="searchResult">
                //     <Card horizontal className="c-test" header={
                //         <img className="searchResultImage" src={element.image || "https://via.placeholder.com/250x275"} alt={`${element.name || element.email}`} />}>
                //         <a className="ubuntu btn resultButton"
                //             //to={`/messages/${roomName(this.props.user.id, element.id)}`}
                //             >
                //             Message</a>
                //         <p className="nearby">Distance: {`${element.distance} miles` || "undefined"} </p>
                //         <h5 className="righteous">{element.name || element.email}</h5>

                //             <tbody>
                //                 {element.beginnerSkills.map((subject, i) => {
                //                     return (
                //                         <tr key={i}>
                //                             <td className="search-resultsTd">{subject}</td>
                //                         </tr>
                //                     )

                //                 })}
                //             </tbody>

                //     </Card>
                // </div>
                //OLD SEARCH RESULTS JSX ABOVE

                <Card className="search-result" key={index} horizontal header={<img className="search-results-image" src={element.image} alt="user_image"></img>}>
                    <div className="search-results-content">
                        <div className="name-and-distance">
                            <div className="search-results-name righteous">{`${element.name}`}</div>
                            <div className="search-results-distance">{`${element.distance} miles away`}</div>
                        </div>
                        <tbody className="search-results-table">
                            {element.beginnerSkills.map((subject, i) => {
                                return (
                                    <tr key={i} className="search-results-tr">
                                        <td className="search-results-td">{subject}    </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                        <Link to="/messages" className="search-results-msg-btn btn">Message</Link>
                    </div>
                </Card>

            )
        });

        return (
            <div className="search-results-wrapper">
                {displaySearchResults}
            </div>
        )
    }
};

export default SearchResults;