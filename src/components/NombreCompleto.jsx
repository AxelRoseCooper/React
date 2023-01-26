
import React from 'react';
import '../App.css'
import { Edad } from './Edad';



export const NombreCompleto = (props) => {
    console.log("props",props);
    return (
        <>{/* React.Frafment */}
            <h3 className='Juan'>
                Me llamo {props.name}
            </h3>
            <Edad edad={props.age}/>

           
        </>
    );
};


//export {NombreCompleto,OtraExportación}