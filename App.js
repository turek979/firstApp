import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

export default function App() {
  return (
      <View>
        <View style={styles.nav}>
        <Image source={require('./assets/gnom2.png')} style={styles.logo} />
        </View>
        <ScrollView style={styles.container}>        
          <View style={styles.blogPost}>
            {/* <Image source={require('./assets/epy.jpg')} style={styles.blogPhoto} />   */}
            <Text style={styles.header}>Lorem Ipsum</Text>
            <Text style={styles.text}>Dzisiaj w gnomie promocja etc. etc. Kup coś
              asdasdasdasdadsasdasdasdadsadsasd
              asdasdadasd
            </Text>
          </View>
          <View style={styles.blogPost}>
            {/* <Image source={require('./assets/epy.jpg')} style={styles.blogPhoto} />   */}
            <Text style={styles.header}>Lorem Ipsum</Text>
            <Text style={styles.text}>Dzisiaj w gnomie promocja etc. etc. Kup coś</Text>
          </View>
          <View style={styles.blogPost}>
            {/* <Image source={require('./assets/epy.jpg')} style={styles.blogPhoto} />   */}
            <Text style={styles.header}>Lorem Ipsum</Text>
            <Text style={styles.text}>Dzisiaj w gnomie promocja etc. etc. Kup 
              sajdbajsbdjahsbdkjhsabdkjhsabkdjhbahjsdbsaljhda
              kjsahdjlhsabdojhasbdkhjasdbahsdboajhsdbjahdbkasjhdv
              aliushdkjahsdksajhdgbhjasvdjahvsdjsahdjvdajhvdjashvd
              ajbhsdjhavsbdjhasvdjhasdvhajsdvjavdjahvsdjhavdjvahsjdvjhasd
              sajdbakjsdbasjdhsbakdjbsakjdbkajsbdjkasbdksbakdbajkdsbkjasdbjka
              akjdbkjasbdkjsakdbaskjdbkajsdbkajsbdkjsabdkajbdkjsabdkjabdkj
              asdnakdsnk
            </Text>
          </View>
          <View style={styles.blogPost}>
            {/* <Image source={require('./assets/epy.jpg')} style={styles.blogPhoto} />   */}
            <Text style={styles.header}>Lorem Ipsum</Text>
            <Text style={styles.text}>Dzisiaj w gnomie promocja etc. etc. Kup 
              sajdbajsbdjahsbdkjhsabdkjhsabkdjhbahjsdbsaljhda
              kjsahdjlhsabdojhasbdkhjasdbahsdboajhsdbjahdbkasjhdv
              aliushdkjahsdksajhdgbhjasvdjahvsdjsahdjvdajhvdjashvd
              ajbhsdjhavsbdjhasvdjhasdvhajsdvjavdjahvsdjhavdjvahsjdvjhasd
              sajdbakjsdbasjdhsbakdjbsakjdbkajsbdjkasbdksbakdbajkdsbkjasdbjka
              akjdbkjasbdkjsakdbaskjdbkajsdbkajsbdkjsabdkajbdkjsabdkjabdkj
              asdnakdsnk
            </Text>
          </View>
          <View style={styles.blogPost}>
            {/* <Image source={require('./assets/epy.jpg')} style={styles.blogPhoto} />   */}
            <Text style={styles.header}>Lorem Ipsum</Text>
            <Text style={styles.text}>Dzisiaj w gnomie promocja etc. etc. Kup 
              sajdbajsbdjahsbdkjhsabdkjhsabkdjhbahjsdbsaljhda
              kjsahdjlhsabdojhasbdkhjasdbahsdboajhsdbjahdbkasjhdv
              aliushdkjahsdksajhdgbhjasvdjahvsdjsahdjvdajhvdjashvd
              ajbhsdjhavsbdjhasvdjhasdvhajsdvjavdjahvsdjhavdjvahsjdvjhasd
              sajdbakjsdbasjdhsbakdjbsakjdbkajsbdjkasbdksbakdbajkdsbkjasdbjka
              akjdbkjasbdkjsakdbaskjdbkajsdbkajsbdkjsabdkajbdkjsabdkjabdkj
              asdnakdsnk
            </Text>
          </View>
        <StatusBar style="auto" />
        </ScrollView>
      </View>

  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    height: '85%',
    backgroundColor: '#18191b',
  },
  nav: {
    backgroundColor: '#3F3D3E',
    alignItems: 'center',
    height: '15%',
    borderBottomColor: '#4EAB16',
    borderBottomWidth: 5,
  },
  logo: {
    width: 75,
    height: 75,
    marginTop: 30,
  },
  blogPost: {
    marginHorizontal: '15%',
    marginVertical: '5%',
    border: 'solid',
    borderRadius: 5,
    borderColor: '#4EAB16',
    borderWidth: 3,
    padding: 5,
    backgroundColor: '#3F3D3E',
    alignItems: 'center',
    justifyContent: 'center',
  },
  blogPhoto: {
    width: '100%',
    height: '100%',
    borderRadius: 5,
  },
  header: {
    fontWeight: 'bold',
    color: '#fff',
  },
  text: {
    color: '#fff',
  }
});
