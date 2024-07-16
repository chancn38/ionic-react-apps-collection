import {
  IonCard,
  IonCol, IonRow,
  IonSkeletonText,
  IonThumbnail
} from '@ionic/react'

const ProjectSkeleton = () => {
  return (
    <IonRow>
      {[...Array(5)].map((item,index)=>
        <IonCol className="ion-no-padding" size="12" key={index}>
          <IonCard mode="ios" className="home-card">
            <IonThumbnail style={{ width: '100%', height: '50px' }}>
                <IonSkeletonText animated={true}></IonSkeletonText>
            </IonThumbnail>
          </IonCard>
        </IonCol>
      )}
    </IonRow>
  )
}

export default ProjectSkeleton
