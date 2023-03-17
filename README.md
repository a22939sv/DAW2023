# DAW2023

Repositorio para la prueba de Aragon skills 2023

## LUGAR HORARIO COMPETICIÓN

Huesca, Palacio de Congresos, Sala Polivalente.

### 21 de marzo de 2023
De 15.00 a 16.00 horas: Acreditación participantes y tutores

De 16.00 a 17.00 horas: Comprobación de herramientas y adaptación al puesto

De 17.00 a 20.00 horas: Competición (3 horas). Módulo I: Planificación, material gráfico y diseño web (25%)


### 22 de marzo de 2023

Competición (8 horas). Módulo II: Programación (frontend y backend) y bbdd (50%)

De 9.30 a 13.30 horas

De 15.30 a 19.30 horas

### 23 de marzo de 2023
De 09.00 a 14.00 horas: Competición (5 horas). Módulo III: Tests, despliegue en servidor y control de versiones (25%)

De 17.00 a 19.00 horas: Entrega de diplomas y medallas.

## PRUEBA

Los detalles de la prueba todavía se publicarán cada día aquí.

## PASOS PREVIOS

- Utilizaremos como fuente de datos para la prueba el repositorio https://www.kaggle.com/datasets/paramaggarwal/fashion-product-images-small.
- Utilizaremos como fuente adicional de datos la API dockerizada situada en la carpeta _pre_ (puedes extraer los datos y utilizarlos de cualquier otra forma):

```bash
cd pre
docker build -t price-api .
docker run -p 8080:8080  price-api
```

- Obtención de precio para un producto con id 8509:

```bash
http://localhost:8080/products/15970
```

- Obtención de precio para todos los productos:

```bash
http://localhost:8080/products
```

## NORMAS GENERALES SOBRE LA COMPETICIÓN

- El uso del móvil no está permitido.
- Se puede hacer uso de Internet y de cualquier otra información que aporte el competidor para la realización de la prueba basada en apuntes/materiales/documentación, no mediante la solicitud de ayuda a través de un foro u otro canal de intercambio de información.
- No está permitida la comunicación con otros competidores u otro personal externo mediante cualquier método (móvil, chat, internet…).
- Está permitido el uso de cascos o tapones para aislar del ruido.
- El competidor puede consultar al jurado ante cualquier duda que se le plantee sobre si alguna acción está permitida o no.
- Disponéis de 20 minutos al inicio de cada módulo para la lectura de la prueba y planteamiento general de dudas
  - Si surge un problema/aclaración de la prueba durante la competición se informará por igual a todos los participantes para estar en igualdad de condiciones.
- Al final

## RECOMNENDACIONES

- **Trae el portatil ya configurado** con tu editor preferido, git, etc. La organización te proporcionará una pantalla adicional.

- **Estudia bien los requerimientos de las pruebas**. Cada día se realizará y se evaluará un modulo. Al comienzo del mismo se entregarán sus instrucciones, bocetos y un checklist para su evaluación. Es conveniente leer cuidadosamente todos los items del checklist y seleccionar los más favorables. La prueba está dimensionada para que sea fácil realizar algunos items, pero no la finalización de todos ellos. En función de la arquitectura que se elija para hacer la aplicación hay items que no tiene sentido completar.

- **Realiza los pasos previos que te proporcionamos**. No esperes a hacer un trabajo previo al día del examen si puedes ya llevarlo preparado. Lleva así mismo una arquitectura tipo para tu aplicación, con las librerías que utilices, etc..

- **Ten claro el despliegue de tu aplicación en un servidor**. En el último módulo se hará el despliegue, valoración de tests, control de versiones, integración continua.... Todo lo que tengas hecho en días anteriores te ayudará.

## Fechas y valoración de las pruebas

**Módulo I:** **_Planificación, material gráfico y diseño web_**

-17 de Abril de 17:00 a 20:00 horas. 25% de la valoración final

-De 16:00 a 17:00 h. Comprobación de herramientas y adaptación al puesto

-De 17:00 a 20:00 h. Realizacin de la prueba

**Módulo II:** **_Programación (frontend y backend) y base de datos_**

-18 de Abril de 10:00 a 14:00 horas y de 16:00 a 20:00 horas. 50% de la valoración final

**Módulo III:** **_Tests, despliegue en servidor y control de versiones_**

-19 de Abril de 10:00 a 14:00 horas. 25% de la valoración final

## Pasos previos

- Para realizar la prueba necesitaremos unos datos para su visualización, en este caso será listado de películas en formato json. **Es tarea tuya convertirlo al formato que te resulte conveniente (para importación a base de datos relacional, por ejemplo)**. En la prueba del segundo día se trabajará el acceso a datos y esta conversión de los datos de prueba a la base de datos es un trabajo que puedes hacer ya y así ahorrar un tiempo valioso para la prueba.

- Realiza un fork de este repositorio. Será el repositorio que tu utilices y sobre el que nosotros haremos el seguimiento de tu prueba. Si no controlas a nivel básico git & github, mira algo de documentación.

### Script obtención datos para la prueba

El script de generación del listado y las instrucciones de uso del mismo por si te viene bien modificar algo.
Listado de las mejores películas en imdb. El resultado de la ejecución del script está en el fichero _pelis.json_

Se utiliza python 3.

Forma de ejecución:

```
pip install -r requirements.txt # instalación de dependencias
python imdb.py # ejecución de script
```

El resultado de la ejecución del script se muestra el fichero _pelis.json_
