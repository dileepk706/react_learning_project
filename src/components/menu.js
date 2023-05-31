import { useEffect, useState } from "react"
import Hearo from "./Hearo"
import SpecialDishes from "./SpecialDishes"
import { AllMenu } from "./AllMenuContext"
const Menu=()=>
{
  
    return(
        <div>
        <AllMenu>
            <SpecialDishes></SpecialDishes>
        </AllMenu>
        {/* <Hearo></Hearo> */}
        </div>
    )

}

export default Menu