package simulations
import io.gatling.core.scenario.Simulation
import io.gatling.core.Predef._

import scenarios.GetPostcodes
import config.Configuration._

class GetPostcodeSimulation extends Simulation{

  private val getPostcodeSimulation = GetPostcodes.getPostcodesScenario.inject(
    atOnceUsers(users),
    nothingFor(5),
    atOnceUsers(rampUp))

  setUp(getPostcodeSimulation).protocols(httpConfig)
}
