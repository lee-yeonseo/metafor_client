import styled from "@emotion/styled";
import { useRouter } from "next/router";

export default function BackButton() {
  const router = useRouter();
  const onClickBack = () => {
    router.push("/");
  };
  return (
    <Container>
      <Img src="backButton.png" onClick={onClickBack} />
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 80px;
  display: flex;
  align-items: center;
  margin-left: 33px;
`;

const Img = styled.img`
  &:hover {
    cursor: pointer;
    opacity: 0.5;
    transition: all.5s;
  }
`;
