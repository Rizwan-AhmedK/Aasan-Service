import React, { Component } from "react";
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';



// global.currentScreenIndex = 'Dashboard';
//Import all required component
import { View, StyleSheet, StatusBar } from "react-native";
import MapView, { Marker } from "react-native-maps";
import Geolocation from "@react-native-community/geolocation";


const MyStatusBar = ({ backgroundColor, ...props }) => (
  <View style={[styles.statusBar, { backgroundColor }]}>
    <StatusBar translucent backgroundColor={backgroundColor} {...props} />
  </View>
);
 

let Id, Field, ProblemStatement, lat, long = "";

class Dashboard extends Component {

  constructor() {
    super();
    this.state = {
      initialPosition: {
        latitude: 0,
        longitude: 0,
        latitudeDelta: 0,
        longitudeDelta: 0,
      },
    };
  }
 
  componentDidMount() {
 
    Geolocation.getCurrentPosition((info) => {
      lat = info.coords.latitude;
      long = info.coords.longitude;



      var initialRegion = {
        latitude: lat,
        longitude: long,
        latitudeDelta: 37.4219288,
        longitudeDelta: -122.0840806,
      };
      this.setState({ initialPosition: initialRegion });

    });
  }

  render() {
    
    // const token_data = token_value();
    // console.log("token_homes_2st"+token_data);

    return (
      <View style={styles.container}>
        <MapView  
          style={styles.map}
          initialRegion={this.state.initialPosition}
          showsUserLocation={true}         
          userLocationCalloutEnabled={true} 

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          >
              <Marker coordinate={this.state.initialPosition} />
        </MapView>

        
{/* 
        <View style={{alignContent: "center", alignItems: "center"}}>
            <Button style={{backgroundColor: '#10047c', marginTop: 40, paddingLeft: 8, paddingRight: 8, width: '50%'}} mode="contained" onPress={() => this.props.navigation.navigate('ServiceDetailStep3',  {
              Id: Id,
              Field: Field,
              ProblemStatement: ProblemStatement,
              latitude: lat,
              longitude: long
            })}>
             Next
          </Button>
        </View>   */}
      </View>
    );
  }
}
export default Dashboard;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    fontWeight: "400",
    color: "#000",
    fontFamily:
      "Inter UI,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif",
  },

  map: {
    height: 550,
    width: 415,
    justifyContent: "flex-end",
    alignItems: "center",
  },
});