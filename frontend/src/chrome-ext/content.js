/*global chrome*/

setInterval(injectLunchBtn, 6000);

async function injectLunchBtn() {
    try {
      sendfirstmailDarft();
      // uploadrecipientsList();
      openRecepientListModal();
      loadIcons();

      let tableButton = document?.getElementsByClassName("btC");
      let OutreachBtn = document.createElement("div"); //create button to be injected
      let leftSide = document.createElement("span"); //create button to be injected
      let rightSide = document.createElement("span"); //create button to be injected

      OutreachBtn.className = "btnContainer";
      leftSide.className = "leftSide";
      rightSide.className = "rightSide";
      leftSide.innerText = "Outreach";
      leftSide.setAttribute("role","button");
      rightSide.setAttribute("role","button");
       
      rightSide.innerHTML = `<svg width="8" height="8" class="svo_" viewBox="0 0 12 11" fill="white" xmlns="http://www.w3.org/2000/svg">
       <path class="svo__" d="M0.299099 0.714108L11.7273 0.714107L6.01321 10.6112L0.299099 0.714108Z" fill="white"/>
      </svg>`;
      OutreachBtn.appendChild(leftSide);
      OutreachBtn.appendChild(rightSide);

      for(let v = 0; v <= tableButton.length; v++) {
            
         const childElements = tableButton[v].children;
         // check if button exits

         if(childElements[1].className === "btnContainer") {
            childElements[1].lastElementChild.addEventListener("click", handleArrorClick);

            // childElements[1].firstElementChild.addEventListener("click", sendmailCampaign);
         }else {
            const insertIndex = 1;
            const childElement = childElements[insertIndex];
            tableButton[v].insertBefore(OutreachBtn, childElement);
            
            childElements[1].lastElementChild.addEventListener("click", handleArrorClick);

            // childElements[1].firstElementChild.addEventListener("click", sendmailCampaign);
         }
    
      }
       
    } catch (error) {
       return false;
    }
 }

 async function sendfirstmailDarft() {
   try {
        let mailTitle = document.querySelectorAll(".aYF")[0];
        let messagesubject = document.querySelectorAll(".aoT")[0];

        if(mailTitle !== undefined && mailTitle !== null) {
               mailTitle.innerHTML = '<span>My First Outreach Email Campaign - Outreach </span>';
         }else {

         }

         if(messagesubject !== undefined && messagesubject !== null) {
            messagesubject.value = "My First Outreach Email Campaign";
            // messagesubject[s].setAttribute("value","My First Outreach Email Campaign");
         }

        let messagebody = document.querySelectorAll(".Am.Al.editable.LW-avf.tS-tW")[0];
        
         if(messagebody !== undefined && messagebody !== null) {  
            messagebody.innerHTML = "Hey {FirstName|Buddy}, this is a test message I'm sending to demonstrate the power of Outreach. I've composed this message and even though I'm sending to about 10 people, you'll think I sent this email just to you. Talk to you soon! (Just click the red Outreach button below, and individual emails will be sent. Go ahead, don't be shy. All the email addresses in the To field belong to Outreach staff, and they're expecting this test email from you. Hit the button, and then check your Sent Mail folder.)";
         }
   
         
   } catch (error) {
      console.log("error loading mail draft", error);
      return false;
   }
} 

async function sendmailCampaign() {
    try {
         let checkuseremailaddress = document.title;
         let useremailaddress = checkuseremailaddress.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi);
         return chrome.runtime.sendMessage({ action: "authenticate", details: useremailaddress[0] });
    } catch (error) {
       console.log("error loading extension frame", error);
       return false;
    }
 }
 
// async function checkToken(key) {
//     try {
//        if (key) {
//           let token = chrome.storage.local.get(`${key}`);
//           if (!token) return false;
//           return token;
//        } else {
//           let token = chrome.storage.local.get(`${chrome.runtime.id}`);
//           if (!token) return false;
//           return token;
//        }
//     } catch (error) {
//        console.log(error);
//        return false;
//     }
//  }
 
