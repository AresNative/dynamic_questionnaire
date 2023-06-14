import { IonInput, IonItem, IonLabel, IonNote } from "@ionic/react"
import style from './Input.module.css'

const InputForm = (props: any) => {
     const { cuestion } = props;
     return (
          <div className={style.margin_btn}>
               {cuestion.require === true && <span className="input-required" color="danger">*</span>}
               <IonItem className={style.item} key={cuestion.id}>
                    <IonInput
                         counter={cuestion.counter}
                         maxlength={cuestion.Maxlength}
                         minlength={cuestion.Minlength}
                         labelPlacement="floating"
                         label={cuestion.placeholder}
                         onIonChange={(e: any) => { props.setError(cuestion.name, {}) }}
                         type={cuestion.type}
                         {...props.register(cuestion.name, { required: cuestion.require && "El campo es obligatorio." })}
                    />
               </IonItem>
               {props.errors[cuestion.name] &&
                    props.errors[cuestion.name].message &&
                    (<IonItem className={style.item}>
                         <IonNote color="danger">{props.errors[cuestion.name].message}</IonNote>
                    </IonItem>)
               }
          </div>
     );
};

export default InputForm;