import React, { useContext, useEffect,useState } from "react";
import { ComplaintContext} from "../context/complaint";

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import img9 from "../images/arrestedHands.png";
const Navbar=({setOpenProfile})=>{
   
    const [state,setState]=React.useState(false);
   
    const {currentUser,connectWallet}=useContext(ComplaintContext);

    const navigation=[
        {title:"Home",path:"#"},
        {title:"Services",path:"#"},
        {title:"Contatct Us",path:"#"},
        {title:"ERc20",path:"#"},
    ];
    
    useEffect(() => {
        async function listenMMAccount() {
          window.ethereum.on("accountsChanged", async function() {
            connectWallet();
          });
        }
        listenMMAccount();
      }, []);
   
    return(
        
        <nav className={`bg-gradient-to-r  from-[#83c1f8] from-80%  to-[#f8b18a] to-90%  md:text-sm  text-white ${state?"shadow-lg rounded-xl mx-2  mt-2 md:shadow-none md:border:none md:mx-2 md:mt-0":""}`}>
            <div className="gap-x-16 items-center max-w-screen-xl mx-auto px-4 md:flex md:px-8">
                 <div className="flex items-center justify-between py-5 md:block">
                     <div className="md:hidden">
                         <button className="menu-btn text-gray-500 hover:text-gray-800 cursor-pointer" onClick={()=>setState(!state)
                         }>
                            <MenuIcon/>
                         </button>
                     </div>
                 </div>
                <div className={`flex-1 gap-x-8 items-center mt-8 md:mt-0 md:flex ${state?"block" :"hidden"}`}>
                <div className="w-16 border-2 md:border-2 md:ml-[-5%] md:mr-[3%] border-[#cfd2d6] md:h-12 bg-gradient-to-r from-[#76bcfa] from-50%   to-[#fa9057] to-50% rounded-b-full shadow-2xl md:w-12 h-20 ">
                                <img src={img9} className=" h-[95%] w-[100%] mt-[-6%] " />
                </div>
                <ul className="justify-center items-center space-y-6 md:flex md:space-x-6 md:space-y-0">
               
                 {navigation.map((item,idx)=>{
                     return(
                         <li key={idx} className="text-black hover:text-[#082f49] hover:font-bold">
                             <a style={{textDecoration:"none"}} href={item.path} className="block">{item.title}</a>
                         </li>
                     );
                 })}
                 </ul>
                 
                 <div className="flex-1 gap-x-6 items-center justify-end mt-6 space-y-6 md:flex md:space-y-0 md:mt-0 mb-4">
                  <div onClick={()=>setOpenProfile(true)} className=" cursor-pointer border-solid  h-12 w-12 border-black mt-6 space-y-6   md:mt-0">
                     <AccountCircleIcon style={{fontSize:"45px",color:"#172554",textAlign:"center"}}/>
                    </div>  
                    {currentUser?(
                        <p  className="flex items-center justify-center gap-x-1 py-2 px-4 text-white font-medium bg-gray-800 hover:bg-gray-700 activate:bg-gray-900 rounded-full md:inline-flex">{currentUser.slice(0,25)}..</p>
                    ):(<button onClick={()=>connectWallet()} className="cursor-pointer flex items-center justify-center gap-x-1 py-2 px-4 text-white font-medium bg-gray-800 hover:bg-gray-700 activate:bg-gray-900 rounded-full md:inline-flex">
                        Connect Wallet
                    </button>)}
                 </div>
             </div>
             </div>
        </nav>
    )
}

export default Navbar;