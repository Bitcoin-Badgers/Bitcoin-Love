import StxFoundation from "../assets/stacks-foundation.svg";
import BitcoinStx from "../assets/Image.svg";
import ConfirmImage from "../assets/otherImage.webp";
import brink from "../assets/brink_logo_1.png";
import byz from "../assets/byz.jpg";
import DT from "../assets/DT_English_Horizonta.svg";
import city from "../assets/CITYPNGCOMHD_White_R.webp";
import UGH from "../assets/image_16.svg";
import InfoBubble from "../assets/info.webp.webp";
import LgoWhite from "../assets/Logo_White.svg";
import unicorn from "../assets/unicorn_design_7.webp";
import Hiro from "../assets/hiro.svg";
import BrinkBlack from "../assets/brink_logo_1.webp";
import Xverse from "../assets/xverse.png";
import ReactTypingEffect from "react-typing-effect";

import { APP_COLORS } from "../const/colors";
import {
  ColumnFlex,
  Text,
  RowFlex,
  SubHeading,
  Button,
  SubText,
  TextHeading,
  TriText,
} from "./styled";
import { useState } from "react";
import { useConnect } from "@stacks/connect-react";
import { height } from "styled-system";

export const StxFoundationImg = () => (
  <img alt="Stacks Foundation" src={StxFoundation} height={500} width={511} />
);

interface howItWorkProps {
  handleHowItWorks: () => void;
}

export const HowItWorks = (props: howItWorkProps) => {
  const hanldeMoreInfo = () => {
    window.open("https://stacks.org/giving-back-to-bitcoin");
  };

  const hanldeNFTINfo = () => {
    window.open("https://stacks.org/giving-back-to-bitcoin#later");
  };
  return (
    <ColumnFlex marginTop={"20px"}>
      <RowFlex
        style={{ cursor: "pointer" }}
        onClick={() => props.handleHowItWorks()}
      >
        <img alt="Stacks Foundation" src={InfoBubble} height={30} width={30} />
        <SubText marginLeft={"20px"} color="white">
          How it works
        </SubText>
      </RowFlex>
      <RowFlex
        style={{ cursor: "pointer" }}
        onClick={() => hanldeNFTINfo()}
        marginTop={"10px"}
      >
        <img alt="Stacks Foundation" src={unicorn} height={30} width={30} />
        <SubText marginLeft={"20px"} color="white">
          Your support earns you a special NFT and more
        </SubText>
      </RowFlex>
      <RowFlex
        style={{ cursor: "pointer", position: "relative" }}
        onClick={() => hanldeMoreInfo()}
        marginTop={"10px"}
      >
        <img
          alt="Stacks Foundation"
          style={{
            left: -3,
            position: "absolute",
          }}
          src={city}
          height={37}
          width={37}
        />
        <div
          style={{
            width: "30px",
            height: "30px",
          }}
        />
        <SubText marginLeft={"20px"} color="white">
          More about Stacks ❤️ Bitcoin
        </SubText>
      </RowFlex>
    </ColumnFlex>
  );
};
export const SupportPartners = () => {
  return (
    <ColumnFlex width={"100%"}>
      <TriText color="white">With Support From:</TriText>
      <RowFlex
        justifyContent={"space-between"}
        width={"100%"}
        alignItems={"center"}
        marginTop={"20px"}
      >
        <img alt="Okcoin" src={LgoWhite} width={160} />
        <img alt="Okcoin" src={DT} width={150} />
        <img alt="Okcoin" src={brink} width={140} />
      </RowFlex>
      <RowFlex
        justifyContent={"space-between"}
        width={"100%"}
        alignItems={"center"}
        marginTop={"30px"}
      >
        <img alt="Okcoin" src={Hiro} width={160} />
        <img alt="Okcoin" src={Xverse} height={40} width={150} />
        <ColumnFlex
          width="140px"
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Text
            style={{
              lineHeight: "20px",
            }}
            fontWeight={"700"}
            fontSize={"20px"}
            color="white"
            fontFamily={"Poppins"}
          >
            Bitcoin
          </Text>
          <Text
            style={{
              lineHeight: "20px",
            }}
            fontSize={"20px"}
            fontWeight={"700"}
            color="white"
            fontFamily={"Poppins"}
          >
            Badgers
          </Text>
        </ColumnFlex>
        {/* <Text
          style={{
            margin: "1px",
          }}
          fontWeight={"500"}
          color="white"
          fontFamily={"Poppins"}
        >
          Bitcoin Badgers
        </Text> */}
      </RowFlex>
    </ColumnFlex>
  );
};

