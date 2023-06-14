# Cuestionarios dinámico

Este funciona por medio de JSON's que son recibidos
en el archivo | MainForm.tsx | el cual hace el llamado de los componentes

👉 estos pueden ser:

✨ Input's

✨ Opcion Multiple

✨ Calendarios

✨ Checkbox

✨ Botones

✨ Seleciones

✨ Toggle's

Cada uno de los componentes cuenta con sus estilos globales y estilos personalizables

- CSS

Cada uno de los componentes requiere una interdaz definida en el archivo | Interface |
Los cuestionarios generados se guardan en firebase - firestore
Se pueden generar cuestionarios nuevos y editar los ya generados

## Demo

Lo necesario para que funcione el codigo es:

✅ Ionic - de preferencia ionic 7

https://ionicframework.com/docs/updating/7-0

✅ Node - 16.13.1 en adelante

https://nodejs.org/es

**PLUGINS**

✅ Firebase - npm i firebas --save

✅ uuid - npm i uuid | **no olvidar instalar los types** |

✅ react-hook-form - npm i react-hook-form

## Documentación

👉 Componentes de ionic

https://ionicframework.com/docs/components

dirección en el proyecto de todos los componentes:
|src\components|

👉 Manejo de componentes - MainForm

src\hooks

👉 Envio de datos a firestore

src\services

## Documentación PWA

se creo una pwa para que se pueda ver el funcionamiento del codigo sin necesidad de intalar nada

pasos...

✨ se instala el plugin de vite para el funcionamiento pwa **npm install -D vite-plugin-pwa**

✨ se instalaron las opciones de firebase hosting **npm install -g firebase-tools**

✨ crear version de produccion **ionic build --prod**

✨ se inicia sesion en firebase en la terminarl firebase-tools **firebase init**

✨ se asocia con el proyecto firebase creado para el proyecto

✨ Se selecciona **Hosting: Configure and deploy Firebase Hosting sites**

✨ ¿Qué haces para usar tu directorio público: **dist**

✨ ¿Configurar como una aplicación de una sola página (reescribir todas las direcciones URL en /index.html)? **y**

✨ El archivo dist/index.html ya existe. ¿Sobrescribir? **N**

# Dynamic quizzes

This works through JSON's that are received
in the file | MainForm.tsx | which calls the components

👉 these can be:

✨ Input's

✨ Multiple Choice

✨ Calendars

✨ Checkbox

✨ Button's

✨ Select's

✨ Toggle's

Each of the components has its global styles and customizable styles

-CSS

Each of the components requires an interface defined in the | Interface |
Generated quizzes are saved in firebase - firestore
You can generate new questionnaires and edit the already generated ones

## demo

What is necessary for the code to work is:

✅ Ionic - preferably ionic 7

https://ionicframework.com/docs/updating/7-0

✅ Node - 16.13.1 onwards

https://nodejs.org/en

**PLUGINS**

✅ Firebase - npm i firebase --save

✅ uuid - npm i uuid | **don't forget to install the types** |

✅ react-hook-form - npm i react-hook-form

## Documentation

👉 ionic components

https://ionicframework.com/docs/components

direction in the project of all components:
|src\components|

👉 Component Management - MainForm

src\hooks

👉 Send data to firestore

src\services

## PWA documentation

A pwa was created so that you can see how the code works without having to install anything

Steps...

✨ the vite plugin is installed for pwa operation **npm install -D vite-plugin-pwa**

✨ installed firebase hosting options **npm install -g firebase-tools**

✨ create production version **ionic build --prod**

✨ start session in firebase in terminal firebase-tools **firebase init**

✨ is associated with the firebase project created for the project

✨ **Hosting: Configure and deploy Firebase Hosting sites** is selected

✨ What do you to use your public directory: **dist**

✨ Configure as a single page app (rewrite all urls to /index.html)? **y**

✨ File dist/index.html already exists. Overwrite? **N**
