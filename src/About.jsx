import React from "react";
import Com from "./Com";
import web from "../src/image/1.jpg"

const About=()=>{

    return(
        <>
        <Com 
            name="You Can Gather More and Contact"
            title="How do you feel right now?Tell me your experince about Web Design"
            link="/contact"
            btnName="Contact"
            imgsrc={web}
        />
        </>
    )

}
export default About;