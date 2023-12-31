const lan = {
  REDIRECT: "Yeniden bağlanıyor...",
  RULE: {
    SERVICE_TYPE: "Lütfen servis tipini seçiniz",
    COUNTRY: "Lütfen ülkenizi veya bölgenizi seçin",
    USERNAME: "Bir kullanıcı adı gereklidir",
    EMAIL: "Email adresi zorunludur",
    EMAIL2: "Lütfen doğru eposta formatını giriniz.",
    PRODUCT: "Lütfen cihazınızı seçin",
    PRODUCTSN: "Lütfen ürününüzün seri numarasını giriniz",
    PRODUCTSN_LEN: "Lütfen 12 veya 15 haneli rakam veya harfi giriniz",
    BIRTHDAY: "Doğum tarihi giriniz",
    REQUIRED: "Gerekli bilgiler",
  },
  SYS: {
    HEAD: "Sistem",
    NOSERVICE:
      "Üzgünüz, seçtiğiniz ülke veya bölge için ASUS sohbet kullanılamıyor.",
    CHECK_FILESIZE: "Lütfen resimin boyutunu kontrol ediniz, Limit:",
    RECONNECTED: "Bağlantı durumu normale döndü",
    UNABLE_SEND: "Ekler gönderilemedi",
    NO_NETWORK: "İnternet bağlantısı yok",
    NO_NETWORK_INFO:
      "İnternet bağlantısı yok. Lütfen internete bağlanarak tekrar deneyiniz.",
  },
  IDLE: {
    HEAD: "Bir süredir boştasınız. Sohbete devam etmek ister misiniz?",
    BUTTON: "Devam",
  },
  DISCONNECT: {
    HEAD: "Sohbet bitti",
    BUTTON: "Bitir",
  },
  LAYOUT: {
    PREV_STEP: "Önceki",
    NEXT_STEP: "İleri",
    NOTSET: "Ayarlanmadı.",
    AGREEN: "Katılıyorum",
    NOTAGREEN: "Katılmıyorum",
    LEAVE: "Ayrıl",
    TYPE_HERE: "Buraya yazınız",
    CHAT_DOWNLOAD:
      "Asus Chat hizmeti ile olan görüşmenizi kaydetmek için lütfen buraya tıklayınız.",
  },
  COUNTRY: { SELECT_COUNTRY: "Lütfen hizmet ülkesini veya bölgesini seçiniz" },
  POLICY: {
    PRIVACY: "Gizlilik Koruma Politikası",
    SAT_SURVEY: "Hizmet Sözleşmesi",
    CONFIRM_COUNTRY: {
      H1: "Sayın ASUS müşterisi",
      P1:
        "Şu anda bulunduğunuz bölgeden farklı olan Avustralya için ASUS Çevrimiçi Müşteri Hizmetlerini ziyaret ediyorsunuz. ASUS garanti koşullarına göre, her ASUS ürünü ASUS Uluslararası Garanti ve Destek hizmeti için geçerli değildir. Ziyaret ettiğiniz yukarıdaki bölgesel site ASUS ürününüzü satın aldığınız bölge değilse veya bulunduğunuz bölgeden farklıysa, haklarınızı etkileyebilir. Avustralya için ASUS Çevrimiçi Müşteri Hizmetlerini kullanmaya devam edebilir veya ASUS Çevrimiçi Müşteri Hizmetlerini bölgenize göre değiştirebilirsiniz.",
      P2: "",
      P3: "",
      B1: "Asus'a bağlanın",
      B2: "Websitesi",
      B3: "Kullanmaya devam ediniz",
    },
    BULLETIN: {
      HEAD: "Önemli bir mesajın bildirimi",
      CONFIRM: "Anladım",
    },
  },
  SURVEY: {
    SURVEY_ENTER: "Lütfen iletişim bilgilerinizi doldurunuz",
    SURVEY_TYPE: "Lütfen hizmet türünü seçiniz",
    PROBLEM_BRIEF: "Sorununuzu nasıl tanımlarsınız?",
    TYPE1: "Genel sorular",
    TYPE2: "Onarım sorgulama",
    TYPE3: "Teknik destek",
    TYPE4: "Garanti sorgulama",
    TYPE5: "Görüş ve geri bildirim",
    EC_TYPE1: "Ürün ve satış bilgileri",
    EC_TYPE2: "Pazarlama etkinlikleri",
    EC_TYPE3: "Kargo ve sipariş durumu",
    EC_TYPE4: "İade hizmetleri",
    SIGNUPDATA: "Kayıt Bilgileriniz",
    NAME: "İsim",
    TEL: "Telefon numarası",
    BIRTHDAY: "Doğum tarihi",
    EMAIL: "Email",
    DEVICEINFO: "Ürün bilgileriniz",
    DEVICENAME: "Ürün ismi",
    DEVICESN: "Ürün seri numarası",
    PREPARE: "Chat odası oluşturuluyor, konuşmaya hazırlanın",
    START: "Konuşmayı başlat",
    AGE_LIMIT: "Yaş sınırı",
    AGE_LIMIT_DESC:
      "ASUS Chat'i kullanmak için yaş gereksinimlerini karşılamıyorsunuz",
    REPEAT_ENTRY: {
      H1: "Mevcut sohbet odası algılandı",
      P1:
        "Yeni bir konuşma başlatmak istediğinizden emin misiniz? Yeni bir konuşma açıldığında, eski konuşma sona erer.",
      B0: "Onayla",
      B1: "İptal et",
    },
  },
  CONNECTTING: {
    P1: "Lütfen biraz bekleyin ve sohbet penceresini kapatmayın",
    P2: "Sistem sizi müsait bir müşteri temsilcisine bağlıyor",
    NOTE: "İpucu",
    BEFORE_LEAVE: "ASUS chat'i sonlandırmak istediğinize emin misiniz?",
    B0: "Bitir",
    B1: "Kal ve bekle",
  },
  OFFLIEN: {
    OTHER_CONTACT: "ASUS ile diğer kanallardan iletişim kurunuz",
    MAIL: "Bize mail gönderin",
    TEL: "Bizi arayın",
    CLOSE: "Kapat",
  },
  WAITTING: {
    WATTING_NUM: "Kuyruktaki sıranız",
    PEOPLE: "Müşteri",
    NOTE: "İpucu",
    BEFORE_LEAVEL: "Sıradan çıkmak istediğinizden emin misiniz?",
    LEAVE_DESC:
      "Sırada daha fazla beklemek istemiyorsanız, chati sonlandırabilirsiniz",
    LEAVE: "Chat'i bitir",
    STAY: "Sırada bekle",
  },
  CHATROOM: {
    TYPING: "Temsilci yazıyor...",
    HEAD: {
      CLOSE_AMD_SURVEY: "sohbetten ayrıl",
      TERMINATE: "Chat'i bitir",
    },
    FOOTER: { CHAT_FINISH: "Konuşma sonlandırıldı" },
    FINISH:
      "Konuşma sona erdi. Herhangi bir ek servis veya desteğe ihtiyacınız var mı?",
    SAT_SURVEY: {
      SAT: "Memnun",
      DISSAT: "Memnun değil",
      SAT_CHOOSE: "Hangi servis tipi? ( Birden fazla)",
      HEAD: "Konuşmadan memnun musunuz?",
      DESC:
        "Geri bildirimlerinizi dinlemek, sürekli gelişimimiz için teşvik edici bir güçtür. ASUS Servis veya Destek için herhangi bir öneriniz varsa, lütfen bize bildirin.",
      OTHER_OPTION: "Diğer",
      OTHER_REASON: "Lütfen diğer nedenleri belirtiniz",
      SEND: "Gönder",
    },
    CLOSE: {
      TITLE: "Konuşmayı sonlandırmak istediğinizden emin misiniz?",
      P1:
        'Pencereyi kapatmak için "Son" u tıklayınız. Sohbeti tekrar kullanmanız gerekirse, konuşşma için başka bir talep iletmeniz gerekecektir".',
      B0: "Bitir",
      B1: "İptal",
    },
  },
  ERROR: {
    H1: "Sohbet odası yok veya konuşma zaten sonlandırıldı",
    CLOSE: "Pencereyi kapat",
  },
  CHAT_END: {
    H1: "Teşekkürler, konuşma şu an sonlandırıldı",
    CLOSE: "Pencereyi kapat",
  },
  CHAT_CLOSE: {
    H1:
      "Ağınız 300 saniyeden uzun süredir kapalı olduğundan dolayı bu konuşmayı sonlandırdık.",
    DESC:
      "Bir kablosuz ağ veya mobil ağ kullanıyorsanız, lütfen daha iyi sinyale sahip bir konum bulmaya çalışınız; veya kablolu ağ bağlantısına geçiniz, Verdiğimiz geçici rahatsızlıktan dolayı özür dileriz",
    CLOSE: "Pencereyi kapat",
  },
  SURVEY_DONE: {
    H1: "Teşekkürler, memnuniyet anketimizi tamamladınız",
    P1:
      'Geri bildiriminiz, sürekli gelişimimiz için teşvik edici bir güçtür. Hizmet Memnuniyeti Anketi\'ni tamamlamak için zaman ayırdığınızdan dolayı teşekkür ederiz. Herhangi bir ek hizmet veya desteğe ihtiyacınız varsa, lütfen "Yeni Sohbet Başlat" ı tıklayınız. Sorunuzu çözdüysek, konuşmayı bitirmek için lütfen "Pencereyi kapat" ı tıklayınız',
    AGAIN: "Yeni bir konuşma başlat",
    CLOSE: "Pencereyi kapat",
  },
  AGENT_OFFLINE: {
    H1:
      "Temsilcinin internet bağlantısı yanıt vermiyor; Sohbetiniz şu anda kesintiye uğradı",
    H2: "Lütfen pencereyi kapatmayın; Sohbeti sürdürmek için çok çalışıyoruz",
    DESC:
      "Ayrıca, ankete katılmak için oturumu sonlandırmayı seçebilir veya 'Yeni Sohbet Başlat'ı tıklayabilirsiniz; oturuma devam etmesi için hemen yeni bir temsilci atayacağız. Verdiğimiz geçici rahatsızlıktan dolayı üzgünüz",
    AGAIN: "Yeni bir konuşma başlat",
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
