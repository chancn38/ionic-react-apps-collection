import React, { useEffect, useState } from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonBackButton, IonButtons, IonButton } from '@ionic/react'
import { RouteComponentProps } from 'react-router';
import { projectDetails } from '../../../api/AxiosProvider';

interface ProjectDetailPageProps extends RouteComponentProps<{
  id: string;
}> {}

const ProjectDetailPage: React.FC<ProjectDetailPageProps> = ({match, history}) => {

  const [project, setProject] = useState<any>({});
  const [loading, setLoading] = useState<boolean>(true);
  
  const getProjectDetails = async () => {
    const params = {id: match.params.id};
    const response = await projectDetails(params);
    if (response) {
      setProject(response);
      setLoading(false)
    }
  };

  useEffect(() => {
    getProjectDetails();
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton />
          </IonButtons>
          <IonTitle>{loading?'Loading...':project.name}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <br />
        Project {match.params.id}
        <IonButton>Test</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default ProjectDetailPage;