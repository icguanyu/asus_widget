import Vue from "vue";
import VueI18n from "vue-i18n";

import enLocale from "element-ui/lib/locale/lang/en";
import zhLocale from "element-ui/lib/locale/lang/zh-TW";
import idLocale from "element-ui/lib/locale/lang/id";
import koLocale from "element-ui/lib/locale/lang/ko";
import jaLocale from "element-ui/lib/locale/lang/ja";
import thLocale from "element-ui/lib/locale/lang/th";
import viLocale from "element-ui/lib/locale/lang/vi";

import cnLocale from "element-ui/lib/locale/lang/zh-CN"; // 中國-簡中
import czLocale from "element-ui/lib/locale/lang/cs-CZ"; // 捷克
import deLocale from "element-ui/lib/locale/lang/de"; // 德國
import daLocale from "element-ui/lib/locale/lang/da"; // 丹麥
import esLocale from "element-ui/lib/locale/lang/es"; // 西班牙
import fiLocale from "element-ui/lib/locale/lang/fi"; // 芬蘭
import frLocale from "element-ui/lib/locale/lang/fr"; // 法國
import huLocale from "element-ui/lib/locale/lang/hu"; // 匈牙利
import itLocale from "element-ui/lib/locale/lang/it"; // 義大利
import nlLocale from "element-ui/lib/locale/lang/nl"; // 荷蘭
import noLocale from "element-ui/lib/locale/lang/nb-NO"; // 挪威
import plLocale from "element-ui/lib/locale/lang/pl"; // 波蘭
import ptLocale from "element-ui/lib/locale/lang/pt"; // 葡萄牙
import roLocale from "element-ui/lib/locale/lang/ro"; // 羅馬尼亞
import seLocale from "element-ui/lib/locale/lang/sv-SE"; // 瑞典
import trLocale from "element-ui/lib/locale/lang/tr-TR"; // 土耳其
import uaLocale from "element-ui/lib/locale/lang/ua"; // 烏克蘭
import zaLocale from "element-ui/lib/locale/lang/af-ZA"; // 南非
import arLocale from "element-ui/lib/locale/lang/ar"; // 阿拉伯

import en from "@/i18n/en"; // 美國
import jp from "@/i18n/jp"; // 日本
import kr from "@/i18n/kr"; // 韓國
import tw from "@/i18n/tw"; // 台灣
import hk from "@/i18n/hk"; // 香港
import th from "@/i18n/th"; // 泰國
import vn from "@/i18n/vn"; // 越南
import sg from "@/i18n/sg"; // 新加坡
import my from "@/i18n/my"; // 馬來西亞
import au from "@/i18n/au"; // 澳洲
import id from "@/i18n/id"; // 印尼
import _in from "@/i18n/in"; // 印度
import ph from "@/i18n/ph"; // 菲律賓
import bd from "@/i18n/bd"; // 孟加拉
// 以下 EMEA
import ar from "@/i18n/ar";
import ae from "@/i18n/ae";
import cz from "@/i18n/cz";
import de from "@/i18n/de";
import dk from "@/i18n/dk";
import eg from "@/i18n/eg";
import es from "@/i18n/es";
import fi from "@/i18n/fi";
import fr from "@/i18n/fr";
import ca_fr from "@/i18n/ca-fr";
import gb from "@/i18n/gb";
import hu from "@/i18n/hu";
import il from "@/i18n/il";
import it from "@/i18n/it";
import nl from "@/i18n/nl";
import no from "@/i18n/no";
import pl from "@/i18n/pl";
import pt from "@/i18n/pt";
import ro from "@/i18n/ro";
import sa from "@/i18n/sa";
import se from "@/i18n/se";
import tr from "@/i18n/tr";
import ua from "@/i18n/ua";
import za from "@/i18n/za";
import za_ec from "@/i18n/za_ec";
import uk from "@/i18n/uk";
import mx from "@/i18n/mx";
import co from "@/i18n/co";
// CN
import cn from "@/i18n/cn";
// ACI
import en_us from "@/i18n/en_us";
import us_es from "@/i18n/us_es";

