#mvn verify org.sonarsource.scanner.maven:sonar-maven-plugin:sonar
mvn sonar:sonar -Dproject.settings=sonar-project.properties -Dsonar.host.url=https://sonarcloud.io -Dsonar.login=4612cda87201d43856aafc001cf27d367ede4367
