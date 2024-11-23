import styled from "@emotion/styled";
import SignInput from "./SignInput";
import SignButton from "./SignButton";
import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

export default function SignInComponent() {
  const router = useRouter();
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const onClickCreate = async () => {
    if (id === "META:FOR") {
      router.push("/login/member");
      return;
    }
    try {
      const response = await axios.post("/api/login", {
        id,
        password,
      });
      if (response.status === 200) {
        router.push("/");
      }
    } catch (error) {
      setErrorMessage("아이디와 비밀번호를 확인하세요.");
    }
  };

  return (
    <Container>
      <div>
        <SignInput
          content="Email"
          margin="12px"
          value={id}
          onChange={(e) => {
            setId(e.target.value);
          }}
        />
        <SignInput
          content="Password"
          margin="12px"
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        {errorMessage && <ErrorText>{errorMessage}</ErrorText>}
        <ButtonWrapper>
          <SignButton text="Login" onClick={onClickCreate} />
          <SignButton
            text="Sign up"
            onClick={() => router.push("sign/sign-up")}
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

const ErrorText = styled.p`
  color: red;
  margin-top: 10px;
  font-size: 14px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 20px;
`;
