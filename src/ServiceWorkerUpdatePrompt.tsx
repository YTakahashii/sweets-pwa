import React, { useState } from 'react';
import { IonAlert } from '@ionic/react';

export const ServiceWorkerUpdatePrompt: React.FC<{ registration: ServiceWorkerRegistration }> = ({ registration }) => {
  const [isOpen, setOpen] = useState(true);

  const handleDismiss = () => {
    setOpen(false);
  };

  return (
    <IonAlert
      isOpen={isOpen}
      onDidDismiss={handleDismiss}
      header='ニューリリース'
      message='新しいバージョンがリリースされました。'
      buttons={[
        {
          text: 'アップデート',
          handler: () => {
            registration.waiting?.postMessage({ type: 'SKIP_WAITING' });
            handleDismiss();
            window.location.reload();
          },
        },
      ]}
    />
  );
};
