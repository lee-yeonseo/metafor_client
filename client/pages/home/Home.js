import styled from "@emotion/styled";
import Category from "../../../src/utils/home/search/Category";
import Location from "../../../src/utils/home/search/Location";

export default function HomePage() {
  return (
    <PageWrapper>
      <LogoWrapper>
        <Logo src="../../public/images/logo.png" />
      </LogoWrapper>
      <Category />
      <Location />
      {/* 원격 저장소에서 추가된 내용 통합 */}
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
  margin-bottom: 20px;
`;

const Logo = styled.img`
  width: 120px;
  height: auto;
  object-fit: cover;
`;
