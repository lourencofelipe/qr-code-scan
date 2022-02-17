import styled from 'styled-components';

export const Main = styled.div`
    min-width: 100vw;
    min-height: 100vh;
    background-color: #d6e2f0;
   
    display: flex; 
    justify-content: center; 
    align-items: center;

    @media screen and (max-width: 768px){
        flex-direction: column;
        
        padding-right: 25px;
        padding-left: 25px;
    }

    @media screen and (max-width: 1440px){
        flex-direction: column;
     }
`;