import SizedBox from "../../Components/SizedBox";
import BackContainer from "../../Components/CommonContainer/BackContainer";
import TextDescription from "../../Components/TextDescription";
import TextHeader from "../../Components/TextHeader";
import ColumnContainer from "../../Components/CommonContainer/ColumnContainer";
import GreenButton from "../../Components/GreenButton";

export default function MainPage() {

  return (
    <BackContainer>

      <ColumnContainer>
        <TextHeader size="30px">나영이 웹페이지</TextHeader>

        <GreenButton width='400px'>나영이의 유럽 여행기 보러가기</GreenButton>

        <GreenButton width='400px'>Draw My Life 보러가기</GreenButton>

        <TextHeader>나영이의 대학 진로 활동 모음</TextHeader>
        <GreenButton width='400px'>나영이의 깃허브 보러가기</GreenButton>
        <GreenButton width='400px'>그동안 진행한 프로젝트 보러가기</GreenButton>
        <GreenButton width='400px'>현재 진행 중인 프로젝트 보러가기</GreenButton>
        <GreenButton width='400px'>나영이의 기술 스택 보러가기</GreenButton>
        <GreenButton width='400px'>나영이의 도전과 실패 보러가기</GreenButton>

        <TextHeader>나영이의 서버 구축 일기</TextHeader>
        <GreenButton width='400px'>개인 물리 서버 만든 날</GreenButton>
        <GreenButton width='400px'>네이버 클라우드 서버 만든 날</GreenButton>
        <GreenButton width='400px'>트랜잭션 오류로 Oracle 서버는 포기한 날</GreenButton>
        <GreenButton width='400px'>AWS 과금이 두려워서 계정 탈퇴한 날</GreenButton>

        <TextHeader>나영이의 일상 구경하기</TextHeader>
        <GreenButton width='400px'>나영이의 취미 보러가기</GreenButton>
        <GreenButton width='400px'>나영이의 먹부림 구경하기</GreenButton>
        <TextHeader>방명록 남기기</TextHeader>
        <GreenButton width='400px'>방명록 남기러 가기</GreenButton>
      </ColumnContainer>
      <SizedBox />
    </BackContainer>
  )
}