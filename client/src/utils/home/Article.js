import styled from "@emotion/styled";

export default function Article() {
  return (
    <PageWrapper>
      <Container>
        <TextWrapper>
          <Text>Let’s make</Text>
          <Text> things happen</Text>
        </TextWrapper>
        <ArticleImageWrapper>
          <ArticleImage src="/images/article.png" alt="article" />
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
  font-size: 26px;
  font-weight: bold;
`;

const ArticleImageWrapper = styled.div`
  margin-top: 60px;
`;

const ArticleImage = styled.img`
  width: 230px;
`;
