import React,{useState,useEffect} from "react";
import { ethers } from "ethers";
import abi from "../contract/Complaint.json";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const contractAddress="0xa0F7d2eDbc78888863B9ceA4d4BD469bA9B059Ec";
const contractAbi=abi.abi;

export const ComplaintContext=React.createContext();

export const ComplaintProvider =({children})=>{
    const DappName="Product Tracking Dapp";
    const { ethereum } = window;

    const notifye = () => toast.error("Something went wrong", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    const notifyi = () => toast.info("Please Connect your wallet", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
    });
    const notifyf = () => toast.success("Complaint Filed Successfully", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
    });
    const notifyc = () => toast.success("Your Desired compliant is here", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });
    const [allMonth,setAllmonth]=useState({data:[
        { name: "January", Total: 0 },
        { name: "February", Total: 0 },
        { name: "March", Total: 0 },
        { name: "April", Total: 0 },
        { name: "May", Total: 0 },
        { name: "June", Total: 0 },
        { name: "July", Total: 0 },
        { name: "August", Total: 0 },
        { name: "September", Total: 0 },
        { name: "October", Total: 0 },
        { name: "November", Total: 0 },
        { name: "December", Total: 0 },]
});
    // const toggleDone = (id) => {
    //     console.log(id);

       
    // const data = [
    //     { name: "January", Total: 1200 },
    //     { name: "February", Total: 2100 },
    //     { name: "March", Total: 800 },
    //     { name: "April", Total: 1600 },
    //     { name: "May", Total: 900 },
    //     { name: "June", Total: 1700 },
    //   ];
      
    const [currentUser,setCurrentUser]=useState("");
    const totalSolvedComplaints=async()=>{
        const {ethereum} = window;
        
        const provider=new ethers.providers.Web3Provider(ethereum);
        const signer=provider.getSigner();
        const contract=new ethers.Contract(contractAddress,contractAbi,signer);
        const number=await contract.noSolvedComplaint();
     
        return number;
    }
    const PendingApprovalComp=async()=>{
        const {ethereum} = window;
        const provider=new ethers.providers.Web3Provider(ethereum);
        const signer=provider.getSigner();
        const contract=new ethers.Contract(contractAddress,contractAbi,signer);
        const data=await contract.getAllPendingApprovals();
        // console.log(data);
        return data;
    }
    const PendingResolutionComp=async()=>{
        const {ethereum} = window;
        const provider=new ethers.providers.Web3Provider(ethereum);
        const signer=provider.getSigner();
        const contract=new ethers.Contract(contractAddress,contractAbi,signer);
        const data=await contract.getAllNotResolvedComplaint();
        return data;
    }
    const SolvedComp=async()=>{
        const {ethereum} = window;
        const provider=new ethers.providers.Web3Provider(ethereum);
        const signer=provider.getSigner();
        const contract=new ethers.Contract(contractAddress,contractAbi,signer);
        const data=await contract.getSolvedComplaints();
        return data;
    }

    const changeUser=async(address)=>{
        const {ethereum} = window;
        const provider=new ethers.providers.Web3Provider(ethereum);
        const signer=provider.getSigner();
        const contract=new ethers.Contract(contractAddress,contractAbi,signer);
        const data=await contract.setOfficerAddress(address);
       
        return data;
    }
    const DiscardedComp=async()=>{
        try{
            const {ethereum} = window;
        const provider=new ethers.providers.Web3Provider(ethereum);
        const signer=provider.getSigner();
        const contract=new ethers.Contract(contractAddress,contractAbi,signer);
        const data=await contract.getDiscardedComplaints();
        return data;
        }
        catch(e){
            notifye();
        }
        
    }
    const getComplaintId=async()=>{
        const {ethereum} = window;
        const provider=new ethers.providers.Web3Provider(ethereum);
        const signer=provider.getSigner();
        const contract=new ethers.Contract(contractAddress,contractAbi,signer);
        const complaintId=contract.nextId();
        return complaintId;
    }
   
 
    const isOwner=async()=>{
        
        const {ethereum} = window;
        const provider=new ethers.providers.Web3Provider(ethereum);
        const signer=provider.getSigner();
        const contract=new ethers.Contract(contractAddress,contractAbi,signer);
        let ownerAddress=await contract.owner();
        ownerAddress=ownerAddress.toString();
        return ownerAddress;
        
        
    }
    const isOfficer=async()=>{
        
        const {ethereum} = window;
        const provider=new ethers.providers.Web3Provider(ethereum);
        const signer=provider.getSigner();
        const contract=new ethers.Contract(contractAddress,contractAbi,signer);
        let officerAddress=await contract.officer();
        officerAddress=officerAddress.toString();
        return officerAddress;
    }
    const fileComplaint=async(complaint)=>{
        try{ const {title,description}=complaint;
        const {ethereum} = window;
        const provider=new ethers.providers.Web3Provider(ethereum);
        const signer=provider.getSigner();
        const contract=new ethers.Contract(contractAddress,contractAbi,signer);
        console.log(contract);
        await contract.fileComplaint(title,description);
        console.log("Filed");
        notifyf();
        return true;
    }
        catch(e){
            notifye();
        }
       
    }
    const checkStatus=async(id)=>{
        try{
            const {ethereum} = window;
            const provider=new ethers.providers.Web3Provider(ethereum);
            const signer=provider.getSigner();
            const contract=new ethers.Contract(contractAddress,contractAbi,signer);
            console.log(contract)
            const complaints=await contract.Complaints(id);  
            notifyc();
            return complaints;

        }
        catch(e){
            notifye();
            
        }
    }
    const ApproveComplaint=async(id,remark)=>{
        try{
            const {ethereum} = window;
            const provider=new ethers.providers.Web3Provider(ethereum);
            const signer=provider.getSigner();
            const contract=new ethers.Contract(contractAddress,contractAbi,signer);
            console.log(contract)
            await contract.approveComplaint(id,remark);  
            return true;
        }
        catch(e){
            notifye();
        }
    }
    const DenyComplaint=async(id,remark)=>{
        try{
            const {ethereum} = window;
            const provider=new ethers.providers.Web3Provider(ethereum);
            const signer=provider.getSigner();
            const contract=new ethers.Contract(contractAddress,contractAbi,signer);
            console.log(contract)
            await contract.discardComplaint(id,remark);  
            return true;
        }
        catch(e){
            notifye();
        }
    }
    const ResolveComplaint=async(id,remark)=>{
        try{
            const {ethereum} = window;
            const provider=new ethers.providers.Web3Provider(ethereum);
            const signer=provider.getSigner();
            const contract=new ethers.Contract(contractAddress,contractAbi,signer);
            console.log(contract)
            await contract.resolveComplaint(id,remark);  
            return true;
        }
        catch(e){
            notifye();
        }
    }
    const checkifWalletConnected=async()=>{
        try{
            if(!window.ethereum){
                console.log("l");
                return "Install Metamask";
            }
            const accounts=await window.ethereum.request({
                method:"eth_accounts",
            });

            if(accounts.length){
                setCurrentUser(accounts[0]);
            }
            else{
                notifyi();
                return "No Account";
            }

        }
        catch(e){
           return "not Connected";
        }
    };
    
    const connectWallet=async()=>{
       
        try{
            if(!window.ethereum){
                return "Install Metamask";
            }
            const accounts=await window.ethereum.request({
                method:"eth_requestAccounts",
            });
           

            setCurrentUser(accounts[0]);

        }
        catch(e){
           return "Something Went wrong";
        }
    };

    useEffect(()=>{
        checkifWalletConnected();
    },[]);
    return(
        <ComplaintContext.Provider
          value={{
            connectWallet,
            DappName,
            currentUser,
            checkStatus,
            fileComplaint,
            isOfficer,
            ApproveComplaint,
            DenyComplaint,
            ResolveComplaint,
            getComplaintId,
            PendingResolutionComp,
            SolvedComp,
            DiscardedComp,
            PendingApprovalComp,
            totalSolvedComplaints,
            changeUser,
            isOwner,
            // getMonthfromTime,
          }}
        >
            {children}
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
        </ComplaintContext.Provider>
    );
}
