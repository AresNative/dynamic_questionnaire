import { IonChip, IonCol, IonIcon } from "@ionic/react";
import style from "./button.module.css"
import { closeOutline } from "ionicons/icons";

export const ButtonCancel = () => {
     return (
          <IonCol size="1" className={style.icon_cancel}>
               <IonChip className={style.rt_box_shadow_close_notify} >
                    <IonIcon className={style.rt_danger_icon_chip_notify} icon={closeOutline} />
               </IonChip>
          </IonCol>
     );
}