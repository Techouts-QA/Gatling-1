package simulations

import io.gatling.core.scenario.Simulation
import io.gatling.core.Predef._
import io.gatling.http.Predef._
import scala.concurrent.duration.DurationInt

class ExtractDataFromJsonResponce extends Simulation {

  // http config
  val httpConfig =  http.baseUrl("https://gorest.co.in")
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
  // setup
  setUp(scn.inject(atOnceUsers(10))).protocols(httpConfig)
}