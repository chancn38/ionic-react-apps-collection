import { Directory, Filesystem } from '@capacitor/filesystem'
import {
  IonButton,
  IonButtons,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonInput,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar
} from '@ionic/react'
import QRCode from 'qrcode.react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import qrcode from '../../assets/images/qrcode.png'

const QRCodeGenerator: React.FC = () => {
  const { name } = useParams<{ name: string }>()
  const [text, setText] = useState('')
  const [loading, setLoading] = useState(false)
  const [isDownloaded, setIsDownloaded] = useState(false)

  useEffect(() => {
    const checkDirectory = async () => {
      try {
        // Check if the directory exists
        await Filesystem.readdir({
          path: 'QRGenerated',
          directory: Directory.Documents
        })
      } catch (error) {
        // If the directory does not exist, create it
        try {
          // Create the directory
          await Filesystem.mkdir({
            path: 'QRGenerated',
            directory: Directory.Documents,
            recursive: true
          })
        } catch (createError) {
          // Handle error if directory creation fails
          console.error('Unable to create directory:', createError)
        }
      }
    }
    // Call the function to check and create directory
    checkDirectory()
  }, [])

  // const downloadCardAsImage = () => {
  //   const cardElement = document.getElementById('qrcode');
    
  //   html2canvas(cardElement).then(canvas => {
  //     const link = document.createElement('a');
  //     link.href = canvas.toDataURL('image/png');
  //     link.download = 'business-card.png';
  //     link.click();
  //   });
  // };

  const handleDownload = async () => {
    const canvas = document.getElementById('qrcode') as HTMLCanvasElement
    const imageDataUrl = canvas.toDataURL('image/png')
    const fileName = `${text}.png`
    const directoryPath = 'QRGenerated'

    try {
      setLoading(true) // Show loading indicator
      const filePath = `${directoryPath}/${fileName}`
      await Filesystem.writeFile({
        path: filePath,
        data: imageDataUrl.substr(imageDataUrl.indexOf(',') + 1),
        directory: Directory.Documents
        //encoding: 'base64',
      })
      setIsDownloaded(true)
      console.log('QR Code downloaded successfully:', filePath)
    } catch (error) {
      alert('Error downloading QR Code: ' + error)
    } finally {
      setLoading(false) // Hide loading indicator
    }
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
        <div style={{ marginTop: 50 }}>
          <div className='ion-text-center enable-bio-card'>
            {text ? (
              <div className='ion-padding'>
                <QRCode id='qrcode' value={text} size={250} />
              </div>
            ) : (
              <img alt='qr' src={qrcode} width={300} />
            )}
            <IonCardHeader>
              <IonCardTitle style={{ fontSize: 26, fontWeight: 550 }}>
                QR Code Generator
              </IonCardTitle>
            </IonCardHeader>

            <IonCardContent> Enter text to generate QR Code </IonCardContent>
          </div>
        </div>

        <div className='ion-padding'>
          <IonInput
            label='Generate QrCode'
            labelPlacement='floating'
            fill='outline'
            placeholder='Enter text'
            value={text}
            onIonInput={e =>
              setText((e.target as unknown as HTMLInputElement).value)
            }
          ></IonInput>
        </div>
        {text && (
          <IonButton onClick={handleDownload}>Download QR Code</IonButton>
        )}
      </IonContent>
    </IonPage>
  )
}

export default QRCodeGenerator
