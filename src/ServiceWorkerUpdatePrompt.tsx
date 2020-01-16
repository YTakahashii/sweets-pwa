import React from 'react';
import { IonAlert } from '@ionic/react';

export const ServiceWorkerUpdatePrompt: React.FC<{ registration: ServiceWorkerRegistration }> = ({ registration }) => (
  <IonAlert
    isOpen={!!registration.waiting}
    header='ニューリリース'
    message='新しいバージョンがリリースされました。'
    buttons={[
      {
        text: 'アップデート',
        handler: () => {
          registration.waiting?.postMessage({ type: 'SKIP_WAITING' });
          window.location.reload();
        },
      },
    ]}
  />
);
