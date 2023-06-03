import { useContext } from "react";
import { PopupContext } from "./SpecialDishes";
import { DispatchContext } from '../context/appProvider';

const Popup=({addCart, popupDataDisplay})=>{

let dispatchContext=useContext(DispatchContext)
let popupContext=useContext(PopupContext)
    return(
        <div className="popup">
            <div className="popup_content">
                <div className="closingbtn">
                    <button onClick={()=>{
                        //the function popupContext is same as  popupState(false) ...but this is global context
                        popupContext(false)
                    }}>close</button>
                </div>
                

                <div className="item-details-left">
                    <div className="item-image-side">
                        <img src={popupDataDisplay.strMealThumb} alt="" />
                    </div>
                    <div className="item-content-side">
                        
                        <ul>
                            <li>Name : {popupDataDisplay.strMeal}</li>
                            <li>Category : {popupDataDisplay.strCategory}</li>
                            <li>Price: ₹599</li>
                        </ul>
                        <button onClick={()=>{
                            // addCart(popupDataDisplay.strMealThumb,popupDataDisplay.strMeal,599)
                            dispatchContext({
                                type:'add-to-cart',
                                payload:{
                                    name:popupDataDisplay.strMeal,
                                    img:popupDataDisplay.strMealThumb
                                }
                            })
                        }}>Add to Cart</button>
                    </div>
                </div>
                
                <div className="item-details-right">
                </div>
            </div>
        </div>
    )
}

export default Popup