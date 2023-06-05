import { useSelector,useDispatch } from "react-redux"
import { sell,order } from "../features/cakes/cakeSlice"
import store from "../store/store"

export const Cake=()=>{
    let cakeState=useSelector((state)=> state.cake.cakeInStock)
    const dispatch=useDispatch()
    return(
        <div>
            <h3>No of Cake : {cakeState}</h3>
            <button onClick={()=>dispatch(sell(1))}>sellCake</button>
            <button onClick={()=>dispatch(order(5))}>orderCake</button>
        </div>
    )
}