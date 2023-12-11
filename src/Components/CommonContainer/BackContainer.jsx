import styled from 'styled-components';

export default styled.div`
background : #EAF7FF;
height : ${props => props.height ? props.height : "100%"};
min-height : 100vh;
padding : 30px;
font-family : Pretendard;
`