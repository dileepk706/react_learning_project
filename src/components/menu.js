import { useEffect, useState } from "react"
import Hearo from "./Hearo"
import SpecialDishes from "./SpecialDishes"

const Menu=()=>
{
    let [dishes,dishesState]=useState([])

    const getAllItems = async () => {
        try {
            console.log('function called');
        const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
        console.log('response');

        const data = await response.json()
        dishesState(data.meals)
        console.log(data);
        // console.log(dishes); 
        } catch (error) {
            console.log("somthing error happened");
            console.log(error);
        }
       
    }
     
    useEffect(()=>{ 
        console.log('useefect');
        getAllItems()
    },[])

    return(
        <div>
        
        <Hearo></Hearo>
        <SpecialDishes
            dishes={dishes}
        /> 
        </div>
    )

}

export default Menu