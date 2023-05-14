import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#131016',
    padding: 24
  },
  eventName: {
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 75,
  },
  dateOfEvent: {
    color: "#6B6B6B", 
  },
  input: {
    flex: 1,
    height: 56,
    backgroundColor: '#1f1e25',
    borderRadius: 5,
    justifyContent: 'center',
    color: '#fdfcfe',
    padding: 16,
    marginRight: 12
  },
  button: {
    backgroundColor: '#31CF67',
    width: 56,
    height: 56,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    color: '#fff',
    fontSize: 24
  },
  form: {
    width: '100%',
    flexDirection: 'row',
    marginTop: 36,
    marginBottom: 42
  },
  listEmptyText: {
    color: '#fff',
    fontSize: 14,
    textAlign: 'center'
  }
});