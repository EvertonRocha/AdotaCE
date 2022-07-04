import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

container: {
  flex: 1,
  backgroundColor: '#e1e6e2',
  alignItems: 'center',
},
menuTopo: {
  width: '100%',
  height: 110,
  backgroundColor: 'grey',
  alignItems: 'center',
  justifyContent: 'flex-end',
  backgroundColor: '#c9a692'
  // paddingBottom: 10
},
boxMenu: {
  flexDirection: 'row',
  alignItems: 'center',
  // backgroundColor: 'lightblue',
  width: '90%',
  justifyContent: 'space-between'
},
logo: {
  width: 90,
  height: 90,
  // backgroundColor: 'red'
},  
botaoNovoPost: {
  width: 60,
  height: 60,
  position: 'absolute',
  bottom: 20,
  right: 20,
  borderRadius: 50,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#615046'
},
iconeBotao: {
  fontSize: 25,
  fontWeight: 'bold',
  color: '#fff',
  paddingBottom: 10
},
post: {
  marginTop: 20,
  marginBottom: 50,
},
imagemPost: {
  width: 'auto',
  height: 350,
  borderTopLeftRadius: 15,
  borderTopRightRadius: 15
},
caixaNomePet: {
  width: 'auto',
  height: 50,
  backgroundColor: '#615046',
  justifyContent: 'center',
  paddingLeft: 10
},
nomePet: {
  color: 'white',
  fontSize: 20
},
caixaDescricao: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  backgroundColor: '#c9a692',
  paddingVertical: 30,
  paddingHorizontal: 10,
  borderBottomLeftRadius: 15,
  borderBottomRightRadius: 15,
},
itemDescricao: {
  flexDirection: 'row',
  alignItems: 'center',
  width: 300,
  // backgroundColor: 'red'
},
descricaoIcones: {
  flexDirection: 'row',
  alignItems: 'flex-end',
},
textoInformacao: {
  fontSize: 15,
  color: '#615046',
  marginBottom: 5,
  marginLeft: 10
  // fontWeight: 'bold'
}
});

export {styles}