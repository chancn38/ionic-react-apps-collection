import { IonPage, IonRouterOutlet } from '@ionic/react';
import React from 'react';
import { Route, RouteComponentProps } from 'react-router-dom';
import DashboardPage from '../DashboardPage';
import ProjectDetailPage from './ProjectDetailPage';

const DashboardRoutes: React.FC<RouteComponentProps> = ({ match }) => {
  return (
    <IonPage>
      <IonRouterOutlet>
        <Route exact path={match.url} component={DashboardPage} />
        <Route path={`${match.url}/project/:id`} component={ProjectDetailPage} />
      </IonRouterOutlet>
    </IonPage>
  );
};

export default DashboardRoutes;
