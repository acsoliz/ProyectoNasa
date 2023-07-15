import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from '../../components/Header/Header';
import TodaysImage from '../../components/TodaysImage/TodaysImage';
import fetchApi from '../../utils/fetch';
const Home = () => {
    const [todaysImage, setTodaysImage]=useState();


    useEffect(()=>{
        const loadTodaysImage = async ()=>{
            try {
                const todaysImageResponse = await fetchApi();
                setTodaysImage(todaysImageResponse)
            } catch (error) {
                console.log(error);
                setTodaysImage(undefined)
            }
        }

        loadTodaysImage().catch(null)
    }, []);

    console.log('todaysImage', todaysImage)
    

  return (
    <View style={styles.container}>
        <Header/>
        <TodaysImage/>
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