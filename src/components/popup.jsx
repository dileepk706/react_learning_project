
const Popup=({popupState, popupDataDisplay})=>{

console.log('popupDataDisplay');
console.log(popupDataDisplay);
    return(
        <div className="popup">
            <div className="popup_content">
                <div className="closingbtn">
                    <button onClick={()=>{
                        popupState(false)
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
                        </ul>
                        <button>Add to Cart</button>
                    </div>
                </div>
                
                <div className="item-details-right">
                </div>
            </div>
        </div>
    )
}

export default Popup