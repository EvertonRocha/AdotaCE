import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  imagemLogo: {
    width: 160,
    height: 100,
    alignSelf: 'center',
  },
  animation: {
    width: 300,
    height: 300,
    marginBottom: 20
  },
  input: {
    backgroundColor: '#c9a692',
    marginBottom: 10,
    paddingLeft: 10,
    borderRadius: 100,
    color: '#323232'
  },
  inputBox: {
    width: '90%',
    // marginTop: -20
  },
  textInformation: {
    marginBottom: 5,
    marginLeft: 10
  },
  buttonBox: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    fontSize: 15,
    textAlign: 'center',
    backgroundColor: '#f8f0e5',
    padding: 10,
    borderRadius: 100,
    borderWidth: 1.5,
    borderColor: '#c9a692',
    color: '#323232',
  }
});

export {styles};