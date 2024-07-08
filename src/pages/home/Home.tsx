import {
  IonButton,
    IonButtons,
    IonCard,
    IonCardHeader,
    IonCol,
    IonContent,
    IonGrid,
    IonHeader,
    IonIcon,
    IonInput,
    IonLabel,
    IonListHeader,
    IonMenuButton,
    IonPage,
    IonRow,
    IonTitle,
    IonToolbar
} from '@ionic/react'
import {
    documentTextOutline,
    fingerPrintOutline,
    peopleOutline,
    phonePortraitOutline,
    qrCodeOutline,
    scanOutline,
    settingsOutline,
    statsChartOutline,
    walletOutline
} from 'ionicons/icons'
import { useParams } from 'react-router-dom'
import './Home.css'
import PullRefresh from '../../components/refresher/PullRefresh'
import Pusher from 'pusher-js'
import axios from 'axios'
import { useEffect, useState } from 'react'
import DashboardStatCard from '../../components/card/DashboardStatCard'
import DashboardProjectCard from '../../components/card/DashboardProjectCard'

const pusher = new Pusher('8073cecf96f76974413e', {
  cluster: 'ap2',
});

const Home = () => {
  const { name } = useParams<{ name: string }>()
  const [message, setMessage] = useState('');
  const [roomId, setRoomId] = useState('');
  
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {

    // Subscribe to the channel
    const channel = pusher.subscribe(`private-chat-room.${roomId}`);

    // Listen for new messages
    channel.bind('NewChatMessage', (data) => {
      //setMessages((prevMessages) => [...prevMessages, data.message]);
    });

    // Clean up the subscription
    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    };
  }, [roomId]);

  const sendMessage = async () => {
    try {
      const response = await axios.post(`http://localhost:8000/api/chat/room/2/message`,{
        "content": message,
        "chat_room_id": roomId,
        "user_id": 1
    },{ headers: { Authorization: "Bearer " + '14|SgKoOLXUDqHtx6P66ZsEcx1UMYlj3TGVB8n6lUbf9b65d233'}});
      console.log(response)
    } catch (error) {
      throw error; // Rethrow the error to handle it in the calling function
    }
  };
  // const sendMessage = async () => {
  //   // Assume a function to send the message via an API call
  //   await fetch(`http://localhost:8000/api/chat/room/${roomId}/message`, {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       Authorization: "Bearer " + '14|SgKoOLXUDqHtx6P66ZsEcx1UMYlj3TGVB8n6lUbf9b65d233',
  //     },
  //     body: JSON.stringify({ content: newMessage }),
  //   });
  //   setNewMessage('');
  // };

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

      <IonContent fullscreen>

        <IonGrid>

        <DashboardStatCard />
        <IonListHeader className="list-header">New Projects</IonListHeader>
        <DashboardProjectCard />

          {/* <IonRow>
            <IonCol size='6'>
              <IonCard button className='card' routerLink='/scanqr/QRCode Scanner'>
                <IonCardHeader>
                  <IonIcon icon={qrCodeOutline} className='card-icon' />
                  <IonLabel>QR Scanner</IonLabel>
                </IonCardHeader>
              </IonCard>
            </IonCol>
            <IonCol size='6'>
              <IonCard button className='card' routerLink='/generateqr/QRCode Generator'>
                <IonCardHeader>
                  <IonIcon icon={qrCodeOutline} className='card-icon' />
                  <IonLabel>QR Generator</IonLabel>
                </IonCardHeader>
              </IonCard>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size='4'>
                <IonCard button className='card' routerLink='/fingerprint/Fingerprint Reader'>
                <IonCardHeader>
                  <IonIcon icon={fingerPrintOutline} className='card-icon' />
                  <IonLabel>Fingerprint</IonLabel>
                </IonCardHeader>
              </IonCard>
            </IonCol>
            <IonCol size='4'>
              <IonCard button className='card' routerLink='/phonesettings/Phone Settings'>
                <IonCardHeader>
                  <IonIcon icon={phonePortraitOutline} className='card-icon' />
                  <IonLabel>Phone</IonLabel>
                </IonCardHeader>
              </IonCard>
            </IonCol>
            <IonCol size='4'>
              <IonCard button className='card' routerLink='/ocr/OCR'>
                <IonCardHeader>
                  <IonIcon icon={scanOutline} className='card-icon' />
                  <IonLabel>OCR</IonLabel>
                </IonCardHeader>
              </IonCard>
            </IonCol>
          </IonRow>
           */}
        </IonGrid>
      </IonContent>
    </IonPage>
  )
}

export default Home
