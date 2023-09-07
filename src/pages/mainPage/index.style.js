import styled, { css } from "styled-components";



const basicSideCss = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const RightSide = styled.div`
  ${basicSideCss}
  background-color: #f5f5f5;
  flex: 1; /* Займет все доступное пространство горизонтально */
`;

export const LeftSide = styled.div`
  ${basicSideCss}
  background-color: #2d2d2d;
  color: white;
  flex-direction: column;

  h2 {
    margin-bottom: 20px;
    font-size: 24px;
    text-transform: uppercase;
  }

  .select-category-wrapper:hover {
    transform: scale(1.05);
    transition: transform 0.2s ease-in-out;
  }
`;

export const Center = styled.div`
  ${basicSideCss}
  background-color: #f9f9f9;
  flex: 1; /* Займет все доступное пространство горизонтально */
`;

export const Wrapper = styled.div`
  display: flex;
  height: 100vh; /* Займет всю высоту экрана */
  gap: 20px;
`;

export const PageContainer = styled.div`
  background-color: #f4221f;
  color: #333333;
 
  flex-wrap:wrap ; 
  display: grid;
  
`;

