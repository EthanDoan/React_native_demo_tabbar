import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';

//import screens
import Home from './screens/Home'
import Profile from './screens/Profile'
import ImageList from './screens/ImageList'
import MainTabNavigator from './screens/MainTabNavigator'


export default class HelloWorld extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <AppStack />
    );
  }
}

// //IMPORTANT: this stack navigator must be defined after screens definition
export const AppStack = StackNavigator({
  MainScreen: { screen: MainTabNavigator },
  Home: { screen: Home },
  Profile: { screen: Profile },
  ImageList: { screen: ImageList }
});





//LayoutAnimation
// const { UIManager } = NativeModules;
// UIManager.setLayoutAnimationEnabledExperimental &&
//   UIManager.setLayoutAnimationEnabledExperimental(true);

// export default class App extends React.Component {
//   state = {
//     w: 100,
//     h: 100,
//   };

//   _onPress = () => {
//     // Animate the update
//     LayoutAnimation.spring();
//     this.setState({w: this.state.w + 15, h: this.state.h + 15})
//   }

//   render() {
//     return (
//       <View style={styles.container}>
//         <View style={[styles.box, {width: this.state.w, height: this.state.h}]} />
//         <TouchableOpacity onPress={this._onPress}>
//           <View style={styles.button}>
//             <Text style={styles.buttonText}>Press me!</Text>
//           </View>
//         </TouchableOpacity>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   box: {
//     width: 200,
//     height: 200,
//     backgroundColor: 'red',
//   },
//   button: {
//     backgroundColor: 'black',
//     paddingHorizontal: 20,
//     paddingVertical: 15,
//     marginTop: 15,
//   },
//   buttonText: {
//     color: '#fff',
//     fontWeight: 'bold',
//   },
// });



//fade in animation
// class FadeInView extends React.Component {
//   state = {
//     fadeAnim: new Animated.Value(0),  // Initial value for opacity: 0
//   }

//   componentDidMount() {
//     Animated.timing(                  // Animate over time
//       this.state.fadeAnim,            // The animated value to drive
//       {
//         toValue: 1,                   // Animate to opacity: 1 (opaque)
//         duration: 1000,              // Make it take a while
//       }
//     ).start();                        // Starts the animation
//   }

//   render() {
//     let { fadeAnim } = this.state;

//     return (
//       <Animated.View                 // Special animatable View
//         style={{
//           ...this.props.style,
//           opacity: fadeAnim,         // Bind opacity to animated value
//         }}
//       >
//         {this.props.children}
//       </Animated.View>
//     );
//   }
// }

// // You can then use your `FadeInView` in place of a `View` in your components:
// export default class App extends React.Component {
//   render() {
//     return (
//       <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//         <FadeInView style={{width: 250, height: 50, backgroundColor: 'powderblue'}}>
//           <Text style={{fontSize: 28, textAlign: 'center', margin: 10}}>Fading in</Text>
//         </FadeInView>
//       </View>
//     )
//   }
// }


//FETCH
// export default class Movies extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isLoading: true
//     }
//   }

//   componentDidMount() {
//     return fetch('https://facebook.github.io/react-native/movies.json')
//       .then((response) => response.json())
//       .then((responseJson) => {
//         let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
//         this.setState({
//           isLoading: false,
//           dataSource: ds.cloneWithRows(responseJson.movies),//'movies' is key in ds
//         }, function() {
//           // do something with new state
//           // console.log(responseJson);
//           // console.log('this is title'+responseJson.title);
//         });
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   }

//   render() {
//     if (this.state.isLoading) {
//       return (
//         <View style={{flex: 1, paddingTop: 20}}>
//           <ActivityIndicator />
//         </View>
//       );
//     }

//     return (
//       <View style={{flex: 1, paddingTop: 20}}>
//         <ListView
//           dataSource={this.state.dataSource}
//           renderRow={(rowData) => <Text>{rowData.title}, {rowData.releaseYear}</Text>}
//         />
//       </View>
//     );
//   }
// }

// AppRegistry.registerComponent('HelloWorld_native', () => Movies);



// export default class SectionListBasics extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <SectionList
//           sections={[
//             {title: 'D', data: ['Devin']},
//             {title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
//           ]}
//           renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
//           renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
//           // keyExtractor={(item, index) => index}
//         />
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//    flex: 1,
//    paddingTop: 22
//   },
//   sectionHeader: {
//     paddingTop: 2,
//     paddingLeft: 10,
//     paddingRight: 10,
//     paddingBottom: 2,
//     fontSize: 14,
//     fontWeight: 'bold',
//     backgroundColor: 'rgba(247,247,247,1.0)',
//   },
//   item: {
//     padding: 10,
//     fontSize: 18,
//     height: 44,
//   },
// })


