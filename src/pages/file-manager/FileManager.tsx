import { Directory, Encoding, Filesystem } from '@capacitor/filesystem'
import {
    IonButton,
    IonButtons,
    IonCardHeader,
    IonCardTitle,
    IonContent,
    IonHeader,
    IonInput,
    IonItem,
    IonList,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar
} from '@ionic/react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import fingerprint_settings from '../../assets/images/fingerprint_settings.png'

import './FileManager.scss'

const FileManager = () => {
  const { name } = useParams<{ name: string }>()
  const [files, setFiles] = useState<string[] | any>([])
  const [fileName, setFileName] = useState<string>('')

  useEffect(() => {
    listFiles()
  }, [])

  const listFiles = async () => {
    try {
      const result = await Filesystem.readdir({
        path: '',
        directory: Directory.Documents
      })
      setFiles(result.files)
    } catch (e) {
      console.error('Unable to read dir', e)
    }
  }

  const createFile = async () => {
    try {
      await Filesystem.writeFile({
        path: fileName,
        data: '',
        directory: Directory.Documents,
        encoding: Encoding.UTF8
      })
      listFiles()
      setFileName('')
    } catch (e) {
      console.error('Unable to write file', e)
    }
  }

  const deleteFile = async (fileName: string) => {
    try {
      await Filesystem.deleteFile({
        path: fileName,
        directory: Directory.Documents
      })
      listFiles()
    } catch (e) {
      console.error('Unable to delete file', e)
    }
  }
console.log(files)
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
                File Manager
              </IonCardTitle>
            </IonCardHeader>

            {/* <IonList>
              {files.map((file, index) => (
                <FileItem key={index} fileName={file} onDelete={deleteFile} />
              ))}
            </IonList> */}
            <IonItem>
              <IonInput
                value={fileName}
                placeholder='Enter file name'
                onIonChange={e => setFileName(e.detail.value!)}
              ></IonInput>
              <IonButton onClick={createFile}>Create File</IonButton>
            </IonItem>
          </div>
        </div>
      </IonContent>
    </IonPage>
  )
}

export default FileManager