export const StxBitcoin = () => (
  <div style={{ padding: "40px" }}>
    <img alt="Bitcoin Now & Later" src={BitcoinStx} height={400} width={500} />
  </div>
);

interface StxInputParams {
  stxAmount: number;
  _StxAmount: (amount: number) => void;
}
export const StxAmountInput = (props: StxInputParams) => {
  const [displayStx, _DisplayStx] = useState<string>("");
  const [email, _Email] = useState<string>("");
  const { doOpenAuth } = useConnect();
  const [valid, _Valid] = useState<boolean>(false);

  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value;
    //keep numbers and period
    const resultRegex = /[^0-9.]/g;
    let formattedValue = parseFloat(newValue.replace(resultRegex, ""));

    if (isNaN(formattedValue)) {
      formattedValue = 0;
    }

    // keep number, period, comma, and dollar sign.
    const displayRegex = /[^0-9.,$]/g;
    const display =
      newValue.indexOf(".") == newValue.length - 1
        ? newValue.replace(displayRegex, "")
        : formattedValue.toLocaleString("en", {
            maximumFractionDigits: 2,
          }) + "  STX";
    _DisplayStx(display);
    props._StxAmount(formattedValue);

    console.log("formattedValue", formattedValue);
    if (formattedValue >= 15) {
      _Valid(true);
    } else {
      _Valid(false);
    }
  };

  const handleDelegateAuth = () => {
    if (valid) {
      doOpenAuth();
    }
  };
  // const onChangeEmail = (e: React.FormEvent<HTMLInputElement>) => {
  //   const newValue = e.currentTarget.value;
  //   _Email(newValue);
  // };
  return (
    <>
      <TextHeading style={{ marginTop: "40px" }} fontWeight={600}>
        Stx Amount
      </TextHeading>
      <RowFlex alignItems={"center"}>
        <div
          style={{
            padding: "8px 8px",
            background: "linear-gradient(to right, #721CB5, #4936CA)",
            borderRadius: "8px",

            display: "flex",
            alignItems: "center",
          }}
        >
          <input
            style={{
              width: "140px",
              height: "40px",
              background: "linear-gradient(to right, #A155E6, #7D6BF8)",
              border: "none",
              borderRadius: "8px",
              padding: "0 8px",
              margin: "0",
              color: "white",
              textAlign: "right",
              fontSize: "20px",
            }}
            type="text"
            step="1"
            value={displayStx}
            onChange={onChange}
            placeholder="0 Stx"
          />
        </div>
        <Button
          onClick={() => handleDelegateAuth()}
          marginLeft={"10px"}
          borderRadius={"8px"}
          height="60px"
          width={"180px"}
          color={!valid ? "white" : "black"}
          style={{
            background: valid
              ? "linear-gradient(to right, #FCC034, #F3F4F6)"
              : "otherPurple",
          }}
          backgroundColor={
            valid
              ? "linear-gradient(to right, #FCC034, #F3F4F6)"
              : "otherPurple"
          }
        >
          Stack for Bitcoin
        </Button>
      </RowFlex>
      {/* <RowFlex alignItems={"center"}>
        <Text color="white" fontWeight={600}>
          Email
        </Text>
        <TriText marginLeft={"5px"} color="white">
          (Optional)
        </TriText>
      </RowFlex>

      <div
        style={{
          padding: "8px 8px",
          background: "linear-gradient(to right, #721CB5, #4936CA)",
          borderRadius: "8px",
          marginTop: "10px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <input
          style={{
            width: "200px",
            height: "40px",
            background: "linear-gradient(to right, #A155E6, #7D6BF8)",
            border: "none",
            borderRadius: "8px",
            padding: "0 8px",
            margin: "0",
            color: "white",
            textAlign: "right",
            fontSize: "16px",
          }}
          type="text"
          step="1"
          value={email}
          onChange={onChangeEmail}
          placeholder="Email"
        />
      </div> */}
      <TriText fontSize={"12px"} margin="4px 0" color="white">
        Min Amount to Delegate is 15 Stx
      </TriText>
    </>
  );
};

