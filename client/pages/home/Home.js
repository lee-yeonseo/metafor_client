import styled from "@emotion/styled";
import Category from "../../src/utils/home/search/Category";
import Location from "../../src/utils/home/Location";
import { useState } from "react";
import Bar from "../../src/utils/search/utils/Bar";
import Article from "../../src/utils/home/Article";
import SignInComponent from "../../src/utils/home/SignIn/SignInComponent";

export default function HomePage() {
  const [search, setSearch] = useState("");
  const [isHover, setIsHover] = useState(false);

  return (
    <PageWrapper>
      <LogoWrapper>
        <Logo src="../../public/images/logo.png" />
      </LogoWrapper>
      <Category />
      <Location />
      <ContentWrapper>
        <ArticleWrapper>
          <Article />
        </ArticleWrapper>
        <LocationWrapper>
          <Location />
        </LocationWrapper>
        <SignInWrapper>
          <SignInComponent />
        </SignInWrapper>
      </ContentWrapper>
      <Container>
        <img
          src="/images/logo.png"
          style={{ width: "100px", height: "100px", marginBottom: "25px" }}
        />
        <CategoryContainer>
          <CategoryButton onMouseEnter={() => setIsHover(true)}>
            Category
          </CategoryButton>
          <Bar
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            placeholder="질병을 입력하세요."
          />
        </CategoryContainer>
        {isHover && <Category setIsHover={setIsHover} />}
        <MainContainer>
          <Article />
          <Location />
          <SignInComponent />
        </MainContainer>
      </Container>
    </PageWrapper>
  );
}

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const MainContainer = styled.div`
  display: flex;
  margin-top: 30px;
  width: 90%;
  justify-content: space-between;
`;

const CategoryContainer = styled.div`
  display: flex;
  align-items: center;
`;

const CategoryButton = styled.div`
  height: 50px;
  background-color: black;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  position: absolute;
  transform: translateX(-50%);
  width: 100px;
  height: 100px;
`;

const Logo = styled.img`
  width: 120px;
  height: auto;
  object-fit: cover;
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  margin-top: 100px;
  gap: 20px;
`;

const LocationWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const SignInWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const ArticleWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-right: 10px;
  padding: 15px;
  border-radius: 14px;
  &:hover {
    cursor: pointer;
    opacity: 0.5;
    transition: 0.5s;
  }
`;
