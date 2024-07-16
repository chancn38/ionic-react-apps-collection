import { IonCard, IonCardContent, IonCol, IonIcon, IonItem, IonLabel, IonRow } from '@ionic/react';
import { star } from 'ionicons/icons';
import { forwardRef, memo, useEffect, useImperativeHandle, useState } from 'react';
import { dashboardProjectList } from '../../../api/AxiosProvider';
import ProjectSkeleton from '../../../components/skeletonloader/ProjectSkeleton';
import './DashboardProjectCard.scss';

const DashboardProjectCard = forwardRef((props, ref) => {
const [projects, setProjects] = useState<any>([]);
const [loading, setLoading] = useState<boolean>(false);

const getDashboardProjects = async () => {
  setLoading(true)
  const params = {};
  const response = await dashboardProjectList(params);
  if (response) {
    setProjects(response);
    setLoading(false)
  }
};

  //use a ref and the useImperativeHandle hook to expose the function to the parent.
  useImperativeHandle(ref, () => ({
    getDashboardProjects,
  }));
  
useEffect(() => {
  getDashboardProjects();
}, []);

  return (
    <>
      {loading?<ProjectSkeleton />:
      projects?.map((project:any,index:any) => (
        <IonCard mode="ios" key={project.id} className="prjoect-card" style={{background: '#ffffff'}} button routerLink={`/dashboard/project/${project.id}`}>
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
  );
});

export default memo(DashboardProjectCard)