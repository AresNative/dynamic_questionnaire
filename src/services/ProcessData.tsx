import { searchData, AddData } from "./fireFunction";

export const Form = (funtion: string, data: any) =>
    new Promise((resolve, reject) => {
        switch (funtion) {
            case "sarch-questions":
                searchData(data.name_question, "questions", "data.name_question")
                    .then((r: any) => resolve(r))
                    .catch((r: any) => reject("Error en los datos, intente de nuevo"))

                break;
            case "register-data":
                AddData("test_add_data", data)
                    .then((r: any) => resolve({ class: "alert", header: "Nuevo registro", alert: r.message }))
                    .catch((r: any) => resolve({ class: "alert", header: "Nuevo registro", alert: r }))
                break;
            default:
                reject('No se reconoce el cuestionario seleccionado')
                break;
        }
    })