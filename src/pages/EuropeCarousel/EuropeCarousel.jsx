import { useState, useEffect } from "react";
import TextDescription from "../Components/TextDescription";
import TextHeader from "../Components/TextHeader";
import CenterContainer from "../Components/CommonContainer/CenterContainer";
import BackContainer from "../Components/BackContainer";
import styled, { keyframes } from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AiOutlineArrowRight } from 'react-icons/ai';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import SizedBox from "../Components/SizedBox";
import RowContainer from "../Components/CommonContainer/RowContainer";
import ColumnCenterContainer from "../Components/CommonContainer/ColumnCenterContainer";

const CarouselContainer = styled.div`
  position: relative;
  overflow: hidden;
`;

const CarouselSlider = styled.div`
  display: flex;
  transition: transform 0.3s ease-in-out;
`;

const CarouselItem = styled.div`
  flex: 0 0 100%;
padding: 10px;
min-width: 300px;
word-wrap: break-word;
word-break: break-all;
line-height: 30px;
font-size: 17px;
`;

const CarouselButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(135, 206, 235, 0.5);
  color: white;
  border: 2px skyblue;
  border-radius: 10px;
  padding: 10px;
  cursor: pointer;
  &:focus {
    outline: none;
  }
`;

const PrevButton = styled(CarouselButton)`
  left: 10px;
`;

const NextButton = styled(CarouselButton)`
  right: 10px;
`;

const nextHandler = () => {
    setCurrentIndex((prevIndex) =>
        prevIndex === apiData_hire.length - 1 ? 0 : prevIndex + 1
    );
};

const prevHandler = () => {
    setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? apiData_hire.length - 1 : prevIndex - 1
    );
};

return (
    <BackContainer>

        <CarouselContainer>
            <CarouselSlider style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {apiData_hire.map((item, index) => (
                    <CarouselItem key={index}>
                        <div>소속기관명: {item.BLNG_INST_NM}</div>
                        <div>제목: {item.BRDI_SJ}</div>
                        <div>작성일자: {item.RDT}</div>
                        <div>상세 URL: <a href={item.HOME_URL} target="_blank" rel="noopener noreferrer">{item.HOME_URL}</a></div>
                    </CarouselItem>
                ))}
            </CarouselSlider>
            <PrevButton onClick={prevHandler}> <AiOutlineArrowLeft /></PrevButton>
            <NextButton onClick={nextHandler}> <AiOutlineArrowRight /></NextButton>
        </CarouselContainer>
    </BackContainer>
)