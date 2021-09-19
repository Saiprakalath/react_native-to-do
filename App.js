import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import ComponentScreen from "./src/ComponentScreen";
import BoxScreen from "./src/screens/BoxScreen";
import ColorScreen from "./src/screens/ClolorScreen";
import CounterScreen from "./src/screens/CouterScreen";
import HomeScreen from "./src/screens/HomeScreen";
import ImageScreen from "./src/screens/ImageScreen";
import ListScreen from "./src/screens/ListScreen";
import SquareScreen from "./src/screens/SquareScreen";
import SquareScree2 from "./src/screens/SquareScreen2";
import TextScreen from "./src/screens/TextScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentScreen,
    List :ListScreen,
    Images:ImageScreen,
    Counter: CounterScreen,
    Color:ColorScreen,
    Square:SquareScreen,
    Square2:SquareScree2,
    Text:TextScreen,
    Box: BoxScreen
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
