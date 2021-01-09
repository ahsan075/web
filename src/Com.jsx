import React from "react";
import { NavLink } from "react-router-dom";


const Com=(props)=>{

    return(
        <>
        <section className="d-flex align-items-center">
            <div className="row">
            <div className="col-10 mx-auto">
                <div className="row d-flex m-auto justify-content-center">
                    <div className="col-6 order-1 order-lg-1 justify-content-center d-flex flex-column">
                        <h1>{props.name}
                         <strong className="text-success"> ADS</strong>
                        </h1>
                        <h2>{props.title}</h2>
                        <div>
                            <NavLink className="btn btn-outline-danger mt-3" to={props.link}>{props.btnName}</NavLink>
                        </div>
                    </div>
                    <div className="col-6 d-flex order-2 order-lg-2">
                        <img className="anim m-auto" src={props.imgsrc}/>
                    </div>
                </div>
            </div>
            </div>
        </section>
        </>
    )

}
export default Com;