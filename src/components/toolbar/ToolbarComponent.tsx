// ToolbarComponent.jsx
import React from 'react';
import { IonHeader, IonToolbar, IonButtons, IonButton, IonIcon } from '@ionic/react';
import { personCircleOutline, notificationsOutline } from 'ionicons/icons';
import './ToolbarComponent.scss';

const ToolbarComponent = () => {
  return (
    <IonHeader className="header">
      <IonToolbar>
        <IonButtons slot="start">
          <IonButton>
            <IonIcon icon={personCircleOutline} className="large-icon"/>
          </IonButton>
        </IonButtons>
        <IonButtons slot="end">
          <IonButton routerLink='/notification'>
            <IonIcon icon={notificationsOutline} className="large-icon"/>
          </IonButton>
        </IonButtons>
      </IonToolbar>
    </IonHeader>
  );
};

export default ToolbarComponent;
