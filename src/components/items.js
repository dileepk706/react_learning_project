import { useState } from "react"

const Items=(props)=>
{
    let [fav,favState]=useState('add to fav')

    let favBtn=()=>{
        favState((prev)=>{
            if(prev=='add to fav'){
                return 'remove fav'
            }else{
               return 'add to fav'
            }
        })
    }

    return(
        <div className="item">
            <div className="global_category_item">
                <img src={props.items.strMealThumb}></img>
            </div>
            <div className="item-actions">
                <button onClick={()=>{
                    favBtn()
                }}>{fav}</button>
            </div>
        </div>
    )
}
export default Items