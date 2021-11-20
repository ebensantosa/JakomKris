import React, { useEffect, useState, Fragment } from 'react'
import './peta.scss'
import ReactMapGL, { Marker } from "react-map-gl";
import { MarkerIcon } from '../../assets'
import axios from 'axios';
import { Link } from "react-router-dom";

export default function Maps() {

    const [churces, setChurches] = useState([]);
    useEffect(() => {
        const fetch = async () => {
            try {
                const { data } = await axios.get("http://44.198.35.77:8080/api/churches");
                setChurches(data);
            } catch (err) {
                console.error(err);
            }
        };
        fetch();
    }, []);

    let [viewport, setViewPort] = useState({
        latitude: -0.90016,
        longitude: 119.8708,
        zoom: 15,
        width: window.innerWidth,
        height: window.innerHeight

    });

    return (
        <ReactMapGL
            mapStyle="mapbox://styles/mapbox/streets-v11"
            mapboxApiAccessToken={
                "pk.eyJ1IjoiaGV6a2llbCIsImEiOiJja3VtMmU1OGEweWRzMnBtYjB3M2czZjU4In0.jjFen3ij04T5s0Pa8UOnbw"
            }
            {...viewport}
            onViewportChange={(newView) => setViewPort(newView)}
        >
            {churces.map((el) => (
                <div key={el.id}>
                    <Marker
                        latitude={el.geometry.coordinates[0]}
                        longitude={el.geometry.coordinates[1]}
                        offsetTop={(-viewport.zoom * 5) / 2}
                    >

                        <Link to={`/detail?id=${el._id}`}>
                            <img
                                src={MarkerIcon}
                                width="5%"
                                height="5%"

                            />
                        </Link>
                    </Marker>

                </div>
            ))}

        </ReactMapGL>
    )
}
