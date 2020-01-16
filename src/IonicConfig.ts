import { setupConfig } from '@ionic/react';
import { isMaterial } from './utils/isMaterial';

const animated = isMaterial(); // iOSのみアニメーションをオフにする

setupConfig({
  swipeBackEnabled: false,
  animated,
});
