import { useEffect, useState } from "react"
import Hearo from "./Hearo"
import SpecialDishes from "./SpecialDishes"

const Menu=()=>
{
    let [dishes,dishesState]=useState([])
    let [loading,loadingState]=useState(true)

    const getAllItems = async () => {
        try {
            console.log('function called');
        const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
        console.log('response');

        const data = await response.json()
        dishesState(data.meals)
        loadingState(false)
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
        {!loading ?<SpecialDishes dishes={dishes}/> : <h1>loading</h1> }
        </div>
    )

}

export default Menu