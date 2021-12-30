package config
import io.gatling.core.Predef._
import io.gatling.http.Predef._
object Configuration {
  val baseUrl: String = "https://postcodes.io/"

  val httpConfig =  http.baseUrl(baseUrl)
  val users: Int = Integer.getInteger("users", 1).toInt
  val rampUp: Int = Integer.getInteger("rampUp", 1).toInt

}
