import { StyleSheet, Pressable } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import { Router, router } from 'expo-router';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Pressable style={{
        backgroundColor:'#5FB6DB',
        height:'7%',
        alignItems:'center',
        justifyContent:'center',
        width: '30%',
        borderRadius:9
      }} onPress={() =>router.push('../drawer/')}>
        <Text style={{
          color:'#fff',
          fontSize:14,
          fontWeight:500}}
          >Ouvrir le Drawer</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
