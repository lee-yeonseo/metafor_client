import styled from "@emotion/styled";

export default function Cate01({ setIsHover1, text1, text2 }) {
  return (
    <Container
      onMouseLeave={() => {
        setIsHover1(false);
      }}
    >
      <Cate>{text1}</Cate>
      <Cate>{text2}</Cate>
    </Container>
  );
}

const Container = styled.div`
  width: 250px;
  border: 1.5px solid white;
  background-color: black;
  color: white;
  position: absolute;
  margin-left: 150px;
  z-index: 1;
  padding: 15px;
  border-radius: 10px;
`;

const Cate = styled.div`
  padding: 10px;
  &:hover {
    cursor: pointer;
    opacity: 0.5;
    transition: 0.5s;
  }
`;
