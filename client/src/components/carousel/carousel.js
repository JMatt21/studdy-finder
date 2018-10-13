import React from "react";
import "./carousel.css";
import { Link } from "react-router-dom";
import { Carousel, Card, CardTitle, Table } from 'react-materialize';


class MainCarousel extends React.Component {

    render(props) {
        const displayNearbyCarousel = this.props.carouselArray.map((element, index) => {
            return (

                <Card horizontal header={<img className="carousel-image" src={element.image} alt="img"></img>}>
                    <div className="carousel-content">

                        <div className="name-and-distance">{` ${element.firstName} ${element.lastName} is ${element.distance} miles away.`}</div>
                        <tbody className="carousel-table">
                            {element.beginnerSkills.map((subject, i) => {
                                return (
                                    <tr key={i} className="carousel-table-row">
                                        <td className="carouselTd">{subject}    </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                        <Link to="/messages" className="carousel-msg-btn btn">Message</Link>
                    </div>
                </Card>


            )
        });

        return (

            <Carousel options={{ fullWidth: false }}>
                {displayNearbyCarousel}
            </Carousel>

        )
    }
};



export default MainCarousel;