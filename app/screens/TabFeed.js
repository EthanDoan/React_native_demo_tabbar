import React, { Component } from 'react';
import { View, Button, TouchableOpacity, Image, StyleSheet, ActivityIndicator, Text } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';
import * as Icons from '../constants/icons';
import renderIf from '../ulti/renderIf'

export default class TabFeed extends Component {
    static navigationOptions = {
        tabBarLabel: 'Feed',
        tabBarIcon: () => (
            <Image
                style={{ width: 27, height: 27, resizeMode: 'contain' }}
                source={Icons.SOURCE_ICON['icon_home']}
                resizeMode='contain'
            >
            </Image>
        )
    }

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            // dataSource: new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 != r2 }),
            linkUrl: 'https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=c72f6bd6cb7bc1eac9d46c51aa340481&photoset_id=72157684962879760&user_id=136860488@N03&extras=url_l&format=json&nojsoncallback=1'
        }
    }

    componentDidMount() {
        fetch(this.state.linkUrl)
            .then((response) => response.json())
            .then((responseJson) => {
                data = responseJson
                console.log(data.photoset.photo)
                this.setState({
                    // dataSource: this.state.dataSource.cloneWithRows(data.photoset.photo),//parse array from json
                    isLoading: false
                })
            })
    }

    render() {
        return (
            <View style={styles.containerView}>

                {/* use internal function */}
                {renderWithCondition(this.state.isLoading,
                    <ActivityIndicator
                    color='red'
                    size='large'
                    style={styles.activityIndicator} />
                )}

                {/* use external function */}
                {/* {renderIf(!this.state.isLoading,
                    <ListView
                        dataSource={this.state.dataSource}
                        renderRow={
                            (rowData) =>
                                <View style={styles.imageContainer}>
                                    <Image
                                        source={{ uri: rowData.url_l }}
                                        style={styles.imageView}>
                                    </Image>
                                </View>
                        }
                    >
                    </ListView>
                )} */}
            </View>
        );
    }
}

renderWithCondition = (condition, content) => {
    if (condition) {
        return content
    } else {
        return null
    }
} 

const Greeting = ({ name }) => (
    <View>
      <Text>Hello, {name}!</Text>
    </View>
)

const styles = StyleSheet.create({
    containerView: {
        flex: 1,
        backgroundColor: 'white'
    },
    activityIndicator: {
        flex: 1,
        height: 80,
        justifyContent: 'center',
        alignItems: 'center'
    },

    imageContainer: {
        padding: 5,
        height: 300
    },

    imageView: {
        flex: 1,
        resizeMode: 'cover',
        marginLeft: 5,
        marginRight: 5
    }
})