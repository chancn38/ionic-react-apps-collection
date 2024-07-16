import { SplashScreen } from '@capacitor/splash-screen'
import { StatusBar, Style } from '@capacitor/status-bar'
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react'
import { IonReactRouter } from '@ionic/react-router'
import React, { useEffect } from 'react'
import { Redirect, Route } from 'react-router-dom'

import './assets/css/app.min.css'
import './assets/css/bootstrap.min.css'
import './assets/css/extra.css'
import './assets/css/icons-rtl.min.css'
import './assets/css/icons.css'
import './assets/css/icons.min.css'
import './assets/css/theme.css'
import './theme/global.scss'
import './theme/variables.scss'

import '@ionic/react/css/core.css'
import '@ionic/react/css/display.css'
import '@ionic/react/css/flex-utils.css'
import '@ionic/react/css/float-elements.css'
import '@ionic/react/css/normalize.css'
import '@ionic/react/css/padding.css'
import '@ionic/react/css/palettes/dark.system.css'
import '@ionic/react/css/structure.css'
import '@ionic/react/css/text-alignment.css'
import '@ionic/react/css/text-transformation.css'
import '@ionic/react/css/typography.css'
import { useAuth } from './context/AuthContext'
import { RouteDefinition } from './routes/routes'
import Tabs from './routes/Tabs'
import ProjectRoutes from './page/project/component/ProjectRoutes'
import NotificationPage from './page/notification/NotificationPage'
import DashboardRoutes from './page/dashboard/component/DashboardRoutes'

setupIonicReact()

//const isAuthenticated = false;

const PrivateRoute: React.FC<RouteDefinition> = ({
  component: Component,
  private: isPrivate,
  ...rest
}) => {
  const { isAuthenticated } = useAuth()

  return (
    <Route
      {...rest}
      render={props =>
        isPrivate && !isAuthenticated ? (
          <Redirect to='/login' />
        ) : (
          <Component {...props} />
        )
      }
    />
  )
}

const App: React.FC = () => {
  const { isAuthenticated } = useAuth()

  useEffect(() => {
    StatusBar.setBackgroundColor({ color: '#f4f5f8' })
    StatusBar.setStyle({ style: Style.Dark })
    setTimeout(() => {
      SplashScreen.hide()
    }, 1000)
  }, [])

  return (
    <IonApp className='ion-palette-dark'>
      <IonReactRouter>
        <IonRouterOutlet>

          <Route path='/dashboard' component={DashboardRoutes} />
          <Route path='/project' component={ProjectRoutes} />
          <Route path='/notification' component={NotificationPage} />
          
          <Route exact path='/' render={() => <Redirect to='/tabs' />} />
          <Route path='/tabs' component={Tabs} />

        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  )
}

export default App

// IonMenu working
// import { SplashScreen } from '@capacitor/splash-screen';
// import { StatusBar, Style } from '@capacitor/status-bar';
// import {
//   IonApp,
//   IonRouterOutlet,
//   IonSplitPane,
//   setupIonicReact
// } from '@ionic/react';
// import { IonReactRouter } from '@ionic/react-router';
// import React, { useEffect } from 'react';
// import { Redirect, Route } from 'react-router-dom';
// import Menu from './components/menu/Menu';

// import './assets/css/app.min.css';
// import './assets/css/bootstrap.min.css';
// import './assets/css/extra.css';
// import './assets/css/icons-rtl.min.css';
// import './assets/css/icons.css';
// import './assets/css/icons.min.css';
// import './assets/css/theme.css';
// import './theme/global.scss';
// import './theme/variables.scss';

// import '@ionic/react/css/core.css';
// import '@ionic/react/css/display.css';
// import '@ionic/react/css/flex-utils.css';
// import '@ionic/react/css/float-elements.css';
// import '@ionic/react/css/normalize.css';
// import '@ionic/react/css/padding.css';
// import '@ionic/react/css/palettes/dark.system.css';
// import '@ionic/react/css/structure.css';
// import '@ionic/react/css/text-alignment.css';
// import '@ionic/react/css/text-transformation.css';
// import '@ionic/react/css/typography.css';
// import { useAuth } from './context/AuthContext';
// import routes, { RouteDefinition } from './routes/routes';

// setupIonicReact();

// //const isAuthenticated = false;

// const PrivateRoute: React.FC<RouteDefinition> = ({ component: Component, private: isPrivate, ...rest }) => {
//   const { isAuthenticated } = useAuth();

//   return (
//     <Route
//       {...rest}
//       render={(props) =>
//         isPrivate && !isAuthenticated ? (
//           <Redirect to='/login' />
//         ) : (
//           <Component {...props} />
//         )
//       }
//     />
//   );
// };

// const App: React.FC = () => {

//   useEffect(() => {
//     StatusBar.setBackgroundColor({ color: '#1e65a8' });
//     StatusBar.setStyle({ style: Style.Dark });
//     setTimeout(() => {
//       SplashScreen.hide();
//     }, 1000);
//   }, []);

//   return (
//     <IonApp>
//       <IonReactRouter>

//         <IonSplitPane contentId='main'>
//           <Menu />
//           <IonRouterOutlet id='main'>
//             {routes.map((route, index) => (
//               <PrivateRoute
//                 key={index}
//                 path={route.path}
//                 exact={route.exact}
//                 component={route.component}
//                 private={route.private}
//               />
//             ))}
//           </IonRouterOutlet>
//         </IonSplitPane>

//         {/* <Navbar /> */}

//       </IonReactRouter>
//     </IonApp>
//   );
// };

// export default App;
