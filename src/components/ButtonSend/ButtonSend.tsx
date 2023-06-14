import { IonButton, IonFab, IonIcon } from "@ionic/react";
import { sendOutline } from 'ionicons/icons';
const ButtonSend = ({ activarBoton }: any) => {
     return (
          <IonFab
               slot="fixed"
               vertical="bottom"
               horizontal="end"
               onClick={activarBoton}
          >
               <IonButton type="submit" >
                    <IonIcon icon={sendOutline} />
               </IonButton>
          </IonFab>
     )

}

export default ButtonSend;