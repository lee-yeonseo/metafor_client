import styled from "@emotion/styled";

import Category from "../../src/utils/home/search/Category";

export default function HomePage() {
  return (
    <>
      <LogoWrapper>
        <Logo src="../../public/images/logo.png" />
      </LogoWrapper>
      <Category />
    </>
  );
}

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
