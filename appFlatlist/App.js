import React from 'react';
import {View, FlatList, StyleSheet, Text, StatusBar, Image} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const DATA = [
 {
    id: '1',
    name: 'Fani',
    imgPerfil: require('./assets/fani.jpeg'),
    message: 'Message',
    horario: '15:00',
    setas:  require('./assets/setaCinza1.png'),
    notificacao: '1',
  },

  {
    id: '2',
    name: 'Henry',
    imgPerfil:  require('./assets/henry.jpeg'),
    message: 'Message',
    horario: '15:00',
    setas:  require('./assets/setasCinza.png'),
    notificacao: '0',
  },

  {
    id: '3',
    name: 'Klaus',
    imgPerfil:  require('./assets/klaus.jpeg'),
    message: 'Message',
    horario: '15:00',
    setas:  require('./assets/setaCinza1.png'),
    notificacao: '1',
  },

  {
    id: '4',
    name: 'Dina',
    imgPerfil:  require('./assets/dina.jpeg'),
    message: 'Message',
    horario: '15:00',
    setas:  require('./assets/setasAzuis.png'),
    notificacao: '0',
  },

  {
    id: '5',
    name: 'Letty',
    imgPerfil:  require('./assets/letty.jpeg'),
    message: 'Message',
    horario: '15:00',
    setas:  require('./assets/setaCinza1.png'),
    notificacao: '1',
  },

  {
    id: '6',
    name: 'Sara',
    imgPerfil:  require('./assets/sara.jpeg'),
    message: 'Message',
    horario: '15:00',
    setas:  require('./assets/setasCinza.png'),
    notificacao: '0',
  },

  {
    id: '7',
    name: 'Eda',
    imgPerfil:  require('./assets/eda.jpeg'),
    message: 'Message',
    horario: '15:00',
    setas:  require('./assets/setaCinza1.png'),
    notificacao: '0',
  },

  {
    id: '8',
    name: 'Max',
    imgPerfil:  require('./assets/max.jpeg'),
    message: 'Message',
    horario: '15:00',
    setas:  require('./assets/setasAzuis.png'),
    notificacao: '0',
  },

];

type ItemProps = {
  name: string;
  imgPerfil: string;
  message: string;
  horario: string;
  setas: string;
  notificacao: string;
};


const Item = ({name, imgPerfil, message, horario, setas, notificacao}: ItemProps) => (
  <View style={styles.item}>
    <View style={styles.cont1}>
      <Image source={imgPerfil} style={styles.imgPerfil} />

      <View style={styles.info}>
        <Text style={styles.nome}>{name}</Text>

        <View style={styles.cont1}>
          <Image source={setas} style={styles.setaIcon} />
          <Text style={styles.message}>{message}</Text>
        </View>
        
      </View>
    </View>

    <View style={styles.info2}>
      <Text style={styles.message}>{horario}</Text>
      {
        notificacao !== '0' && (
          <Text style={styles.not}>{notificacao}</Text>
        )
      }
    </View>
  </View>
  
);

const App = () => (
  <SafeAreaProvider>
    <SafeAreaView style={styles.container}>

      <FlatList
        data={DATA}
        renderItem={({item}) => {
          
          return (
            <Item
              name={item.name}
              imgPerfil={item.imgPerfil}
              message={item.message}
              horario={item.horario}
              setas={item.setas}
              notificacao={item.notificacao}
            />
          );
        }}
        keyExtractor={item => item.id}
      />
  
      
    </SafeAreaView>
    <View style={styles.iconM}>
      <Image source={require('./assets/iconMensagem2.png')} style={styles.imgM} />
    </View>

  </SafeAreaProvider>

  
);



const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },

  item: {
    backgroundColor: '#fff',
    padding: 16,
    marginVertical: 4,
    marginHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomColor: '#ccd5d3',
    borderBottomWidth: 0.8,
  },

  imgPerfil: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
    backgroundColor: "red",
  },

  nome: {
    fontWeight: "bold",
    fontSize: 20,
  },

  setaIcon: {
    width: 18,
    height: 16,
  },

  message: {
    fontSize: 12,
    color: 'grey',
  },


  info: {
    flexDirection: 'column',
    justifyContent: 'center',
  },

  cont1: {
    flexDirection: 'row',
  },

  not: {
    width: 18,
    height: 18,
    borderRadius: 9, 
    backgroundColor: '#25d366',
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 11,
  },

  info2: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  iconM: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#02a888',
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },

  imgM: {
    width: 30,
    height: 30,
  },
});

export default App;