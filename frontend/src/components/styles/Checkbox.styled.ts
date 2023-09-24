import styled from "styled-components";

export const CheckboxInput = styled.input`
   width: 1.3em;
   height: 1.3em;
   border: 1px solid rgb(118, 118, 118);
   margin-right: 7px;
   outline: none;
   cursor: pointer;
   accent-color: ${({ theme }) => theme.colors.primaryColor};
   border-color: ${({ theme }) => theme.colors.primaryColor};
`;