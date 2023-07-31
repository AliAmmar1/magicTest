import React,{useState,useEffect} from 'react';
import { View, StyleSheet,Image, Text, TouchableOpacity,SafeAreaView,ImageBackground,StatusBar,FlatList  } from 'react-native';
import { useNavigation,useRoute } from '@react-navigation/native';
import GoBackButton from '../components/BackB';
import { ScrollView } from 'react-native-gesture-handler';

const Category = () => {

  const ActivePlayers = ["Lionel Messi","Jamie Vardy","Marco Asensio","Lukaku","Sterling","David Silva","Busquets","Werner","Nunez","Eden Hazard","Casemiro","Richarlison","Ali Hsn","Kim Min-jae","Ter Stegen","Federico Valverde","عمر السومة","Paulo Dybala","Rodrygo","Erling Haaland","Rashford","Rüdiger","Araujo","Kante","Memphis Depay","Matthijs de Ligt","Joshua Kimmich","Hakim Ziyech","Raphinha","Bruno Fernandes","Dembele","Mohammed Salah","Kounde","Carvajal","Donnarumma","Harry Kane","Bellingham","Ansu Fati","عبد الرزاق حمد الله","Alisson Becker","Jadon Sancho","Morata","Édouard Mendy","Upamecano","Thibaut Courtois","Kvaratskhelia","Jordan Henderson","Thiago Silva","Frenkie De Jong","Marcelo Brozović","Ramsdale","João Cancelo","Pepe","Rafael Leão","Camavinga","Neymar","Vinicius","Bernardo Silva","Alphonso Davies","Thiago Alcântara","Mbappe", "Kevin Debruyne","Antony","Rúben Neves","Sergio Ramos", "Bukayo Saka","Robert Lewandowski","Gabriel Jesus","Kyle Walker","Ferran Torres","Riyad Mahrez","Marco Reus","Keylor Navas","Antoine Griezmann","Luis Suarez","Son Heung-min","Sadio Mané","Hugo LLoris","Christensen","Toni Kroos","Firmino","Nicolás Otamendi","Lautaro Martínez","Kai Havertz","Ali Ammar","Reece James","David Alaba","Marco Verratti","Marcos Alonso","Franck Kessié","Mahmud Lubene","Mason Mount","Abbes Sufan","Osimhen","Buffon","Achraf Hakimi","Mateo Kovačić","Pedro","Ángel Di María","Alexander-Arnold","Gavi","Hassan Maatouk","Van Dijk","Paul Pogba","De Gea","Phil Foden","James Rodríguez","Lisandro Martínez","Cristiano Ronaldo","Zlatan Ibrahimović","Gündoğan","Ederson","Jack Grealish","Karim Benzema","Raphaël Varane","Luka Modric","Marcelo","Pedri","Neuer"];
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
  const Animals = ["Abbes","Abbess","Abes","Abas","Abbass"];

  const navigation = useNavigation();
  const handleRetiredPlayersPress = () => {
    const players=retiredPlayers.slice();
    navigation.navigate('players',{players});
  };

  const handleActivePlayersPress = () => {
    const players=ActivePlayers.slice();
    navigation.navigate('players',{players});
  };

  const handleAnimalsPress = () => {
    const players=Animals.slice();
    navigation.navigate('players',{players});
  };
  
  const data = [
    {
      key: 'goBackButton',
      component: <GoBackButton/>,
    },
    {
      key: 'active',
      imageSource: require('../assets/images/mahmud.png'),
      buttonText: 'Active Players',
      onPress: handleActivePlayersPress,
      style:styles.buttonImageIconStyle,
    },
    {
      key: 'retired',
      imageSource: require('../assets/images/mahmud2.png'),
      buttonText: 'Retired Players',
      onPress: handleRetiredPlayersPress,
      style:styles.buttonImageIconStyle2,
    },
    {
      key: 'animals',
      imageSource: require('../assets/images/abes.png'),
      buttonText: 'Animals',
      onPress: handleAnimalsPress,
      style:styles.buttonImageIconStyle3,
    },
  ];

  const renderItem = ({ item }) => {
    if (item.key === 'goBackButton') {
      return item.component; 
    }

    return (
      <TouchableOpacity style={styles.Centerbutton} onPress={item.onPress}>
        <Image source={item.imageSource} style={item.style} />
        <Text style={styles.buttonText} >{item.buttonText}</Text>
      </TouchableOpacity>
    );
  };

  return (
    
    <SafeAreaView style={styles.safecontainer}>
      
      <StatusBar hidden={true} />
      <ImageBackground
        source={require('../assets/images/demo2.png')}
        style={{ flex: 1 }}
        resizeMode="cover"
      >
       <FlatList
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ flexGrow: 1 }}
      data={data}
      renderItem={renderItem} 
      keyExtractor={(item) => item.key}
    />
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
  },
  buttonText: {
    top:10,
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
    alignSelf:'center',
    width:150,
    height:150,
    resizeMode: 'cover',
  },
  buttonImageIconStyle2: {
    borderRadius: 10,
    padding: 10,
    alignSelf:'center',
    width:150,
    height:150,
    resizeMode: 'cover',
  },
  buttonImageIconStyle3: {
    borderRadius: 10,
    padding: 10,
    alignSelf:'center',
    marginLeft:65,
    width:150,
    height:150,
    resizeMode: 'cover',
  },
});

export default Category;