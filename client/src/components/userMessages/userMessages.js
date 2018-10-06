import React from "react";
import './TileStyle.css';


const Tile = props => (
<img 
 src={props.src}
 onClick={() => props.onImageClick(props.id)}
 key={props.id}
/>
);

export default Tile;