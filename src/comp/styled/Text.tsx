import React, { FC } from "react";
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

export const fontSize = {
  xs: APP_THEME.fontSizes[2],
  md: APP_THEME.fontSizes[3],
  lg: APP_THEME.fontSizes[4],
};

type TextStyleProps = SpaceProps & TypographyProps & ColorProps;

type TextProps = TextStyleProps &
  React.HTMLAttributes<HTMLParagraphElement> & {
    onClick?: () => void;
    children?: String | null | string | number | any;
  };

const TextStyle = styled.p<TextStyleProps>`
  margin: 0;
  ${space}
  ${typography}
    ${color}
`;

export const Text: FC<TextProps> = (props) => {
  return (
    <TextStyle
      fontSize={{
        xs: `${fontSize.xs}px`,
        md: `${fontSize.md}px`,
        lg: `${fontSize.lg}px`,
      }}
      fontFamily={"Poppins"}
      color="text"
      lineHeight={{
        xs: `${fontSize.xs + 8}px`,
        md: `${fontSize.md + 16}px`,
        lg: `${fontSize.lg + 20}px`,
      }}
      {...props}
    >
      {props.children}
    </TextStyle>
  );
};

const subFontSize = {
  xs: APP_THEME.fontSizes[1],
  md: APP_THEME.fontSizes[2],
  lg: APP_THEME.fontSizes[3],
};

export const SubText: FC<TextProps> = (props) => {
  return (
    <TextStyle
      fontSize={{
        xs: `${subFontSize.xs}px`,
        md: `${subFontSize.md}px`,
        lg: `${subFontSize.lg}px`,
      }}
      fontFamily={"body"}
      color="text"
      lineHeight={{
        xs: `${subFontSize.xs + 4}px`,
        md: `${subFontSize.md + 8}px`,
        lg: `${subFontSize.lg + 10}px`,
      }}
      {...props}
    >
      {props.children}
    </TextStyle>
  );
};

const triFontSize = {
  xs: APP_THEME.fontSizes[0],
  md: APP_THEME.fontSizes[1],
  lg: APP_THEME.fontSizes[2],
};

export const TriText: FC<TextProps> = (props) => {
  return (
    <TextStyle
      fontSize={{
        xs: `${triFontSize.xs}px`,
        md: `${triFontSize.md}px`,
        lg: `${triFontSize.lg}px`,
      }}
      fontFamily={"body"}
      color="text"
      lineHeight={{
        xs: `${triFontSize.xs + 2}px`,
        md: `${triFontSize.md + 4}px`,
        lg: `${triFontSize.lg + 5}px`,
      }}
      {...props}
    >
      {props.children}
    </TextStyle>
  );
};
