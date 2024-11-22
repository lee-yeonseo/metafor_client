import styled from "@emotion/styled";

export default function SignInput({
  title,
  content,
  margin,
  value,
  onChange,
  type,
}) {
  return (
    <Container style={{ marginBottom: margin }}>
      <Title>{title}</Title>
      <Input
        placeholder={content}
        value={value}
        onChange={onChange}
        type={type}
      />
    </Container>
  );
}

const Container = styled.div`
  width: 280px;
  height: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Title = styled.div`
  font-size: 16px;
`;

const Input = styled.input`
  width: 100%;
  height: 59px;
  border: 1.5px solid black;
  border-radius: 25px;
  padding-left: 20px;
  font-size: 18px;
`;
