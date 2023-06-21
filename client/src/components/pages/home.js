import { ethers } from "ethers";
import { useState, useEffect, useContext } from "react";
import Navbar from "../navbar";
import CheckStatus from "../checkStatus";
import StatusTable from "../statusTable";
import FileComplaint from "../fileComplaint";
import Profile from "../profile";
import { ComplaintContext } from "../../context/complaint";
import img from "../../images/FileComplaint.png";
import img1 from "../../images/chekStatus.png";
import img2 from "../../images/graph_fir.png";
import img3 from "../../images/decentralised.png";
import img4 from "../../images/secure.png";
import img7 from "../../images/policeFIR.png";
import img9 from "../../images/arrestedHands.png";
import ImageSlider from "../imageSlider";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { useInView } from 'react-intersection-observer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
const Home = () => {
    const [openstatus, setOpenstatus] = useState(false);
    const [openProfile, setOpenProfile] = useState(false);
    const [openfile, setOpenfile] = useState(false);
    const [statusData, setstatusData] = useState();
    const [OpenTable, setOpenTable] = useState(false);
    const [balance, setbalance] = useState();
    const [showInfo, setShowInfo] = useState(false);
    const [owner,setOwner]=useState();
    const [officer,setOfficer]=useState();
    const { currentUser,connectWallet,isOwner,isOfficer } = useContext(ComplaintContext);
    const { ref: myRef, inView: myElementIsVisible } = useInView();
    const { ref: twoRef, inView: myElement2IsVisible } = useInView();
    const { ref: threeRef, inView: myElement3IsVisible } = useInView();
    
    const notifyi = () => toast.info("Connect your wallet before proceeding", {
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
            const ownerAddress=await isOwner();
            setOwner(ownerAddress.slice(0,5)+"..."+ownerAddress.slice(37,42));
            const officerAddress=await isOfficer();
            setOfficer(officerAddress.slice(0,5)+"..."+officerAddress.slice(37,42));
        }
    })
    const data = [
        {
            avtar: <AccountCircleIcon className="mx-auto md:mx-12" style={{fontSize:"200",color:"#172554",textAlign:"center"}}/>,
            post: "OWNER",
            address: owner,
        },
        {
            avtar: <AccountCircleIcon className="mx-auto md:mx-12" style={{fontSize:"200",color:"black",textAlign:"center"}}/>,
            post: "Officer",
            address: officer,
        },
    ];

    const openModelBox = (text) => {
        if (text == 1) {
            setOpenstatus(true);
        }

        else if (text == 2) {
            setOpenfile(true);
        }

    }
    useEffect(() => {
        async function listenMMAccount() {
            window.ethereum.on("accountsChanged", async function () {
                connectWallet();
            });
        }
        listenMMAccount();
    }, []);
    return (
        <div className="bg-[#96bbd9] ">

           <Navbar setOpenProfile={setOpenProfile} />
            <div className="h-[90vh] bg-gradient-to-r from-[#83c1f8] from-80%  border-b-4 shadow-xl  to-[#f8b18a] to-90%">
                <div className="h-full ">
                    <div className="flex  md:justify-around h-full   ">
                        <div className=" w-[30%] md:w-[32%]  md:mx-8 ml-2  mt-2 flex flex-col  ">
                            <div className=" border-4  hover:scale-110 transition ease-in-out border-[#cfd2d6] shadow-2xl bg-gradient-to-r from-[#58acf5] from-80%   to-[#f89662] to-90%  text-[#15264a] px-4 py-4 rounded-bl-[25%] rounded-tr-[25%] mt-[20%] h-min text-center font-bold  text-lg md:text-3xl">
                                Let The Punishment Fit The Crime
                            </div>
                            <div className="  mt-[20%]  text-center font-bold  text-lg md:text-4xl ">
                                ReportSAFE
                            </div>
                            <div className=" mt-[4%] text-center text-[#313434]  text-xs md:text-sm  ">
                                It is a safe and secure decentralised app for filing FIR
                               
                            </div>
                            <div onClick={notifyi} className="text-center text-white h-12 transition ease-in-out cursor-pointer font-bold flex flex-col justify-center text-lg md:text-xl w-2/3 px-2 py-2 bg-[#0e3157] rounded-xl shadow-2xl  mx-auto mt-[5%] hover:scale-110">
                                <a href="#home_section">Let's Start</a>
                                
                            </div>
                        </div>
                        <div className="w-[80%] md:w-[60%]  ">
                            <div className="  w-full h-full ">
                                <div className=" w-full  h-full  md:w-full">
                                    <div className="w-full  h-full flex  ">
                                        <img src={img7} className="w-full  h-full ml-4 md:w-full  " />
                                    </div>
                                </div>
                            </div>
                            <div className="text-center  md:mt-[-15%] mt-[-25%]">
                                <div class="animate-bounce  ... text-xl font-bold text-white">
                                    Scroll<br></br>
                                    <ArrowDownwardIcon />
                                </div>

                            </div>
                        </div>


                        <div className=" w-[28%] md:w-[30%] h-20 mr-2  md:mx-8 mt-20 md:h-[90%]">
                            <div className="h-min  hover:scale-110 transition ease-in-out text-lg py-4 px-4 text-center font-bold border-4 border-[#cfd2d6] shadow-2xl bg-gradient-to-r from-[#58acf5] from-80% text-[#15264a] mt-[-20%] to-[#f89662] to-90% rounded-br-[25%] rounded-tl-[25%]  ">
                                This app promises peace,justice and security to every individual
                            </div>
                            <div className="w-30  hover:scale-110 transition ease-in-out border-2 md:border-8 border-[#cfd2d6] md:h-64 bg-gradient-to-r from-[#76bcfa] from-50%   to-[#fa9057] to-50% rounded-b-full shadow-2xl md:w-64 mt-[20%]">
                                <img src={img9} className="hover:scale-110 transition ease-in-out h-[95%] w-[100%] mt-[-6%] " />
                            </div>
                        </div>
                    </div>



                </div>

            </div>
            <div id="home_section" ref={myRef} className={` bg-[#83afd4]  bg-gradient-to-r from-[#83c1f8] from-80%   to-[#f7a173] to-90% shadow-2xl mt-16 w-[95%] mx-auto rounded-3xl py-8 ${myElementIsVisible ? "animate-waving-hand" : ""}`}>
                <div className="text-center text-[#2e348c] font-bold text-3xl">
                    How do we help ?
                </div>
                <div className="text-center py-4 text-[#353538]  w-4/5 mx-auto">
                    Our DApp provides a decentralised and secure
                     solution of filing a FIR. It removes the need for 
                     intermediaries such as centralized authorities or agencies. 
                     This reduces bureaucracy, minimizes corruption risks,reduces delay and 
                     improves the efficiency of the FIR process.With seamless collaboration between different entities involved in the FIR process, such as law enforcement agencies, legal authorities, and victims.
                </div>
            </div>
            <div  className=" bg-[#83afd4]  bg-gradient-to-l from-[#83c1f8] from-80%   to-[#fdb994] to-90% mt-16 shadow-2xl py-8 flex justify-around w-[95%] mx-auto rounded-3xl">
            <div className="h-68 shadow-2xl rounded-[30%] w-2/5 md:w-1/5 py-[2%] px-[1%] " >
                    <div className="text-center text-lg my-2 mx-2">
                    File your complaint , don't hesitate to file as this is a decentralised network and your FIR is in safe hands. We will do the needfull

                    </div>
                    <div className="text-center h-12 w-[80%] mx-auto flex rounded-xl justify-center flex-col bg-[#172554] hover:scale-105 hover:bg-[#202d58] cursor-pointer  text-white text-xl font-bold "
                           onClick={() => openModelBox(2)}
                    >
                        <h2>
                            File FIR
                        </h2>
                    </div>
                </div>
                <div ref={twoRef} className={`h-60 w-2/5 md:w-1/5 flex justify-center flex-row ${myElement2IsVisible ? "animate-swipe-left" : ""}`} >
                    <img src={img} />
                </div>
            </div>
            
            <div  className=" bg-[#83afd4]  bg-gradient-to-r from-[#83c1f8] from-80%   to-[#fdb994] to-90% mt-16 shadow-2xl py-8 flex justify-around w-[95%] mx-auto rounded-3xl">
                
                <div ref={threeRef} className={`h-60 shadow-xl rounded-full w-2/5 md:w-1/5 flex justify-center flex-col bg-[#f1f8fa] ${myElement3IsVisible ? "animate-swipe-right" : ""}`} >
                    <img src={img1} className="h-56 w-3/4 mx-auto" />
                </div>
                <div className="h-68 shadow-2xl rounded-[30%] w-2/5 md:w-1/5 py-[2%] px-[1%] " >
                    <div className="text-center text-lg my-[2%] mx-2">
                        Check the status of your complaint is it Approved or is it resolved,just by adding the complaint Id you have.


                    </div>
                    <div className="text-center h-12 w-[80%]  hover:scale-105 hover:bg-[#202d58]  mx-auto cursor-pointer flex rounded-xl justify-center flex-col bg-[#172554]  text-white text-xl font-bold "
                           onClick={() => openModelBox(1)}
                    >
                        <h2>
                            Check Status
                        </h2>
                    </div>
                </div>
            </div>
            <div className=" bg-[#83afd4]  bg-gradient-to-l from-[#83c1f8] from-80%   to-[#fdb994] to-90% mt-16 shadow-2xl py-4 w-[95%] mx-auto rounded-3xl ">
                <div className="text-center text-[#2e348c] font-bold text-3xl mb-4 mt-4">
                    We Promise
                </div>

                <div className=" py-4    h-60 flex justify-around ">

                    <div id="0" onClick={() => setShowInfo((prev) => !prev)} className="shadow-md hover:shadow-2xl  cursor-pointer transition ease-in-out bg-[#b0cbe1] rounded-2xl w-1/5 ">


                        <div className={`text-center py-4 h-full w-full mx-auto flex-col ${showInfo ? "fixed opacity-0.3" : "flex  animate-swipe-drawer-left"} justify-center`}>
                            <img src={img3} className="h-4/5 w-4/5 mx-auto" />
                        </div>
                        <div className={`text-center bg-[#98bbd7] shadow-xl rounded-2xl  h-full text-xs md:text-lg w-full mx-auto ${showInfo ? "flex animate-swipe-drawer-left transition ease-in-out" : " hidden "} flex-col justify-center`}>
                            <div className="text-center font-bold text-sm md:text-lg ">Decentralised Web </div>
                            The Decentralise network prevents from corruption It also provide enhanced security as there is no single point of attack for hackers
                        </div>
                    </div>
                    <div id="1" onClick={(id) => setShowInfo((prev) => !prev)} className="shadow-md hover:shadow-2xl cursor-pointer transition ease-in-out bg-[#b0cbe1] rounded-2xl w-1/5 ">


                        <div className={`text-center py-4 h-full w-full mx-auto flex-col ${showInfo ? "fixed opacity-0.3" : "flex  animate-swipe-drawer-left"} justify-center`}>
                            <img src={img2} className="h-4/5 w-4/5 mx-auto" />
                        </div>
                        <div className={`text-center bg-[#98bbd7] shadow-xl rounded-2xl  h-full text-xs md:text-lg w-full mx-auto ${showInfo ? "flex animate-swipe-drawer-left transition ease-in-out" : " hidden "} flex-col justify-center`}>
                            <div className="text-center font-bold text-sm md:text-lg ">Crime Analysis</div>
                            The Decentralise network prevents from corruption It also provide enhanced security as there is no single point of attack for hackers
                        </div>
                    </div>
                    <div id="2" onClick={(id) => setShowInfo((prev) => !prev)} className="shadow-md cursor-pointer hover:shadow-2xl transition ease-in-out bg-[#b0cbe1] rounded-2xl w-1/5 ">


                        <div className={`text-center py-4 h-full w-full mx-auto flex-col ${showInfo ? "fixed opacity-0.3" : "flex  animate-swipe-drawer-left"} justify-center`}>
                            <img src={img4} className="h-4/5 w-4/5 mx-auto" />
                        </div>
                        <div className={`text-center bg-[#98bbd7]  shadow-xl rounded-2xl h-full text-xs md:text-lg w-full mx-auto ${showInfo ? "flex animate-swipe-drawer-left transition ease-in-out" : " hidden "} flex-col justify-center`}>
                            <div className="text-center font-bold text-sm md:text-lg ">Secure </div>
                            The Decentralise network prevents from corruption It also provide enhanced security as there is no single point of attack for hackers
                        </div>
                    </div>
                </div>
            </div>

            <ImageSlider data={data} />
            <CheckStatus openstatus={openstatus} setOpenstatus={setOpenstatus} setstatusData={setstatusData} setOpenTable={setOpenTable} />
            <StatusTable statusData={statusData} setOpenTable={setOpenTable} OpenTable={OpenTable} />
            <FileComplaint openfile={openfile} setOpenfile={setOpenfile} />
            <Profile
                openProfile={openProfile}
                setOpenProfile={setOpenProfile}
                currentUser={currentUser}
                balance={balance}
            />
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
export default Home;