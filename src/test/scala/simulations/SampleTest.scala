package simulations

import io.gatling.core.scenario.Simulation
import io.gatling.core.Predef._
import io.gatling.http.Predef._
import scala.concurrent.duration.DurationInt

class SampleTest extends Simulation {

 private def getProp(propertyName: String, defaultValue: String): String ={
  Option(System.getenv(propertyName))
    .orElse(Option(System.getProperty(propertyName)))
    .getOrElse(defaultValue)
 }

 def users = getProp("USERS", "4").toInt

 // http config
 val httpConfig =  http.baseUrl("https://reqres.in")
   .header("Accept", value = "application/json")
   .header("content-type", value = "application.json")

 // scenario
 val scn = scenario("get user details")
   .exec(http("get user request")
     .get(s"/api/users/2")
     .check(status is 200))

 pause(3)

 // setup
 setUp(scn.inject(atOnceUsers(users))).protocols(httpConfig)

 // To run =>  mvn gatling:test -Dgatling.simulationClass=simulations.SampleTest -DUSERS=10

}