interface ConfirmProps {
  thanksRef: React.Ref<HTMLDivElement>;
  txAddy: string | undefined;
}
export const ConfirmationScreen = ({ thanksRef, txAddy }: ConfirmProps) => {
  const handleViewTx = () => {
    if (txAddy) {
      window.open(`https://explorer.stacks.co/txid/${txAddy}?chain=mainnet`);
    }
  };

  return (
    <div
      style={{
        height: "100%",
        backgroundColor: "#f0f0f0",
      }}
      ref={thanksRef}
    >
      <RowFlex
        style={{ position: "relative" }}
        alignItems={"center"}
        justifyContent={"justify-start"}
        height={"100%"}
        width={"100%"}
        margin={"auto"}
        maxWidth={"1380px"}
      >
        <ColumnFlex
          alignItems="flex-start"
          justifyContent="center"
          width={"50%"}
        >
          <div
            style={{
              maxWidth: "600px",
              padding: "0 0 0 30px",
            }}
          >
            <SubHeading color="black" fontWeight={300}>
              Thank You ❤️
            </SubHeading>
          </div>
          <div
            style={{
              maxWidth: "800px",
              padding: "0 0 0 30px",
            }}
          >
            <Text color="black">
              We support and fund programs that grow the Stacks Ecosystem. ﻿Get
              to know the ways we're working to build a better internet on
              Bitcoin.
            </Text>
          </div>
          <div
            style={{
              maxWidth: "800px",
              padding: "0 0 0 30px",
            }}
          >
            <Text
              style={{ textDecoration: "underline" }}
              onClick={() => handleViewTx()}
            >
              View Tx
            </Text>
          </div>
        </ColumnFlex>

        <div
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            left: "30%",
            overflow: "hidden",
            width: "50%",
            transform: "skew(-30deg,0)",
            transformOrigin: "bottom left",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              bottom: 0,
              right: "-30vw",
              left: 0,

              backgroundPosition: "center center",
              backgroundSize: "cover",
              backgroundImage: `url("${ConfirmImage}")`,

              transform: "skew(30deg,0)",
              transformOrigin: "bottom left",
            }}
          />
        </div>
      </RowFlex>
    </div>
  );
};

