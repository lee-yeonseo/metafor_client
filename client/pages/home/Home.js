import styled from "@emotion/styled";
import Category from "../../../src/utils/home/search/Category";
import Location from "../../../src/utils/home/search/Location";

import Category from "../../src/utils/home/search/Category";
import Article from "../../src/utils/home/Article";
import Location from "../../src/utils/home/Location";
import SignInComponent from "../../src/utils/home/SignIn/SignInComponent";

export default function HomePage() {
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
    </PageWrapper>
  );
}

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: #eeebe2;
  padding-top: 40px;
`;

const LogoWrapper = styled.div`
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
`;
