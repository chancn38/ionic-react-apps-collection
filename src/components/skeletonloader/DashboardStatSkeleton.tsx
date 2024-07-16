import { IonCard, IonCol, IonSkeletonText, IonThumbnail } from '@ionic/react'

export const DashboardStatSkeleton = () => {
  return (
    <>
      <IonCol className="ion-no-padding" size="6">
        <IonCard mode="ios" className="home-card">
            <IonThumbnail style={{ width: '100%', height: '130px' }}>
              <IonSkeletonText animated={true}></IonSkeletonText>
            </IonThumbnail>
        </IonCard>
      </IonCol>
      <IonCol className="ion-no-padding" size="6">
        <IonCard mode="ios" className="home-card">
            <IonThumbnail style={{ width: '100%', height: '150px' }}>
              <IonSkeletonText animated={true}></IonSkeletonText>
            </IonThumbnail>
        </IonCard>
      </IonCol>
      <IonCol className="ion-no-padding" size="6">
        <IonCard mode="ios" className="home-card" style={{marginTop: -15}}>
            <IonThumbnail style={{ width: '100%', height: '150px' }}>
              <IonSkeletonText animated={true}></IonSkeletonText>
            </IonThumbnail>
        </IonCard>
      </IonCol>
      <IonCol className="ion-no-padding" size="6">
        <IonCard mode="ios" className="home-card">
            <IonThumbnail style={{ width: '100%', height: '130px' }}>
              <IonSkeletonText animated={true}></IonSkeletonText>
            </IonThumbnail>
        </IonCard>
      </IonCol>
    </>
  )
}