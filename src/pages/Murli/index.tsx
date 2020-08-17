import React from 'react';
import HeaderTemp from '../../components/HeaderTemp';
import { IonContent, IonSlides, IonSlide, IonCard, IonItem, IonIcon, IonLabel, IonButton, IonCardContent, IonList, IonDatetime } from '@ionic/react';
import './styles.css';
import { pin } from 'ionicons/icons';

const slideOpts = {
  initialSlide: 1,
  speed: 400,

};

const Murli: React.FC = () => {
  const titles = ['Main Murli', '4 min murli'];
  const [murliDate, setMurliDate] = React.useState<string>(new Date().toISOString());

  return (
    <HeaderTemp title="Murli">
      <IonContent>
        {/* Will latest murli */}
        <IonSlides pager={true} options={slideOpts}>
          {titles.map((value, i) => {
            return (
              <IonSlide key={i}>
                <IonCard>
                <img src="https://ionicframework.com/docs/demos/api/card/madison.jpg" alt="" />
                  <IonItem>
                    <IonIcon icon={pin} slot="start" />
                    <IonLabel>{value}</IonLabel>
                    <IonButton fill="outline" slot="end">View</IonButton>
                  </IonItem>

                  <IonCardContent>
                    This is content, without any paragraph or header tags,
                    within an ion-cardContent element.
                  </IonCardContent>
                </IonCard>
              </IonSlide>
            )
          })
          }
        </IonSlides>

        {/* Older Archives ? Infinite scroll*/}
        <IonList>
          <IonItem>
            <IonLabel>Date</IonLabel>
            <IonDatetime displayFormat="DD MMM YYYY" value={murliDate} onIonChange={e => setMurliDate(e.detail.value!)}></IonDatetime>
          </IonItem>
        </IonList>

      </IonContent>
    </HeaderTemp>
  );
};

export default Murli;
