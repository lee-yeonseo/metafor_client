import styled from "@emotion/styled";

export default function SearchBar() {
  return (
    <>
      <Title>즐겨찾기 한 병원 / 약국</Title>
      <Container>
        <TextWrapper>
          <Text>01</Text>
          <Text>공덕병원</Text>
          <Text>4.2점</Text>
          <Text>거리</Text>
        </TextWrapper>
      </Container>
    </>
  );
}

const Title = styled.h1`
  font-size: 20px;
  display: flex;
  align-items: center;
  text-align: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 0;
  height: 270px;
  width: 330px;
  border: 1px solid #191a23;
  border-radius: 25px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  justify-content: center;
  background-color: #f3f3f3;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: left;
  background-color: white;
`;

const Text = styled.p`
  font-size: 15px;
`;
