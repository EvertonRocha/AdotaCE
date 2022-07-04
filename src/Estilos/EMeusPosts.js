import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  title: {
    padding: 20,
    alignSelf: 'center'
  },
  textTitle: {
    fontSize: 20,
    alignSelf: 'center'
  },
  post: {
    marginTop: 20
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
    // flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    // backgroundColor: 'red'
  },
  textoInformacao: {
    fontSize: 15,
    color: '#615046',
    marginBottom: 5,
    marginLeft: 10
    // fontWeight: 'bold'
  }
});

export {styles};