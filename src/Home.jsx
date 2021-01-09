import React from "react";
import { NavLink } from "react-router-dom";
import web from "../src/image/9.jpg"
import Com from "./Com"

const Home=()=>{

    return(
        <>

        <Com 
            name="Get Started With"
            title="Lorem ipsum dolor sit amet consectetur, adipisicing elit."
            link="/service"
            btnName="Get Start"
            imgsrc={web}
        />
        </>
    )

}
export default Home;