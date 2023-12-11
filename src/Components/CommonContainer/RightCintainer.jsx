import styled from 'styled-components';

export default styled.div`
    display : flex;
    width : 100%;
    justify-content : flex-end;
    gap : ${props => props.gap ? props.gap : "10px"}
`