//    async function authenticateUser(){
//      if (!await checkToken("signature")) return chrome.runtime.sendMessage({ action: "authenticate" });
//      return await checkToken()
//    };


   
function handleArrorClick(event) {
    let iconData = event.target;
    if(iconData.className === 'rightSide' || iconData.className === 'rightSide rotated' || iconData.className === ' rightSide' || iconData.className === ' rightSide rotated') {
         iconData?.classList.toggle("rotated");
    }else {
      
    }
   //  let testmailSelect = document?.querySelector(".select2-hidden-accessible");
   //  let testmailSpanElement  = document?.querySelector(".select2.select2-container.select2-container--default.select2-container--below.select2-container--focus.select2-container--open")
    injectIfram();
    // e.stopPropagation();
 }

 async function uploadrecipientsList() {
      try {
         let parentDiv = document?.getElementsByClassName("baT");
         let recipientsIcon = document.createElement("span"); //create button to be injected
         
         recipientsIcon.className = "email_recip_icon gsheet_list_icon";
         recipientsIcon.setAttribute("role","button");
         recipientsIcon.style.marginRight = "5px";
         recipientsIcon.style.marginTop = "3px";

         recipientsIcon.innerHTML = `<svg fill="#c42329" class="o_sheet_s" version="1.0" xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" viewBox="0 0 103.000000 103.000000" preserveAspectRatio="xMidYMid meet">
         <style>
         svg:hover {
            cursor: pointer;
         fill: gray;
         }</style>
         <g transform="translate(0.000000,103.000000) scale(0.100000,-0.100000)" stroke="none" class="o_sheet_s">
         <path class="o_sheet_s" d="M159 1016 c-57 -20 -97 -53 -126 -104 l-28 -47 0 -350 c0 -339 1
         -351 22 -390 24 -46 54 -75 103 -101 32 -17 66 -19 365 -22 240 -2 342 0 374
         9 59 17 135 90 150 144 14 51 15 666 1 715 -13 47 -63 106 -113 133 -41 21
         -52 22 -377 24 -257 2 -343 0 -371 -11z m438 -208 c70 -69 81 -103 37 -114
         -21 -6 -34 1 -73 40 l-47 46 -82 -83 -82 -82 83 -83 82 -82 64 64 64 65 -73 3
         c-76 3 -100 17 -87 52 9 24 272 24 281 0 12 -31 7 -349 -6 -362 -18 -18 -123
         -15 -139 4 -19 23 1 48 42 54 l34 5 3 93 c1 50 -1 92 -5 92 -5 0 -44 -36 -88
         -80 -44 -44 -84 -80 -90 -80 -6 0 -46 36 -90 80 -44 44 -82 80 -85 80 -3 0 -4
         -42 -2 -94 l3 -95 37 -3 c40 -3 54 -27 32 -53 -15 -18 -121 -20 -138 -3 -8 8
         -12 63 -12 182 l0 171 122 122 c68 68 129 123 138 123 8 0 43 -28 77 -62z"></path>
         </g>
         </svg>`;
         
       for(let p = 0; p <= parentDiv.length; p++) {
            // check if button exits
            if(parentDiv[p].children.length >= 4) {

            }else {
               parentDiv[p].style.display = "flex";
               const childElements = parentDiv[p].children;
               const insertIndex = 0;
               const childElement = childElements[insertIndex];
               parentDiv[p].insertBefore(recipientsIcon, childElement);
            }
            
       }

      } catch (error) {
         console.log("error loading mail draft", error);
         return false;
      }
 }

 async function loadIcons() {
   let pDiv = document?.querySelector(".gb_hd.gb_rd.gb_we.gb_Je.gb_Oe"); 
   let iconDiv = document.createElement("div"); //create button to be injected
      iconDiv.className = "icons_s";
      iconDiv.style.display = "flex";
      iconDiv.style.flexGrow = "1";
      iconDiv.style.justifyContent= "flex-start";

      iconDiv.innerHTML = `<div title="Build an email list from Gmail search results." class="gsheet_list_icon s_icona" style="padding-right: 10px;" role="button">  
                              <svg fill="red" version="1.0" class="o_sheet_s" xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 103.000000 103.000000" preserveAspectRatio="xMidYMid meet">
                              <style>
                              svg:hover {
                                 cursor: pointer;
                              fill: gray;
                              }</style>
                              <g class="o_sheet_s_" transform="translate(0.000000,103.000000) scale(0.100000,-0.100000)" stroke="none" fill="red">
                              <path class="o_sheet_s_" d="M159 1016 c-57 -20 -97 -53 -126 -104 l-28 -47 0 -350 c0 -339 1
                              -351 22 -390 24 -46 54 -75 103 -101 32 -17 66 -19 365 -22 240 -2 342 0 374
                              9 59 17 135 90 150 144 14 51 15 666 1 715 -13 47 -63 106 -113 133 -41 21
                              -52 22 -377 24 -257 2 -343 0 -371 -11z m438 -208 c70 -69 81 -103 37 -114
                              -21 -6 -34 1 -73 40 l-47 46 -82 -83 -82 -82 83 -83 82 -82 64 64 64 65 -73 3
                              c-76 3 -100 17 -87 52 9 24 272 24 281 0 12 -31 7 -349 -6 -362 -18 -18 -123
                              -15 -139 4 -19 23 1 48 42 54 l34 5 3 93 c1 50 -1 92 -5 92 -5 0 -44 -36 -88
                              -80 -44 -44 -84 -80 -90 -80 -6 0 -46 36 -90 80 -44 44 -82 80 -85 80 -3 0 -4
                              -42 -2 -94 l3 -95 37 -3 c40 -3 54 -27 32 -53 -15 -18 -121 -20 -138 -3 -8 8
                              -12 63 -12 182 l0 171 122 122 c68 68 129 123 138 123 8 0 43 -28 77 -62z"></path>
                              </g>
                              </svg>
                           </div>
                           <div title="Launch the campaigns dashboard." role="button" class="s_icona dash_boda" style="padding-right: 10px"><svg class="dash_boda" id="dash_boda" style="color: red" xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-layout-text-window" viewBox="0 0 16 16"> <path class="dash_boda" id="dash_boda1" d="M3 6.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5z" fill="red"></path> <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm12 1a1 1 0 0 1 1 1v1H1V2a1 1 0 0 1 1-1h12zm1 3v10a1 1 0 0 1-1 1h-2V4h3zm-4 0v11H2a1 1 0 0 1-1-1V4h10z" fill="red"></path> </svg></div>`;
   if(document.querySelectorAll(".icons_s").length > 0) {

   }else {
      const childElements = pDiv.children;
      const insertIndex = 2;

      pDiv.insertBefore(iconDiv,childElements[insertIndex]);
   }      
 }

function openRecepientListModal() {
   let p_Div = document?.getElementsByClassName("gsheet_list_icon"); 
   let gsheetOverlay = document.createElement("div"); //create button to be injected
   //       console.log(chrome.runtime.getURL('letter.png'))
      gsheetOverlay.className = "gsheetoverlay_c";
      gsheetOverlay.id = "gsheetoverlay_c";
      gsheetOverlay.innerHTML = `<div class="modal_content_c" id="modal_content_c" style="padding-right: 10px;"> 
                                    <div class="modal_cc" tabindex="0" role="alertdialog">
                                       <div class="modal_conj">
                                          <span class="" role="heading">How do you want to add recipients?</span>
                                          <span class="close_modal_c" tabindex="0" role="button">X</span>
                                       </div>
                                       <div class=""><div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 1em;"><div class="pick-recipients-button pick-sheets" title="Connect to an email list in a Google Sheet."><img class="gsheet_mod" src="https://cdn.gmass.us/Extension2019Images/google_sheet_1.png"><span>From a Google Sheet</span></div><div class="pick-recipients-button pick-campaign loadfromanothercampaign" title="Connect to a previous campaign."><img class="loadfromanothercampaign" src="https://cdn.gmass.us/Extension2019Images/campaign.png"><span class="loadfromanothercampaign">From another campaign</span></div></div></div>
                                    </div>
                                 </div>`;
      for(let g = 0; g <= p_Div.length; g++) {
         
         if(p_Div[g]) {
            p_Div[g].onclick = function() {
               document.body.append(gsheetOverlay);
            }
         }
      }      
 }


 function openGSheetModal() {

   let gsheetOverlayModal = document.createElement("div"); //create button to be injected
   //       console.log(chrome.runtime.getURL('letter.png'))
   gsheetOverlayModal.className = "gsheetoverlaymodal_c";
   gsheetOverlayModal.id = "gsheetoverlaymodal_c"; 
   //       console.log(chrome.runtime.getURL('letter.png'))
      gsheetOverlayModal.innerHTML = `<div id="mainsheetsdiv" style="color: black; width: 600px; border-color: black; padding: 8px; border-style: solid; background-color: white; margin-top: 20px; max-height: calc(100vh - 40px); left: 348.5px; position: absolute; top: 0px; z-index: 9999; opacity: 1;">
      <div>
         <div style="text-align: center"><img width="80px" class="google-sheets-image" src="https://cdn.gmass.us/Extension2019Images/google_sheet_1.png"></div>
         <div style="margin-bottom: 20px; text-align: center">Choose a Google Sheet below. <a target="_blog" href="https://www.gmass.co/blog/google-sheets-mail-merge/">Learn more.</a></div>
         <div id="ToggleDivOuter" style="margin-bottom: 6px; float: left; font-size: 10pt">
            <span id="ToggleDiv" style="text-decoration: underline;cursor: pointer;color: red;font-weight: 600">Use Your Own Google Sheet</span>
            <div style="margin: 1rem auto 1rem auto">
               <span>Ensure to set unrestricted access to your Google Sheet source</span>
            </div>   
         </div>
         <form id="SheetsForm">
            <div id="divsheets" style="padding: 3px;">
               <div id="sheetsselectparent" class="gsheet-drpdwn">
                  <select id="selectsheets" style="width: 550px;" class="gsheet-sample-drpdwn">
                     <option value="">Select Sample GSheet</option>
                     <option value="17RrD0uhvux2_AZXMXpQBlzMiKNmsBKEjZpMOKUN7KJ4" updatedtime="1/1/2015">Outreach Sample Sheet</option>
                  </select>
               </div>
               <input placeholder="Your-Spreadsheet-ID" id="inputsheets" style="height: 45px; width: 550px;">
            </div>
            <div id="waitingstatus" style="display: none; color: red !important; padding: 3px;">Please wait...</div>
         </form>
      </div>
      <div id="ConnectButton" style="width: 300px; text-align: center; color: white; padding: 9px 5px 9px 12px; font-weight: bold; font-size: 11px; border-radius: 8px; margin: 20px auto auto; background-color: rgb(196, 35, 41); cursor: pointer;">CONNECT TO SPREADSHEET</div>
   </div>`;
   document.body.append(gsheetOverlayModal);
    
 }

 
 
