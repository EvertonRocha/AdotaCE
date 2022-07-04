import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

container: {
  flex: 1,
  backgroundColor: '#fff',
  alignItems: 'center',
},
botaoNovoPost: {
  width: 60,
  height: 60,
  position: 'absolute',
  bottom: 20,
  left: 20,
  borderRadius: 50,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#615046'
},
iconeBotao: {
  fontSize: 20,
  fontWeight: 'bold',
  color: '#fff'
},
post: {
  marginTop: 20,
  marginBottom: 50,
},
imagemPost: {
  width: 'auto',
  height: 300,
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
descricaoIcones: {
  flexDirection: 'row',
  alignItems: 'flex-end',
},
textoInformacao: {
  fontSize: 15,
  color: '#615046',
  marginBottom: 2,
  // fontWeight: 'bold'
}
});

export {styles}