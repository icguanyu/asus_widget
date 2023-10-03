const lan = {
  REDIRECT: "Uudelleenohjataan...",
  RULE: {
    SERVICE_TYPE: "Valitse palvelun tyyppi",
    COUNTRY: "Ole hyvä ja valitse maa/alue",
    USERNAME: "Käyttäjätunnus on pakollinen",
    EMAIL: "Sähköpostiosoite vaaditaan",
    EMAIL2: "Sähköpostiosoite on väärin muotoiltu.",
    PRODUCT: "Ole hyvä ja valitse laite",
    PRODUCTSN: "Ole hyvä ja anna sarjanumero",
    PRODUCTSN_LEN: "Syötä 12-15 kirjainta tai numeroa",
    BIRTHDAY: "Syntymäaika on pakollinen",
    REQUIRED: "Pakollinen",
  },
  SYS: {
    HEAD: "Järjestelmä",
    NOSERVICE:
      "Valitettavasti ASUS Chat valitulle maalle tai alueelle ei ole saatavilla.",
    CHECK_FILESIZE: "Tarkista kuvan ja tiedoston koko. Rajoitus:",
    RECONNECTED: "Yhteyden tila on palautunut normaaliksi",
    UNABLE_SEND: "Liitteen tallennus epäonnistui",
    NO_NETWORK: "Ei internet-yhteyttä",
    NO_NETWORK_INFO:
      "Ei Internet-yhteyttä. Tarkista yhteytesi ja yritä uudelleen.",
  },
  IDLE: {
    HEAD: "Olet ollut joutilaana jo jonkin aikaa. Haluatko jatkaa chattia?",
    BUTTON: "Jatka",
  },
  DISCONNECT: {
    HEAD: "Chatti on päättynyt",
    BUTTON: "Lopeta",
  },
  LAYOUT: {
    PREV_STEP: "Edellinen",
    NEXT_STEP: "Seuraava",
    NOTSET: "Ei määritetty.",
    AGREEN: "Hyväksy",
    NOTAGREEN: "Hylkää",
    LEAVE: "Poistu",
    TYPE_HERE: "Kirjoita tähän",
    CHAT_DOWNLOAD:
      "Ole hyvä ja klikkaa tästä tallentaaksesi kopion keskustelustasi ASUS Tuen kanssa.",
  },
  COUNTRY: { SELECT_COUNTRY: "Ole hyvä ja valitse palvelualue" },
  POLICY: {
    PRIVACY: "Yksityisyydensuojakäytäntö",
    SAT_SURVEY: "Palvelun käyttöehdot",
    CONFIRM_COUNTRY: {
      H1: "Hyvä ASUS-asiakas,",
      P1:
        'Olet nyt “ASUS Online Customer Service” Suomen sivustolla, joka eroaa nykyisestä alueestasi. ASUS-takuuehtojen mukaan kaikkille ASUS-tuotteille ei voida soveltaa "ASUS International Warranty and Support" -palvelua. Jos aiempi paikallinen sivusto ei vastaa aluetta josta ostit ASUS tuotteesi, tai on eri kuin nykyinen alue, se voi vaikuttaa palveluun. Voit jatkaa “ASUS Online Customer Service” Suomen sivustolla, tai voit valita “ASUS Online Customer Service” paikallisen tukialueen.',
      P2: "",
      P3: "",
      B1: "Siirry ASUS",
      B2: "Sivusto",
      B3: "Jatka käyttöä",
    },
    BULLETIN: {
      HEAD: "Ilmoitus tärkeästä viestistä",
      CONFIRM: "OK",
    },
  },
  SURVEY: {
    SURVEY_ENTER: "Ole hyvä ja täytä yhteystiedot",
    SURVEY_TYPE: "Valitse palvelun tyyppi",
    PROBLEM_BRIEF: "Miten kuvailisit ongelmiasi?",
    TYPE1: "Yleiset kysymykset",
    TYPE2: "Korjauskysely",
    TYPE3: "Tekninen tuki",
    TYPE4: "Takuutiedustelu",
    TYPE5: "Mielipiteet ja palaute",
    EC_TYPE1: "Tuote- ja myyntitiedustelut",
    EC_TYPE2: "Markkinointi Tapahtuma",
    EC_TYPE3: "Toimitus- ja tilauksen tila",
    EC_TYPE4: "Palautuspalvelu",
    SIGNUPDATA: "Rekisteröitymistiedot",
    NAME: "Nimi",
    TEL: "Puhelinnumero",
    BIRTHDAY: "Syntymäpäivä",
    EMAIL: "Email",
    DEVICEINFO: "Tuotetiedot",
    DEVICENAME: "Tuotteen nimi",
    DEVICESN: "Tuotteen Sarjanumero",
    PREPARE: "Chat-huonetta luodaan, valmistellaan Chat-keskustelua",
    START: "Aloita chat",
    AGE_LIMIT: "Ikäraja",
    AGE_LIMIT_DESC: "Et täytä ikävaatimuksia käyttää ASUS Chat",
    REPEAT_ENTRY: {
      H1: "Olemassa oleva chat-istunto havaittu",
      P1:
        "Oletko varma, että haluat aloittaa uuden keskustelun? Kun uusi keskustelu on avattu, vanha istunto päättyy.",
      B0: "Vahvista",
      B1: "Peruuta",
    },
  },
  CONNECTTING: {
    P1: "Odota hetki, älä sulje ikkunaa",
    P2: "Järjestelmä yhdistää sinut nyt asiakaspalvelijalle",
    NOTE: "Vinkki",
    BEFORE_LEAVE: "Oletko varma, että haluat lopettaa ASUS chatin?",
    B0: "Lopeta",
    B1: "Pysy odottamassa",
  },
  OFFLIEN: {
    OTHER_CONTACT: "Ota yhteyttä ASUS:iin muiden kanavien kautta",
    MAIL: "Lähetä meille sähköpostia",
    TEL: "Soita meille",
    CLOSE: "Sulje",
  },
  WAITTING: {
    WATTING_NUM: "Sijaintisi jonossa",
    PEOPLE: "Asiakas",
    NOTE: "Vinkki",
    BEFORE_LEAVEL: "Oletko varma, että haluat poistua jonosta?",
    LEAVE_DESC: "Jos haluat poistua jonosta, voit lopettaa chat istunnnon",
    LEAVE: "Lopeta Chat",
    STAY: "Pysy jonossa",
  },
  CHATROOM: {
    TYPING: "Asiakaspalvelija kirjoittaa...",
    HEAD: {
      CLOSE_AMD_SURVEY: "Lopeta Chat",
      TERMINATE: "Lopeta Chat",
    },
    FOOTER: { CHAT_FINISH: "Chat on päättynyt" },
    FINISH: "Chatti on päättynyt. Tarvitsetko lisäpalvelua tai -tukea?",
    SAT_SURVEY: {
      SAT: "Tyytyväinen",
      DISSAT: "Epätyytyväinen",
      SAT_CHOOSE: "Millainen palvelu? (Monivalinta)",
      HEAD: "Olitko tyytyväinen chattiin?",
      DESC:
        "Palautteesi auttaa meitä jatkuvaan palvelun parantamiseen. Jos sinulla on ehdotuksia ASUS palveluiden ja tuen kehittämiseksi, otamme palautetta mielellään vastaan.",
      OTHER_OPTION: "Muut",
      OTHER_REASON: "Täytä muu syy",
      SEND: "Lähetä",
    },
    CLOSE: {
      TITLE: "Oletko varma, että haluat lopettaa ASUS Chatin?",
      P1:
        'Napsauta "Valmis" sulkeaksesi ikkunan. Jos haluat käyttää chattia uudestaan, sinun tulee avata uusi chat pyyntö".',
      B0: "Valmis",
      B1: "Peruuta",
    },
  },
  ERROR: {
    H1: "Chat-huonetta ei ole olemassa tai keskustelu on jo päättynyt",
    CLOSE: "Sulje ikkuna",
  },
  CHAT_END: {
    H1: "Paljon kiitoksia, Chat on nyt päättynyt",
    CLOSE: "Sulje ikkuna",
  },
  CHAT_CLOSE: {
    H1:
      "Yhteytesi on ollut poikki yli 300 sekuntia, joten olemme lopettaneet tämän istunnon.",
    DESC:
      "Jos käytät langatonta verkkoa tai mobiiliverkkoa, yritä löytää sijainti, jossa on parempi signaali. tai vaihda langalliseen verkkoyhteyteen. Pahoittelut ylimääräisestä vaivasta",
    CLOSE: "Sulje ikkuna",
  },
  SURVEY_DONE: {
    H1: "Kiitos. Olet suorittanut tyytyväisyyskyselyn",
    P1:
      'Palautteesi auttaa meitä jatkuvaan palvelun parantamiseen. Kiitos antamastasi palautteesta. Jos tarvitset lisäpalvelua tai -tukea, napsauta "Aloita uusi keskustelu". Jos olemme ratkaisseet kyselysi, ole hyvä ja klikkaa "Sulje ikkuna" lopettaaksesi keskustelun',
    AGAIN: "Aloita uusi keskustelu",
    CLOSE: "Sulje ikkuna",
  },
  AGENT_OFFLINE: {
    H1:
      "Asiakaspalvelijan Internet-yhteys ei ole vastannut; chattisi on tällä hetkellä keskeytetty",
    H2:
      "Ole hyvä ja älä sulje ikkunaa, teemme kovasti töitä jatkaaksemme keskustelua",
    DESC:
      "Voit myös päättää lopettaa istunnon siirtyäksesi tyytyväisyyskyselyyn, tai klikkaa 'Aloita uusi keskustelu', ja annamme välittömästi uuden edustajan jatkamaan istuntoa. Pahoittelut aiheuneesta vaivasta",
    AGAIN: "Aloita uusi keskustelu",
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
