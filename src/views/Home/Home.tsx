import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from '../../components/Header/Header';
import TodaysImage from '../../components/TodaysImage/TodaysImage';
import fetchApi from '../../utils/fetch';
import { PostImage } from '../../types';
import { format, sub } from 'date-fns';
import LastFiveDays from '../../components/LastFivedays/LastFiveDays';



const Home = () => {
    const [todaysImage, setTodaysImage]=useState<PostImage>({});
    const [lastFiveDaysImages, setLastFiveDaysImages]=useState<PostImage[]>([]);
    

    useEffect(()=>{
        const loadTodaysImage = async ()=>{
            try {
                const todaysImageResponse = await fetchApi();
                setTodaysImage(todaysImageResponse)
            } catch (error) {
                console.log(error);
                setTodaysImage({});
            }
        };

        const loadLastFiveDaysImages = async ()=>{
            try {
                const date = new Date();
                const todaysDate = format(date, 'yyyy-MM-dd');
                const fiveDaysAgo = format(sub(date,{days: 5}), 'yyyy-MM-dd');
                const lastFiveDaysImageResponse = await fetchApi(`&start_date=${fiveDaysAgo}&end_date=${todaysDate}`)
                setLastFiveDaysImages(lastFiveDaysImageResponse)
            } catch (error) {
                console.error(error);
            }
        }
        loadTodaysImage().catch(null);
        loadLastFiveDaysImages().catch(null)
    }, []);
  return (
    <View style={styles.container}>
        <Header/>
        <TodaysImage {...todaysImage}/>
        <LastFiveDays postImages={lastFiveDaysImages}/>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
    flex:1,
    paddingHorizontal:16,
    backgroundColor:'rgba(7,23,93,255)'
    }
})

export default Home