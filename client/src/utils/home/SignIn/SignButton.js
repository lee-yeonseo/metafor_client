import styled from "@emotion/styled";

export default function SignButton({ text, onClick }) {
  return <Button onClick={onClick}>{text}</Button>;
}

const Button = styled.button`
  width: 135px;
  height: 50px;
  margin-top: 10px;
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
