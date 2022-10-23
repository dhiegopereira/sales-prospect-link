import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    text-align: center;

    background-color: #5C5C5C;
`

export const Image = styled.img`
    width: 160px;
    height: 160px;
    
    border-radius: 50%;
`

export const Description = styled.div`
    width: 100%;
    height: 66px;

    color: #FFFFFF;
`

export const Heading2 = styled.h2`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 36px;  
    &::after {
        content: '${ props => props.text}' 
    };
` 

export const Paragraph = styled.p`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 30px;

    &::after {
        content: '${ props => props.text}' 
    };
`
export const CardContent = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    position: relative;
`
export const CardBorder = styled.div`
    width: 506px;    
    height: 66px;   

    background: linear-gradient(90deg, #FF3D33 3.3%, #00F0FF 95.6%);
    filter: blur(10px);
    border-radius: 10px;

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
`
export const CardText = styled.div`
    width: 500px;
    height: 60px;
    
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 30px;
    
    background-color: #FFFFFF;
    
    &::after {
        content: '${ props => props.text}' 
    };

    position: relative;
`

export const IconContent = styled.div`
    width: 100%;
    display: flex;

    justify-content: center;
    
    &:nth-child(1) {
        margin-left: 10px;
    }
`

export const IconSocial = styled.img`
    margin: 5px;
`