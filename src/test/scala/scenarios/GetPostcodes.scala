package scenarios

import io.gatling.core.structure.ScenarioBuilder
import io.gatling.core.Predef._
import requests.GetPostCodes.getPostCodes

object GetPostcodes {

  val getPostcodesScenario: ScenarioBuilder = scenario("get postcodes scenario").
    exec(getPostCodes)
}
