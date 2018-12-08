import { AppRegistry } from 'react-native';
import { getStorybookUI, configure } from '@storybook/react-native';

import './rn-addons';

configure(() => {
  require('../src/button/stories'); // eslint-disable-line global-require
  require('../src/caption/stories'); // eslint-disable-line global-require
  require('../src/heading/stories'); // eslint-disable-line global-require
  require('../src/input/stories'); // eslint-disable-line global-require
  require('../src/text/stories'); // eslint-disable-line global-require
}, module);

const StorybookUIRoot = getStorybookUI({});

AppRegistry.registerComponent('%APP_NAME%', () => StorybookUIRoot);

export default StorybookUIRoot;
