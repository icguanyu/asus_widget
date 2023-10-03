const lan = {
  REDIRECT: "Dirigera om...",
  RULE: {
    SERVICE_TYPE: "Please select the Service Type",
    COUNTRY: "Välj ert land eller er region",
    USERNAME: "Ett användarnamn krävs",
    EMAIL: "En e-postadress krävs",
    EMAIL2: "Please enter the correct Email format.",
    PRODUCT: "Välj er enhet",
    PRODUCTSN: "Ange er produkts serienummer",
    PRODUCTSN_LEN: "Ange 12 till 15 bokstäver eller siffror",
    BIRTHDAY: "En födelsedag krävs",
    REQUIRED: "Nödvändig",
  },
  SYS: {
    HEAD: "System",
    NOSERVICE:
      "Tyvärr, ASUS Chat för ert valda land eller område är inte tillgängligt.",
    CHECK_FILESIZE:
      "Kontrollera storleken på bilden eller bilagan. Begränsning:",
    RECONNECTED: "Anslutningsstatusen har återgått till det normala",
    UNABLE_SEND: "Det går inte att skicka bilagorna",
    NO_NETWORK: "Ingen internetanslutning",
    NO_NETWORK_INFO:
      "Ingen internetanslutning. Anslut till internet och försök igen.",
  },
  IDLE: {
    HEAD: "Ni har varit inaktiv ett tag. Vill ni fortsätta chatten?",
    BUTTON: "Fortsätt",
  },
  DISCONNECT: {
    HEAD: "Chatten har avslutats",
    BUTTON: "Avsluta",
  },
  LAYOUT: {
    PREV_STEP: "Föregående",
    NEXT_STEP: "Nästa",
    NOTSET: "Inte inställd.",
    AGREEN: "Godkänner",
    NOTAGREEN: "Godkänner inte",
    LEAVE: "Lämna",
    TYPE_HERE: "Type here",
    CHAT_DOWNLOAD:
      "Klicka här för att spara en kopia av er chatt med ASUS kundtjänst.",
  },
  COUNTRY: { SELECT_COUNTRY: "Vänligen välj tjänstens land eller region" },
  POLICY: {
    PRIVACY: "Integritetsskyddspolicy",
    SAT_SURVEY: "Service Agreement",
    CONFIRM_COUNTRY: {
      H1: "Bästa ASUS kund,",
      P1:
        "Ni besöker nu ASUS Kundtjänst för Norden, som skiljer sig från ernuvarande region. Enligt ASUS garantivillkor är inte alla ASUS-produkter tillämpliga för ASUS internationella garanti- och supporttjänster. Om ovanstående regionala webbplats som ni besöker inte är den region där ni köpte er ASUS-produkt eller skiljer sig från er nuvarande region, kan detta påverka era rättigheter. Ni kan fortsätta använda ASUS onlinekundtjänst för Sverige eller ändra ASUS onlinekundtjänst till er region.",
      P2: "",
      P3: "",
      B1: "Byt till ASUS",
      B2: "Hemsida",
      B3: "Fortsätt att använda",
    },
    BULLETIN: {
      HEAD: "Notifikation om ett viktigt meddelande",
      CONFIRM: "Jag förstår",
    },
  },
  SURVEY: {
    SURVEY_ENTER: "Vänligen fyll i era kontaktuppgifter",
    SURVEY_TYPE: "Vänligen välj tjänstetyp",
    PROBLEM_BRIEF: "Hur skulle ni beskriva ert problem?",
    TYPE1: "Generell fråga",
    TYPE2: "Reparationsförfrågan",
    TYPE3: "Teknisk Support",
    TYPE4: "Garantiförfrågan",
    TYPE5: "Åsikter och feedback",
    EC_TYPE1: "Product and Sales Information",
    EC_TYPE2: "Marketing Event",
    EC_TYPE3: "Shipping and Order status",
    EC_TYPE4: "Return Service",
    SIGNUPDATA: "Your Registration Information",
    NAME: "Name",
    TEL: "Phone Number",
    BIRTHDAY: "Birthday",
    EMAIL: "Email",
    DEVICEINFO: "Your product information",
    DEVICENAME: "Product name",
    DEVICESN: "Product Serial Number",
    PREPARE: "Creating the Chat room, getting ready to Chat",
    START: "Start the Chat",
    AGE_LIMIT: "Age Limit",
    AGE_LIMIT_DESC: "You do not meet the age requirements to use ASUS Chat",
    REPEAT_ENTRY: {
      H1: "Existing chat room detected",
      P1:
        "Are you sure you want to start a new conversation? When a new conversation is opened, the old conversation will end.",
      B0: "Confirm",
      B1: "Cancel",
    },
  },
  CONNECTTING: {
    P1: "Please wait a moment, and do not close the Chat window",
    P2: "ASUS Chat is connecting you to an available Agent",
    NOTE: "Hint",
    BEFORE_LEAVE: "Are you sure you want to terminate your ASUS Chat?",
    B0: "Finish",
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
    BEFORE_LEAVEL: "Are you sure you wish to exit the queue?",
    LEAVE_DESC: "If you want to leave the queue, you can finish the Chat",
    LEAVE: "Finish the Chat",
    STAY: "Stay in the queue",
  },
  CHATROOM: {
    TYPING: "Agent is typing...",
    HEAD: {
      CLOSE_AMD_SURVEY: "Leave Chat",
      TERMINATE: "Finish the Chat",
    },
    FOOTER: { CHAT_FINISH: "Chat has finished" },
    FINISH:
      "The Chat has ended. Do you need any additional Service or Support?",
    SAT_SURVEY: {
      SAT: "Satisfied",
      DISSAT: "Dissatisfied",
      SAT_CHOOSE: "What type of Services? (multiple)",
      HEAD: "Were you satisfied with the Chat?",
      DESC:
        "Listening to your feedback is a driving force for our continuous improvement. Please let us know if you have any suggestions for ASUS Service or Support.",
      OTHER_OPTION: "Other",
      OTHER_REASON: "Please fill in the Other reason",
      SEND: "Send",
    },
    CLOSE: {
      TITLE: "Are you sure you want to finish the Chat?",
      P1:
        'Click "Finish" to close the window. If you need to use the Chat again, please click "Start new Chat".',
      B0: "Finish",
      B1: "Cancel",
    },
  },
  ERROR: {
    H1: "The Chat room does not exist or the Chat has already finished",
    CLOSE: "Close the window",
  },
  CHAT_END: {
    H1: "Thank you very much, the Chat has now finished",
    CLOSE: "Close the window",
  },
  CHAT_CLOSE: {
    H1:
      "Your network has been down for more than 300 seconds, so we have terminated this conversation.",
    DESC:
      "If you are using a wireless or a mobile network, please move to a location with a stronger signal; or switch to a wired network connection. We are sorry for any inconvenience",
    CLOSE: "Close the window",
  },
  SURVEY_DONE: {
    H1: "Thank you. You have completed the Service Satisfaction Survey",
    P1:
      'Your feedback is a driving force for our continuous improvement. Thank you for taking the time to complete the Service Satisfaction Survey. If you require additional Service or Support, please click "Start new Chat". Please click "Close the window" to finish the Chat if we have resolved your query',
    AGAIN: "Start new Chat",
    CLOSE: "Close the window",
  },
  AGENT_OFFLINE: {
    H1:
      "The Internet connection of the agent is not responding; your Chat is currently interrupted",
    H2:
      "Please do not close the window; we are working hard to resume the Chat",
    DESC:
      'You can also choose to end the Chat and begin the Survey or click "Start new Chat", and we will immediately assign a new agent to continue your Chat. We apologise for any inconvenience caused',
    AGAIN: "Start new Chat",
  },
  VIDEOCALL: {
    MEDIA_NOTALLOW: "Unable to use camera and microphone",
    H1: "Ready to join?",
    P1:
      "In order for ASUS customer service staff to help you solve the problem more efficiently, you must allow the device to access your camera and microphone to join the video chat room, and please ensure that your mobile network connection is stable and functioning normally",
    P2:
      "After accessing, you can still freely set the lens switch and microphone mute.",
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
};
export default lan;
