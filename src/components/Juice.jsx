import store from "../store/store"
import { sell,order } from "../features/juice/JuiceSilcer"
import { useSelector,useDispatch } from "react-redux"
export const Juice=()=>{
    let juiceState=useSelector(state=>{
        return state.juice.juiceInStock
    })
    const dispatch=useDispatch()
    return(
        <div>
            <h3>No of Juice : {juiceState}</h3>
            <button onClick={()=>dispatch(sell(1))}>sellJuice</button>
            <button onClick={()=>dispatch(order(5))}>orderJuice</button>
        </div>
    )
}