import React, { useEffect, useState } from 'react'
import { Overlay } from '../App'
import axios from 'axios';
import Modal from './Modal'
import FileUploadModal from './Modal/FileUploadModal';
import { OutreachButton } from './styles/ButtonVariants.styled';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import logo from '../../src/assets/images/logo.png';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Table from 'react-bootstrap/Table';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas, faCheck, faCheckCircle, faCheckSquare, faCheckDouble, faRightFromBracket, faAlignJustify } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFontAwesome, faGoogle } from '@fortawesome/free-brands-svg-icons'
import Footer from './Footer';

library.add(fas, faTwitter, faFontAwesome, faGoogle, faCheck,faCheckCircle)

const Privacy = () => {
//    const [modalState, setModalState] = useState<boolean>(false);
//    const [recipientModalState, setRecipientModalState] = useState<boolean>(false);
//    const [bulkRecipients, setBulkRecipients] = useState<string>("");
//    const [recipientsInputType, seRecipientsInputType] = useState<string>("");

   const [userappkey, setAppKey] = useState<any>("");
   const [userData, setUserData] = useState<any>("");
   const [userEmail, setUserEmail] = useState<any>("");
   
   const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

   
   useEffect(() => {
      setAppKey(localStorage.getItem("signature"));
      
         }, [userappkey,userData,userEmail])

   return (
      <div className='ptmain'>
         <Navbar collapseOnSelect expand="lg" bg="dark" data-bs-theme="dark" className="bg-body-tertiary">
            <Container className="d-flex justify-content-between">
            <Navbar.Brand href="#"><img src={logo} alt='logo'/></Navbar.Brand>
            <div>
               <span className='text-white m-lg-2 uemail'>{userEmail}</span>
               <Button onClick={handleShow} variant='secondary'><FontAwesomeIcon icon={faAlignJustify} size='lg' className='text-white'/></Button>
            </div>
            </Container>
         </Navbar>
         <div className='mainer'>
            <h1>Privacy Policy for TheOutreach.co</h1>
            <h2>Last Updated: September 22, 2023</h2>
            <h3>1. Introduction</h3>
            <p>Welcome to TheOutreach.co, your best mass Gmail sender! At The Outreach, we are dedicated to providing you with a powerful email outreach tool that simplifies your email marketing efforts. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website and services.</p>
            <h3>2. Our Services and Benefits</h3>
            <p>At The Outreach, we offer a range of features and benefits to enhance your email marketing experience, including but not limited to:</p>
            <p>Sending bulk email campaigns to many recipients at once.
               Tracking the performance of your email campaigns at several time intervals of your preference.
               Sending test mail campaigns for experimental purposes to optimize your outreach strategies.
               Creating email campaign drafts and scheduling them for future delivery.
               Automating follow-ups and reminders to improve engagement with your recipients.
               And many more features designed to optimize your email outreach efforts.
            </p>
            <h3>3. Information We Collect</h3>
            <h4>In order to provide you with these services, we may collect the following types of information:</h4>
            <h4>3.1 Personal Information</h4>
            <ul>
               <li>Name</li>
               <li>Email address</li>
               <li>Phone number</li>
               <li>Company name</li>
            </ul>
            <h4>3.2 Usage Information</h4>
            <ul>
               <li>Log files</li>
               <li>IP address</li>
               <li>Browser type</li>
               <li>Operating system</li>
               <li>Referring website</li>
            </ul>
            <h3>4. How We Use Your Information</h3>
            <h4>We use the collected information for the following purposes:</h4>
            <h4>4.1 Providing Services</h4>
            <ul>
               <li>To provide and maintain our services</li>
               <li>To communicate with you regarding our services</li>
               <li>To process transactions and payments</li>
            </ul>
            <h4>4.2 Analytics and Improvements</h4>
            <ul>
               <li>To analyze user behavior and trends</li>
               <li>To improve our website and services</li>
               <li>To customize content and user experience</li>
            </ul>
            <h4>4.3 Marketing and Communications</h4>
            <h4>To send promotional materials and updates</h4>
            <ul>
               <li>To send promotional materials and updates</li>
               <li>To respond to inquiries and support requests</li>
            </ul>
            <h3>5. Sharing Your Information</h3>
            <p>We may share your information with third parties under the following circumstances:</p>
            <h4>5.1 Service Providers</h4>
            <p>We may share your information with third-party service providers who help us deliver our services.</p>
            <h4>5.2 Legal Compliance</h4>
            <p>We may disclose your information if required by law or in response to legal requests.</p>
            <h4>5.3 Business Transfers</h4>
            <p>In the event of a merger, acquisition, or sale of assets, your information may be transferred to the acquiring entity.</p>
            <h3>6. Security</h3>
            <p>We implement reasonable security measures to protect your information from unauthorized access, disclosure, or alteration.</p>
            <h3>7. Your Choices</h3>
            <h4>You have the following choices regarding your personal information:</h4>
            <ul>
               <li>You can update or correct your information by contacting us.</li>
               <li>You can opt-out of receiving marketing communications from us.</li>
               <li>You can request the deletion of your account and personal data, subject to legal requirements.</li>
            </ul>
            <h3>8. Children's Privacy</h3>
            <p>Our services are not intended for children under the age of 13. We do not knowingly collect or maintain information from children.</p>
            <h3>9. Changes to this Privacy Policy</h3>
            <p>We may update this Privacy Policy from time to time. The most recent version will be posted on our website with the last updated date.</p>
            <h3>10. Contact Us</h3>
            <p>If you have any questions or concerns about this Privacy Policy or our practices, please contact us at <a href='mailto:Alexryancl@gmail.com' rel="noopener noreferrer">Alexryancl@gmail.com</a></p>
            <p>In order to track opens, clicks, and provide unsubscribe functionality via the GMass unsubscribe link, our database does store the email addresses to which you are sending email. This data is stored in a database, secured by two layers of firewalls, and is never shared with any third parties. GMass is similar in this regard to well-known email marketing systems like MailChimp, where storage of email addresses is required to provide standard email marketing features.</p>
            
         </div>
         <Footer/>
      </div>
   )
   }

export default Privacy