import React from "react";
import '../App.css'
import PropTypes  from "prop-types";

export const Edad = ({edad}) =>{
    return(
        <> {/*React.Fragment*/}
            <p className="Juan" style={{display:"none"}}> :::: tengo {edad} años :::::::::</p>
        </>
    )
        
}

Edad.propTypes = {
    edad: PropTypes.number.isRequired
}