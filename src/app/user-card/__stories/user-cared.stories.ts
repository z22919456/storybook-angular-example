import { Meta, Story } from "@storybook/angular";
import { UserCardComponent } from "../user-card.component";

export default {
  title: 'components/UserCard',
  component: UserCardComponent
} as Meta

const Template: Story<UserCardComponent> = (args: UserCardComponent) => ({
  props: args
})


export const Default = Template.bind({});
Default.args = {

}

export const WithName = Template.bind({});
WithName.args = {
  name: 'david',
  org: 'fdsjklfjsdaklfjklds'
}