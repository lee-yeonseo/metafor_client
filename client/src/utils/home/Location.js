import styled from "@emotion/styled";

export default function Location() {
  return (
    <PageWrapper>
      <Container>
        <Title>Let’s find things happen</Title>
        <ContentWrapper>
          <Text>
            위치를 입력하고 가장 가까운 병원 / 약국의 정보를 받아보세요!
          </Text>
          <Map src="/images/map.png" alt="map" />
        </ContentWrapper>
        <ButtonWrapper>
          <Button>위치 입력하기</Button>
        </ButtonWrapper>
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
  margin-top: -80px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff;
  width: 599px;
  height: 270px;
  padding: 30px;
  border: 1px solid #191a23;
  border-radius: 25px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  position: relative;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin-left: 0px;
  margin-top: 0px;
  align-self: flex-start;
`;

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 10px;
`;

const Text = styled.p`
  font-size: 16px;
`;

const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
`;

const Button = styled.button`
  background-color: #191a23;
  color: white;
  padding: 15px 30px;
  border: none;
  border-radius: 14px;
  font-size: 20px;
  width: auto;
  margin-top: 10px;
  &:hover {
    cursor: pointer;
    opacity: 0.5;
    transition: 0.5s;
  }
`;

const Map = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 10px;
  margin-top: -20px;
`;
