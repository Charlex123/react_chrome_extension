import React from 'react';
import { useEffect, useState } from "react";
import './styles/App.css';
import './styles/privacy_terms.css';
import DataProvider from './context/authcontext';
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/styles/Global";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// routes
import Router from './routes';

const theme = {
  colors: {
     primaryColor: "#6662F4",
     borderColor: "#6662F4",
  },
};


function App(): any {
  // const [modalState, setModalState] = useState<boolean>(false);
  // const [recipientModalState, setRecipientModalState] = useState<boolean>(false);
  // const [bulkRecipients, setBulkRecipients] = useState<string>("");
  // const [recipientsInputType, seRecipientsInputType] = useState<string>("");
  // const searchParams = new URLSearchParams(document.location.search);
  // const token = searchParams.get('token')!;


  // const getAndSetToken = async () => {
  //   if (token) {
  //     localStorage.setItem('signature', token);
  //     console.log(localStorage.getItem('signature'))
  //     // await getUser();
  //     navigate('/dashboard',{replace: true});
  //   } else {
  //     navigate('/');
  //   }
  // };

  useEffect(() => {
  //   if (window.location.pathname === "/dashboard") {
  //     setModalState(!modalState);
  //    let outreach_btn= document.getElementById("outreach-btn")
  //     console.log(outreach_btn)
  //  }
  // getAndSetToken();
  }, [])

  return (
    <DataProvider>
      <ToastContainer />
      <ThemeProvider theme={theme}>
        <div className="App">
            <GlobalStyles />
            <Router />
        </div>
      </ThemeProvider>  
    </DataProvider>
  );
}

export default App;


export const Container = styled.div`
   display: flex;
   height: 100vh;
   justify-content: center;
   align-items: center;
`;

export const Overlay = styled.div`
   position: absolute;
   inset: 0;
   display: flex;
   justify-content: center;
   align-items: center;
   // background-color: rgba(0, 0, 0, 0.8);
   z-index: 2;
`;