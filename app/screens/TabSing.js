import React, { Component } from 'react';
import { View, Image } from 'react-native';
import * as Icons from '../constants/icons'

export default class TabSing extends Component {

    static navigationOptions = {
        tabBarLabel: 'Sing',
        tabBarIcon: () => (
            <Image
                style={{ width: 27, height: 27, resizeMode: 'contain' }}
                source={Icons.SOURCE_ICON['icon_micro']}
                resizeMode='contain'
            >
            </Image>
        )
    }
    
    render() {
        return(
            <View style={{ flex: 1, backgroundColor: 'orange' }}>
                
            </View>
        );
    }
}