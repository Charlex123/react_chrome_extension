import { SetStateAction, Dispatch } from "react";
import RecipientTags from "./RecipientTags";
import styled from "styled-components";
import { LightText } from "../styles/TextVariants.styled";
import { TestEmailButton } from "../styles/ButtonVariants.styled";
import { useAuth } from "../../context/authcontext";

type TestEmailBarProps = {
   setRecipientModalState: Dispatch<SetStateAction<boolean>>;
   bulkRecipients: string;
   inputType: string;
   setBulkRecipients: Dispatch<SetStateAction<string>>;
};

const TestEmailBar = ({ setRecipientModalState, bulkRecipients, inputType, setBulkRecipients }: TestEmailBarProps): JSX.Element => {
   const showModal = (e: React.MouseEvent): void => setRecipientModalState(true);

   const {createJobs, formData} = useAuth()

   
   const handleJobs = async(formData:FormData) =>{
    
      await createJobs(formData)
   }

   console.log(formData)
   // useEffect(() => {
   //    createJobs(formData)
   // }, [formData])
   return (
      <>
         <LightText>Send Emails</LightText>
         <TestEmailContainer>
            <RecipientTags
               tags={["dev@gmail.com"]}
               bulkRecipients={bulkRecipients}
               inputType={inputType}
               setBulkRecipients={setBulkRecipients}
               showRecipientModal={showModal}
            />
            <TestEmailButton onClick={() => handleJobs(formData)}> Send Test </TestEmailButton>
         </TestEmailContainer>
      </>
   );
};

export default TestEmailBar;

const TestEmailContainer = styled.div`
   display: flex;
   flex-direction:column;
   column-gap: 5px;
   padding: 5px 0px;
   width: 100%;
   margin: 0 0 20px 0;
`;
