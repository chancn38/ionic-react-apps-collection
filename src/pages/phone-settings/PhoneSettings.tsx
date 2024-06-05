import {
  IonButtons,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar
} from '@ionic/react'
import {
  AndroidSettings,
  IOSSettings,
  NativeSettings
} from 'capacitor-native-settings'
import { accessibilityOutline, airplaneOutline, alarmOutline, appsOutline, batteryChargingOutline, bluetoothOutline, bookOutline, calendarOutline, cardOutline, codeSlashOutline, cogOutline, desktopOutline, fingerPrintOutline, globeOutline, informationOutline, keypadOutline, laptopOutline, locationOutline, logoClosedCaptioning, logoWhatsapp, megaphoneOutline, micOutline, notificationsOutline, personOutline, printOutline, radioOutline, readerOutline, saveOutline, searchOutline, shieldHalfOutline, statsChartOutline, syncOutline, timeOutline, walletOutline, wifiOutline, wifiSharp } from 'ionicons/icons'
import { useParams } from 'react-router-dom'
import fingerprint_settings from '../../assets/images/fingerprint_settings.png'
import './PhoneSettings.css'

const PhoneSettings = () => {
  const { name } = useParams<{ name: string }>()
  const settings = [
    { title: 'Accessibility', icon: accessibilityOutline },
    { title: 'Account', icon: personOutline },
    { title: 'AirplaneMode', icon: airplaneOutline },
    { title: 'Apn', icon: radioOutline },
    { title: 'ApplicationDetails', icon: readerOutline },
    { title: 'ApplicationDevelopment', icon: codeSlashOutline },
    { title: 'Application', icon: logoWhatsapp },
    { title: 'AppNotification', icon: notificationsOutline },
    { title: 'BatteryOptimization', icon: batteryChargingOutline },
    { title: 'Bluetooth', icon: bluetoothOutline },
    { title: 'Captioning', icon: logoClosedCaptioning },
    { title: 'Cast', icon: laptopOutline },
    { title: 'DataRoaming', icon: globeOutline },
    { title: 'Date', icon: calendarOutline },
    { title: 'Display', icon: desktopOutline },
    { title: 'Dream', icon: alarmOutline },
    { title: 'Keyboard', icon: keypadOutline },
    { title: 'KeyboardSubType', icon: keypadOutline },
    { title: 'Locale', icon: timeOutline },
    { title: 'Location', icon: locationOutline },
    { title: 'ManageApplications', icon: appsOutline },
    { title: 'ManageAllApplications', icon: appsOutline },
    { title: 'MemoryCard', icon: saveOutline },
    { title: 'Network', icon: wifiSharp },
    { title: 'NfcSharing', icon: cardOutline },
    { title: 'NfcPayment', icon: walletOutline },
    { title: 'NfcSettings', icon: cardOutline },
    { title: 'Print', icon: printOutline },
    { title: 'Privacy', icon: shieldHalfOutline },
    { title: 'Search', icon: searchOutline },
    { title: 'Security', icon: fingerPrintOutline },
    { title: 'Settings', icon: cogOutline },
    { title: 'ShowRegulatoryInfo', icon: informationOutline },
    { title: 'Sound', icon: micOutline },
    { title: 'Sync', icon: syncOutline},
    { title: 'Usage', icon: statsChartOutline },
    { title: 'UserDictionary', icon: bookOutline },
    { title: 'VoiceInput', icon: megaphoneOutline },
    { title: 'Wifi', icon: wifiOutline },
    { title: 'WifiIp', icon: wifiOutline },
    { title: 'Wireless', icon: wifiOutline }
];

  const openSettings = async type => {
    switch (type) {
      case 'Accessibility':
        return await NativeSettings.open({
          optionAndroid: AndroidSettings.Accessibility,
          optionIOS: IOSSettings.App
        });
        case 'Account':
        return await NativeSettings.open({
          optionAndroid: AndroidSettings.Account,
          optionIOS: IOSSettings.App
        });
        case 'AirplaneMode':
        return await NativeSettings.open({
          optionAndroid: AndroidSettings.AirplaneMode,
          optionIOS: IOSSettings.App
        });
        case 'Apn':
        return await NativeSettings.open({
          optionAndroid: AndroidSettings.Apn,
          optionIOS: IOSSettings.App
        });
        case 'ApplicationDetails':
        return await NativeSettings.open({
          optionAndroid: AndroidSettings.ApplicationDetails,
          optionIOS: IOSSettings.App
        });
        case 'ApplicationDevelopment':
        return await NativeSettings.open({
          optionAndroid: AndroidSettings.ApplicationDevelopment,
          optionIOS: IOSSettings.App
        });
        case 'Application':
        return await NativeSettings.open({
          optionAndroid: AndroidSettings.Application,
          optionIOS: IOSSettings.App
        });
        case 'AppNotification':
        return await NativeSettings.open({
          optionAndroid: AndroidSettings.AppNotification,
          optionIOS: IOSSettings.App
        });
        case 'BatteryOptimization':
        return await NativeSettings.open({
          optionAndroid: AndroidSettings.BatteryOptimization,
          optionIOS: IOSSettings.App
        });
        case 'Bluetooth':
        return await NativeSettings.open({
          optionAndroid: AndroidSettings.Bluetooth,
          optionIOS: IOSSettings.App
        });
        case 'Captioning':
        return await NativeSettings.open({
          optionAndroid: AndroidSettings.Captioning,
          optionIOS: IOSSettings.App
        });
        case 'Cast':
        return await NativeSettings.open({
          optionAndroid: AndroidSettings.Cast,
          optionIOS: IOSSettings.App
        });
        case 'DataRoaming':
        return await NativeSettings.open({
          optionAndroid: AndroidSettings.DataRoaming,
          optionIOS: IOSSettings.App
        });
        case 'Date':
        return await NativeSettings.open({
          optionAndroid: AndroidSettings.Date,
          optionIOS: IOSSettings.App
        });
        case 'Display':
        return await NativeSettings.open({
          optionAndroid: AndroidSettings.Display,
          optionIOS: IOSSettings.App
        });
        case 'Dream':
        return await NativeSettings.open({
          optionAndroid: AndroidSettings.Dream,
          optionIOS: IOSSettings.App
        });
        case 'Home':
        return await NativeSettings.open({
          optionAndroid: AndroidSettings.Home,
          optionIOS: IOSSettings.App
        });
        case 'Keyboard':
        return await NativeSettings.open({
          optionAndroid: AndroidSettings.Keyboard,
          optionIOS: IOSSettings.App
        });
        case 'KeyboardSubType':
        return await NativeSettings.open({
          optionAndroid: AndroidSettings.KeyboardSubType,
          optionIOS: IOSSettings.App
        });
        case 'Locale':
        return await NativeSettings.open({
          optionAndroid: AndroidSettings.Locale,
          optionIOS: IOSSettings.App
        });
        case 'Location':
        return await NativeSettings.open({
          optionAndroid: AndroidSettings.Location,
          optionIOS: IOSSettings.App
        });
        case 'ManageApplications':
        return await NativeSettings.open({
          optionAndroid: AndroidSettings.ManageApplications,
          optionIOS: IOSSettings.App
        });
        case 'ManageAllApplications':
        return await NativeSettings.open({
          optionAndroid: AndroidSettings.ManageAllApplications,
          optionIOS: IOSSettings.App
        });
        case 'MemoryCard':
        return await NativeSettings.open({
          optionAndroid: AndroidSettings.MemoryCard,
          optionIOS: IOSSettings.App
        });
        case 'Network':
        return await NativeSettings.open({
          optionAndroid: AndroidSettings.Network,
          optionIOS: IOSSettings.App
        });
        case 'NfcSharing':
        return await NativeSettings.open({
          optionAndroid: AndroidSettings.NfcSharing,
          optionIOS: IOSSettings.App
        });
        case 'NfcPayment':
        return await NativeSettings.open({
          optionAndroid: AndroidSettings.NfcPayment,
          optionIOS: IOSSettings.App
        });
        case 'NfcSettings':
        return await NativeSettings.open({
          optionAndroid: AndroidSettings.NfcSettings,
          optionIOS: IOSSettings.App
        });
        case 'Print':
        return await NativeSettings.open({
          optionAndroid: AndroidSettings.Print,
          optionIOS: IOSSettings.App
        });
        case 'Privacy':
        return await NativeSettings.open({
          optionAndroid: AndroidSettings.Privacy,
          optionIOS: IOSSettings.App
        });
        case 'QuickLaunch':
        return await NativeSettings.open({
          optionAndroid: AndroidSettings.QuickLaunch,
          optionIOS: IOSSettings.App
        });
        case 'Search':
        return await NativeSettings.open({
          optionAndroid: AndroidSettings.Search,
          optionIOS: IOSSettings.App
        });
        case 'Security':
        return await NativeSettings.open({
          optionAndroid: AndroidSettings.Security,
          optionIOS: IOSSettings.App
        });
        case 'Settings':
        return await NativeSettings.open({
          optionAndroid: AndroidSettings.Settings,
          optionIOS: IOSSettings.App
        });
        case 'ShowRegulatoryInfo':
        return await NativeSettings.open({
          optionAndroid: AndroidSettings.ShowRegulatoryInfo,
          optionIOS: IOSSettings.App
        });
        case 'Sound':
        return await NativeSettings.open({
          optionAndroid: AndroidSettings.Sound,
          optionIOS: IOSSettings.App
        });
        case 'Storage':
        return await NativeSettings.open({
          optionAndroid: AndroidSettings.Storage,
          optionIOS: IOSSettings.App
        });
        case 'Sync':
        return await NativeSettings.open({
          optionAndroid: AndroidSettings.Sync,
          optionIOS: IOSSettings.App
        });
        case 'Usage':
        return await NativeSettings.open({
          optionAndroid: AndroidSettings.Usage,
          optionIOS: IOSSettings.App
        });
        case 'UserDictionary':
        return await NativeSettings.open({
          optionAndroid: AndroidSettings.UserDictionary,
          optionIOS: IOSSettings.App
        });
        case 'VoiceInput':
        return await NativeSettings.open({
          optionAndroid: AndroidSettings.VoiceInput,
          optionIOS: IOSSettings.App
        });
        case 'Wifi':
        return await NativeSettings.open({
          optionAndroid: AndroidSettings.Wifi,
          optionIOS: IOSSettings.App
        });
        case 'WifiIp':
        return await NativeSettings.open({
          optionAndroid: AndroidSettings.WifiIp,
          optionIOS: IOSSettings.App
        });
        case 'Wireless':
        return await NativeSettings.open({
          optionAndroid: AndroidSettings.Wireless,
          optionIOS: IOSSettings.App
        });
      default:
        return await NativeSettings.open({
          optionAndroid: AndroidSettings.Accessibility,
          optionIOS: IOSSettings.App
        })
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
                Android/IOS<br></br> Settings
              </IonCardTitle>
            </IonCardHeader>

            <IonCardContent>
              Open Android and IOS settings directly on app
            </IonCardContent>

            <IonList inset={true}>
              {settings.map((item, index) => (
                <IonItem
                  key={index}
                  lines='none'
                  button
                  detail={true}
                  style={{ borderRadius: 10 }}
                  onClick={() => openSettings(item.title)}
                >
                <IonIcon icon={item.icon} slot="start"></IonIcon>
                  <IonLabel>
                    <h3>{item.title}</h3>
                  </IonLabel>
                </IonItem>
              ))}
            </IonList>
          </div>
        </div>
      </IonContent>
    </IonPage>
  )
}

export default PhoneSettings