// //FlatList
// export default class SectionListBasics extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <SectionList
//           sections={[
//             {title: 'D', data: ['Devin']},
//             {title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
//           ]}
//           renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
//           renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
//           keyExtractor={(item, index) => index}
//         />
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//    flex: 1,
//    paddingTop: 22
//   },
//   sectionHeader: {
//     paddingTop: 2,
//     paddingLeft: 10,
//     paddingRight: 10,
//     paddingBottom: 2,
//     fontSize: 14,
//     fontWeight: 'bold',
//     backgroundColor: 'rgba(247,247,247,1.0)',
//   },
//   item: {
//     padding: 10,
//     fontSize: 18,
//     height: 44,
//   },
// })


// //FlatList
// export default class FlatListBasics extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <FlatList
//           data={[
//             {key: 'Devin'},
//             {key: 'Jackson'},
//             {key: 'James'},
//             {key: 'Joel'},
//             {key: 'John'},
//             {key: 'Jillian'},
//             {key: 'Jimmy'},
//             {key: 'Julie'},
//           ]}
//           renderItem={({item}) => 
//             <Text style={styles.item}>{item.key}</Text>
//           }
//         />
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//    flex: 1,
//    paddingTop: 22
//   },
//   item: {
//     padding: 10,
//     fontSize: 18,
//     height: 44,
//   },
// })

//SCrollView
// export default class IScrolledDownAndWhatHappenedNextShockedMe extends Component {
//   render() {
//     return (
//       <ScrollView>
//         <Text style={{ fontSize: 96 }}>Scroll me plz</Text>
//         <Text style={{ fontSize: 96 }}>If you like</Text>
//         <Text style={{ fontSize: 80 }}>React Native</Text>
//         <Text style={{ fontSize: 96 }}>Scroll me plz</Text>
//         <Text style={{ fontSize: 96 }}>If you like</Text>
//         <Text style={{ fontSize: 80 }}>React Native</Text>
//       </ScrollView>
//     );
//   }
// }


//make custom button with TouchableHighlight
// export default class Touchables extends Component {

//   _onPressButton() {
//     Alert.alert('You tapped the button!')
//   }

//   _onLongPressButton() {
//     Alert.alert('You long-pressed the button!')
//   }

//   render() {
//     return (
//       <View style={styles.container}>
//         <TouchableHighlight onPress={this._onPressButton} underlayColor="white">
//           <View style={styles.button}>
//             <Text style={styles.buttonText}>TouchableHighlight</Text>
//           </View>
//         </TouchableHighlight>
//         <TouchableOpacity onPress={this._onPressButton}>
//           <View style={styles.button}>
//             <Text style={styles.buttonText}>TouchableOpacity</Text>
//           </View>
//         </TouchableOpacity>
//         <TouchableNativeFeedback
//             onPress={this._onPressButton}
//             background={Platform.OS === 'android' ? TouchableNativeFeedback.SelectableBackground() : ''}>
//           <View style={styles.button}>
//             <Text style={styles.buttonText}>TouchableNativeFeedback</Text>
//           </View>
//         </TouchableNativeFeedback>
//         <TouchableWithoutFeedback
//             onPress={this._onPressButton}
//             >
//           <View style={styles.button}>
//             <Text style={styles.buttonText}>TouchableWithoutFeedback</Text>
//           </View>
//         </TouchableWithoutFeedback>
//         <TouchableHighlight onPress={this._onPressButton} onLongPress={this._onLongPressButton} underlayColor="white">
//           <View style={styles.button}>
//             <Text style={styles.buttonText}>Touchable with Long Press</Text>
//           </View>
//         </TouchableHighlight>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     paddingTop: 60,
//     alignItems: 'center'
//   },
//   button: {
//     marginBottom: 30,
//     width: 260,
//     alignItems: 'center',
//     backgroundColor: '#2196F3'
//   },
//   buttonText: {
//     padding: 20,
//     color: 'white'
//   }
// })


/*
export default class PizzaTranslator extends Component {

  constructor(props) {
    super(props);
    this.state = { text: '' };
  }

  render() {
    return (
      <View style={styles.cotainer}>
        <TextInput
          style={{ height: 40 }}
          placeholder="Type here to translate!"
          onChangeText={(text) => this.setState({ text })}
        />

        <Text style={{ padding: 10, fontSize: 42 }}>
          {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
        </Text>

        <View 
          style={styles.buttonContainer}
        >
          <Button
            onPress={() => {
              Alert.alert('you tapped the button');
            }}
            title="Press Me"
            color="white"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  cotainer: {
    flex: 1,
    backgroundColor: 'skyblue',
  },

  buttonContainer: {
    marginLeft: 100,
    marginRight: 100,
    borderRadius: 5,
    borderColor: 'green',
    backgroundColor: 'green',
    borderWidth: 4,
  },
})
*/

