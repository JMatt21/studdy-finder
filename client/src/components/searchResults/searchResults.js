import React from "react";
import "./searchResults.css";
import { Card, CardTitle, Table } from "react-materialize";
import {Link} from "react-router-dom";




class SearchResults extends React.Component {

    render(props) {

        const displaySearchResults = this.props.searchData.map(function (element, index) {
            return (
                <div key={index} className="searchResult">
                    <Card horizontal header={<img className="searchResultImage" src={element.image}/>}
                    actions={[<Link className="ubuntu btn resultButton" to='/Messages'>Message</Link>]}>
                        <p className="nearby">Distance: {element.distance} miles</p>
                        <h5 className="righteous">{element.firstName} {element.lastName}</h5>
                        <Table>
                        <tbody>
                            {element.subjects.map((subject, i) => {
                                return (
                                    <tr>
                                        <td className="carouselTd">{subject}</td>
                                    </tr>
                                )

                            })}
                        </tbody>
                        </Table>
                    </Card>
                </div>
            )
        });

        return (
            <div className="resultsWrapper">
                {displaySearchResults}
            </div>
        )
    }
};

export default SearchResults;