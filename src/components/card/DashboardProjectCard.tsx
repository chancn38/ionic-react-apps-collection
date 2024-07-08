import { IonCard, IonCardContent, IonCol, IonIcon, IonItem, IonLabel, IonRow } from '@ionic/react';
import { star } from 'ionicons/icons';
import { memo, useEffect, useState } from 'react';
import { dashboardProjectList } from '../../api/AxiosProvider';
import './DashboardProjectCard.scss'

const DashboardProjectCard = () => {
const [projects, setProjects] = useState<any>([]);
const [loading, setLoading] = useState<boolean>(true);

const getDashboardProjects = async () => {
  const params = {};
  const response = await dashboardProjectList(params);
  if (response) {
    setProjects(response);
    setLoading(false)
  }
};

useEffect(() => {
  getDashboardProjects();
}, []);

  return (
    <>
      {loading?<IonLabel>Loading...</IonLabel>:
      projects?.map((project:any,index:any) => (
        <IonCard mode="ios" key={project.id} className="prjoect-card" style={{background: '#ffffff'}} button routerLink={`/man/projectdetails/${project.id}/${project.pivot.user_level}/${project.name}`}>
            <IonCardContent className="ion-no-padding">
                <IonRow>
                    <IonCol className="ion-no-padding">
                        <IonItem lines="none" detail={false} >
                        <div className="project-icon-bg" style={{backgroundColor:project.color+'50'}}><i style={{ color: project.color, fontSize:22 }} className={project.icon} ></i></div>
                          <IonLabel style={{ fontSize: 14, fontWeight: 500, paddingLeft: 20 }} > {project.name} </IonLabel>
                          {project.pivot.is_favorite == 1 ? ( <IonIcon icon={star} slot="end" style={{ fontSize: 15, color: '#fab341' }} ></IonIcon> ) : ( '' )}
                          {project.status == "archived" ? ( <div className='ribbon-tag ion-text-center'><IonLabel style={{fontSize:12,color:"#fff"}}>Archived</IonLabel></div> ) : project.status == "trashed" ? ( <div className='ribbon-tag ion-text-center'><IonLabel style={{fontSize:12,color:"#fff"}}>Trashed</IonLabel></div> ) : ( '' )}
                        </IonItem>
                    </IonCol>
                </IonRow>
            </IonCardContent>
        </IonCard>
        ))}
    </>
  )
}

export default memo(DashboardProjectCard)