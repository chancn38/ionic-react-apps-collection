import {
  IonCol,
  IonRow,
  IonSkeletonText
} from '@ionic/react'
const InvitationSkeletonLoader = () => {
  return (
    <>
      {[...new Array(5)].map((arr, index) => (
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

export default InvitationSkeletonLoader
