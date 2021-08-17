import React,{Component} from 'react';
import { StyleSheet, Text, View, SafeAreaView, StatusBar, Platform, TouchableOpacity, ImageBackground, Image} from 'react-native';

export default class HomeScreen extends Component{
    constructor(props){
        super(props);
        this.state={}
            
    }
    render(){
        return(
            <View style={
              styles.container
            }> 
            <SafeAreaView style={styles.droidSafeArea}/>
            <ImageBackground source={require('../assets/bg_image.png')}>
               <View style={styles.titleBar}> <Text style={styles.titleText}>ISS Tracker App</Text></View >
               <TouchableOpacity  style={styles.routeCart}
               
               onPress={()=>
                this.props.navigation.navigate("ISSlocator")

               }
               
               >
                   <Text style={styles.titleText}>ISS LOCATION</Text>
                   <Image source={require("../assets/iss_icon.png")}></Image>
               </TouchableOpacity>

               <TouchableOpacity  style={styles.routeCart}
                onPress={()=>
                    this.props.navigation.navigate("meteor")
    
                   }
                   
               >
                   <Text style={styles.titleText}>METEORS </Text>
                   <Image source={require("../assets/meteor_icon.png")}></Image>
               </TouchableOpacity>

               <TouchableOpacity  style={styles.routeCart}>
               <Image source={require("../assets/rocket_icon.png")}></Image>
                   <Text style={styles.titleText}>UPDATES</Text>
               </TouchableOpacity>


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