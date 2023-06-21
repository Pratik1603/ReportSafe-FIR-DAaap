import React from "react";
import { useState, useContext } from "react";
import { ComplaintContext } from "../context/complaint";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const CheckAdmin = () => {
    const { checkStatus,ApproveComplaint,DenyComplaint,ResolveComplaint } = useContext(ComplaintContext);
    const [id, setid] = useState();
    const [remark,setremark]=useState();
    const [statusData, setstatusData] = useState();
    
    const approveComplaint=async(idx,text)=>{
        if(await ApproveComplaint(idx,text)){
            console.log("Approved");
            document.getElementById("remark").value = "";
            document.getElementById("complaintid").value = "";
            notifya();
        }   
    
    }
    const denyComplaint=async(idx,text)=>{
        if(await DenyComplaint(idx,text)){
            console.log("Complaint Declined");
            document.getElementById("remark").value = "";
            document.getElementById("complaintid").value = "";
            
            notifyd();
        };
        
    }
    const resolveComplaint=async(idx,text)=>{
        if( await ResolveComplaint(idx,text)){
            console.log("Resolved");
            document.getElementById("remark").value = "";
            document.getElementById("complaintid").value = "";
            
            notifyr();
        }
       
       
    
    }
    const checksStatus = async (index) => {
        console.log(Number(index));
        const Data = await checkStatus(Number(index));

        setstatusData(Data);
    }
    const notifya = () => toast.success('Complaint Approved', {
        position: "top-right",
        autoClose: 10000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });
    const notifyr = () => toast.success('Complaint Resolved', {
        position: "top-right",
        autoClose: 10000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });
    const notifyd = () => toast.success('Complaint Discarded', {
        position: "top-right",
        autoClose: 10000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });

    return (

        <div className="flex mb-[5%]  ">
            <div className=" w-1/3 mt-[3%] h-min shadow-xl  bg-gradient-to-br from-[#c6e0f7] from-80%  to-[#fcefe9] to-80%  rounded-xl">
                <div className="max-w-sm mx-auto py-[5%] space-y-[5%] text-center">
                    <h4 className="text-lg font-bold text-gray-800">
                        Open FIR
                    </h4>
                    <p className="text-[15px] mx-[3%] text-gray-800">
                        You can open the desired FIR by inputing its ID<br></br>
                    </p>
                    <form onSubmit={(e) => e.preventDefault()}>
                        <div className="relative mt-[3%] w-4/5 mx-auto">
                            <input type="number" id="complaintid" onChange={(e) => setid(e.target.value)} placeholder="Complaint Id" className="w-full pl-5 pr-3 py-2 text-black bg-[#e5f0f8] outline-none border focus:border-indigo-600 shadow-xl rounded-lg" />
                        </div>

                        <button onClick={() => checksStatus(id)} className="block hover:scale-105 w-24 mt-[5%] mx-auto py-3 px-4 font-medium text-sm shadow-2xl text-center text-white bg-indigo-600 hover:bg-indigo-500 activate:bg-indigo-700 rounded-lg ring-offset-2 ring-indigo-600 focus-ring-2">
                            Open FIR
                        </button>

                    </form>
                </div>
            </div>
            
            <div className="w-[60%] mx-auto  overflow-y-auto mt-[3%] h-min-[30%] shadow-xl  bg-gradient-to-br from-[#c6e0f7] from-80%  to-[#fcefe9] to-80%  rounded-xl">
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
                                    {statusData ? Number((statusData.id)) : ""}
                                </div>
                            </div>
                            <div className="flex justify-evenly">
                                <div className="font-bold text-lg w-2/4 text-left">
                                    Registered By
                                </div>
                                <div className=" w-2/4 text-right">
                                    {statusData ? statusData.complaintRegisteredBy.slice(0, 5) + '...' + statusData.complaintRegisteredBy.slice(38, 42) : ""}
                                </div>
                            </div>
                            <div className="flex justify-evenly">
                                <div className="font-bold text-lg w-2/4 text-left">
                                    Title
                                </div>

                                <div className=" w-2/4 text-right">
                                    {statusData ? statusData.title : ""}
                                </div>
                            </div>
                            <div className="flex justify-evenly">
                                <div className="font-bold text-lg w-2/4  text-left ">
                                    Description
                                </div>
                                <div className=" w-2/4 text-right h-20 break-words overflow-y-auto">
                                    {statusData ? statusData.description : ""}
                                </div>
                            </div>
                            <div className="flex justify-evenly">
                                <div className="font-bold text-lg w-2/4 text-left">
                                    Approval Remark
                                </div>
                                <div className=" w-2/4 text-right">
                                    {statusData ? statusData.approvalRemark : ""}
                                </div>
                            </div>
                            <div className="flex justify-evenly">
                                <div className="font-bold text-lg w-2/4 text-left">
                                    Resolution Remark
                                </div>
                                <div className=" w-2/4 text-right">
                                    {statusData ? statusData.resolutionRemark : ""}
                                </div>
                            </div>
                            <div className="relative mt-5 w-4/5 mx-auto">
                            <input type="text" id="remark" onChange={(e) => setremark(e.target.value)} placeholder="Remark" className="w-full pl-5 pr-3 py-2 shadow-xl text-black bg-[#e5f0f8]  outline-none border focus:border-indigo-600 rounded-lg" />
                            </div>
                            <div className="flex justify-evenly mt-4">
                                <div onClick={()=>approveComplaint(id,remark)} className="cursor-pointer hover:scale-105 text-center h-10 w-20 flex rounded-xl justify-center flex-col bg-[#172554]  text-white text-sm font-bold "  >
                                    Approve
                                </div>
                                <div onClick={()=>denyComplaint(id,remark)} className="cursor-pointer hover:scale-105 text-center h-10 w-20 flex rounded-xl justify-center flex-col bg-[#172554]  text-white text-sm font-bold "  >
                                    Decline
                                </div>
                                <div onClick={()=>resolveComplaint(id,remark)} className={`cursor-pointer hover:scale-105 text-center h-10 w-20 flex rounded-xl justify-center flex-col bg-[#172554]  text-white text-sm font-bold `} >
                                    Resolved
                                </div>
                            </div>
                        </div>


                    )}


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
export default CheckAdmin