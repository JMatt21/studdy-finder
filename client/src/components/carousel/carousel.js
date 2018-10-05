import React from "react";
import "./carousel.css";
import { Carousel, Card, CardTitle, Table } from 'react-materialize';


class MainCarousel extends React.Component {



    render(props) {


        const displayNearbyCarousel = this.props.carouselArray.map(function (element, index) {
            return (
                <div key="index">
                    <Card horizontal header={<img className="carouselImage" src={element.image} ></img>} actions={[<a className="ubuntu btn" href='/'>Message</a>]}>
                        <p className="nearby">Nearby: {element.distance || "undefined"} miles</p>
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