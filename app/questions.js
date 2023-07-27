import { View,Modal, StyleSheet,Image, TextInput,Text, TouchableOpacity,SafeAreaView,ImageBackground,FlatList } from 'react-native';
import { useNavigation,useRoute } from '@react-navigation/native';
import React, { useState,Component,useEffect,useMemo } from 'react';

const question = () => {
  const navigation = useNavigation();
    const route = useRoute();
    const { names, out,selectedPlayer,players } = route.params;
    const [number1, setNumber1] = useState(null);
    const [number2, setNumber2] = useState(null);
    const [isButtonVisible, setIsButtonVisible] = useState(false);
    
    

    const generateRandomNumbers = () => {
      let num1 = Math.floor(Math.random() * names.length); 
      let num2 = Math.floor(Math.random() * names.length);

    while (num2 === num1) {
      num2 = Math.floor(Math.random() * names.length);
    }

    setNumber1(num1);
    setNumber2(num2);
  };
    const [showMessage1, setShowMessage1] = useState(true);

    const handleGoBack = () => {
        navigation.goBack(); 
      };
      const ToVote = () => {
        navigation.navigate('vote',{names,out,selectedPlayer,players});
      };
      const message1=names[number1]+" it's your turn.\nAsk "+names[number2]+" about the player.";
      const message2="Ask each other questions \nand press the Vote Button when you are ready to vote."

      
      return(
        
          <SafeAreaView style={styles.safeArea}>
            {isButtonVisible && (
           <View style={styles.goBackButton}>
      <TouchableOpacity  onPress={handleGoBack}>
          <Image
          style={styles.Imagecontainer}
          source={require('../assets/icons/chevron-left.png')}
          />
        </TouchableOpacity> 
        </View >
            )}
        <View>
        {number1 !== null && number2 !== null ?(
        <Text style={styles.question}>{message1}</Text>
        ) : (
          <Text style={styles.question}>{message2}</Text>
        )}
        </View>
        <View style={styles.Viewcontainer}>
      <TouchableOpacity onPress={generateRandomNumbers} style={styles.next}><Text style={styles.buttonText}>Next Question</Text></TouchableOpacity>
      <TouchableOpacity onPress={ToVote} style={styles.vote}><Text style={styles.buttonText}>Vote</Text></TouchableOpacity>
    </View>
        
        </SafeAreaView>
      )
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        },
        
    question:{
      textAlign: 'center',
      alignItems:'center',
      alignSelf:'center',
      justifyContent:'center',
      margin:20,
      top:100,
      fontSize:25,
      fontFamily:"Raleway",
        },
    Imagecontainer: {
        width: 40,
        height: 40,
        marginRight:3
      },
      Viewcontainer:{
        alignItems:'center',
        margin:5,
        },
      goBackButton: {
        alignItems:"center",
        justifyContent:"center",
        height:50,
        width:50,
        marginTop:30,
        marginLeft:10,
        backgroundColor: 'lightgreen',
        borderRadius: 30,
      },
      buttonText: {
        color: 'black',
        fontSize: 18,
        alignSelf: 'center',
        fontFamily:"Raleway",
      },
      next:{
        alignSelf:'center',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: 'green',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
        width: 200,
        height:70,
        top:170,
      },
      vote:{
        alignSelf:'center',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: 'yellow',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 20,
        width: 100,
        height:60,
        top:240,
      }
    });

export default question;