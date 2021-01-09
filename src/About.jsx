import React from "react";
import Com from "./Com";
import web from "../src/image/3.jfif"

const About=()=>{

    return(
        <>
        <Com 
            name="Stay with"
            title="For more contact with us"
            link="/contact"
            btnName="Contact"
            imgsrc={web}
        />
        </>
    )

}
export default About;