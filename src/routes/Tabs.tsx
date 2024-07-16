import { IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs } from '@ionic/react';
import { grid, mail, rocket, search } from 'ionicons/icons';
import { Redirect, Route } from 'react-router-dom';
import DashboardPage from '../page/dashboard/DashboardPage';
import InvitationPage from '../page/invitation/InvitationPage';
import ProjectPage from '../page/project/ProjectPage';
import PhoneSettings from '../pages/phone-settings/PhoneSettings';
import SearchPage from '../page/search/SearchPage';


const Tabs: React.FC = () => (
  <IonTabs>
    <IonRouterOutlet>
      <Redirect exact path="/tabs" to="/tabs/dashboard" />
      <Route exact path="/tabs/dashboard">
        <DashboardPage/>
      </Route>
      <Route exact path="/tabs/project">
        <ProjectPage />
      </Route>
      <Route path="/tabs/search">
        <SearchPage />
      </Route>
      <Route path="/tabs/invitaion">
        <InvitationPage />
      </Route>
      <Route exact path="/tabs">
        <Redirect to="/tabs/dashboard" />
      </Route>
      
    </IonRouterOutlet>
    <IonTabBar slot="bottom">
      <IonTabButton tab="tab1" href="/tabs/dashboard">
        <IonIcon icon={grid} />
        <IonLabel>Dashboard</IonLabel>
      </IonTabButton>
      <IonTabButton tab="project" href="/tabs/project">
        <IonIcon icon={rocket} />
        <IonLabel>Projects</IonLabel>
      </IonTabButton>
      <IonTabButton tab="search" href="/tabs/search">
        <IonIcon icon={search} />
        <IonLabel>Search</IonLabel>
      </IonTabButton>
      <IonTabButton tab="invitaion" href="/tabs/invitaion">
        <IonIcon icon={mail} />
        <IonLabel>Invitaion</IonLabel>
      </IonTabButton>
    </IonTabBar>
  </IonTabs>
);

export default Tabs;