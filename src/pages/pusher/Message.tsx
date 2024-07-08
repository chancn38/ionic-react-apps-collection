// src/components/Message.js
import React from 'react';
import { IonItem, IonLabel } from '@ionic/react';

const Message = ({ message }) => (
  <IonItem>
    <IonLabel>{message}</IonLabel>
  </IonItem>
);

export default Message;
