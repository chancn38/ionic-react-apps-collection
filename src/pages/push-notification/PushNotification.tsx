import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar
} from '@ionic/react'
import { useParams } from 'react-router-dom'
import './PushNotification.css'
import { PushNotifications } from '@capacitor/push-notifications'
import { useEffect } from 'react'

const PushNotification: React.FC = () => {
  const { name } = useParams<{ name: string }>()

  const addListeners = async () => {
    await PushNotifications.addListener('registration', token => {
      alert('Registration token: '+ token.value);
    });
  
    await PushNotifications.addListener('registrationError', err => {
      alert('Registration error: '+ err.error);
    });
  
    await PushNotifications.addListener('pushNotificationReceived', notification => {
      alert('Push notification received: '+ JSON.stringify(notification));
    });
  
    await PushNotifications.addListener('pushNotificationActionPerformed', notification => {
      alert('Push notification action performed'+ notification.actionId+ notification.inputValue);
    });
  }
  
  const registerNotifications = async () => {
    let permStatus = await PushNotifications.checkPermissions();
  
    if (permStatus.receive === 'prompt') {
      permStatus = await PushNotifications.requestPermissions();
    }
  
    if (permStatus.receive !== 'granted') {
      throw new Error('User denied permissions!');
    }
  
    await PushNotifications.register();
  }
  
  const getDeliveredNotifications = async () => {
    const notificationList = await PushNotifications.getDeliveredNotifications();
    alert('delivered notifications'+ JSON.stringify(notificationList));
  }

  useEffect(() => {
    addListeners();
  }, []);
  
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color='secondary'>
          <IonButtons slot='start'>
            <IonMenuButton />
          </IonButtons>
          <IonTitle>{name}</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen className='ion-text-center'>
        <IonButton onClick={()=>registerNotifications() }>Register</IonButton>
        <IonButton onClick={()=>getDeliveredNotifications()}>Notifications</IonButton>
      </IonContent>
    </IonPage>
  )
}

export default PushNotification
