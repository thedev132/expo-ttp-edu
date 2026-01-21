package expo.modules.ttpedu

import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition
import expo.modules.kotlin.Promise
import expo.modules.kotlin.records.Field
import expo.modules.kotlin.records.Record

class ExpoTtpEduOptions : Record {
  @Field
  val uiMode: String? = null
}

class ExpoTtpEduModule : Module() {
  override fun definition() = ModuleDefinition {
    Name("ExpoTtpEdu")

    AsyncFunction("showTapToPayEducation") { options: ExpoTtpEduOptions? ->
      // Does nothing on Android
    }
  }
}
