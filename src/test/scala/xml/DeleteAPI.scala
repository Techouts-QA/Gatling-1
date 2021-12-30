package xml

import io.gatling.core.Predef._
import io.gatling.core.scenario.Simulation
import io.gatling.http.Predef._

class DeleteAPI extends Simulation {

  // http config
  val httpConfig =  http.baseUrl("https://reqres.in")
    .header("Accept", value = "application/json")
    .header("content-type", value = "application.json")

  // scenario
  val scn = scenario("get use")
    .exec(http("get user request")
      .delete("/api/users/2")
      .check(status.in(200 to 205)))

  // setup
  setUp(scn.inject(atOnceUsers(10))).protocols(httpConfig)

}