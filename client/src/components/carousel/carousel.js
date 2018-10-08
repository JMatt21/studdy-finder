import React from "react";
import "./carousel.css";
import { Link } from "react-router-dom";
import { Carousel, Card, Table } from 'react-materialize';


class MainCarousel extends React.Component {



    render(props) {
        const displayNearbyCarousel = this.props.carouselArray.map(function (element, index) {
            return (
                <div key={index}>
                    <Card horizontal header={<img className="carouselImage" src={element.image} alt="img"></img>}>
                        <Link className="ubuntu btn"to='/dasdsadas'>Message</Link>
                        <p className="nearby">Nearby: {element.distance} miles</p>
                        <h5 className="righteous">{element.name}</h5>
                        <Table>
                            <tbody>
                                {element.beginnerSkills.map((subject, i) => {
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

            <Carousel options={{ fullWidth: false }}>
                {displayNearbyCarousel}
            </Carousel>

        )
    }
};



export default MainCarousel;