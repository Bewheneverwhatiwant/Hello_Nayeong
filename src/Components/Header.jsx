import styled from 'styled-components';
import TextDescription from './TextDescription';
import RowContainer from "./CommonContainer/RowContainer";
import ColumnContainer from './CommonContainer/ColumnContainer';
import CenterContainer from "./CommonContainer/CenterContainer"

const HeaderContainer = styled.header`
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
        <HeaderContainer>
            <RowContainer>

                <a href="/">
                    <Image src="/logo.png" alt="로고" width='60px' height='60px' />
                </a>
                <CenterContainer>
                    <TextDescription color='#D0864B' size='20px'>대장은 나영이</TextDescription>
                </CenterContainer>
            </RowContainer>
        </HeaderContainer>
    )
}