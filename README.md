# spring-stenciljs-demo

- Add SPA code in `/src/main/javascript/frontend` (project is called frontend)
- Add a `watch` script to the package.json

```
"watch": "stencil build --dev --watch",
```

- Change stencil.config.ts `www` outputTarget `dir` property to generate the bundle into the `/static` folder

```
...
outputTargets: [
    {
      type: 'www',
      // comment the following line to disable service workers in production
      serviceWorker: null,
      // baseUrl: 'https://myapp.local/',
      dir: '../../resources/static'
    },
  ],
  ...
```

- Add the spring-boot-devtools dependency

```
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-devtools</artifactId>
    <scope>runtime</scope>
    <optional>true</optional>
</dependency>
```

- Add the maven-frontend-plugin in the `pom.xml`

```
<plugin>
    <groupId>com.github.eirslett</groupId>
    <artifactId>frontend-maven-plugin</artifactId>
    <!-- Use the latest released version:
    https://repo1.maven.org/maven2/com/github/eirslett/frontend-maven-plugin/ -->
    <version>1.11.0</version>
    <executions>
        <execution>
            <id>install node and npm</id>
            <goals>
                <goal>install-node-and-npm</goal>
            </goals>
            <configuration>
                <!-- See https://nodejs.org/en/download/ for latest node and npm (lts) versions -->
                <nodeVersion>v14.4.0</nodeVersion>
                <npmVersion>6.14.4</npmVersion>
            </configuration>
        </execution>

        <execution>
            <id>npm install</id>
            <goals>
                <goal>npm</goal>
            </goals>
            <!-- Optional configuration which provides for running any npm command -->
            <configuration>
                <arguments>install</arguments>
            </configuration>
        </execution>

        <execution>
            <id>npm run build</id>
            <goals>
                <goal>npm</goal>
            </goals>
            <configuration>
                <arguments>run build</arguments>
            </configuration>
        </execution>
    </executions>
    <configuration>
        <workingDirectory>src/main/javascript/frontend</workingDirectory>
    </configuration>
</plugin>
```

- Run the Spring Boot Service
- Run the frontend `watch` script
- Profit 💰

## References

- Maven Frontend Plugin: https://github.com/eirslett/frontend-maven-plugin
