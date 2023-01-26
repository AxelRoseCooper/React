import React from "react";
import '../App.css'
import { Edad } from "./Edad";

export const Mascota = ({name,age}) =>{
    return(
        <> {/*React.Fragment*/}
            <h3 className="Mascota">Soy una mascota y me llamo {name} </h3>
            <Edad edad = {age}/>
        </>
    )
        
}