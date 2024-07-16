import {
  IonContent,
  IonGrid,
  IonListHeader,
  IonPage
} from '@ionic/react'
import { useRef } from 'react'
import PullRefresh from '../../components/refresher/PullRefresh'
import ToolbarComponent from '../../components/toolbar/ToolbarComponent'
import DashboardProjectCard from './component/DashboardProjectCard'
import DashboardStatCard from './component/DashboardStatCard'

const DashboardPage = () => {
  const dashboardStatCardRef = useRef<any>();
  const dashboardProjectCardRef = useRef<any>();
  
  const handleRefresh = () => {
    if (dashboardStatCardRef.current) {
      dashboardStatCardRef.current.getProjectStats();
    }
    if (dashboardProjectCardRef.current) {
      dashboardProjectCardRef.current.getDashboardProjects();
    }
  };
  
  return (
    <IonPage>
      <ToolbarComponent />
      <IonContent>
        <PullRefresh margin={"0"} onRefresh={handleRefresh} />
        <IonGrid>
          <DashboardStatCard ref={dashboardStatCardRef}/>
          <IonListHeader className='list-header'>New Projects</IonListHeader>
          <DashboardProjectCard ref={dashboardProjectCardRef}/>
        </IonGrid>
      </IonContent>
    </IonPage>
  )
}

export default DashboardPage