//For stretch to have an effect, children must not have a fixed dimension 
//along the secondary axis. In the following example, setting alignItems: 
//stretch does nothing until the width: 50 is removed from the children.
// export default class AlignItemsBasics extends Component {
//   render() {
//     return (
//       // Try setting `alignItems` to 'flex-start'
//       // Try setting `justifyContent` to `flex-end`.
//       // Try setting `flexDirection` to `row`.
//       <View style={{
//         flex: 1,
//         flexDirection: 'column',
//         justifyContent: 'center',
//         alignItems: 'stretch',
//       }}>
//         <View style={{ height: 50, backgroundColor: 'powderblue'}} />
//         <View style={{ height: 50, backgroundColor: 'skyblue'}} />
//         <View style={{ height: 50, backgroundColor: 'steelblue'}} />
//       </View>
//     );
//   }
// };


// export default class JustifyContentBasics extends Component {
//   render() {
//     return (
//       // Try setting `justifyContent` to `center`.
//       // Try setting `flexDirection` to `row`.
//       <View style={{
//         flex: 1,
//         flexDirection: 'row',
//         justifyContent: 'center'
//       }}>
//         <View style={{ width: 50, height: 50, backgroundColor: 'powderblue' }} />
//         <View style={{ width: 50, height: 50, backgroundColor: 'skyblue' }} />
//         <View style={{ width: 50, height: 50, backgroundColor: 'steelblue' }} />
//       </View>
//     );
//   }
// }

// export default class FlexDirectionBasic extends Component {
//   render() {
//     return (
//       <View style={{ flex: 1, flexDirection: 'column' }}>
//         <View style={{ flex: 2, backgroundColor: 'powderblue' }} />
//         <View style={{ flex: 3, backgroundColor: 'skyblue' }} />
//         <View style={{ flex: 5, backgroundColor: 'steelblue' }} />
//       </View>
//     );
//   }
// }


// export default class FlexDimensionBasics extends Component {
//   render() {
//     return(
//       <View style={{ flex: 1}}>
//       <View style={{ flex: 1, backgroundColor: 'powderblue'}}/>
//       <View style={{ flex: 2, backgroundColor: 'skyblue'}}/>
//       <View style={{ flex: 3, backgroundColor: 'steelblue'}}/>
//       </View>
//     );
//   }
// }

// export default class FiexedDimensionBasics extends Component {
//   render() {
//     return(
//       <View>
//       <View style={{ width: 50, height: 50, backgroundColor: 'powderblue'}}/>
//       <View style={{ width: 100, height: 100, backgroundColor: 'skyblue'}}/>
//       <View style={{ width: 150, height: 150, backgroundColor: 'steelblue'}}/>
//       </View>
//     );
//   }
// }

/*
export default class LotsOfStyle extends Component {
  render() {
    return(
      <View>
        <Text style={styles.bigblue}>big blue</Text>
        <Text style={styles.red}>red just red</Text>
        <Text style={[styles.bigblue, styles.red]}>big blue then red</Text>
        <Text style={[styles.red, styles.bigblue]}>red then bigblue</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bigblue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30
  },
  red: {
    color: 'red'
  }
});
*/

/*
class Blink extends Component {
  constructor(props) {
    super(props);
    this.state = {showText: true};

    setInterval(() => {
      this.setState(previousState => {
        return { showText: !previousState.showText };
      });
    }, 1000);
  }

  render () {
    let display = this.state.showText ? this.props.text : ' ';
    return (
      <Text>{display}</Text>
    );
  }
}


export default class BlinkApp extends Component {
  render () {
    return (
      <View>
        <Blink text='I love you blink' />
        <Blink text='Yes blinking is so great' />
        <Blink text='Why did they ever take this out of HTML' />
        <Blink text='Look at me look at me look at me' />
      </View>
    );
  }
}
*/








/*
// class Greeting extends Component {
//   render () {
//     return (
//       <Text>Hello {this.props.name}!</Text>
//       );
//   }
// }

// export default class LotsOfGreeting extends Component {
//   render() {
//     return (
//       <View style={{ alignItems: 'center'}}>
//         <Greeting name='Phuong'/>
//         <Greeting name='Ngoc'/>
//         <Greeting name='Ken'/>
//       </View>
//     );
//   }
// }
*/



/*
// export default class Bananas extends Component {
//   render () {
//     let pic = {
//       uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
//     };

//     return (
//       <Image source={pic} style={{ width: 375, height: 375*9/16}}/>
//       );
//   }
// }
*/