export const StackingThing = () => {
  const handleBrink = () => {
    window.open(
      "https://stacking.club/reward-address/1MKrNDn9kZSBWpCvYwQr4ZkiR6rcMm2qF7"
    );
  };

  return (
    <div
      style={{
        backgroundColor: "##F0F0F0",
      }}
    >
      <ColumnFlex
        padding="20px"
        margin={"auto"}
        maxWidth={"800px"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <div>
          <Text
            style={{ textDecoration: "underline", cursor: "pointer" }}
            textAlign={"center"}
            onClick={() => handleBrink()}
          >
            Track rewards on stacking.club
          </Text>
        </div>
      </ColumnFlex>
    </div>
  );
};
interface HowTwerk {
  howItWorks: React.Ref<HTMLDivElement>;
}
export const HowItWorksSection = ({ howItWorks }: HowTwerk) => {
  return (
    <div
      style={{
        backgroundColor: "#FFFFFF",
      }}
      ref={howItWorks}
    >
      <RowFlex
        height={"inherit"}
        alignItems="center"
        justifyContent="center"
        margin={"auto"}
        maxWidth={"1280px"}
        padding={"80px 40px"}
      >
        <ColumnFlex padding="0 40px" maxWidth={500} alignItems={"center"}>
          <img alt="Stacks Foundation" src={UGH} height={127} width={100} />
          <Text marginTop="20px" fontWeight={500} color="black">
            How It Works
          </Text>
          <TriText marginTop={"10px"} fontWeight={200} textAlign={"center"}>
            We've worked with Xverse and Bitcoin Badgers to create a special
            Stacking pool. All the rewards from this pool are sent straight to
            Brink's bitcoin reward address, so they receive the BTC yield
            without anyone in the middle. Stacks never leave your wallet and
            Bitcoin flows directly to the beneficiary.
          </TriText>
        </ColumnFlex>
        <div
          style={{
            width: "1px",
            background: " #d1d1d1",
            height: "300px",
          }}
        />
        <ColumnFlex padding="0 40px" maxWidth={500} alignItems={"center"}>
          <img
            alt="Stacks Foundation"
            src={BrinkBlack}
            height={37}
            width={100}
          />
          <Text
            marginTop="20px"
            textAlign={"center"}
            fontWeight={500}
            color="black"
          >
            About Brink
          </Text>
          <TriText marginTop={"10px"} fontWeight={200} textAlign={"center"}>
            Brink exists to strengthen the Bitcoin protocol and network through
            fundamental research and development, and to support the Bitcoin
            developer community through funding, education, and mentoring.
          </TriText>
          <TriText marginTop={"10px"} fontWeight={200} textAlign={"center"}>
            Brink supports and mentors new contributors to open source Bitcoin
            development through their fellowship program, and supports the work
            of established Bitcoin protocol engineers through their grants
            program.
          </TriText>
        </ColumnFlex>
      </RowFlex>
    </div>
  );
};

interface StxInputParamsThing {
  stxAmount: number;
  _StxAmount: (amount: number) => void;
  handleHowItWorks: () => void;
}
export const StxInfoSection = (props: StxInputParamsThing) => {
  return (
    <ColumnFlex alignItems="flex-start" justifyContent="center">
      {/* <StxFoundationImg /> */}
      <div
        style={{
          maxWidth: "400px",
        }}
      >
        <SubHeading fontWeight={600}>Stacks Unleashes Bitcoin</SubHeading>
      </div>
      <div
        style={{
          maxWidth: "600px",
        }}
      >
        <div className="LandignSectionText"></div>
        <ReactTypingEffect
          className="LandignSectionText"
          text={["Internet.", "Web3", "Metaverse", "Society"]}
          staticText="Stacks shares a special connection with Bitcoin, all the way from tech
          to values. As a community, we're unleashing Bitcoin because we believe
          it's the best foundation for a better"
          cursorClassName="LandignSectionCuror"
        />
      </div>
      <div
        style={{
          maxWidth: "600px",
          marginTop: "20px",
        }}
      >
        <div className="LandignSectionText">
          To show our appreciation this holiday season, we're giving back in a
          uniquely Stacks way - supporting Bitcoin development with BTC yield
          from Stacking. We've partnered with Brink to make sure your generosity
          supports Bitcoin Core development and reaches the highest impact
          places in the Bitcoin Ecosystem.
        </div>
      </div>
      {/* <StxAmountInput
        _StxAmount={props._StxAmount}
        stxAmount={props.stxAmount}
      /> */}
      <HowItWorks handleHowItWorks={props.handleHowItWorks} />
    </ColumnFlex>
  );
};

export const SpecialNFT = () => {
  const hanldeNFTINfo = () => {
    window.open("https://stacks.org/giving-back-to-bitcoin#later");
  };
  return (
    <div
      style={{
        height: "650px",
        backgroundImage: `url('https://thumb.tildacdn.com/tild6563-6134-4462-b464-353734363462/-/format/webp/Untitled_design_6.png')`,
        backgroundSize: "cover",
        backgroundColor: "#000",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundAttachment: "fixed",
        overflow: "hidden",
        opacity: "1",
        transition: "opacity .7s",
        position: "relative",
      }}
    >
      <div
        style={{
          backgroundImage:
            "linear-gradient(top, rgba(0,0,0,0.80), rgba(0,0,0,0.80))",
          width: "100%",
          height: "650px",
          position: "absolute",
          top: "0",
          left: "0",
        }}
      />
      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          height: "650px",
          width: "100%",
          background: "rgba(0, 0, 0, 0.7)",
        }}
      />
      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          height: "650px",
          width: "100%",
        }}
      >
        <RowFlex
          height={"100%"}
          maxWidth={"1280px"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <RowFlex
            height={"inherit"}
            alignItems="center"
            justifyContent="center"
            margin={"auto"}
            width={"100%"}
          >
            <ColumnFlex alignItems="flex-start" justifyContent="center">
              <div
                style={{
                  maxWidth: "400px",
                }}
              >
                <SubHeading fontWeight={600}>₿NFT</SubHeading>
              </div>
              <div
                style={{
                  maxWidth: "800px",
                }}
              >
                <Text fontWeight={500} color="primary">
                  We’ve begun collaborating with stxnft.com and Fungible Systems
                  to create a very special, very unique Bitcoin-powered NFT.
                  Supporting the holiday effort whitelists you for this special
                  effort in 2022.
                </Text>
              </div>
              <Button
                marginTop={"20px"}
                color="white"
                backgroundColor={"#5546FF"}
                borderRadius={"24px"}
                onClick={() => hanldeNFTINfo()}
              >
                Learn More
              </Button>
            </ColumnFlex>
            <div
              style={{
                width: "100px",
              }}
            />
          </RowFlex>
        </RowFlex>
      </div>
    </div>
  );
};
