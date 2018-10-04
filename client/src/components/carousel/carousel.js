import React from "react";
import "./carousel.css";
import { Carousel, Card, CardTitle} from 'react-materialize';
import CarouselTable from "../carouselTable/index";


class MainCarousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            carouselContent: props.data
        };

    }

    componentDidMount() {
        for (let i = 0; i < this.state.carouselContent.length; i++) {
            console.log(this.state.carouselContent[i]);

        };
    };



    render() {

        return (
            <Carousel options={{ fullWidth: false }}>
                <div className='panelOne'>
                    <Card horizontal header={<CardTitle image="https://cdn.pixabay.com/photo/2016/11/08/16/03/manager-1808728_1280.jpg" ></CardTitle>} actions={[<a className="ubuntu btn" href='/'>Message</a>]}>
                        <h5 className="righteous">Geoff H.</h5>
                        <CarouselTable />
                    </Card>
                </div>
                {/*  */}
                <div className='panelTwo'>
                    <Card horizontal header={<CardTitle image="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"></CardTitle>} actions={[<a className="ubuntu btn" href='/'>Message</a>]}>
                        <h5 className="righteous">Ryan T.</h5>
                        <CarouselTable />
                    </Card>
                </div>
                {/*  */}
                <div className='panelThree'>
                    <Card horizontal header={<CardTitle image="https://cdn.pixabay.com/photo/2018/03/31/16/23/african-american-3278519_1280.jpg"></CardTitle>} actions={[<a className="ubuntu btn" href='/'>Message</a>]}>
                        <h5 className="righteous">Ron P.</h5>
                        <CarouselTable />
                    </Card>
                </div>
                {/*  */}
                <div className='panelFour'>
                    <Card horizontal header={<CardTitle image="https://images.pexels.com/photos/1036620/pexels-photo-1036620.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"></CardTitle>} actions={[<a className="ubuntu btn" href='/'>Message</a>]}>
                        <h5 className="righteous">Tiffiny S.</h5>
                        <CarouselTable />
                    </Card>
                </div>
                {/*  */}
                <div className='panelFive'>

                    <Card horizontal header={<CardTitle image="https://images.pexels.com/photos/736716/pexels-photo-736716.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"></CardTitle>} actions={[<a className="ubuntu btn" href='/'>Message</a>]}>
                        <h5 className="righteous">Joseph B.</h5>
                        <CarouselTable />
                    </Card>

                </div>
            </Carousel>
        )
    }
};

export default MainCarousel;

// sideWrapper