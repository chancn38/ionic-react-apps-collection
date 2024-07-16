import React from 'react';
import { Route, RouteComponentProps } from 'react-router-dom';
import { IonRouterOutlet, IonPage } from '@ionic/react';
import ProjectPage from '../ProjectPage';
import ProjectDetailPage from './ProjectDetailPage';

const ProjectRoutes: React.FC<RouteComponentProps> = ({ match }) => {

  return (
    <IonPage>
      <IonRouterOutlet>
        <Route exact path={match.url} component={ProjectPage} />
      </IonRouterOutlet>
    </IonPage>
  );
};

export default ProjectRoutes;
