import React from "react";
import styled from "styled-components";

import {
  space,
  SpaceProps,
  flexbox,
  FlexboxProps,
  layout,
  LayoutProps,
} from "styled-system";

export type FlexProps = React.HTMLAttributes<HTMLDivElement> &
  SpaceProps &
  FlexboxProps &
  LayoutProps;

export const Flex = styled.div<FlexProps>`
  display: flex;
  ${flexbox}
  ${space}
    ${layout}
`;

type BasicProps = FlexProps & {
  onClick?: () => void;
  children?: any;
  id?: string;
};
export const RowFlex = (props: BasicProps) => {
  return (
    <Flex id={props.id} flexDirection="row" {...props}>
      {props.children}
    </Flex>
  );
};

export const ColumnFlex = (props: BasicProps) => {
  return (
    <Flex id={props.id} flexDirection="column" {...props}>
      {props.children}
    </Flex>
  );
};
