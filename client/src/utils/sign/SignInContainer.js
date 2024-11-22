import styled from "@emotion/styled";
import { useRouter } from "next/router";
import SignInput from "./utils/SignInput";

export default function SignInContainer() {
  const router = useRouter();

  const onClickNext = () => {
    router.push("/sign/sign-up");
  };
  return (
    <>
      <NextButton onClick={onClickNext}>sign in</NextButton>
      <SignInput title="id" content="email" />
    </>
  );
}

const NextButton = styled.button``;
