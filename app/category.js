import React,{useState,useEffect} from 'react';
import { View, StyleSheet,Image, Text, TouchableOpacity,SafeAreaView,ImageBackground,ActivityIndicator } from 'react-native';
import { useNavigation,useRoute } from '@react-navigation/native';
import GoBackButton from '../components/BackB';
import { ScrollView } from 'react-native-gesture-handler';

const Category = () => {

  const ActivePlayers = ["Lionel Messi","Jamie Vardy","Marco Asensio","Lukaku","Sterling","David Silva","Busquets","Werner","Nunez","Eden Hazard","Casemiro","Richarlison","Ali Hsn","Ter Stegen","Federico Valverde","عمر السومة","Paulo Dybala","Rodrygo","Erling Haaland","Rashford","Rüdiger","Araujo","Kante","Memphis Depay","Joshua Kimmich","Hakim Ziyech","Raphinha","Bruno Fernandes","Dembele","Mohammed Salah","Kounde","Carvajal","Donnarumma","Harry Kane","Bellingham","عبد الرزاق حمد الله","Alisson Becker","Jadon Sancho","Morata","Édouard Mendy","Thibaut Courtois","Kvaratskhelia","Jordan Henderson","Thiago Silva","Frenkie De Jong","Marcelo Brozović","Ramsdale","João Cancelo","Pepe","Rafael Leão","Camavinga","Neymar","Vinicius","Bernardo Silva","Thiago Alcântara","أحمد حجازي","Mbappe", "Kevin Debruyne","Antony","Rúben Neves","Sergio Ramos", "Bukayo Saka","Robert Lewandowski","Gabriel Jesus","Kyle Walker","Mostafa Matar","Riyad Mahrez","Mohamad Haidar","Marco Reus","Keylor Navas","Hussein  Zein","Luuk De Jong","Antoine Griezmann","kassem el zein","Luis Suarez","Son Heung-min","Sadio Mané","Hugo LLoris","Christensen","Toni Kroos","Firmino","Nicolás Otamendi","Lautaro Martínez","Kai Havertz","Ali Ammar","Reece James","David Alaba","Marco Verratti","Marcos Alonso","Franck Kessié","Maher Sabra","Mahmud Lubene","Mason Mount","Abbes Sufan","Osimhen","Nader Matar","Buffon","Achraf Hakimi","Mateo Kovačić","Pedro","Ángel Di María","Alexander-Arnold","Gavi","Hassan Maatouk","Van Dijk","Paul Pogba","Radamel Falcao","De Gea","Phil Foden","Hassan Moghnieh","James Rodríguez","Lisandro Martínez","Cristiano Ronaldo","Zlatan Ibrahimović","Gündoğan","Ederson","Hassan Chaito","Jack Grealish","Karim Benzema","Raphaël Varane","Luka Modric","Marcelo","Pedri","Neuer"];
  const retiredPlayers = [
    "Pele",
    "Mesut Özil",
    "Diego Maradona",
    "Johan Cruyff",
    "Zinedine Zidane",
    "Ronaldinho",
    "Gerard Piqué",
    "Ronaldo (Brazilian)",
    "Cesc Fàbregas",
    "Gareth Bale",
    "Garrincha",
    "Gerd Muller",
    "Sergio Agüero",
    "Marco van Basten",
    "Pavel Nedved",
    "Paolo Maldini",
    "Raul",
    "Lev Yashin",
    "Alessandro Del Piero",
    "Xavi Hernandez",
    "Andres Iniesta",
    "Cafu",
    "Thierry Henry",
    "Rivaldo",
    "David Beckham",
    "Peter Schmeichel",
    "Didier Drogba",
    "Fernando Torres",
    "Gary Lineker",
    "Alessandro Nesta",
    "Paul Scholes",
    "Steven Gerrard",
    "Frank Lampard",
    "Ruud Gullit",
    "Luis Figo",
    "Carles Puyol",
    "Andrea Pirlo",
    "Kaká",
    "Clarence Seedorf",
    "Deco",
    "Iker Casillas",
    "Xabi Alonso",
    "Gonzalo Higuain",
    "Van Persie",
    "Petr Čech",
    "Samuel Eto'o",
    "David Villa",
    "Ronald Koeman",
    "Franck Ribery",
    "Wayne Rooney",
    "Philipp Lahm",
    "Francesco Totti",
    "Pep Guardiola",
    "Arjen Robben",
    "Javier Mascherano",
    "Fabio Cannavaro",
    "Bastian Schweinsteiger",
    "Yaya Touré",

  ];
  const navigation = useNavigation();
  const handleRetiredPlayersPress = () => {
    const players=retiredPlayers.slice();
    navigation.navigate('players',{players});
  };

  const handleActivePlayersPress = () => {
    const players=ActivePlayers.slice();
    navigation.navigate('players',{players});
  };
  
  return (
    
    <SafeAreaView style={styles.safecontainer}>
      <ImageBackground
        source={require('../assets/images/demo.png')}
        style={{ flex: 1 }}
        resizeMode="cover"
      >
      <ScrollView>
        
    <GoBackButton/>
      <View  style={styles.container}>
      <TouchableOpacity style={styles.Centerbutton} onPress={handleActivePlayersPress}>
      
        <Image
        source={require('../assets/images/mahmud.png')} 
        style={styles.buttonImageIconStyle}/>
        <Text style={styles.buttonText}>Active Players</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.Centerbutton} onPress={handleRetiredPlayersPress}>
      <Image
        source={require('../assets/images/mahmud2.png')} 
        style={styles.buttonImageIconStyle2}/>
        <Text style={styles.buttonText}>Retired Players</Text>
      </TouchableOpacity>
      </View>
      
      </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    safecontainer:{
        flex: 1,
        backgroundColor:'black',
    },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  Centerbutton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginVertical: 10,
    marginTop:15
  },
  buttonText: {
    color: 'black',
    fontSize: 20,
    fontFamily:"Raleway",
    alignSelf: 'center',
  },
  Imagecontainer: {
    width: 40,
    height: 40,
    marginRight:3
  },
  buttonImageIconStyle: {
    borderRadius: 10,
    padding: 10,
    marginLeft: 15,
    width:150,
    height:150,
    resizeMode: 'cover',
  },
  buttonImageIconStyle2: {
    borderRadius: 10,
    padding: 10,
    marginLeft: 5,
    width:150,
    height:150,
    resizeMode: 'cover',
  },
});

export default Category;