import { IonCard, IonCol, IonIcon, IonImg, IonLabel, IonRow } from '@ionic/react'
import './Convert.scss'
import { arrowForwardOutline } from 'ionicons/icons'

const Convert = ({ progress }) => {
  return (
    <div className='loading-container'>
      <IonCard>
        <IonRow>
          <IonCol size='12' className='col-lbl'>
            <IonLabel >Converting</IonLabel>
          </IonCol>
          <IonCol size='12' className='col-icons'>
            <IonRow>
              <IonCol className='col-img'>
                <IonImg
                  src='./svg/image.svg'
                  alt='image'
                ></IonImg>
              </IonCol>
              <IonCol size='1' className='arrow-col'>
                <IonIcon icon={arrowForwardOutline} />
              </IonCol>
              <IonCol className='col-text'>
                <IonImg
                  src='./svg/text.svg'
                  alt='image'
                ></IonImg>
              </IonCol>
            </IonRow>
          </IonCol>
          <IonCol size='12'>
            <IonLabel>{progress}% Complete</IonLabel>
          </IonCol>
          <IonCol size='12'>
            <progress value={progress} max='100'>
              {progress}%
            </progress>
          </IonCol>
        </IonRow>
      </IonCard>
    </div>
  )
}

export default Convert
