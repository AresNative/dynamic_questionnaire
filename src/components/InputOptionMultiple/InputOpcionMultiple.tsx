import { IonItem, IonLabel, IonNote, IonSelect, IonSelectOption } from "@ionic/react";
import { useState } from "react";
import style from './InputOpcionMultiple.module.css';
import { SwitchTypeInputRender } from "../../hooks/MainForm";
const InputOpcionMultiple = (props: any) => {
     const { cuestion } = props;
     const [hairColor, setHairColor] = useState([]);
     return (
          <div className={style.with}>
               {cuestion.require === true && <span className="input-required" color="danger">*</span>}
               <IonItem className={style.border_color} key={cuestion.id}>
                    <IonSelect value={hairColor}
                         labelPlacement="floating"
                         label={cuestion.placeholder}
                         multiple={cuestion.multi}
                         okText="Ok"
                         cancelText="Cancelar"
                         {...props.register(cuestion.name, { required: cuestion.require && "El campo es obligatorio." })}
                         onIonChange={e => { setHairColor(e.detail.value); props.setError(cuestion.name, {}) }}>
                         {cuestion.options.map((data: any, index: number) => { return <IonSelectOption key={index} value={data}>{data}</IonSelectOption> })}
                    </IonSelect>
               </IonItem>
               {props.errors[cuestion.name] && props.errors[cuestion.name].message && (<IonItem><IonNote color="danger">{props.errors[cuestion.name].message}</IonNote ></IonItem>)}

               {(hairColor !== cuestion.options[cuestion.options.length - 1]) ?
                    (<SwitchTypeInputRender
                         cuestion={cuestion.newInput}
                         register={props.register}
                         watch={props.watch}
                         clearErrors={props.clearErrors}
                         setError={props.setError}
                         errors={props.errors}
                    />) : (<> </>)}

          </div>
     )
}

export default InputOpcionMultiple;