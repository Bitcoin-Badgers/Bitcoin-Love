import React, { FC } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import STXWhiteLogo from "../../assets/STXNewsLogoWhite.png";
import STXBlackLogo from "../../assets/STXNewsLogoBlack.png";
import {
  color,
  ColorProps,
  space,
  SpaceProps,
  typography,
  TypographyProps,
} from "styled-system";

type FlexProps = SpaceProps &
  ColorProps &
  TypographyProps & {
    children?: any;
  };

type testProps = FlexProps &
  React.HTMLAttributes<HTMLDivElement> & {
    icon?: any;
  };

const IconStyle = styled.div<FlexProps>`
  cursor: pointer;
  ${space}
  ${color}
    ${typography}
`;

const NoWay = styled(FontAwesomeIcon)``;
const Image = styled.img``;
export const Icon: FC<testProps> = ({ icon, ...props }) => {
  return (
    <IconStyle
      padding="16px"
      fontSize="24px"
      color="primary"
      margin="auto"
      {...props}
    >
      <NoWay icon={icon} />
    </IconStyle>
  );
};

export const Logo: FC<testProps> = ({ icon, ...props }) => {
  return (
    <IconStyle
      padding="16px"
      fontSize="24px"
      color="primary"
      margin="auto"
      {...props}
    >
      <Image width={"40px"} height={"40px"} src={STXBlackLogo} />
    </IconStyle>
  );
};
