import styled from 'styled-components';

export default styled.div`
    display : flex;
    justify-content : center;
    align-items: center;
    gap : ${props => props.$gap ? props.$gap : "10px"}
`