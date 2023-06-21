
import React from "react";
import CloseIcon from '@mui/icons-material/Close';
const StatusTable=({statusData,setOpenTable,OpenTable})=>{
  
    
   
    return(
        OpenTable?(
         
            <div className="fixed right-10  top-5 w-2/4 z-10 overflow-y-auto">
            <div  className="fixed inset-0 w-full h-full bg-black opacity-40" onClick={()=>setOpenTable(false)}>
            
            </div>
            <div className="flex item-center  px-4 py-14">
            <div className="relative w-full max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg">
            <div className="flex justify-end">
                
             <button className="p-2 text-gray-400 rounded-md hover:bg-gray-100" onClick={()=>setOpenTable(false)} >
               <CloseIcon style={{color:"black"}}/>
             </button>
            </div>
    
            <div className="max-w-sm mx-auto py-3 space-y-3 text-center">
            <h4 className="text-lg font-bold text-gray-800">
                FIR Details
            </h4>
            <p className="text-[15px] text-gray-600">
            This is your FIR complaint , that you <br></br>entered the complaint Id
            </p>
          
            {!statusData?(<div>Sorry , We cant find any Complaint with the given Id , Pls check the Id entered</div>):(
                <div>
            <div className="flex justify-evenly ">
                <div className="font-bold text-lg w-2/4 text-left">
                    Id
                </div>
                <div className=" w-2/4 text-right">
                    {Number((statusData.id))}
                </div>
            </div>
            <div className="flex justify-evenly">
                <div className="font-bold text-lg w-2/4 text-left">
                    Registered By
                </div>
                <div className=" w-2/4 text-right">
                    {statusData.complaintRegisteredBy.slice(0,5)+'...'+statusData.complaintRegisteredBy.slice(38,42)}
                </div>
            </div>
             <div className="flex justify-evenly">
                <div className="font-bold text-lg w-2/4 text-left">
                    Title
                </div>
               
                <div className=" w-2/4 text-right">
                    {statusData.title}
                </div>
            </div>
            <div className="flex justify-evenly">
                <div className="font-bold text-lg w-2/4  text-left ">
                    Description
                </div>
                <div className=" w-2/4 text-right h-20 break-words overflow-y-auto">
                    {statusData.description}
                </div>
            </div>
            <div className="flex justify-evenly">
                <div className="font-bold text-lg w-2/4 text-left">
                    Approval Remark
                </div>
                <div className=" w-2/4 text-right">
                    {statusData.approvalRemark}
                </div>
            </div>
            <div className="flex justify-evenly">
                <div className="font-bold text-lg w-2/4 text-left">
                    Resolution Remark
                </div>
                <div className=" w-2/4 text-right">
                    {statusData.resolutionRemark}
                </div>
            </div>
            </div>
           
            )}
            
           
        </div>
        </div>
        </div>
        </div>
        ):
        ""
    )
}
export default StatusTable;