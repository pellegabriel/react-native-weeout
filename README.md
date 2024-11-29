# Expo Go Project

Este proyecto utiliza [Expo Go](https://expo.dev/go) para facilitar el desarrollo y la ejecución de aplicaciones móviles.

---

## **Requisitos previos**

Asegúrate de tener instalados los siguientes elementos:

- **Node.js** (versión 14 o superior) y npm o yarn.
- **Expo CLI**:
  ```bash
  npm install -g expo-cli
  ```
- **Expo Go** instalado en tu dispositivo móvil:
  - [Android](https://play.google.com/store/apps/details?id=host.exp.exponent)
  - [iOS](https://apps.apple.com/app/expo-go/id982107779)

---

## **Cómo ejecutar el proyecto**

### 1. Clona este repositorio:
```bash
git clone <URL-del-repositorio>
cd <nombre-del-repositorio>
```

### 2. Instala las dependencias:
```bash
npm install
```

O si usas Yarn:
```bash
yarn install
```

### 3. Inicia el servidor de desarrollo:
```bash
npx expo start
```

Esto abrirá una interfaz en tu navegador donde puedes escanear un código QR con Expo Go.

---

## **Ejecutar en un dispositivo físico**

1. Abre la aplicación Expo Go en tu dispositivo móvil.
2. Escanea el código QR que aparece en la terminal o en la interfaz del navegador.
3. La aplicación se ejecutará en tu dispositivo.

---

## **Ejecutar en un emulador/simulador**

### iOS:
Asegúrate de tener Xcode instalado y configurado:
```bash
npx expo start --ios
```

### Android:
Asegúrate de tener Android Studio configurado:
```bash
npx expo start --android
```

---

## **Estructura del proyecto**

```
├── App.js            # Archivo principal de la aplicación
├── assets/           # Recursos estáticos (imágenes, fuentes, etc.)
├── components/       # Componentes reutilizables
├── screens/          # Pantallas de la aplicación
├── package.json      # Configuración del proyecto y dependencias
└── README.md         # Documentación del proyecto
```

---

## **Notas adicionales**

- Si tienes problemas para ejecutar el proyecto, consulta la [documentación oficial de Expo](https://docs.expo.dev/).
- Puedes personalizar este proyecto modificando el archivo `App.js` o agregando nuevos componentes en la carpeta `components`.

---

¡Disfruta construyendo tu aplicación con **Expo Go**! 🚀
