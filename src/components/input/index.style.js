import styled from 'styled-components';
import { SIZE } from '../../overall';


export const FancyInput = styled.input`
${({ size = 'xxl' }) => SIZE[size]}
padding: 10px;
border: none;
border-bottom: 2px solid #f06292;
background-color: transparent;
color: #2d2d2d;
border-radius: 5px;
outline: none;
font-size: 16px;

&:focus {
  border-color: #ec407a;
}
`;