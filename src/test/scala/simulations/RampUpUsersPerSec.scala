package simulations

import io.gatling.core.scenario.Simulation
import io.gatling.core.Predef._
import io.gatling.http.Predef._
import scala.concurrent.duration._
import scala.language.postfixOps
import io.gatling.core.structure.PopulationBuilder

class RampUpUsersPerSec extends Simulation {

  // http config
  val httpConfig = http.proxy(Proxy("localhost", 8888))
    .baseUrl("https://gorest.co.in")
    .header("Authorization", value = "Bearer b365b14979674e301de97368df5a03dd01a4fb347d9a849167916a198e534152")

  // scenario
  val scn = scenario("get data from json responce")
    .exec(http("get data from json responce")
      .get("/public/v1/users")
      .check(jsonPath("$.data[0].id").saveAs("userID")))

    .exec(http("Validating json data")
      .get("/public/v1/users/${userID}")
      .check(jsonPath("$.data.id").is("17183"))
      .check(jsonPath("$.data.name").is("prankurk00099"))
      .check(jsonPath("$.data.email").is("prankurk00099@streich.biz"))
      .check(jsonPath("$.data.gender").is("male")))

  //setup
  setUp(scn.inject(nothingFor(5)
    , atOnceUsers(5)
     ,constantUsersPerSec(5) during(10 seconds)
      ,rampUsersPerSec(5) to(10) during(10 seconds))
    .protocols(httpConfig))
}
