import styled from "styled-components";


export const FollowupContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px 0 10px 0;
    column-gap: 15px;
    overflow:scroll;

    input, select {
        max-width: 35px;
        padding: 1px 5px;
        text-align: center;
    }

    input,
    textarea {
      border-radius: 45px;
      border: 1px solid gray;
    }

    select {
        min-width: 100px;
        font-family: "Montserrat-Regular";
        font-size: 12px;
    }

`

export const ScheduleContainer = styled(FollowupContainer)`
    flex-direction: column;
    row-gap: 10px;
    margin: 10px 0;
    column-gap: 20px;

    select {
        min-width: 130px;
    }
`

export const SpeedConfigContainer = styled(FollowupContainer)`
    flex-drection: row;
    column-gap: 10px;
    margin: 10px 0;

    select {
        min-width: 150px;
    }

`
export const RepeatConfigContainer = styled(SpeedConfigContainer)`
    select {
        min-width: 70px;
    }
`