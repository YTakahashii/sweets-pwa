import { isPlatform } from '@ionic/react';

export function isMaterial() {
  if (isPlatform('ios') || isPlatform('ipad') || isPlatform('iphone')) {
    return false;
  } else {
    return true;
  }
}
