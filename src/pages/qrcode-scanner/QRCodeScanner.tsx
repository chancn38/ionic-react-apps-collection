import {
  BarcodeScannedEvent,
  BarcodeScanner
} from '@capacitor-mlkit/barcode-scanning'
import { Camera } from '@capacitor/camera'
import { Capacitor, Plugins } from '@capacitor/core'
import { StatusBar } from '@capacitor/status-bar'
import {
  IonButton,
  IonButtons,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonCol,
  IonContent,
  IonFab,
  IonFabButton,
  IonHeader,
  IonIcon,
  IonLabel,
  IonMenuButton,
  IonModal,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar
} from '@ionic/react'
import {
  AndroidSettings,
  IOSSettings,
  NativeSettings
} from 'capacitor-native-settings'
import {
  closeOutline,
  flashlight,
  flashlightOutline,
  qrCodeOutline
} from 'ionicons/icons'
import { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import qrcode from '../../assets/images/qrcode.png'
import './QRCodeScanner.css'

const QrCodeScanner: React.FC = () => {
  const { name } = useParams<{ name: string }>()
  const [scanResult, setScanResult] = useState<any>(null)
  const modalRef = useRef<HTMLIonModalElement>(null)
  const [isScannerActive, setIsScannerActive] = useState(false)
  const [isFlashlightOn, setIsFlashlightOn] = useState(false)

  const startScan = async () => {
    // Check camera permissions
    const cameraPermissions = await Camera.checkPermissions()

    if (cameraPermissions.camera === 'denied') {
      // Camera permission denied, show settings alert
      modalRef.current?.present()
      return
    } else if (cameraPermissions.camera === 'prompt') {
      // Camera permission set to prompt, request permission
      const permissionResult = await requestCameraPermission()
      if (permissionResult.camera !== 'granted') {
        modalRef.current?.present()
        return
      }
    }
    // Permission granted, start scanning
    await initiateScan()
  }

  const initiateScan = async () => {
    setIsScannerActive(true)
    // Add barcode scanner active class
    document.querySelector('body')?.classList.add('barcode-scanner-active')

    // Add the `barcodeScanned` listener
    const listener = await BarcodeScanner.addListener(
      'barcodeScanned',
      async (result: BarcodeScannedEvent) => {
        console.log(result.barcode.rawValue)
        setScanResult(result.barcode.rawValue || null)
        await listener.remove()
        stopScan()
      }
    )
    // Start the barcode scanner
    await BarcodeScanner.startScan()
  }

  const stopScan = async () => {
    setIsScannerActive(false)
    document.querySelector('body')?.classList.remove('barcode-scanner-active')
    await BarcodeScanner.removeAllListeners()
    await BarcodeScanner.stopScan()
  }

  const requestCameraPermission = async () => {
    const permissionResult = await Camera.requestPermissions()
    return permissionResult
  }

  const toggleFlashlight = async () => {
    if (isFlashlightOn) {
      await BarcodeScanner.disableTorch()
    } else {
      await BarcodeScanner.enableTorch()
    }
    setIsFlashlightOn(!isFlashlightOn)
  }

  const openAppSettings = async () => {
    try {
      await NativeSettings.open({
        optionAndroid: AndroidSettings.ApplicationDetails,
        optionIOS: IOSSettings.App
      })
      console.log('Opened settings')
    } catch (error) {
      console.error('Failed to open settings', error)
    }
  }

  //close camera scan
  useEffect(() => {
    if (Capacitor.isNative) {
      Plugins.App.addListener('backButton', e => {
        stopScan()
      })
    }
  }, [])

  if (isScannerActive) {
    StatusBar.setOverlaysWebView({ overlay: true })
  } else {
    StatusBar.setOverlaysWebView({ overlay: false })
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color='secondary'>
          <IonButtons slot='start'>
            <IonMenuButton />
          </IonButtons>
          <IonTitle>{name}</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen className='ion-text-center'>

        {isScannerActive && (
          <>
            <div className='barcode-scanner-active'>
              <div className='qr-scanner-square'>
                <div className='scanner-line'></div>
              </div>
              <IonLabel className='scanner-label'>
                Scan a QRCode/Barcode
              </IonLabel>
              <IonFab vertical='top' horizontal='start' slot='fixed'>
                <IonFabButton color='light' onClick={() => stopScan()}>
                  <IonIcon icon={closeOutline} />
                </IonFabButton>
              </IonFab>
              <IonFab vertical='top' horizontal='end' slot='fixed'>
                <IonFabButton color='light' onClick={() => toggleFlashlight()}>
                  <IonIcon
                    icon={isFlashlightOn ? flashlight : flashlightOutline}
                  />
                </IonFabButton>
              </IonFab>
            </div>
          </>
        )}

        <div style={{marginTop: 50}}>
          <div className='ion-text-center enable-bio-card'>
            <img
              alt='qr'
              src={qrcode}
              width={300}
            />
            <IonCardHeader>
              <IonCardTitle style={{ fontSize: 26, fontWeight: 550 }}>
              QR Code Scanner
              </IonCardTitle>
            </IonCardHeader>

            <IonCardContent>
              Click the <span color='danger'>button</span> in the bottom right to scan a code
            </IonCardContent>

          </div>
        </div>

        {scanResult && <p>Scan Result: {scanResult}</p>}

        <IonModal id='dialog-modal' ref={modalRef}>
          <div style={{ margin: 20 }}>
            <IonRow>
              <IonCol size='12' className='ion-text-center ion-padding'>
                <IonLabel style={{ fontSize: 20, fontWeight: 'bold' }}>
                  Camera Permission Required
                </IonLabel>
              </IonCol>
              <IonCol size='12' className='ion-padding'>
                <IonLabel>
                  This app needs access to your camera to scan QR codes. Please
                  go to settings and grant permission.
                </IonLabel>
              </IonCol>
              <IonCol size='12' className='ion-padding'>
                <IonLabel>Please click</IonLabel>
              </IonCol>
              <IonCol size='12' className='ion-padding'>
                <IonLabel color='primary'>
                  "Permissions - Camera - Allow only while using the app"
                </IonLabel>
              </IonCol>
              <IonCol size='6' className='ion-text-center'>
                <IonButton
                  className='btn'
                  color='primary'
                  onClick={() => [
                    openAppSettings(),
                    modalRef.current?.dismiss()
                  ]}
                >
                  Open Settings
                </IonButton>
              </IonCol>
              <IonCol size='6' className='ion-text-center'>
                <IonButton
                  className='btn'
                  color='medium'
                  onClick={() => modalRef.current?.dismiss()}
                >
                  Cancel
                </IonButton>
              </IonCol>
            </IonRow>
          </div>
        </IonModal>

        <IonFab slot='fixed' vertical='bottom' horizontal='end'>
          <IonFabButton onClick={() => startScan()}>
            <IonIcon icon={qrCodeOutline}></IonIcon>
          </IonFabButton>
        </IonFab>
      </IonContent>
    </IonPage>
  )
}

export default QrCodeScanner
