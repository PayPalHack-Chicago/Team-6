import React, {Component}from 'react';
import { Button, Platform, Image, View, Text,TouchableOpacity, StyleSheet, Alert,TextInput, FlatList} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


class LogoTitle extends React.Component {
  render() {
    return (
      <Text style ={{flex: 1,fontSize:20,fontWeight: 'bold',textAlign: 'left',color:'#333333'}}>FIN U</Text>
    );
  }
}



class Title extends React.Component {
  render() {
    return (
      <Image source={{uri: 'https://img.icons8.com/cotton/64/000000/receive-euro.png'}}
        style={{ width: 45, height: 46 }}/>
    );
  }
}

class HomeScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: <LogoTitle />,
      headerLeft: <Title/>,
    };
  };


  render() {
    return (
      <View style={{ flex: 1,justifyContent:'space-around'}}>
      <View style={{flex: 1, alignItems: 'center',justifyContent:'center'}}>
        <Text style ={{fontSize:35,fontWeight: 'bold',color:'#333333',textAlign: 'center'}}>Premier College Wealth Engine.</Text>
        <Text style ={{fontSize:18,textAlign:'center'}}>      </Text>
        <Text style ={{fontSize:15,textAlign: 'center'}}>Learning a couple facts about financial literacy a day will make you a master of managing your finances. </Text>
        <Text style ={{fontSize:18,textAlign:'center'}}>      </Text>
        <TouchableOpacity onPress = {() => {this.props.navigation.navigate('MyModal', {
          itemId: 86,
          otherParam: 'FIN U',
        });}}>
                <View style = {{height: 50,width: 100, backgroundColor: '#54b948', alignItems: 'stretch',
                                justifyContent: 'flex-start', borderRadius: 15}}
                       >
                    <Text style = {{flex: 1,color: '#FFFFFF',textAlign: 'center',textAlignVertical:'center'}}>Why FIN U?</Text>
                </View>
          </TouchableOpacity>
      </View>
      <Text style ={{fontSize:18,textAlign:'center'}}>      </Text>
      <Text style ={{fontSize:18,textAlign:'center'}}>      </Text>
  <View style={{ flex: 1,alignItems:'center', justifyContent: 'center', flexDirection:'row', justifyContent:'space-around'}}>
        <TouchableOpacity onPress = {() => {this.props.navigation.navigate('Details', {
              itemId: 86,
              otherParam: 'Compound Intrest',
            });}}>
                <View style = {{flex:1, height: 20,width:100, backgroundColor: '#54b948', borderRadius: 7}}>
                    <Text style = {{flex: 1,alignSelf:'center',color: 'white',textAlignVertical: 'center',textAlign:'center'}}>Compound Intrest</Text>
                </View>
          </TouchableOpacity>
          <TouchableOpacity onPress = {() => {this.props.navigation.navigate('Extras', {
                itemId: 86,
                otherParam: 'More formulas',
              });}}>
                  <View style = {{flex:2, height: 150,width:100, backgroundColor: '#54b948', borderRadius: 7}}>
                      <Text style = {{flex: 1,alignSelf:'center',color: 'white',textAlignVertical: 'center',textAlign:'center'}}>M1 Formulas</Text>
                  </View>
            </TouchableOpacity>
              <TouchableOpacity onPress = {() => {this.props.navigation.navigate('Extras2', {//change
                itemId: 86,
                otherParam: 'Extras',
              });}}>
                      <View style = {{flex:2,height: 150,width:100, backgroundColor: '#54b948', alignItems: 'stretch',
                                      justifyContent: 'flex-start', borderRadius: 7}}
                             >
                          <Text style = {{flex: 1,color: 'white',textAlign: 'center',textAlignVertical:'center'}}>College student Tips</Text>
                      </View>
                </TouchableOpacity>

    </View>
    <Text style ={{fontSize:18,textAlign:'center'}}>      </Text>
    <Text style ={{fontSize:18,textAlign:'center'}}>      </Text>
    <Text style ={{fontSize:18,textAlign:'center'}}>      </Text>
    <Text style ={{fontSize:18,textAlign:'center'}}>      </Text>
    <Text style = {{color: '#0B0B0B',textAlign: 'center'}}>made with care and love by: Group 6</Text>
      </View>
    );
  }
}
class ModalScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style ={{fontSize:18,textAlign:'center'}}>Financial literally is a nessecity coming</Text>
        <Text style ={{fontSize:18,textAlign:'center'}}>out college. Learning financial literacy is an important skill that you can apply</Text>
        <Text style ={{fontSize:18,textAlign:'center'}}>to your daily life so why not master it with Fin U</Text>
        <Button
          onPress={() => this.props.navigation.goBack()}
          title="I know why I should use FIN U"
        />
        <Text style ={{fontSize:18,textAlign:'center',fontWeight:'bold'}}>Making more money doesnt outgrow bad money habits.</Text>
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
      <View style={{flex: 1, flexDirection: 'column', alignItems: 'stretch', justifyContent: 'center'}}>
      <Text style ={{fontSize:15,textAlign: 'center'}}>I will give you a quick overview of how very important functions </Text>
      <Text style ={{fontSize:15,textAlign: 'center'}}>Compound Intrest:</Text>
      <Text style ={{fontSize:15,textAlign: 'center'}}>P=(1+r/n)^nt </Text>
      <Text style ={{fontSize:15,textAlign: 'center'}}>t= time in years, r= rate, n= times compounded in a year</Text>
      <Text style ={{fontSize:15,textAlign: 'center',textAlignVertical:'center'}}>Compound Intrest can be used for: savings&deposits/Retirement Savings(401K)</Text>
      <Text style ={{fontSize:15,textAlign: 'center'}}></Text>
      <Image source={{uri: 'https://www.thecalculatorsite.com/images/articles/20160630-compound-interest-diagram.jpg'}}
        style={{ width: 350, height: 200,alignSelf:'center' }}/>
      <TouchableOpacity onPress = {() => {this.props.navigation.navigate('Calculator', {
        itemId: 86,
        otherParam: 'Compound Intrest: Calculator',
      });}}>
              <View style = {{height: 100, backgroundColor: '#D96704', alignItems: 'stretch',
                              justifyContent: 'flex-start', borderRadius: 15}}
                     >
                  <Text style = {{flex: 1,fontSize: 18,color: 'white',textAlign: 'center',textAlignVertical: 'center'}}>Compound Intrest: Calculator</Text>
              </View>
        </TouchableOpacity>
      </View>
    );
  }
}