async function loadGoogleSheetData(sheetId, submitbbtn) {
   let recipientsInput = document.querySelectorAll(".agP.aFw");
   console.log('sheet id',sheetId)
   const url = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?`;
   console.log('sheet url',url)
   let emailrecipients = []
   let gsheetdata;  
   // const output = document.querySelector('.output')
   fetch(url)
      .then(res => res.text())
      .then(rep => {
            //Remove additional text and extract only JSON:
            const jsonData = JSON.parse(rep.substring(47).slice(0, -2));
            console.log('google sheet json data',rep)
            console.log('google sheet json data',jsonData.table.rows)
            gsheetdata = jsonData.table.rows;
            for(let j = 0; j <= gsheetdata.length; j++) {
               if(gsheetdata[j] && gsheetdata[j] !== undefined && gsheetdata[j] !== null && gsheetdata[j] !== "") {
                  console.log(' j gsheet', gsheetdata[j].c[0].v);
                  emailrecipients.push(gsheetdata[j].c[0].v)
               }
               
            }

            for(let r = 0; r <= recipientsInput.length; r++) {
               if(recipientsInput[r]) {
                  recipientsInput[r].value = emailrecipients.toString();
               }
            }
            console.log('email rec', emailrecipients.toString())
            console.log('gsheet input tag',recipientsInput)
            document.getElementById("waitingstatus").style.display = "none";
            submitbbtn.parentElement.style.display = "none";
            submitbbtn.parentElement.parentElement.style.display = "none";
      })

}

async function injectIfram() {
   try {
      let checkuseremailaddress = document.title;
      let useremailaddress_ = checkuseremailaddress.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi)
      let useremailaddress = useremailaddress_[0];
      let mailsettingsDiv = document.createElement("div"); //create button to be injected
   //       console.log(chrome.runtime.getURL('letter.png'))
      mailsettingsDiv.className = "outreachsdk__menu";
      mailsettingsDiv.id = "outreachsdk__menu";
      mailsettingsDiv.innerHTML = `<div>
                                       <div class="outreach_main visible" style="position: fixed; left: 909px; top: 10px;">
                                          <div class="closediv" id="closediv">x</div>
                                          <div id="outR">
                                             <div class="o2_settings" id="outRbigdiv" style="background: rgb(255, 255, 255); overflow-y: auto;">
                                                <div class="o2_send_test">
                                                   <span>Send Test Email:</span>
                                                   <div style="display: block;">
                                                      <span class="text_email_recp">Enter your recipients emails separated by coma (Ex. ${useremailaddress}, dev@gmail.com,hello@gmail.com)</span>
                                                      <textarea id="testemailrecipients" class="testemailrecipients" style="display: block;">${useremailaddress}</textarea>
                                                      <div style="display: flex;position: relative;" id="twopartbutton">
                                                         <button style="padding-left: 3px;padding-right:  3px; width:120px;" type="button" class="send-test" id="outRTestEmailButton">Send Test Email</button>
                                                      </div>
                                                   </div>
                                                   <div class="mail_tester">
                                                      <span class="mail_tester">Your email details will be taken from compose fields example, the message body and subject</span>
                                                   </div>
                                                </div>
                                                <div class="o2_settings_accordions">Settings:</div>
                                                <div class="o2_tracking o_accordian">
                                                   <div class="o_accordian_title">
                                                      <span>
                                                      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAMAAAC6V+0/AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAtUExUReDh4p+jpouPk7S3usrMzklQV19la3V6f9/g4fb29vX19UpRWMnMzmBmbAAAANp0qb4AAAAPdFJOU///////////////////ANTcmKEAAAAJcEhZcwAADsIAAA7CARUoSoAAAAC6SURBVChTXZELbsMwDEP1MeU623L/45aUUhQYgQT2sygrjN0jc49cn02/HaPy3graBravlUH8GmhanhaPRQk3YhBljn0RJvZDjkWx1gmBNcgL9NhPXbYe8wzA841fS7hYgnXdyJEWSME/HE6h5YLzOrVk4TkFHSeCPWXn+LS3R3ZTo9Ql1c1P4EVYqwsHcSRcGr5OVDuljZzPfIqkmM/8FwgmEEVXwehcETbg8w2ZYUgDb7MM9/kd9/0GmTILpGn7b0QAAAAASUVORK5CYII=">
                                                      <span style="padding: 3px;">Tracking</span>
                                                      </span>
                                                      <span id="zjDCLmainspread" style="font-weight: normal"></span>
                                                   </div>
                                                   <div class="o_accordian_content">
                                                      <div class="o_show_on_collapse"><span class="o_oval">opens</span><span class="o_oval">clicks</span></div>
                                                      <div class="o_hide_on_collapse">
                                                         <label class="o2_checkbox">
                                                         <input type="checkbox" name="OpenTracking" id="outROpenTracking" checked value="true" data-oval="opens">
                                                         <span>Opens</span>
                                                         </label>
                                                         <label class="o2_checkbox">
                                                         <input type="checkbox" name="ClickTracking" id="outRClickTracking" checked value="true" data-oval="clicks">
                                                         <span>Clicks</span>
                                                         </label>
                                                      </div>
                                                   </div>
                                                </div>
                                                <div class="o2_action o_accordian">
                                                   <div class="o_accordian_title">
                                                      <span>
                                                      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAMAAAC6V+0/AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAnUExUReDh4nV6f4uPk0lQV5+jprS3ul9la8nMzsrMzt/g4fX19UpRWAAAAMAYAr0AAAANdFJOU////////////////wA96CKGAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAjElEQVQoU13QURKEIAwD0EJA0e39z7tpAEX60+F1SBXzvSylHS0D2LCQkD9Yg75oiVAOoD5oulkj8pwoQlPA1bHxEnC0Fg13oMJoZurZbYQByb0PieMzXkN1U1qMxy4ud9N/cep9CetiJkOPthjuQNWMUdDEsYT1ov147APGL9j6Y54rFvUSbWKWqdz/ZI4LGyoM/FYAAAAASUVORK5CYII=">
                                                      <span style="padding: 3px;">Action</span>
                                                      </span>
                                                   </div>
                                                   <div class="o_accordian_content">
                                                      <div class="o_show_on_collapse"><span class="o_oval">send emails</span></div>
                                                      <div class="o_hide_on_collapse">
                                                         <label class="o_radio">
                                                         <input type="radio" checked="" id="outRSendRadio" name="outRSendSave" value="1" data-oval="send emails">
                                                         <span>Send emails</span>
                                                         </label>
                                                         <label class="o_radio">
                                                         <input type="radio" [save]="" id="outRSaveRadio" name="outRSendSave" value="2" data-oval="create drafts">
                                                         <span>Create Drafts</span>
                                                         </label>
                                                         <div style="margin-top:1rem">
                                                            <div style="margin-left: 25px; display:none" class="o2_smtp" id="outRsmtp">
                                                               <div id="outRsmtpquestion"></div>
                                                               <span id="outRsendwith">Send with:</span>
                                                               <label class="o_radio">
                                                               <input data-oval="" type="radio" [gmail]="" id="outRGmailRadio" name="outRSendWith" value="1">
                                                               <span id="outRsendwith2">Gmail</span>
                                                               </label>
                                                               <label class="o_radio">
                                                               <input data-oval="with SMTP Service" type="radio" [smtp]="" id="outRSMTPRadio" name="outRSendWith" value="2">
                                                               <span class="o_smtpserver">SMTP Service</span>
                                                               </label>
                                                            </div>
                                                         </div>
                                                      </div>
                                                   </div>
                                                </div>
                                                <div class="o2_auto_follow_up">
                                                   <div id="outRoa" class="o_accordian">
                                                      <div class="o_accordian_title">
                                                         <span>
                                                            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z"/></svg>
                                                         <span style="padding: 3px;">Auto Follow-up</span>
                                                         </span>
                                                         <span id="outRmainauto"></span>
                                                      </div>
                                                      <div class="o_accordian_content">
                                                         <div id="outRafstatus" class="o_show_on_collapse"></div>
                                                         <div id="hilike_outreach" class="o_hide_on_collapse outreach-auto-follow-ups">
                                                            <div class="outreach-bump" data-bump="1" id="outRfirstbump" style="display: block;">
                                                               <div class="outreach-bump-stage">Stage 1:</div>
                                                               <label class="o2_checkbox" style="float:left; margin-right:3px; padding-top:2px">
                                                               <input type="checkbox" class="outreach-enable-bump" id="outRFirstBumpBox" data-oval="stage 1">
                                                               <span></span>
                                                               </label>
                                                               If
                                                               <select class="o_bump_action" name="FirstBumpAction" id="outRFirstBumpAction" disabled>
                                                                  <option value="r">No Reply</option>
                                                                  <option value="o">No Open</option>
                                                                  <option value="c">No Click</option>
                                                                  <option value="s">No Reply or Click</option>
                                                                  <option value="a">Everyone</option>
                                                               </select>
                                                               <span>after</span>
                                                               <input type="number" size="2" class="o_bump_days" id="outRFirstBumpDays" name="FirstBumpDays" value="1" disabled>
                                                               day(s)
                                                               <a style="text-decoration: underline;color: red;cursor: pointer" class="o_bump_set_time time_setter_d">(set time)</a>
                                                               <a style="text-decoration: underline;color: red;cursor: pointer" class="o_bump_dont_set_time">(don't set time)</a>
                                                               <div class="outreach-follow-up-settings">
                                                                  <div class="o_bump_set_time">
                                                                     at
                                                                     <input type="time" class="o_bump_time" id="outRFirstBumpTime" name="FirstBumpTime">
                                                                     <div class="outreach-clock-icon" style="height: 30px;"></div>
                                                                  </div>
                                                                  <label class="o_radio">
                                                                  <span style="font-size:8pt">Type In Or Paste Auto Follow Up Email Message Here:</span>
                                                                  </label>
                                                                  <br>
                                                                  <textarea id="outRFirstBumpAddedText" class="o_bump_add_text" cols="34" rows="7" style="display: block;">First Follow Up Email Message</textarea>
                                                               </div>
                                                            </div>
                                                            <div class="outreach-bump" data-bump="2" id="outRsecondbump" >
                                                               <div class="outreach-bump-stage">Stage 2:</div>
                                                               <label class="o2_checkbox" style="float:left; margin-right:3px; padding-top:2px">
                                                               <input type="checkbox" class="outreach-enable-bump" id="outRSecondBumpBox" data-oval="stage 2">
                                                               <span></span>
                                                               </label>
                                                               If
                                                               <select class="o_bump_action" name="SecondBumpAction" id="outRSecondBumpAction" disabled>
                                                                  <option value="r">No Reply</option>
                                                                  <option value="o">No Open</option>
                                                                  <option value="c">No Click</option>
                                                                  <option value="s">No Reply or Click</option>
                                                                  <option value="a">Everyone</option>
                                                               </select>
                                                               <span>after</span>
                                                               <input type="text" size="2" class="o_bump_days" id="outRSecondBumpDays" name="SecondBumpDays" value="3" disabled>
                                                               days
                                                               <a style="text-decoration: underline;color: red;cursor: pointer" class="o_bump_set_time time_setter_d">(set time)</a>
                                                               <a style="text-decoration: underline;color: red;cursor: pointer" class="o_bump_dont_set_time">(don't set time)</a>
                                                               <div class="outreach-follow-up-settings">
                                                                  <div class="o_bump_set_time">
                                                                     at
                                                                     <input type="time" class="o_bump_time" id="outRSecondBumpTime" name="SecondBumpTime" >
                                                                     <div class="outreach-clock-icon" style="height: 30px;"></div>
                                                                  </div>
                                                                  <label class="o_radio">
                                                                  <span style="font-size:8pt">Type In Or Paste Auto Follow Up Email Message Here:</span>
                                                                  </label>
                                                                  <br>
                                                                  <textarea id="outRSecondBumpAddedText" class="o_bump_add_text" cols="34" rows="7" style="display: block;">Second Follow Up Email Message</textarea>
                                                               </div>
                                                            </div>
                                                            <div class="outreach-bump" data-bump="3" id="outRthirdbump" >
                                                               <div class="outreach-bump-stage">Stage 3:</div>
                                                               <label class="o2_checkbox" style="float:left; margin-right:3px; padding-top:2px">
                                                               <input type="checkbox" class="outreach-enable-bump" id="outRThirdBumpBox" data-oval="stage 3">
                                                               <span></span>
                                                               </label>
                                                               If
                                                               <select class="o_bump_action" name="ThirdBumpAction" id="outRThirdBumpAction" disabled>
                                                                  <option value="r">No Reply</option>
                                                                  <option value="o">No Open</option>
                                                                  <option value="c">No Click</option>
                                                                  <option value="s">No Reply or Click</option>
                                                                  <option value="a">Everyone</option>
                                                               </select>
                                                               <span>after</span>
                                                               <input type="text" size="2" class="o_bump_days" id="outRThirdBumpDays" name="ThirdBumpDays" value="5" disabled>
                                                               days
                                                               <a style="text-decoration: underline;color: red;cursor: pointer" class="o_bump_set_time time_setter_d">(set time)</a>
                                                               <a style="text-decoration: underline;color: red;cursor: pointer" class="o_bump_dont_set_time">(don't set time)</a>
                                                               <div class="outreach-follow-up-settings">
                                                                  <div class="o_bump_set_time">
                                                                     at
                                                                     <input type="time" class="o_bump_time" id="outRThirdBumpTime" name="ThirdBumpTime">
                                                                     <div class="outreach-clock-icon" style="height: 30px;"></div>
                                                                  </div>
                                                                  <label class="o_radio">
                                                                  <span style="font-size:8pt">Type In Or Paste Auto Follow Up Email Message Here:</span>
                                                                  </label>
                                                                  <br>
                                                                  <textarea id="outRThirdBumpAddedText" class="o_bump_add_text" cols="34" rows="7" style="display: block;">Third Follow Up EMail Message</textarea>
                                                               </div>
                                                            </div>
                                                            
                                                         </div>
                                                      </div>
                                                   </div>
                                                </div>
                                                <div class="o2_schedule o_accordian">
                                                   <div class="o_accordian_title">
                                                      <span>
                                                         <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm64 80v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm128 0v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H336zM64 400v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H208zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H336c-8.8 0-16 7.2-16 16z"/></svg>
                                                      <span style="padding: 3px;">Schedule</span>
                                                      </span>
                                                      <span id="outRmainspread" style="font-weight: normal"></span>
                                                   </div>
                                                   <div class="o_accordian_content">
                                                      <div id="outRschedulestatus" class="o_show_on_collapse"></div>
                                                      <div id="outRspreadfloater" class="o_hide_on_collapse">
                                                         <div style="display:flex">
                                                            <div class="o_col_label" style="float:none">Time:</div>
                                                            <div>
                                                               <select id="outreach_de_DateDropdown" style="margin-bottom:5px;">
                                                                  <option selected="" disabled="" hidden="" value=""></option>
                                                                  <option value="Now" selected="">Now</option>
                                                                  <option value="FiveMinutes" [fiveminutes]="">In 5 minutes</option>
                                                                  <option value="OneHour" [onehour]="">In 1 hour</option>
                                                                  <option value="ThreeHours" [threehours]="">In 3 hours</option>
                                                                  <option value="TomorrowMor" [tomrrowmor]="">Tomorrow morning at 8am</option>
                                                                  <option value="TomorrowAft" [tomorrowaft]="">Tomorrow afternoon at 1pm</option>
                                                                  <option value="TomorrowEve" [tomorroweve]="">Tomorrow evening at 7pm</option>
                                                                  <option value="Custom" [custom]="">Custom date/time</option>
                                                               </select>
                                                               <div class="outreach-expand-field">
                                                                  <input size="30" type="text" id="yankaorte" value="" data-oval="schedule set">
                                                                  <div class="outreach-calendar-icon" style="height: 30px;"></div>
                                                               </div>
                                                               <div style="margin-top: 5px" id="outRSkipWeekendsDiv" class="not-inline-reply-form">
                                                                  <label class="o2_checkbox">
                                                                  <input type="checkbox" name="SkipWeekends" id="outRSkipWeekends" [skipweekendson] value="true" data-oval="skip weekends">
                                                                  <span>Skip weekends</span>
                                                                  </label>
                                                               </div>
                                                            </div>
                                                         </div>
                                                         <div class="o_border_top not-inline-reply-form" style="display:flex">
                                                            <div class="o_col_label" style="float:none">Speed:</div>
                                                            <div>
                                                               <span style="padding-top:0px;">
                                                               <span>Send</span>
                                                               <input type="text" placeholder="max" size="4" id="outRMaxEmails" name="MaxEmails" value="" data-oval="daily limit">
                                                               <span>emails/day</span>
                                                               <button type="button" id="outRcheckusage">Show usage</button>
                                                               </span>
                                                               <div style="margin-top:4px;margin-left: 32px;">
                                                                  <label class="o2_checkbox with-select">
                                                                     <input type="checkbox" id="outRDelayCheckbox" name="DelayCheckbox" [delayoff]="" data-oval="pause between emails">
                                                                     <span>
                                                                        Pause
                                                                        <select id="outRPauseSeconds" name="PauseSeconds" disabled>
                                                                           <option value="1">5-10 seconds</option>
                                                                           <option value="2">10-60 seconds</option>
                                                                           <option value="3">1-5 minutes</option>
                                                                           <option value="5">5-10 minutes</option>
                                                                        </select>
                                                                        between emails
                                                                     </span>
                                                                  </label>
                                                               </div>
                                                            </div>
                                                         </div>
                                                         <div class="o_border_top not-inline-reply-form" style="display:flex; margin-top: 5px" id="outRRecurDiv">
                                                            <div class="o_col_label" style="float:none">Repeat:</div>
                                                            <div>
                                                               <label class="o2_checkbox">
                                                               <input type="checkbox" style="position: relative;" name="Recur" id="outRRecur" [recuron]="" data-oval="repeat">
                                                               <span></span>
                                                               </label>
                                                               <span id="outRRecurEveryLabel" style="font-size: 13px; margin-right: 3px; color: gray;">Every</span>
                                                               <input style="margin-right: 2px; color: gray;" type="text" size="2" id="outRRecurEvery" name="RecurEvery" value="1" disabled>
                                                               <select name="repeatdh" id="outRrepeatdh" disabled>
                                                                  <option value="h">Hour</option>
                                                                  <option value="d">Day</option>
                                                                  <option value="w">Week</option>
                                                                  <option value="m">Month</option>
                                                               </select>
                                                               <span id="outRrepeatmode" style="visibility: hidden;">
                                                                  <span id="outRRecurToLabel" style="color: gray;">to</span>
                                                                  <select name="repeatneworall" id="outRrepeatneworall" disabled="">
                                                                     <option value="n">new</option>
                                                                     <option value="a">all</option>
                                                                  </select>
                                                                  <span id="outRRecurSheetLabel" style="color: gray;">rows</span>
                                                               </span>
                                                            </div>
                                                         </div>
                                                      </div>
                                                   </div>
                                                </div>
                                                <div class="o2_advanced o_accordian not-inline-reply-form">
                                                   <div class="o_accordian_title">
                                                      <span>
                                                         <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M64 0C28.7 0 0 28.7 0 64V352c0 35.3 28.7 64 64 64h96v80c0 6.1 3.4 11.6 8.8 14.3s11.9 2.1 16.8-1.5L309.3 416H448c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64z"/></svg>
                                                      <span style="padding: 3px;">Advanced</span>
                                                      </span>
                                                      <span id="outRmainadvanced" style="font-weight: normal"></span>
                                                   </div>
                                                   <div class="o_accordian_content">
                                                      <div id="outRadvancedstatus" class="o_show_on_collapse"></div>
                                                      <div class="advanced-box2 o_hide_on_collapse" id="outRadvanceddiv">
                                                         <table class="o2_settings_table">
                                                            <tbody>
                                                               <tr>
                                                                  <td>Send as:</td>
                                                                  <td>
                                                                     <label class="o_radio">
                                                                     <input type="radio" checked id="outRNewRadio" name="outRNewReplyRadio" value="x">
                                                                     <span>New messages</span>
                                                                     </label>
                                                                     <label class="o_radio">
                                                                     <input type="radio" [reply]="" id="outRReplyRadio" name="outRNewReplyRadio" value="y" data-oval="send as replies">
                                                                     <span>Replies</span>
                                                                     </label>
                                                                  </td>
                                                               </tr>
                                                               <tr>
                                                                  <td><span>Verify:</span></td>
                                                                  <td>
                                                                     <label class="o2_checkbox">
                                                                     <input type="checkbox" style="position: relative;" name="Verify" value="true" [verifyon]="" id="outRVerify" data-oval="verify">
                                                                     <span>Verify emails before sending</span>
                                                                     </label>
                                                                  </td>
                                                               </tr>
                                                            </tbody>
                                                         </table>
                                                      </div>
                                                   </div>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                    </div>`;
            if(document.querySelectorAll(".outreachsdk__menu").length > 0) {
               document.querySelector("#outreachsdk__menu").remove();
            }else {
               document.body.append(mailsettingsDiv)
            }
            
       } catch (error) {
       console.log("error loading extension frame", error);
       }
}

async function loadingMessage(content) {
   let loadingDiv = document.createElement("div");
   loadingDiv.className = "loading_div";
   loadingDiv.id = "loading_div";
   loadingDiv.innerHTML = `<span class="close_loadingdiv_btn" id="close_loadingdiv_btn">x</span>${content}`;
   if(document.querySelectorAll(".loading_div").length > 0) {
   }else {
      document.body.append(loadingDiv)
   }
}


document.body.addEventListener('click',function (event){
   let gMod_overlay = document?.getElementById("gsheetoverlay_c");
   let gMod_c = document?.getElementById("modal_content_c");
   let gsheetMod_overlay = document?.getElementById("gsheetoverlaymodal_c");
   let gsheetMod_c = document?.getElementById("gsheetmodal_l_c");
   console.log('event target',event.target)
      if(event.target.className === "gsheetoverlay_c") {
         event.target.firstElementChild.classList.add('d_none');
         event.target.classList.add('d_none');
         if(document.querySelector("#gsheetoverlaymodal_c") !== undefined && document.querySelector("#gsheetoverlaymodal_c") !== null) {
            document.querySelector("#gsheetoverlaymodal_c").classList.add("d_none")
         }
      }
      if(event.target.className === "gsheetoverlaymodal_c") {
         event.target.firstElementChild.classList.add('d_none');
         event.target.classList.add('d_none');
         
         if(document.querySelector("#gsheetmodal_l_c") !== undefined && document.querySelector("#gsheetmodal_l_c") !== null) {
            document.querySelector("#gsheetmodal_l_c").classList.add("d_none")
         }
      }
      if(event.target.className === "close_modal_c") {
         gMod_overlay.classList.add('d_none');
         gMod_c.classList.add('d_none');
         event.target.parentElement.parentElement.parentElement.classList.add('d_none')
         event.target.parentElement.parentElement.parentElement.parentElement.classList.add('d_none')
         if(document.querySelector("#gsheetmodal_l_c") !== undefined && document.querySelector("#gsheetmodal_l_c") !== null) {
            document.querySelector("#gsheetmodal_l_c").classList.add("d_none")
         }
      }
      if(event.target.id === "dash_boda" || event.target.id === "dash_boda1" ) {
         window.location.href = "https://theoutreach.co/dashboard";
      }

      if(event.target.className === "gsheet_mod"){
         if(event.target.parentElement !== undefined && event.target.parentElement !== null) {
            gMod_c.remove();
            gMod_overlay.remove();
         }
         gMod_c.remove();
         gMod_overlay.remove();
         if(document.querySelector("#gsheetmodal_l_c") !== undefined && document.querySelector("#gsheetmodal_l_c") !== null) {
            gsheetMod_overlay.classList.add('d_none');
            gsheetMod_c.classList.add('d_none');
         }
         
         openGSheetModal("gsheet_mod")
      }
      if(event.target.className === "o_accordian_title"){
            event.target.parentElement.classList.toggle('open');

      }
      if(event.target.className === "send-test-options"){
         if(event.target.nextElementSibling.style.display === 'none') {
            event.target.nextElementSibling.style.display = 'block';
         }else if(event.target.nextElementSibling.style.display === 'block') {
            event.target.nextElementSibling.style.display = 'none';
         }else {
            event.target.nextElementSibling.style.display = 'block';
         }

      }
      if(event.target.className === "send-test-options") {
         // let checkuseremailaddress = document.title;
         // let useremailaddress = checkuseremailaddress.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi)
      }
      if(event.target.className === "leftSide") {
         if(document.querySelectorAll("#outreachsdk__menu").length > 0) {
            let emailsubject = event.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.firstElementChild.firstElementChild.nextElementSibling.nextElementSibling.lastElementChild.previousElementSibling.value;
            let emailbody = event.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.previousElementSibling.firstElementChild.firstElementChild.firstElementChild.lastElementChild.firstElementChild.nextElementSibling.nextElementSibling.firstElementChild.lastElementChild.firstElementChild.firstElementChild.firstElementChild.nextElementSibling.lastElementChild.firstElementChild.innerHTML;
            let emailrecipients = event.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.firstElementChild.firstElementChild.firstElementChild.firstElementChild.firstElementChild.lastElementChild.firstElementChild.firstElementChild.firstElementChild.firstElementChild.lastElementChild.previousElementSibling.firstElementChild.firstElementChild.firstElementChild.firstElementChild.lastElementChild.firstElementChild.value;
            
            chrome.storage.local.set({ mailsubj: emailsubject }).then(() => {
               // console.log("mail subject is set");
            });

            chrome.storage.local.set({ mailbody: emailbody }).then(() => {
               // console.log("mail body is set");
            });

            chrome.storage.local.set({ mailrecipients: emailrecipients }).then(() => {
               console.log("mail recipients is set",emailrecipients);
            });
            
            sendmailCampaign()
            if(document.querySelectorAll(".loading_div").length > 0) {
               document.querySelector("#loading_div").remove();
            }
            loadingMessage("<div>Loading ... Please wait!!!</div>");
         }else {
            loadingMessage("<div>Please click the toggle button to the right for a better email campaign optimization</div>");
         }

      }

      if(event.target.className === "send-test") {
         loadingMessage("<div>Processing your request... please wait !!!</div>");
         let emailbody = document.querySelectorAll(".Am.Al.editable.LW-avf.tS-tW")[0].innerHTML;
         let emailrecipients = document.querySelectorAll(".agP.aFw")[0].value;
         let emailsubject = document.getElementsByClassName("aoT")[0].value;
         
         console.log('send test email body',emailbody)
         console.log('send test email subject',emailsubject)
         console.log('send test email recipients',emailrecipients)
         console.log('send test email recipients input',document.querySelectorAll(".agP.aFw"))

         chrome.storage.local.set({ mailsubj: emailsubject }).then(() => {
            // console.log("mail subject is set");
         });

         chrome.storage.local.set({ mailbody: emailbody }).then(() => {
            // console.log("mail body is set");
         });

         chrome.storage.local.set({ mailrecipients: emailrecipients }).then(() => {
            console.log("mail recipients is set",emailrecipients);
         });
         
         sendmailCampaign();
      }

      if(event.target.id === "ToggleDiv") {
         if(event.target.innerHTML === "Use Your Own Google Sheet") {
            event.target.innerHTML = "Use Outreach Google Sheet Sample";
         }else {
            event.target.innerHTML = "Use Your Own Google Sheet";
         }

         event.target.parentElement.nextElementSibling.firstElementChild.firstElementChild.firstElementChild.classList.toggle('d_none');
         let gsheetinput = event.target.parentElement.nextElementSibling.firstElementChild.lastElementChild;
         event.target.parentElement.nextElementSibling.lastElementChild.style.display = "none";
         console.log('gsheet input',gsheetinput)
         if(gsheetinput.style.display === "block") {
            gsheetinput.style.display = "none";
         }else {
            gsheetinput.style.display = "block";
         }
      }

      if(event.target.id === "ConnectButton") {
         let selectdpdn = event.target.previousElementSibling.lastElementChild.firstElementChild.firstElementChild.firstElementChild;
         let gsheetinput = event.target.previousElementSibling.lastElementChild.firstElementChild.lastElementChild;
         let erralert = event.target.previousElementSibling.lastElementChild.lastElementChild;
         erralert.style.display = "block";
         let gsheetId;
         if(selectdpdn && selectdpdn.className === "gsheet-sample-drpdwn") {
            if(selectdpdn.value !== "" && selectdpdn.value !== undefined && selectdpdn.value !== null) {
               gsheetId = selectdpdn.value;
            }else {
               erralert.innerHTML = "Select drop down option";
            }
         }else if(gsheetinput && gsheetinput.style.display === "block"){
            if(gsheetinput.value !== "" && gsheetinput !== undefined && gsheetinput !== null) {
               gsheetId = gsheetinput.value;
            }else {
               erralert.innerHTML = "Enter Google Sheet Id !!!";
            }
         }


         console.log('gsheet selectdrpdwn',selectdpdn)
         console.log('gsheet inputa',gsheetinput)
         console.log('gsheet id',gsheetId)
         loadGoogleSheetData(gsheetId,event.target);
      }

      if(event.target.className === "close_loadingdiv_btn") {
         event.target.parentElement.classList.add("d_none")
      }
      if(event.target.className === "outreach-enable-bump") {
         event.target.parentElement.parentElement.classList.toggle('enabled');
         event.target.parentElement.nextElementSibling.toggleAttribute("disabled")
         event.target.parentElement.nextElementSibling.nextElementSibling.nextElementSibling.toggleAttribute("disabled")
      }
      if(event.target.className === "o_bump_set_time time_setter_d") {
         event.target.parentElement.classList.toggle('set-time');
      }
      if(event.target.className === "o_bump_dont_set_time") {
         event.target.parentElement.classList.toggle('set-time');
      }
      if(event.target.id === "outRDelayCheckbox"){
         event.target.nextElementSibling.firstElementChild.toggleAttribute('disabled');
      }
      if(event.target.id === "outRRecur"){
         event.target.parentElement.nextElementSibling.nextElementSibling.toggleAttribute('disabled');
         event.target.parentElement.nextElementSibling.nextElementSibling.nextElementSibling.toggleAttribute('disabled');
      }
      
      // if(event.target.className !== "rightSide" || event.target.className !== "rightSide rotated") {
      //    if(document.querySelectorAll(".outreachsdk__menu").length > 0) {
      //       document.querySelector("#outreachsdk__menu").remove();
      //    }
      // }

      if(event.target.className === "loadfromanothercampaign") {
         loadingMessage("<div>Loading please wait</div>");
      }

      if(event.target.id === "closediv") {
         event.target.parentElement.parentElement.remove()
         document.querySelector("#outreachsdk__menu").remove();
      }
})

async function sendmailcampaignMessage() {
   console.log('bro  --------')
   let emailsubject = await chrome.storage.local.get(["mailsubj"]).then((result) => {
      return result.mailsubj;
   });

   let emailbody = await chrome.storage.local.get(["mailbody"]).then((result) => {
      return result.mailbody;
   });

   let emailrecipients = await chrome.storage.local.get(["mailrecipients"]).then((result) => {
      return result.mailrecipients;
   });

   // let emailrecipients = "aliakbar512006@gmail.com,johnwyatt160gmail.com";

   console.log('email body',emailbody + 'email subject',emailsubject + 'email recipients', emailrecipients)
   let emailsubject_,emailbody_;

   if(emailsubject === undefined || emailsubject === null || emailsubject === "") {
      loadingMessage("<div>Email Subject Cannot Be Empty!</div>");
      return;
   }else if(emailbody === undefined || emailbody === null || emailbody === "") {
      loadingMessage("<div>Email Message/Body Cannot Be Empty!</div>");
      return;
   }else {
      emailsubject_ = emailsubject;
      emailbody_ = emailbody;
   }

   let trackmailbyopen;
   if(document.querySelector("#outROpenTracking")) {
      if(document.querySelector("#outROpenTracking").checked) {
         console.log('opens checked',document.querySelector("#outROpenTracking").value);
         trackmailbyopen = document.querySelector("#outROpenTracking").value;
      }else {
         trackmailbyopen = "";
      }
   }else {
      trackmailbyopen = "";
   }

   let trackmailbyclick;
   if(document.querySelector("#outRClickTracking")) {
      if(document.querySelector("#outRClickTracking").checked) {
         console.log('clicks checked',document.querySelector("#outRClickTracking").value)
         trackmailbyclick = document.querySelector("#outRClickTracking").value;
      }else {
         trackmailbyclick = "";
      }
   }else {
      trackmailbyclick = "";
   }

   let sendemailtesttype;
   if(document.querySelector('input[name = "outRSendSave"]')) {
      console.log('qici sends save value',document.querySelector('input[name = "outRSendSave"]:checked').value);
      sendemailtesttype = document.querySelector('input[name = "outRSendSave"]:checked').value;
   }else {
      sendemailtesttype = "";
   }

   let followupreplyaction1,followupreplyday1,followupreplytime1,followupreplymessage1,followupreplytime_1;
   if(document.querySelector("#outRFirstBumpBox")) {
      if(document.querySelector("#outRFirstBumpBox").checked) {
         followupreplyaction1 = document.querySelector("#outRFirstBumpBox").parentElement.nextElementSibling.value;
         followupreplyday1 = document.querySelector("#outRFirstBumpBox").parentElement.nextElementSibling.nextElementSibling.nextElementSibling.value;
         followupreplytime1 = document.querySelector("#outRFirstBumpBox").parentElement.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.firstElementChild.value;
         followupreplymessage1 = document.querySelector("#outRFirstBumpBox").parentElement.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.lastElementChild.value;

         if(followupreplytime1) {
            followupreplytime_1 = followupreplytime1.value;
         }else {
            followupreplytime_1 = "";
         }

         console.log('reply action',followupreplyaction1)
         console.log('reply day',followupreplyday1)
         console.log('reply time',followupreplytime1)
         console.log('reply message',followupreplymessage1)
      }else {
         followupreplyaction1 = "";
         followupreplyday1 = "";
         followupreplytime1 = "";
         followupreplymessage1 = "";
         followupreplytime_1 = "";
      }
   }else {
      followupreplyaction1 = "";
      followupreplyday1 = "";
      followupreplytime1 = "";
      followupreplymessage1 = "";
      followupreplytime_1 = "";
   }

   let followupreplyaction2,followupreplyday2,followupreplytime2,followupreplymessage2,followupreplytime_2;
   if(document.querySelector("#outRSecondBumpBox")) {
      if(document.querySelector("#outRSecondBumpBox").checked) {
         followupreplyaction2 = document.querySelector("#outRSecondBumpBox").parentElement.nextElementSibling.value;
         followupreplyday2 = document.querySelector("#outRSecondBumpBox").parentElement.nextElementSibling.nextElementSibling.nextElementSibling.value;
         followupreplytime2 = document.querySelector("#outRSecondBumpBox").parentElement.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.firstElementChild.value;
         followupreplymessage2 = document.querySelector("#outRSecondBumpBox").parentElement.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.lastElementChild.value;

         if(followupreplytime2) {
            followupreplytime_2 = followupreplytime2.value;
         }else {
            followupreplytime_2 = "";
         }
         
         console.log('reply action 2',followupreplyaction2)
         console.log('reply day 2',followupreplyday2)
         console.log('reply time 2',followupreplytime2)
         console.log('reply message 2',followupreplymessage2)
      }else {
         followupreplyaction2 = "";
         followupreplyday2 = "";
         followupreplytime2 = "";
         followupreplymessage2 = "";
         followupreplytime_2 = "";
      }
   }else {
      followupreplyaction2 = "";
      followupreplyday2 = "";
      followupreplytime2 = "";
      followupreplymessage2 = "";
      followupreplytime_2 = "";
   }

   let followupreplyaction3,followupreplyday3,followupreplytime3,followupreplymessage3,followupreplytime_3;
   if(document.querySelector("#outRThirdBumpBox")) {
      if(document.querySelector("#outRThirdBumpBox").checked) {
         followupreplyaction3 = document.querySelector("#outRThirdBumpBox").parentElement.nextElementSibling.value;
         followupreplyday3 = document.querySelector("#outRThirdBumpBox").parentElement.nextElementSibling.nextElementSibling.nextElementSibling.value;
         followupreplytime3 = document.querySelector("#outRThirdBumpBox").parentElement.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.firstElementChild.value;
         followupreplymessage3 = document.querySelector("#outRThirdBumpBox").parentElement.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.lastElementChild.value;

         if(followupreplytime3) {
            followupreplytime_3 = followupreplytime3.value;
         }else {
            followupreplytime_3 = "";
         }
         
         console.log('reply action 3',followupreplyaction3)
         console.log('reply day 3',followupreplyday3)
         console.log('reply time 3',followupreplytime3)
         console.log('reply message 3',followupreplymessage3)
      }else {
         followupreplyaction3 = "";
         followupreplyday3 = "";
         followupreplytime3 = "";
         followupreplymessage3 = "";
         followupreplytime_3 = "";
      }
   }else {
      followupreplyaction3 = "";
      followupreplyday3 = "";
      followupreplytime3 = "";
      followupreplymessage3 = "";
      followupreplytime_3 = "";
   }

   let scheduletime;
   if(document.querySelector("#outreach_de_DateDropdown")) {
      scheduletime = document.querySelector("#outreach_de_DateDropdown").value;
      console.log('schedule time', scheduletime)
   }else {
      scheduletime = "";
   }

   let skipweekends;
   if(document.querySelector("#outRSkipWeekends")) {
      if(document.querySelector("#outRSkipWeekends").checked) {
         console.log('skipweekends checked',document.querySelector("#outRSkipWeekends").value);
         skipweekends = true;
      }else {
         skipweekends = "";
      }
   }else {
      skipweekends = "";
   }

   let maxdailymailsend;
   if(document.querySelector("#outRMaxEmails")) {
      maxdailymailsend = document.querySelector("#outRMaxEmails").value;
      console.log('max daily mail send',maxdailymailsend)
   }else {
      maxdailymailsend = "";
   }

   let senddelayinterval;
   if(document.querySelector("#outRDelayCheckbox")) {
      if(document.querySelector("#outRDelayCheckbox").checked) {
         senddelayinterval = document.querySelector("#outRDelayCheckbox").nextElementSibling.firstElementChild.value;
         console.log('mail delay interval',senddelayinterval)
      }else {
         senddelayinterval = "";
      }
   }else {
      senddelayinterval = "";
   }

   let repeatTimes, repeatinterval;
   if(document.querySelector("#outRRecur")) {
      if(document.querySelector("#outRRecur").checked) {
         repeatTimes = document.querySelector("#outRRecur").parentElement.nextElementSibling.nextElementSibling.value;
         console.log('mail repeat times',repeatTimes)
         repeatinterval = document.querySelector("#outRRecur").parentElement.nextElementSibling.nextElementSibling.nextElementSibling.value;
         console.log('mail repeat times',repeatinterval)
      }else {
         repeatTimes = "";
         repeatinterval = "";
      }
   }else {
      repeatTimes = "";
      repeatinterval = "";
   }

   let newreplyradio;
   if(document.querySelector('input[name = "outRNewReplyRadio"]')) {
      console.log('qici send save value',document.querySelector('input[name = "outRNewReplyRadio"]:checked').value);
      newreplyradio = document.querySelector('input[name = "outRNewReplyRadio"]:checked').value;
   }else {
      newreplyradio = "";
   }

   let verifyemails;
   if(document.querySelector('#outRVerify')) {
      if(document.querySelector('#outRVerify').checked) {
         console.log('qici send save value',document.querySelector('#outRVerify').value);
         verifyemails = document.querySelector('#outRVerify').value;
      }
   }else {
      verifyemails = "";
   }

   let checkuseremailaddress = document.title;
   let useremailaddress = checkuseremailaddress.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi)
   
   let userdetails = await chrome.storage.local.get(["userdetaila"]).then((result) => {
      return result.userdetaila;
   });
let accesstoken = userdetails.accessToken;
let refreshtoken = userdetails.refreshToken;
let userappkey = userdetails.userAppKey;

   let maildetails = {
      "accessToken":accesstoken,"userAppKey":userappkey,"refreshToken":refreshtoken,"useremail":useremailaddress[0],"mailcampaignsubject" : emailsubject,"mailcampaignbody" : emailbody,"mailsendtesttype" : sendemailtesttype,"trackbyopen" : trackmailbyopen,"trackbyclicks" : trackmailbyclick,"followupreply1type" : followupreplyaction1,"followupreply1interval" : followupreplyday1,"followupreply1time" : followupreplytime1,"followupreply1message" : followupreplymessage1,"followupreply2type" : followupreplyaction2,"followupreply2interval" : followupreplyday2,"followupreply2time" : followupreplytime2,"followupreply2message" : followupreplymessage2,"followupreply3type" : followupreplyaction3,"followupreply3interval" : followupreplyday3,"followupreply3time" : followupreplytime3,"followupreply3message" : followupreplymessage3,"scheduletime":scheduletime,"skipweekends":skipweekends,"mailsperday":maxdailymailsend,"senddelayinterval":senddelayinterval,"repeatTimes":repeatTimes,"repeatinterval":repeatinterval,"sendas":newreplyradio,"verifyemails":verifyemails
  }
   chrome.runtime.sendMessage({ action: "sendmailcampaign", details: maildetails });
}

 chrome.runtime.onMessage.addListener(async (message, sender, sendResponse) => {
   if(message.action === "userauthenticationSuccess") {
      console.log('user auth success triggered')
      console.log('u data auth email', message.data.email)
      chrome.storage.local.set({ userdetaila: message.data }).then(() => {
         // console.log("mail subject is set");
      });
      chrome.runtime.sendMessage({ action: "checkforfirstemailcampaign", details: message.data.email });
   }
   
   if(message.action === "userauthenticationfailure") {

   }

   if(message.action === "firstemailcampaigntrue") {
      console.log('first mail true');
      console.log('send mail triggered');
      sendfirstmailDarft();
      sendmailcampaignMessage();
   }

   if(message.action === "firstemailcampaignfalse") {
      console.log('first mail false');
      console.log('send mail triggered');
      sendmailcampaignMessage();
   }
})
