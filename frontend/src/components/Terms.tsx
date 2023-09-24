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
import Footer from './Footer'

library.add(fas, faTwitter, faFontAwesome, faGoogle, faCheck,faCheckCircle)

const Terms = () => {
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
               <Button onClick={handleShow} variant='transparent'><FontAwesomeIcon icon={faRightFromBracket} size='lg' className='text-white'/></Button>
            </div>
            </Container>
         </Navbar>
         <div className='mainer'>
            <h1>Terms of Use for TheOutreach.co</h1>
            <h2>Last Updated: September 22, 2023</h2>
            <h4>By accessing or using TheOutreach.co (referred to as "the Service"), you agree to comply with and be bound by these Terms of Use. If you do not agree to these terms, please do not use the Service.</h4>
            <h3>1. Use of the Service</h3>
            <h4>1.1 Eligibility:</h4>
            <p>You must be at least 18 years old or have the necessary legal capacity to enter into these Terms of Use. By using the Service, you represent and warrant that you meet these requirements.</p>
            <h4>1.2 User Account:</h4>
            <p>To access certain features of the Service, you may be required to create a user account. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.</p>
            <h4>1.3 Acceptable Use:</h4>
            <p>You agree not to use the Service for any unlawful or prohibited purpose, including but not limited to:</p>
            <p>Violating any applicable local, state, national, or international laws or regulations. Uploading, posting, or transmitting any content that is harmful, offensive, or violates the rights of others.</p>
            <p>Attempting to interfere with the operation of the Service or access it in an unauthorized manner.</p>
            <h3>2. Intellectual Property Rights</h3>
            <h4>2.1 Ownership:</h4>
            <p>The Service and its content, including but not limited to text, graphics, logos, images, and software, are the property of TheOutreach.co and are protected by copyright and other intellectual property laws.</p>
            <h4>2.2 License:</h4>
            <p>You are granted a limited, non-exclusive, and non-transferable license to use the Service for its intended purpose, subject to these Terms of Use.</p>
            <h4>2.3 Restrictions:</h4>
            <p>You may not reproduce, modify, distribute, or create derivative works based on the Service or its content without our prior written consent.</p>
            <h3>3. Privacy</h3>
            <p>Your use of the Service is also governed by our Privacy Policy, which is incorporated by reference into these Terms of Use. Please review the Privacy Policy for information about how we collect, use, and protect your personal information.</p>
            <h3>4. Termination</h3>
            <p>We reserve the right to terminate or suspend your access to the Service at our discretion, with or without cause and without notice.</p>
            <h3>5. Disclaimer of Warranties</h3>
            <p>THE SERVICE IS PROVIDED "AS IS" WITHOUT ANY WARRANTIES, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE SERVICE WILL BE ERROR-FREE OR UNINTERRUPTED.</p>
            <h3>6. Limitation of Liability</h3> 
            <p>IN NO EVENT SHALL THEOUTREACH.CO BE LIABLE FOR ANY INDIRECT, CONSEQUENTIAL, INCIDENTAL, SPECIAL, OR PUNITIVE DAMAGES, OR DAMAGES FOR LOSS OF PROFITS, REVENUE, DATA, OR USE, INCURRED BY YOU OR ANY THIRD PARTY, WHETHER IN AN ACTION IN CONTRACT OR TORT, ARISING FROM YOUR ACCESS TO, OR USE OF, THE SERVICE.</p>
            <h3>7. Changes to Terms</h3>
            <p>We may revise these Terms of Use from time to time. The most current version will be posted on the Service with the last updated date. Your continued use of the Service constitutes your acceptance of the revised terms.</p>
            <h3>8. Contact Us</h3>
            <p>If you have any questions or concerns about these Terms of Use, please contact us at <a href='mailto:Alexryancl@gmail.com' rel="noopener noreferrer">Alexryancl@gmail.com</a></p>
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
            <p>If you have any questions or concerns about this Privacy Policy or our practices, please contact us at <a href='mailto:Alexryancl@gmail.com'>Alexryancl@gmail.com</a></p>
         </div>
         <Footer/>
      </div>
   )
   }

export default Terms