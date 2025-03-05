import type { Meta, StoryObj } from "@storybook/react";

import Loader from "@/components/loader";

const meta = {
  component: Loader,
} satisfies Meta<typeof Loader>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: "medium",
  },
};
