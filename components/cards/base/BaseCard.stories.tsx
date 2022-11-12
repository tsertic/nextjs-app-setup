import { ComponentMeta, ComponentStory } from '@storybook/react';
import { BaseCard, IBaseCard } from './BaseCard';
import { mockBaseCardProps } from './BaseCard.mocks';

export default {
  title: 'cards/base',
  component: BaseCard,
  argTypes: {},
} as ComponentMeta<typeof BaseCard>;

const Template: ComponentStory<typeof BaseCard> = (args) => (
  <BaseCard {...args} />
);

export const Base = Template.bind({});

Base.args = {
  ...mockBaseCardProps.base,
} as IBaseCard;
