import React from 'react'
import { Text, View, Image, StyleSheet } from 'react-native';

const  Header = () => {

   return (
    <View style={styles.container}>
        <View style={styles.leftContainer}>
            <Text style={styles.title}>Explore</Text>
        </View>
        <View style={styles.rigthContainer}>
            <Image style={styles.image}  source={require('../../../assets/NasaLogo.png')}  />
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        // flex:1,
        flexDirection:'row',
        alignItems:'center'
    },
    leftContainer:{
        flex:1,
        alignItems:'flex-start'

    },
    rigthContainer:{
        flex:1,
        alignItems:'flex-end'
    },
    title:{
        fontSize:20,
        color: '#fff'
    },
    image:{
        width:60,
        height:60
    },
    

})
export default Header;
