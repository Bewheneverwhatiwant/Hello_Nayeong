import styled from 'styled-components';
import SizedBox from "../../Components/SizedBox";
import BackContainer from "../../Components/CommonContainer/BackContainer";
import TextDescription from "../../Components/TextDescription";
import TextHeader from "../../Components/TextHeader";
import ColumnContainer from "../../Components/CommonContainer/ColumnContainer";
import GreenButton from "../../Components/GreenButton";
import EuropeCarousel from "../EuropeCarousel/EuropeCarousel";
import LifeButton from "../../Components/LifeButton";
import CenterContainer from "../../Components/CommonContainer/CenterContainer";

const OverlayDiv = styled.div`
  position: absolute;
  width: 66.67%; // 2/3 너비
  height: 100%;
  background-color: white; // 어두운 오버레이
  right: 0;
`;


export default function MainPage() {

  const isClicked = localStorage.getItem('isClicked') === 'true';

  return (
    <BackContainer>

      <ColumnContainer>
        <EuropeCarousel />
        <CenterContainer>
          <LifeButton width='300px' height='50px'>Draw My Life 보러가기</LifeButton>
        </CenterContainer>
        <SizedBox height='20px' />
        <TextHeader color=' #D0864B'>나영이의 대학 진로 활동 모음</TextHeader>
        <GreenButton width='300px'>그동안 진행한 프로젝트 보러가기</GreenButton>
        <GreenButton width='300px'>현재 진행 중인 프로젝트 보러가기</GreenButton>
        <GreenButton width='300px'>나영이의 기술 스택 보러가기</GreenButton>
        <GreenButton width='300px'>나영이의 도전과 실패 보러가기</GreenButton>
        <SizedBox height='20px' />
        <TextHeader color=' #D0864B'>나영이의 일상 구경하기</TextHeader>
        <GreenButton width='300px'>나영이의 취미 보러가기</GreenButton>
        <GreenButton width='300px'>나영이의 먹부림 구경하기</GreenButton>
        {isClicked && <OverlayDiv />}
      </ColumnContainer>
    </BackContainer>
  )
}