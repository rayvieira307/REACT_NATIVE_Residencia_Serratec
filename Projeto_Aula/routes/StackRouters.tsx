import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login } from '../src/screens/Login';
import { Home } from '../src/screens/Home';
import { Profile } from '../src/screens/Profile';
import { Settings } from '../Settings';
import { TabRouters } from './BottomTabs';

const Stack = createNativeStackNavigator();

export const StackRouters = () => {

  return (
    <Stack.Navigator initialRouteName='Login'>
      <Stack.Screen name="StackLogin" component={Login} options={{ headerShown: false }} />
      <Stack.Screen name="StackHome" component={TabRouters} options={{ headerShown: false }} />
      {/* <Stack.Screen name="Profile" component={Profile} /> */}
      {/* <Stack.Screen name="Settings" component={Settings} /> */}
    </Stack.Navigator>
  )
}