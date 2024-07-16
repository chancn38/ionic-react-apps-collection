import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonGrid,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar
} from '@ionic/react'
import DashboardProjectCard from '../dashboard/component/DashboardProjectCard'

const NotificationPage = () => {
  return (
    <IonPage>
      <IonHeader style={{boxShadow: 'none'}}>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton />
          </IonButtons>
          <IonTitle>Notifications</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid>
          <DashboardProjectCard />
        </IonGrid>
      </IonContent>
    </IonPage>
  )
}

export default NotificationPage
