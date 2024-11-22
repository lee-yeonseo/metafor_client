import styled from "@emotion/styled";
import SignButton from "../SignIn/SignButton";
import Favorites from "./Favorites";
import { useRouter } from "next/router";

export default function MemberComponent() {
  const router = useRouter();

  return (
    <Container>
      <div>
        <ContextWrapper>
          <Title>META:FOR 님,</Title>
          <Text>안녕하세요!</Text>
        </ContextWrapper>
        <ButtonWrapper>
          <SignButton text="Logout" onClick={() => router.push("/")} />
          <SignButton
            text="Sign up"
            onClick={() => router.push("../sign/sign-up")}
          />
        </ButtonWrapper>
      </div>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 0;
  height: 270px;
  width: 330px;
  border: 1px solid #191a23;
  border-radius: 25px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  justify-content: center;
  background-color: white;
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 20px;
`;

const ContextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 32px;
  margin: 0;
`;
const Text = styled.p`
  font-size: 27px;
  margin: 5px 0 0;
`;
