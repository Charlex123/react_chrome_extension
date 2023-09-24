/*global chrome*/
chrome.runtime.onInstalled.addListener(function() {
  //alert('You just made the best decision of today, by installing GMass!\n\nWe will now redirect you to your Gmail account so you can get started sending email campaigns inside Gmail.');
//window.open("https://mail.google.com");
chrome.tabs.create({
              // TODO(brad): Handle inbox?
              url: 'https://mail.google.com/',
              active: true
  });
});

chrome.runtime.onMessage.addListener(async (message, sender, sendResponse) => {

    if (message.action === "authenticate") {
      // Create a new tab and store its ID:: chrome.runtime.getURL("index.html")
      try {
        console.log('message detail',message.details);
        const response = await fetch("http://localhost:3000/user/verifyuser", {
              method: "POST",
              body: JSON.stringify({'email':message.details}),
              headers: {
                "Accept": "application/json",
                'Content-Type': 'application/json',
              },
            });
            console.log('verify user ',response)
            if (response.ok) {
              const responseData = await response.json();
              // sendResponse(sender.tab.id, { action: "draftCreated", data: responseData });
             
              chrome.storage.local.set({ userdetaila: responseData }).then(() => {
                // console.log("userdetailia is set");
             });
              if(responseData.email === message.details) {
                sendResponse(sender.tab.id, { action: "userauthenticationSuccess", data: responseData });
                chrome.tabs.sendMessage(sender.tab.id, { action: "userauthenticationSuccess", data: responseData });
              }else {
                sendResponse(sender.tab.id, { action: "userauthenticationfailure" });
                chrome.tabs.sendMessage(sender.tab.id, { action: "userauthenticationfailure" });
              }
              
            } else {
              console.error("Error authenticating user:", response.status);
              chrome.tabs.create({
                // TODO(brad): Handle inbox?
                url: 'http://localhost:3000/auth/google',
                active: true
              });
            }
      } catch(error){
          chrome.tabs.create({
            // TODO(brad): Handle inbox?
            url: 'http://localhost:3000/auth/google',
            active: true
          });
          console.log('authentication error message',error.message)
      }
    }
    
    if (message.action === "checkforfirstemailcampaign") {
      // Create a new tab and store its ID:: chrome.runtime.getURL("index.html")
      try {
        console.log('message detail',message.details);
        const response = await fetch("http://localhost:3000/campaigns/checkfirstmailcampaign", {
              method: "POST",
              body: JSON.stringify({'email':message.details}),
              headers: {
                "Accept": "application/json",
                'Content-Type': 'application/json',
              },
            });
            if (response.ok) {
              const responseData = await response.json();
              // sendResponse(sender.tab.id, { action: "draftCreated", data: responseData });
              console.log('checkfirstmail email', responseData.message)
              if(responseData.message === message.details) {
                sendResponse(sender.tab.id, { action: "firstemailcampaigntrue", data: responseData });
                chrome.tabs.sendMessage(sender.tab.id, { action: "firstemailcampaigntrue", data: responseData });
              }else {
                sendResponse(sender.tab.id, { action: "firstemailcampaignfalse" });
                chrome.tabs.sendMessage(sender.tab.id, { action: "firstemailcampaignfalse" });
              }
              
            } else {
              console.error("Error authenticating user:", response.status);
              sendResponse(sender.tab.id, { action: "userauthenticationfailure" });
            }
      } catch(error){
          console.log('authentication error message',error.message)
      }
    }
    
    if (message.action === "sendmailcampaign") {
        // Create a new tab and store its ID:: chrome.runtime.getURL("index.html")
        try {
            console.log(message.details)
            const response = await fetch("http://localhost:3000/campaigns/sendemailcampaign", {
              method: "POST",
              body: JSON.stringify(message.details),
              headers: {
                "Content-Type": "application/json"
              },
            });
        
            if (response.ok) {
              const responseData = await response.json();
              console.log("Email campaign created:", responseData);
              // sendResponse(sender.tab.id, { action: "draftCreated", data: responseData });
              // chrome.tabs.sendMessage(sender.tab.id, { action: "draftCreated", data: responseData });
            } else {
              console.error("Error creating draft:", response.status);
              // sendResponse(sender.tab.id, { action: "draftCreationError" });
            }
          } catch (error) {
            console.error("Error creating draft:", error.message);
            sendResponse(sender.tab.id, { action: "draftCreationError" });
          }
    }
  });
  
//   chrome.runtime.onInstalled.addListener(function() {
//     //alert('You just made the best decision of today, by installing GMass!\n\nWe will now redirect you to your Gmail account so you can get started sending email campaigns inside Gmail.');
// 	//window.open("https://mail.google.com");
// 	chrome.tabs.create({
//                 // TODO(brad): Handle inbox?
//                 url: 'https://mail.google.com',
//                 active: true
//     });
// });

if (chrome.runtime.setUninstallURL) {
    chrome.runtime.setUninstallURL('https://forms.gle/qJapwFkCFjrmNbK39');
}