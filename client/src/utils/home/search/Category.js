import styled from "@emotion/styled";
import { useState } from "react";
import SearchBar from "./SearchBar";

export default function Category() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <PageWrapper>
      <Container>
        <HamburgerMenu onClick={handleMenuClick}>
          <div />
          <div />
          <div />
        </HamburgerMenu>
        <SearchBar />
        {isMenuOpen && (
          <Options>
            <p>옵션 1</p>
            <p>옵션 2</p>
            <p>옵션 3</p>
          </Options>
        )}
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
  background-color: #f0f0f0;
  padding-top: 250px;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  background-color: #1c1c1c;
  border-radius: 14px;
  padding: 10px 20px;
  position: relative;
`;

const HamburgerMenu = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 24px;
  margin-right: 16px;

  & > div {
    width: 30px;
    height: 2px;
    background-color: white;
  }
`;

const Options = styled.div`
  position: absolute;
  top: 70px;
  left: 0;
  background-color: white;
  border: 1px solid #ddd;
  padding: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  z-index: 1;
`;
