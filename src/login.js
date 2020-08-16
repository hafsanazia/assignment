import React, { Component } from 'react';
import {
    Text,
    View,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    Alert
} from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from './actions';

function mapStateToProps(state) { return { user: state.userReducers.user }; }
function mapDispatchToProps(dispatch) { return bindActionCreators(Actions, dispatch); }


class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    onLogin() {
        this.props.login({
            userName: this.state.email,
            password: this.state.password
        })
        console.log('status', this.props.user.loggedIn)

        if (this.props.user.loggedIn) {
            this.props.navigation.navigate('Dashboard')
        }
        else {
            Alert.alert(
                'Opps!',
                'Invalid User Name or Password',
                [
                    { text: 'OK', onPress: () => console.log('OK Pressed') }
                ]);
        }

    }

    render() {

        return (

            <View style={styles.container}>

                <View style={styles.inputView} >
                    <TextInput
                        style={styles.inputText}
                        placeholder="User Name"
                        placeholderTextColor="#003f5c"
                        onChangeText={text => this.setState({ email: text })} />
                </View>
                <View style={styles.inputView} >
                    <TextInput
                        style={styles.inputText}
                        placeholder="Password"
                        secureTextEntry={true}
                        placeholderTextColor="#003f5c"
                        onChangeText={text => this.setState({ password: text })} />
                </View>

                <TouchableOpacity style={styles.loginBtn} onPress={() => this.onLogin()} >
                    <Text style={styles.loginText}>LOGIN</Text>
                </TouchableOpacity>

            </View>
        );
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Login);


const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#455a64',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputView: {
        width: "80%",
        backgroundColor: "#4D7B88",
        backgroundColor: "#607D8B",
        borderRadius: 25,
        height: 50,
        marginBottom: 20,
        justifyContent: "center",
        padding: 20
    },
    inputText: {
        height: 50,
        color: "black"
    },
    loginBtn: {
        width: "80%",
        backgroundColor: "white",
        color: 'white',
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        marginBottom: 10
    },

    loginText: {
        color: "black",
        fontSize: 14
    }

});