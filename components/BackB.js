import { View,Image, TouchableOpacity,StyleSheet} from 'react-native';

import { useNavigation } from '@react-navigation/native';

const GoBackButton = ({ onPress }) => {
    const navigation = useNavigation();

    const handleGoBack = () => {
        navigation.goBack(); 
      };

    const handler = onPress ? onPress : handleGoBack;
    return (
    <View style={styles.goBackButton}>
    <TouchableOpacity  onPress={handler}>
        <Image
        style={styles.Imagecontainer}
        source={require('../assets/icons/chevron-left.png')}
        />
      </TouchableOpacity>
      </View>
      );
};

const styles = StyleSheet.create({
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
});

export default GoBackButton;
