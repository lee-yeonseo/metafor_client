import styled from "@emotion/styled";
import { useRouter } from "next/router";

export default function BackButton() {
  const router = useRouter();
  const onClickBack = () => {
    router.push("/");
  };
  return (
    <Container>
      <Img src="/images/backButton.png" onClick={onClickBack} />
    </Container>
  );
}

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
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
