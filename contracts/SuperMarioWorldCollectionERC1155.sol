// //SPDX-License-Identifier: MIT
// pragma solidity ^0.8.2;

// import "@openzepellin/contract/token/ERC1155/ERC1155.sol";
// import "@openzepellin/contract/access/Ownable.sol";
// import "@openzepellin/contract/utils/Strings.sol";

// contract SuperMarioWorldCollectionERC1155 is ERC1155, Ownable{
//     string public name;
//     string public symbol;
//     uint256 public tokenCount;
//     string public baseUri;

//     constructor(string memory _name, string memory _symbol, string memory _baseUri ) ERC1155(_baseUri) {
//         name = _name;
//         symbol = _symbol;
//         baseUri = _baseUri;
//     }

//     function mint (uint256 amount) public onlyOwner {
//         tokenCount += 1;
//         _mint(msg.sender, tokenCount, amount, "");
//     }

//     function uri(uint256 tokenId) public view override returns (string memory){
//         //joining the strings
//         return string(
//             abi.encodePacked(baseUri, Strings.toString (_tokenId), ".json")
//         );
//     }

// }