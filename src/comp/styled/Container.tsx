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
} from "styled-system";
import LoaderPlaceHolder from "../Loader";
import { ColumnFlex } from "./Flex";

export type ConStyleProps = BorderProps &
  SpaceProps &
  ColorProps &
  LayoutProps &
  ShadowProps;

export type ConProps = ConStyleProps &
  React.HTMLAttributes<HTMLDivElement> & {
    children?: React.ReactNode;
  };

export const ContainerStyle = styled.div<ConStyleProps>`
  box-sizing: border-box;
  ${space}
  ${shadow}
    ${color}
    ${layout}
    ${border}
`;

// export const Container: FC<ConProps> = ({ children, ...props }) => {
//   return (
//     <ContainerStyle boxShadow={1} padding={3} bg="background" {...props}>
//       {children}
//     </ContainerStyle>
//   );
// };

export const Container: FC<ConProps> = (props) => {
  return (
    <ContainerStyle boxShadow={1} padding={3} bg="background" {...props}>
      {props.children}
    </ContainerStyle>
  );
};

const HomeConThing = styled.div`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  height: 100%;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  font-family: Merriweather, serif;
`;
export const HomeCon: FC<ConProps> = (props) => {
  return <HomeConThing {...props}>{props.children}</HomeConThing>;
};

export const BareCon: FC<ConProps> = (props) => {
  return <ContainerStyle {...props}>{props.children}</ContainerStyle>;
};

export const ContentBodyCon: FC<ConProps> = (props) => {
  return (
    <ContainerStyle
      width={["98vw", "400px", "800px", "1000px", "1200px"]}
      {...props}
    >
      {props.children}
    </ContainerStyle>
  );
};
export type RoutesContainerProps = {
  children?: React.ReactNode;
};

export const RoutesContainer = (props: RoutesContainerProps) => {
  return (
    <Container
      overflow="hidden"
      bg="background"
      padding="0"
      borderRadius={3}
      height="100%"
    >
      {props.children}
    </Container>
  );
};

export const LoaderContainer = () => {
  return (
    <Container
      overflowY="scroll"
      bg="background"
      padding="0"
      borderRadius={3}
      height="100%"
    >
      <Container
        display="flex"
        minHeight="100%"
        bg="background"
        padding="0"
        borderRadius={3}
      >
        <ColumnFlex flex="1" alignItems="center" justifyContent="center">
          <LoaderPlaceHolder />
        </ColumnFlex>
      </Container>
    </Container>
  );
};

export const ErrorContainer = (props: RoutesContainerProps) => {
  return (
    <Container
      overflowY="scroll"
      bg="background"
      padding="0"
      borderRadius={3}
      height="90%"
    >
      <Container
        display="flex"
        minHeight="100%"
        bg="background"
        padding="0"
        borderRadius={3}
      >
        <ColumnFlex flex="1" alignItems="center" justifyContent="center">
          {props.children}
        </ColumnFlex>
      </Container>
    </Container>
  );
};
