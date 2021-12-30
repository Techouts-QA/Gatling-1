package simulations

import io.gatling.core.scenario.Simulation
import io.gatling.core.Predef._
import io.gatling.http.Predef._


class PostAPI extends Simulation {

  // http config
  val httpConfig =  http.baseUrl("https://reqres.in")
    .header("Accept", value = "application/json")
    .header("content-type", value = "application.json")

  // scenario
  val scn = scenario("post user")
    .exec(http("post user request")
      .post("/api/users")
      .body(RawFileBody(".\\src\\test\\resources\\bodies\\AddUser.json")).asJson
      .header("content-type", value = "application.json")
      .check(status is 201)
    )
  // setup
  setUp(scn.inject(atOnceUsers(10))).protocols(httpConfig)

}