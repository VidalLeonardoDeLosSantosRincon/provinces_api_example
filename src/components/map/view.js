import React from "react";
import {Map, Marker, Popup, TileLayer} from "react-leaflet";
import {Icon} from "leaflet";

//css
import "./styles.css";

export default function(props){

    const coordinates = [45.421532, -75.697189];
    return(
        <div className="ctr-map">
            <Map center={coordinates} zoom={12}>
                    <TileLayer
                        url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    />
            </Map>
        </div>
    );
};