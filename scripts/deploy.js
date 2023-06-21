// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
  // const [owner,officer,from1,from2]=await hre.ethers.getSigners();
  // const addresses=[owner.address,officer.address,from1.address,from2.address];
  // // consoleBalances(addresses);
  // const Complaint = await hre.ethers.getContractFactory("Complaint");
  // const contract= await Complaint.deploy();
  // await contract.deployed();                             
  // console.log("Contract is deployed at",contract.address);
  // console.log(officer.address);

  const Complaint=await hre.ethers.getContractFactory("Complaint");
  const contract=await Complaint.deploy("0x590610F83d3b98DfaD5a8144D8BBF3501C6123b1");
  await contract.deployed();
  console.log("Address of contaract:",contract.address);
  // await contract.connect(from1).fileComplaint("Crime","Serious");
  // console.log("complaint filed");
  // await contract.connect(from1).fileComplaint("Theft","Very serious");
  // console.log("complaint filed");
  // const complaint1=await contract.Complaints(1);
  // consoleComplaint(complaint1);
  // const complaint2=await contract.Complaints(2);
  // consoleComplaint(complaint2);

  // await contract.connect(officer).approveComplaint(1,"This is approved");
  // const complaint3=await contract.Complaints(1);
  // consoleComplaint(complaint3);
  // await contract.connect(from1).calcPendingApprovalIds();

// }
// async function consoleComplaint(complaint){
//     const id=complaint.id;
//     const address=complaint.complaintRegisteredBy;
//     const title=complaint.title;
//     const description=complaint.description;
//     const approvalMark=complaint.approvalRemark;
//     const resolutionMark=complaint.resolutionRemark;
//     const isApproved=complaint.isApproved;
//     const isResolved=complaint.isResolved;
//     const exists=complaint.exists;

//     console.log(`At id ${id},address ${address},title ${title},description ${description},approval mark ${approvalMark},resolution mark${resolutionMark},approved mark ${isApproved},is Resolved${isResolved},exists ${exists} `);
// }
// async function getBalances(address){
//     const balanceBigInt=await hre.ethers.provider.getBalance(address);
//     return hre.ethers.utils.formatEther(balanceBigInt);

// }
// async function consoleBalances(addresses){
//   let counter=0;
//   for(const address of addresses){
//       console.log(`Address ${counter} balance:`,await getBalances(address));
//       counter++;
//   }
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
