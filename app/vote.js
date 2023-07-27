import { View,Modal, StyleSheet,Image, Animated ,Text, ActivityIndicator, Linking  , TouchableOpacity,SafeAreaView,ImageBackground,FlatList, Touchable } from 'react-native';
import { useNavigation,useRoute } from '@react-navigation/native';
import React, { useState, useRef,useEffect,useMemo  } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';
import * as Animatable from 'react-native-animatable';

const Voting = () => {
  
    const navigation = useNavigation();
    const route = useRoute();
    const router = useRouter();
    const { names,out,selectedPlayer,players } = route.params;
    const [index, setIndex] = useState(0);
    const initialScores = Array(names.length).fill(0);
    const [nameScores, setNameScores] = useState(initialScores);
    const [showOptions, setShowOptions] = useState(false);
    const message=names[index]+" vote who you think is OUT";
    const [disabled, setDisabled] = useState(false);
    const [selectedButton, setSelectedButton] = useState(null);


      const showOption = () => {
        setShowOptions(true);
      }
      
      const initializeScoresFromStorage = async () => {
        try {
          const scores = await AsyncStorage.getItem('nameScores');
          if (scores !== null) {
            setNameScores(JSON.parse(scores));
          }
        } catch (error) {
          console.error('Error loading scores from AsyncStorage:', error);
        }
      };

      const saveScoresToStorage = async () => {
        try {
          await AsyncStorage.setItem('nameScores', JSON.stringify(nameScores));
        } catch (error) {
          console.error('Error saving scores to AsyncStorage:', error);
        }
      };

      const [parameter, setPlayer] = useState(null);
      const [correctAnswerIndex, setCorrectAnswerIndex] = useState(false);

      const updateScores = (player,idx) => {
        setPlayer(player);
        setDisabled(true);
        setSelectedButton(player);
        setIsAnyButtonPressed(true);
        if(player==selectedPlayer){
        
        const index = players.findIndex((name) => name === player);
        if (index !== -1) {
        const updatedScores = [...nameScores];
        updatedScores[out] += 100;
        setNameScores(updatedScores);
      }
      }
      else{
        setCorrectAnswerIndex(true);
        const timeoutId = setTimeout(() => {
          navigation.navigate('scores', {
            names,
            nameScores,
            out,
            selectedPlayer,
            players,
          });
        }, 1500);
        return () => clearTimeout(timeoutId);
      }
    };

    useEffect(() => {
      if (parameter === selectedPlayer) {
        
        const timeoutId = setTimeout(() => {
          navigation.navigate('scores', {
            names,
            nameScores,
            out,
            selectedPlayer,
            players,
          });
        }, 2000);
  
        return () => clearTimeout(timeoutId);
      }
    }, [nameScores]);

      const updateScore = (name) => {
        const answer = names.findIndex((n) => n === name);
        if(answer===out){
        const updatedScores = [...nameScores];
        updatedScores[index] += 100;
        setNameScores(updatedScores);
      }
    };


    const [currentIndex, setCurrentIndex] = useState(0);
    const [displayText, setDisplayText] = useState(names[currentIndex]);
    const [traversalCount, setTraversalCount] = useState(0);
    const [isLastButtonPressed, setIsLastButtonPressed] = useState(false);
    
    useEffect(() => {
      if (isLastButtonPressed) {
        const timer = setTimeout(() => {
          if (currentIndex < names.length) {
            setDisplayText(names[currentIndex]);
            setCurrentIndex(currentIndex + 1);
          } else {
            if (traversalCount < 8) {
              setCurrentIndex(0);
              setTraversalCount(traversalCount + 1);
            } else {
              setDisplayText(names[out]);
            }
          }
        }, 35);
    
        return () => clearTimeout(timer);
      }
    }, [currentIndex, traversalCount, isLastButtonPressed, names]);
    
    useEffect(() => {
      if (currentIndex === names.length) {
        setDisplayText(names[out]);
      }
    }, [currentIndex, names]);

    useEffect(() => {
      initializeScoresFromStorage();
    }, []);

    useEffect(() => {
      saveScoresToStorage();
    }, [nameScores]);

    
    const handleButtonPress = (name,index) => {
      if (names[index] === names[names.length - 1]) {
        setIsLastButtonPressed(true);
      }
      updateScore(name);
      if (index < names.length ) {
        setIndex(index + 1);
      }
     
    };

    const getRandomNumber = (min, max) => {
      return Math.floor(Math.random() * (max - min) + min);
    };

    const rand =  useMemo(() => getRandomNumber(0, 8), []);
    const [randomPlayers, setRandomPlayers] = useState(generateRandomPlayers());
    const [isAnyButtonPressed, setIsAnyButtonPressed] = useState(false);
    const [pressedButtonIdx, setPressedButtonIdx] = useState(null);

    function generateRandomPlayers() {
      const availablePlayers = players.slice();
      const selectedPlayerIndex = availablePlayers.indexOf(selectedPlayer);
      if (selectedPlayerIndex !== -1) {
        availablePlayers.splice(selectedPlayerIndex, 1);
      }

      const generatedPlayers = [];
      while (generatedPlayers.length < 7) {
        const randomIndex = Math.floor(Math.random() * availablePlayers.length);
        const randomPlayer = availablePlayers[randomIndex];
        generatedPlayers.push(randomPlayer);
        availablePlayers.splice(randomIndex, 1);
      }

      generatedPlayers.splice(rand, 0, selectedPlayer);

      return generatedPlayers;
    }

   
    const renderOptions = () => {
        return (
          <View style={styles.OptionsContainer}>
            <Text style={styles.title}>{names[out]} try to guess player.</Text>
            {randomPlayers.map((player, idx) => (
              
              <TouchableOpacity  key={idx} style={[
                styles.buttonss,
                isAnyButtonPressed && idx === rand ? styles.correctAnswerButton : null,
                correctAnswerIndex && idx === pressedButtonIdx ? styles.wrongButton : null,
              ]} onPress={() => {
                updateScores(player,idx);
                setPressedButtonIdx(idx);
               
              }}
              disabled={disabled} >
                <Text style={styles.voteText}>{player}</Text>
              </TouchableOpacity>
            ))}
            
          </View>
          
        );
    };
    const renderContinueButton = () => {
      if (index === names.length) {
        return (
          <View>
            <TouchableOpacity onPress={showOption} style={styles.Center}>
              
              <Text style={styles.text}>{displayText}</Text>
            </TouchableOpacity>
          </View>
        );
      }
    };


  const renderButtons = () => {
    

  return names.map((name, i) => {
    if (i === index) {
      return null; 
    }

    if(index<=names.length-1 ){
    return (
      <TouchableOpacity style={styles.buttons} key={i} onPress={() => handleButtonPress(name, index)}>
        <Text style={styles.buttonText}>{name}</Text>
      </TouchableOpacity>
    );
    }
  });
};

      return(
        <SafeAreaView>
      
      <View style={styles.header}>
      {index !== names.length && <Text style={styles.text}>{message}</Text>}
      </View>
      {showOptions ? (
        <View>{renderOptions()}</View>
      ) : (
        <View>
          <View>{renderButtons()}</View>
          <View>{renderContinueButton()}</View>
          
        </View>
        
      )}
        </SafeAreaView>
      ); 
}

