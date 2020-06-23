import { addDecorator } from '@storybook/html';
import { withHTML } from '@whitespace/storybook-addon-html/html';
import centered from "@storybook/addon-centered/html";

addDecorator(withHTML({
  prettier: {
    tabWidth: 2,
    useTabs: true,
    htmlWhitespaceSensitivity: 'strict',
  },
}));
addDecorator(centered)