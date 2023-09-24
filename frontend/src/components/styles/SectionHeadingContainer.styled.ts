import styled from "styled-components";

export const SectionHeadingContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    column-gap: 10px;
    align-items: center;
    padding: 0 50px 15px 30px;
    border-bottom: 0.5px solid rgb(197, 193, 193);

    img {
        
        width: 25px;
        height: 25px;
    }
`

export const SectionSubHeadingContainer  = styled(SectionHeadingContainer)`
    justify-content: center;
    border-bottom: none;
    column-gap: 10px;
    padding: 0 50px 5px 30px;
    margin-top: 15px;

    img {
        width: 20px;
        height: 20px;
    }
`