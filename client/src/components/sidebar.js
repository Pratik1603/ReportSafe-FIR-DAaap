import React from "react";
import { useEffect } from "react";
import { ethers } from "ethers";
import PendingActionsIcon from '@mui/icons-material/PendingActions';
import RemoveDoneIcon from '@mui/icons-material/RemoveDone';
import ChecklistRtlIcon from '@mui/icons-material/ChecklistRtl';
import LogoutIcon from '@mui/icons-material/Logout';  
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useState,useContext } from "react";
import { ComplaintContext } from "../context/complaint";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import 'react-toastify/dist/ReactToastify.css';
function SideBar({setpendingApp,setpendingRes,setsolvedComp,pendingApp,pendingRes,solvedComp,byId,setbyId}){
  const { currentUser,connectWallet,isOwner,isOfficer} = useContext(ComplaintContext);
  const [balance, setbalance] = useState();
  const [owner,setOwner]=useState();
  const [officer,setOfficer]=useState();
  const navigate=useNavigate();
  const notifye = () => toast.error("Only registered officer has access to it", {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    });
  useEffect(() => {
    return async () => {

        const { ethereum } = window;
        const accounts = await window.ethereum.request({
            method: "eth_accounts",
        });
        const provider = new ethers.providers.Web3Provider(ethereum);
        const bal = await provider.getBalance(accounts[0]);
        setbalance(ethers.utils.formatEther(bal));
        const ownerAddress= await isOwner();
        setOwner(ownerAddress);
        const officerAddress= await isOfficer();
        setOfficer(officerAddress);
       
        
    }
})

useEffect(() => {
  return async () => {

     if(currentUser?.toLowerCase()!=owner.toLowerCase() && currentUser?.toLowerCase()!=officer.toLowerCase() ){
      notifye();
      navigate('/'); 
      
  
     }
      
  }
})


    return(
       <div className="h-full pt-[10%]  flex flex-col gap-12 transition ease-linear delay-1000" >
         <div className=" mx-auto w-40 mt-4 rounded-xl shadow-lg hover:scale-105  transition ease-in-out delay-125 bg-gradient-to-t from-[#0254a9] to-[#4990F4]">
           <div className="flex mt-1 h-2/4 justify-evenly ">
             <div className="solid w-10 h-10 rounded-full text-center flex flex-col justify-center">
                <AccountCircleIcon sx={{fontSize:"40px",margin:"auto",color:"white"}} />
             </div>
             <div className="">
              
               <div className="text-sm font-bold text-white flex flex-col mt-[4%] justify-center">
                  {currentUser?.slice(0,5)}...{currentUser.slice(38,42)}
               </div>
               <div className="text-sm font-bold text-white">
                  {currentUser?.toLowerCase()==owner?.toLowerCase()?"Owner":"Officer"}
               </div>
             
             </div>
           </div>
           <div style={{width:"80%",border:"0.3px white solid",marginLeft:"auto",marginRight:"auto"}}></div>
           <div className="flex gap-10 h-4/2 justify-center mt-1">
              <div>
                <div className="text-white text-xs" >
                  Balance
                </div>
                
                <div className="text-white text-sm font-bold mb-3">
                 {balance?.slice(0,5)} ETH
                </div>
              </div>
              <div className="bg-white rounded-3xl h-9 w-6 flex  justify-center text-center hover:scale-105 transition ease-in-out delay-125">
                
                  <AccountBalanceWalletIcon style={{color:"#172554",fontSize:"1.5rem",marginTop:"0.5rem"}} />

              </div>
           </div>
         </div>
         <div className="mx-auto flex flex-col gap-5 w-3/5 ">
            <div onClick={()=>{setpendingApp(false);setpendingRes(false);setsolvedComp(false);setbyId(true)}}  className={`cursor-pointer h-10 mx-auto flex  gap-3 w-full text-white justify-center bg-[#0253a936] rounded-3xl hover:border-l-white hover:border-l-8  hover:bg-gradient-to-t from-[#0254a9] to-[#4990F4] shadow-md ${byId?" bg-gradient-to-t from-[#0254a9] to-[#4990F4] border-l-white border-l-8":""} `}>
              <div style={{display:"flex",flexDirection:"column", justifyContent:"center"}}>
              <HomeIcon/>
              </div>
              <div style={{display:"flex",flexDirection:"column", justifyContent:"center"}}>
                Home
              </div>
                
            </div>

            <div onClick={()=>{setpendingApp(true);setpendingRes(false);setsolvedComp(false);setbyId(false)}} className={`cursor-pointer h-10  mx-auto flex px-[12%]  gap-3 w-full text-white justify-center  bg-[#0253a936] rounded-3xl hover:border-l-white hover:border-l-8  hover:bg-gradient-to-t from-[#0254a9] to-[#4990F4]  shadow-md ${pendingApp?"bg-gradient-to-t from-[#0254a9] to-[#4990F4] border-l-white border-l-8":""}`}>
              <div style={{display:"flex",flexDirection:"column", justifyContent:"center"}}>
              <PendingActionsIcon/>
              </div>
              <div className="flex flex-col justify-center text-xs" >
                Pending Approvals
              </div>
                
            </div>
            <div onClick={()=>{setpendingRes(true);setpendingApp(false);setsolvedComp(false);setbyId(false)}}  className={` cursor-pointer h-10 mx-auto flex px-[12%] gap-3 w-full text-white justify-center  bg-[#0253a936] rounded-3xl hover:border-l-white hover:border-l-8  hover:bg-gradient-to-t from-[#0254a9] to-[#4990F4]  shadow-md ${pendingRes?"bg-gradient-to-t from-[#0254a9] to-[#4990F4] border-l-white border-l-8":""} `}>
              <div style={{display:"flex",flexDirection:"column", justifyContent:"center"}}>
              <RemoveDoneIcon/>
              </div>
              <div className="flex flex-col justify-center text-xs"  >
                Pending Resolution
              </div>
                
            </div>
            <div onClick={()=>{setpendingRes(false);setpendingApp(false);setsolvedComp(true);setbyId(false)}} className={` cursor-pointer h-10 mx-auto flex px-[12%] gap-3 w-full text-white justify-center  bg-[#0253a936] rounded-3xl hover:border-l-white hover:border-l-8  hover:bg-gradient-to-t from-[#0254a9] to-[#4990F4]  shadow-md ${solvedComp?"bg-gradient-to-t from-[#0254a9] to-[#4990F4] border-l-white border-l-8":""}`}>
              <div style={{display:"flex",flexDirection:"column", justifyContent:"center"}}>
              <ChecklistRtlIcon/>
              </div>
              <div  className="flex flex-col justify-center text-xs"  >
                Solved Complaints
              </div>
                
            </div>
           
        </div>
        <div  className="mx-auto flex flex-col gap-5 w-3/5 ">
       
        <div className={`cursor-pointer h-10 mx-auto flex mt-[-20%] gap-3 w-full text-white justify-center  bg-[#0253a936] rounded-3xl hover:border-l-white hover:border-l-8  hover:bg-gradient-to-t from-[#0254a9] to-[#4990F4]  shadow-md`}>
              <div style={{display:"flex",flexDirection:"column", justifyContent:"center"}}>
              <LogoutIcon/>
              </div>
              <div  className="flex flex-col justify-center text-xs" onClick={()=>navigate('/')} >
                Sign Out
              </div>
                
        </div>

       </div> 
       <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                />
                {/* Same as */}
                <ToastContainer />
       
       </div>
    )
}
export default SideBar;