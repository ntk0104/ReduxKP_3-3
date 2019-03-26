import React, { Component } from 'react'
import {
    View,
    Text,
    StatusBar,
    TextInput,
    TouchableOpacity
} from 'react-native';
import getTemp from '../api/getTemp'
import { connect } from 'react-redux'
import * as actionCreators from '../redux/actionCreators'

class Main extends Component {

    constructor(props) {
        super(props)
        this.state = {
            cityName: ''
        }
    }

    getWeatherMessage() {
        const { isLoading, error, temp, cityName } = this.props
        if (isLoading) return 'Loading...'
        if (error) return 'Vui lòng thử lại'
        if (!cityName) return 'Vui lòng nhập tên thành phố'
        return `${cityName} đang có nhiệt độ là ${temp}℃`
    }

    getTempByCityName() {
        this.props.startFetchData()
        getTemp(this.state.cityName)
            .then(temp => {
                this.props.fetchDataSuccessfully(this.state.cityName, temp)
            })
            .catch(() => this.props.fetchError())

    }

    render() {
        return (
            <View
                style={{
                    backgroundColor: "yellow",
                    flex: 1,
                    marginTop: 20,
                }}>
                <StatusBar backgroundColor="#ffff" barStyle="dark-content" hidden="false"></StatusBar>
                <View
                    style={{
                        // alignSelf: "stretch",
                        backgroundColor: 'white',
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                        alignSelf: 'stretch',

                    }}>

                    <Text>{this.getWeatherMessage()}</Text>
                    {/* <Text>Nhiệt độ là: 30℃</Text> */}
                    <TextInput
                        style={{ height: 40, borderColor: 'gray', borderWidth: 1, alignSelf: "stretch", margin: 10 }}
                        onChangeText={(text) => this.setState({ cityName: text })}
                        value={this.state.cityName}
                    />
                    <TouchableOpacity
                        onPress={this.getTempByCityName.bind(this)}
                        style={{
                            padding: 10,
                            backgroundColor: 'green'
                        }}>
                        <Text>Lấy nhiệt độ</Text>
                    </TouchableOpacity>

                </View>
            </View>

        );
    }
}

function mapStateToProps(state) {
    return {
        cityName: state.cityName,
        temp: state.temp,
        isLoading: state.isLoading,
        error: state.error
    }

}

export default connect(mapStateToProps, actionCreators)(Main)