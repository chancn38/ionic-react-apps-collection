import { IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonContent, IonHeader, IonInput, IonList, IonLoading, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react'
import axios from 'axios'
import Pusher from 'pusher-js'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import PullRefresh from '../../components/refresher/PullRefresh'

const pusher = new Pusher('8073cecf96f76974413e', {
  cluster: 'ap2',
});

const PusherWebsocket = () => {
    const { name } = useParams<{ name: string }>()

    const [notifData, setNotifData] = useState<any>([]);
    const [isLoading, setIsLoading] = useState(false);
   
  
    useEffect(() => {
      // Subscribe to a channel
      const channel = pusher.subscribe(`private-chat-room.${2}`);
      // Bind to an event within that channel
      channel.bind('message', (data: { message: string }) => {
        // Append the new notification to the notifications state
        fetchNotificationList()
      });
  
      // Cleanup function
      return () => {
        pusher.unsubscribe(`private-chat-room.${2}`);
      };
    }, [pusher]);
  
    const fetchNotificationList = async () => {
      setIsLoading(true);
      try {
        //const response = await axios.post(`https://testmnlemployee.eiris.ph/MobileAppEmployeeApi/GetNotifications?employee_id=${66}`);
        const response = await axios.get(`http://localhost:8000/api/chat/room/2/messages`,{ headers: { Authorization: "Bearer " + '14|SgKoOLXUDqHtx6P66ZsEcx1UMYlj3TGVB8n6lUbf9b65d233'}});
        // Append new notifications to existing notifData
        setNotifData(response.data.data);
        // setNotifData(prevNotifData => [...prevNotifData, ...response.data.data]);
      } catch (error) {
        throw error; // Rethrow the error to handle it in the calling function
      } finally {
        setIsLoading(false);
      }
    };



    useEffect(() => {
      fetchNotificationList();
    }, []);
    
  return (
    <IonPage>
      <IonLoading isOpen={isLoading} message={'Loading...'}  />
      <IonHeader>
        <IonToolbar color='secondary'>
          <IonButtons slot='start'>
            <IonMenuButton />
          </IonButtons>
          <IonTitle>{name}</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
      <PullRefresh margin={"40px"} onRefresh={fetchNotificationList} />
        <div style={{ marginTop: 50 }}>
          <div className='ion-text-center enable-bio-card'>
            
            <IonCardHeader>
              <IonCardTitle style={{ fontSize: 26, fontWeight: 550 }}>
                Pusher
              </IonCardTitle>
            </IonCardHeader>

            <IonList>
              {notifData.map((msg) => (
                <IonCard >
                  <IonCardContent>
                    <p>{msg.message}</p>
                    <small>{new Date(msg.created_at).toLocaleString()}</small>
                  </IonCardContent>
                </IonCard>
              ))}
            </IonList>
            
          </div>
        </div>
      </IonContent>
    </IonPage>
  )
}

export default PusherWebsocket