import {
  IonCard,
  IonCardContent,
  IonCol,
  IonRow,
  IonSkeletonText,
  IonThumbnail
} from '@ionic/react'
const SearchSkeletonLoader = () => {
  return (
    <>
      <IonRow>
      {[...new Array(8)].map((arr, index) => (
        <IonCol className='ion-no-padding' size='12' key={index}>
          <IonCard mode='ios' className='home-card' style={{boxShadow:"none"}}>
            <IonThumbnail style={{ width: '100%', height: '70px' }}>
              <IonSkeletonText animated={true}></IonSkeletonText>
            </IonThumbnail>
          </IonCard>
        </IonCol>
        ))}
      </IonRow>
    </>
  )
}

export default SearchSkeletonLoader
