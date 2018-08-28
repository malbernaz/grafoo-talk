import React from "react";
import defaultTheme from "mdx-deck/themes";

export const PINK = "#E10098";

export const Layout = ({ children }) => <div style={{ textAlign: "left" }}>{children}</div>;

export const theme = {
  ...defaultTheme,
  h1: {
    ...defaultTheme.h1,
    color: PINK
  },
  h2: {
    ...defaultTheme.h2,
    color: PINK
  },
  h3: {
    ...defaultTheme.h3,
    color: PINK
  },
  code: {
    ...defaultTheme.code,
    color: PINK
  }
};
