import React from "react";
import { useState, useContext } from "react";
import { ComplaintContext } from "../context/complaint";
import CloseIcon from '@mui/icons-material/Close';
const FileComplaint = ({ openfile, setOpenfile }) => {
    const { fileComplaint, getComplaintId } = useContext(ComplaintContext);
    const [complaint, setcomplaint] = useState({
        title: "",
        description: "",
    })
    const [showId, setShowId] = useState(0);
    const file = async (complaint) => {
        if (await fileComplaint(complaint)) {
            const id = await getComplaintId();
            console.log("l");
            console.log(Number(id));
            setShowId(Number(id));
       
            console.log(showId);
        }

    }
    return (

        openfile ? (
            <div className="fixed inset-0 z-10 overflow-y-auto">
                <div className="fixed inset-0 w-full h-full bg-black opacity-40" onClick={() => setOpenfile(false)}>

                </div>
                <div className="flex item-center  px-4 py-14">
                    <div className="relative w-full max-w-lg p-4 mx-auto bg-[#b0cbe1] rounded-2xl shadow-lg">
                        <div className="flex justify-end">

                            <button className="p-2 text-gray-400 rounded-md hover:bg-gray-100" onClick={() => setOpenfile(false)} >
                                {<CloseIcon style={{color:"black"}}/>}
                            </button>
                        </div>

                        <div className="max-w-sm mx-auto py-3 space-y-3 text-center">
                            <h4 className="text-lg font-bold text-gray-800">
                                File Complaint
                            </h4>
                            <p className="text-[15px] text-gray-600">
                                File your complaint , don't hesitate to file as this is a decentralised network and your FIR is in safe hands. We will do the needfull <br></br>
                            </p>
                            {showId ? (<div className="text-lg font-bold text-gray-800 text-center">Your Complaint Id is <br></br> {showId}
                                <div onClick={() => { setOpenfile(false); setShowId(0) }} className="block w-4/5 mt-3 text-white mx-auto py-3 px-4 font-medium text-sm text-center  bg-[#15264a] hover:bg-indigo-500 activate:bg-indigo-700 rounded-lg ring-offset-2 ring-indigo-600 focus-ring-2">
                                    Close
                                </div>
                            </div>) : (
                                <form onSubmit={(e) => e.preventDefault()}>
                                    <div className="relative mt-3">
                                        <input type="text" onChange={(e) => setcomplaint({ ...complaint, title: e.target.value })} placeholder="Complaint Title" className="w-full pl-5 pr-3 py-2 text-black  bg-[#ecf1f5] outline-none border focus:border-indigo-600 shadow-sm rounded-lg" />


                                    </div>
                                    <div className="relative mt-3">
                                        <textarea type="text" onChange={(e) => setcomplaint({ ...complaint, description: e.target.value })} placeholder="Complaint Description" className="w-full pl-5 pr-3 py-2 text-black bg-[#ecf1f5] outline-none border focus:border-indigo-600 shadow-sm rounded-lg" />


                                    </div>

                                    <button onClick={() => file(complaint)} className="block w-full mt-3 py-3 px-4 font-medium text-sm text-center text-white bg-indigo-600 hover:bg-indigo-500 activate:bg-indigo-700 rounded-lg ring-offset-2 ring-indigo-600 focus-ring-2">
                                        File Your Complaint
                                    </button>

                                </form>
                            )}

                        </div>
                    </div>
                </div>
            </div>
        ) :
            ""
    )
}
export default FileComplaint;