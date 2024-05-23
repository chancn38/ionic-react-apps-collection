import {
  IonButtons,
  IonContent,
  IonFab,
  IonFabButton,
  IonHeader,
  IonIcon,
  IonImg,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar
} from '@ionic/react'
import { scanOutline } from 'ionicons/icons'
import { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import './FaceDetect.css'
import * as faceapi from 'face-api.js'

const FaceDetect: React.FC = () => {
  const { name } = useParams<{ name: string }>()

  const videoRef = useRef<HTMLVideoElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [faceDetected, setFaceDetected] = useState(false)

  useEffect(() => {
    const startVideo = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: {} })
        if (videoRef.current) {
          videoRef.current.srcObject = stream
        }
      } catch (err) {
        console.error(err)
      }
    }

    const loadModels = async () => {
      await Promise.all([
        faceapi.nets.tinyFaceDetector.loadFromUri('/models'),
        faceapi.nets.faceLandmark68Net.loadFromUri('/models'),
        faceapi.nets.faceRecognitionNet.loadFromUri('/models'),
        faceapi.nets.faceExpressionNet.loadFromUri('/models')
      ])
      faceDetection()
    }

    startVideo()
    loadModels()
  }, [])

  const faceDetection = () => {
    setInterval(async () => {
      if (videoRef.current && canvasRef.current) {
        const detections = await faceapi
          .detectAllFaces(videoRef.current, new faceapi.TinyFaceDetectorOptions())
          .withFaceLandmarks()
          .withFaceExpressions()

        setFaceDetected(detections.length > 0)

        const canvas = canvasRef.current
        const displaySize = { width: videoRef.current.width, height: videoRef.current.height }
        faceapi.matchDimensions(canvas, displaySize)

        const resizedDetections = faceapi.resizeResults(detections, displaySize)
        canvas.getContext('2d')?.clearRect(0, 0, canvas.width, canvas.height)

        faceapi.draw.drawDetections(canvas, resizedDetections)
        faceapi.draw.drawFaceLandmarks(canvas, resizedDetections)
        faceapi.draw.drawFaceExpressions(canvas, resizedDetections)
      }
    }, 1000)
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
        <div className="app">
          <h1>AI FACE DETECTION</h1>
          <div className="app__video">
            <video ref={videoRef} autoPlay muted width="720" height="560" />
            <canvas ref={canvasRef} width="720" height="560" className="app__canvas" />
          </div>
          <div className="app__status">
            <h2>Face Detected: {faceDetected ? "true" : "false"}</h2>
          </div>
        </div>
      </IonContent>
    </IonPage>
  )
}

export default FaceDetect
