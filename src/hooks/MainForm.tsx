import { IonButton, IonInput, IonList, useIonAlert, useIonLoading } from "@ionic/react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import { Form } from "../services/ProcessData";

import InputForm from "../components/InputForm/InputForm";
import InputCheckBox from "../components/InputCheckBox/InputCheckBox";
import ButtonSend from "../components/ButtonSend/ButtonSend";
import InputTogle from "../components/InputToggle/InputTogle";
import InputOpcionMultiple from "../components/InputOptionMultiple/InputOpcionMultiple";
import InputSelect from "../components/InputSelect/InputSelect";
import { useRef } from "react";

interface PropsCuestion {
    funtion?: string;
    message?: string;
    dataForm: any;
    tabla: string;
}

export const MainForm: React.FC<PropsCuestion> = (values: any) => {
    let history = useHistory();
    const buttonRef = useRef<HTMLIonButtonElement>(null);
    async function activarBoton() {
        console.log("click")
        if (buttonRef.current) {
            buttonRef.current.click();
        }
    }
    const { funtion, dataForm, message, tabla } = values;
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
        clearErrors,
        setError,
    } = useForm();
    const [present] = useIonAlert();
    const [presentLoading, dissmis] = useIonLoading();
    const onSubmit = async (data: any) => {
        /* presentLoading({
            message: 'Espere un momento por favor...'
        }); */
        await Form(funtion, data, tabla)
            .then((r: any) => {
                if (r.class) {
                    present({
                        header: r.header,
                        message: r.alert,
                        buttons: [
                            { text: 'Ok' },
                        ]
                    })
                    history.push(r.push)
                } else {
                    history.push(r)
                }
            })
            .catch((er: any) => present({
                header: "Error!",
                message: er,
                buttons: [
                    { text: 'Ok' },
                ]
            }));
        /* dissmis(); */
    }
    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                {dataForm.map((d: any, key: any) => {
                    return (
                        <SwitchTypeInputRender
                            key={key}
                            cuestion={d}
                            register={register}
                            watch={watch}
                            clearErrors={clearErrors}
                            setError={setError}
                            errors={errors}
                        />
                    );
                })}
                <IonButton style={{ display: "none" }} ref={buttonRef} type="submit" > Enviar </IonButton>
            </form>
            <br /><br />
            <br /><br />
            <ButtonSend activarBoton={activarBoton} />
        </>
    );
}
export const SwitchTypeInputRender = (props: any) => {
    const { tipo, value } = props.cuestion;
    switch (tipo) {
        case "INPUT":
            return <InputForm key={props.id} {...props} />;
        case "CHECKBOX":
            return <InputCheckBox key={props.id} {...props} />;
        case "TOGGLE":
            return <InputTogle key={props.id} {...props} />;
        case "OPCMULTIPLE":
            return <InputOpcionMultiple key={props.id} {...props} />;
        case "SELECT":
            return <InputSelect key={props.id} {...props} />
        case "VALORES":
            return <IonInput style={{ display: "none" }} readonly disabled value={value} {...props.register(props.cuestion.name, { value: value })} />;
        default:
            return <h1 style={{ color: "red" }}> {tipo} </h1>;
    }
};