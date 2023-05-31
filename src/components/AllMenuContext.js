import React, { useEffect, useState } from "react"



export const AllMenuContext=React.createContext()
export const AllMenu=(props)=>{

    let [dishes,dishesState]=useState([])
    let [loading,loadingState]=useState(true)

    const getAllItems = async () => {
        try {
            console.log('function called');
        const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=b')
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
        <AllMenuContext.Provider value={dishes}>
            {!loading?props.children:<div className="special"><h1>loading.....Please wait</h1></div>}
        </AllMenuContext.Provider>
    )
}