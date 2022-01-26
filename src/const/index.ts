import { StacksTestnet, StacksMainnet } from "@stacks/network";

export const IS_PRODUCTION = process.env.NODE_ENV === "production";
//export const IS_PRODUCTION = true;
export const SITE_ROOT = IS_PRODUCTION
  ? "http://localhost:3000"
  : "http://localhost:3000";

const API = IS_PRODUCTION ? "http://localhost:3001" : "http://localhost:3001";
const WS_API = IS_PRODUCTION ? "ws://localhost:3001" : "ws://localhost:3001";

export const API_ROOT = API + "/graphql";
export const WS_API_ROOT = WS_API + "/graphql";

export interface BASIC_FORM_INTERFACE {
  name: String;
  label: String;
  type: String;
  id: String;
}

export const LOGIN_FORM: BASIC_FORM_INTERFACE[] = [
  {
    name: "email",
    label: "Email",
    type: "text",
    id: "0",
  },
  {
    name: "pw",
    label: "Password",
    type: "password",
    id: "1",
  },
];

export const CHANGE_PASSWROD: BASIC_FORM_INTERFACE[] = [
  {
    name: "pw",
    label: "Password",
    type: "password",
    id: "0",
  },
  {
    name: "confirm_pw",
    label: "Confirm Password",
    type: "password",
    id: "1",
  },
];

export const CHANGE_EMAIL: BASIC_FORM_INTERFACE[] = [
  {
    name: "email",
    label: "Email",
    type: "text",
    id: "0",
  },
];

export enum AlignType {
  left = "left",
  center = "center",
  right = "right",
}

export const CONTRACT_ADDRESS = "SP000000000000000000002Q6VF78";
export const CONTRACT_NAME = "pox";
export const CONTRACT_ADDRESS_NAME = `${CONTRACT_ADDRESS}.${CONTRACT_NAME}`;

export const ALLOW_CONTRACT_CALL = "allow-contract-caller";
export const CALLER_PRINCIPAL = "1MKrNDn9kZSBWpCvYwQr4ZkiR6rcMm2qF7";

export const DELEGATE_STX_FUNC_NAME = "delegate-stx";
export const DELEGATE_TO_PRINCIPAL = "SPXVRSEH2BKSXAEJ00F1BY562P45D5ERPSKR4Q33";

export const TEST_CONTRACT_NAME = "excited-bronze-sawfish-2";
export const TEST_CONTRACT_ADDY = "SP10CCTKY2CCQNP5GZWRKYNH9S0D37AQ47GVHRRB7";
export const TEST_CONTRACT_FUNC_NAME = "hello-world";

export const TEST_NETWORK = new StacksTestnet();
export const LIVE_NETWORKD = new StacksMainnet();

export const NETWORK = true ? LIVE_NETWORKD : TEST_NETWORK;
