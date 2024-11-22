import styled from "@emotion/styled";

import Category from "../../src/utils/home/search/Category";
import Location from "../../src/utils/home/Location";

export default function HomePage() {
  return (
    <PageWrapper>
      <LogoWrapper>
        <Logo src="../../public/images/logo.png" />
      </LogoWrapper>
      <Category />
      <Location />
    </PageWrapper>
  );
}

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: #ffffff;
  padding-top: 40px;
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 13px;
  left: 670px;
  width: 100px;
  height: 100px;
`;

const Logo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
