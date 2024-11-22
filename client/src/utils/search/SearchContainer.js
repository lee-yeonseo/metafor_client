import { useRouter } from "next/router";
import styled from "@emotion/styled";
import Bar from "./utils/Bar";
import { useState } from "react";
import BackButton from "../../commons/BackButton";

export default function SearchContainer() {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const onClickDetail = () => {
    router.push("/search/detail");
  };

  return (
    <Container>
      <BackButton />
      <img
        src="/images/logo.png"
        style={{ width: "100px", height: "100px", marginBottom: "25px" }}
      />
      <Bar
        value="뇌졸증"
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      <MainContainer>
        <ConsultContainer>
          <Consult onClick={onClickDetail}>
            <ConsultTitle>01 Consultation</ConsultTitle>
            <hr />
            <ConsultDescription>
              During the initial consultation, we will discuss your business
              goals and objectives, target audience, and current marketing
              efforts. This will allow us to understand your needs and tailor
              our services to best fit your requirements.
            </ConsultDescription>
          </Consult>
          <Consult onClick={onClickDetail}>
            <ConsultTitle>02 Consultation</ConsultTitle>
            <hr />
            <ConsultDescription>
              During the initial consultation, we will discuss your business
              goals and objectives, target audience, and current marketing
              efforts. This will allow us to understand your needs and tailor
              our services to best fit your requirements.
            </ConsultDescription>
          </Consult>
          <Consult onClick={onClickDetail}>
            <ConsultTitle>03 Consultation</ConsultTitle>
            <hr />
            <ConsultDescription>
              During the initial consultation, we will discuss your business
              goals and objectives, target audience, and current marketing
              efforts. This will allow us to understand your needs and tailor
              our services to best fit your requirements.
            </ConsultDescription>
          </Consult>
        </ConsultContainer>
        <PopularContainer>
          <PopularText>실시간 인기 검색어</PopularText>
          <PopularBox>
            <Lank>01 뇌졸증</Lank>
            <Lank>02 뇌졸증</Lank>
            <Lank>03 뇌졸증</Lank>
            <Lank>04 뇌졸증</Lank>
            <Lank>05 뇌졸증</Lank>
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

const Consult = styled.div`
  width: 90%;
  height: 150px;
  margin: 10px;
  border: 1.5px solid black;
  border-radius: 20px;
  background-color: #f3f3f3;
  padding: 10px 25px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  &:hover {
    cursor: pointer;
    background-color: #999999;
    transition: all.5s;
  }
`;

const ConsultTitle = styled.div`
  font-size: 25px;
`;

const ConsultDescription = styled.div`
  font-size: 16px;
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
