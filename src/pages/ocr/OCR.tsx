import {
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonCol,
  IonContent,
  IonHeader,
  IonIcon,
  IonLabel,
  IonMenuButton,
  IonModal,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
  IonButton
} from '@ionic/react'
import { cameraOutline } from 'ionicons/icons'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import Tesseract from 'tesseract.js'
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera'
import fingerprint_settings from '../../assets/images/fingerprint_settings.png'
import Convert from '../../components/Loading/Convert'
import './OCR.scss'

const OCR = () => {
  const { name } = useParams<{ name: string }>()
  const [isLoading, setIsLoading] = useState<any>(false)
  const [text, setText] = useState<any>('')
  const [progress, setProgress] = useState<any>(0)
  const [image, setImage] = useState('')

  const handleSubmit = () => {
    setIsLoading(true)
    Tesseract.recognize(image, 'eng', {
      logger: m => {
        console.log(m)
        if (m.status === 'recognizing text') {
          setProgress((m.progress * 100).toString())
        }
      }
    })
      .catch(err => {
        console.error(err)
      })
      .then((result: any) => {
        console.log(result.data)
        console.log(result.data.text)
        setText(result.data.text)
        setIsLoading(false)
      })
  }

  const convertNewlinesToHtml = (text: string) => {
    return text.replace(/\n/g, '<br />')
  }

  const takePicture = async () => {
    const image = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100
    })

    if (image && image.webPath) {
      const response = await fetch(image.webPath)
      const blob = await response.blob()
      const blobUrl = URL.createObjectURL(blob)
      setImage(blobUrl)
    }
  }

  console.log(image)

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

      <IonContent fullscreen>
        <div style={{ marginTop: 50 }}>
          <div className='ion-text-center enable-bio-card'>
            <img
              alt='Silhouette of mountains'
              src={fingerprint_settings}
              width={300}
            />
            <IonCardHeader>
              <IonCardTitle style={{ fontSize: 26, fontWeight: 550 }}>
                Image To Text
              </IonCardTitle>
            </IonCardHeader>

            <IonCardContent>Convert image to text / OCR</IonCardContent>
            <IonCard className='container'>
              <IonRow className='title-row'>
                <IonCol>
                  <IonLabel style={{ fontSize: 30 }}>
                    Choose image file or take a picture
                  </IonLabel>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol>
                  <IonCard className='icon-card'>
                    <IonButton color='primary' onClick={takePicture}>
                      <IonIcon icon={cameraOutline} slot='start' />
                      Take Picture
                    </IonButton>
                    <IonRow>
                      <IonCol size='6'>
                        <input
                          id='file-upload'
                          type='file'
                          accept='.png,.jpg,.jpeg'
                          onChange={(e: any) =>
                            setImage(URL.createObjectURL(e.target.files[0]))
                          }
                          className='form-control mt-5 mb-2'
                        />
                      </IonCol>
                    </IonRow>
                  </IonCard>
                </IonCol>
              </IonRow>
              {image && (
                <IonRow>
                  <IonCard className='icon-card'>
                    <IonRow>
                      <IonCol size='12'>
                        <img
                          src={image}
                          alt='Preview'
                          className='preview-image'
                        />
                      </IonCol>
                    </IonRow>
                  </IonCard>
                </IonRow>
              )}

              {image && (
                <IonRow>
                  <IonCol>
                    <IonCard
                      className='icon-card ion-padding'
                      color='secondary'
                      button
                      onClick={handleSubmit}
                    >
                      <IonRow>
                        <IonCol>
                          <IonLabel>Convert</IonLabel>
                        </IonCol>
                      </IonRow>
                    </IonCard>
                  </IonCol>
                </IonRow>
              )}
            </IonCard>

            {isLoading && (
              <IonModal isOpen={isLoading}>
                <Convert progress={progress} />
              </IonModal>
            )}

            {text && (
              <>
                <IonCard className='ion-padding result-card'>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: convertNewlinesToHtml(text)
                    }}
                  />
                </IonCard>
              </>
            )}
          </div>
        </div>
      </IonContent>
    </IonPage>
  )
}

export default OCR
