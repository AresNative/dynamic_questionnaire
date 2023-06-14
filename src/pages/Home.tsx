import { IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import dataJsonTest from "../test/JSON_questionnarie.json"
import style from './Home.css';
const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader collapse='condense' translucent={true}>
        <IonToolbar>
          <IonTitle>
            Generador de cuestionarios
          </IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen={true} className="ion-padding">
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Custionario #1</IonCardTitle>
            <IonCardSubtitle>Cuestionario de prueba</IonCardSubtitle>
          </IonCardHeader>

          <IonCardContent>
            En este se pueden ver los componentes default pero solo
            se puede alterar por medio del codigo fuente
          </IonCardContent>
          <IonToolbar>
            <IonButtons collapse={true} slot="end">
              <IonButton fill="clear">Ver</IonButton>
              <IonButton
                fill="clear"
                color="success"
                onClick={() => {
                  navigator.clipboard.writeText(JSON.stringify(dataJsonTest))
                }}
              >Copiar JSON</IonButton>
            </IonButtons>
          </IonToolbar>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Home;
