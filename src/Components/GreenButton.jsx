import styled from 'styled-components';

export default styled.button`
    display : flex;
    flex-direction : column;
    align-items : center;
    justify-content : center;
    
    type : button;
    width: ${props => props.width || "75px"};
    height: ${props => props.height || "30px"};
    border : ${props => props.$border || "3px solid"};
    border-color : #D0864B;
    border-radius : ${props => props.radius || "5px"};
    background-color : ${props => props.$background ? "#D0864B" : null};
    color :  #D0864B;
    font-weight : bold;
    font-size : 18px;
`