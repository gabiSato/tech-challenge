import type { Meta, StoryObj } from "@storybook/react";

import Text, { TextColor, TextSize, TextWeight } from "@/components/text";

const sizes: TextSize[] = ["3xl", "2xl", "xl", "lg", "md", "sm", "xs"];
const colors: TextColor[] = [
  "white",
  "black",
  "neutral-100",
  "neutral-200",
  "neutral-300",
  "neutral-400",
  "neutral-500",
  "neutral-600",
  "orange-100",
  "orange-200",
  "green-100",
  "green-200",
  "cyan-100",
  "cyan-200",
  "cyan-300",
];
const weights: TextWeight[] = ["thin", "regular", "medium", "semibold", "bold"];

const meta = {
  component: Text,
  argTypes: {
    as: {
      control: { type: "text" },
    },
    size: {
      options: sizes,
      control: { type: "select" },
    },
    color: {
      options: colors,
      control: { type: "select" },
    },
    weight: {
      options: weights,
      control: { type: "select" },
    },
  },
} satisfies Meta<typeof Text>;

export default meta;

type Story = StoryObj<typeof Text>;

export const Default: Story = {
  args: {
    children: "Text",
  },
};

export const Size: Story = {
  render: () => (
    <div className="flex flex-col gap-8">
      {sizes.map((size) => (
        <Text key={size} size={size}>
          Size {size}
        </Text>
      ))}
    </div>
  ),
};

export const Color: Story = {
  render: () => (
    <div className="flex flex-col gap-8">
      {colors.map((color) => (
        <Text key={color} color={color}>
          {color}
        </Text>
      ))}
    </div>
  ),
};

export const Weight: Story = {
  render: () => (
    <div className="flex flex-col gap-8">
      {weights.map((weight) => (
        <Text key={weight} weight={weight}>
          {weight}
        </Text>
      ))}
    </div>
  ),
};
