package simulations

import io.gatling.core.scenario.Simulation
import io.gatling.core.Predef._
import io.gatling.http.Predef._
import scala.concurrent.duration.DurationInt

class LoopRequest extends Simulation {

  // http config
  val httpConfig =  http.baseUrl("https://reqres.in")
    .header("Accept", value = "application/json")
    .header("content-type", value = "application.json")

  //loop function
  def userReq()={
    repeat(3){
      exec(http("get a user request")
        .get("/api/users/2")
        .check(status is 200))
    }
  }

  // scenario
  val scn = scenario("get use")
    .exec(userReq()) //it will execute 2 times
  pause(2)

    .exec(userReq())

  // setup
  setUp(scn.inject(atOnceUsers(10))).protocols(httpConfig)

}