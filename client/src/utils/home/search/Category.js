import styled from "@emotion/styled";
import { useState } from "react";
import Cate01 from "./Categ01";

export default function Category({ setIsHover }) {
  const [isHover1, setIsHover1] = useState(false);
  const [isHover2, setIsHover2] = useState(false);
  const [isHover3, setIsHover3] = useState(false);
  const [isHover4, setIsHover4] = useState(false);

  return (
    <Container onMouseLeave={() => setIsHover(false)}>
      {isHover1 && (
        <Cate01 setIsHover1={setIsHover1} text1="코, 인후" text2="폐, 기관지" />
      )}
      <Cate
        onMouseEnter={() => {
          setIsHover1(true);
          setIsHover2(false);
          setIsHover3(false);
          setIsHover4(false);
        }}
      >
        호흡기계
      </Cate>
      {isHover2 && (
        <Cate01
          setIsHover1={setIsHover1}
          text1="식도, 위상부소화기"
          text2="장, 항문하부소화기"
        />
      )}
      <Cate
        onMouseEnter={() => {
          setIsHover1(false);
          setIsHover2(true);
          setIsHover3(false);
          setIsHover4(false);
        }}
      >
        소화기계
      </Cate>

      {isHover3 && (
        <Cate01
          setIsHover1={setIsHover1}
          text1="팔다리 저림, 감각 이상"
          text2="두통, 경련"
        />
      )}

      <Cate
        onMouseEnter={() => {
          setIsHover1(false);
          setIsHover2(false);
          setIsHover3(true);
          setIsHover4(false);
        }}
      >
        신경계
      </Cate>

      {isHover4 && (
        <Cate01 setIsHover1={setIsHover1} text1="피부, 머리카락, 손/발톱" />
      )}
      <Cate
        onMouseEnter={() => {
          setIsHover1(false);
          setIsHover2(false);
          setIsHover3(false);
          setIsHover4(true);
        }}
      >
        피부/외형
      </Cate>
    </Container>
  );
}

const PageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 100vh;
  width: 100vw;
  margin-top: 180px;
  background-color: #f0f0f0;
  padding-top: 250px;
  padding-top: 0;
`;

const Container = styled.div`
  width: 200px;
  background-color: black;
  color: white;
  position: absolute;
  margin-right: 410px;
  margin-bottom: 40px;
  z-index: 1;
  padding: 15px;
  border-radius: 10px;
  opacity: 0.8;
`;

const Cate = styled.div`
  padding: 10px;
  &:hover {
    cursor: pointer;
    opacity: 0.5;
    transition: 0.5s;
  }
`;
