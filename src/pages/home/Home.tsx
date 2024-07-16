import {
  IonButtons,
  IonContent,
  IonGrid,
  IonHeader,
  IonListHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar
} from '@ionic/react'
import Pusher from 'pusher-js'
import { useParams } from 'react-router-dom'
import PullRefresh from '../../components/refresher/PullRefresh'
import './Home.css'
import DashboardStatCard from '../../page/dashboard/component/DashboardStatCard'
import DashboardProjectCard from '../../page/dashboard/component/DashboardProjectCard'

const pusher = new Pusher('8073cecf96f76974413e', {
  cluster: 'ap2',
});

const Home = () => {
  const { name } = useParams<{ name: string }>()

  const reload = () =>{
    window.location.reload()
  }

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
      <PullRefresh margin={"40px"} onRefresh={reload} />
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
