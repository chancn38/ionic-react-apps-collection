import {
  IonCol,
  IonRow,
  IonSkeletonText,
  IonThumbnail
} from '@ionic/react'
const NotificationSkelenLoader = () => {
  return (
    <>
      <IonRow className='ion-padding' style={{ marginBottom: -10 }}>
        <IonCol></IonCol>
        <IonCol className='ion-no-padding' size='1'>
          <IonThumbnail style={{ width: '100%', height: '30px', marginRight: 20 }} >
            <IonSkeletonText animated={true}></IonSkeletonText>
          </IonThumbnail>
        </IonCol>
        <IonCol className='ion-no-padding' size='1'>
          <IonThumbnail style={{ width: '100%', height: '30px', marginLeft: 5 }} >
            <IonSkeletonText animated={true}></IonSkeletonText>
          </IonThumbnail>
        </IonCol>
        <IonCol className='ion-no-padding' size='12'>
          <IonThumbnail style={{ width: '40%', height: '20px', marginRight: 20 }} >
            <IonSkeletonText animated={true}></IonSkeletonText>
          </IonThumbnail>
        </IonCol>
      </IonRow>
      
      {[...new Array(4)].map((arr, index) => (
        <IonRow key={index}>
          <IonCol className='ion-padding' size='2.5'>
            <IonSkeletonText animated={true} style={{color:"#a6a5a5",width: '60px',height: '60px',borderRadius:"50%",marginTop:15}}></IonSkeletonText>
          </IonCol>
          <IonCol style={{padding:10}} size='9.5'>
            <IonSkeletonText animated={true} style={{color:"#a6a5a5",width: '100%',height: '20px',borderRadius:100}}></IonSkeletonText>
            <IonSkeletonText animated={true} style={{color:"#3c3c3c",width: '100%',height: '10px',borderRadius:100}}></IonSkeletonText>
            <IonSkeletonText animated={true} style={{color:"#a6a5a5",width: '50%',height: '10px',borderRadius:100}}></IonSkeletonText>
            <IonSkeletonText animated={true} style={{color:"#a6a5a5",width: '90%',height: '30px',borderRadius:5}}></IonSkeletonText>
          </IonCol>
        </IonRow>
        ))}
      
    </>
  )
}

export default NotificationSkelenLoader
