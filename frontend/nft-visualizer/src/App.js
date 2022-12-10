import styled from 'styled-components';
import { NFTCard } from './components/NFTCard';
import {useState, useEffect} from "react";
import { NFTModal } from './components/NFTModal';
import {ethers} from "ethers";
import { connect } from './helpers';

import WRHeader from 'wrcomponents/dist/WRHeader';
import WRSimpleFooter from 'wrcomponents/dist/WRSimpleFooter';
import WRContent from 'wrcomponents/dist/WRContent';
import WRTools from 'wrcomponents/dist/WRTools';

import {ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//import abiArtifacts from "./artifacts/contracts/SuperMarioWorldOZ.sol/SuperMarioWorldOZ.json";

const axios = require ("axios");

function App() {
  
  const rpc = "https://eth-goerli.g.alchemy.com/v2/nWBr-TblWJsjiT3l6_4LX9nH1-IORPya";
  const ethersProvider = new ethers.providers.JsonRpcProvider(rpc);
  const contractAddress = "0xB836cfd34635a326508322E6c249D3644197bA4b";

  const abi = [
    "function symbol() public view returns(string memory)",
    "function name() public view returns(string memory)",
    "function tokenCount() public view returns(uint256)",
    "function mint(string memory _TokenUri) public",
    "function ownerOf(uint256 _tokenId) public view returns(address)",

    "function uri(uint256 _tokenId) public view returns(string memory)",
    "function balanceOfBatch(address[] accounts, uint256[] ids) public view returns(uint256[] memory)",
  ]

  // const abi = [
  //   {
  //     "inputs": [
  //       {
  //         "internalType": "string",
  //         "name": "_name",
  //         "type": "string"
  //       },
  //       {
  //         "internalType": "string",
  //         "name": "_symbol",
  //         "type": "string"
  //       }
  //     ],
  //     "stateMutability": "nonpayable",
  //     "type": "constructor"
  //   },
  //   {
  //     "anonymous": false,
  //     "inputs": [
  //       {
  //         "indexed": true,
  //         "internalType": "address",
  //         "name": "owner",
  //         "type": "address"
  //       },
  //       {
  //         "indexed": true,
  //         "internalType": "address",
  //         "name": "approved",
  //         "type": "address"
  //       },
  //       {
  //         "indexed": true,
  //         "internalType": "uint256",
  //         "name": "tokenId",
  //         "type": "uint256"
  //       }
  //     ],
  //     "name": "Approval",
  //     "type": "event"
  //   },
  //   {
  //     "anonymous": false,
  //     "inputs": [
  //       {
  //         "indexed": true,
  //         "internalType": "address",
  //         "name": "owner",
  //         "type": "address"
  //       },
  //       {
  //         "indexed": true,
  //         "internalType": "address",
  //         "name": "operator",
  //         "type": "address"
  //       },
  //       {
  //         "indexed": false,
  //         "internalType": "bool",
  //         "name": "approved",
  //         "type": "bool"
  //       }
  //     ],
  //     "name": "ApprovalForAll",
  //     "type": "event"
  //   },
  //   {
  //     "anonymous": false,
  //     "inputs": [
  //       {
  //         "indexed": true,
  //         "internalType": "address",
  //         "name": "from",
  //         "type": "address"
  //       },
  //       {
  //         "indexed": true,
  //         "internalType": "address",
  //         "name": "to",
  //         "type": "address"
  //       },
  //       {
  //         "indexed": true,
  //         "internalType": "uint256",
  //         "name": "tokenId",
  //         "type": "uint256"
  //       }
  //     ],
  //     "name": "Transfer",
  //     "type": "event"
  //   },
  //   {
  //     "inputs": [
  //       {
  //         "internalType": "address",
  //         "name": "to",
  //         "type": "address"
  //       },
  //       {
  //         "internalType": "uint256",
  //         "name": "tokenId",
  //         "type": "uint256"
  //       }
  //     ],
  //     "name": "approve",
  //     "outputs": [],
  //     "stateMutability": "nonpayable",
  //     "type": "function"
  //   },
  //   {
  //     "inputs": [
  //       {
  //         "internalType": "address",
  //         "name": "owner",
  //         "type": "address"
  //       }
  //     ],
  //     "name": "balanceOf",
  //     "outputs": [
  //       {
  //         "internalType": "uint256",
  //         "name": "",
  //         "type": "uint256"
  //       }
  //     ],
  //     "stateMutability": "view",
  //     "type": "function"
  //   },
  //   {
  //     "inputs": [
  //       {
  //         "internalType": "uint256",
  //         "name": "tokenId",
  //         "type": "uint256"
  //       }
  //     ],
  //     "name": "getApproved",
  //     "outputs": [
  //       {
  //         "internalType": "address",
  //         "name": "",
  //         "type": "address"
  //       }
  //     ],
  //     "stateMutability": "view",
  //     "type": "function"
  //   },
  //   {
  //     "inputs": [
  //       {
  //         "internalType": "address",
  //         "name": "owner",
  //         "type": "address"
  //       },
  //       {
  //         "internalType": "address",
  //         "name": "operator",
  //         "type": "address"
  //       }
  //     ],
  //     "name": "isApprovedForAll",
  //     "outputs": [
  //       {
  //         "internalType": "bool",
  //         "name": "",
  //         "type": "bool"
  //       }
  //     ],
  //     "stateMutability": "view",
  //     "type": "function"
  //   },
  //   {
  //     "inputs": [
  //       {
  //         "internalType": "string",
  //         "name": "tokenURI",
  //         "type": "string"
  //       }
  //     ],
  //     "name": "mint",
  //     "outputs": [
  //       {
  //         "internalType": "uint256",
  //         "name": "",
  //         "type": "uint256"
  //       }
  //     ],
  //     "stateMutability": "nonpayable",
  //     "type": "function"
  //   },
  //   {
  //     "inputs": [],
  //     "name": "name",
  //     "outputs": [
  //       {
  //         "internalType": "string",
  //         "name": "",
  //         "type": "string"
  //       }
  //     ],
  //     "stateMutability": "view",
  //     "type": "function"
  //   },
  //   {
  //     "inputs": [
  //       {
  //         "internalType": "uint256",
  //         "name": "tokenId",
  //         "type": "uint256"
  //       }
  //     ],
  //     "name": "ownerOf",
  //     "outputs": [
  //       {
  //         "internalType": "address",
  //         "name": "",
  //         "type": "address"
  //       }
  //     ],
  //     "stateMutability": "view",
  //     "type": "function"
  //   },
  //   {
  //     "inputs": [
  //       {
  //         "internalType": "address",
  //         "name": "from",
  //         "type": "address"
  //       },
  //       {
  //         "internalType": "address",
  //         "name": "to",
  //         "type": "address"
  //       },
  //       {
  //         "internalType": "uint256",
  //         "name": "tokenId",
  //         "type": "uint256"
  //       }
  //     ],
  //     "name": "safeTransferFrom",
  //     "outputs": [],
  //     "stateMutability": "nonpayable",
  //     "type": "function"
  //   },
  //   {
  //     "inputs": [
  //       {
  //         "internalType": "address",
  //         "name": "from",
  //         "type": "address"
  //       },
  //       {
  //         "internalType": "address",
  //         "name": "to",
  //         "type": "address"
  //       },
  //       {
  //         "internalType": "uint256",
  //         "name": "tokenId",
  //         "type": "uint256"
  //       },
  //       {
  //         "internalType": "bytes",
  //         "name": "data",
  //         "type": "bytes"
  //       }
  //     ],
  //     "name": "safeTransferFrom",
  //     "outputs": [],
  //     "stateMutability": "nonpayable",
  //     "type": "function"
  //   },
  //   {
  //     "inputs": [
  //       {
  //         "internalType": "address",
  //         "name": "operator",
  //         "type": "address"
  //       },
  //       {
  //         "internalType": "bool",
  //         "name": "approved",
  //         "type": "bool"
  //       }
  //     ],
  //     "name": "setApprovalForAll",
  //     "outputs": [],
  //     "stateMutability": "nonpayable",
  //     "type": "function"
  //   },
  //   {
  //     "inputs": [
  //       {
  //         "internalType": "bytes4",
  //         "name": "interfaceId",
  //         "type": "bytes4"
  //       }
  //     ],
  //     "name": "supportsInterface",
  //     "outputs": [
  //       {
  //         "internalType": "bool",
  //         "name": "",
  //         "type": "bool"
  //       }
  //     ],
  //     "stateMutability": "view",
  //     "type": "function"
  //   },
  //   {
  //     "inputs": [],
  //     "name": "symbol",
  //     "outputs": [
  //       {
  //         "internalType": "string",
  //         "name": "",
  //         "type": "string"
  //       }
  //     ],
  //     "stateMutability": "view",
  //     "type": "function"
  //   },
  //   {
  //     "inputs": [
  //       {
  //         "internalType": "uint256",
  //         "name": "tokenId",
  //         "type": "uint256"
  //       }
  //     ],
  //     "name": "tokenURI",
  //     "outputs": [
  //       {
  //         "internalType": "string",
  //         "name": "",
  //         "type": "string"
  //       }
  //     ],
  //     "stateMutability": "view",
  //     "type": "function"
  //   },
  //   {
  //     "inputs": [
  //       {
  //         "internalType": "address",
  //         "name": "from",
  //         "type": "address"
  //       },
  //       {
  //         "internalType": "address",
  //         "name": "to",
  //         "type": "address"
  //       },
  //       {
  //         "internalType": "uint256",
  //         "name": "tokenId",
  //         "type": "uint256"
  //       }
  //     ],
  //     "name": "transferFrom",
  //     "outputs": [],
  //     "stateMutability": "nonpayable",
  //     "type": "function"
  //   }
  // ];
  
  let nftCollection = null;
  let nftSigner = null;

  const [showModal, setShowModal] = useState( false);
  const [selectedNft, setSelectedNft] = useState();

  const [nftsSymbol, setNftsSymbol] = useState();
  const [nftsName, setNftsName] = useState();
  const [allNftsMintedCount, setAllNftsMintedCount] = useState();
  //const [userNftsMintedCount, setUserNftsMintedCount] = useState();
  const[allNfts, setAllNfts] = useState([])
  const[allNftsUser, setAllNftsUser] = useState([])
  const totalSupply = 8;

  const [userAddress, setUserAddress] = useState('');

  function getProvider(){
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    if (nftCollection == null){
      nftCollection = new ethers.Contract(contractAddress, abi, provider)
    }
    if (nftSigner == null){
      nftSigner = new ethers.Contract(contractAddress, abi, provider.getSigner());
    }
  }

  async function getContractData () {
    getProvider()
     
    setNftsSymbol(await nftCollection.symbol());
    setNftsName(await nftCollection.name());
    setAllNftsMintedCount((await nftCollection.tokenCount()).toString());

    if (userAddress != ""){
      getNfts(userAddress);
    }
    getNfts("");
  }

  useEffect(() => {

    getContractData()
    getNfts()
  
  }, [userAddress])

  function toastMessage(text) {
    toast.info(text)  ;
  }

  function toggleModal(i, all_user){
    if (i>=0){
      if (all_user == "all"){
        setSelectedNft(allNfts[i]);
      }else{
        setSelectedNft(allNftsUser[i]);
      }
      
    }
    setShowModal(!showModal);
  }

  async function handleConnect(){
    getProvider()
    setUserAddress(await connect());
  }

  async function mint(){
    getProvider()
    await nftSigner.mint(`https://gateway.pinata.cloud/ipfs/QmR7YxBTrVQCwW6B4wJVgP3KaRrjjZARquL7eJnDkkZM85/${allNftsMintedCount}.json`);
    toastMessage(`Minted nº${parseInt( allNftsMintedCount) + 1}`);
  }
  
  async function getMetadataFromIpfs(tokenURI){
    const res = await fetch(tokenURI).then((response) => response.json())
    return res;
  }

  async function getNfts(address) {
    let arrayUserNfts = [];
    let arrayAllCollection = [];

    for(let i = 1 ; i <= allNftsMintedCount; i++){
      let metadata = `https://gateway.pinata.cloud/ipfs/QmR7YxBTrVQCwW6B4wJVgP3KaRrjjZARquL7eJnDkkZM85/${i}.json`;
      const respMetadata = await getMetadataFromIpfs( metadata)
      const respAd1 = await nftCollection.ownerOf(i);  

      if (address != ''){
        //preciso saber se o nft é do usuário logado
        const respAd = await nftCollection.ownerOf(i);  
        respMetadata.add =  format6FirstsAnd6LastsChar( respAd);
        if (respAd.toLowerCase() == address.toLowerCase()){
          arrayUserNfts.push(respMetadata);
        }
      }else{
        respMetadata.add = format6FirstsAnd6LastsChar( respAd1);
      }
      //aqui eu monto a colecao inteira
      arrayAllCollection.push(respMetadata);
    }
    setAllNftsUser(arrayUserNfts);
    setAllNfts(arrayAllCollection);
  }

  function format6FirstsAnd6LastsChar(text){
    if( text =='' || text == undefined || text == null){
        return ''
    }
    let newText = text.substring(0,6)
    newText = newText + '....' + text.substring(text.length - 6);
    return newText;
}

  return (
    <div className="App">
      <ToastContainer position="top-center" autoClose={5000}/>
      <WRHeader title="Mario Collection NFTs" image={true} />
      <WRContent>
        <Title>Infos</Title>
        {
          userAddress != "none" &&
          <Subtitle>User address: {userAddress}</Subtitle>
        }
        <Subtitle>Nft Collection Name: {nftsName}</Subtitle>
        <Subtitle>Nft Symbol: {nftsSymbol}</Subtitle>
        <Subtitle>The rarest and best of Super Mario World</Subtitle>
        <Subtitle>Minted-{allNftsMintedCount} / Total Supply-{totalSupply}</Subtitle>
        <hr/>
        
        {
          userAddress == '' || userAddress == undefined ? 
          <>
            <Title>Connect</Title>
            <Subtitle>Click below to connect your wallet</Subtitle>
            <button onClick={handleConnect}>Connect your wallet</button>
          </>
          
          : 
          <>
            <Title>Mint</Title>
            <Subtitle>Click below to mint your NFT</Subtitle>
            <button onClick={mint}>Mint</button>
            <hr/>
            <Title>Your SMW NFTs</Title>
            {allNftsUser.length > 0 ? <>
                <Grid>
                  {
                    allNftsUser.map((nft, i) =>
                      <NFTCard nft = {nft} key={i} toggleModal={() => toggleModal(i, "user")}/>      
                    )
                  }
                </Grid>
              </> :
              <>
                <Subtitle>You don't have any {nftsName} NFT</Subtitle>
              </>
            }
          </>
            
        }

        <hr/>
        <Title>Super Mario World Entire Collection</Title>
        <Grid>
          {
            allNfts.map((nft, i) =>
              <NFTCard nft = {nft} key={i} toggleModal={() => toggleModal(i, "all")}/>      
            )
          }
        </Grid>
        
        {
          showModal && 
            <NFTModal nft={selectedNft} toggleModal={() => toggleModal()}/>
        }

      </WRContent>
      <WRTools react={true} css={true} javascript={true} hardhat={true} solidity={true}/>
      <WRSimpleFooter text="WR Soluções Digitais" image={false} />
    </div>)

}


const Title = styled.h1`
  margin: 0;
  text-align: center;
`

const Subtitle = styled.h4`
  color: gray;
  margin: 0;
  text-align: center;
`


const Grid = styled.div`
  display: grid;  
  grid-template-columns: 1fr 1fr 1fr 1fr;
  row-gap: 40px;

  @media(max-width: 1200px){
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media(max-width: 900px){
    grid-template-columns: 1fr 1fr;
  }

  @media(max-width: 600px){
    grid-template-columns: 1fr;
  }

`
export default App;
