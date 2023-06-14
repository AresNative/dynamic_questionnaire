import { IonButton, IonFab, IonIcon } from "@ionic/react";
import style from "./Button.module.css"
interface PropsBtnSumit {
     funtion: string;
     message?: string;
}
const ButtonSend: React.FC<PropsBtnSumit> = (props) => {
     //chevron-right //register_me
     if (props.funtion === 'singIn') {
          return (
               <div className={style.fab_submit}>
                    {/* <div>{props.message}</div> */}
                    <IonFab vertical="bottom" horizontal="end" slot="fixed">
                         <IonButton type="submit">
                              <IonIcon icon='assets/icons/log-in.svg' />
                         </IonButton>
                    </IonFab>
               </div>
          )
     } else if (props.funtion === 'register') {
          return (
               <div className={style.fab_submit}>
                    <IonFab vertical="bottom" horizontal="end" slot="fixed">
                         <IonButton type="submit">
                              <IonIcon icon='assets/icons/user-plus.svg' />
                         </IonButton>
                    </IonFab>
               </div>
          )
     } else if (props.funtion === 'singFirestoreMedical') {
          return (
               <div className={style.fab_submit}>
                    <IonFab vertical="bottom" horizontal="end" slot="fixed">
                         <IonButton type="submit">
                              <IonIcon icon='assets/icons/medical-logo.svg' />
                         </IonButton>
                    </IonFab>
               </div>
          )
     } else if (props.funtion === 'register_me') {
          return (
               <div className={style.fab_submit}>
                    <IonFab vertical="bottom" horizontal="end" slot="fixed">
                         <IonButton type="submit">
                              <IonIcon icon='assets/icons/user-plus.svg' />
                         </IonButton>
                    </IonFab>
               </div>
          )
     } else if (props.funtion === 'editabel_list') {
          return (
               <IonButton className={style.fab_edit} color='success' type="submit">
                    <IonIcon icon='assets/icons/edit.svg' />
               </IonButton>
          )
     } else {
          return (
               <div className={style.fab_submit}>
                    <IonFab vertical="bottom" horizontal="end" slot="fixed">
                         <IonButton type="submit">
                              <IonIcon icon='assets/icons/plus-square.svg' />
                         </IonButton>
                    </IonFab>
               </div>
          )
     }

}

export default ButtonSend;