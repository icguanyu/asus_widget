const lan = {
  REDIRECT: "Redirigiendo...",
  RULE: {
    SERVICE_TYPE: "Por favor, seleccione el tipo de servicio",
    COUNTRY: "Por favor, seleccione país o región",
    USERNAME: "Se requiere nombre de usuario",
    EMAIL: "Se requiere un correo electrónico",
    EMAIL2: "Por favor, introduzca el formato de correo electrónico correcto.",
    PRODUCT: "Por favor, seleccione su dispositivo",
    PRODUCTSN: "Por favor introduzca el número de serie de su producto",
    PRODUCTSN_LEN: "Por favor, introduzca de 12 a 15 letras o números",
    BIRTHDAY: "La fecha de nacimiento es un campo obligatorio",
    REQUIRED: "Necesario",
  },
  SYS: {
    HEAD: "Sistema",
    NOSERVICE:
      "Lo sentimos, el chat ASUS para su país o región seleccionado no está disponible.",
    CHECK_FILESIZE:
      "Por favor, compruebe el tamaño de la imagen y el archivo. Límite:",
    RECONNECTED: "El estado de la conexión ha vuelto a la normalidad",
    UNABLE_SEND: "No se puede subir el adjunto",
    NO_NETWORK: "No hay conexión a Internet",
    NO_NETWORK_INFO:
      "No hay conexión a Internet. Compruebe la conexión e inténtelo de nuevo.",
  },
  IDLE: {
    HEAD: "Ha estado inactivo durante un tiempo. ¿Desea continuar el chat?",
    BUTTON: "Continuar",
  },
  DISCONNECT: {
    HEAD: "El chat ha finalizado",
    BUTTON: "Finalizar",
  },
  LAYOUT: {
    PREV_STEP: "Anterior",
    NEXT_STEP: "Siguiente",
    NOTSET: "No establecido.",
    AGREEN: "Acepto",
    NOTAGREEN: "No estoy de acuerdo",
    LEAVE: "Cerrar la sesión",
    TYPE_HERE: "Escriba aquí",
    CHAT_DOWNLOAD:
      "Por favor haga clic aquí para guardar una copia de su Chat con ASUS Servicio al Cliente en línea.",
  },
  COUNTRY: { SELECT_COUNTRY: "Por favor, seleccione país o región" },
  POLICY: {
    PRIVACY: "Política de Protección de Privacidad",
    SAT_SURVEY: "Acuerdo de Servicio",
    CONFIRM_COUNTRY: {
      H1: "Estimado cliente,",
      P1:
        'Está visitando "Servicio en Línea de ASUS" en España que es diferente de su región actual. De acuerdo con los términos de la garantía de ASUS, no todos los productos de ASUS son aplicables al servicio de garantía y soporte internacional de ASUS. Si el sitio que está visitando no es la región donde compró el producto ASUS, o es diferente de su región actual, podría afectar a sus derechos. Puede seguir utilizando el "Servicio en Línea de ASUS" de ESpaña, o elegir el "Servicio en Línea de ASUS" para su región.',
      P2: "",
      P3: "",
      B1: "Cambiar a ASUS",
      B2: "Sitio Web",
      B3: "Continuar usando",
    },
    BULLETIN: {
      HEAD: "Notificación de mensaje importante",
      CONFIRM: "Entendido",
    },
  },
  SURVEY: {
    SURVEY_ENTER: "Por favor, rellene la información de contacto",
    SURVEY_TYPE: "Por favor, seleccione el tipo de servicio",
    PROBLEM_BRIEF: "¿Cómo describiría su problema?",
    TYPE1: "Pregunta general",
    TYPE2: "Solicitud de reparación",
    TYPE3: "Soporte técnico",
    TYPE4: "Consulta de garantía",
    TYPE5: "Comentarios y sugerencias",
    EC_TYPE1: "Información sobre productos y ventas",
    EC_TYPE2: "Evento de Marketing",
    EC_TYPE3: "Estado de envío y pedido",
    EC_TYPE4: "Servicio de devolución",
    SIGNUPDATA: "Información de registro",
    NAME: "Nombre",
    TEL: "Número de teléfono",
    BIRTHDAY: "Fecha de nacimiento",
    EMAIL: "Correo electrónico",
    DEVICEINFO: "Información de su producto",
    DEVICENAME: "Nombre del producto",
    DEVICESN: "Número de serie del producto",
    PREPARE: "Creando la sala de chat, preparándose para chatear",
    START: "Iniciar chat",
    AGE_LIMIT: "Límite de edad",
    AGE_LIMIT_DESC: "No cumple con los requisitos de edad para usar ASUS Chat",
    REPEAT_ENTRY: {
      H1: "Sala de chat existente detectada",
      P1:
        "¿Está seguro de que desea iniciar una nueva conversación? Cuando se abre una nueva conversación, la antigua terminará.",
      B0: "Confirmar",
      B1: "Cancelar",
    },
  },
  CONNECTTING: {
    P1: "Por favor, espere un momento y no cierre la ventana de chat",
    P2: "El sistema le está conectando a un agente disponible",
    NOTE: "Sugerencia",
    BEFORE_LEAVE: "¿Está seguro que desea abandonar este chat?",
    B0: "Finalizar",
    B1: "Permanecer y esperar",
  },
  OFFLIEN: {
    OTHER_CONTACT: "Contacte con ASUS a través de otros canales",
    MAIL: "Envíenos un correo electrónico",
    TEL: "Llámenos",
    CLOSE: "Cerrar",
  },
  WAITTING: {
    WATTING_NUM: "Posición en la cola",
    PEOPLE: "Cliente",
    NOTE: "Sugerencia",
    BEFORE_LEAVEL: "¿Está seguro de que desea salir de la cola?",
    LEAVE_DESC: "Si ya no desea permanecer en cola, puede finalizar el chat",
    LEAVE: "Finalizar el chat",
    STAY: "Permanecer en la cola",
  },
  CHATROOM: {
    TYPING: "El agente está escribiendo...",
    HEAD: {
      CLOSE_AMD_SURVEY: "Finalizar el chat",
      TERMINATE: "Finalizar el chat",
    },
    FOOTER: { CHAT_FINISH: "El chat ha finalizado" },
    FINISH:
      "El chat ha terminado. ¿Necesita algún servicio o soporte adicional?",
    SAT_SURVEY: {
      SAT: "Satisfecho",
      DISSAT: "Insatisfecho",
      SAT_CHOOSE: "¿Qué tipo de Servicios? (Múltiple)",
      HEAD: "¿Está satisfecho con el chat?",
      DESC:
        "Sus comentarios nos impulsan para nuestra mejora continua. Si tiene alguna sugerencia para el servicio o soporte de ASUS, por favor háganoslo saber.",
      OTHER_OPTION: "Otros",
      OTHER_REASON: "Por favor, indique otra razón",
      SEND: "Enviar",
    },
    CLOSE: {
      TITLE: "¿Está seguro que desea abandonar este chat?",
      P1:
        'Haga clic en "Finalizar" para cerrar la ventana. Si necesita usar el Chat de nuevo, tendrá que realizar otra solicitud para el Chat".',
      B0: "Finalizar",
      B1: "Cancelar",
    },
  },
  ERROR: {
    H1: "La sala de chat no existe o el chat ya ha finalizado",
    CLOSE: "Cerrar la ventana",
  },
  CHAT_END: {
    H1: "Muchas gracias, el chat ha finalizado",
    CLOSE: "Cerrar la ventana",
  },
  CHAT_CLOSE: {
    H1:
      "Su red ha estado desactivada durante más de 300 segundos, por lo que esta conversación ha finalizado.",
    DESC:
      "Si utiliza una red inalámbrica o una red móvil, por favor intente encontrar una ubicación con mejor señal; o cambiar a una conexión de red por cable, disculpe las molestias",
    CLOSE: "Cerrar la ventana",
  },
  SURVEY_DONE: {
    H1: "Gracias. Ha completado la encuesta de satisfacción",
    P1:
      'Su opinión nos impulsa para nuestra mejora continua. Gracias por tomarse el tiempo para completar la encuesta de satisfacción. Si necesita algún servicio o soporte adicional, por favor haga clic en "Iniciar nuevo chat". Si hemos resuelto su consulta, por favor haga clic en "Cerrar la ventana" para finalizar el Chat',
    AGAIN: "Iniciar un nuevo chat",
    CLOSE: "Cerrar la ventana",
  },
  AGENT_OFFLINE: {
    H1:
      "La conexión a Internet del agente no está respondiendo; su chat está interrumpido actualmente",
    H2:
      "Por favor, no cierre la ventana; estamos trabajando duro para reanudar el chat",
    DESC:
      "También puede elegir terminar la sesión para realizar una encuesta, o hacer clic en 'Iniciar nuevo chat', y asignaremos inmediatamente un nuevo agente para continuar la sesión. Disculpe las molestias causadas",
    AGAIN: "Iniciar un nuevo chat",
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
  GPT: {
    LAYOUT: {
      AGREE: "Agree",
      START: "Start",
      CANCEL: "Cancel",
      WAIT: "Please wait",
      INPUT: "Eenter text",
      TRANSFER_TOAGENT: "Transfer to agent.",
      READMORE: "You can also refer to the following related FAQ, thank you.",
      COLLAPSE: "Hide",
    },
    HEAD: {
      LEAVE: "Leave",
      CREATE_NEW: "Create New Room",
    },
    ENTRANCE: {
      POLICY: "Privacy Policy",
      AGREE: "Click Agree to start the conversation",
    },
    MESSAGE: {
      WAIT: "Please wait, we are looking for a solution for you.",
    },
    END: "Conversation ended",
    END_MSG: "We're happy to serve you. The conversation is over.",
    BACKHOME: "Return to homepage",
  },
};
export default lan;
