import React from "react";
import type { Preview } from "@storybook/react";
import { Inter } from "next/font/google";

import "../src/app/globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const preview: Preview = {
  parameters: {
    layout: "centered",
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => {
      return (
        <div className={`${inter.variable} font-sans`}>
          <Story />
        </div>
      );
    },
  ],
};

export default preview;
