package simulations

import io.gatling.core.scenario.Simulation
import io.gatling.core.Predef._
import io.gatling.http.Predef._
import scala.concurrent.duration._
import scala.language.postfixOps

class FixedDurationLoadTest extends Simulation {

  // http config
  val httpConfig =  http.baseUrl("https://reqres.in")
    .header("Accept", value = "application/json")
    .header("content-type", value = "application.json")

  // scenario
  val scn = scenario("get user")
    .forever(){
      exec(http("get user request")
        .get("/api/users/2")
        .check(status is 200))
    }

  // setup
  setUp(
    scn.inject(
      atOnceUsers(10),
      rampUsers(30) during( 30 seconds)
    ))
    .protocols(httpConfig).maxDuration(20 seconds)

}