class Details3Screen extends React.Component {
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
      <Text style ={{fontSize:18,textAlign: 'center',fontWeight:'bold',textAlignVertical:'center'}}>If you are really intrested in managing your finances</Text>
      <Text style ={{fontSize:15,textAlign: 'center',textAlignVertical:'center'}}>A fincancial advisor recommends:</Text>
      <Text style ={{fontSize:15,textAlign: 'center',textAlignVertical:'center'}}>Taking a look at</Text>
      <Text style ={{fontSize:15,textAlign: 'center',textAlignVertical:'center'}}>Philips Curve:</Text>
      <View style={{flex: 1, flexDirection: 'row',justifyContent:'space-around'}}>
      <Image source={{uri: 'https://sites.google.com/a/georgetown.edu/nigeriamacro/_/rsrc/1385337397879/phillips/Screen%20Shot%202013-11-24%20at%206.55.51%20PM.png'}}
        style={{ width: 150, height: 110 }}/>
        <Image source={{uri: 'https://s3-eu-west-1.amazonaws.com/tutor2u-media/subjects/economics/pc_basic_curve.jpg?mtime=20180213123044'}}
          style={{ width: 150, height: 110 }}/>
      </View>
      <Text style ={{fontSize:18,fontWeight:'bold',textAlign: 'center',textAlignVertical:'center'}}>10-Year Treasury Constant Maturity Rate</Text>
      <Image source={{uri: 'https://fred.stlouisfed.org/graph/fredgraph.png?g=p9aN'}}
        style={{ width: 150, height: 110,alignSelf:'center' }}/>
      <Text style ={{fontSize:15,textAlign: 'center',textAlignVertical:'center'}}>Formula of Actuarial Method Unearned Intrest Loan</Text>
      <Text style ={{fontSize:15,textAlign: 'center',textAlignVertical:'center'}}>U=(npV)/(100tV)</Text>
      <Text style ={{fontSize:15,textAlign: 'center',textAlignVertical:'center'}}>U= Unearned intrest, p=monthly payments, n=number of remaning monthly payments, V= the value of APR</Text>
      <Text style ={{fontSize:18,textAlign: 'center',fontWeight:'bold',textAlignVertical:'center'}}>Amortization is another important Concept as it allows you to spread out the payments of a loan.</Text>
      <Text style ={{fontSize:15,textAlign: 'center',textAlignVertical:'center'}}>Monthly Payment: (P*(r/n))/(1-(1+(r/n)^-n*t))</Text>
      <Text style ={{fontSize:15,textAlign: 'center',textAlignVertical:'center'}}>P=Principal,r=intrest rate,t=number of periods,n=payments per period</Text>
      <Text style ={{fontSize:15,textAlign: 'center',textAlignVertical:'center'}}>Cash Flow: Income - Expenses(NI)</Text>
      <Text style ={{fontSize:15,textAlign: 'center',textAlignVertical:'center'}}> </Text>
      </View>
    );
  }
}

