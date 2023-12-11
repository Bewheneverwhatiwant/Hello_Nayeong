import styled from 'styled-components';
import TextDescription from './TextDescription';
import RowContainer from "./CommonContainer/RowContainer";
import ColumnContainer from './CommonContainer/ColumnContainer';
import CenterContainer from "./CommonContainer/CenterContainer"
import SizedBox from './SizedBox';

const FooterContainer = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    
    background-color: #FDF7E7;
    min-height: 60px;
    padding: 0 20px;
    
`;


const Image = styled.img`
    max-height: ${props => props.$max ? props.$max : "100px"};
    margin-left: ${props => props.$left ? props.$left : null};
    max-width: 100%;
`;

export default function Component() {

    return (
        <FooterContainer>
            <ColumnContainer>
                <SizedBox height='30px'></SizedBox>
                <CenterContainer>
                    <TextDescription color='#D0864B'>
                        나영이 이메일: lny021102@gmail.com <br />
                        <SizedBox height='10px'></SizedBox>
                        나영이 깃허브: @Bewheneverwhatiwant <br />
                        <SizedBox height='10px'></SizedBox>
                        나영이 연락처: 대외비
                        <SizedBox height='10px'></SizedBox>
                        나영이 대학교: 한국외국어대학교 글로벌캠퍼스
                        <SizedBox height='10px'></SizedBox>
                        나영이 제1전공: 독일어통번역학과
                        <SizedBox height='10px'></SizedBox>
                        나영이 제2전공: 컴퓨터공학부
                    </TextDescription>
                </CenterContainer>
                <SizedBox height='30px'></SizedBox>
                <CenterContainer>
                    <RowContainer>

                        <a href="/">
                            <Image src="/logo.png" alt="로고" width='60px' height='60px' />
                        </a>
                        <CenterContainer>
                            <TextDescription color='#D0864B'>대장은 나영이</TextDescription>
                        </CenterContainer>
                    </RowContainer>
                </CenterContainer>

            </ColumnContainer>

            <SizedBox height='100px'></SizedBox>
        </FooterContainer>
    )
}