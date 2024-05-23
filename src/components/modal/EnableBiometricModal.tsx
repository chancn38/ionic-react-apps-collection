import { IonButton, IonCard, IonCol, IonIcon, IonLabel, IonModal, IonRow } from '@ionic/react';
import { checkmarkOutline } from 'ionicons/icons';
import fingerprint_settings from '../../assets/images/fingerprint_settings.png';

const EnableBiometricModal = (props) => {
  return (
    <IonModal id="remove_acc_modal" isOpen={props.enableBio} backdropDismiss={false} >
      <IonCard style={{boxShadow:"none",margin:0}}>
          <IonRow className="ion-padding" style={{padding:20}}>
              <IonCol size='12' className='ion-text-center'>
                <div style={{display:'flex',justifyContent:'center'}}>
                  <img alt="Silhouette of mountains" src={fingerprint_settings} width={200} style={{marginLeft:-20}}/>
                  <div style={{position:'absolute',width:60,height:60,borderRadius:'50%',backgroundColor:'#fff',padding:5,marginTop:120,marginLeft:130}}>
                    <div style={{display:'flex',justifyContent:'center',alignItems:'center',width:50,height:50,fontWeight:700,borderRadius:'50%',backgroundColor:'#2dd36f',color:'#fff'}}>
                      <IonIcon icon={checkmarkOutline} style={{fontSize:30}}/>
                    </div>
                  </div>
                </div>
              </IonCol>
              <IonCol size='12' className="ion-text-center" style={{marginTop:20}}><IonLabel style={{fontSize:22,fontWeight:"600"}}>Easier and faster login with biometrics</IonLabel></IonCol>
              <IonCol size='12' className="ion-text-center" style={{marginBottom:20}}><IonLabel style={{fontSize:16,fontWeight:"500"}}>Enable now for easy authentication.</IonLabel></IonCol>
              <IonCol size='6' style={{height:50,marginTop:10}} className="ion-no-padding"><IonButton className='logout-cancel-btn' expand='block' onClick={() => props.setEnableBio(false)}>Cancel</IonButton></IonCol>
              <IonCol size='6' style={{height:50,marginTop:10}} className="ion-no-padding"><IonButton className='confirm-btn' expand='block' onClick={() => [props.authenticateWithBiometric()]}>Scan</IonButton></IonCol>
          </IonRow>
      </IonCard>
    </IonModal>
  )
}

export default EnableBiometricModal
