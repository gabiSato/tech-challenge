import type { Meta, StoryObj } from "@storybook/react";

import Input from "@/components/input";

const meta = {
  component: Input,
  argTypes: {
    value: {
      type: "string",
    },
    type: {
      type: "string",
      options: ["text", "password", "email", "number", "tel", "url", "search"],
    },
    disabled: {
      type: "boolean",
    },
  },
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: "text",
  },
};
