import React, { Component } from 'react';
import { TouchableOpacity, Image, Dimensions, Platform } from 'react-native';
import { TabNavigator } from 'react-navigation';

import TabFeed from './TabFeed'
import TabEvent from './TabEvent'
import TabSing from './TabSing'
import TabNotification from './TabNotification'
import TabProfile from './TabProfile'
import * as Icons from '../constants/icons'

var width = Dimensions.get('window').width

export default class MainTabNavigator extends Component {

    constructor(props) {
        super(props);
    }

    static navigationOptions = {
        title: 'Main Screen',
        headerLeft: 
            <TouchableOpacity>
                <Image 
                    style={{ width: width/10, height: 24, resizeMode: 'contain' }}
                    resizeMode='contain'
                    source={Icons.SOURCE_ICON['icon_menu']}
                >
                </Image>
            </TouchableOpacity>,
        headerTintColor: 'purple',
        headerStyle: {
            backgroundColor: 'white',
        },
        headerTitleStyle: {
            color: 'navy'
        }
    }

    render() {
        return(
            <MainTabScreen />
        );
    }
}

export const MainTabScreen = TabNavigator({
    TabFeed: { screen: TabFeed },
    TabEvent: { screen: TabEvent },
    TabSing: { screen: TabSing },
    TabNotification: { screen: TabNotification },
    TabProfile: { screen: TabProfile }
}, {
    // headerMode: 'none',
    tabBarPosition: 'bottom', // So your Android tabs go bottom
    swipeEnabled: true,
    tabBarOptions: {
        // borderBottomWidth: 0,
        activeTintColor: 'white',  // Color of tab when pressed
        activeBackgroundColor: 'white',
        inactiveTintColor: 'black', // Color of tab when not pressed
        inactiveBackgroundColor: 'green',
        showIcon: 'true', // Shows an icon for both iOS and Android
        // showLabel: (Platform.OS !== 'android'), //No label for Android
        labelStyle: {
          fontSize: 12,
          fontWeight: '600',
        //   padding: 10
        },
        style: {
        //   backgroundColor: '#fff', // Makes Android tab bar white instead of standard blue
          height: (Platform.OS === 'ios') ? 48 : 54 // I didn't use this in my app, so the numbers may be off. 
        },
        indicatorStyle: {
            backgroundColor: 'white',
            height: 0
        }
      }
}
);
