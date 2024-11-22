import styled from "@emotion/styled";

import Category from "../../../src/utils/home/search/Category";
import Article from "../../../src/utils/home/Article";
import Location from "../../../src/utils/home/Location";
import MemberComponent from "../../../src/utils/home/member/MemberComponent";

export default function HomePage() {
  return (
    <PageWrapper>
      <LogoWrapper>
        <Logo src="../../public/images/logo.png" />
      </LogoWrapper>
      <Category />
      <ContentWrapper>
        <ArticleWrapper>
          <Article />
        </ArticleWrapper>
        <LocationWrapper>
          <Location />
        </LocationWrapper>
        <MemberWrapper>
          <MemberComponent />
        </MemberWrapper>
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
  position: absolute;
  transform: translateX(-50%);
  width: 100px;
  height: 100px;
`;

const Logo = styled.img`
  width: 100%;
  height: 100%;
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

const ArticleWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LocationWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MemberWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;
