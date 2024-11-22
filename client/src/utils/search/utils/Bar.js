import styled from "@emotion/styled";

export default function Bar({ onChange, value, placeholder }) {
  return (
    <>
      <Container>
        <SearchBarWrapper>
          <Input placeholder={placeholder} onChange={onChange} value={value} />
          <SearchIcon src="/images/searchIcon.png" />
        </SearchBarWrapper>
      </Container>
    </>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  background-color: #1c1c1c;
  border-radius: 14px;
  padding: 10px 20px;
  width: 510px;
`;

const SearchBarWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 501px;
  height: 44.31px;
  padding: 8px;
  border-radius: 6px;
  background-color: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.1);
`;

const Input = styled.input`
  border: none;
  flex: 1;
  font-size: 14px;
  outline: none;
`;

const SearchIcon = styled.img`
  margin-left: 10px;
  cursor: pointer;
  width: 20px;
  height: 20px;
`;
