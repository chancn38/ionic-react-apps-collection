import { IonAvatar, IonCard, IonCol, IonContent, IonIcon, IonLabel, IonModal, IonRow } from '@ionic/react'
import { formatDistanceToNow } from 'date-fns'
import { checkmark, closeOutline, trashBinOutline } from 'ionicons/icons'
import { useRef, useState } from 'react'
import user_img from '../../../assets/images/user-3.jpg'
import { appContext } from '../../../context/AppContext'

const InvitationCard = (props) => {
    const { currentMode, domain } = appContext();  
    const [inviteData, setInviteData] = useState<any>([]);
    const modal = useRef<HTMLIonModalElement>(null);
    const [isImageAvailable, setIsImageAvailable] = useState(true);

    const createdDate = new Date(props.data.updated_at);

    function handleImageError() {
        setIsImageAvailable(false);
    }

  return (
    <>
    <IonRow>
      <IonCol className="ion-no-padding">
        <IonCard className="container-card" style={{backgroundColor: currentMode == "dark" ? "#313841" : "#f4f5f8", marginBottom:props.totalInvitation-1 === props.index ? 70 :''}}>
            <IonRow>
              <IonCol size="12" className="ion-no-padding" id={`invite${props.data.id}`}>
                    <IonCard style={{backgroundColor: props.data.status == "new" && currentMode == "dark" ? "#242e3a" : props.data.status == "new" && currentMode == "light" ? "#e7f3ff" : currentMode == "dark" ? "#313841" : "#f4f5f8"}} className="invitation-card" button   onClick={()=>setInviteData([props.data])}>
                        <IonRow>
                            <IonCol size='2'>
                                {
                                    props.data.sender == null ? <IonCard className="notif-image"><img src={"https://ionicframework.com/docs/img/demos/avatar.svg"} alt='' className="image-with-alt" onError={handleImageError}/></IonCard>
                                    :props.data.sender.avatar == null ? <IonAvatar  style={{display:'flex',justifyContent:'center',alignItems:'center',backgroundColor:props.data.sender.dashboard_settings.theme_color}}><div className="ion-text-center" style={{color:"#fff",fontSize:24}}>{props.data.sender.initials}</div></IonAvatar>
                                    : <IonCard className="notif-image"><img src={isImageAvailable ? `${domain[0]}`+props.data.sender.avatar : user_img } alt='' className="image-with-alt" onError={handleImageError}/></IonCard>
                                }
                                <IonCard className="invitation-icon" style={{backgroundColor:props.data.status == "new" ? "#d5eef7":props.data.status == "accepted" ? "#d2e6cd":"#fbd2ca",color:props.data.status == "new" ? "#58c1e0":props.data.status == "accepted" ? "#7fc355":"#ef4c2a"}}>
                                    <i className="mdi mdi-email-outline"></i>
                                </IonCard>
                            </IonCol> 
                            <IonCol size='10' className='invitation-info'>
                                <IonLabel className={currentMode == "light" ? "ion-text-wrap strong-light":"ion-text-wrap strong-dark"} style={{fontSize:14,fontWeight:"bold"}}><strong>{props.data.sender.full_name}</strong></IonLabel>
                                <IonRow style={{marginBottom:-15}}>
                                    <IonCol size='12' className="ion-no-padding"><IonLabel style={{fontSize:12}}>{props.data.project.name}</IonLabel></IonCol>
                                    <IonCol size='12' className="ion-no-padding" style={{marginTop:5}}><IonLabel style={{fontSize:12,color:'#55b0f6'}}>{formatDistanceToNow(createdDate, { addSuffix: true })}</IonLabel></IonCol>
                                </IonRow>
                            </IonCol> 
                        </IonRow>
                    </IonCard>
              </IonCol>
            </IonRow>
        </IonCard>
      </IonCol>

        {/**menu modal */}
      {/* <IonModal trigger={`menu-modal${props.data.id}`} initialBreakpoint={0.30} breakpoints={[0, 0.30, 0.30, 0.30]} className="menu-actionsheet">
          <IonContent className={currentMode == "dark" ? "ion-content-dark" : "ion-content-light"} >
            <IonRow style={{marginTop:50}}>
                <IonCol size='12' className="ion-no-padding">
                    <IonCard style={{margin:0,boxShadow:"none",backgroundColor: currentMode == "dark" ? "#313841" : "#f4f5f8"}} button>
                    <IonRow style={{paddingLeft:10}}>
                            <IonCol size='2'><IonCard className="menu-btn" style={{backgroundColor: currentMode == "dark" ? "#37404a" : "#e7e7e7"}}><IonIcon color='success' icon={checkmark} className="notif-menu-icon" ></IonIcon></IonCard></IonCol>
                            <IonCol><div style={{marginTop:15}}>Accept Invitation</div></IonCol>
                        </IonRow>
                    </IonCard>
                </IonCol>
                <IonCol size='12' className="ion-no-padding">
                    <IonCard style={{margin:0,boxShadow:"none",backgroundColor: currentMode == "dark" ? "#313841" : "#f4f5f8"}} button>
                        <IonRow style={{paddingLeft:10}}>
                            <IonCol size='2'><IonCard className="menu-btn" style={{backgroundColor: currentMode == "dark" ? "#37404a" : "#e7e7e7"}}><IonIcon color='danger' icon={closeOutline} className="notif-menu-icon" ></IonIcon></IonCard></IonCol>
                            <IonCol><div style={{marginTop:15}}>Decline Invitation</div></IonCol>
                        </IonRow>
                    </IonCard>
                </IonCol>
                <IonCol size='12' className="ion-no-padding">
                    <IonCard style={{margin:0,boxShadow:"none",backgroundColor: currentMode == "dark" ? "#313841" : "#f4f5f8"}} button>
                    <IonRow style={{paddingLeft:10}}>
                            <IonCol size='2'><IonCard className="menu-btn" style={{backgroundColor: currentMode == "dark" ? "#37404a" : "#e7e7e7"}}><IonIcon color='danger' icon={trashBinOutline} className="notif-menu-icon" ></IonIcon></IonCard></IonCol>
                            <IonCol><div style={{marginTop:15}}>Delete Invitation</div></IonCol>
                        </IonRow>
                    </IonCard>
                </IonCol>
            </IonRow>
          </IonContent>
        </IonModal> */}

        {/**Invitations modal */}
        {/* <IonModal id="accept-modal" ref={modal} trigger={`invite${props.data.id}`} >
            {inviteData.map((invite,index) => (
                invite.status == "accepted"
                ?<ViewProjectModal invite={invite} key={index}/>
                :invite.status == "new"
                ?<AcceptProjectModal modal={modal} invite={invite} key={index} getProjectInvitation={props.getProjectInvitation} />
                :<DeclineProjectModal invite={invite} key={index}/>
            ))}
        </IonModal> */}
 
    </IonRow>
    </>
  )
}

export default InvitationCard