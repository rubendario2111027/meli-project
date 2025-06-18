# Cómo ejecutar el backend

## Requisitos
- Docker y Docker Compose instalados

## Pasos
1. Construir el proyecto:
   ```bash
   ./mvnw clean package
   ```

2. Levantar el backend:
   ```bash
   docker-compose up --build
   ```

3. Probar en:
   - http://localhost:8080/api/products
   - http://localhost:8080/api/products/{id}

## Tests automáticos

Para ejecutar los tests automáticos (una vez agregados):
```bash
./mvnw test
```