const styles =StyleSheet.create({
    safeArea: {
        flex: 1,
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
      Imagecontainer: {
        width: 40,
        height: 40,
        marginRight:3
      },
      header:{
        alignItems:'center',
        alignSelf:'center',
        justifyContent:'center',
        top:30,
      },
      buttons:{
        alignItems:'center',
        alignSelf:'center',
        justifyContent:'center',
        top:60,
        margin:40,
        backgroundColor:'skyblue',
        width:250,
        height:60,
        borderRadius:50,
      },
      text:{
        fontFamily:"Raleway",
        fontSize:20,
      },
      buttonText:{

        fontFamily:"Raleway",
        fontSize:16,
      },
      centeredContainer: {
        position:'relative',
        justifyContent: 'center',
        alignItems: 'center',
        bottom:-50,
      },
      Continue:{
        width:300,
        alignItems:'center',
        margin:10,
        backgroundColor:'skyblue',
        padding: 10,
        borderRadius: 5,
      },
      voteText:{
        fontSize:14,
        fontFamily:"Raleway",
      },
      title:{
        backgroundColor:"white",
        bottom:20,
        fontSize:18,
        fontFamily:"Raleway",
        alignSelf:'center',
        alignItems:'center',
        textAlign:'center',
      },
      Center:{
        position: 'relative',
        top:150,
        alignSelf:'center',
        alignItems:'center',
        justifyContent:'center',
        width: 250,
        height: 250,
        borderRadius:125,
        backgroundColor:'skyblue',
      },
      buttonss:{
        marginTop:25,
        backgroundColor: 'lightblue',
        padding: 10,
        borderRadius: 5,
        width:300,
        alignItems:'center',
      },
      OptionsContainer:{
        top:50,
        position:'relative',
        justifyContent: 'center',
        alignItems: 'center',
      },
      correctAnswerButton: {
        backgroundColor: 'yellow',
      },
      hide:{
        backgroundColor:'white',
        height:40,
      },
      correctButton: {
        backgroundColor: 'yellow',
      },
      wrongButton: {
        backgroundColor: 'red',
      },
      VotingButtons: {
        top:10,
        margin:10,
      }
})

export default Voting;