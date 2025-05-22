import ExpoModulesCore
import ProximityReader

public class ExpoTtpEduModule: Module {
  public func definition() -> ModuleDefinition {
    Name("ExpoTtpEdu")

    AsyncFunction("showTapToPayEducation") { (options: [String: Any]?) -> Void in
      if #available(iOS 18.0, *) {
        await MainActor.run {
          // Determine UI style based on passed option
          var userInterfaceStyle: UIUserInterfaceStyle = .unspecified
          if let uiMode = options?["uiMode"] as? String {
            userInterfaceStyle = uiMode == "dark" ? .dark : .light
          }

          // Apply the UI style globally to the first available window
          if let window = UIApplication.shared.connectedScenes
            .compactMap({ $0 as? UIWindowScene })
            .flatMap({ $0.windows })
            .first {
              window.overrideUserInterfaceStyle = userInterfaceStyle
          }
        }

        // Now continue with showing the education screen, also on the main actor
        await MainActor.run {
          Task {
            do {
              guard let windowScene = UIApplication.shared.connectedScenes.first as? UIWindowScene,
                    let rootViewController = windowScene.windows.first?.rootViewController else {
                throw ExpoTtpEduError.viewControllerNotFound
              }

              let proximityReaderDiscovery = ProximityReaderDiscovery()
              let content = try await proximityReaderDiscovery.content(for: .payment(.howToTap))
              try await proximityReaderDiscovery.presentContent(content, from: rootViewController)
            } catch {
              print("Error showing TTP education: \(error)")
              throw error
            }
          }
        }
      } else {
        print("Tap to Pay Education is only available on iOS 18.0+")
      }
    }
  }
}

enum ExpoTtpEduError: Error {
  case viewControllerNotFound
} 