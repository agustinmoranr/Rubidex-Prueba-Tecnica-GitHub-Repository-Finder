<img width="3803" height="1832" alt="image" src="https://github.com/user-attachments/assets/e2def45b-0b4e-4d86-9535-fd0528354da0"  />

# Ejecución del proyecto

Una vez descargado o clonado el proyecto:

- npm install para instalar las dependencias del proyecto.
- npm run dev para ejecutar proyecto en ambiente de desarrollo.
- npm run build para hacer la construcción y empaquetado del proyecto.
- npm run preview para ejecutar versión producida por npm run build localmente.

# Tech stack

- React V19
- Typescript
- Tailwindcss
- Zustand (gestión de estado global)
- tanstack/react-query (Manejo de consultas)
- Lucide-React (paquetería de iconos)

# Decisiones Técnicas
## Estructura del proyecto
<img width="500" height="700" alt="image" src="https://github.com/user-attachments/assets/aca5135c-609f-46d2-a1c4-c60e75143a4f" />

Decidí utilizar una estructura del proyecto con un enfoque de proximidad de responsabilidades, por ejemplo, la una carpeta components al nivel de la raiz de src
engloba los componentes más generales del proyecto. Sin embargo, dentro de pages, cada página es una carpeta, que también puede repetir el mismo patrón de carpetas que src,
dependiendo de la complejidad de la pantalla.

## Uso de Zustand

Debido a la arquitectura de los componentes por la que opté para la versión final del reto técnico, ésta se beneficia mucho de un estado global, ya que dicho estado se consume
y muta en múltiples partes del árbol de componentes. Si bien el reto se podría resolver con Context API, opte por utilizar Zustand para llevar el reto a un enfoque más productivo
donde zustand optimiza las mutaciones de estado evitando rerenders innecesarios a lo largo del árbol de componentes.


