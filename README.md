# GRUPO 1 // MOVE

* **Temática del sitio**: tienda online de venta de calzado deportivo.

* **Público objetivo**: el negocio está enfocado a público en general pero con énfasis en los jóvenes.

* **Presentación de los integrantes**: (Leer mas adelante)

* **Referencias**:
<br>https://ar.puma.com
<br>https://indy.com.ar/
<br>https://moov.com.ar


* **Tablero de Trello**: 
https://trello.com/b/loBoMovR/tareas-move

* **Proyecto en linea**: 
https://grupo1move.herokuapp.com/




## INTEGRANTES

![Integrantes del grupo](/public/images/grupo_1_move.png "Integrantes del grupo")

Los integrantes del grupo de izquierda a derecha y de arriba hacia abajo son...

* **Estefania Pottassa**: _"Tengo 30 años, vivo en Rosario, Santa Fe, soy contadora, me encantan el cine y las series. Esta es mi primera experiencia en programación."_

* **Maximiliano Lizarraga**: _"Tengo 30 años, vivo en Capital Federal y me gusta hacer deportes y estoy iniciandome en el mundo de la programacion."_

* **Rodrigo Fernando Alvarez**: _"Tengo 25 años! Vivo en provincia de BSAS, Gregorio de Laferrere, soy tecnico en refrigeracion y diseñador de interiores, me apasiona todo lo que tenga que ver con la tecnología, hice cursos de reparacion de pc!"_

* **Matias Derlich**: _"Tengo 36 años, vivo en Comodoro Rivadavia (Chubut) soy ingeniero mecanico y me gusta todo lo vinculado a las nuevas tecnologias. Tengo experiencia en programacion y busco sumar conocimientos, metodologias y buenas practicas"_

* **Melissa Sánchez**: _"Tengo 29 años, soy de Medellin (Colombia), profesional en Derecho, y amo la tecnología"_


## SPRINTS (Resumen de entregables)

![Sprints](/public/images/sprints.png "Sprints")

* **SPRINT 1 // Introducción y wireframing**
* **SPRINT 2 // HTML + CSS**
* **SPRINT 3 // Template Engines**
* **SPRINT 4 // JSON + Métodos HTTP**
* **SPRINT 5 // Middlewares y autenticación**
* **SPRINT 6 // Bases de datos**
* **SPRINT 7 // Validaciones (Back + Front)**
* **SPRINT 8 // APIs + React**


### SPRINT 1 // Introducción y wireframing
Se determino la temática del sitio, logo, colores y tipografías
Se presento un boceto gráfico (wireframe) de las principales secciones a implementar, entre ellas...
* Home
* Detalle de producto
* Carrito de compras
* Formulario de registro/login


### SPRINT 2 // HTML + CSS
Con HTML y CSS replicamos todos los bocetos del sprint anterior.
<br>
Vale destacar que todos ellos se adaptan a formato escritorio o movil (diseño responsive)



### SPRINT 3 // Template Engines
Generacion de plantillas para contenido dinámico con EJS.
<br>
Reutilizacion de secciones compartidas como...
* Header
* Navbar
* Footer


### SPRINT 4 // JSON + Métodos HTTP
Se sumo dinamismo con el funcionamiento de los formularios para trabajar con productos y usuarios en formato JSON. Para ambos se realizo el CRUD respectivo...
* (**C**)reate (Creación)
* (**R**)ead (Lectura)
* (**U**)pdate (Actualizacion/Edicion)
* (**D**)elete (Eliminacion)


### SPRINT 5 // Middlewares y autenticación
En esta etapa nos enfocamos en los usuarios, con el registro, login (+recordar session) y logout 
<br>
Tambien trabajamos en las rutas y acceso en tres niveles...
* contenido publico (de acceso para todos)
* contenido privado (solo usuarios registrados)
* contenido privado (solo administradores)


### SPRINT 6 // Bases de datos
Migramos el contenido de los JSON a SQL.
<br>
En este sprint trabajamos con MySQL por un lado y Sequelize por el otro.
<br>
Tanto para usuarios como productos se realizo...
* Creación de la base de datos y de todas sus tablas
* Tipos de datos de todos los campos y sus restricciones
* Relaciones entre las diferentes tablas
* Archivos SQL listos para ejecutar y poblar tablas con datos iniciales



### SPRINT 7 // Validaciones (Back + Front)
En este sprint incorporamos las validaciones de todos los formularios de...
* Usuarios (registro/login/edicion)
* Productos (creacion y edicion)

tanto desde...
* el frontend (JavaScript)
* el backend (Express Validator)


### SPRINT 8 // APIs + React
Se realizo una **API** de usuarios y otra de productos que exponen los datos más importantes de la aplicación en formato JSON.

* Endpoints de usuarios ( api/users/ )
* Endpoints de productos ( api/products/ )

En cuanto a **React** se realizo un dashboard que consume los datos de las API y muestre de manera resumida las principales métricas del negocio.

* Dashboard con indicadores principales



## OBSERVACIONES 

* **Basde de datos // SQL**: La base de datos se llama 'move_db.sql' y se encuentra en la carpeta ( /src/database/move_db.sql ) Puede realizar la carga del archivo listo para arrancar.

* **Basde de datos // CONFIG.JS**: En caso que requiera especificar user/pass/puerto para conectar a la base de datos, esta se encuentra en el archivo 'config.js' y se encuentra en la carpeta  ( /src/database/config/config.js )

* **Basde de datos // USER/PASS**: Por defecto se adjunta un usuario ( user@move.com / #Qwerty1234) y un administrador ( admin@move.com / #Qwerty1234). Sus user/pass son los indicados.

