import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './Tabs/TabNavigator';

export default function App() {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
}
