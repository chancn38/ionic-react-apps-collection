import {
  IonContent,
  IonGrid,
  IonLabel,
  IonPage
} from '@ionic/react';
import { useRef } from 'react';
import PullRefresh from '../../components/refresher/PullRefresh';
import ToolbarComponent from '../../components/toolbar/ToolbarComponent';


const SearchPage = () => {
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
          <IonLabel>Search</IonLabel>
        </IonGrid>
      </IonContent>
    </IonPage>
  )
}

export default SearchPage
