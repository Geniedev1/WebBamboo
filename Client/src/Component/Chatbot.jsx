import { useEffect } from "react";

const Chatbot = () => {
  useEffect(() => {
    // Step 1: Inject inject.js
    const injectScript = document.createElement("script");
    injectScript.src = "https://cdn.botpress.cloud/webchat/v2.4/inject.js";
    injectScript.async = true;

    injectScript.onload = () => {
      // Sau khi inject.js đã sẵn sàng, inject config của bot
      const botScript = document.createElement("script");
      botScript.src = "https://files.bpcontent.cloud/2025/05/06/06/20250506061236-W97H8HOU.js";
      botScript.async = true;

      botScript.onload = () => {
        // Sau khi cả bot đã load, gán config tùy chỉnh vị trí
        if (window.botpressWebChat) {
          window.botpressWebChat.mergeConfig({
            stylesheetConfig: {
              alignment: 'left', // Hoặc 'right'
              verticalMargin: '30px',
              horizontalMargin: '20px'
            }
          });
        }
      };

      document.body.appendChild(botScript);
    };

    document.body.appendChild(injectScript);

    return () => {
      document.body.removeChild(injectScript);
    };
  }, []);

  return null;
};

export default Chatbot;
