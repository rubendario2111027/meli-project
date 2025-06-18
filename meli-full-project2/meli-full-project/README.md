# Meli Full Project

## Descripción
Este proyecto es una aplicación fullstack que replica la experiencia de una página de producto de Mercado Libre. Incluye un microservicio backend en Spring Boot y un frontend moderno en React, ambos dockerizables y listos para producción.

## Estructura del Proyecto

```
meli-full-project/
├── meli-backend/                # Microservicio backend (Spring Boot)
│   ├── src/
│   │   ├── main/
│   │   │   └── java/com/meli/
│   │   │       ├── Application.java           # Clase principal Spring Boot
│   │   │       ├── controller/
│   │   │       │   └── ProductController.java # Controlador REST de productos
│   │   │       ├── model/
│   │   │       │   └── Product.java           # Modelo de datos de producto
│   │   │       ├── repository/
│   │   │       │   └── JsonProductRepository.java # Acceso a productos desde JSON
│   │   │       ├── service/
│   │   │       │   └── ProductService.java    # Lógica de negocio de productos
│   │   │       └── WebConfig.java             # Configuración CORS
│   │   └── resources/
│   │       ├── application.yml                # Configuración Spring Boot
│   │       └── products.json                  # Base de datos de productos (mock)
│   ├── test/
│   │   └── java/com/meli/                    # Tests unitarios y de integración
│   ├── Dockerfile                            # Dockerfile multistage para backend
│   └── docker-compose.yml                    # Orquestación de servicios
│
└── meli-frontend/                # Frontend (React + Vite)
    ├── src/
    │   ├── components/                       # Componentes reutilizables
    │   │   ├── BuyCard/                      # Tarjeta de compra
    │   │   ├── ProductGalery/                # Galería de imágenes
    │   │   ├── ProductInfo/                  # Info principal del producto
    │   │   ├── ProductDescription/           # Descripción del producto
    │   │   ├── ProductFeatures/              # Características técnicas
    │   │   ├── ProductReviews/               # Opiniones y reviews
    │   │   ├── RelatedProducts/              # Productos relacionados
    │   │   ├── MeliHeader.jsx                # Header estilo Mercado Libre
    │   │   ├── MeliFooter.jsx                # Footer
    │   │   └── Breadcrumbs.jsx               # Migas de pan de navegación
    │   ├── pages/                            # Páginas principales (ej: ProductPage)
    │   ├── services/                         # Lógica de acceso a APIs
    │   ├── index.css                         # Estilos globales
    │   └── main.jsx                          # Entry point de la app React
    ├── public/
    │   └── images/                           # Imágenes usadas en la app
    ├── package.json                          # Dependencias y scripts
    ├── tailwind.config.js                    # Configuración de TailwindCSS
    └── postcss.config.js                     # Configuración de PostCSS
```

### Descripción de carpetas y archivos principales

#### Backend (meli-backend)
- **Application.java:** Punto de entrada de la app Spring Boot.
- **controller/ProductController.java:** Expone los endpoints REST para productos.
- **model/Product.java:** Define la estructura de los productos.
- **repository/JsonProductRepository.java:** Acceso a los productos desde un archivo JSON simulado.
- **service/ProductService.java:** Lógica de negocio para manipular productos.
- **WebConfig.java:** Configuración de CORS para permitir requests desde el frontend.
- **resources/products.json:** Base de datos mock de productos.
- **test/java/com/meli/:** Tests unitarios y de integración para cada capa.
- **Dockerfile:** Construye y ejecuta el microservicio en un contenedor.
- **docker-compose.yml:** Orquesta el backend (y otros servicios si se agregan).

#### Frontend (meli-frontend)
- **components/:** Componentes reutilizables de UI (BuyCard, ProductGallery, ProductInfo, etc).
- **pages/:** Páginas principales de la app (ej: ProductPage).
- **services/api.js:** Lógica para consumir la API del backend.
- **public/images/:** Imágenes de productos y logos.
- **main.jsx:** Entry point de la app React.
- **index.css:** Estilos globales.
- **package.json:** Dependencias y scripts de desarrollo.
- **tailwind.config.js:** Configuración de TailwindCSS.
- **postcss.config.js:** Configuración de PostCSS.

## Stack Tecnológico
- **Backend:** Java 17, Spring Boot, Maven
- **Frontend:** React 18, Vite, TailwindCSS
- **Testing:** JUnit, Jacoco (backend), React Testing Library, Jest (frontend)
- **Contenedores:** Docker, Docker Compose

### ¿Por qué este stack?
- **Spring Boot:** Permite crear microservicios robustos, escalables y de fácil integración con el ecosistema Java. Es ideal para APIs REST y ampliamente usado en la industria.
- **React + Vite:** React es el estándar moderno para interfaces ricas y reactivas. Vite acelera el desarrollo y el build, y TailwindCSS permite un diseño rápido y responsivo.
- **Docker:** Facilita el despliegue, la portabilidad y la consistencia entre entornos.

## Cómo levantar el proyecto

### Backend (Spring Boot)
1. Ve a la carpeta del backend:
   ```sh
   cd meli-backend/meli-backend
   ```
2. Levanta el microservicio con Docker Compose:
   ```sh
   docker-compose up --build
   ```
3. El backend estará disponible en [http://localhost:8080](http://localhost:8080)

### Frontend (React)
1. Ve a la carpeta del frontend:
   ```sh
   cd meli-frontend/meli-frontend
   ```
2. Instala las dependencias:
   ```sh
   npm install
   ```
3. Levanta el frontend en modo desarrollo:
   ```sh
   npm run dev
   ```
4. El frontend estará disponible en [http://localhost:5173](http://localhost:5173)

### (Opcional) Frontend con Docker
Puedes dockerizar el frontend agregando un Dockerfile y servicio en docker-compose si lo deseas.

## Testing y Cobertura
- **Backend:**
  - Ejecuta los tests y genera el reporte de cobertura:
    ```sh
    mvn clean test jacoco:report
    ```
  - El reporte estará en `meli-backend/meli-backend/target/site/jacoco/index.html`
- **Frontend:**
  - Ejecuta los tests y ve la cobertura:
    ```sh
    npm run test:coverage
    ```
  - El reporte estará en `meli-frontend/meli-frontend/coverage/lcov-report/index.html`

## Autores y Licencia
- Proyecto realizado como ejercicio de arquitectura fullstack moderna.
- Licencia MIT. 