package simulations

import io.gatling.core.scenario.Simulation
import io.gatling.core.Predef._
import io.gatling.http.Predef._
import scala.concurrent.duration.DurationInt

class PutAPI extends Simulation {

  // http config
  val httpConfig =  http.baseUrl("https://reqres.in")
    .header("Accept", value = "application/json")
    .header("content-type", value = "application.json")

  // scenario
  val scn = scenario("get use")
    .exec(http("get user request")
      .put("/api/users/2")
      .body(RawFileBody(".\\src\\test\\resources\\bodies\\AddUser.json")).asJson
      .check(status is 200))

  // setup
  setUp(scn.inject(atOnceUsers(10))).protocols(httpConfig)

}