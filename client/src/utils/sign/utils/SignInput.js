import styled from "@emotion/styled";

export default function SignInput({ title, content, margin }) {
  return (
    <Container style={{ marginBottom: margin }}>
      <Title>{title}</Title>
      <Input placeholder={content} />
    </Container>
  );
}

const Container = styled.div`
  width: 556px;
  height: 92px;
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
  border-radius: 14px;
  padding-left: 20px;
  font-size: 18px;
`;
