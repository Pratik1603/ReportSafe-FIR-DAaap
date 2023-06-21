import React, { useState,useEffect,useContext } from "react";
import { ethers } from "ethers";
import CloseIcon from '@mui/icons-material/Close';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { ComplaintContext} from "../context/complaint";
import { useNavigate } from 'react-router-dom';
const Profile=({openProfile,setOpenProfile,currentUser,balance})=>{
    const navigate=useNavigate();
    const [owner,setOwner]=useState();
    const [officer,setOfficer]=useState();
    const {isOfficer,isOwner}=useContext(ComplaintContext);
    const [allowed,setallowed]=useState(false);
    const navAdmin=async(address)=>{
       
        address=address.toString();
        address=address.toUpperCase();
        const officerAddress=await isOfficer();
        const ownerAddress=await isOwner();
        console.log(officerAddress);
        if(address===officerAddress.toUpperCase() || address==ownerAddress.toUpperCase()){   
            navigate('/officer');
        }
        else{
            console.log("You are not registered admin");
        }
       
    }
    useEffect(() => {
        return async () => {
            const ownerAddress= await isOwner();
            setOwner(ownerAddress);
            const officerAddress= await isOfficer();
            setOfficer(officerAddress);
            // console.log(ownerAddress);
            if(currentUser.toLowerCase()===officerAddress.toLowerCase() ||currentUser.toLowerCase()==ownerAddress.toLowerCase()){
                setallowed(true);
            }
            else{
                setallowed(false);
            }
        }
    })
    
 

    return openProfile?(
        <div className="fixed inset-0 z-10 overflow-y-auto">
        <div  className="fixed inset-0 w-full h-full bg-black opacity-40" onClick={()=>setOpenProfile(false)}>
        
        </div>
        <div className="flex item-center  px-4 py-14">
        <div className="relative w-full max-w-lg p-4 mx-auto bg-[#b0cbe1] rounded-md shadow-lg">
        <div className="flex justify-end">
            
         <button className=" text-gray-400 rounded-md hover:bg-gray-100" onClick={()=>setOpenProfile(false)}>
            <CloseIcon style={{color:"black"}}/>
         </button>
        </div>
        <div className="max-w-sm mx-auto  space-y-3 text-center">
            <div className="flex flex-col items-center ">
                <AccountCircleIcon style={{fontSize:"150px",color:"#172554"}}/>
            </div>
            <h5 className="mb-1 pb-3 text-xl font-medium text-gray-900 dark:text-black">
                Welcome Sir
            </h5>
            <span className="text-sm text-gray-900">
                {currentUser}
            </span>
            <div className="flex mt-4 justify-center gap-x-20 md:mt-6">
                <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-black rounded-lg border-4">
                    Balance : {balance.slice(0,5)} ETH
                </a>
                <button onClick={()=>navAdmin(currentUser)} className={`px-4 py-2 text-sm font-medium text-center text-white bg-[#172554] rounded-lg ${allowed?"block":"hidden"} `}>Login as Admin</button>
            </div>
        </div>
       
        
    
    </div>
    </div>
    </div>
    ):"";
}

export default Profile;