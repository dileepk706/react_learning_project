import { useState } from "react";
import Items from "./items"

const SpecialDishes=(props)=>
{
    let [searchItems,searchItemsState]=useState([])
    
    console.log('props');
   
    let flag=0
    const search=async(api)=>{
        let r= await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${api}`)
        let p=await r.json()
        console.log(p.meals);
        searchItemsState(p.meals)
        flag=1
    }
  
        let filter=(cate)=>{
            
            let data=searchItems.filter(e=>{
                return e.strCategory==cate
            })
            searchItemsState(data)
            flag=0
        }
   
    
    let items= props.dishes.map(e => {
        return (
            <Items
                items={e}
            />
        )
    })
    let sResult=searchItems.map(e=>{
        return (
            <div className="searchItem">
                <img src={e.strMealThumb} alt="" />
            </div>
        )
    })
   

    let categories=searchItems.map(e=>{
        return e.strCategory
    })
 
    let uniqCategory=[...new Set(categories)]
     
    
    let buttons=uniqCategory.map(e=>{
        return(
            
            <button onClick={async ()=> {
                // let responce=await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${e}`)
                // let data=await responce.json();
                // console.log(data);
                filter(e)
            }} >{e}</button>

        )
    })
    return(
        <div className="special">

            <div className="special-dishes-content">
                <h1>our specials</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque ea quibusdam veritatis numquam nostrum facere nisi rem aperiam, deserunt est. Neque dicta similique iste necessitatibus omnis facere ex eius laboriosam!</p>
            </div>
            <div className="items">
                {items}
            </div>

            <br />
            <div className="">
                <div className="search">
                    <input type="text" name="" id="g" placeholder="search here" />
                    <button onClick={async () => {
                        let d = document.getElementById('g').value
                        search(d)
                    }}>searhc by country name</button>

                </div>

                <div className="searchItems">
                    <div className="filter-section">
                        <h2>filter by category</h2>

                        <div className="category-buttons">
                            {buttons}
                        </div>
                    </div>
                    <div className="items-section">
                    {sResult}
                    </div>
                    

                </div>
            </div>



        </div>
    )
}

export default SpecialDishes