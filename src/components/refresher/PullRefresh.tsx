import { IonRefresher, IonRefresherContent, RefresherEventDetail } from '@ionic/react'
import React from 'react'

const PullRefresh = ({ margin, onRefresh }) => {
    const pullRefresh = (event: CustomEvent<RefresherEventDetail>) => {
        setTimeout(() => {
        if (typeof onRefresh === 'function') {
            onRefresh(); // Invoke the function passed as prop
        }
        event.detail.complete();
        }, 1000);
    };
  return (
    <IonRefresher style={{ marginTop:`${margin}` }} color='primary' slot='fixed' onIonRefresh={pullRefresh}>
        <IonRefresherContent
            refreshingSpinner="crescent"
            color='primary'
        ></IonRefresherContent>
    </IonRefresher>
  )
}

export default PullRefresh