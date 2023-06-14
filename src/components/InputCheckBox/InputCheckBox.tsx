import { IonCheckbox, IonItem, IonLabel, IonNote } from "@ionic/react"
import { useState } from "react";
import style from './CheckBox.module.css'
const InputCheckBox = (props: any) => {
     const [checked, setChecked] = useState(false);
     const { cuestion } = props;
     return (
          <div>
               {cuestion.require === true && <span className="input-required" color="danger">*</span>}
               <IonItem className={style.checkbox_with}>
                    <IonLabel>{cuestion.placeholder}</IonLabel>
                    <IonCheckbox slot="end" value={checked} {...props.register(cuestion.name)} onIonChange={e => setChecked(e.detail.checked)}></IonCheckbox>
               </IonItem>
               {props.errors[cuestion.name] && props.errors[cuestion.name].message && (<IonItem><IonNote color="danger">{props.errors[cuestion.name].message}</IonNote ></IonItem>)}
          </div>
     )
};

export default InputCheckBox;