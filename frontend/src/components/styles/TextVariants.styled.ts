import styled from "styled-components";

export const LightText = styled.p`
   font-size: 13px;
   font-family: "Montserrat-Regular";
`;

export const BoldText = styled(LightText)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 15px;
    height: 2vh;
    font-weight: bolder;
    text-align: center;
    font-family: "Montserrat-SemiBold";
    width: 50%;
    margin: 0 auto;
    color: ${({ theme }) => theme.colors.primaryColor}
`;

export const BolderText = styled(BoldText)`
    font-size: 30px;
`;