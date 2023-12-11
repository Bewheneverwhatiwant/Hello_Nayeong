import styled from 'styled-components';

export default styled.div`
background : #FFCDA5;
height : ${props => props.height ? props.height : "100%"};
min-height : 100vh;
padding : 30px;
font-family : Pretendard;
`