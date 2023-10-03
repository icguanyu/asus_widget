const lan = {
  REDIRECT: "転送中...",
  RULE: {
    SERVICE_TYPE: "サイト種別を選択してください．",
    COUNTRY: "国または地域を選択してください",
    USERNAME: "ユーザー名が必要です",
    EMAIL: "Ｅメールが必要です。",
    EMAIL2: "正しいメールアドレスをご入力してください。",
    PRODUCT: "ご使用の製品を選択してください",
    PRODUCTSN: "製品のシリアル番号を入力してください",
    PRODUCTSN_LEN: "12～15文字または数字を入力してください",
    BIRTHDAY: "生年月日が必要です。",
    REQUIRED: "必須",
  },
  SYS: {
    HEAD: "システム",
    NOSERVICE:
      "申し訳ありませんが、ご選択した国または地域のASUSチャットは利用できません。",
    CHECK_FILESIZE: "画像または添付ファイルのサイズを確認してください。制限：",
    RECONNECTED: "接続状態が正常に戻りました",
    UNABLE_SEND: "添付ファイルを送信できません",
    NO_NETWORK: "インターネット接続なし",
    NO_NETWORK_INFO:
      "インターネット接続していません。 インターネットに再接続して、もう一度お試しください。",
  },
  IDLE: {
    HEAD: "しばらく待機状態になっておりますが、チャットを続行しますか？",
    BUTTON: "続行",
  },
  DISCONNECT: {
    HEAD: "チャットが終了しました",
    BUTTON: "終了",
  },
  LAYOUT: {
    PREV_STEP: "戻る",
    NEXT_STEP: "次へ",
    NOTSET: "未設定",
    AGREEN: "同意する",
    NOTAGREEN: "同意しない",
    LEAVE: "離れる",
    TYPE_HERE: "ここに入力してください",
    CHAT_DOWNLOAD:
      "ここをクリックして、ASUS オンライン カスタマー サービスとのチャットのコピーを保存してください",
  },
  COUNTRY: { SELECT_COUNTRY: "国または地域を選択してください" },
  POLICY: {
    PRIVACY: "個人情報保護方針",
    SAT_SURVEY: "サービス契約",
    CONFIRM_COUNTRY: {
      H1: "こんにちは",
      P1:
        "現在、ASUS JAPANのWEBサイトから「ASUSオンラインカスタマーサービス」にアクセスいただいております。本サービスは日本国内向けに販売された製品、もしくはインターナショナルワランティがついている製品が対象となっております。\nインターナショナルワランティがついていない、日本以外で販売された製品は、本サービスの適用対象外となる場合があります。詳細は製品保証書をご確認ください。日本以外で購入された製品の場合、ご購入の国または地域のASUSオンラインカスタマーサービスからお問い合わせください。",
      P2: "",
      P3: "",
      B1: "ASUSに切り替える",
      B2: "ウェブサイト",
      B3: "引き続き使用する",
    },
    BULLETIN: {
      HEAD: "重要なメッセージのお知らせ",
      CONFIRM: "了解",
    },
  },
  SURVEY: {
    SURVEY_ENTER: "以下の情報を入力して下さい",
    SURVEY_TYPE: "サービスタイプを選択してください",
    PROBLEM_BRIEF: "どのような問題があるのでしょうか?",
    TYPE1: "よくある質問",
    TYPE2: "修理のお問い合わせ",
    TYPE3: "テクニカルサポート",
    TYPE4: "保証に関するお問い合わせ",
    TYPE5: "ご意見・フィードバック",
    EC_TYPE1: "製品に関して（スペックや仕様など）",
    EC_TYPE2: "ASUS Storeでのご注文に関して",
    EC_TYPE3: "ASUS Store のキャンペーンに関して​",
    EC_TYPE4: "その他",
    SIGNUPDATA: "情報登録",
    NAME: "名前",
    TEL: "電話番号",
    BIRTHDAY: "お誕生日",
    EMAIL: "メールアドレス",
    DEVICEINFO: "製品情報",
    DEVICENAME: "製品名",
    DEVICESN: "製品シリアル番号",
    PREPARE: "チャットルームを作成し、チャットの準備をしています",
    START: "チャットを開始",
    AGE_LIMIT: "年齢制限",
    AGE_LIMIT_DESC: "ASUSチャットを使用する年齢要求を満たしていません",
    REPEAT_ENTRY: {
      H1: "既存のチャットルームが検出されました",
      P1:
        "新しい会話を開始してもよろしいですか？新しい会話が開かれると、古い会話は終了します。",
      B0: "確認",
      B1: "キャンセル",
    },
  },
  CONNECTTING: {
    P1: "しばらくお待ちください。チャットウィンドウを閉じないでください。",
    P2: "利用可能なエージェントに接続しています。",
    NOTE: "警告",
    BEFORE_LEAVE: "このチャットを終了してもよろしいでしょうか？",
    B0: "終了",
    B1: "そのまま待ってください",
  },
  OFFLIEN: {
    OTHER_CONTACT: "他のチャネル経由でASUSに連絡",
    MAIL: "メールでのお問い合わせ",
    TEL: "電話でのお問い合わせ",
    CLOSE: "終了",
  },
  WAITTING: {
    WATTING_NUM: "只今お待ちの人数：",
    PEOPLE: "お客様",
    NOTE: "警告",
    BEFORE_LEAVEL: "キューを終了してもよろしいでしょうか？",
    LEAVE_DESC: "隊列を退出したい場合、チャットを終了できます",
    LEAVE: "チャットを終了する",
    STAY: "キューを維持",
  },
  CHATROOM: {
    TYPING: "担当者が入力中",
    HEAD: {
      CLOSE_AMD_SURVEY: "チャットを終了。",
      TERMINATE: "チャットを終了する",
    },
    FOOTER: { CHAT_FINISH: "チャットが終了しました" },
    FINISH: "チャットが終了しました。追加サービスまたはサポートが必要ですか?",
    SAT_SURVEY: {
      SAT: "満足する",
      DISSAT: "不満足です",
      SAT_CHOOSE: "どのような種類のサービスですか？（複数)",
      HEAD: "チャットに満足しましたか？",
      DESC:
        "お客様が弊社の商品やサービスに対して、どのような感想やご意見をお持ちかをおうかがいするためのアンケートを実施しております。",
      OTHER_OPTION: "その他の理由",
      OTHER_REASON: "その他の理由を記入してください",
      SEND: "送信",
    },
    CLOSE: {
      TITLE: "このチャットを終了してもよろしいですか？",
      P1:
        "「終了」をクリックしてウィンドウを閉じます．チャットを再度使用する場合は，「新しいチャットを開始」をクリックしてください．",
      B0: "終了",
      B1: "キャンセル",
    },
  },
  ERROR: {
    H1: "チャットルームが存在しないため、チャットが終了します。",
    CLOSE: "ウィンドウを閉じます。",
  },
  CHAT_END: {
    H1: "ありがとうございました。チャットが終了しました",
    CLOSE: "ウィンドウを閉じます。",
  },
  CHAT_CLOSE: {
    H1: "ネットワークが300秒以上中断されたため、この会話は終了しました。",
    DESC:
      "無線ネットワークまたはモバイルネットワークを使用する際、電波が弱い場合があるので、電波が良い場所でご利用ください。 大変お手数ですが、よろしくお願いいたします。",
    CLOSE: "ウィンドウを閉じます。",
  },
  SURVEY_DONE: {
    H1: "ありがとうございます。サービス満足度調査を完了しました。",
    P1:
      "より良いサービスの提供及びお客様に満足いただけるサービスを目指してります。ASUSでは、可能な限り最高の品質とサービスを提供させていただきます。\n この調査にご協力いただき、誠にありがとうございます。",
    AGAIN: "新しいチャットを開始",
    CLOSE: "ウィンドウを閉じます。",
  },
  AGENT_OFFLINE: {
    H1:
      "エージェントのインターネット接続が応答していません。チャットは現在中断されています。",
    H2:
      "ウィンドウを閉じないでください。チャットを再開するために取り組んでいます。",
    DESC:
      "また、セッションを終了してアンケートを実行するか、それとも「新しいチャットを開始」をクリックすることもできます。 すぐに新しい担当者を割り当てます。 ご不便をおかけして申し訳ありません",
    AGAIN: "新しいチャットを開始",
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
