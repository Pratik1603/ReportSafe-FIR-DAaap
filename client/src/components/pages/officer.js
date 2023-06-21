import { useState, useEffect, useContext } from "react";
import React from "react";
import PendingActionsIcon from '@mui/icons-material/PendingActions';
import RemoveDoneIcon from '@mui/icons-material/RemoveDone';
import ChecklistRtlIcon from '@mui/icons-material/ChecklistRtl';
import LogoutIcon from '@mui/icons-material/Logout';
import CheckAdmin from "../checkByIdAdmin";
import SideBar from "../sidebar";
import ApprovalPending from "../pendingApproval";
import { ComplaintContext } from "../../context/complaint";
import ResolutionPending from "../pendingResolution";
import SolvedComplaints from "../solvedComplaints";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Chart from "../chart";
import "./officer.css";
import { CircularProgressbar } from "react-circular-progressbar";
import HomeIcon from '@mui/icons-material/Home';
import ChangeOfficer from "../changeOfficer";
import { useNavigate } from "react-router-dom";

const Officer = () => {
    
   const navigate=useNavigate();
    const [state, setState] = useState(false);
    const [byId, setbyId] = useState(true);
    const { totalSolvedComplaints, getComplaintId, PendingApprovalComp, currentUser } = useContext(ComplaintContext);
    const [nosolved, setnosolved] = useState();
    const [total, settotal] = useState();
    const [pending, setPending] = useState();
    const [pendingApp, setpendingApp] = useState(false);
    const [pendingRes, setpendingRes] = useState(false);
    const [solvedComp, setsolvedComp] = useState(false);
    const [openchangeUser, setOpenchangeUser] = useState(false);
    useEffect(() => {
        const calc = async () => {
            const num = await totalSolvedComplaints();
            setnosolved(Number(num));
            const tot = await getComplaintId();
            settotal(Number(tot));
            const pendAppr = await PendingApprovalComp();
            setPending(Number(pendAppr.length));
        }
        calc();
    })
    const [isHoveringp, setIsHoveringp] = useState(false);
    const [isHoveringh, setIsHoveringh] = useState(false);
    const [isHoveringa, setIsHoveringa] = useState(false);
    const [isHoveringr, setIsHoveringr] = useState(false);
    const [isHoveringse, setIsHoveringse] = useState(false);
    const [isHoverings, setIsHoverings] = useState(false);

    const handleMouseOver = () => {
        setIsHoveringp(true);
    };

    const handleMouseOut = () => {
        setIsHoveringp(false);
    };
    const handleMouseOver1 = () => {
        setIsHoveringh(true);
    };

    const handleMouseOut1 = () => {
        setIsHoveringh(false);
    };
    const handleMouseOver2 = () => {
        setIsHoveringa(true);
    };

    const handleMouseOut2 = () => {
        setIsHoveringa(false);
    };

    const handleMouseOver3 = () => {
        setIsHoveringr(true);
    };

    const handleMouseOut3 = () => {
        setIsHoveringr(false);
    };
    const handleMouseOver4 = () => {
        setIsHoveringse(true);
    };

    const handleMouseOut4 = () => {
        setIsHoveringse(false);
    };
    const handleMouseOver5 = () => {
        setIsHoverings(true);
    };

    const handleMouseOut5 = () => {
        setIsHoverings(false);
    };

    return (
        <div>

            <div className="flex  bg-gradient-to-br from-[#6e9fca] from-80%  border-b-4 shadow-xl  to-[#bbebff] to-90%">

                <div className={` hidden md:w-[20%] md:block`}>
                    <SideBar solvedComp={solvedComp} pendingRes={pendingRes} pendingApp={pendingApp} setpendingApp={setpendingApp} setpendingRes={setpendingRes} setsolvedComp={setsolvedComp} byId={byId} setbyId={setbyId} />
                </div>
                <div className="w-10 bg-[#233c76] h-100vh flex flex-col justify-center gap-[5%] shadow-2xl rounded-xl md:hidden">

                    <div onMouseOver={() => handleMouseOver()}
                        onMouseOut={() => handleMouseOut()} className="mx-auto flex cursor-pointer">
                        < AccountCircleIcon sx={{ color: "white" }} />
                        {isHoveringp && (<span className="px-1 py-1  rounded-xl opacity-95 z-30 absolute h-min text-xs  bg-[#f1f1f3]   left-8">
                            Profile
                        </span>)}

                    </div>
                    <div onMouseOver={() => handleMouseOver1()} onClick={() => { setpendingRes(false); setpendingApp(false); setsolvedComp(false); setbyId(true) }}
                        onMouseOut={() => handleMouseOut1()} className="mx-auto flex cursor-pointer">
                        < HomeIcon sx={{ color: "white" }} />
                        {isHoveringh && (<span className="px-1 py-1 rounded-xl opacity-95 z-30 absolute h-min text-xs  bg-[#f1f1f3]   left-8">
                            Home
                        </span>)}

                    </div>
                    <div onMouseOver={() => handleMouseOver2()} onClick={() => { setpendingRes(false); setpendingApp(true); setsolvedComp(false); setbyId(false) }}
                        onMouseOut={() => handleMouseOut2()} className="mx-auto flex cursor-pointer">
                        < PendingActionsIcon sx={{ color: "white" }} />
                        {isHoveringa && (<span className="px-1 py-1 rounded-xl opacity-95 z-30 absolute h-min text-xs  bg-[#f1f1f3]   left-8">
                            Pending Approval
                        </span>)}

                    </div>
                    <div onMouseOver={() => handleMouseOver3()} onClick={() => { setpendingApp(false); setpendingRes(true); setsolvedComp(false); setbyId(false) }}
                        onMouseOut={() => handleMouseOut3()} className="mx-auto flex cursor-pointer">
                        < RemoveDoneIcon sx={{ color: "white" }} />
                        {isHoveringr && (<span className="px-1 py-1 rounded-xl opacity-95 z-30 absolute h-min text-xs  bg-[#f1f1f3]   left-8">
                            Pending Resolution
                        </span>)}

                    </div>
                    <div onMouseOver={() => handleMouseOver4()} onClick={() => { setpendingRes(false); setpendingApp(false); setsolvedComp(true); setbyId(false) }}
                        onMouseOut={() => handleMouseOut4()} className="mx-auto flex cursor-pointer">
                        < ChecklistRtlIcon sx={{ color: "white" }} />
                        {isHoveringse && (<span className="px-1 py-1 rounded-xl opacity-95 z-30 absolute h-min text-xs  bg-[#f1f1f3]   left-8">
                            Solved Cases
                        </span>)}

                    </div>
                    <div onMouseOver={() => handleMouseOver5()} onClick={()=>navigate('/')}
                        onMouseOut={() => handleMouseOut5()} className="mx-auto flex cursor-pointer">
                        <LogoutIcon sx={{ color: "white" }} />
                        {isHoverings && (<span className="px-1 py-1 rounded-xl opacity-95 z-30 absolute h-min text-xs  bg-[#f1f1f3]   left-8">
                            Sign Out
                        </span>)}

                    </div>


                </div>

                <div className={`${state ? "w-full" : "w-full"} md:w-4/5 ml-[1%]  h-[100vh] overflow-y-scroll`}>

                    <div className="mt-[3%]    flex justify-between">
                        <div className="font-bold text-xl mx-8 text-[#ffffff] ">
                            Welcome Sir !
                        </div>
                        <div >
                            <div className="bg-[#233c76] cursor-pointer hover:scale-105 trabsition ease-in-out shadow-xl px-4 py-2 mx-8 text-lg font-bold text-white rounded-3xl" onClick={() => setOpenchangeUser(true)}>
                                Change Officer
                            </div>
                        </div>
                    </div>
                    <div className="w-[90%] border-2 mt-[1%] border-[#213545] mx-auto opacity-75 "></div>
                    <div className=" h-44 w-full flex justify-evenly ">

                        <div className=" shadow-2xl  text-sm md:text-xl px-4 rounded-2xl font-bold  bg-gradient-to-t from-[#c6e0f7] from-80%    to-[#fcefe9] to-80% hover:scale-105 transition ease-in-out text-[#22317c] w-1/5 h-4/5 flex mt-4 flex-col justify-center text-center">
                            Total Complaints<br></br>
                            {total - 1}
                        </div>
                        <div className=" shadow-2xl text-sm md:text-xl px-4      rounded-2xl font-bold  bg-gradient-to-t from-[#c6e0f7] from-80%    to-[#fcefe9] to-80%  hover:scale-105 text-[#22317c] transition ease-in-out w-1/5 h-4/5 flex mt-4 flex-col justify-center text-center">
                            Pending Complaints
                            <br></br>
                            {pending}
                        </div>
                        <div className="shadow-2xl text-sm md:text-xl px-4 rounded-2xl font-bold  bg-gradient-to-t from-[#c6e0f7]  from-80%    to-[#fcefe9] to-80% text-[#22317c] w-1/5 h-4/5 flex mt-4 flex-col transition ease-in-out justify-center  hover:scale-105 text-center">
                            Solved Complaints
                            <br></br>
                            {nosolved}
                        </div>

                    </div>
                    <div className="w-full  flex h-64  ">
                        <div className="w-2/6  bg-gradient-to-b from-[#c6e0f7] from-80%    to-[#fcefe9] to-80% shadow-2xl rounded-3xl hover:scale-105 transition ease-in-out">
                            <div className="text-sm md:text-2xl font-bold  text-[#233c76] text-center mt-[5%]">
                                Solved Complaints %
                            </div>
                            <div className="circleProgressDiv mb-[15%] ">

                                <div className="w-[95%] h-[80%] mt-[4%] mx-auto flex flex-col justify-center "  ><CircularProgressbar value={(nosolved) / (total - 1) * 100} text={`${((nosolved) / (total - 1) * 100).toFixed(2)}%`} strokeWidth={7} /></div>

                            </div>
                        </div>
                        <div className=" w-[60%] mx-auto bg-gradient-to-b from-[#c6e0f7] from-80%    to-[#fcefe9] to-80% shadow-2xl rounded-3xl hover:scale-105 transition ease-in-out">
                            <Chart title="Crime Rate " aspect={2 / 1} />
                        </div>
                    </div>
                    <div className="w-[90%] border-2 mt-[4%] border-[#213545] mx-auto opacity-75 "></div>
                    <div>
                        {byId ? (<CheckAdmin />) : ""}
                        {pendingApp ? (<ApprovalPending pendingApp={pendingApp} />) : ""}
                        {pendingRes ? (<ResolutionPending />) : ""}
                        {solvedComp ? (<SolvedComplaints />) : ""}
                    </div>
                    <ChangeOfficer openchangeUser={openchangeUser} setOpenchangeUser={setOpenchangeUser} />
                </div>

            </div>
           
        </div>

    );
}


export default Officer;