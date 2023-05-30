import { useState } from "react"

const Pagination=(props)=>{
    let[crrPage,crrPageState]=useState(1)
    let itemCount=[]
    for(let i=1;i<=Math.ceil(props.items.length/props.pages);i++){
        itemCount.push(i)
    }
    let pages=itemCount.map(e=>{
        return(
            <li><button className={crrPage==e?"isActive":""} onClick={()=>{
                props.currentpage(e)
                crrPageState(e)
            }}>{e}</button></li>
        )
    })
    return(
        <div>
            <ul className="pagination">
                {pages}
            </ul>
        </div>
    )
}

export default Pagination;