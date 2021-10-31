import { Navigation } from "react-native-navigation";
import App from "../../App";
import CalendarScreen from "../screens/CalendarScreen";
import HomeScreen from "../screens/HomeScreen";
import SocialScreen from "../screens/SocialScreen";
import TreatmentScreen from "../screens/TreatmentScreen";
import UserScreen from "../screens/UserScreen";


export default function () {
    // Register imported screens
    Navigation.registerComponent('App', () => App);

    Navigation.registerComponent('HomeScreen', () => HomeScreen);
    Navigation.registerComponent('CalendarScreen', () => CalendarScreen);
    Navigation.registerComponent('TreatmentScreen', () => TreatmentScreen);
    Navigation.registerComponent('SocialScreen', () => SocialScreen);
    Navigation.registerComponent('UserScreen', () => UserScreen);
}