import styled from "styled-components";

const NFTCard = (props) =>{
    let nft = props.nft;
    return(
      <NftCard onClick={() => props.toggleModal()} >
        <NftPhoto style={{backgroundImage: `url(${nft && nft.image})`}}/>
        <div style={{margin: 5}}>
          <NftCollectionText>{nft && nft.symbol}</NftCollectionText>
          <NftName style={{float: "left"}}>{nft && nft.name}</NftName>
          <NftName style={{float: "right"}}>{nft && nft.add}</NftName> 
        </div>
      </NftCard>
    )
  }
  
  const NftCollectionText = styled.div`
    font-size: 12px;
    color: gray;
  `
  const NftName = styled.div`
    font-size: 12px;
    font-weight: bold;
    display: inline;
  `
  
  const NftPhoto = styled.div`
    display: block;
    width: 200px;
    height: 200px;
    background-position: center center;
    background-size: cover;
    border-radius: 10px;
    margin: auto;
  `
  const NftCard = styled.div`
    width: 200px;
    height: 250px;
    margin: 10px;
    border-radius: 10px;
    border: 1px solid #333;
    padding: 0px;
    cursor: pointer;
    box-shadow: 8px 8px 16px #d9d9d9 -8px -8px -16px #ffffff 
  `;

  export {NFTCard, NftPhoto, NftCard, NftCollectionText}