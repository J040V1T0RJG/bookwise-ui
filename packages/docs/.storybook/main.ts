// /** @type { import('@storybook/react-vite').StorybookConfig } */

import type { StorybookConfig } from '@storybook/react-vite';


const config: StorybookConfig = {
  stories: [
    "../src/pages/**/*.stories.mdx",
    "../src/stories/**/*.stories.tsx"
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  viteFinal: (config, { configType }) => {
    if (configType === 'PRODUCTION') {
      config.base = '/bookwise-ui/'
    }

    return config
  }
};

export default config;
