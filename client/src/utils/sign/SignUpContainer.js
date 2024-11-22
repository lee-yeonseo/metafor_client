import styled from "@emotion/styled";
import { useState } from "react";
import { useRouter } from "next/router";
import { useStore } from "../../commons/store";
import SignInput from "./utils/SignInput";
import SignButton from "./utils/SignButton";
import BackButton from "../../commons/BackButton";

export default function SignUpContainer() {
  const router = useRouter();
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [error, setError] = useState("");
  const { setName } = useStore();

  const onClickCreate = () => {
    if (!id) {
      setError("Please enter Id.");
    } else if (!password) {
      setError("Please enter Password.");
    } else if (password !== passwordCheck) {
      setError("Passwords do not match.");
    } else {
      setName(id);
      router.push("/");
    }
  };

  return (
    <Container>
      <BackButton />
      <ImgContainer>
        <img src="/images/logo.png" />
      </ImgContainer>
      <div>
        <SignInput
          title="Id"
          content="Email"
          margin="12px"
          value={id}
          onChange={(e) => {
            setId(e.target.value);
          }}
        />
        <SignInput
          title="Password"
          content="Password"
          margin="36px"
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <SignInput
          title="Confirm Password"
          content="Password"
          type="password"
          value={passwordCheck}
          onChange={(e) => {
            setPasswordCheck(e.target.value);
          }}
        />
        {error && (
          <ErrorContainer>
            <p>{error}</p>
          </ErrorContainer>
        )}
        <SignButton text="Create account" onClick={onClickCreate} />
      </div>
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

const ImgContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const ErrorContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px;
  color: red;
`;
