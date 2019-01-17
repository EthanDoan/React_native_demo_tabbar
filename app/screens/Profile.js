import React, { Component } from 'react';
import { View, Button, Image, StyleSheet } from 'react-native';
import * as imgs from '../constants/image';


export default class ProfileScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            switchImage: false
        };
        this._profileButtonPressed = this._profileButtonPressed.bind(this);
    }

    static navigationOptions = {
        title: 'Profile'
    };

    _profileButtonPressed() {
        console.log('profile button pressed');
        this.setState({ switchImage: !this.state.switchImage });
    };

    render() {
        var image1 = imgs.SOURCE_IMAGES['image1'];
        var image2 = imgs.SOURCE_IMAGES['image2'];

        if (this.state.switchImage) {
            var temp = image1;
            image1 = image2;
            image2 = temp;
        }

        return (
            <View style={{ flex: 1 }}>
                <View style={styles.upperImageContainer} >
                    <Image
                        source={image1}
                        style={styles.imageView}
                    >
                    </Image>
                </View>

                <View style={styles.lowerImageContainer}>
                    <Image
                        source={image2}
                        style={styles.imageView}
                    >
                    </Image>
                </View>

                <Button
                    style={styles.myButton}
                    title='Click Me'
                    onPress={this._profileButtonPressed}
                >
                </Button>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    upperImageContainer: {
        flex: 4,
        backgroundColor: 'green'
    },

    lowerImageContainer: {
        flex: 5,
        backgroundColor: 'grey',
    },

    imageView: {
        flex: 1,
        // remove width and height to override fixed static size
        width: null,
        height: null,
        resizeMode: 'contain'
    },

    myButton: {
        color: 'red',
    }
});
