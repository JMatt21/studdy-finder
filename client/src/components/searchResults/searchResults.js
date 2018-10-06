import React from "react";
import "./searchResults.css";
import { Card, Table } from "react-materialize";




class SearchResults extends React.Component {

    render(props) {

        const displaySearchResults = this.props.searchData.map(function (element, index) {
            return (
                <div key={index} className="searchResult">
                    <Card horizontal header={<img className="searchResultImage" src={element.image} alt="img" />}>
                        <p className="nearby">Distance: {element.distance} miles</p>
                        <a className="ubuntu btn resultButton" href='/'>Message</a>
                        <h5 className="righteous">{element.firstName} {element.lastName}</h5>
                        <Table>
                            <tbody>
                                {element.subjects.map((subject, i) => {
                                    return (
                                        <tr key={i}>
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