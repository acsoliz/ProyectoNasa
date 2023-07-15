import { StatusBar } from 'expo-status-bar';
import { 
  StyleSheet,
  Text,
  View,
  SafeAreaView
} from 'react-native';
import Home from './src/views/Home';

export default function App():JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <Home/>
      {/* <StatusBar style="auto" /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(7,26,93,255)',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
