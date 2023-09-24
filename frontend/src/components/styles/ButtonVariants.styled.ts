import styled from "styled-components";

export const Button = styled.button`
    border: 0;
    background: ${({ theme }) => theme.colors.primaryColor};
    border-radius: 45px;
    width: 100%;
    font-size: 0.7rem;
    line-height: 1;
    color: white;
    cursor: pointer;
`

export const OutreachButton = styled(Button)`
   position: absolute;
   font-size: 20px;
   padding: 10px;
   width: 100px;
`;

export const SaveButton = styled(Button)`
   background: #55A954;
   font-size: 12px;
   padding: 5px;
   max-width:100px;
   max-width:100px;
`;

export const CancelButton = styled(Button)`
   background: #C4332A;
   font-size: 12px;
   padding: 5px;
   width: 80px;
`;

export const PauseButton = styled(Button)`
   background: #F2CB54;
   font-size: 12px;
   padding: 5px;
   width: 80px;
`;

export const TestEmailButton = styled(Button)`
   font-size: 12px;
   height: 30px;
   width:100%;
   margin: 5% 0% 0% 0%

`;