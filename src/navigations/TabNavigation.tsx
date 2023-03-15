import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { vs } from "react-native-size-matters";
import { AdaptiveStatusBar, useColors, useNavScreenOptions } from "../Hoddy-ui";
import CreateFortuneScreen from "../screens/CreateFortuneScreen";
import HomeScreen from "../screens/HomeScreen";
import ViewFortune from "../screens/ViewFortune";
import { CREATE_FORTUNE, HOME_SCREEN, VIEW_FORTUNE } from "./routes";

const Tabs = createBottomTabNavigator();

const TabNavigation = () => {
  const colors = useColors();
  const options = useNavScreenOptions("tab");

  return (
    <>
      <AdaptiveStatusBar />
      <Tabs.Navigator
        sceneContainerStyle={{
          backgroundColor: colors.white[1],
        }}
        screenOptions={{
          ...options,
          tabBarItemStyle: {
            // backgroundColor: "#f90",
            alignSelf: "center",
            height: vs(42),
          },
        }}
      >
        <Tabs.Screen
          name={HOME_SCREEN}
          component={HomeScreen}
          options={{
            headerShown: false,
            tabBarIcon: (props) => (
              <Ionicons name="home" color={props.color} size={props.size} />
            ),
          }}
        />
        <Tabs.Screen
          name={VIEW_FORTUNE}
          component={ViewFortune}
          options={{
            headerShown: false,
            tabBarIcon: (props) => (
              <Ionicons name="list" color={props.color} size={props.size} />
            ),
          }}
        />
        <Tabs.Screen
          name={CREATE_FORTUNE}
          component={CreateFortuneScreen}
          options={{
            headerShown: false,
            tabBarIcon: (props) => (
              <Ionicons name="text" color={props.color} size={props.size} />
            ),
          }}
        />
      </Tabs.Navigator>
    </>
  );
};

export default TabNavigation;
