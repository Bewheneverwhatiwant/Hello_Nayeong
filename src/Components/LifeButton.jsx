import styled, { keyframes } from 'styled-components';

// 버튼이 확대되었다가 원래 크기로 돌아오는 애니메이션 정의
const pulseAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
`;

export default styled.button`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    width: ${props => props.width || "75px"};
    height: ${props => props.height || "30px"};
    border: ${props => props.$border || "3px solid"};
    border-radius: ${props => props.radius || "5px"};
    border-color: #D0864B;
    background-color: #D0864B;
    color: white;
    font-weight: bold;
    font-size: 18px;

    animation: ${pulseAnimation} 2s infinite; // 애니메이션 적용
`;