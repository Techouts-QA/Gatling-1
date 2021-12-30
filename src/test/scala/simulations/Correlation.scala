package simulations

import io.gatling.core.scenario.Simulation
import io.gatling.core.Predef._
import io.gatling.http.Predef._
import scala.concurrent.duration.DurationInt

class Correlation extends Simulation {

    // http config
  val httpConfig =  http.baseUrl("https://reqres.in")
    .header("Accept", value = "application/json")
    .header("content-type", value = "application.json")

  // scenario
  val scn = scenario("get data from json responce")
    .exec(http("get data from json responce")
      .get("/api/users")
      .check(jsonPath("$.data[0].id").saveAs("userID")))

    .exec(http("Validating json data")
      .get("/api/users/${userID}")
      .check(jsonPath("$.data.id").is("1"))
      .check(jsonPath("$.data.email").is("george.bluth@reqres.in")))

  // setup
  setUp(scn.inject(atOnceUsers(10))).protocols(httpConfig)
}