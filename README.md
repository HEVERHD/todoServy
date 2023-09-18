# TodoServy - Prueba Desarrollador React native

Este es el repositorio para la prueba de desarrollador React native TodoServy.

Aplicación para dispositivos moviles construida construida con [ React native](https://react.dev/) Última versión estable 18.1 ( 26 de abril de 2022).

---

- **Autor:** Hevert Gelis - <hever11.hdgd@gmail.com>

---

## Comenzando 🚀

#### **REQUERIMIENTOS MÍNIMOS**

- Git
- NodeJS v18.17.1 LTS
- npm v10.1.0
- react-native-async-storage/async-storage:
- react-navigation
- react-redux
- redux-thunk
- reduxjs/toolkit
- expo
- moment
- uuid

#### **CONFIGURACIÓN INICIAL**

Para iniciar a codificar, recuerde que se usa [GitHub Flow](https://guides.github.com/introduction/flow/) para el manejo de las ramas de `Git`, por lo cual asegúrese de que esté ubicado en la rama `develop` antes de realizar cualquier cambio, realizar un `git pull` para actualizar su repositorio local y posteriormente crear una rama `feature/{nombre-cambio}` a partir de `develop` en dónde realizar los cambios correspondientes.

No haga cambios directamente sobre la rama `develop` ni tampoco sobre `main`, siempre cree una nueva rama `feature` y una vez realizado `git push` al servidor con sus cambios, cree un pull request con los cambios hacia `develop` para que otra persona del equipo o en su defecto usted mismo, revise y apruebe el PR.

### **Iniciar la Aplicación de React Native con Expo**

##### **npm**

Localmente, ejecute `npm install` para descargar las dependencias de la aplicación después de haber realizado un `git pull`. Además de descargar, también realiza una serie de procedimientos automáticos de acuerdo al entorno de desarrollo en el que se ejecuta. Nunca ejecute `npm update`. Si quiere subir la versión de una dependencia, edite la versión de dicha dependencia en el archivo `package.json` directamente, y luego ejecute nuevamente `npm install`.

Si quiere actualizar la versión de alguna dependencia, le recomendamos instalar [npm-check-updates](https://github.com/raineorshine/npm-check-updates) con el comando:

```
npm i -g npm-check-updates
```

`Instalar Expo CLI:` Asegúrate de tener Node.js y npm instalados en tu máquina.
Abre tu terminal y ejecuta el siguiente comando para instalar la herramienta Expo CLI globalmente:

```
npm install -g expo-cli
```

y luego ejecute para iniciar una aplicación de ejemplo usando un emulador o dispositivo físico.

```
npx expo start
```

y listo, tenemos la vista principal de la APP

![Texto alternativo](https://raw.githubusercontent.com/HEVERHD/todoServy/main/Screenshot_1695011168.png)

### **Componentes personalizados**

- `Componente DeleteConfirmationDialog` Este componente muestra un diálogo de confirmación para eliminar elementos. Proporciona botones para confirmar o cancelar la acción.
  `Función :`

  - @param {boolean} isVisible - Determina si el diálogo de confirmación es visible o no.
  - @param {function} onCancel - Función de devolución de llamada que se ejecuta cuando se presiona el botón "Cancelar".
  - @param {function} onConfirm - Función de devolución de llamada que se ejecuta cuando se presiona el botón "Confirmar".
  - @returns {JSX.Element} - Devuelve una vista modal de confirmación con botones.

- `Componente TimePicker` Este componente permite al usuario seleccionar una hora en formato de 24 horas.
  `Función :` de devolución de llamada que se ejecuta cuando selecciona una hora.
  `vista` Devuelve una vista con un selector de hora con Opciones de hora en formato de 24 horas

  - Maneja el cambio de hora seleccionada.
  - La hora seleccionada en formato "HH:mm".

  ***

## Arquitectura basada en Redux

Gestión del Estado Global: Redux proporciona un almacén global de estado que puede ser accesible desde cualquier parte de la aplicación. Esto facilita la gestión del estado de la aplicación, especialmente en aplicaciones grandes y complejas. en este caso la store llamda `todo`
