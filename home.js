import React from 'react';
import {Text,View,TouchableOpacity,StyleSheet,StatusBar,SafeAreaView,Platform, 
ImageBackground, Image
}from 'react-native';

export default class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    render () {
        return(
            <View
                style={styles.container}
            >
                <SafeAreaView
                    style={styles.droidSafeArea}
                />

{/*<ImageBackground source={require('../assets/bg_image.png')} style={styles.backgroundImage}> */}
                <View
                    style={styles.TitleBar}
                >
                <Text>ISS TRACKER APP</Text>

                </View>

                <TouchableOpacity
                    style={styles.RouteCard}
                    onPress = {()=>{this.props.navigation.navigate("IssLocation")}}
                >
                    <Text style={styles.RouteText}>ISS LOCATION</Text>
                    <Image source={require("../assets/iss_icon.png")} style={styles.iconImage}></Image>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.RouteCard}
                    onPress={() =>
                        this.props.navigation.navigate("Meteors")
                    }
                >
                    <Text style={styles.RouteText}>METEORS</Text>
                    <Image source={require("../assets/meteor_icon.png")} style={styles.iconImage}></Image>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.RouteCard}
                    onPress={() =>
                        this.props.navigation.navigate("Updates")
                    }
                >
                    <Text style={styles.RouteText}>UPDATES</Text>
                    <Image source={require("../assets/rocket_icon.png")} style={styles.iconImage}></Image>
                </TouchableOpacity>
             { /* </ImageBackground> */}
            </View>



        )

    }
}

const styles=StyleSheet.create({
    container:{
        flex:1
    },

    droidSafeArea:{
        marginTop:Platform.OS === "android"?StatusBar.currentHeight:0
    },

    TitleBar:{
        flex:0.15,
        justifyContent:"center",
        alignItems:"center"
    },

    RouteCard:{
        flex:0.25,
        marginLeft:50,
        marginRight:50,
        marginTop:50,
        borderRadius:30,
        backgroundColor:'white'
    },

    RouteText:{
        fontSize:35,
        fontWeight:"bold",
        color:'black',
        marginTop:75,
        paddingLeft:30
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
    },
    iconImage: {
        position: "absolute",
        height: 200,
        width: 200,
        resizeMode: "contain",
        right: 20,
        top: -80
    }
})