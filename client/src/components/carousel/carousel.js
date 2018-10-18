import React from "react";
import "./carousel.css";
import { Link } from "react-router-dom";
import { Carousel, Card } from 'react-materialize';

function roomName(id1, id2) {
    if (id1 > id2)
        return `${id2}+${id1}`
    else
        return `${id1}+${id2}`
}

class MainCarousel extends React.Component {
    render() {
        const displayNearbyCarousel = this.props.carouselArray.map((element, index) => {
            return (
                <Card key={index} horizontal header={<img className="carousel-image" src={element.image} alt="user_image"></img>}>
                    <div className="carousel-content">
                        <div className="name-and-distance">
                            <div className="carousel-name righteous">{`${element.name}`}</div>
                            <div className="carousel-distance">{`${Math.round(element.distance)} miles away`}</div>
                        </div>
                        <Link to={`/messages/${roomName(this.props.user.id, element.id)}`} className="carousel-msg-btn btn">Message</Link>
                    </div>
                    <table>
                        <tbody className="carousel-table">
                            {element.beginnerSkills.map((subject, i) => {
                                return (
                                    <tr key={i} className="carousel-table-row">
                                        <td className="carouselTd">{subject}    </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
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