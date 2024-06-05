import {
  IonApp,
  IonRouterOutlet,
  IonSplitPane,
  setupIonicReact
} from '@ionic/react'
import { IonReactRouter } from '@ionic/react-router'
import { Redirect, Route } from 'react-router-dom'
import Menu from './components/menu/Menu'

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css'

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css'
import '@ionic/react/css/structure.css'
import '@ionic/react/css/typography.css'

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/display.css'
import '@ionic/react/css/flex-utils.css'
import '@ionic/react/css/float-elements.css'
import '@ionic/react/css/padding.css'
import '@ionic/react/css/text-alignment.css'
import '@ionic/react/css/text-transformation.css'

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* import '@ionic/react/css/palettes/dark.always.css'; */
/* import '@ionic/react/css/palettes/dark.class.css'; */
import '@ionic/react/css/palettes/dark.system.css'

/* Theme variables */
import { StatusBar, Style } from '@capacitor/status-bar'
import { useEffect } from 'react'
import FaceDetect from './pages/face-detection/FaceDetect'
import Home from './pages/home/Home'
import PushNotification from './pages/push-notification/PushNotification'
import QRCodeGenerator from './pages/qrcode-generator/QRCodeGenerator'
import QrCodeScanner from './pages/qrcode-scanner/QRCodeScanner'
import Settings from './pages/settings/Settings'
import './theme/global.scss'
import './theme/variables.scss'
import Fingerprint from './pages/fingerprint/Fingerprint'
import PhoneSettings from './pages/phone-settings/PhoneSettings'
import About from './pages/about/About'
import OCR from './pages/ocr/OCR'

setupIonicReact()

const App: React.FC = () => {
  useEffect(() => {
    StatusBar.setBackgroundColor({ color: '#1e65a8' })
    StatusBar.setStyle({ style: Style.Dark })
  }, [])

  return (
    <IonApp>
      <IonReactRouter>
        <IonSplitPane contentId='main'>
          <Menu />
          <IonRouterOutlet id='main'>
            <Route path='/' exact={true}>
              <Redirect to='/home/Home' />
            </Route>

            {/* Menu */}
            <Route path='/home/:name' exact={true}>
              <Home />
            </Route>
            <Route path='/settings/:name' exact={true}>
              <Settings />
            </Route>
            <Route path='/about/:name' exact={true}>
              <About />
            </Route>

            {/* Apps */}
            <Route path='/scanqr/:name' exact={true}>
              <QrCodeScanner />
            </Route>
            <Route path='/generateqr/:name' exact={true}>
              <QRCodeGenerator />
            </Route>
            <Route path='/fingerprint/:name' exact={true}>
              <Fingerprint />
            </Route>
            <Route path='/phonesettings/:name' exact={true}>
              <PhoneSettings />
            </Route>
            <Route path='/ocr/:name' exact={true}>
              <OCR />
            </Route>
            <Route path='/facedetect/:name' exact={true}>
              <FaceDetect />
            </Route>
            <Route path='/facedetect/:name' exact={true}>
              <FaceDetect />
            </Route>
            <Route path='/pushnotification/:name' exact={true}>
              <PushNotification />
            </Route>
            
          </IonRouterOutlet>
        </IonSplitPane>
      </IonReactRouter>
    </IonApp>
  )
}

export default App
