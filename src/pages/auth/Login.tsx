import { App } from '@capacitor/app'
import { StatusBar, Style } from '@capacitor/status-bar'
import { IonCol, IonContent, IonGrid, IonPage, IonRow, isPlatform, useIonRouter } from '@ionic/react'
import { Suspense, lazy, useEffect } from 'react'
import './Login.scss'

// // Lazy load the LoginForm component
const LogoTitle = lazy(() => import('../../components/LogoTitle'));
const LoginForm = lazy(() => import('../../components/forms/LoginForm'));

const Login = () => {
  const ionRouter = useIonRouter()

  useEffect(() => {
    document.addEventListener('ionBackButton', (e: any) => {
      e.preventDefault()
      e.detail.register(-1, () => {
        if (!ionRouter.canGoBack()) {
          const confirmExit = window.confirm('Do you want to close the app?')
          if (confirmExit) {
            App.exitApp()
          }
        }
      })
    })
  }, [ionRouter])

  useEffect(() => {
    if (!isPlatform('desktop')) {
      StatusBar.setBackgroundColor({ color: '#f4f5f8' })
      StatusBar.setStyle({ style: Style.Light })
    }
  }, [])

  return (
    <IonPage className='loginPage'>
      <IonContent fullscreen className='ion-padding' color={'light'}>
        <IonGrid className='ion-no-padding'>
          <IonRow className='ion-padding-bottom'>
            <IonCol className='ion-no-padding'>
              <Suspense fallback={<div>Loading logo...</div>}>
                <LogoTitle />
              </Suspense>
            </IonCol>
          </IonRow>
          <IonRow className='ion-padding-top'>
            <IonCol className='ion-no-padding'>
              <Suspense fallback={<div>Loading...</div>}>
                <LoginForm />
              </Suspense>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
      
    </IonPage>
  )
}

export default Login