import React from "react";
import { NavLink } from "react-router-dom";
import web from "../src/image/5.jpg"
import Com from "./Com"

const Home=()=>{

    return(
        <>

        <Com 
            name="Get Started With"
            title="How do you feel right now?Tell me your experince about Web Design"
            link="/service"
            btnName="Get Start"
            imgsrc={web}
        />
        </>
    )

}
export default Home;