import { IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs } from "@ionic/react";
import { gridOutline, mailOutline, notificationsOutline, rocketOutline, searchOutline } from "ionicons/icons";
import React from "react";
import { Redirect, Route } from "react-router";
import Home from "../pages/home/Home";
import "./Navbar.scss";

const Navbar: React.FC = () => {
  
  return (
    <IonTabs>
      
        <IonRouterOutlet>
        <Route exact path="/home/Home">
            <Home />
          </Route>
          <Route path="/man/projects">
            <Home />
          </Route>
          <Route path="/man/invitations">
            <Home/>
          </Route>
          <Route path="/man/notifications">
            <Home/>
          </Route>
          <Route exact path="/man">
            <Redirect to="/home/Home" />
          </Route>
        </IonRouterOutlet>

        <IonTabBar slot="bottom">
          <IonTabButton tab="dashboard" href="/home/Home" >
            <IonIcon icon={gridOutline} />
            <IonLabel className="tab-label">Dashboard</IonLabel>
          </IonTabButton>
          <IonTabButton tab="projects" href="/man/projects"   className="project">
            <IonIcon icon={rocketOutline} />
            <IonLabel className="tab-label">Projects</IonLabel>
          </IonTabButton>
          <IonTabButton tab="search" href="/search" >
            <IonIcon aria-hidden="true" style={{ fontSize:"22px" }} icon={searchOutline} />
            <IonLabel className="tab-label">Search</IonLabel>
          </IonTabButton>
          <IonTabButton tab="invitations" href="/man/invitations" className="invitation">
            <IonIcon icon={mailOutline} />
            <IonLabel className="tab-label">Invitations</IonLabel>
          </IonTabButton>
          <IonTabButton tab="notifications" href="/man/notifications" >
            <IonIcon icon={notificationsOutline} />
            <IonLabel className="tab-label">Notifications</IonLabel>
          </IonTabButton>
        </IonTabBar>

      </IonTabs>
  )
};

export default Navbar;
