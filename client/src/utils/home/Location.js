import styled from "@emotion/styled";

export default function SignInContainer() {
  return (
    <PageWrapper>
      <Container>
        <Title>Let’s find things happen</Title>
        <Text>
          위치를 입력하고 가장 가까운 병원 / 약국의 정보를 받아보세요!
        </Text>
        <button>위치 입력하기</button>
        <Map src="/images/map.png" alt="map" />
      </Container>
    </PageWrapper>
  );
}

const PageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 100vh;
  width: 100vw;
  margin-top: -50px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff;
  width: 599px;
  height: 230px;
  padding: 20px;
  border: 1px solid #191a23;
  border-radius: 25px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Text = styled.p`
  font-size: 16px;
  margin-bottom: 20px;
`;

const Button = styled.button`
  background-color: #191a23;
  color: #ffffff;
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  &:hover {
    background-color: #333;
  }
`;

const Map = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 10px;
  margin-left: 20px;
`;
