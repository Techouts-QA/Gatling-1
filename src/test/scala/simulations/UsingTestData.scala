package simulations

import io.gatling.core.scenario.Simulation
import io.gatling.core.Predef._
import io.gatling.http.Predef._
import scala.concurrent.duration.DurationInt

class UsingTestData extends Simulation {

  // http config
  val httpConfig =  http.baseUrl("https://gorest.co.in")
    .header("Authorization", value = "Bearer b365b14979674e301de97368df5a03dd01a4fb347d9a849167916a198e534152")

  //testdata declaration
  val csvFeeder = csv(".\\src\\test\\resources\\data\\users.csv").circular  //shuffle, random, queue

  //def
  def getUser()={
    repeat(3){
      feed(csvFeeder)
      .exec(http("Get single user req")
        .get("/public/v1/users/${userId}")
        .check(jsonPath("$.data.name").is("${name}"))
        .check(status.in(200 to 404))
      )

    }
  }

  // scenario
  val scn = scenario("get data from json responce")
  feed(csvFeeder)
    .exec(getUser())

  // setup
  setUp(scn.inject(nothingFor(4),
      atOnceUsers(10))
    .protocols(httpConfig))
}