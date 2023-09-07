import styled, { css } from "styled-components";
import { SIZE } from "../../overall";

export const FancyButton = styled.button`
${({ size = 'l' }) => SIZE[size]}
  padding: 10px 20px;
  background-color: #f06292;
  color: white;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #ec407a;
  }

  ${({ disabled }) =>
    disabled &&
    css`
      background-color: #bdbdbd;
      cursor: not-allowed;
      pointer-events: none;
    `}
`;
