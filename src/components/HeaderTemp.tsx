import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

interface HeaderProps {
    children: React.ReactNode;
    title: string;
}

const HeaderTemp: React.FC<HeaderProps> = ({children, title}) => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>{title}</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">{title}</IonTitle>
                    </IonToolbar>
                </IonHeader>
                {children}
            </IonContent>
        </IonPage>
    );
};

export default HeaderTemp;