let messages = {
  CN: { ...cn, ...cnLocale }, // 中國
  EN: { ...en, ...enLocale }, // 美國 United States
  JP: { ...jp, ...jaLocale }, // 日本 Japan
  KR: { ...kr, ...koLocale }, // 韓國 Korea
  TW: { ...tw, ...zhLocale }, // 台灣 Taiwan
  HK: { ...hk, ...zhLocale }, // 香港 Hong Kong
  TH: { ...th, ...thLocale }, // 泰國 Thailand
  VN: { ...vn, ...viLocale }, // 越南 Vietnam
  SG: { ...sg, ...enLocale }, // 新加坡 Singapore *
  MY: { ...my, ...enLocale }, // 馬來西亞 Malaysia *
  AU: { ...au, ...enLocale }, // 澳洲 Australia *
  ID: { ...id, ...idLocale }, // 印尼 Indonesia
  IN: { ..._in, ...enLocale }, // 印度 India *
  PH: { ...ph, ...enLocale }, // 菲律賓 Philippines*
  BD: { ...bd, ...enLocale }, // 孟加拉 Bangladesh*
  IN_RM: { ..._in, ...enLocale }, // 印度 India (Remote)*
  VN_RM: { ...vn, ...viLocale }, // 越南 Vietnam (Remote)*
  // 以下EMEA (* = element使用英文)
  AR: { ...ar, ...arLocale }, // Arabic 阿拉伯
  AE: { ...ae, ...enLocale }, // United Arab Emirates 阿拉伯聯合大公國 *
  "ME-EN": { ...ae, ...enLocale }, // United Arab Emirates 阿拉伯聯合大公國 *
  "ME-AR": { ...ae, ...enLocale }, // United Arab Emirates 阿拉伯聯合大公國 *
  CZ: { ...cz, ...czLocale }, // Czech Republic 捷克
  DE: { ...de, ...deLocale }, // Germany 德國
  DK: { ...dk, ...daLocale }, // Denmark 丹麥
  EG: { ...eg, ...enLocale }, // Egypt 埃及 *
  ES: { ...es, ...esLocale }, // Spain 西班牙
  FI: { ...fi, ...fiLocale }, // Finland 芬蘭
  FR: { ...fr, ...frLocale }, // France 法國 (EMEA)
  "CA-FR": { ...ca_fr, ...frLocale }, // France 法國 (ACI)
  GB: { ...gb, ...enLocale }, // United Kingdom 英國 *
  HU: { ...hu, ...huLocale }, // Hungary 匈牙利
  IL: { ...il, ...enLocale }, // Israel 以色列 *
  IT: { ...it, ...itLocale }, // Italy 義大利
  NL: { ...nl, ...nlLocale }, // Netherlands 荷蘭
  NO: { ...no, ...noLocale }, // Norway 挪威
  PL: { ...pl, ...plLocale }, // Poland 波蘭
  PT: { ...pt, ...ptLocale }, // Portugal 葡萄牙
  RO: { ...ro, ...roLocale }, // Romania 羅馬尼亞
  SA: { ...ae, ...enLocale }, // Saudi Arabia 沙烏地阿拉伯 *
  "SA-EN": { ...ae, ...enLocale }, // Saudi Arabia 沙烏地阿拉伯 *
  "SA-AR": { ...ae, ...enLocale }, // Saudi Arabia 沙烏地阿拉伯 *
  SE: { ...se, ...seLocale }, // Sweden	瑞典
  TR: { ...tr, ...trLocale }, // Turkey 土耳其
  UA: { ...ua, ...uaLocale }, // Ukraine 烏克蘭
  "UA-UA": { ...ua, ...uaLocale }, // Ukraine 烏克蘭
  ZA: { ...za, ...zaLocale }, // South Africa	南非
  UK: { ...uk, ...enLocale }, // United Kingdom 英國 *
  MX: { ...mx, ...esLocale }, // Colombia 哥倫比亞 (element使用西班牙)
  CO: { ...co, ...esLocale }, // Mexico 墨西哥 (element使用西班牙)
  ZAEC: { ...za_ec, ...zaLocale }, // South Africa	(EC) 南非電商
  ACI: { ...en_us, ...enLocale }, // ACI (en_us)
  B2B: { ...en_us, ...enLocale }, // ACI (en_us)
  CIDOOW: { ...en_us, ...enLocale }, // ACI (en_us)
  ESHOP: { ...en_us, ...enLocale }, // ACI (en_us)
  MIR: { ...en_us, ...enLocale }, // ACI (en_us)
  US: { ...en_us, ...enLocale }, // ACI (en_us)
  USES: { ...us_es, ...enLocale }, // ACI (us_es)
  "CA-EN": { ...en_us, ...enLocale }, // ACI (en_us)
};

let lan;
let country = localStorage.getItem("asus_chat_webSiteCountry");

import { languages } from "../plugins/languages";

lan = getLan();
function getLan() {
  return languages.includes(country) ? country : "EN";
}

Vue.use(VueI18n);

// console.log("lan", lan);
const i18n = new VueI18n({
  locale: lan,
  messages,
});

export default i18n;