class Details4Screen extends React.Component {
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
      <View style={{flex: 1, flexDirection: 'column', alignItems: 'stretch',justifyContent: 'center'}}>
      <Text style ={{fontSize:18,textAlign: 'center',fontWeight:'bold',textAlignVertical:'center'}}>So since our targetted audience is college students we might as well include tips on how to save money while at university.</Text>
      <View style={{alignItems: 'center'}}>
      <FlatList
          data={[
            {key: '•  Know where your money goes'},
            {key: '   '},
            {key: '•  Try to save by not buying textbooks unless your professor requires you to.'},
            {key: '   '},
            {key: '•  Think about how you are going to repay your loans.'},
            {key: '   '},
            {key: '•  Debt isnt nessecary bad- managing debt badly is bad.'},
            {key: '   '},
            {key: '•  Build credit by using credit cards or paying loans back on time.'},
            {key: '•  Think of the oppourtunity cost you took by going to college, make sure you have a good time learning.'},
            {key: '   '},
            {key: '•  Dont take out large loans if you dont need them. Subsidized better than Unsubsidized better than Private loans'},
            {key: '   '},
            {key: '•  Look at what your university charges you for in other fees and see if you can can get things waived or reduced such as meals plans.'},
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}/>
      </View>
      <Text style ={{fontSize:13,textAlign: 'center',fontWeight:'bold',textAlignVertical:'center'}}>Tips:Updated Daily and sent as a notification</Text>
      </View>
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
      <View style={{flex: 1, flexDirection: 'column', justifyContent: 'space-between',}}>
      <Text style ={{fontSize:20,textAlign: 'center'}}>
        Initial Investment (Principal):
      </Text>
      <TextInput
          style={{ height: 30, borderColor: 'gray', borderWidth: 1 }}
          placeholder="Enter amount of money available to invest currently"
          keyboardType={'numeric'}
          value = {this.state.principal}
          onChangeText={(principal) => this.setState({principal})}
      />

      <Text style ={{fontSize:20,textAlign: 'center'}}>
       How many years you plan on investing:
      </Text>
      <TextInput
          placeholder="Enter number of years"
          style={styles.TextInputStyle}
          keyboardType={'numeric'}
          onChangeText={(years) => this.setState({years})}
      />

      <Text style ={{fontSize:20,textAlign: 'center'}}>
        Interest Rate:
      </Text>
      <TextInput
          placeholder="Enter the interest rate"
          style={styles.TextInputStyle}
          keyboardType={'numeric'}
          value = {this.state.rate}
          onChangeText={(rate) => this.setState({rate})}
      />

      <Text style ={{fontSize:20,textAlign: 'center'}}>
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
      <Text style ={{fontSize:20,textAlign: 'center'}}>
        The answer is : {`Result ${this.state.result}`}
      </Text>

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
    Extras: {
      screen: Details3Screen,
    },
    Extras2: {
      screen: Details4Screen,
    },
    Calculator:{screen:CompoundScreen,}
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#ffffff',
      },
      headerTintColor: '#D96704',
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

const styles = StyleSheet.create({
    title: {
      color: 'grey',
      fontWeight: 'bold',
      fontSize: 30,
      color: '#333333',
      marginBottom: 5,
    },

  TextInputStyle: {
    height: 30,
    borderColor: 'gray',
    borderWidth: 1,
  },

})
