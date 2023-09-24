import React, { Dispatch, SetStateAction } from "react";

import TestEmailBar from "./TestEmailBar";
import Tracking from "./Tracking";
import Action from "./Actions";
import AutoFollowUp from "./AutoFollowUp";
import Schedule from "./Schedule";

import styled from "styled-components";

import { BolderText } from "../styles/TextVariants.styled";
import { Button, CancelButton, SaveButton, PauseButton } from "../styles/ButtonVariants.styled";

type ModalProps = {
   children?: string;
   modalState: boolean;
   setModalState: Dispatch<SetStateAction<boolean>>;
   setRecipientModalState: Dispatch<SetStateAction<boolean>>;
   bulkRecipients: string;
   inputType: string;
   setBulkRecipients: Dispatch<SetStateAction<string>>;
};

export const Modal = ({
   children,
   modalState,
   setModalState,
   setRecipientModalState,
   bulkRecipients,
   inputType,
   setBulkRecipients,
}: ModalProps): JSX.Element => {
   const onClose = (e: React.MouseEvent): void => setModalState(false);

   if (!modalState) return <></>;
   return (
      <>
         <ModalContainer>
            <Header>
               <BolderText>The Outreach</BolderText>
            </Header>
            <Content>
               <TestEmailBar
                  setRecipientModalState={setRecipientModalState}
                  bulkRecipients={bulkRecipients}
                  inputType={!!bulkRecipients.length ? "bulk" : ""}
                  setBulkRecipients={setBulkRecipients}
               />
               <>
                  <SettingsBoxContent>
                     <Tracking />
                     <Action />
                     <AutoFollowUp />
                     <Schedule />
                  </SettingsBoxContent>
               </>
            </Content>
            {/* <CloseAction>
               <Button onClick={(e) => onClose(e)}>Close</Button>
            </CloseAction> */}
            <div style={{display:"flex", justifyContent:"space-evenly", paddingBottom:"20px"}}>
               <SaveButton onClick={(e) => onClose(e)}>Save Changes</SaveButton>
               <PauseButton onClick={(e) => onClose(e)}>Pause Campaign</PauseButton>
               <CancelButton onClick={(e) => onClose(e)}>Cancel Campaign</CancelButton>
            </div>
            
         </ModalContainer>
      </>
   );
};

export default Modal;

const ModalContainer = styled.div`
   width: 40%;
   overflow-y: auto; // for scroll bars
   max-height: 100%;
   background: white;
   border: 1.5px solid ${({ theme }) => theme.colors.borderColor};
   border-radius: 45px 45px 45px 45px;
   transition: 1.1s ease-out;
   box-shadow: -2rem 2rem 2rem rgba(black, 0.2);
   filter: blur(0);
   transform: scale(1);
   opacity: 1;
   visibility: visible;

   @supports (offset-rotate: 0deg) {
      offset-rotate: 0deg;
      &.off {
         offset-distance: 100%;
      }
   }
   @media (prefers-reduced-motion) {
      offset-path: none;
   }

   @media (max-width: 570px) {
      width: 98%;
   }
`;

const Header = styled.div`
   margin: 30px 0 10px 0;
   text-align: center;
   font-size: 30px;
`;

const Content = styled.div`
   padding: 1rem 2rem;
   overflow-y: auto;
`;

const SettingsBoxContent = styled.div`
   & > div {
      position: relative;
      padding:20px;
      background: #fff;
      margin: 5% 0%;
      border-radius: 15px;
   }

   & > div::after {
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: -1;
      margin: -5px;
      border-radius: inherit;
      background-image: linear-gradient(45deg, #0500FF, #FF00E5);
    }
`;

const CloseAction = styled.div`
   border-top: 1px solid ${({ theme }) => theme.colors.borderColor};
   padding: 0.5rem 2rem;
`;
