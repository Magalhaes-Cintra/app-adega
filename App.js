import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>ADEGA ALTAS HORAS</Text>
      <ScrollView>

      <Text style={styles.titulo}>BEBIDAS</Text>

      <View style={styles.cxfoto}>
      <Image
      style={styles.img}
      resizeMode="stretch"
      source={require('./assets/irish-whiskey-2152126_640.jpg')}/>
      <Text style={styles.subtitulo}> WHISKY</Text>
      <Text style={styles.paragraph}> R$50 REAIS</Text>
      <Text style={styles.paragraph}> Garrafa com 1L</Text>
        </View>

        <View style={styles.cxfoto}>
      <Image
      style={styles.img}
      resizeMode="stretch"
      source={require('./assets/beers-414914_640.jpg')}/>
      <Text style={styles.subtitulo}> CERVEJA</Text>
      <Text style={styles.paragraph}> R$18 REAIS</Text>
      <Text style={styles.paragraph}> 6 garrafas com 330mL</Text>
        </View>

        <View style={styles.cxfoto}>
      <Image
      style={styles.img}
      resizeMode="stretch"
      source={require('./assets/rum-3898745_640.jpg')}/>
      <Text style={styles.subtitulo}> RUM (PINGA)</Text>
      <Text style={styles.paragraph}> R$25 REAIS</Text>
      <Text style={styles.paragraph}> Garrafa com 1L</Text>
        </View>

        <Text style={styles.titulo}>DRINKS</Text>

        <View style={styles.cxfoto}>
      <Image
      style={styles.img}
      resizeMode="stretch"
      source={require('./assets/drink-7951411_640.jpg')}/>
      <Text style={styles.subtitulo}> MOJITO (RUM COM LIMÃO)</Text>
      <Text style={styles.paragraph}> R$10 REAIS</Text>
      <Text style={styles.paragraph}> Copo de 200mL</Text>
        </View>

        <View style={styles.cxfoto}>
      <Image
      style={styles.img}
      resizeMode="stretch"
      source={require('./assets/alcohol-1853327_640.jpg')}/>
      <Text style={styles.subtitulo}>CAIPIRINHA DE PITAYA</Text>
      <Text style={styles.paragraph}> R$11 REAIS</Text>
      <Text style={styles.paragraph}> Copo de 200mL</Text>
        </View>

        <View style={styles.cxfoto}>
      <Image
      style={styles.img}
      resizeMode="stretch"
      source={require('./assets/cocktail-818197_640.jpg')}/>
      <Text style={styles.subtitulo}>CAIPIRINHA DE MORANGO</Text>
      <Text style={styles.paragraph}> R$11 REAIS</Text>
      <Text style={styles.paragraph}> Copo de 200mL</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#dfffff',
    padding: 8,
    alignItems: 'center'
  },
  
  paragraph: {
    marginTop: 24,
    fontSize: 18,
    textAlign: 'center',
  },

  img:{
    width: 250,
    height: 200,
    borderRadius: 8,
    paddingTop: 15,
    marginTop: 10
  },

  subtitulo:{
    fontSize: 20,
    fontWeight: 'bold'
  },

  titulo:{
    color: '#b80000',
    fontSize: 30,
    marginTop: 10,
    textAlign: 'center'
  },

  cxfoto:{
    flex: 1,
    backgroundColor: '#87CEFA',
    marginTop: 20,
    alignItems:'center',
    borderRadius: 15, 
    width: 320
  },
});