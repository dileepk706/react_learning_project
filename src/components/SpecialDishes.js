import { useState } from "react";
import Items from "./items"
import Categories from "./category";
import Pagination from "./pagination";
import Popup from "./popup";

const SpecialDishes = (props) => {
    let [searchItems, searchItemsState] = useState([])
    let [loading, loadingState] = useState(true)
    let [crrPage, crrPageState] = useState(1)
    let [pagePerWidow, pagePerWidowStae] = useState(6)
    let [popup, popupState] = useState(false)
    const search = async (api) => {
        loadingState(true)
        let r = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${api}`)
        let p = await r.json()
        console.log(p.meals);
        searchItemsState(p.meals)
        loadingState(false)
    }

    let filter = (cate) => {
        loadingState(true)

        let data = searchItems.filter(e => {
            return e.strCategory == cate
        })
        searchItemsState(data)
        loadingState(false)
    }




    let firsIndx = crrPage * pagePerWidow - pagePerWidow
    let lastIndx = crrPage * pagePerWidow

    let newItems = props.dishes.slice(firsIndx, lastIndx)
    
    //popup true/false handler
    let [popupDataDisplay,popupDataDisplayState]=useState({})
    const popupHandler=(a,itemData)=>{
        popupState(a)
        popupDataDisplayState(itemData)
    }

    let items = newItems.map(e => {
        return (
            <Items
                items={e}
                popupState={popupHandler}
            />
        )
    })

    let sResult = searchItems.map(e => {
        return (
            <div className="searchItem">
                <img src={e.strMealThumb} alt="" />
            </div>
        )
    })


    let categories = searchItems.map(e => {
        return e.strCategory
    })

    let uniqCategory = [...new Set(categories)]


    let buttons = uniqCategory.map(e => {
        return (

            <button onClick={async () => {
                // let responce=await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${e}`)
                // let data=await responce.json();
                // console.log(data);
                filter(e)
            }} >{e}</button>

        )
    })
    return (
        <div>
            {popup && <Popup popupState={popupHandler} popupDataDisplay={popupDataDisplay} />}
            <div className="special">

                <div className="special-dishes-content">
                    <h1>our specials</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque ea quibusdam veritatis numquam nostrum facere nisi rem aperiam, deserunt est. Neque dicta similique iste necessitatibus omnis facere ex eius laboriosam!</p>
                </div>
                <div className="items">
                    {/* display top item */}
                    {items}
                </div>
                {/* pagination */}
                <Pagination items={props.dishes} currentpage={crrPageState} pages={pagePerWidow} />


                <div className="">
                    <div className="search">
                        <input type="text" name="" id="g" placeholder="search here" />
                        <button onClick={async () => {
                            let d = document.getElementById('g').value
                            search(d)
                        }}>searhc by name</button>

                    </div>



                    <div className="searchItems">
                        <div className="filter-section">
                            <h2>filter by category</h2>

                            <div className="category-buttons">
                                {buttons}
                            </div>
                        </div>
                        <div className="items-section">
                            {!loading ? sResult : <h3>loading...</h3>}
                        </div>


                    </div>
                </div>



            </div>

            <Categories items={items} popupState={popupHandler} />

        </div>


    )
}

export default SpecialDishes