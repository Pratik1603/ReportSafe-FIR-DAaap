import React, { useEffect } from "react";
import { useState, useContext } from "react";
import { ComplaintContext } from "../context/complaint";

const SolvedComplaints = ({}) => {
    const {SolvedComp,checkStatus}=useContext(ComplaintContext);
    const[pendingData,setpendingData]=useState();
    const [statusData, setstatusData] = useState();
    const [stateSelect,setstateSelect]=useState();
    const [id, setid] = useState();
    
    useEffect(()=>{
       const calc=async()=>{
            const data=await SolvedComp();
            await setpendingData(data);
       }
       calc();
    })

    const openComplaint=async(idx)=>{
        const Data = await checkStatus(idx);
        setid(idx);
        setstatusData(Data);
    }
    const select=(id)=>{
        setstateSelect(id);
    }
    return (
        <div className="flex ml-4">
            <div className="w-1/3 mt-[3%] h-min shadow-xl  bg-gradient-to-br from-[#c6e0f7] from-80%  to-[#fcefe9] to-80%  rounded-xl">
                <div className="max-w-sm mx-auto py-[5%] space-y-[5%] text-center text-lg font-bold text-gray-800" >
                    Solved Complaints
                    <br></br>
                    {pendingData?.length} Cases
                </div>
                <div key={id}  className={` h-min w-4/5 rounded-xl   mx-auto  flex justify-evenly`}>
                        <div className="  pl-[10%] w-2/4 font-bold flex flex-col text-xs text-[#172554]  md:text-lg justify-center">
                            Id  
                        </div>
                        <div className=" w-2/4 text-center mr-[35%] text-xs md:text-lg flex text-[#172554] flex-col justify-center font-bold ">
                            Title
                        </div>
                        </div>
                <div className="h-48 overflow-y-auto">
                    {pendingData?.map((data,id)=>(
                        <div key={id}  className={`border-2 h-12 w-4/5 rounded-xl shadow-xl border-[#172554] mx-auto my-2 flex justify-evenly hover:bg-[#172554]  hover:text-white ${stateSelect==id?"bg-[#172554] text-white ":""} `} onClick={()=>{openComplaint(Number(data.id));select(id)}}>
                        <div className="  pl-[10%] w-2/4 flex flex-col text-sm justify-center">
                           {Number(data.id)}    
                        </div>
                        <div className=" w-2/4  text-center mr-[20%] md:mar-[35%] text-xs md:text-sm flex flex-col justify-center font-bold ">
                            {data.title}
                        </div>
                        </div>
                    ))}



                </div>

            </div>
           
            <div className="w-[60%] mx-auto mb-[5%]  overflow-y-auto mt-[3%] h-min-[30%] shadow-xl  bg-gradient-to-br from-[#c6e0f7] from-80%  to-[#fcefe9] to-80%  rounded-xl">
                <div className="max-w-sm mx-auto py-3 space-y-3 text-center">
                    <h4 className="text-lg font-bold text-gray-800">
                        FIR Details
                    </h4>
                    <p className="text-[15px] text-gray-800">
                        This is your FIR complaint , that you <br></br>entered the complaint Id
                    </p>

                    {!statusData ? (<div className="text-gray-800 mt-[5%]">Sorry , We cant find any Complaint with the given Id , Pls check the Id entered</div>) : (
                        <div>
                            <div className="flex justify-evenly ">
                                <div className="font-bold text-lg w-2/4 text-left">
                                    Id
                                </div>
                                <div className=" w-2/4 text-right">
                                    {statusData?Number((statusData.id)):""}
                                </div>
                            </div>
                            <div className="flex justify-evenly">
                                <div className="font-bold text-lg w-2/4 text-left">
                                    Registered By
                                </div>
                                <div className=" w-2/4 text-right">
                                    {statusData?statusData.complaintRegisteredBy.slice(0,5)+'...'+statusData.complaintRegisteredBy.slice(38,42):""}
                                </div>
                            </div>
                            <div className="flex justify-evenly">
                                <div className="font-bold text-lg w-2/4 text-left">
                                    Title
                                </div>

                                <div className=" w-2/4 text-right">
                                    {statusData?statusData.title:""}
                                </div>
                            </div>
                            <div className="flex justify-evenly">
                                <div className="font-bold text-lg w-2/4  text-left ">
                                    Description
                                </div>
                                <div className=" w-2/4 text-right h-20 break-words overflow-y-auto">
                                    {statusData?statusData.description:""}
                                </div>
                            </div>
                            <div className="flex justify-evenly">
                                <div className="font-bold text-lg w-2/4 text-left">
                                    Approval Remark
                                </div>
                                <div className=" w-2/4 text-right">
                                    {statusData?statusData.approvalRemark:""}
                                </div>
                            </div>
                            <div className="flex justify-evenly">
                                <div className="font-bold text-lg w-2/4 text-left">
                                    Resolution Remark
                                </div>
                                <div className=" w-2/4 text-right">
                                    {statusData?statusData.resolutionRemark:""}
                                </div>
                            </div>
                            
                        </div>


                    )}


                </div>
            </div>
        </div>
    )
}
export default SolvedComplaints;