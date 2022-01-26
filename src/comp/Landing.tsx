import { ColumnFlex } from "./styled";
import { openContractCall } from "@stacks/connect";

import { AppConfig, UserSession } from "@stacks/connect";
import { useConnect, Connect } from "@stacks/connect-react";
import AnimateHeight from "react-animate-height";
import {
  FungibleConditionCode,
  AnchorMode,
  makeStandardSTXPostCondition,
  intCV,
  uintCV,
  PostCondition,
  callReadOnlyFunction,
  makeStandardNonFungiblePostCondition,
  NonFungibleConditionCode,
  createAssetInfo,
  standardPrincipalCV,
  noneCV,
  contractPrincipalCV,
  tupleCV,
  bufferCV,
  bufferCVFromString,
  someCV,
  PostConditionMode,
  BufferReader,
} from "@stacks/transactions";
import { Buffer } from "@stacks/common";

import { useAppState } from "./state";

import {
  ConfirmationScreen,
  HowItWorks,
  HowItWorksSection,
  SpecialNFT,
  StackingThing,
  StxAmountInput,
  StxBitcoin,
  StxFoundationImg,
  StxInfoSection,
  SupportPartners,
} from "./LandingViews";
import { APP_COLORS } from "../const/colors";
import { useRef, useState } from "react";
import {
  ALLOW_CONTRACT_CALL,
  CALLER_PRINCIPAL,
  CONTRACT_ADDRESS,
  CONTRACT_NAME,
  DELEGATE_STX_FUNC_NAME,
  DELEGATE_TO_PRINCIPAL,
  NETWORK,
} from "../const";

const appConfig = new AppConfig(["store_write", "publish_data"]);
const userSession = new UserSession({ appConfig });

const Landing = () => {
  const [confirmTx, _ConfirmTx] = useState<Boolean>(false);
  const thanksRef = useRef<HTMLDivElement>(null);
  const howItWorks = useRef<HTMLDivElement>(null);

  const [txAddy, _txAddy] = useState<string | undefined>(undefined);
  const [err, _Err] = useState<string | undefined>(undefined);
  const [loading, _Loading] = useState<boolean>(false);
  const [stxAmount, _StxAmount] = useState<number>(0);

  const handleSuccess = () => {
    if (thanksRef.current !== null)
      thanksRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleHowItWorks = () => {
    if (howItWorks.current !== null)
      howItWorks.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  const handleAllow = async (senderAddy: string) => {
    console.log("handle allow", senderAddy);

    try {
      const txOptions = {
        contractAddress: "SP000000000000000000002Q6VF78",
        contractName: "pox",
        functionName: ALLOW_CONTRACT_CALL,
        functionArgs: [
          contractPrincipalCV(
            "SPXVRSEH2BKSXAEJ00F1BY562P45D5ERPSKR4Q33",
            "bitcoin-brink-pool"
          ),
          noneCV(),
        ],
        senderKey: senderAddy,
        validateWithAbi: true,
        network: NETWORK,
        postConditions: [],
        anchorMode: AnchorMode.Any,
        onFinish: (data: any) => {
          console.log("we did it", data);
          handleDelegate(senderAddy);
        },
        onCancel: () => {
          console.log("err");
          _Loading(false);
        },
      };
      console.log("txOptions", txOptions);
      const transaction = await openContractCall(txOptions);
      console.log("transation", transaction);
    } catch (err) {
      console.log("handleAllow err", err);
    }
  };
  const handleDelegate = async (senderAddy: string) => {
    try {
      const bufferHashTest = new Buffer(1);

      const bufferHashByte = new Buffer(senderAddy);

      const bufCVHash = bufferCV(bufferHashTest);
      const bufHashByte = bufferCV(bufferHashByte);

      // const bufferHashTestThing = Buffer.from("Þó6'gE073+WÞqä3ÇLH");

      // const bufferReader = new BufferReader(bufferHashTestThing);

      const hashBytes = bufferCVFromString("RANDO_ADDY_TX");
      const AMOUNT = stxAmount * 1000000;

      const DELEGATE_ARGS = [
        uintCV(AMOUNT),
        standardPrincipalCV(DELEGATE_TO_PRINCIPAL),
        someCV(uintCV(720650)),
        noneCV(),
        tupleCV({
          hashbytes: hashBytes,
          version: bufCVHash,
        }),
        uintCV(1),
      ];

      const postConditionAddress = senderAddy;
      const postConditionCode = FungibleConditionCode.Equal;

      const postConditions = [
        makeStandardSTXPostCondition(
          postConditionAddress,
          postConditionCode,
          AMOUNT
        ),
      ];

      const txOptions = {
        contractAddress: "SPXVRSEH2BKSXAEJ00F1BY562P45D5ERPSKR4Q33",
        contractName: "bitcoin-brink-pool",
        functionName: DELEGATE_STX_FUNC_NAME,
        functionArgs: DELEGATE_ARGS,
        senderKey: senderAddy,
        validateWithAbi: true,
        network: NETWORK,
        postConditions: [],
        postConditionMode: PostConditionMode.Deny,
        anchorMode: AnchorMode.Any,
        onFinish: (data: any) => {
          console.log("we did it", data);
          _ConfirmTx(data.txId);
          _txAddy(data.txId);
          handleSuccess();
        },
        onCancel: () => {
          console.log("err");
          _Loading(false);
        },
      };
      console.log("txOptions", txOptions);
      const transaction = await openContractCall(txOptions);
      console.log("transation", transaction);
    } catch (err) {
      console.log("nope", err);
    }
  };
  const AUTH_OPTIONS = {
    appDetails: {
      name: "Stacks Foundation",
      icon: "https://thumb.tildacdn.com/tild3931-3038-4632-b063-313631343738/-/resize/110x/-/format/webp/Foundation_Logo_Blac.png",
    },
    redirectTo: "/",
    onFinish: async () => {
      try {
        let userData = userSession.loadUserData();

        const senderAddress = userData.profile.stxAddress.mainnet;
        console.log("what is good here");
        handleAllow(senderAddress);
        //handleDelegate(senderAddress);
        console.log("did this run?");
      } catch (err) {
        console.log("noooo", err);
      }
    },
    userSession: userSession,
  };

  return (
    <Connect authOptions={AUTH_OPTIONS}>
      <div
        style={{
          minHeight: "80%",
          backgroundColor: APP_COLORS.black,
          padding: "20px 0",
          flex: 1,
        }}
      >
        <ColumnFlex
          height={"100%"}
          alignItems="center"
          justifyContent="center"
          margin={"auto"}
          maxWidth={"1280px"}
          minHeight={"100%"}
        >
          <ColumnFlex
            width={"100%"}
            alignItems={"center"}
            justifyContent={"space-between"}
            padding={{
              sm: "40px 0",
              _: "40px 0",
              lg: "0",
            }}
            flexDirection={{
              _: "column",
              sm: "column",
              md: "column",
              lg: "row",
            }}
          >
            <StxInfoSection
              handleHowItWorks={handleHowItWorks}
              stxAmount={stxAmount}
              _StxAmount={_StxAmount}
            />
            <ColumnFlex padding={"0 20px"}>
              <StxBitcoin />
              <SupportPartners />
            </ColumnFlex>
          </ColumnFlex>
        </ColumnFlex>
      </div>
      {confirmTx && (
        <ConfirmationScreen txAddy={txAddy} thanksRef={thanksRef} />
      )}
      <StackingThing />
      <HowItWorksSection howItWorks={howItWorks} />
      <SpecialNFT />
    </Connect>
  );
};

export default Landing;
