import styled from "styled-components";


const NFTProgressBar = (props) => {
    return(
        <ProggressBarOuter>
            <ProggresBarInner style={{width: `${props.percent}%`}}/>
        </ProggressBarOuter>
    )
}

const ProggressBarOuter = styled.div`
    background-color: lightgray;
    border-radius: 13px;
    padding: 3px;
`
const ProggresBarInner = styled.div`
    background-color: #0077ff;
    width: 40%;
    height: 10px;
    border-radius: 7px;
`

export {NFTProgressBar}