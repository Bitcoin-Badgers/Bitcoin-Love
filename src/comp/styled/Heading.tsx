import React, { FC, ReactElement } from "react";
import styled from "styled-components";
import {
  color,
  ColorProps,
  space,
  SpaceProps,
  typography,
  TypographyProps,
} from "styled-system";

import { APP_THEME } from "../../const/theme";

const HeaderFontSize = {
  Heading: {
    xs: APP_THEME.fontSizes[8],
    md: Math.round(APP_THEME.fontSizes[8] * 1.2),
    lg: Math.round(APP_THEME.fontSizes[8] * 1.4),
  },
  SubHeading: {
    xs: APP_THEME.fontSizes[7],
    md: Math.round(APP_THEME.fontSizes[7] * 1.2),
    lg: Math.round(APP_THEME.fontSizes[7] * 1.4),
  },
  TriHeading: {
    xs: APP_THEME.fontSizes[6],
    md: Math.round(APP_THEME.fontSizes[6] * 1.2),
    lg: Math.round(APP_THEME.fontSizes[6] * 1.4),
  },
  LabelHeading: {
    xs: APP_THEME.fontSizes[4],
    md: Math.round(APP_THEME.fontSizes[4] * 1.2),
    lg: Math.round(APP_THEME.fontSizes[4] * 1.4),
  },
  TextHeading: {
    xs: APP_THEME.fontSizes[3],
    md: Math.round(APP_THEME.fontSizes[3] * 1.1),
    lg: Math.round(APP_THEME.fontSizes[3] * 1.4),
  },
};

type HeadingStyleProps = SpaceProps & TypographyProps & ColorProps;

type HeadingProp = HeadingStyleProps &
  React.HTMLAttributes<HTMLParagraphElement> & {
    onClick?: () => void;
    children?: string;
    type: HeaderType;
  };

type TopLevelProp = HeadingStyleProps &
  React.HTMLAttributes<HTMLParagraphElement> & {
    onClick?: () => void;
    children?: string | "() => string[]";
  };

type FackProps = HeadingStyleProps &
  React.HTMLAttributes<HTMLParagraphElement> & {
    onClick?: () => void;
    children?: string | "() => string[]" | ReactElement<any, any>;
  };
enum HeaderType {
  Heading = "Heading",
  SubHeading = "SubHeading",
  TriHeading = "TriHeading",
  LabelHeading = "LabelHeading",
  TextHeading = "TextHeading",
}

const HeadingStyle = styled.p<HeadingStyleProps>`
  ${space}
  ${typography}
    ${color}
    margin:0;
`;

const PortStyle = styled.p<HeadingStyleProps>`
  ${space}
  ${typography}
  ${color}

  border-style: none;
  border-width: 1px;
  border-color: #060713;
  font-family: Poppins, sans-serif;

  letter-spacing: 1.5px;

  color: #ff7c7e;
  font-size: 38px;
  line-height: 44px;
  font-weight: 800;
  text-align: center;
`;
const BasicHeader: FC<HeadingProp> = (props) => {
  const fontSize = HeaderFontSize[props.type];
  return (
    <HeadingStyle
      fontSize={{
        xs: `${fontSize.xs}px`,
        md: `${fontSize.md}px`,
        lg: `${fontSize.lg}px`,
      }}
      fontFamily={"heading"}
      color="primary"
      fontWeight="600"
      lineHeight={{
        xs: `${fontSize.xs}px`,
        md: `${fontSize.md}px`,
        lg: `${fontSize.lg}px`,
      }}
      marginY={{
        xs: `${fontSize.xs / 3}px`,
        md: `${fontSize.md / 3}px`,
        lg: `${fontSize.lg / 3}px`,
      }}
      {...props}
    >
      {props.children}
    </HeadingStyle>
  );
};

export const Heading: FC<TopLevelProp> = ({ children, ...props }) => {
  return (
    <BasicHeader type={HeaderType.Heading} {...props}>
      {children}
    </BasicHeader>
  );
};

export const SubHeading: FC<TopLevelProp> = ({ children, ...props }) => {
  return (
    <BasicHeader type={HeaderType.SubHeading} {...props}>
      {children}
    </BasicHeader>
  );
};

export const TriHeading: FC<TopLevelProp> = ({ children, ...props }) => {
  return (
    <BasicHeader type={HeaderType.TriHeading} {...props}>
      {children}
    </BasicHeader>
  );
};

export const LabelHeading: FC<TopLevelProp> = ({ children, ...props }) => {
  return (
    <BasicHeader type={HeaderType.LabelHeading} {...props}>
      {children}
    </BasicHeader>
  );
};

export const TextHeading: FC<TopLevelProp> = ({ children, ...props }) => {
  return (
    <BasicHeader {...props} type={HeaderType.TextHeading}>
      {children}
    </BasicHeader>
  );
};

// export const PortHeader: FC<HeadingProp> = (props) => {
//   return <HeadingStyle {...props}>{props.children}</HeadingStyle>;
// };

export const Port: FC<FackProps> = ({ children, ...props }) => {
  return <PortStyle {...props}>{children}</PortStyle>;
};
