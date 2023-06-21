import React from "react";
import { useState,useContext } from "react";
import { ComplaintContext } from "../context/complaint";
import CloseIcon from '@mui/icons-material/Close';
const CheckStatus=({openstatus,setOpenstatus,setstatusData,setOpenTable})=>{
   
    const {checkStatus}=useContext(ComplaintContext);
    const[id,setid]=useState();
    const checksStatus=async(index)=>{
        console.log(Number(index));
        const statusData=await checkStatus(Number(index));
        setstatusData(statusData);
        setOpenstatus(false);
        setOpenTable(true);
        console.log(statusData);
    }
    return(

        openstatus?(
            <div className="fixed inset-0 z-10 overflow-y-auto">
            <div  className="fixed inset-0 w-full h-full bg-black opacity-40" onClick={()=>setOpenstatus(false)}>
            
            </div>
            <div className="flex item-center  px-4 py-14">
            <div className="relative w-full max-w-lg p-4 mx-auto bg-[#b0cbe1] rounded-md shadow-lg">
            <div className="flex justify-end">
                
             <button className="p-2 text-gray-400 rounded-md hover:bg-gray-100" onClick={()=>setOpenstatus(false)} >
                <CloseIcon style={{color:"black"}}/>
             </button>
            </div>
    
            <div className="max-w-sm mx-auto py-3 space-y-3 text-center">
            <h4 className="text-lg font-bold text-gray-800">
                Check Status
            </h4>
            <p className="text-[15px] text-gray-600">
            You can check the status of your FIR by adding the complaint id<br></br>
            </p>
            <form onSubmit={(e)=>e.preventDefault()}>
                <div className="relative mt-3">
                    <input type="number" onChange={(e)=>setid(e.target.value)} placeholder="Complaint Id" className="w-full pl-5 pr-3 py-2 text-black bg-[#ecf1f5] outline-none border focus:border-indigo-600 shadow-sm rounded-lg" />
                    
                  
                </div>
             
                <button onClick={()=>checksStatus(id)} className="block w-full mt-3 py-3 px-4 font-medium text-sm text-center text-white bg-indigo-600 hover:bg-indigo-500 activate:bg-indigo-700 rounded-lg ring-offset-2 ring-indigo-600 focus-ring-2">
                        Check Status
                </button>
    
            </form>
        </div>
        </div>
        </div>
        </div>
        ):
        ""
    )
}
export default CheckStatus;