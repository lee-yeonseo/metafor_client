import styled from "@emotion/styled";

export default function SearchBar() {
  return (
    <SearchBarWrapper>
      <Input placeholder="증상이나 질병을 입력해보세요!" />
      <SearchIcon src="/images/searchIcon.png" />
    </SearchBarWrapper>
  );
}

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
