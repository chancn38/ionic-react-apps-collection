import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
  IonToggle
} from '@ionic/react'

import { Plugins } from '@capacitor/core'
import {
  fingerPrintOutline,
  gridOutline,
  logOutOutline,
  moonOutline,
  notificationsOutline,
  phonePortraitOutline,
  qrCode,
  qrCodeOutline,
  scanOutline,
  settingsOutline
} from 'ionicons/icons'
import { useLocation } from 'react-router-dom'
import { useTheme } from '../../context/ThemeContext'
import './Menu.css'

interface AppPage {
  url: string
  iosIcon: string
  mdIcon: string
  title: string
}

const menuPages: AppPage[] = [
  {
    title: 'Dashboard',
    url: '/home/Dashboard',
    iosIcon: gridOutline,
    mdIcon: gridOutline
  },
  {
    title: 'Settings',
    url: '/settings/Settings',
    iosIcon: settingsOutline,
    mdIcon: settingsOutline
  }
]

const appPages: AppPage[] = [
  {
    title: 'QRCode Scanner',
    url: '/scanqr/QRCode Scanner',
    iosIcon: qrCodeOutline,
    mdIcon: qrCodeOutline
  },
  {
    title: 'QRCode Generator',
    url: '/generateqr/QRCode Generator',
    iosIcon: qrCode,
    mdIcon: qrCode
  },
  {
    title: 'Fingerprint',
    url: '/fingerprint/Fingerprint Reader',
    iosIcon: fingerPrintOutline,
    mdIcon: fingerPrintOutline
  },
  {
    title: 'Phone Settings',
    url: '/phonesettings/Phone Settings',
    iosIcon: phonePortraitOutline,
    mdIcon: phonePortraitOutline
  },
  {
    title: 'Face Detection',
    url: '/facedetect/Face Detection',
    iosIcon: qrCode,
    mdIcon: scanOutline
  },
  {
    title: 'Push Notification',
    url: '/pushnotification/Push Notification',
    iosIcon: notificationsOutline,
    mdIcon: notificationsOutline
  }
]

const labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders']

const Menu: React.FC = () => {
  const location = useLocation()
  const { theme, toggleTheme } = useTheme()

  const exitApp = () => {
    Plugins.App.exitApp();
  }
  
  return (
    <IonMenu contentId='main' type='push'>
      <IonContent>
        <IonList id='inbox-list'>
          <IonListHeader>Ionic React App</IonListHeader>
          <IonNote>Menu</IonNote>
          {menuPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem
                  className={
                    location.pathname === appPage.url ? 'selected' : ''
                  }
                  routerLink={appPage.url}
                  routerDirection='none'
                  lines='none'
                  detail={false}
                >
                  <IonIcon
                    aria-hidden='true'
                    slot='start'
                    ios={appPage.iosIcon}
                    md={appPage.mdIcon}
                  />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            )
          })}
        </IonList>

        <IonList id='inbox-list'>
          <IonNote>Ionic Apps</IonNote>
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem
                  className={
                    location.pathname === appPage.url ? 'selected' : ''
                  }
                  routerLink={appPage.url}
                  routerDirection='none'
                  lines='none'
                  detail={false}
                >
                  <IonIcon
                    aria-hidden='true'
                    slot='start'
                    ios={appPage.iosIcon}
                    md={appPage.mdIcon}
                  />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            )
          })}
        </IonList>

        <IonList inset={true}>
          <IonItem lines='none'>
            <IonToggle onClick={toggleTheme}>
              <IonIcon aria-hidden='true' slot='end' icon={moonOutline} />
              <IonLabel>Dark Mode</IonLabel>
            </IonToggle>
          </IonItem>
          <IonItem lines='none' onClick={exitApp}>
            <IonIcon aria-hidden='true' slot='end' icon={logOutOutline} />
            <IonLabel>Exit</IonLabel>
          </IonItem>
        </IonList>

      </IonContent>
    </IonMenu>
  )
}

export default Menu