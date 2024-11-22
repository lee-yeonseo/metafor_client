import styled from "@emotion/styled";
import { useRouter } from "next/router";
import SignInput from "./utils/SignInput";
import SignButton from "./utils/SignButton";

export default function SignInContainer() {
  const router = useRouter();

  return (
    <Container>
      <Form>
        <SignInput title="id" content="email" margin="25px" />
        <SignInput title="password" content="password" />
        <SignButton type="submit" text="Login" />
      </Form>
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Form = styled.form``;
