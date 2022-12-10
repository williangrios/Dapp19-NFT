// // SPDX-License-Identifier: MIT
// pragma solidity ^0.8.2;

// contract ERC721 {

//     //events
//     event ApprovalForAll(address indexed _owner, address indexed _operator, bool _approved);
//     event Approval(address indexed owner, address indexed  to,uint256 tokenId);
//     event Transfer(address indexed from,address indexed  to,uint256 tokenId );


//     mapping(address => uint256) internal _balances;
//     mapping (uint256 => address) internal _owners;
//     mapping (address => mapping (address => bool) ) private _operatorApprovals;
//     mapping (uint256 => address) private _tokenApprovals;

//     function balanceOf(address owner) public view returns(uint256){
//         require (owner != address(0), "Address cant be zero");
//         return _balances[owner];
//     }

//     function ownerOf(uint256 tokenId) public view returns(address){
//         address owner = _owners[tokenId];
//         require (owner != address(0), "Token id does not exist");
//         return owner;
//     }

//     function setApprovalForAll(address operator, bool approved) public {
//         _operatorApprovals[msg.sender][operator] = approved;
//         emit ApprovalForAll(msg.sender, operator, approved);
//     }

//     function isApprovalForAll(address owner, address operator) public view returns(bool) {
//         return _operatorApprovals[owner][operator];
//     }

//     function approve(address to, uint256 tokenId) public {
//         address owner = ownerOf(tokenId);
//         require(msg.sender == owner || isApprovalForAll(owner, msg.sender), "Msg.sender is not the owner or an approved operator");
//         _tokenApprovals[tokenId] = to;
//         emit Approval(owner, to, tokenId);
//     }

//     function getApproved(uint256 tokenId)  public view returns (address) {
//         require(_owners[tokenId] != address(0), "Token id does not exist");
//         return _tokenApprovals[tokenId];
//     }

//     function transferFrom(address from, address to, uint256 tokenId) public  {
//         address owner = ownerOf(tokenId);
//         require( owner == msg.sender || getApproved(tokenId) == msg.sender || isApprovalForAll(owner, msg.sender), "MSG.sender is not the owner or approved for transfer.");
//         require( owner == from, "From address is not the owner.");
//         require(to != address(0), "Address is zero");
//         require(_owners[tokenId] != address(0), "TokenId does not exist");

//         approve(address(0), tokenId);

//         _balances[from] -= 1;
//         _balances[to] += 1;
//         _owners[tokenId] = to;
//         emit Transfer(from, to, tokenId);
      
//     }

//     //Standard transferFrom
//     // Check if onERC721Received is implemented WHEN sending to smart contracts
//     function safeTransferFrom(address from, address to, uint256 tokenId, bytes memory _data) public {
//         transferFrom(from, to, tokenId);
//         require(_checkOnERC721Received() , "Receiver is not implemented");
//     }

//     function safeTransferFrom(address from, address to, uint256 tokenId) public {
//         safeTransferFrom(from, to, tokenId, "");
//     }

//     //oversimplified
//     function _checkOnERC721Received() private pure returns(bool){
//         return true;
//     }

//     //EIP165: Query if a contract implements another interface
//     //EIP 165: verifica quais funcionalidades um contrato tem/estão habilitadas
//     //Creates a standard method to publish and detect what interfaces a smart contract implements.
//     function supportsInterface(bytes4 interfaceId) public pure virtual  returns (bool) {
//         return interfaceId == 0x80ac58cd;
//     }

// }