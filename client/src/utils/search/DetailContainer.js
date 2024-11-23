import styled from "@emotion/styled";
import Bar from "./utils/Bar";
import { useState } from "react";
import { useRouter } from "next/router";
import BackButton from "../../commons/BackButton";

export default function DetailContainer() {
  const [search, setSearch] = useState("");
  const router = useRouter();
  return (
    <Container>
      <BackButton route="search" />
      <img
        src="/images/logo.png"
        style={{ width: "100px", height: "100px", marginBottom: "25px" }}
      />
      <Bar
        value="속쓰림"
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      <MainContainer>
        <ConsultContainer>
          <Description>
            <Disease>
              <span style={{ fontSize: "25px", fontWeight: "bold" }}>병명</span>{" "}
              역류성 식도염
            </Disease>
            <hr style={{ margin: "5px" }} />
            <DiseaseDescription>
              <span style={{ fontSize: "18px", fontWeight: "bold" }}>
                증상 :
              </span>
              속쓰림, 역류, 심장 통증
            </DiseaseDescription>
            <DiseaseDescription>
              <span style={{ fontSize: "18px", fontWeight: "bold" }}>
                주의사항 :
              </span>
              기름진 음식, 초콜릿, 마늘, 양파, 페퍼민트, 카페인 등의 음식 섭취
              자제
            </DiseaseDescription>
            <DiseaseDescription>
              <span style={{ fontSize: "18px", fontWeight: "bold" }}>
                생활습관 개선 :
              </span>
              자극적인 음식 피하기, 취침 시 머리나 상체를 30도 정도 올리기
            </DiseaseDescription>
          </Description>
          <MapContainer>
            <MapButton
              onClick={() => {
                router.push("/search/map/pharmacy");
              }}
            >
              근처 약국 찾으러 가기
            </MapButton>
            <MapButton
              onClick={() => {
                router.push("/search/map/hospital");
              }}
            >
              근처 병원 찾으러 가기
            </MapButton>
          </MapContainer>
        </ConsultContainer>
        <PopularContainer>
          <PopularText>실시간 인기 검색어</PopularText>
          <PopularBox>
            <Lank>01 만성 피로</Lank>
            <Lank>02 건조한 눈</Lank>
            <Lank>03 굽은 목</Lank>
            <Lank>04 어깨 결림</Lank>
            <Lank>05 허리 통증</Lank>
          </PopularBox>
        </PopularContainer>
      </MainContainer>
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const MainContainer = styled.div`
  display: flex;
  margin-top: 25px;
`;

const ConsultContainer = styled.div`
  width: 875px;
`;

const Description = styled.div`
  width: 90%;
  height: 250px;
  border: 1.5px solid black;
  border-radius: 14px;
  background-color: white;
  margin-bottom: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Disease = styled.div`
  font-size: 20px;
`;

const DiseaseDescription = styled.div`
  font-size: 17px;
  margin: 5px;
`;

const MapContainer = styled.div`
  display: flex;
  width: 90%;
  justify-content: space-between;
`;

const MapButton = styled.button`
  background-color: black;
  color: white;
  width: 390px;
  height: 40px;
  border-radius: 12px;
  border: none;
  margin-bottom: 10px;
  &:hover {
    &:hover {
      cursor: pointer;
      opacity: 0.5;
      transition: all.5s;
    }
  }
`;

const PopularContainer = styled.div``;

const PopularText = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 12px;
`;

const PopularBox = styled.div`
  width: 260px;
  height: 207px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 1.5px solid black;
  border-radius: 14px;
  padding: 20px;
`;

const Lank = styled.div`
  font-size: 18px;
  margin: 5px;
`;
