import 'react-native-gesture-handler';
import React, {useState} from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

function HomeScreen(props) {
  return (
  <View style={{ flex: 1, alignItems: 'center', 
  justifyContent: 'center'}}>
  <Text>Home Screen</Text>
  <Button 
    title="Laps ran on track"
    onPress={() => props.navigation.navigate('Track')}
  />
  <Button 
    title="Basketball shots made"
    onPress={() => props.navigation.navigate('Basket')}
  />
  </View>
  );
}

function TrackScreen(props){
  const [days, setDays] = useState(0);
  
    return(
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Laps ran on track: {days}</Text>
            <Button title="Ran a Lap"
            onPress={() => setDays(days + 1)}/>
            <Button title="Reset Counter" 
            onPress={() => setDays(0)}/>
            <Button
        title="Back to Home"
        onPress={() => props.navigation.navigate('Home')}
      />
        </View>
    );
}

class BasketScreen extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
            days: 0
        };
    }

render() {
  
    return(
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Basketball shots made: {this.state.days}</Text>
            <Button title="Basket Point"
            onPress={() => this.setState({days: this.state.days + 1})}/>
            <Button title="Reset Counter" onPress={() => this.setState({days: 0})}/>
            <Button
        title="Back to Home"
        onPress={() => this.props.navigation.navigate('Home')}
      />
        </View>
    );
}
}

const Drawer = createDrawerNavigator();

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home"component={HomeScreen}/>
        <Drawer.Screen name="Track" component={TrackScreen}/>
        <Drawer.Screen name="Basket" component={BasketScreen}/>
      </Drawer.Navigator>
   </NavigationContainer>
  );
}

export default App;