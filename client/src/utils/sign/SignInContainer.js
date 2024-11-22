import styled from "@emotion/styled";
import { useRouter } from "next/router";

export default function SignInContainer() {
  const router = useRouter();

  const onClickNext = () => {
    router.push("/sign/sign-up");
  };
  return (
    <>
      <NextButton onClick={onClickNext}>sign in</NextButton>
    </>
  );
}

const NextButton = styled.button``;
