import styled  from 'styled-components';

export const Card = styled.div`
    background-color: #ffffff;
    display: flex;
    flex: 0.2;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    

    border-radius: var(--border-radius);
    box-sizing: border-box;
    box-shadow: 1px 2px 20px 0px lightgray;

    @media screen and (max-width: 768px){
        flex-direction: column;
        width: 45vw;
    } 

    @media screen and (min-width: 768px) and (max-width: 1440px){
        flex-direction: column;  
       // width: 28vw;
    }

     @media screen and (min-width: 1440px){
        height: 56vh;
        
    } 

    @media screen and (max-width: 440px){
        width: 100%;
        height: 63vh;
        img {
            width: 200px;
            height: 210px;
        }
    }
`;