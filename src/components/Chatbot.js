import React, { useEffect } from 'react'
 
const Chatbot = () => {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://cdn.botpress.cloud/webchat/v1/inject.js'
    script.async = true
    document.body.appendChild(script)
 
    script.onload = () => {
      window.botpressWebChat.init({
        "composerPlaceholder": "say hi!",
        "botConversationDescription": "your assistant",
        "botId": "81fc9202-c902-4581-ab65-e9650213b002",
        "avatarUrl": "https://i.ibb.co/LYfmySF/Goadestination-Weddzing-7.png",
        "hostUrl": "https://cdn.botpress.cloud/webchat/v1",
        "messagingUrl": "https://messaging.botpress.cloud",
        "clientId": "81fc9202-c902-4581-ab65-e9650213b002",
        "webhookId": "1a244e21-1335-4c39-a63b-41a366f76415",
        "lazySocket": true,
        "themeName": "prism",
        "botName": "Goa Destination Weddings",
        "stylesheet": "https://webchat-styler-css.botpress.app/prod/6e72f92d-51bf-4e80-9753-d964a044a755/v45261/style.css",
        "frontendVersion": "v1",
        "useSessionStorage": true,
        "enableConversationDeletion": true,
        "theme": "prism",
        "themeColor": "#2563eb"
    });
    }
  }, [])
 
  return <div id="webchat" />
}
 
export default Chatbot