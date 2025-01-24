import type { Meta, StoryObj } from "@storybook/react";

import Select from "@/components/select";

const meta = {
  component: Select,
  argTypes: {
    value: {
      type: "string",
    },
    placeholder: {
      type: "string",
    },
  },
} satisfies Meta<typeof Select>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: "Text",
    placeholder: "Select an option",
    options: [
      { value: "1", label: "Option 1" },
      { value: "2", label: "Option 2" },
      { value: "3", label: "Option 3" },
    ],
    onChange: () => {},
  },
  render: (args) => {
    return <Select {...args} />;
  },
};
