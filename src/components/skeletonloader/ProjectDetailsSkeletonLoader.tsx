import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCol,
  IonLabel,
  IonRow,
  IonSkeletonText,
  IonThumbnail,
} from '@ionic/react'
import '../../pages/styles/SkeletonLoader.scss'
const ProjectDetailsSkeletonLoader = () => {
  return (
    <IonRow style={{ padding: 5 }}>
      <IonCol size="4">
        <IonCard mode="ios" className="card-loader-details" style={{height:50}}>
            <IonThumbnail style={{ width: '100%', height: '100px' }}>
              <IonSkeletonText animated={true}></IonSkeletonText>
            </IonThumbnail>
        </IonCard>
      </IonCol>
      <IonCol size="4">
        <IonCard mode="ios" className="card-loader-details" style={{height:50}}>
            <IonThumbnail style={{ width: '100%', height: '100px' }}>
              <IonSkeletonText animated={true}></IonSkeletonText>
            </IonThumbnail>
        </IonCard>
      </IonCol>
      <IonCol size="4">
        <IonCard mode="ios" className="card-loader-details" style={{height:50}}>
            <IonThumbnail style={{ width: '100%', height: '100px' }}>
              <IonSkeletonText animated={true}></IonSkeletonText>
            </IonThumbnail>
        </IonCard>
      </IonCol>
      
      <IonCol size="2"></IonCol>
      <IonCol size="2">
        <IonCard mode="ios" className="card-loader-details" style={{height:40}}>
            <IonThumbnail style={{ width: '100%', height: '100px' }}>
              <IonSkeletonText animated={true}></IonSkeletonText>
            </IonThumbnail>
        </IonCard>
      </IonCol>
      <IonCol size="2">
        <IonCard mode="ios" className="card-loader-details" style={{height:40}}>
            <IonThumbnail style={{ width: '100%', height: '100px' }}>
              <IonSkeletonText animated={true}></IonSkeletonText>
            </IonThumbnail>
        </IonCard>
      </IonCol>
      <IonCol size="2">
        <IonCard mode="ios" className="card-loader-details" style={{height:40}}>
            <IonThumbnail style={{ width: '100%', height: '100px' }}>
              <IonSkeletonText animated={true}></IonSkeletonText>
            </IonThumbnail>
        </IonCard>
      </IonCol>
      <IonCol size="2">
        <IonCard mode="ios" className="card-loader-details" style={{height:40}}>
            <IonThumbnail style={{ width: '100%', height: '100px' }}>
              <IonSkeletonText animated={true}></IonSkeletonText>
            </IonThumbnail>
        </IonCard>
      </IonCol>
      <IonCol size="2">
        <IonCard mode="ios" className="card-loader-details" style={{height:40}}>
            <IonThumbnail style={{ width: '100%', height: '100px' }}>
              <IonSkeletonText animated={true}></IonSkeletonText>
            </IonThumbnail>
        </IonCard>
      </IonCol>

      <IonCol size="8" className='ion-no-padding'>
        <IonCard className="card-loader">
          <IonThumbnail style={{ width: '100%', height: '40px' }}>
            <IonSkeletonText animated={true}></IonSkeletonText>
          </IonThumbnail>
        </IonCard>
      </IonCol>
      <IonCol size="4" className='ion-no-padding'>
        <IonCard className="card-loader">
          <IonThumbnail style={{ width: '100%', height: '40px' }}>
            <IonSkeletonText animated={true}></IonSkeletonText>
          </IonThumbnail>
        </IonCard>
      </IonCol>
      <IonCol size="8" className='ion-no-padding' style={{marginTop:-10}}>
        <IonCard className="card-loader">
          <IonThumbnail style={{ width: '100%', height: '200px' }}>
            <IonSkeletonText animated={true}></IonSkeletonText>
          </IonThumbnail>
        </IonCard>
      </IonCol>
      <IonCol size="4" className='ion-no-padding' style={{marginTop:-10}}>
        <IonCard className="card-loader">
          <IonThumbnail style={{ width: '100%', height: '200px' }}>
            <IonSkeletonText animated={true}></IonSkeletonText>
          </IonThumbnail>
        </IonCard>
      </IonCol>
      <IonCol size="8" className='ion-no-padding' style={{marginTop:-10}}>
        <IonCard className="card-loader">
          <IonThumbnail style={{ width: '100%', height: '150px' }}>
            <IonSkeletonText animated={true}></IonSkeletonText>
          </IonThumbnail>
        </IonCard>
      </IonCol>
      <IonCol size="4" className='ion-no-padding' style={{marginTop:-10}}>
        <IonCard className="card-loader">
          <IonThumbnail style={{ width: '100%', height: '150px' }}>
            <IonSkeletonText animated={true}></IonSkeletonText>
          </IonThumbnail>
        </IonCard>
      </IonCol>
      <IonCol size="8" className='ion-no-padding' style={{marginTop:-10}}>
        <IonCard className="card-loader">
          <IonThumbnail style={{ width: '100%', height: '50px' }}>
            <IonSkeletonText animated={true}></IonSkeletonText>
          </IonThumbnail>
        </IonCard>
      </IonCol>
      <IonCol size="4" className='ion-no-padding' style={{marginTop:-10}}>
        <IonCard className="card-loader">
          <IonThumbnail style={{ width: '100%', height: '50px' }}>
            <IonSkeletonText animated={true}></IonSkeletonText>
          </IonThumbnail>
        </IonCard>
      </IonCol>
    </IonRow>
  )
}

export default ProjectDetailsSkeletonLoader
