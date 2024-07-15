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
  chatbubbleOutline,
  fingerPrintOutline,
  gridOutline,
  informationCircleOutline,
  informationOutline,
  logOutOutline,
  moonOutline,
  notificationsOutline,
  phonePortraitOutline,
  qrCode,
  qrCodeOutline,
  scanOutline,
  settingsOutline
} from 'ionicons/icons'
import { useHistory, useLocation } from 'react-router-dom'
import { useTheme } from '../../context/ThemeContext'
import './Menu.css'
import Pusher from 'pusher-js'
import { useEffect, useState } from 'react'
import { useAuth } from '../../context/AuthContext'

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
  },
  {
    title: 'About',
    url: '/about/About',
    iosIcon: informationCircleOutline,
    mdIcon: informationCircleOutline
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
    title: 'OCR',
    url: '/ocr/OCR',
    iosIcon: scanOutline,
    mdIcon: scanOutline
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
  },
  {
    title: 'Pusher',
    url: '/pusher/Pusher',
    iosIcon: chatbubbleOutline,
    mdIcon: chatbubbleOutline
  }
]

const labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders']

const Menu: React.FC = () => {
  const { logout } = useAuth();
  const history = useHistory();
  const location = useLocation()
  const { theme, toggleTheme } = useTheme()

  const exitApp = () => {
    Plugins.App.exitApp();
  }
  
  const Logout = () => {
    logout();
    history.push('/login');
  }

  const [messages, setMessages] = useState<any>([]);

  useEffect(() => {
    const pusher = new Pusher('2681569319e6de90b233', {
      cluster: 'ap2',
    });

    const channel = pusher.subscribe('chat');

    channel.bind('message', (data) => {
      setMessages((prevMessages) => [...prevMessages, data.message]);
    });

    // Cleanup on component unmount
    return () => {
      channel.unbind_all();
      pusher.unsubscribe('chat');
    };
  }, []);
  
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
          <IonItem lines='none' onClick={Logout}>
            <IonIcon aria-hidden='true' slot='end' icon={logOutOutline} />
            <IonLabel>Logout</IonLabel>
          </IonItem>
        </IonList>

      </IonContent>
    </IonMenu>
  )
}

export default Menu
