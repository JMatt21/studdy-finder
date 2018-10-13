import React from "react";
import "./carousel.css";
import { Link } from "react-router-dom";
import { Carousel, Card, CardTitle, Table } from 'react-materialize';


class MainCarousel extends React.Component {

    render(props) {
        const displayNearbyCarousel = this.props.carouselArray.map((element, index) => {
            return (
                // <div className="carousel-" key={index}>
                //     <Card horizontal header={<img className="carouselImage" src={element.image} alt="img"></img>}>
                //         <Link className="ubuntu btn"to='/dasdsadas'>Message</Link>
                //         <p className="nearby">Nearby: {element.distance} miles</p>
                //         <h5 className="righteous">{element.name}</h5>
                // <Table>
                //     <tbody>
                //         {element.beginnerSkills.map((subject, i) => {
                //             return (
                //                 <tr key={i}>
                //                     <td className="carouselTd">{subject}</td>
                //                 </tr>
                //             )
                //         })}
                //     </tbody>
                // </Table>
                //     </Card>
                // </div>


                <Card horizontal header={<img className="carousel-image" src={element.image} alt="img"></img>}>
                    <div className="carousel-content">
                        
                            <div className="name-and-distance">{` ${element.firstName} ${element.lastName} is ${element.distance} miles away.`}</div>
                            <div className="carousel-msg-btn btn">Message</div>
                        

                    </div>
                </Card>


            )
        });

        return (

            <Carousel options={{ fullWidth: false }}>
                {displayNearbyCarousel}
                {/* <div>1</div>
                <div>2</div>
                <div>3</div>
                <div>4</div>
                <div>5</div> */}
            </Carousel>

        )
    }
};



export default MainCarousel;