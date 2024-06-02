# Use OpenJDK 17 as base image
FROM openjdk:17-jdk-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy the packaged JAR file into the container at path /app
COPY training.jar app.jar

# Expose the port that your application runs on
EXPOSE 8080

# Specify the command to run your application
CMD java -jar app.jar
