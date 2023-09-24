import { useState, Dispatch, SetStateAction, useEffect } from "react";

import styled from "styled-components";

import { Label } from "../styles/LabelVariants.styled";
import { CheckboxInput } from "../styles/Checkbox.styled";
import { BoldText, LightText } from "../styles/TextVariants.styled";
import { SectionHeadingContainer } from "../styles/SectionHeadingContainer.styled";
import { useAuth } from "../../context/authcontext";
import Polygon from "../../assets/Polygon.png";

// import trackingImage from "../../assets/images/tracking.png";

const Tracking = (): JSX.Element => {
   const [isOpenChecked, setIsOpenChecked] = useState<boolean>(true);
   const [isClicksChecked, setIsClicksChecked] = useState<boolean>(true);

   const {formData, setFormData} = useAuth();

   const handleTracking = () => {
      setFormData({...formData, tracking: {
         ...formData.tracking, isOpened: isOpenChecked, isClicked: isClicksChecked
      }})
   }

  useEffect(() => {
    handleTracking();
   }, [isOpenChecked, isClicksChecked]);

   const [show, setShow] = useState<boolean>(false);

   return (
      <div >
         <SectionHeadingContainer>
            <span></span>
            <BoldText >Tracking <img src={Polygon} alt="" onClick={() => setShow(!show)} style={show ?{height:"15px", width:"15px", margin:"0% 5% 2% 5%", transition:"1s" }: {height:"15px", width:"15px", margin:"2% 5% 0% 5%", rotate:"180deg", transition:"1s"}}/></BoldText>
            <span></span>
         </SectionHeadingContainer>
         {show ?<TrackingContainer>
            <Checkbox label="Opens" checked={isOpenChecked} setIsChecked={setIsOpenChecked}  />
            <Checkbox label="Clicks" checked={isClicksChecked} setIsChecked={setIsClicksChecked}  />
         </TrackingContainer> : null}
      </div>
   );
};

type CheckboxProps = {
   label: string;
   checked: boolean;
   setIsChecked: Dispatch<SetStateAction<boolean>>;
};

const Checkbox = ({ label, checked, setIsChecked }: CheckboxProps) => {
   return (
      <>
         <Label>
            <CheckboxInput type="checkbox" checked={checked} onChange={() => setIsChecked((prev: boolean) => !prev)} />
            <span className="checkmark"></span>
            <LightText>{label}</LightText>
         </Label>
      </>
   );
};

export default Tracking;

const TrackingContainer = styled.div`
   padding: 10px 0px;
   display: flex;
   justify-content: center;
   column-gap: 20px;
`;
