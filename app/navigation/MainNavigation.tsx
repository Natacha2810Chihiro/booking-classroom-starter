import { createStackNavigator } from "@react-navigation/stack";
import SigninScreen from "../screen/SigninScreen";
import TabNavigation from "./TabNavigation";
import ReservationsScreen from "../screen/ReservationsScreen";
import { NavigationContainer } from "@react-navigation/native";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";  

const MainNavigation = () => {
  const { user } = useContext(AuthContext) || {};  

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {!user ? (
          <Stack.Screen name="Signin" component={SigninScreen} />
        ) : (
          <>
            <Stack.Screen name="Tab" component={TabNavigation} />
            <Stack.Screen name="Reservations" component={ReservationsScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;
