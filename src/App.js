import React,{useEffect, useState} from "react";
import './App.css';
import Menu from "./components/menu";

const App=()=>{

  return(
    <Menu/>
  )
}
export default App;

// function App() {
 
// let [favList,favListChanger]=useState([])

// const favorite=(item)=>{

//   favListChanger([...favList,item])

// }

// const favoriteDelete=(item)=>{
//     if(favList.includes(item)){
//       let updated=favList.filter(e=>e!=item)
//       favListChanger(updated)
//     }
//   }

//   let likedItems = favList.map(e => {
//     return (
//       <div className='favItem'>
//         <img src={e}></img>

//         <button onClick={() => {
//           favoriteDelete(e)
//         }}>remove item</button>
//       </div>
//     )
//   })

// if(favList.length<1){
//   likedItems=
//   <div>
//     <h1>wishlist is emty</h1>
//   </div>
// }


//   //get all food items


//   return (
//     <div className="">
//     {console.log('render')}
//       <Header />
//         <div className="container" >

//             <div className="gallery">
//                 <h1>Explore the world of gooorman</h1>

                 
//                     <Content
//                     favoriteDelete={favoriteDelete}
//                     favorite={favorite}
//                     />
//                  <Content
//                     favoriteDelete={favoriteDelete}
//                     favorite={favorite}
//                     /> 
//                     <Content
//                     favoriteDelete={favoriteDelete}
//                     favorite={favorite}
//                     />
//             </div>
//             <div className="favItems">
              
//                {likedItems}
//             </div>
//         </div>    
//       <Footer /> 
//     </div>
//   );
// }

// export default App;
