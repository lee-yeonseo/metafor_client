import styled from "@emotion/styled";
import { useState } from "react";

export default function Nav() {
  const [isHovered, setIsHovered] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  return (
    <Container>
      <div onMouseEnter={() => setIsHovered(true)}>Main Category</div>

      {isHovered && (
        <div onMouseLeave={() => setIsHovered(false)}>
          <p onMouseEnter={() => setIsHovered2(true)}>category</p>
          <p onMouseEnter={() => setIsHovered2(true)}>category</p>
          <p onMouseEnter={() => setIsHovered2(true)}>category</p>
        </div>
      )}

      {isHovered2 && (
        <div onMouseLeave={() => setIsHovered2(false)}>
          <p>category2</p>
          <p>category2</p>
          <p>category2</p>
          <p>category2</p>
        </div>
      )}
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 50px;
  background-color: gray;
`;
