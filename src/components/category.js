import { useEffect, useState } from "react"
import Items from "./items"

const Categories = (props) =>{

    let [category,categorySate]=useState([])
    let [itemAgain,itemAgainState]=useState([])
    let [filterItem,filterItemState]=useState([])
    let [loading,loadingState]=[true]    
    let [isActive,isActiveState]=useState()

    useEffect(async()=>{
        try {
            
            let response=await fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
            let data=await response.json()
           
            categorySate(data.categories)
          
        } catch (error) {
            console.log(error);
        }
    },[])
    useEffect ( async () => {
        try {

        const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=b')

        const data = await response.json()
        itemAgainState(data.meals)
        isActiveState('Beef')
        let items = data.meals.filter(e => {
            return e.strCategory == 'Beef'
        })
        filterItemState(items)

        loadingState(false)
        // console.log(dishes); 
        } catch (error) {
            console.log("somthing error happened");
            console.log(error);
        }
       
    },[])
 

    //filter function
    const filter=(val)=>{
       isActiveState(val)
        let items= itemAgain.filter(e=>{
            return e.strCategory==val
        })
        filterItemState(items)
       
    }

    let categoryButton=category.map((cat)=>{
        return(
            <div>
            <button className={isActive==cat.strCategory?"isActive":"notActive"} onClick={()=>{
                filter(cat.strCategory)
            }}>{cat.strCategory}</button>
                
            </div>

        )
    })
    let categoryDisplayItems=filterItem.map(e=>{
        
        return(
        
            //reuse componets
            <Items 
                items ={e} 
                //this popus state chaching function is comming from special.ja
                popupState={props.popupState}
            /> 
        )
    })

    return(

        <div className="global_category">
            <div className="global_category_buttons">
                {categoryButton}
            </div>
            <div className="global_category_display">
                {filterItem.length > 0 ? categoryDisplayItems : <div className="alertbox"><p>No items in this category....please try another category </p></div>}
            </div>
        </div>

    )

}

export default Categories