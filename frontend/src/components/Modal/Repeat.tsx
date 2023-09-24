import { useState, useEffect } from "react";

import { LightText, BoldText } from "../styles/TextVariants.styled";
import { RepeatConfigContainer } from "../styles/ScheduleContainer.styled";
import { Dropdown } from "../styles/Dropdown.styled";
import { CheckboxInput } from "../styles/Checkbox.styled";
import { RepeatLabel } from "../styles/LabelVariants.styled";

interface IScheduledRepeat {
   isRepeatChecked: boolean;
   repeatCount: string;
   repeatTimings: string[];
   selectedRpeatTimings: string;
}

const ScheduledRepeat = ({state, setState}:any): JSX.Element => {
   const [repeatConfigs, setRepeatConfigs] = useState<IScheduledRepeat>({
      repeatCount: "1",
      isRepeatChecked: true,
      repeatTimings: ["Day", "Hour", "Week", "Month"],
      selectedRpeatTimings: "Day",
   });

   const handleRepeat = (repeat:any) => {
      setState({...state, repeat: repeat})
   }

   useEffect(() => {
      handleRepeat(repeatConfigs)
   }, [repeatConfigs])

   return (
      <div>
         <RepeatConfigContainer>
            <BoldText>Repeat: </BoldText>
            <RepeatLabel>
               <CheckboxInput
                  type="checkbox"
                  checked={!repeatConfigs.isRepeatChecked}
                  onChange={() => setRepeatConfigs({ ...repeatConfigs, isRepeatChecked: !repeatConfigs.isRepeatChecked })}
               />
               <LightText>Every</LightText>
            </RepeatLabel>
            <input
               type="text"
               value={repeatConfigs.repeatCount}
               disabled={repeatConfigs.isRepeatChecked}
               onChange={(e) => setRepeatConfigs({ ...repeatConfigs, repeatCount: e.target.value })}
            />
            <Dropdown
               value={repeatConfigs.selectedRpeatTimings}
               disabled={repeatConfigs.isRepeatChecked}
               onChange={(e) => setRepeatConfigs({ ...repeatConfigs, selectedRpeatTimings: e.target.value })}
            >
               {repeatConfigs.repeatTimings.map((opt) => (
                  <option value={opt} key={opt}>
                     {opt}
                  </option>
               ))}
            </Dropdown>
         </RepeatConfigContainer>
      </div>
   );
};

export default ScheduledRepeat;
