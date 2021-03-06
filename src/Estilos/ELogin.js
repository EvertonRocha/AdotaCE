import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f0e5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imagemLogo: {
    width: 160,
    height: 100,
    alignSelf: 'center'
  },
  animation: {
    width: 350,
    height: 350,
    // marginBottom: 20
  },
  input: {
    backgroundColor: '#c9a692',
    marginBottom: 10,
    paddingLeft: 10,
    borderRadius: 50,
    color: '#323232',
    height: 50
  },
  inputBox: {
    width: '90%',
    marginTop: 20,
  },
  textInformation: {
    marginBottom: 5,
    marginLeft: 10,
    color: '#777'
  },
  buttonBox: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
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