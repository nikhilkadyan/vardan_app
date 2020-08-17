import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { readerOutline, headsetOutline, starOutline } from 'ionicons/icons';
import Murli from './pages/Murli';
import Songs from './pages/Songs';
import Special from './pages/Special';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route path="/Murli" component={Murli} exact={true} />
          <Route path="/Songs" component={Songs} exact={true} />
          <Route path="/Special" component={Special} exact={true} />
          <Route path="/" render={() => <Redirect to="/Murli" />} exact={true} />
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="Murli" href="/Murli">
            <IonIcon icon={readerOutline} />
            <IonLabel>Murli</IonLabel>
          </IonTabButton>
          <IonTabButton tab="Songs" href="/Songs">
            <IonIcon icon={headsetOutline} />
            <IonLabel>Songs</IonLabel>
          </IonTabButton>
          <IonTabButton tab="Special" href="/Special">
            <IonIcon icon={starOutline} />
            <IonLabel>Special</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
