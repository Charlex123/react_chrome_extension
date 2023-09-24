import { useState, useEffect } from "react";

import { LightText, BoldText } from "../styles/TextVariants.styled";
import { SpeedConfigContainer } from "../styles/ScheduleContainer.styled";
import { Dropdown } from "../styles/Dropdown.styled";
import { CheckboxInput } from "../styles/Checkbox.styled";
import { SpeedLabel } from "../styles/LabelVariants.styled";
import { SectionSubHeadingContainer } from "../styles/SectionHeadingContainer.styled";

import speedImage from "../../assets/images/speed.png";

export interface IScheduledSpeed {
   noOfEmails: string;
   isPaused: boolean;
   pausedTimings: string[];
   selectedOauseTiming: string;
}

const SchduledSpeed = ({state, setState}:any): JSX.Element => {
   const [speedConfigs, setSpeedConfigs] = useState<IScheduledSpeed>({
      noOfEmails: "2",
      isPaused: true,
      pausedTimings: ["5 to 10 seconds", "10 to 60 seconds", "1 to 5 minutes"],
      selectedOauseTiming: "5 to 10 seconds",
   });

   const handleSpeedConfigs = (speed:any) => {
      setState({...state, speed: speed})
   }

   useEffect(() => {
      handleSpeedConfigs(speedConfigs)
   }, [speedConfigs])

   return (
      <div>
         <SectionSubHeadingContainer>
            <img src={speedImage} alt="timing img" />
            <BoldText>Speed</BoldText>
            <span></span>
         </SectionSubHeadingContainer>
         <SpeedConfigContainer>
            <LightText>Send</LightText>
            <input type="text" value={speedConfigs.noOfEmails} onChange={(e) => setSpeedConfigs({ ...speedConfigs, noOfEmails: e.target.value })} />
            <LightText>emails / day</LightText>
         </SpeedConfigContainer>
         <SpeedConfigContainer>
            <SpeedLabel>
               <CheckboxInput
                  type="checkbox"
                  checked={!speedConfigs.isPaused}
                  onChange={() => setSpeedConfigs({ ...speedConfigs, isPaused: !speedConfigs.isPaused })}
               />
               <LightText>Pause</LightText>
            </SpeedLabel>
            <Dropdown
               value={speedConfigs.selectedOauseTiming}
               disabled={speedConfigs.isPaused}
               onChange={(e) => setSpeedConfigs({ ...speedConfigs, selectedOauseTiming: e.target.value })}
            >
               {speedConfigs.pausedTimings.map((opt) => (
                  <option value={opt} key={opt}>
                     {opt}
                  </option>
               ))}
            </Dropdown>
            <LightText>between email</LightText>
         </SpeedConfigContainer>
      </div>
   );
};

export default SchduledSpeed;
