import {
  FaceMeshDetection,
  UseCase
} from '@capacitor-mlkit/face-mesh-detection'
import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonImg,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar
} from '@ionic/react'
import { useParams } from 'react-router-dom'
import './FaceDetect.css'

import { Camera, CameraResultType, CameraSource } from '@capacitor/camera'
import { useState } from 'react'

const FaceDetect: React.FC = () => {
  const { name } = useParams<{ name: string }>()
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [faceMeshes, setFaceMeshes] = useState<any[]>([]);

  const selectImage = async () => {
    try {
      const image = await Camera.getPhoto({
        resultType: CameraResultType.Uri,
        source: CameraSource.Photos, // or CameraSource.Camera for taking a new photo
        quality: 90,
      });

      if (image.webPath) {
        setSelectedImage(image.webPath);
        processImage(image.webPath);
      }
    } catch (error) {
      console.error('Image selection error:', error);
    }
  };

  const processImage = async (imagePath: string) => {
    try {
      console.log('Processing image at path:', imagePath);
      const { faceMeshs } = await FaceMeshDetection.processImage({
        path: imagePath,
        useCase: UseCase.FaceMesh,
      });
      console.log('Face Mesh Detection Result:', faceMeshs);
      setFaceMeshes(faceMeshs);
    } catch (error) {
      console.error('Face Mesh Detection error:', error);
    }
  };

  console.log('faceMeshes', faceMeshes)

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
      <IonButton expand="block" onClick={selectImage}>
          Select Image
        </IonButton>

        {selectedImage && (
          <div>
            <IonImg src={selectedImage} />
            {faceMeshes.length > 0 && (
              <div>
                <h2>Detected Face Meshes:</h2>
                <pre>{JSON.stringify(faceMeshes, null, 2)}</pre>
              </div>
            )}
          </div>
        )}
      </IonContent>
    </IonPage>
  )
}

export default FaceDetect
