import { IonBackButton, IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonFab, IonFabButton, IonGrid, IonHeader, IonIcon, IonList, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import dataJsonTest from "../test/JSON_questionnarie.json";
import { add } from 'ionicons/icons';
import { MainForm } from '../hooks/MainForm';
const Quiz_test: React.FC = () => {
    return (
        <IonPage>
            <IonHeader collapse='condense' translucent={true}>
                <IonToolbar>
                    <IonButtons collapse={true}>
                        <IonBackButton defaultHref="/home" />
                    </IonButtons>
                    <IonTitle>
                        Cuestionario de prueba  - Test quiz
                    </IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent fullscreen={true} className="ion-padding">
                <MainForm
                    funtion="register-data"
                    dataForm={dataJsonTest}
                />
            </IonContent>
        </IonPage>
    );
};

export default Quiz_test;
