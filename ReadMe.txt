To run as suites , put the tests in folder wise and use below command
mvn gatling:test -Dgatling.simulationsFolder=src/test/scala/xml -Dgatling.runMultipleSimulations=true -Dgatling.runDescription=TestRun

or in pom.xml

 <build>
    <testSourceDirectory>src/test/scala</testSourceDirectory>
    <plugins>
      <plugin>
        <groupId>io.gatling</groupId>
        <artifactId>gatling-maven-plugin</artifactId>
        <version>${gatling-maven-plugin.version}</version>

        <configuration>
          <runMultipleSimulations>true</runMultipleSimulations>
         <includes>
           <simulationClass>simulations.GetAPI</simulationClass>
          </includes>
        </configuration>
      </plugin>
    </plugins>
  </build>

  Edit html report:
   <div class="head">
          <a class="logo" href="https://techouts.com/" target="blank_" title="Techouts Home Page"><img src="https://techouts.com/wp-content/uploads/2020/04/Techouts_logo1.png" style="width:40%"/></a>
          <div class="frontline"><a href="https://techouts.com/" target="_blank"><b>IHCL Performance Report</b></a></div>
      </div>