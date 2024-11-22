import styled from "@emotion/styled";
import { useState } from "react";

export default function Category() {
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const mainCategories = [
    {
      id: 1,
      name: "호흡기계",
      subCategories: [
        {
          id: 1,
          name: "코, 인후 (상부 호흡기)",
          subSubCategories: ["콧물", "코막힘", "인후통", "재채기", "후각 저하"],
        },
        {
          id: 2,
          name: "폐, 기관지 (하부 호흡기)",
          subSubCategories: ["기침", "가래", "호흡 곤란"],
        },
      ],
    },
    {
      id: 2,
      name: "소화기계",
      subCategories: [
        {
          id: 1,
          name: "식도, 위상부 소화기 (상부 소화기)",
          subSubCategories: [
            "속쓰림",
            "삼킴 곤란",
            "구토",
            "트림",
            "복부 팽만감",
          ],
        },
        {
          id: 2,
          name: "장, 항문하부 소화기 (하부 소화기)",
          subSubCategories: ["복통", "설사", "변비", "혈변", "항문 통증"],
        },
      ],
    },
  ];

  const handleMenuClick = () => {
    setIsCategoryOpen(!isCategoryOpen);
    setSelectedCategory(null);
  };

  const handleCategoryClick = (categoryId) => {
    setSelectedCategory(categoryId === selectedCategory ? null : categoryId);
  };

  return (
    <PageWrapper>
      <Container>
        <HamburgerMenu onClick={handleMenuClick}>
          <div />
          <div />
          <div />
        </HamburgerMenu>

        {isCategoryOpen && (
          <DropdownWrapper>
            <CategoryList>
              {mainCategories.map((category) => (
                <CategoryItem
                  key={category.id}
                  onClick={() => handleCategoryClick(category.id)}
                >
                  {category.name}
                </CategoryItem>
              ))}
            </CategoryList>

            {selectedCategory && (
              <SubCategoryList>
                {mainCategories
                  .find((cat) => cat.id === selectedCategory)
                  .subCategories.map((sub) => (
                    <SubCategoryItem key={sub.id}>{sub.name}</SubCategoryItem>
                  ))}
              </SubCategoryList>
            )}
          </DropdownWrapper>
        )}
      </Container>
    </PageWrapper>
  );
}

const PageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 100vh;
  width: 100vw;
  margin-top: 180px;
  background-color: #f0f0f0;
  padding-top: 250px;
  padding-top: 0;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

const HamburgerMenu = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 24px;
  margin-right: 16px;

  & > div {
    width: 30px;
    height: 2px;
    background-color: black;
  }
`;

const DropdownWrapper = styled.div`
  display: flex;
  position: absolute;
  top: 30px;
  left: 0;
  background-color: white;
  border: 1px solid #ddd;
  padding: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  z-index: 1;
`;

const CategoryList = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 20px;
`;

const CategoryItem = styled.div`
  padding: 10px;
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }
`;

const SubCategoryList = styled.div`
  display: flex;
  flex-direction: column;
`;

const SubCategoryItem = styled.div`
  padding: 10px;
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }
`;
