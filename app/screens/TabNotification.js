import React, { Component } from 'react';
import { View, Button, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';
import * as Icons from '../constants/icons'

export default class TabNotification extends Component {

    static navigationOptions = {
        tabBarLabel: 'Noti',
        tabBarIcon: () => (
            <Image
                style={{ width: 27, height: 27, resizeMode: 'contain' }}
                source={Icons.SOURCE_ICON['icon_notification']}
                resizeMode='contain'
            >
            </Image>
        )
    }

    render() {
        return(
            <View style={{ flex: 1, backgroundColor: 'pink' }}>
                
            </View>
        );
    }
}