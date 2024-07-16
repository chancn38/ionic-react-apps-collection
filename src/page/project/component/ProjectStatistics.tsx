import { IonCard, IonCardContent, IonCol, IonLabel, IonRow } from "@ionic/react";
import { forwardRef, useEffect, useImperativeHandle, useState } from "react";
import { projectPageGetStats } from "../../../api/AxiosProvider";
import { ProjectStatSkeleton } from "../../../components/skeletonloader/ProjectStatSkeleton";
import { ProjectData } from "../../../service/ProjectsData";

const ProjectStatistics = forwardRef((props, ref) => {
  // const { setprojectFilter } = useStateContext();
  const [projectStat, setProjectStat] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [selectedNotifItems, setSelectedNotifItems] = useState<any>('active');
  
  //use a ref and the useImperativeHandle hook to expose the function to the parent.
  useImperativeHandle(ref, () => ({
    getProjectStats,handleCheckboxChangeNotif,selectedNotifItems,
  }));

  const handleCheckboxChangeNotif = (itemValue) => {
    const updatedData = ProjectData.filter((item) => item.value == itemValue);
    //setprojectFilter(updatedData[0].value);
    setSelectedNotifItems(updatedData[0].value);
  };

  const getProjectStats = async () => {
    setLoading(true);
    const params = {};
    const response = await projectPageGetStats(params);
    if (response) {
      setProjectStat(response);
      setLoading(false);
    }
  };

  useEffect(() => {
    getProjectStats();
  }, []);

  const ProjectStatData = [
    { name: 'Total', icon: 'fe-layers', color: "1", filter: "", count: projectStat.total_projects },
    { name: 'Active', icon: 'fe-activity', color: "2", filter: "active", count: projectStat.active_projects },
    { name: 'Archive', icon: 'fe-archive', color: "3", filter: "archived", count: projectStat.archived_projects },
    { name: 'Owned', icon: 'fe-star', color: "4", filter: "owned", count: projectStat.owned_projects },
  ];

  return (
    <IonRow>
      {loading ? <ProjectStatSkeleton /> 
      : ProjectStatData.map((dashboard,index)=>( 
        <IonCol key={index} className="ion-no-padding" size="6">
          <IonCard
            button
            //onClick={()=>handleCheckboxChangeNotif(dashboard.filter)}
            className={`home-card bg-${dashboard.color}`}
            style={{
              height: index === 0 ? 100 : index === 3 ? 100 : 120,
              marginTop: index === 2 ? -15 : "",
            }}
          >
            <IonCardContent style={{ paddingLeft: 5, paddingRight: 5 }}>
              <IonRow>
                <IonCol size="3" className="ion-no-padding ion-text-left project-card-icon">
                  <div style={{marginTop:0, width:index === 1 ? 45 : index === 2 ? 45 : '',height:index === 1 ? 45 : index === 2 ? 45 : ''}}>
                    <i className={dashboard.icon}></i>
                  </div>
                </IonCol>
                <IonCol size="9">
                  <IonRow className="ion-text-right" style={{marginTop:-20}}>
                    <IonCol size="12" style={{marginTop: index === 1 ? 50 : index === 2 ? 50 : 30}}>
                      <IonLabel style={{ fontSize: 24 }}>{dashboard?.count}</IonLabel>
                    </IonCol>
                    <IonCol size="12" style={{marginTop: index === 0 ? -15 : index === 3 ? -15 : -15 }}>
                      <IonLabel style={{ fontSize: 12, opacity: "0.6" }}>
                        {dashboard.name}
                      </IonLabel>
                    </IonCol>
                </IonRow>
                </IonCol>
              </IonRow>
            </IonCardContent>
          </IonCard>
        </IonCol>
      ))}
    </IonRow>
  );
});


export default ProjectStatistics;