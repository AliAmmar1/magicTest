import React, { useState,useEffect } from 'react';
import {View,TouchableOpacity, SafeAreaView ,StyleSheet ,ImageBackground,Text} from'react-native';
import { useNavigation } from '@react-navigation/native';
import { loadFontsAsync } from './FontLoader';

const Home = () => {

  const [loaded, setLoaded] = useState(false);

 

    const navigation = useNavigation();
    const handlePress = () => {
        navigation.navigate('category');
      };

      useEffect(() => {
        const loadFonts = async () => {
          try {
            await loadFontsAsync();
            setLoaded(true);
          } catch (error) {
            console.log('Error loading fonts:', error);
          }
        };
    
        loadFonts();
      }, []);
    
      if (!loaded) {
        return null; 
      }
    return (
        
        <SafeAreaView style={styles.container}>
       <ImageBackground
        source={require('../assets/images/demo.png')}
        style={{ flex: 1 }}
        resizeMode="cover"
      >
        <View style={styles.view} >
        <TouchableOpacity  style={styles.button}onPress={handlePress}>
          <Text style={styles.buttonText}>Play</Text>
        </TouchableOpacity>
        </View>
      </ImageBackground>
        </SafeAreaView>
    )}

    const styles = StyleSheet.create({
        container: {
          flex:1,
          backgroundColor:'black',
        },
        image: {
          flex: 1,
        },
        view: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        },
        button:{
          width:100,
          height:55,
          alignSelf: 'center',
          justifyContent: 'center',
          paddingVertical: 10,
          backgroundColor: 'skyblue',
          borderRadius:10,
        },
        buttonText: {
          color: 'black',
          fontSize: 20,
          fontFamily:"Raleway",
          alignSelf: 'center',
        },
      });

export default Home