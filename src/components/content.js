import React,{useEffect, useState} from "react";

const Content=(props)=>{
    
    const [btnState,btnStateChanger]=useState('add fav')
    const [loveIconState,loveIconStateChanger]=useState('')
    const sampl=(a)=>{
        btnStateChanger(a)
    }
    const btnStateChng=(E)=>{
        btnStateChanger(prev=>{
            if(prev=='add fav'){
                props.favorite(E)

                return 'remove fav'
            }else{
                props.favoriteDelete(props.name)

                return 'add fav'
            }
        })

        loveIconStateChanger(prev=>{
            if(prev==""){
                return 'love' 
            }else{
                return ""
            }
            
        })

    }

    let [menu,menuState]=useState([])

    //get all data
    const getAllData=async ()=>
    {
        const respons=await fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
        const data=await respons.json()
        console.log(data);
        menuState(data.meals)
        console.log('menu data');
    }
    console.log(menu);
    

   let items= menu.map(e=>{
        return(
<div className="item">
        <div className="gImage">
            <img src={e.strMealThumb}></img>
         </div>

        <div className="actions">
            <button onClick={()=>{
                btnStateChng(e.strMealThumb)
            }}>{btnState}</button>
        </div>
        <div className={loveIconState}>

        </div>
    </div>
        )
    })

    useEffect(()=>
    {
    console.log('menu call');

        getAllData()
    },[])

    return(
        <div className="items">
            {items}

        </div>
        
    )
     
}

export default Content

// const Content=(props)=>{
//    let favItem=useState("click button")
//    let styleChanger=useState("btnPrevChange")
//    let [favBtnStrng,setBtnSetState]=favItem
//    let [btnClass,btnClassChange]=styleChanger
//     let favPrev
//    let chngeState=()=>{
//         setBtnSetState(prevState=>{
//             console.log('prev state');
//             console.log(prevState);
//             let sum=1
//                 return sum+=prevState
            

//         })
//    }

//    let chngeprev=()=>{
//     setBtnSetState(prevState=>{
//        let sub=prevState
//        sub--
//         if(sub<0){
//             sub=0
//         }
//         return sub
//     })
//    }
//    let heart=useState('none')
//    let [hertClss,chngeClss]=heart
//    const newchange=()=>{
//     setBtnSetState(prevE=>{
//         if(prevE=='click button'){
//             return "unclick button"
//         }else{
//             return 'click button'
//         }

    
//     })
//     btnClassChange(prev=>{
//         if(prev=="btnPrevChange"){
//             return "btnChange "
//         }else{
//             return "btnPrevChange"
//         }
//     })
//    chngeClss(prev=>{
//     if(prev=='none'){
//         return "heart"
//     }else{
//         return "none"
//     }
//    })

//    }


//     return (

//         <div className="cont">
//             <div className={`card `}>
//                 <div className={hertClss}></div>
//                 <div className="imageSection">

//                 </div>
//                 <div className={`nameSection `}>

//                     <p>name : {favBtnStrng}</p> 
//                     <button className={btnClass} onClick={newchange}>{favBtnStrng}</button>
//                     <button onClick={chngeprev}>back</button>

//                     <img src=" https://cdn.pixabay.com/photo/2023/01/29/10/09/street-7752940_1280.jpg"></img>
//                     <a src={'../public/logo192.png'}></a>
//                 </div>
//             </div>
//         </div>
//     )
// }