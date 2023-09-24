import { useState, KeyboardEvent, Dispatch, SetStateAction } from "react";

import styled from "styled-components";

import recipientLogo from "../../assets/images/recipient-logo.png";
import { useAuth } from "../../context/authcontext";

type TagsProps = {
   tags: string[];
   inputType?: string;
   bulkRecipients?: string;
   setBulkRecipients: Dispatch<SetStateAction<string>>;
   showRecipientModal: (e: React.MouseEvent) => void;
};

const RecipientTags = ({ tags, inputType, bulkRecipients, setBulkRecipients, showRecipientModal }: TagsProps): JSX.Element => {
   const [currentRecepients, setCurrentRecepients] = useState<string[]>(tags);
   const {formData, setFormData} = useAuth()



   const removeTags = (indexToRemove: number): void => {
      if (inputType === "bulk") setBulkRecipients("");
      else {
         setCurrentRecepients([...currentRecepients.filter((_, index) => index !== indexToRemove)]);
         setFormData({...formData, emailList: [...currentRecepients.filter((_, index) => index !== indexToRemove)]})
      }

   };

   const addTags = (event: KeyboardEvent<HTMLInputElement>): void => {
      const target = event.target as HTMLInputElement;
      if (target?.value !== "") {
         setCurrentRecepients([...currentRecepients, target.value]);
         setFormData({...formData, emailList: [...currentRecepients, target.value]})
         target.value = "";
      }
   };

   return (
      <RecipientInput>
         <Tags>
            {inputType === "bulk" ? (
               <Tag>
                  <span>{bulkRecipients?.split("\n").length}recipients-outreach.co</span>
                  <TagCloseIcon onClick={() => removeTags(0)}>x</TagCloseIcon>
               </Tag>
            ) : (
               currentRecepients.map((tag, index) => (
                  <Tag key={index}>
                     <span>{tag}</span>
                     <TagCloseIcon onClick={() => removeTags(index)}>x</TagCloseIcon>
                  </Tag>
               ))
            )}
         </Tags>
         <input type="text" onKeyUp={(event) => (event.key === "Enter" ? addTags(event) : null)} />
         <RecipientLogo src={recipientLogo} alt="import recipient logo" onClick={(e) => showRecipientModal(e)} />
      </RecipientInput>
   );
};

export default RecipientTags;

const RecipientInput = styled.div`
   position: relative;
   display: flex;
   align-items: center;
   flex-wrap: wrap;
   min-height: 30px;
   width: 100%;
   padding: 0 8px;
   border: 1px solid ${({ theme }) => theme.colors.borderColor};
   border-radius: 5px;

   &:focus-within {
      border: 1.5px solid ${({ theme }) => theme.colors.borderColor};
   }
   input {
      flex: 1;
      border: none;
      height: 30px;
      font-size: 14px;

      padding: 5px 0 5px 0;
      &:focus {
         outline: transparent;
      }
   }
`;

const Tags = styled.ul`
   display: flex;
   flex-wrap: wrap;
   padding: 0;
   margin: 8px 0 0 0;

   span {
      padding: 0px 5px;
   }
`;

const Tag = styled.li`
   width: auto;
   height: 28px;
   display: flex;
   align-items: center;
   justify-content: center;
   color: black;
   padding: 0 8px;
   font-size: 14px;
   list-style: none;
   border-radius: 30px;
   margin: 0 8px 8px 0;
   background: #e4e2f4;
`;

const RecipientLogo = styled.img`
   position: absolute;
   top: 5px;
   right: 5px;
   width: 22px;
   height: 22px;
`;

const TagCloseIcon = styled.span`
   display: block;
   width: 16px;
   height: 16px;
   line-height: 14px;
   text-align: center;
   font-size: 14px;
   margin-left: 8px;
   color: #0052cc;
   border-radius: 50%;
   background: #fff;
   cursor: pointer;
`;
