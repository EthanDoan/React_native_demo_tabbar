import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, ActivityIndicator } from 'react-native';


export default class ImageList extends Component {

    static navigationOptions = {
        title: 'Image List'
    };

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            // dataSource: new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 != r2 }),
            link: 'http://hardeepcoder.com/laravel/easyshop/api/products'
        }
    }

    componentDidMount() {
        fetch(this.state.link)
            .then((response) => response.json())
            .then((responseJson) => {
                data = responseJson;
                this.setState({
                    // dataSource: this.state.dataSource.cloneWithRows(data),
                    isLoading: false
                })
            })
            .catch((error) => {
                console.log(error);
            });
    }

    render() {
        // const { params } = this.props.navigation.state;
        if (this.state.isLoading) {
            return (
                <View style={{flex: 1}}>
                    <ActivityIndicator style={{flex: 1, justifyContent: 'center'}} />
                </View>
            );
        }

        return (
            <View style={styles.container}>
                {/* <ListView
                    dataSource={this.state.dataSource}
                    renderRow={(rowData) =>
                        <View>
                            <Text style={styles.elementName}>
                                {rowData.pro_name}
                            </Text>
                            <Image
                                style={{ width: '100%', height: 250 }}
                                source={{ uri: rowData.pro_img }}
                            />
                            <Text>
                                Price: {rowData.pro_price} VND
                            </Text>
                        </View>
                    }
                >
                </ListView> */}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingLeft: 10,
        paddingRight: 10,
        marginLeft: 10,
        marginRight: 10
    },

    elementName: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'red',
        marginTop: 20,
        textAlign: 'center'
    }

});