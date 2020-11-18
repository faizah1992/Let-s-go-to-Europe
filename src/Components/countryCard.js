import React, { Component } from 'react'
import { Col } from 'rsuite'

export default function CountryCard(props) {

    return (
        <div>
            <Col md={2} s={10}>
                <h1>{props.country.name}</h1>
                <img
                className="image-card"
                src={props.country.flag}
                style={{ display: 'inline-block', width: "20%"}}/>
                <p>Subregion: {props.country.subregion}</p>
                <p>Capital: {props.country.capital}</p>
                <p>Population: {props.country.population}</p>
                <p>Number of languages: {props.country.languages.length}</p>
            </Col>
        </div>
    )
}