import {
    IonButtons,
    IonCard,
    IonCardHeader,
    IonCol,
    IonContent,
    IonGrid,
    IonHeader,
    IonIcon,
    IonLabel,
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

const Home = () => {
  const { name } = useParams<{ name: string }>()

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
          <IonRow>
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
          {/* <IonRow>
            <IonCol size='4'>
              <IonCard button className='card'>
                <IonCardHeader>
                  <IonIcon icon={settingsOutline} className='card-icon' />
                  <IonLabel>Settings</IonLabel>
                </IonCardHeader>
              </IonCard>
            </IonCol>
            <IonCol size='4'>
              <IonCard button className='card'>
                <IonCardHeader>
                  <IonIcon icon={statsChartOutline} className='card-icon' />
                  <IonLabel>Reports</IonLabel>
                </IonCardHeader>
              </IonCard>
            </IonCol>
            <IonCol size='4'>
              <IonCard button className='card'>
                <IonCardHeader>
                  <IonIcon icon={walletOutline} className='card-icon' />
                  <IonLabel>POS Sale</IonLabel>
                </IonCardHeader>
              </IonCard>
            </IonCol>
          </IonRow> */}
        </IonGrid>
      </IonContent>
    </IonPage>
  )
}

export default Home
