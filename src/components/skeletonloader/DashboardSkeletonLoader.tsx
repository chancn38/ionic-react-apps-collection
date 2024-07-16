import { IonRow, IonCol, IonCard, IonCardContent, IonThumbnail, IonSkeletonText } from '@ionic/react'
import React from 'react'

const DashboardSkeletonLoader = () => {
  return (
    <IonRow>
      <IonCol className="ion-no-padding" size="12">
        <IonCard mode="ios" className="home-card">
          <IonThumbnail style={{ width: '100%', height: '50px' }}>
              <IonSkeletonText animated={true}></IonSkeletonText>
          </IonThumbnail>
        </IonCard>
      </IonCol>

      <IonCol className="ion-no-padding" size="12" style={{marginBottom:15}}>
        <IonCard mode="ios" className="home-card">
          <IonThumbnail style={{ width: '100%', height: '20px' }}>
              <IonSkeletonText animated={true}></IonSkeletonText>
          </IonThumbnail>
        </IonCard>
      </IonCol>
      <IonCol className="ion-no-padding" size="12" style={{marginTop:-5}}>
        <IonCard mode="ios" className="home-card">
          <IonThumbnail style={{ width: '100%', height: '10px' }}>
              <IonSkeletonText animated={true}></IonSkeletonText>
          </IonThumbnail>
        </IonCard>
      </IonCol>
      <IonCol className="ion-no-padding" size="12" style={{marginTop:-5}}>
        <IonCard mode="ios" className="home-card">
          <IonThumbnail style={{ width: '100%', height: '20px' }}>
              <IonSkeletonText animated={true}></IonSkeletonText>
          </IonThumbnail>
        </IonCard>
      </IonCol>
      <IonCol className="ion-no-padding" size="12" style={{marginTop:-5}}>
        <IonCard mode="ios" className="home-card" style={{ width: '50%', height: '10px'}}>
          <IonThumbnail style={{ width: '100%', height: '15px'}}>
              <IonSkeletonText animated={true}></IonSkeletonText>
          </IonThumbnail>
        </IonCard>
      </IonCol>
      <IonCol className="ion-no-padding" size="6">
        <IonCard mode="ios" className="home-card">
            <IonThumbnail style={{ width: '100%', height: '120px' }}>
              <IonSkeletonText animated={true}></IonSkeletonText>
            </IonThumbnail>
        </IonCard>
      </IonCol>
      <IonCol className="ion-no-padding" size="6">
        <IonCard mode="ios" className="home-card">
            <IonThumbnail style={{ width: '100%', height: '120px' }}>
              <IonSkeletonText animated={true}></IonSkeletonText>
            </IonThumbnail>
        </IonCard>
      </IonCol>
      <IonCol className="ion-no-padding" size="6">
        <IonCard mode="ios" className="home-card">
            <IonThumbnail style={{ width: '100%', height: '120px' }}>
              <IonSkeletonText animated={true}></IonSkeletonText>
            </IonThumbnail>
        </IonCard>
      </IonCol>
      <IonCol className="ion-no-padding" size="6">
        <IonCard mode="ios" className="home-card">
            <IonThumbnail style={{ width: '100%', height: '120px' }}>
              <IonSkeletonText animated={true}></IonSkeletonText>
            </IonThumbnail>
        </IonCard>
      </IonCol>
      <IonCol className="ion-no-padding" size="12" style={{marginTop:-15}}>
        <IonCard mode="ios" className="home-card" style={{ width: '60%', height: '15px',marginTop:20}}>
          <IonThumbnail style={{ width: '100%', height: '15px'}}>
              <IonSkeletonText animated={true}></IonSkeletonText>
          </IonThumbnail>
        </IonCard>
      </IonCol>
      <IonCol className="ion-no-padding" size="12">
        <IonCard mode="ios" className="home-card">
          <IonThumbnail style={{ width: '100%', height: '50px' }}>
              <IonSkeletonText animated={true}></IonSkeletonText>
          </IonThumbnail>
        </IonCard>
      </IonCol>
      <IonCol className="ion-no-padding" size="12">
        <IonCard mode="ios" className="home-card">
          <IonThumbnail style={{ width: '100%', height: '50px' }}>
              <IonSkeletonText animated={true}></IonSkeletonText>
          </IonThumbnail>
        </IonCard>
      </IonCol>
      <IonCol className="ion-no-padding" size="12">
        <IonCard mode="ios" className="home-card">
          <IonThumbnail style={{ width: '100%', height: '50px' }}>
              <IonSkeletonText animated={true}></IonSkeletonText>
          </IonThumbnail>
        </IonCard>
      </IonCol>
    </IonRow>
  )
}

export default DashboardSkeletonLoader