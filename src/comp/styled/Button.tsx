import React, { FC } from "react";
import styled from "styled-components";

import {
  color,
  ColorProps,
  space,
  SpaceProps,
  shadow,
  ShadowProps,
  layout,
  LayoutProps,
  border,
  BorderProps,
  typography,
  TypographyProps,
} from "styled-system";

type ButtonStyleProps = BorderProps &
  SpaceProps &
  ColorProps &
  LayoutProps &
  ShadowProps &
  TypographyProps;

type ButtonProps = ButtonStyleProps &
  React.HTMLAttributes<HTMLButtonElement> & {
    children: String | React.ReactNode;
  };

type FormButtonProps = ButtonProps & {
  valid: boolean;
};
export const ButtonStyle = styled.button<ButtonStyleProps>`
  box-sizing: border-box;
  text-align: center;
  border-style: none;
  cursor: pointer;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.3);
  :hover {
    box-shadow: 0 6px 12px 0 rgba(0, 0, 0, 0.2), 0 1px 4px 0 rgba(0, 0, 0, 0.3);
  }
  :active {
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 1px 3px 0 rgba(0, 0, 0, 0.3);
  }
  transition: all ease 0.3s;
  ${space}
  ${shadow}
    ${color}
    ${layout}
    ${border}
    ${typography}
`;

export const Button: FC<ButtonProps> = (props) => {
  return (
    <ButtonStyle
      color="accent"
      padding={3}
      width={0}
      borderRadius={1}
      bg="primary"
      fontSize={3}
      {...props}
    >
      {props.children}
    </ButtonStyle>
  );
};

export const FormButton: FC<FormButtonProps> = (props) => {
  const { valid } = props;

  return (
    <ButtonStyle
      color={valid ? "accent" : "primary"}
      padding={2}
      width={1 / 3}
      height="40px"
      borderRadius={1}
      bg={valid ? "primary" : "accent"}
      borderColor="primary"
      fontSize={3}
      type="submit"
      {...props}
    >
      {props.children}
    </ButtonStyle>
  );
};
