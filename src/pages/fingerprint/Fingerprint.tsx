import {
  IonButtons,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToast,
  IonToggle,
  IonToolbar
} from '@ionic/react'
import { AvailableResult, NativeBiometric } from 'capacitor-native-biometric'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import fingerprint_settings from '../../assets/images/fingerprint_settings.png'
import DisableBiometricModal from '../../components/modal/DisableBiometricModal'
import EnableBiometricModal from '../../components/modal/EnableBiometricModal'
import './Fingerprint.css'

const Fingerprint = () => {
  const { name } = useParams<{ name: string }>()
  //for setting the biometric status value
  const [toggleState, setToggleState] = useState<any>(false)

  //for chaecking bimetric on device
  const [biometricAvailability, setBiometricAvailability] = useState<any>(null)
  const [biometricNoEnrolled, setBiometricNoEnrolled] = useState<any>(false)
  const [biometricCancel, setBiometricCancel] = useState<any>(false)
  const [isTooManyAttempt, setisTooManyAttempt] = useState<any>(false)
  const [isAuthenticationFailed, setIsAuthenticationFailed] = useState(false)

  //for bimetric alert modal
  const [disEnableBio, setIsDisableBio] = useState(false)
  const [enableBio, setEnableBio] = useState(false)

  const handleToggle = () => {
    if (toggleState == true) {
      setIsDisableBio(true)
    } else {
      setEnableBio(true)
    }
  }

  {
    /**Check Biometric Authentication Either Fingerprint or Face recognition*/
  }
  useEffect(() => {
    checkBiometricAvailability()
  }, [])

  const checkBiometricAvailability = async () => {
    try {
      const result: AvailableResult = await NativeBiometric.isAvailable()
      setBiometricAvailability(result)
      //if there is no biometric enrollment on the device
      if (result.errorCode == 3) {
        setBiometricNoEnrolled(true)
      }
    } catch (error: any) {
      console.error('Error checking biometric availability:', error)
    }
  }
  const authenticateWithBiometric = async () => {
    try {
      await NativeBiometric.verifyIdentity({
        reason: 'For easy log in',
        title: 'Verify to Enable',
        subtitle: 'Use biometrics for easy log in',
        description: 'Please scan your fingerprint.'
      })
      setToggleState(true)
      setEnableBio(false)
    } catch (error: any) {
      console.error('Error authenticating with biometrics:', error.code)

      if (error.code == 10) {
        //Authentication failed.
        setIsAuthenticationFailed(true)
      } else if (error.code == 4) {
        //Too many attempts
        setisTooManyAttempt(true)
      } else if (error.code == 16) {
        //biometric canceled
        setBiometricCancel(true)
        setEnableBio(false)
      }
    }
  }

  return (
    <IonPage>
      <IonToast cssClass={'biometric-cancel-toast'} animated isOpen={biometricCancel} message={'Authentication canceled'} duration={2000} onDidDismiss={() => setBiometricCancel(false)}/>
      <IonToast cssClass={'biometric-cancel-toast'} animated isOpen={isAuthenticationFailed} message={'Authentication failed'} duration={2000} onDidDismiss={() => setIsAuthenticationFailed(false)}/>
      <IonToast cssClass={'biometric-cancel-toast'} animated isOpen={isTooManyAttempt} message={'Please try again later.'} duration={2000} onDidDismiss={() => setisTooManyAttempt(false)}/>
      <IonHeader>
        <IonToolbar color='secondary'>
          <IonButtons slot='start'>
            <IonMenuButton />
          </IonButtons>
          <IonTitle>{name}</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen className='ion-text-center'>
        <div style={{marginTop: 50}}>
          <div className='ion-text-center enable-bio-card'>
            <img
              alt='Silhouette of mountains'
              src={fingerprint_settings}
              width={300}
            />
            <IonCardHeader>
              <IonCardTitle style={{ fontSize: 26, fontWeight: 550 }}>
                Fingerprint<br></br> Authentication
              </IonCardTitle>
            </IonCardHeader>

            <IonCardContent>
              Keep your account secure by enabling biometrics. You can use
              Fingerprint or Face ID.
            </IonCardContent>

            {biometricAvailability ? (
              <>
                {biometricNoEnrolled == true ? (
                  <>
                    <IonItem lines='none' style={{ margin: 10 }}>
                      <IonToggle checked={toggleState} mode='ios' disabled onIonChange={handleToggle} enableOnOffLabels>Enable Biometrics</IonToggle>
                    </IonItem>
                    <div style={{ color: '#acafb2', paddingTop: 20 }}>
                      No Biometric enrolled.
                    </div>
                  </>
                ) : (
                  <IonItem lines='none' style={{ margin: 10 }}>
                    <IonToggle checked={toggleState} mode='ios' onIonChange={handleToggle} enableOnOffLabels>Enable Biometrics</IonToggle>
                  </IonItem>
                )}
              </>
            ) : (
              <>
                <IonItem lines='none' style={{ margin: 10 }}>
                  <IonToggle checked={toggleState} mode='ios' disabled onIonChange={handleToggle} enableOnOffLabels>Enable Biometrics</IonToggle>
                </IonItem>
                <div style={{ color: '#acafb2', paddingTop: 20 }}>
                  No Biometric detected.
                </div>
              </>
            )}
          </div>
        </div>
      </IonContent>
      <DisableBiometricModal
        disEnableBio={disEnableBio}
        setIsDisableBio={setIsDisableBio}
        setToggleState={setToggleState}
      />
      <EnableBiometricModal
        enableBio={enableBio}
        setEnableBio={setEnableBio}
        authenticateWithBiometric={authenticateWithBiometric}
      />
    </IonPage>
  )
}

export default Fingerprint
