import React from "react";
import "./carouselTable.css";
import { Table } from 'react-materialize';

const checkmark = require("./checkmark.png");
const canHelp = require("./canhelp.png");
const canLearn = require("./canlearn.png");


class CarouselTable extends React.Component {

    render() {
        return (

            <Table>
                <tbody>
                    <tr>
                        <td className="carouselTd">Javascript</td>
                        <td className="carouselTd"><img className="matchLevelIcon" src={checkmark}/></td>
                    </tr>
                    <tr>
                        <td className="carouselTd">React.js</td>
                        <td className="carouselTd"><img className="matchLevelIcon" src={checkmark}/></td>
                    </tr>
                    <tr>
                        <td className="carouselTd">Angular.js</td>
                        <td className="carouselTd"><img className="matchLevelIcon" src={canHelp}/></td>
                    </tr>
                    <tr>
                        <td className="carouselTd">Algorithms</td>
                        <td className="carouselTd"><img className="matchLevelIcon" src={canHelp}/></td>
                    </tr>
                    <tr>
                        <td className="carouselTd">African American Literature</td>
                        <td className="carouselTd"><img className="matchLevelIcon" src={canLearn}/></td>
                    </tr>
                </tbody>
            </Table>
        )
    }
};

export default CarouselTable;

// sideWrapper