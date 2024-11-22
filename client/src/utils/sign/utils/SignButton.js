import styled from "@emotion/styled";

export default function SignButton({ type, text }) {
  return <Button type={type}>{text}</Button>;
}

const Button = styled.button`
  width: 556px;
  height: 59px;
  background-color: black;
  color: white;
  border-radius: 14px;
  font-size: 20px;
  &:hover {
    cursor: pointer;
    opacity: 0.5;
    transition: 0.5s;
  }
`;
