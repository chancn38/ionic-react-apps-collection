import {
  IonContent,
  IonGrid,
  IonPage
} from '@ionic/react';
import { useRef } from 'react';
import PullRefresh from '../../components/refresher/PullRefresh';
import ToolbarComponent from '../../components/toolbar/ToolbarComponent';
import ProjectCard from './component/ProjectCard';
import "./ProjectPage.scss";
import ProjectStatistics from './component/ProjectStatistics';

const ProjectPage = () => {
  const ProjectDashboardCardRef = useRef<any>();
  const ProjectCardRef = useRef<any>();

  const handleRefresh = () => {
    if (ProjectDashboardCardRef.current) {
      ProjectDashboardCardRef.current.getProjectStats();
    }
    if (ProjectCardRef.current) {
      ProjectCardRef.current.getProjectLists();
    }
  };

  return (
    <IonPage>
      <ToolbarComponent />
      <IonContent>
        <PullRefresh margin={"0"} onRefresh={handleRefresh} />
        <IonGrid>
          <ProjectStatistics ref={ProjectDashboardCardRef}/>
          <ProjectCard ref={ProjectCardRef} />
        </IonGrid>
      </IonContent>
    </IonPage>
  )
}

export default ProjectPage
