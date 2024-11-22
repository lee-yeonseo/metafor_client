import styled from "@emotion/styled";

export default function SignButton({ text, onClick }) {
  return <Button onClick={onClick}>{text}</Button>;
}

const Button = styled.button`
  width: 556px;
  height: 59px;
  margin-top: 33px;
  background-color: black;
  color: white;
  border: none;
  border-radius: 14px;
  font-size: 20px;
  &:hover {
    cursor: pointer;
    opacity: 0.5;
    transition: 0.5s;
  }
`;
