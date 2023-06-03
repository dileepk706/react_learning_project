import { useContext, useReducer, useState } from "react";
import { CartStateContext } from "../context/appProvider";

 const About = () => {

    let cartData=useContext(CartStateContext)

    let eachCartData=cartData.map(e=>{
        return(
            <li>Name : {e.name}</li>
        )
    })

     
    return (
        <div>
             <ul>
                {eachCartData}
             </ul>

        </div>

    )
}

export default About;