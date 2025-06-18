# Arquitectura y Decisiones de Diseño

## Stack
- **Backend:** Java 17, Spring Boot, Jackson (sin base de datos real, solo archivo JSON)
- **Frontend:** React (estructura inspirada en MercadoLibre)

## Decisiones Clave
- **Persistencia:**
  Se usa un archivo `products.json` para cumplir el requerimiento de no usar bases de datos reales. Se accede a este archivo mediante un repositorio custom (`JsonProductRepository`) usando Jackson.

- **Estructura de Capas:**
  - **Controller:** Expone endpoints REST.
  - **Service:** Lógica de negocio y orquestación.
  - **Repository:** Acceso a datos (archivo JSON).
  - **Model:** POJOs para productos y vendedores.

- **Manejo de Errores:**
  Si un producto no existe, se responde con HTTP 404.

- **Pruebas:**
  - **Unitarias:** Para servicio y repositorio (mock y real).
  - **Integración:** Para el controlador usando MockMvc.

## Desafíos y Soluciones
- **Desafío:** Simular persistencia sin base de datos.
  - **Solución:** Lectura directa de JSON con Jackson.
- **Desafío:** Mantener la estructura limpia y desacoplada.
  - **Solución:** Patrón de capas y uso de interfaces/repositories.

## Cobertura
- Se cubren los endpoints principales y los casos de error.
- Pruebas automáticas incluidas para backend. 