# Formulario React con Validaciones

Este es un formulario en React que permite al usuario ingresar su nombre, correo electrónico, número de teléfono y mensaje. El formulario incluye validaciones tanto al enviar como al salir de ciertos campos. Además, una vez que el formulario se envía, los datos ingresados se muestran en una tarjeta de resumen (card).

## Funcionalidades

1. **Validaciones de los campos**:
    - **Campo "Full name"**: Requiere que el campo esté relleno.
    - **Campo "Email"**: Verifica que el correo electrónico tenga el formato válido (contenga un `@` y un dominio).
    - **Campo "Phone number"**: Verifica que el número de teléfono tenga exactamente 9 dígitos.
    - **Campo "Message"**: Requiere que el campo esté relleno.

2. **Validación al salir de los campos**:
    - **Email**: Cuando el usuario sale del campo, se valida que tenga el formato adecuado.
    - **Phone**: Cuando el usuario sale del campo, se valida que tenga exactamente 9 dígitos.

3. **Envío del formulario**:
    - Cuando el formulario se envía correctamente, se muestran los datos en la interfaz.
    - Los datos del formulario se muestran en una tarjeta (card) de resumen.

4. **Card para mostrar los datos**:
    - Después de enviar el formulario, se muestra una card con los datos ingresados.
    - Los datos incluidos son:
      - Nombre completo
      - Correo electrónico
      - Número de teléfono
      - Mensaje

## Diseño Responsivo

El diseño del formulario es **responsive**, lo que significa que se ajusta automáticamente a diferentes tamaños de pantalla. Para pantallas más pequeñas (como en dispositivos móviles), el formulario muestra un solo campo por fila. En pantallas más grandes (como en computadoras de escritorio), el formulario muestra dos campos por fila.

### Estilos Responsivos:
- **Formulario en pantallas pequeñas (móviles)**: Los campos se apilan uno encima del otro.
- **Formulario en pantallas grandes (ordenadores de escritorio)**: Los campos se muestran en dos columnas, con un máximo de 2 campos por fila.

### Estructura de la Card (Datos enviados):
La card donde se muestran los datos ingresados tiene el siguiente formato:

- **Full Name**: El nombre ingresado en el formulario.
- **Email**: El correo electrónico ingresado.
- **Phone Number**: El número de teléfono ingresado.
- **Message**: El mensaje ingresado.

## Instrucciones

1. **Instalación**:
    - Clona este repositorio en tu máquina local.
    - Navega a la carpeta del proyecto en tu terminal y ejecuta:
    ```bash
    npm install
    ```
    - Luego, inicia el servidor de desarrollo:
    ```bash
    npm run dev
    ```

2. **Estructura del proyecto**:
    - **UserForm.jsx**: Componente principal del formulario, donde se gestionan los estados y las validaciones.
    - **UserForm.scss**: Estilos relacionados con el formulario y la card de resumen.

3. **Simulación de Envío de Datos**:
    - El formulario está configurado para enviar los datos a una API de prueba (`jsonplaceholder.typicode.com`). Aunque no está configurada una API real, los datos se envían y se muestra la respuesta.

## Capturas de Pantalla

### Vista Móvil:

- El formulario se ve apilado verticalmente en dispositivos pequeños.

### Vista de Escritorio:

- El formulario se reorganiza en dos columnas cuando el tamaño de la pantalla es mayor.

---

¡Eso es todo! Ahora tu formulario tiene la funcionalidad de validaciones y la capacidad de mostrar los datos ingresados en una card, además de ser completamente **responsivo** para adaptarse a diferentes tamaños de pantalla.
