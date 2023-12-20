const lan = {
  REDIRECT: "Redirect...",
  RULE: {
    SERVICE_TYPE: "Please select the Service Type",
    COUNTRY: "Please select your country or region",
    USERNAME: "A Username is required",
    EMAIL: "An email is required",
    EMAIL2: "Please enter the correct Email format.",
    PRODUCT: "Please select your device",
    PRODUCTSN: "Please enter your product serial number",
    PRODUCTSN_LEN: "Please enter 12 to 15 letters or numbers",
    BIRTHDAY: "A birthday is required",
    REQUIRED: "Required",
  },
  SYS: {
    HEAD: "System",
    NOSERVICE:
      "Sorry, ASUS Chat Service for your selected country or region is not available.",
    CHECK_FILESIZE:
      "Please check the size of the image or file attachment. Limit:",
    RECONNECTED: "The connection status has returned to normal",
    UNABLE_SEND: "Unable to send the attachments",
    NO_NETWORK: "No internet connection",
    NO_NETWORK_INFO:
      "No internet connection. Please check your network connection and try again.",
  },
  IDLE: {
    HEAD: "You have been idle for a while. Would you like to continue the Chat session?",
    BUTTON: "Continue",
  },
  DISCONNECT: {
    HEAD: "The Chat session has ended",
    BUTTON: "End the Chat",
  },
  LAYOUT: {
    PREV_STEP: "Previous",
    NEXT_STEP: "Next",
    NOTSET: "Not set.",
    AGREEN: "Agree",
    NOTAGREEN: "Disagree",
    LEAVE: "Leave",
    TYPE_HERE: "Type here",
    CHAT_DOWNLOAD:
      "Please click here to save a copy of your Chat with ASUS Online Chat Service.",
  },
  COUNTRY: { SELECT_COUNTRY: "Please select the Service country or region" },
  POLICY: {
    PRIVACY: "Privacy Protection Policy",
    SAT_SURVEY: "Service Agreement",
    CONFIRM_COUNTRY: {
      H1: "Dear ASUS Customer,",
      P1: "You are now visiting ASUS Online Chat Service for North America, which is different from your current region. According to the ASUS Warranty Terms, not every ASUS product is applicable for ASUS International Warranty and Support service. If the above regional site you are visiting is not the region where you bought your ASUS product or is different from your current region, it may affect your rights. You can continue using ASUS Online Chat Service for North America or change the ASUS Online Chat Service to your region.",
      P2: "",
      P3: "",
      B1: "Switch to ASUS",
      B2: "Website",
      B3: "Continue to use",
    },
    BULLETIN: {
      HEAD: "Notification of an Important Message",
      CONFIRM: "I got it",
    },
  },
  SURVEY: {
    SURVEY_ENTER: "Please fill in your contact information",
    SURVEY_TYPE: "Please select the Service type",
    PROBLEM_BRIEF: "How would you describe your issue?",
    TYPE1: "General question",
    TYPE2: "Before/In Progress Repair Support Questions",
    TYPE3: "Technical support",
    TYPE4: "Warranty inquiry",
    TYPE5: "After Repair Support Questions",
    EC_TYPE1: "Product and Sales Information",
    EC_TYPE2: "Shipping and Order Status",
    EC_TYPE3: "Returns",
    EC_TYPE4: "Other",
    SIGNUPDATA: "First and Last Name",
    NAME: "Name",
    TEL: "Phone Number",
    BIRTHDAY: "Birthday",
    LABEL_EMAIL: "Email",
    EMAIL: "Email",
    DEVICEINFO: "Your product information",
    DEVICENAME: "Product name",
    LABEL_DEVICESN: "Serial Number",
    DEVICESN: "Product Serial Number",
    PREPARE: "Creating the Chat room, getting ready to Chat",
    START: "Start the Chat",
    AGE_LIMIT: "Age Limit",
    AGE_LIMIT_DESC: "You do not meet the age requirements to use ASUS Chat",
    REPEAT_ENTRY: {
      H1: "Existing chat room detected",
      P1: "Are you sure you want to start a new conversation? When a new conversation is started, the old conversation will end.",
      B0: "Confirm",
      B1: "Cancel",
    },
  },
  CONNECTTING: {
    P1: "Please wait a moment, and do not close the Chat window",
    P2: "ASUS Chat is connecting you to an available Agent",
    NOTE: "Hint",
    BEFORE_LEAVE: "Are you sure you want to end your ASUS Chat?",
    B0: "End the Chat",
    B1: "Stay and wait",
  },
  OFFLIEN: {
    OTHER_CONTACT: "Contact ASUS via other channels",
    MAIL: "Email Us",
    TEL: "Call Us",
    CLOSE: "Close",
  },
  WAITTING: {
    WATTING_NUM: "Position in the queue",
    PEOPLE: "Customer",
    NOTE: "Hint",
    BEFORE_LEAVEL: "Are you sure you want to leave the queue?",
    LEAVE_DESC: "If you want to leave the queue, you may end the Chat",
    LEAVE: "End the Chat",
    STAY: "Stay in the queue",
  },
  CHATROOM: {
    TYPING: "Agent is typing...",
    HEAD: {
      CLOSE_AMD_SURVEY: "Leave Chat",
      TERMINATE: "End the Chat",
    },
    FOOTER: { CHAT_FINISH: "Chat session has ended" },
    FINISH:
      "The Chat session has ended. Do you need any additional Service or Support?",
    SAT_SURVEY: {
      SAT: "Satisfied",
      DISSAT: "Dissatisfied",
      SAT_CHOOSE: "What type of Services? (multiple)",
      HEAD: "Were you satisfied with the Chat Service?",
      DESC: "Listening to your feedback is a driving force for our continuous improvement. Please let us know if you have any suggestions for ASUS Service or Support.",
      OTHER_OPTION: "Other",
      OTHER_REASON: "Please fill in the Other reason",
      SEND: "Submit",
    },
    CLOSE: {
      TITLE: "Are you sure you want to end the Chat?",
      P1: 'Click "Finish" to close the window. If you need to Chat again, please click "Start new Chat".',
      B0: "End Chat",
      B1: "Cancel",
    },
  },
  ERROR: {
    H1: "The Chat room does not exist or the Chat has already ended",
    CLOSE: "Close the window",
  },
  CHAT_END: {
    H1: "Thank you very much, the Chat has now ended",
    CLOSE: "Close the window",
  },
  CHAT_CLOSE: {
    H1: "Your network has been down for more than 300 seconds, so we have terminated this Chat session.",
    DESC: "If you are using a wireless or a mobile network, please move to a location with a stronger signal, or switch to a wired connection. We are sorry for any inconvenience",
    CLOSE: "Close the window",
  },
  SURVEY_DONE: {
    H1: "Thank you for your feedback. You have completed the Service Satisfaction Survey",
    P1: 'Your feedback is a driving force for our continuous improvement. Thank you for taking the time to complete the Service Satisfaction Survey. If you require additional Service or Support, please click "Start new Chat". Click "Close the window" to finish the Chat if we have resolved your inquiry',
    AGAIN: "Start a new Chat",
    CLOSE: "Close the window",
  },
  AGENT_OFFLINE: {
    H1: "We're sorry, it seems the internet connection of the agent is not responding. Your Chat session is temporarily interrupted. Please wait while we attempt to resolve it.",
    H2: "Please do not close this window. We are working hard to resume the Chat session for your convenience.",
    DESC: 'You can also choose to end the Chat session and begin the Survey, or click "Start new Chat" and we will immediately assign a new agent to continue your Chat. We apologize for any inconvenience caused',
    AGAIN: "Start a new Chat",
  },
  VIDEOCALL: {
    MEDIA_NOTALLOW: "Unable to use camera and microphone",
    H1: "Ready to join?",
    P1: "In order for ASUS customer service staff to help you solve the problem more efficiently, you must allow the device to access your camera and microphone to join the video chat room, and please ensure that your mobile network connection is stable and functioning normally",
    P2: "After accessing, you can still freely set the lens switch and microphone mute.",
    VIDEO_STATE: "Video status",
    VIDEO_ON: "On",
    VIDEO_OFF: "Off",
    AUDIO_STATE: "Audio status",
    AUDIO_ON: "On",
    AUDIO_OFF: "Off",
    ENTER: "Join",
    HANGUP: {
      H1: "Hangup",
      P1: "Are you sure to hangup the viode chat?",
      CONFIRM: "Confirm",
      CANCEL: "Cancel",
    },
    END: {
      H1: "Video Call has ended",
      P1: "Thank you, this video chat is over, you can close this window.",
    },
  },
  GPT: {
    LAYOUT: {
      WELCOME: "Welcome",
      AGREE: "Agree",
      START: "Start",
      CANCEL: "Cancel",
      WAIT: "Please wait.",
      INPUT: "Enter your question here",
      TRANSFER_TOAGENT: "Transfer to agent.",
      READMORE:
        "You can also refer to the following FAQ for more details, thank you.",
      COLLAPSE: "Hide",
    },
    HEAD: {
      LEAVE: "Leave",
      CREATE_NEW: "Start Over",
    },
    ENTRANCE: {
      POLICY: "Privacy Policy",
      AGREE: "By clicking Start, you agree to ASUS Privacy Policy.",
    },
    MESSAGE: {
      WAIT: "Please give me a moment to gather more information, I will be right back with you!",
    },
    END: "Satisfaction Survey",
    END_MSG: "Thank you for choosing ASUS and I hope you have a wonderful day!",
    BACKHOME: "Restart Conversation",
    SURVEY: {
      DESC: "Please rate your experience with ASUS virtual assistant.",
      SAT: "Satisfied",
      DISSAT: "Unsatisfied",
      FEEDBACK: "Please fill in your feedback.",
      SEND: "Send",
      BACK: "Cancel",
    },
  },
};
export default lan;
