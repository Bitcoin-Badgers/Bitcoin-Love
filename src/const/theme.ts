import { APP_COLORS, APP_SHADOWS } from "./colors";

interface themeInterface {
  [key: string]: any;
}

const breakpoints: any = ["0px", "600px", "960px", "1280px", "1920px"];

breakpoints.xs = breakpoints[0];
breakpoints.sm = breakpoints[1];
breakpoints.md = breakpoints[2];
breakpoints.lg = breakpoints[3];
breakpoints.xl = breakpoints[4];

export const APP_THEME: themeInterface = {
  colors: {
    ...APP_COLORS,
    primary: APP_COLORS.white,
    secondary: APP_COLORS.black,
    tri: APP_COLORS.darkPurple,
  },
  fonts: {
    body: "RobotoReg system-ui, sans-serif",
    heading: "RobotoBold system-ui, sans-serif",
    monospace: "Menlo, monospace",
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.25,
  },
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  sizes: [180, 300, 615, 1230],
  breakpoints: breakpoints,
  shadows: APP_SHADOWS,
  radii: [0, 4, 8, 12, 16],
};

export const NON_MOBILE_HEADER_HEIGHT = 72;
export const NON_MOBILE_NAV_WIDTH = 100;
