import { IonItem, IonNote, IonToggle } from "@ionic/react"
import { useState } from "react";
import style from './InputTogle.module.css'
const InputTogle = (props: any) => {
     const [checked, setChecked] = useState(false);
     const { cuestion } = props;
     return (
          <div>
               {cuestion.require === true && <span className="input-required" color="danger">*</span>}
               <IonItem className={style.checkbox_with}>
                    <IonToggle label={cuestion.placeholder} color="success" slot="end" value={checked} {...props.register(cuestion.name)} onIonChange={e => setChecked(e.detail.checked)} />
               </IonItem>
               {props.errors[cuestion.name] && props.errors[cuestion.name].message && (<IonItem><IonNote color="danger">{props.errors[cuestion.name].message}</IonNote ></IonItem>)}
          </div>
     )
};

export default InputTogle;