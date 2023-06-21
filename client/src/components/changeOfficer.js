import React from "react";
import { useContext, useState, useEffect } from "react";
import { ComplaintContext } from "../context/complaint";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CloseIcon from '@mui/icons-material/Close';
const ChangeOfficer = ({ openchangeUser, setOpenchangeUser }) => {
    const [owner,setOwner]=useState();
    const { changeUser, connectWallet,currentUser,isOwner } = useContext(ComplaintContext);
    const [address, setaddress] = useState();
    const notify = () => toast.success('🦄 Wow so easy!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });
    const notifye = () => toast.error('Only the Owner is allowed to change the officer', {
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
            const ownerAddress= await isOwner();
            setOwner(ownerAddress);
        }
    })
    

    const changeOfficer = async (address) => {
        if(currentUser.toLowerCase()!=owner.toLowerCase()){
            notifye()
        }
        else{
            await changeUser(address);
            notify();
            setOpenchangeUser(false);
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
        openchangeUser ? (
            <div className="fixed inset-0 z-10 overflow-y-auto">
                <div className="fixed inset-0 w-full h-full bg-black opacity-40" onClick={() => setOpenchangeUser(false)} >

                </div>
                <div className="flex w-[40%] shadow-2xl h-min md:w-[25%] md:h-min item-center absolute right-10 top-20  ">
                    <div className="relative w-full max-w-lg mx-auto bg-[#b0cbe1] rounded-3xl shadow-lg pb-[2%] px-4 ">
                        <div className="flex justify-end">

                            <button className="p-1 text-gray-400 rounded-md hover:bg-gray-100" onClick={() => setOpenchangeUser(false)}  >
                                <CloseIcon style={{color:"black"}}/>
                            </button>
                        </div>

                        <div className="max-w-sm mx-auto  text-center">
                            <h4 className="text-lg font-bold text-[#172554] w-4/5 mx-auto">
                                Change Officer
                            </h4>
                            <p className="text-sm text-[#172554]">
                                Enter Address of Officer only can be done by higher official <br></br>
                            </p>

                            <form onSubmit={(e) => e.preventDefault()}>
                                <div className="relative mt-[3%]">
                                    <input type="text" onChange={(e) => setaddress(e.target.value)} placeholder="Officer Address" className="pl-[4%] pr-[4%] py-[2%] w-4/5 mx-auto text-black bg-white outline-none border focus:border-indigo-600 shadow-sm rounded-lg" />


                                </div>

                                <button className="block w-4/5 mx-auto mt-[3%] py-[4%] px-[4%] font-medium text-sm text-center text-white bg-indigo-600 hover:bg-indigo-500 activate:bg-indigo-700 rounded-lg ring-offset-2 ring-indigo-600 focus-ring-2" onClick={() => changeOfficer(address)}>
                                    Change Officer
                                </button>

                            </form>

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

        ) : ""

    )
}
export default ChangeOfficer;