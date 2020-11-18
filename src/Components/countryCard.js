import React, { Component } from 'react'
import { Col, Panel, Divider } from 'rsuite'

export default function CountryCard(props) {

    return (
           
        <div>
            <Col md={8} sm={12} xs={24} >
                <Panel shaded style={{height: "600px"}}>
                <h1>{props.country.name}</h1>
                <Divider/>
                <img
                className="image-card"
                src={props.country.flag}
                style={{ display: 'inline-block', width: "80%"}}
                />
                <Divider/>
                <p>Subregion: {props.country.subregion}</p>
                <p>Capital: {props.country.capital}</p>
                <p>Population: {props.country.population}</p>
                <p>Number of languages: {props.country.languages.length}</p>
                </Panel>
            </Col>
            </div>
        
    )
}