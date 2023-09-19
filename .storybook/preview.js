/** @type { import('@storybook/react').Preview } */

import '../node_modules/leaflet/dist/leaflet.css';
import '../node_modules/leaflet.markercluster/dist/MarkerCluster.Default.css';
import '../node_modules/leaflet.markercluster/dist/MarkerCluster.css';
import './stories/examples/styles.css';

const preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
