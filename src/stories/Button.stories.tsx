import type { Meta, StoryObj } from "@storybook/react";

import Button from "@/components/button";

const meta = {
  component: Button,
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    loading: false,
    children: "button",
  },
};

export const Loading: Story = {
  args: {
    loading: true,
    children: "button",
  },
};
