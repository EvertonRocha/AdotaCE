import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#e1e6e2'
  },
  imageBox: {
    width: '100%',
    marginTop: 10,
    alignItems: 'center',
    marginBottom: 10
  },
  fotoPet: {
   width: '95%', 
   height: 320,
   borderRadius: 5
  },
  informationContainer: {
    width: '100%',
    marginBottom: 10,
    alignItems: 'center',
  },
  informationBox: {
    width: '95%',
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 10
  },
  title: {
    padding: 10,
    fontSize: 16,
  },
  textInformation: {
    marginLeft: 15,
  },
  textInformationBox: {
    fontSize: 14,
    paddingLeft: 10,
    paddingVertical: 10,
    flexDirection: 'row',
  }
});

export { styles };