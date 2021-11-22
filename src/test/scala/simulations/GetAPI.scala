package simulations

import io.gatling.core.scenario.Simulation
import io.gatling.core.Predef._
import io.gatling.http.Predef._
import scala.concurrent.duration.DurationInt

class GetAPI extends Simulation {

  // http config
  val httpConfig =  http.baseUrl("https://reqres.in")
    .header("Accept", value = "application/json")
    .header("content-type", value = "application.json")

  // scenario
  val scn = scenario("get use")
    .exec(http("get user request")
      .get("/api/users/2")
      .check(status is 200))

  pause(3)

    .exec(http("list users")
      .get("/api/users?page=2")
      .check(status.is(200)))

  pause(1,10)

    .exec(http("Single users")
      .get("/api/users/2")
      .check(status.in(200 to 210), status.not(400), status.not(500))
    )

  pause(3000.milliseconds)

  // setup
  setUp(scn.inject(atOnceUsers(10))).protocols(httpConfig)

}