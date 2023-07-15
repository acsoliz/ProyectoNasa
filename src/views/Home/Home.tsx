import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from '../../components/Header/Header';
import fetchApi from '../../utils/fetch';

const Home = () => {
    useEffect(()=>{
        const loadTodayImage = async ()=>{
            try {
                const todaysImage = await fetchApi()
                console.log('todaysImage', todaysImage)
            } catch (error) {
                console.log(error)
            }
        }

        loadTodayImage().catch(null)
    }, []);

  return (
    <View style={styles.container}>
        <Header/>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
    paddingHorizontal:16
    }
})

export default Home