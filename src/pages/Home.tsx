import { IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonFab, IonFabButton, IonGrid, IonHeader, IonIcon, IonList, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import dataJsonTest from "../test/JSON_questionnarie.json";
import { add } from 'ionicons/icons';
import { useHistory } from 'react-router';
const Home: React.FC = () => {
  let history = useHistory();
  function view_test() {
    history.push("/quiz_test");
  }
  return (
    <IonPage>
      <IonHeader collapse='condense' translucent={true}>
        <IonToolbar>
          <IonTitle>
            Generador de cuestionarios - Quiz builder
          </IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen={true} className="ion-padding">
        <IonGrid>
          <IonRow>
            <IonCol>

              <IonCard>
                <IonCardHeader>
                  <IonCardTitle>Custionario #1</IonCardTitle>
                  <IonCardSubtitle>Cuestionario de prueba</IonCardSubtitle>
                </IonCardHeader>

                <IonCardContent>
                  En este se pueden ver los componentes por defecto pero solo
                  se puede alterar por medio del codigo fuente <strong>src\test\JSON_questionnarie.json</strong>
                </IonCardContent>
                <IonToolbar>
                  <IonButtons collapse={true} slot="end">
                    <IonButton fill="clear" onClick={view_test}>Ver</IonButton>
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

            </IonCol>
            <IonCol>

              <IonCard>
                <IonCardHeader>
                  <IonCardTitle>Quiz #1</IonCardTitle>
                  <IonCardSubtitle>Test quiz</IonCardSubtitle>
                </IonCardHeader>

                <IonCardContent>
                  In this you can see the default components but only
                  can be altered through the source code <strong>src\test\JSON_questionnarie.json</strong>
                </IonCardContent>
                <IonToolbar>
                  <IonButtons collapse={true} slot="end">
                    <IonButton fill="clear" onClick={view_test}>Vew</IonButton>
                    <IonButton
                      fill="clear"
                      color="success"
                      onClick={() => {
                        navigator.clipboard.writeText(JSON.stringify(dataJsonTest))
                      }}
                    >Copy JSON</IonButton>
                  </IonButtons>
                </IonToolbar>
              </IonCard>

            </IonCol>
          </IonRow>
        </IonGrid>

        <IonFab slot="fixed" vertical="bottom" horizontal="end">
          <IonFabButton>
            <IonIcon icon={add}></IonIcon>
          </IonFabButton>
        </IonFab>

      </IonContent>
    </IonPage>
  );
};

export default Home;
