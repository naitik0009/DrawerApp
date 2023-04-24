import 'react-native-gesture-handler';
import {
  SafeAreaView,
  Text,
  AppRegistry,
  View,
  Button,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/FontAwesome';

const Stack = createDrawerNavigator();
const options = {
  headerStyle:{backgroundColor:'#3c0a6b'},
  headerTintColor:'white',
  drawerActiveBackgroundColor:'#f0e1ff',
  drawerActiveTintColor:'#3c0a6b',
  drawerStyle:{backgroundColor:'#ccc'},
};


function App(){
  const HelloScreen = ()=>{
    return (<View><Text>Hello World</Text></View>);
  };
  const UserScreen = ({navigation})=>{
    return (
    <View>
      <Text>Hello To the user screen</Text>
      <Button title='toogle drawer' onPress={()=>navigation.toggleDrawer()}/>
    </View>);
  };
  return (
<>
<NavigationContainer>
<Stack.Navigator>
  <Stack.Screen options={{...options,drawerIcon:({color,size})=><Icon name='home' size={size} color={color}/> }} name={'Home'} component={HelloScreen}/>

    <Stack.Screen options={{...options,drawerIcon:({color,size})=><Icon name='rocket' size={size} color={color}/>}} name={'User'} component={UserScreen}/>
</Stack.Navigator>
</NavigationContainer>
</>
  );
}




export default App;
AppRegistry.registerComponent('todoDrawerApp', () => App);

