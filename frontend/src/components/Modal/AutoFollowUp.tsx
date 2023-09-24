import { useState, useEffect, Dispatch, SetStateAction } from "react";

import styled from "styled-components";

import { BoldText, LightText } from "../styles/TextVariants.styled";
import { FollowupContainer } from "../styles/ScheduleContainer.styled";
import { Dropdown } from "../styles/Dropdown.styled";
import { CheckboxInput } from "../styles/Checkbox.styled";
import { FollowUpLabel } from "../styles/LabelVariants.styled";
import { RadioInput } from "../styles/Radio.styled";
import { SectionHeadingContainer, SectionSubHeadingContainer } from "../styles/SectionHeadingContainer.styled";

import followUpImage from "../../assets/images/follow-up.png";
import stageImage from "../../assets/images/stages.png";
import { useAuth } from "../../context/authcontext";
import Polygon from "../../assets/Polygon.png";

interface IStage {
   no: number;
   checked: boolean;
   message: string;
   actionTypes: string[];
   selectedAction: string;
   days: string;
   selectedTextType: string;
}

var initializeStage = (no: number, days?: string): IStage => {
   return {
      no,
      checked: false,
      message: "Just Making sure you saw this",
      actionTypes: ["No Reply", "No Open", "No Click", "Everyone"],
      selectedAction: "No Reply",
      days: days || "2",
      selectedTextType: "plain text",
   };
};

const AutoFollowUp = (): JSX.Element => {
   const [followUpStages, setFollowUpStages] = useState<IStage[]>([initializeStage(0)]);
   const [show, setShow] = useState<boolean>(false);

   return (
      <div>
         <SectionHeadingContainer>
            <img src={followUpImage} alt="follow-up img" />
            <BoldText >Auto Follow-up <img src={Polygon} alt="" onClick={() => setShow(!show)} style={show ?{height:"15px", width:"15px", margin:"0% 5% 2% 5%", transition:"1s" }: {height:"15px", width:"15px", margin:"2% 5% 0% 5%", rotate:"180deg", transition:"1s"}}/></BoldText>
            <span></span>
         </SectionHeadingContainer>
         {show ? followUpStages.map((stage) => (
            <Stage stage={stage} followUpStages={followUpStages} setFollowUpStages={setFollowUpStages} key={stage.no}  />
         )): null}
      </div>
   );
};

type StageProps = {
   stage: IStage;
   followUpStages: IStage[];
   setFollowUpStages: Dispatch<SetStateAction<IStage[]>>;
};

const Stage = ({ stage, followUpStages, setFollowUpStages }: StageProps): JSX.Element => {

   const { formData, setFormData } = useAuth();

   const [trigger, setTrigger] = useState<boolean>(false);

   const changeInputState = (stateName: string, value: string | boolean): void => {
      followUpStages.map((elem: any, id: any) => {
         if (id === stage.no) {
            elem.selectedTextType = value;   
            setTrigger(!trigger)
         }
      });
   };

   const dropDownState = (stateName: string, value: string | boolean): void => {
      followUpStages.map((elem: any, id: any) => {
         if (id === stage.no) {
            elem.selectedAction = value;
            setTrigger(!trigger)
         }
      });
   };

   const messageState = (stateName: string, value: string | boolean): void => {
      followUpStages.map((elem: any, id: any) => {
         if (id === stage.no) {
            elem.message = value;
            setTrigger(!trigger)
         }
      });
   };

   const dayState = (stateName: string, value: string | boolean): void => {
      followUpStages.map((elem: any, id: any) => {
         if (id === stage.no) {
            elem.days = value;
            setTrigger(!trigger)
         }
      });
   };

   const createNewStage = (): void => {
      const prevStages = followUpStages;
      prevStages[stage.no].checked = true;
      setFollowUpStages([...prevStages, initializeStage(followUpStages.length, "2")]);
   };

   const removeStages = (): void => {
      const updatedStages = followUpStages.slice(0, stage.no + 1);
      updatedStages[stage.no].checked = false;
      setFollowUpStages(updatedStages);
   };

   const handleStages = (): void => {
      if (!stage.checked) {
         createNewStage();
         followUpStages.map((elem: any, id: any) => {
            if (id === stage.no) {
               elem.checked = true;
            }
         });
      } else {
         removeStages();
         followUpStages.map((elem: any, id: any) => {
            if (id === stage.no) {
               elem.checked = false;
            }
         });
      }
   };

   const handleFollowUp = (): void => {
      let followUp = [] as any[]
      let followUpStage = {};
      followUpStages.map((elem: any, id: any) => {
         if(elem.checked === true){
            followUpStage = {
               "id": id,
               "condition": elem.selectedAction,
               "duration": elem.days,
               "message": elem.message,
               "sendType": elem.selectedTextType
            }
         }
         followUp.push(followUpStage)
         setFormData({...formData, autofollowup: followUp.slice(0, followUp.length - 1)})
      }
   )
      
   };



   useEffect(() => {
      handleFollowUp();
   }, [trigger]);

  

   return (
      <div >
         <SectionSubHeadingContainer>
            <img src={stageImage} alt="timing img" />
            <BoldText>Stage {stage.no + 1}</BoldText>
            <span></span>
         </SectionSubHeadingContainer>
         <FollowupContainer>
            <CheckboxInput type="checkbox" checked={stage.checked} onChange={() => handleStages()} />
            <LightText>If</LightText>
            <Dropdown onChange={(e) => dropDownState("selectedAction", e.target.value)}>
               {stage.actionTypes.map((opt) => (
                  <option value={opt} key={opt}>
                     {opt}
                  </option>
               ))}
            </Dropdown>
            <LightText>after</LightText>
            <input type="text" placeholder={stage.days} onChange={(e) => dayState("days", e.target.value)} required />
         </FollowupContainer>
         {stage.checked && (
            <div >
               <FollowUpLabel>
                  <RadioInput
                     type="radio"
                     name={`radio ${stage.no}`}
                     value="plain text"
                     defaultChecked
                     onChange={(e) => changeInputState("selectedTextType", e.target.value)}
                  />
                  <LightText>Send text above original:</LightText>
               </FollowUpLabel>
               <TextArea rows={3} cols={8} placeholder={`${stage.message}`} onChange={(e) => messageState("message", e.target.value)} required />
               <FollowUpLabel>
                  <RadioInput
                     type="radio"
                     name={`radio ${stage.no}`}
                     value="rich text"
                     onChange={(e) => changeInputState("selectedTextType", e.target.value)}
                  />
                  <LightText>Send rich-text email in same thread</LightText>
               </FollowUpLabel>
            </div>
         )}
      </div>
   );
};

const TextArea = styled.textarea`
   width: 90%;
   display: flex;
   justify-content: center;
   margin: 10px 20px;
   padding: 10px 20px;
   font-family: "Montserrat-Regular";
   font-size: 12.5px;
   resize: none;
   border-radius: 45px;
`;

export default AutoFollowUp;
