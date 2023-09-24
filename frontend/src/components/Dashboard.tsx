import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Modal from './Modal'
import FileUploadModal from './Modal/FileUploadModal';
import Container from 'react-bootstrap/Container';
import logo from '../../src/assets/images/logo.png';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Table from 'react-bootstrap/Table';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas, faCheck, faCheckCircle, faCheckSquare, faCheckDouble, faRightFromBracket, faAlignJustify } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFontAwesome, faGoogle } from '@fortawesome/free-brands-svg-icons'
import Footer from './Footer'
library.add(fas, faTwitter, faFontAwesome, faGoogle, faCheck,faCheckCircle)

const Dashboard = () => {
//    const [modalState, setModalState] = useState<boolean>(false);
//    const [recipientModalState, setRecipientModalState] = useState<boolean>(false);
//    const [bulkRecipients, setBulkRecipients] = useState<string>("");
//    const [recipientsInputType, seRecipientsInputType] = useState<string>("");

interface CampaignDetails {
   Bounces: number,
   Clicks: number,
   Opens: number,
   Replies: number,
   action: number,
   campaignId: number,
   advance: {
      sendas: string,
      verifyemail: string,
   },
   autofollowup: {
      firstfollowup: {
         reply1interval: number,
         reply1message: string,
         reply1type: string,
         status: string,
      },
      secondfollowup: {
         reply2interval: number,
         reply2message: string,
         reply2type: string,
         status: string,
      },
      thirdfollowup: {
         reply3interval: number,
         reply3message: string,
         reply3type: string,
         status: string,
      },
   },
   createat: Date,
   emailId: string,
   emailaddress: string,
   emailbody: string,
   emailrecipients: any,
   emailsubject: string,
   schedule: {
      speed: {
         delay: string,
         mailsPerDay: number
      },
      repeat: {
         repeatinterval: string,
         repeattimes: number
      },
      scheduletime: string,
      skipweekends: string,
   },
   tracking: {
      isClicked: boolean,
      isOpened: boolean,
      redlinktext: string,
      redlinkurl: string,
   },
   trackingId: string,
   userId: string,
   _id: string
}


   const [userappkey, setAppKey] = useState<any>("");
   const [userData, setUserData] = useState<any>("");
   const [userEmail, setUserEmail] = useState<any>("");
   const [draftCount, setdraftCount] = useState<any>("");
   const [openCampaignCount, setopenCampaignCount] = useState<any>("");
   const [campaigndetails, setcampaignDetails] = useState<CampaignDetails[]>([]);

   const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

   
   useEffect(() => {
      setAppKey(localStorage.getItem("signature"));
      async function getUserdata() {
         try {
            const config = {
            headers: {
               "Content-type": "application/json"
            }
            }  
            const {data} = await axios.post("http://localhost:3000/user/verifyuserdata", {
               userappkey
            }, config);
            localStorage.setItem("userData_", JSON.stringify(data))
            setUserEmail(data.email);
            setUserData(localStorage.getItem("userData_"));
            getcampaignsdetails();
         } catch (error) {
            console.log(error)
         }
      }
      getUserdata();

      async function getcampaignsdetails() {
         try {
            const config = {
            headers: {
               "Content-type": "application/json"
            }
            }  
            const {data} = await axios.post("http://localhost:3000/campaigns/campaignsdetails", {
               userappkey
            }, config);
            setcampaignDetails(data.campaigndetails)
         } catch (error) {
            console.log(error)
         }
      }

      async function getdraftscount() {
         try {
            const config = {
            headers: {
               "Content-type": "application/json"
            }
            }  
            const {data} = await axios.post("http://localhost:3000/campaigns/draftscount", {
               userappkey
            }, config);
            setdraftCount(data.draftcount);
         } catch (error) {
            console.log(error)
         }
      }
      getdraftscount();

      async function getopenscount() {
         try {
            const config = {
            headers: {
               "Content-type": "application/json"
            }
            }  
            const {data} = await axios.post("http://localhost:3000/campaigns/openscount", {
               userappkey
            }, config);
            setopenCampaignCount(data.opencampaigncount);
         } catch (error) {
            console.log(error)
         }
      }
      getopenscount();
      

   }, [userappkey,userData,userEmail])

   console.log('c data', campaigndetails)
   console.log('c data l', campaigndetails.length)

   return (
      <div>
         <Navbar collapseOnSelect expand="lg" bg="dark" data-bs-theme="dark" className="bg-body-tertiary">
            <Container className="d-flex justify-content-between">
            <Navbar.Brand href="#"><img src={logo} alt='logo'/></Navbar.Brand>
            <div>
               <span className='text-white m-lg-2 uemail'>{userEmail}</span>
               <Button onClick={handleShow} variant='secondary'><FontAwesomeIcon icon={faAlignJustify} size='lg' className='text-white'/></Button>
               <Button onClick={handleShow} variant='transparent'><FontAwesomeIcon icon={faRightFromBracket} size='lg' className='text-white'/></Button>
            </div>
            </Container>
         </Navbar>
         

         <Offcanvas show={show} onHide={handleClose} backdrop="static">
            <Offcanvas.Header className='text-white' closeButton>
               <Offcanvas.Title><img src={logo} alt='logo'/></Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
               <div className='sidebar_ m-0 p-0'>
                  <ul className='m-0 p-0'>
                     <li className='li_'>
                        <Link to={'#'} className='cursor-pointer'/> Campaign Opens
                     </li>
                     <li className='li_'>
                        <Link to={'#'} /> Campaign Clicks
                     </li>
                     <li className='li_'>
                        <Link to={'#'} /> Campaign Sent
                     </li>
                     <li className='li_'>
                        <Link to={'#'} /> Campaign Draft
                     </li>
                     <li className='li_'>
                        <Link to={'#'} /> Campaign Report
                     </li>
                  </ul>
               </div>
            </Offcanvas.Body>
         </Offcanvas>
            
         <div className='dash_main'>
            
            <h1>Hello, {userEmail}</h1>
            <h2>Welcome To Your Outreach Dashboard</h2>
            <div className='gmail_redirect'><a href="https://mail.google.com/mail/u/0" target='_blank' rel='noopener noreferrer'>Go To Your GMail Inbox</a></div>
            <div className='dashb_main'>
               <p>This is where all your email campaign details and records for tracking will be displayed</p>
               <p>Use the extension to interact with Gmail, send email campaigns and set your campaign schedules and others</p>
            </div>

            {campaigndetails && campaigndetails.length > 0 ? (
            <Table responsive className='table_'>
               <thead>
               <tr>
                  <th>ID</th>
                  <th >Campaign</th>
                  <th >Recipients</th>
                  <th >Opens</th>
                  <th >Clicks</th>
                  <th >Replies</th>
                  <th >Bounces</th>
               </tr>
               </thead>
               <tbody>
               {campaigndetails.map(( campaign: CampaignDetails ) => (
               <tr key={campaign._id}>
                  <td > {campaign._id}</td>
                  <td > {campaign.emailsubject}</td>
                  <td > <a href="#d">{campaign.emailrecipients.split(',').length}</a></td>
                  <td > {campaign.Opens}</td>
                  <td > {campaign.Clicks}</td>
                  <td > {campaign.Replies}</td>
                  <td > {campaign.Bounces}</td>
               </tr>
               ))}
               </tbody>
            </Table>
            ) : (
               <div className='no-campaign'>No campaign details available.</div>
             )}
         </div>
         <Footer/>
      </div>
   )
   }

export default Dashboard