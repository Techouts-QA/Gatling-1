package simulations

import io.gatling.core.scenario.Simulation
import io.gatling.core.Predef._
import io.gatling.http.Predef._
import scala.concurrent.duration.DurationInt
import scala.language.postfixOps

class PerformanceTest extends Simulation{

  //http config
  val httpConfig = http.baseUrl("https://reqres.in")
    .header("Accept", "application/json")
    .header("content-type", "application.json")

val csvFeeder = csv("C://Users//d1//poc//src//test//resources//data//userList.csv").circular

  def myFun() ={
    repeat(5){
      feed(csvFeeder)
    .exec(http("TestData")
      .get("/api/users/${id}")

      .check(jsonPath("$.data.email").is("${email}")))
  }
}

  //scenario
  val scn = (scenario("This is the Get Req")
    .exec(myFun()))



  //load setup
setUp(scn.inject(nothingFor(5),
    atOnceUsers(5)
    ,rampUsers(10) during(4 seconds),
    constantUsersPerSec(10) during(10 seconds)
  )).protocols(httpConfig)

}