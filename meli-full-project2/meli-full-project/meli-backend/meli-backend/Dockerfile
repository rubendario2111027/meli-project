# Build Stage
FROM maven:3-eclipse-temurin-17 AS builder
WORKDIR /app

# Copy pom.xml
COPY pom.xml .

# Download dependencies. Using dependency:go-offline is generally more robust for ensuring all dependencies are downloaded.
# Using dependency:resolve as a simpler alternative if go-offline causes issues or is too slow.
RUN mvn dependency:resolve
# If you prefer to download all dependencies to the local Maven repository:
# RUN mvn dependency:go-offline

# Copy the rest of the source code
COPY src ./src

# Build the application
RUN mvn package -DskipTests

# Runtime Stage
FROM eclipse-temurin:17-jre-alpine
WORKDIR /app

# Copy the JAR from the builder stage
# The JAR name is derived from artifactId and version in pom.xml
COPY --from=builder /app/target/meli-backend-0.0.1-SNAPSHOT.jar app.jar

EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]
