import React from 'react';
import HeaderTemp from '../../components/HeaderTemp';
import { IonContent, IonCard, IonItem, IonIcon, IonLabel, IonButton, IonCardContent, IonSearchbar } from '@ionic/react';
import { headsetOutline } from 'ionicons/icons';

const Songs: React.FC = () => {
  const songs = ["A Great song", "Another song", "Amazing song", "The Best song"]
  const [searchText, setSearchText] = React.useState("");
  return (
    <HeaderTemp title="Songs">
      <IonSearchbar value={searchText} onIonChange={e => setSearchText(e.detail.value!)}></IonSearchbar>

      <IonContent>
        {songs.map((value, i) => {
          return (
            <IonCard key={i}>
              <img src="https://ionicframework.com/docs/demos/api/card/madison.jpg" alt="" />
              <IonItem>
                <IonIcon icon={headsetOutline} slot="start" />
                <IonLabel>{value}</IonLabel>
                <IonButton fill="outline" slot="end">View</IonButton>
              </IonItem>

              <IonCardContent>
                This is content, without any paragraph or header tags,
                within an ion-cardContent element.
              </IonCardContent>
            </IonCard>
          )
        })
        }
        <IonItem button color="secondary" className="ion-text-center">
          <IonLabel>
            Load More
          </IonLabel>
        </IonItem>
        <br/><br/>
      </IonContent>
    </HeaderTemp>
  );
};

export default Songs;
