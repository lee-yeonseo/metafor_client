import styled from "@emotion/styled";
import { useState } from "react";
import Bar from "../../../src/utils/search/utils/Bar";

import Article from "../../../src/utils/home/Article";
import Location from "../../../src/utils/home/Location";
import Category from "../../../src/utils/home/search/Category";
import MemberComponent from "../../../src/utils/home/member/MemberComponent";

export default function HomePage() {
  const [search, setSearch] = useState("");
  const [isHover, setIsHover] = useState(false);

  return (
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
        <MemberComponent />
      </MainContainer>
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
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
  margin-right: 10px;
  padding: 15px;
  border-radius: 14px;
  &:hover {
    cursor: pointer;
    opacity: 0.5;
    transition: 0.5s;
  }
`;
