import axios from 'axios';
import React,{Component} from 'react';
import { StyleSheet, Text, View, SafeAreaView, StatusBar, Platform, TouchableOpacity, ImageBackground, Image, Alert} from 'react-native';
import { Marker } from 'react-native-maps';

export default class ISSlocationScreen extends Component{
    constructor(props){
        super(props);
        this.state={
            location:{}
        }

    }
    componentDidMount(){
        this.getIssLocation()
    }
    getIssLocation=()=>{
        axios
        .get("https://api.wheretheiss.at/v1/satellites/25544")
        .then(response=>{
            this.setState({location:response.data})
        })
        .catch(error=>{
            Alert.alert(error.message)
        })
    }
    render(){
        if(Object.keys(this.state.location).length===0){
        return(
            <View> <Text> </Text>
                
            </View>
        )
        }
        return(
            
            <View style={ styles.container}>
            <SafeAreaView style={styles.droidSafeArea}/>

            <ImageBackground source={require('../assets/iss_bg.jpg')}> 
               <View style={styles.titleBar}>
               <Text styles={styles.titleText}>ISSlocatorScreen!</Text>
               </View>
               <View>
                   <MapView 
                     region={{
                         latitude:this.state.location.latitude,
                         longitude:this.state.location.longitude,
                         longitudeDelta:100,
                         latitudeDelta:100
                     }} >
                         <Marker 
                         coordinate={{latitude:this.state.location.latitude,
                            longitude:this.state.location.longitude
                            
                         }}>
                         <Image source={require('../assets/iss_icon.png')}></Image>
                         </Marker>

                   </MapView>
               </View>
               </ImageBackground>   
            
               
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    droidSafeArea: {
        marginTop:Platform.OS==="android"?StatusBar.currentHeight:0
    },
    backgroundImage:{
        flex:1,
        resizeMode:'cover'
    },

    titleBar: {
        flex: 0.1,

        alignItems: 'center',
        justifyContent: 'center',
      },
      titleText:{
          fontSize:35,
          fontWeight:"bold",
          color:"black",
          marginTop:75,
          paddingLeft:30

      },
      routeCart: {
        flex: 0.25,
        backgroundColor: 'white',
       marginLeft:50,
       marginRight:50,
       MarginTop:50,
       borderRadius:30
      },
  });