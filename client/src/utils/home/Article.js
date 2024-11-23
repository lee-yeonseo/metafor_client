import styled from "@emotion/styled";

export default function Article() {
  return (
    <PageWrapper>
      <Container>
        <TextWrapper>
          <Text>20분만 자도 정신 번쩍하는 법?</Text>
          <Text>커피 냅을 아시나요?</Text>
        </TextWrapper>
        <ArticleImageWrapper>
          <ArticleImage src="/images/article.jpeg" alt="article" />
        </ArticleImageWrapper>
      </Container>
    </PageWrapper>
  );
}

const PageWrapper = styled.div``;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 400px;
  width: 330px;
  border: 1px solid #191a23;
  border-radius: 25px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  justify-content: center;
  background-color: #f3f3f3;
  position: relative;
`;

const TextWrapper = styled.div`
  position: absolute;
  top: 20px;
`;

const Text = styled.p`
  padding-top: 0px;
  color: black;
  font-size: 22px;
  font-weight: bold;
  text-align: center;
`;

const ArticleImageWrapper = styled.div`
  margin-top: 60px;
`;

const ArticleImage = styled.img`
  width: 230px;
  height: 280px;
  border-radius: 10px;
`;
