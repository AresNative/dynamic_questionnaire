import { IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonFab, IonFabButton, IonGrid, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonList, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import dataJsonTest from "../test/JSON_questionnarie.json";
import { add } from 'ionicons/icons';
import { useHistory } from 'react-router';
import { useState } from 'react';
import { DeleteData, useRealtimeData } from '../services/fireFunction';
const Home: React.FC = () => {
  let history = useHistory();
  function view_test() {
    history.push("/quiz_test");
  }
  const [dataTest, setdataTest] = useState([])

  useRealtimeData("test_add_data", setdataTest);
  function delete_info_test(id: string) {
    DeleteData("test_add_data", id);
  }
  return (
    <IonPage>
      <IonHeader collapse='condense' translucent={true}>
        <IonToolbar >
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
        <IonGrid>
          <IonHeader collapse='condense' translucent={true}>
            <IonToolbar >
              <IonTitle>
                Datos  guardados en el test
              </IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonRow>
            {dataTest.map((data: any, key: any) => {
              return (
                <IonCol size="auto" key={key}>
                  <IonCard>
                    <IonToolbar>
                      <IonButtons collapse={true} slot="end">
                        <IonButton fill="clear" color='danger' onClick={() => { delete_info_test(data.id) }}>
                          Borrar
                        </IonButton>
                      </IonButtons>
                    </IonToolbar>
                    <IonCardContent>
                      <IonItem>
                        <IonLabel position="stacked">
                          Nombre:
                        </IonLabel>
                        {data.data.nombre}
                      </IonItem>
                      <IonItem>
                        <IonLabel position="stacked">
                          Apellidos:
                        </IonLabel>
                        {data.data.apellidos}
                      </IonItem>
                      <IonItem>
                        <IonLabel position="stacked">
                          Titulo:
                        </IonLabel>
                        {data.data.titulo}
                      </IonItem>
                      <IonItem>
                        <IonLabel position="stacked">
                          Necesita ayuda?
                        </IonLabel>
                        {data.data.ayuda}
                      </IonItem>
                      <IonItem>
                        <IonLabel position="stacked">
                          Meeting:
                        </IonLabel>
                        {data.data.consultas_online}
                      </IonItem>
                      <IonItem>
                        <IonLabel position="stacked">
                          Email de contacto:
                        </IonLabel>
                        {data.data.contacto}
                      </IonItem>
                      <IonItem>
                        <IonLabel position="stacked">
                          Cuenta con documentacion?
                        </IonLabel>
                        {data.data.documentacion}
                      </IonItem>
                      <IonItem>
                        <IonLabel position="stacked">
                          Tiene experiencia?
                        </IonLabel>
                        {data.data.experiencia}
                      </IonItem>
                      <IonItem>
                        <IonLabel position="stacked">
                          Plataforma en la que tiene problemas:
                        </IonLabel>
                        {data.data.plataforma}
                      </IonItem>
                      <IonItem>
                        <IonLabel position="stacked">
                          Sexo:
                        </IonLabel>
                        {data.data.sexo}
                      </IonItem>
                    </IonCardContent>
                  </IonCard>
                </IonCol>
              )
            })}
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
