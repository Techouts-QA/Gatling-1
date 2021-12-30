package requests

import io.gatling.http.request.builder.HttpRequestBuilder
import io.gatling.core.Predef._
import io.gatling.http.Predef._

object GetPostCodes {

  val getPostCodes: HttpRequestBuilder = http("get postcodes").
    get("postcodes").
    check(status.not(200))

}
