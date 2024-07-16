import {
  IonContent,
  IonGrid,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar
} from '@ionic/react'
import DashboardProjectCard from '../dashboard/component/DashboardProjectCard'

const InvitationPage = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>InvitationPage</IonTitle>
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

export default InvitationPage
