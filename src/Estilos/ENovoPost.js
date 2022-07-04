import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  subcontainer: {
    width: '100%',
    padding: 20
  },
  input: {
    borderBottomWidth: 1.3,
    borderBottomColor: '#c9a692',
    width: 'auto',
    height: 50,
    fontSize: 16,
    marginBottom: 10
  },
  label: {
    color: '#777',
    fontSize: 16
  },
  pickerBox: {
    flexDirection: 'row',
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  fotoPetIcon: {
    backgroundColor: '#c9a692', 
    width: 70, 
    height: 70, 
    borderRadius: 50, 
    alignItems: 'center', 
    justifyContent: 'center', 
    marginHorizontal: 10,
    marginVertical: 25
  },
  opcaoPicker: {
    width: 170
  },
  opcaoPickerBox: {
    backgroundColor: '#ebcbb9',
    borderRadius: 10
  },
  fotoPetBox: {
    alignItems: 'center',
  },
  informacaoTextoFoto: {
    color: '#777',
    fontSize: 16
  },
  botaoNovoPost: {
    marginLeft: 'auto',
    marginRight: 'auto',
    backgroundColor: '#ebcbb9',
    padding: 15,
    paddingHorizontal: 'auto',
    borderRadius: 4,
  }
});

export { styles }