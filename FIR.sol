// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

contract Complaint {
    address public officer;
    address public owner;
    uint256 public nextId;
    uint256 public noApprovedComplaint;
    uint256 public noSolvedComplaint;
    uint256 public noDiscardComplaint;
   
    constructor(address _officer) {
        owner = msg.sender;
        officer = _officer;
        nextId = 1;
        noApprovedComplaint=0;
        noSolvedComplaint=0;
        noDiscardComplaint=0;
    }

    modifier onlyOwner() {
        require(
            msg.sender == owner,
            "You are not the owner of this smart contract"
        );
        _;
    }

    modifier onlyOfficer() {
        require(
            msg.sender == officer,
            "You are not registered officer of this smart contract"
        );
        _;
    }

    struct complaint {
        uint256 id;
        address complaintRegisteredBy;
        string title;
        string description;
        string approvalRemark;
        string resolutionRemark;
        bool isApproved;
        bool isResolved;
        bool exists;
        uint timestamp;
    }
    mapping(uint256 => complaint) public Complaints;
    complaint[] pendingApprovals;
    complaint[] pendingResolutions;
    complaint[] solvedComplaints;
    complaint[] discardComplaints;
    event complaintFiled(
        uint256 id,
        address complaintRegisteredBy,
        string title
    );

    function fileComplaint(string memory _title, string memory _description)
        public
    {
        complaint storage newComplaint = Complaints[nextId];
        newComplaint.id = nextId;
        newComplaint.complaintRegisteredBy = msg.sender;
        newComplaint.title = _title;
        newComplaint.description = _description;
        newComplaint.approvalRemark = "Pending Approval";
        newComplaint.resolutionRemark = "Pending Resolution";
        newComplaint.isApproved = false;
        newComplaint.isResolved = false;
        newComplaint.exists = true;
        newComplaint.timestamp=block.timestamp;
        pendingApprovals.push(newComplaint);
        pendingResolutions.push(newComplaint);
        emit complaintFiled(nextId, msg.sender, _title);
        nextId++;
    }

    function approveComplaint(uint256 _id, string memory _approvalRemark)
        public
        onlyOfficer
    {
        require(
            Complaints[_id].exists == true,
            "This complaint id does not exist"
        );
        require(
            Complaints[_id].isApproved == false,
            "Complaint is already approved"
        );
        Complaints[_id].isApproved = true;
        delete pendingApprovals;
        for (uint256 i = 1; i < nextId; i++) {
            if (
                Complaints[i].isApproved == false &&
                Complaints[i].exists == true
            ) {
                pendingApprovals.push(Complaints[i]);
            }
        }
        Complaints[_id].approvalRemark = _approvalRemark;
        noApprovedComplaint++;
    }

    function discardComplaint(uint256 _id, string memory _approvalRemark)
        public
        onlyOfficer
    {
        require(
            Complaints[_id].exists == true,
            "This complaint id does not exist"
        );
        require(
            Complaints[_id].isApproved == false,
            "Complaint is already approved"
        );
        Complaints[_id].exists = false;
        delete discardComplaints;
        for (uint256 i = 1; i < nextId; i++) {
            if (
                Complaints[i].exists == false
            ) {
                discardComplaints.push(Complaints[i]);
            }
        }
        delete pendingApprovals;
        for (uint256 i = 1; i < nextId; i++) {
            if (
                Complaints[i].isApproved == false &&
                Complaints[i].exists == true
            ) {
                pendingApprovals.push(Complaints[i]);
            }
        }
        Complaints[_id].approvalRemark = _approvalRemark;
        noDiscardComplaint++;
    }

    function resolveComplaint(uint256 _id, string memory _resolutionRemark)
        public
        onlyOfficer
    {
        require(
            Complaints[_id].exists == true,
            "This complaint id does not exist"
        );
        require(
            Complaints[_id].isApproved == true,
            "Complaint is not yet approved"
        );
        require(
            Complaints[_id].isResolved == false,
            "Complaint is already resolved"
        );
        Complaints[_id].isResolved = true;
        delete pendingResolutions;
        for (uint256 i = 1; i < nextId; i++) {
            if (
                Complaints[i].isResolved == false &&
                Complaints[i].exists == true
            ) {
                pendingResolutions.push(Complaints[i]);
            }
        }
        delete solvedComplaints;
        for (uint256 i = 1; i < nextId; i++) {
            if (
                Complaints[i].isResolved ==true &&
                Complaints[i].exists == true
            ) {
                solvedComplaints.push(Complaints[i]);
            }
        }
        Complaints[_id].resolutionRemark = _resolutionRemark;
        noSolvedComplaint++;
    }


    function getMonth(uint id) public view returns(uint){
        return Complaints[id].timestamp;
    }

    function getAllPendingApprovals() public view returns(complaint[] memory){
        return pendingApprovals;
    }
    function getAllNotResolvedComplaint() public view returns(complaint[] memory){
        return pendingResolutions;
    }
    function getSolvedComplaints() public view returns(complaint[] memory){
        return solvedComplaints;
    }
    function getDiscardedComplaints() public view returns(complaint[] memory){
        return discardComplaints;
    }
    function setOfficerAddress(address _officer) public onlyOwner {
        officer = _officer;
    }
}
