import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image,Button, Alert,TextInput } from 'react-native';
import { createAppContainer} from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack'


class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Button
        title="Go to calc"
        onPress={() =>
          navigate('Compound')
        }
      />
    );
  }
}

class CompoundScreen extends React.Component{
  constructor(props){
    super(props);
    this.state = { principal: '', rate: '', compoundedt: '', years: '',  result: 0.0}
  }


  //IMPLEMENT THE CALCULATOR FUNCTION HERE
  compCalc = () => {
    const { principal, rate, compoundedt, years} = this.state;

    var A = (Number(compoundedt)* Number(years));
    var B = Number(rate) / Number(compoundedt);

    this.setState({
      result: Math.pow((Number(principal)*(1 + B)), A)
    })
  }

  static navigationOptions = {
    title: 'Compound Interest Calculator',
  };  
  render(){
    const {navigate} = this.props.navigation;
    return (
      <View>
      <Text>
        Initial Investment (Principal):
      </Text>
      <TextInput
          style={{ height: 30, borderColor: 'gray', borderWidth: 1 }}
          placeholder="Enter amount of money available to invest currently"  
          keyboardType={'numeric'}
          value = {this.state.principal}
          onChangeText={(principal) => this.setState({principal})}
      /> 

      <Text>
       How many years you plan on investing:
      </Text>
      <TextInput
          placeholder="Enter number of years"  
          style={styles.TextInputStyle}  
          keyboardType={'numeric'}
          onChangeText={(years) => this.setState({years})}
      />  

      <Text>
        Interest Rate:
      </Text>
      <TextInput
          placeholder="Enter the interest rate"  
          style={styles.TextInputStyle}  
          keyboardType={'numeric'}
          value = {this.state.rate}
          onChangeText={(rate) => this.setState({rate})}
      />  

      <Text>
        Number of times interest is compounded per year:
      </Text>
      <TextInput
          placeholder = "Enter number of times per year"  
          style={styles.TextInputStyle}  
          keyboardType={'numeric'}
          value = {this.state.compoundedt}
          onChangeText={(compoundedt) => this.setState({compoundedt})}
      />  

      <Button
          title = "Calculate"
          onPress={this.compCalc}
      />
      <Text>
        The answer is : {`Result ${this.state.result}`}
      </Text>

      </View>
    );
    }
}

class InfoScreen extends React.Component{

}


const root = createStackNavigator({
  Home: { screen: HomeScreen },
  Compound: { screen: CompoundScreen },
});

const AppContainer = createAppContainer(root);

export default class App extends React.Component{
  render(){
    return <AppContainer/>;
  }
}

const styles = StyleSheet.create({
  title: {
    color: 'grey',
    fontWeight: 'bold',
    fontSize: 30,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },

  welcome: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },

  TextInputStyle: {
    height: 30, 
    borderColor: 'gray', 
    borderWidth: 1, 
  },


});
