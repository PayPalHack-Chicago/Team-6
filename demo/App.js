import React, {Component}from 'react';
import { Button, Platform, Image, View, Text,TouchableOpacity, Stylesheet, Alert,TextInput } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


class LogoTitle extends React.Component {
  render() {
    return (
      <Text style ={{fontSize:20,fontWeight: 'bold',textAlign: 'center'}}>FINLIT.</Text>
    );
  }
}

class Title extends React.Component {
  render() {
    return (
      <Image source={{uri: 'https://img.icons8.com/cotton/64/000000/receive-euro.png'}}
        style={{ width: 45, height: 45 }}/>
    );
  }
}

class HomeScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: <LogoTitle />,
      headerRight: <Title/>,
    };
  };


  render() {
    return (
      <View style={{ flex: 1 }}>
      <View style={{alignItems: 'center',justifyContent:'center'}}>
        <Text style ={{fontSize:20,fontWeight: 'bold',}}>Get to Know money, Before having money.</Text>
        <Image source={{uri: 'https://us.123rf.com/450wm/dolgachov/dolgachov1610/dolgachov161008160/64336794-business-people-success-and-fortune-concept-happy-businessman-with-heap-of-dollar-money-at-office.jpg?ver=6'}}
          style={{ width: 200, height: 100 }}/>
        <TouchableOpacity onPress = {() => {this.props.navigation.navigate('MyModal', {
          itemId: 86,
          otherParam: 'First Details',
        });}}>
                <View style = {{height: 50,width: 100, backgroundColor: '#D96704', alignItems: 'stretch',
                                justifyContent: 'flex-start', borderRadius: 15}}
                       >
                    <Text style = {{color: 'white',textAlign: 'center'}}>Why FINLIT?</Text>
                </View>
          </TouchableOpacity>
      </View>
  <View style={{ flex: 1,alignItems:'center', justifyContent: 'center', flexDirection:'row',alignContent:'stretch', justifyContent:'space-around'}}>
        <TouchableOpacity onPress = {() => {this.props.navigation.navigate('Details', {
              itemId: 86,
              otherParam: 'First Details',
            });}}>
                <View style = {{height: 100, backgroundColor: '#D96704', alignItems: 'stretch',
                                justifyContent: 'flex-start', borderRadius: 15}}
                       >
                    <Text style = {{color: 'white',textAlign: 'center'}}>Compound Intrests: </Text>
                    <Text style = {{color: 'white',textAlign: 'center'}}>Introductory</Text>
                    <Text style = {{color: 'white',textAlign: 'center'}}>&Calculator</Text>
                </View>
          </TouchableOpacity>
          <TouchableOpacity onPress = {() => {this.props.navigation.navigate('Details', {
              itemId: 86,
              otherParam: 'First Details',
            });}}>
                  <View style = {{height: 100, backgroundColor: '#D96704', alignItems: 'stretch',
                                  justifyContent: 'flex-start', borderRadius: 15}}
                         >
                      <Text style = {{color: 'white',textAlign: 'center'}}>what dos u mean</Text>
                  </View>
            </TouchableOpacity>
            <TouchableOpacity onPress = {() => {this.props.navigation.navigate('MyModal', {
              itemId: 86,
              otherParam: 'First Details',
            });}}>
                    <View style = {{height: 100, backgroundColor: '#D96704', alignItems: 'stretch',
                                    justifyContent: 'flex-start', borderRadius: 15}}
                           >
                        <Text style = {{color: 'white',textAlign: 'center'}}>soctoep</Text>
                    </View>
              </TouchableOpacity>
    </View>
      </View>
    );
  }
}
class ModalScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start' }}>
        <Text style ={{fontSize:15,}}>Financial literally is a must coming out of college. You have all these student loans, some people havent ever had a full time job. These people have no idea what to do with money. </Text>
        <Button
          onPress={() => this.props.navigation.goBack()}
          title="I know why I should use FINLIT"
        />
      </View>
    );
  }
}
class DetailsScreen extends React.Component {
  static navigationOptions = ({ navigation, navigationOptions }) => {
    const { params } = navigation.state;

    return {
      title: params ? params.otherParam : 'A Nested Details Screen',
      /* These values are used instead of the shared configuration! */
      headerStyle: {
        backgroundColor: navigationOptions.headerTintColor,
      },
      headerTintColor: navigationOptions.headerStyle.backgroundColor,
    };
  };

  render() {
    /* 2. Read the params from the navigation state */
    const { params } = this.props.navigation.state;
    const itemId = params ? params.itemId : null;
    const otherParam = params ? params.otherParam : null;

    return (
      <View style={{flex: 1, flexDirection: 'column', alignItems: 'stretch',}}>
      <Text style ={{fontSize:15,textAlign: 'center'}}>Many college students know how to take in information at a rapid rate. They are so accustomed to only larning about things that apply to school. </Text>
      <Text style ={{fontSize:15,textAlign: 'center'}}>I will give you a quick overview of how very important functions. </Text>
      <Text style ={{fontSize:15,textAlign: 'center'}}>Compound Intrest </Text>
      <Text style ={{fontSize:15,textAlign: 'center'}}>P=(1+r/n)^nt </Text>
      <Text style ={{fontSize:15,textAlign: 'center'}}>t= time in years, r= rate, n= times Compounded in a year</Text>
      <Text style ={{fontSize:15,textAlign: 'center'}}> </Text>
      <TouchableOpacity onPress = {() => {this.props.navigation.navigate('Calculator', {
        itemId: 86,
        otherParam: 'First Details',
      });}}>
              <View style = {{height: 100, backgroundColor: '#D96704', alignItems: 'stretch',
                              justifyContent: 'flex-start', borderRadius: 15}}
                     >
                  <Text style = {{color: 'white',textAlign: 'center'}}>soctoep</Text>
              </View>
        </TouchableOpacity>
      </View>
    );
  }
}


const RootStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Details: {
      screen: DetailsScreen,
    },
    MyModal: {
      screen: ModalScreen,
    },

  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#00D72E',
      },
      headerTintColor: '#B35808',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
);



const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }

}
