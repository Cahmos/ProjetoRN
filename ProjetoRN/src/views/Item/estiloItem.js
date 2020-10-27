import { StyleSheet } from 'react-native';

const estiloItem = StyleSheet.create({
   container: {   
      flex: 1,   
   },
   fundo: {
      justifyContent: 'center',    
      width: '100%',
      height: '100%',
   },
   logoContainer: {
      alignItems: 'center',
      marginBottom: 20,
   },
   logo: {
       width: 90,
       height: 90,
       borderRadius: 50,
       justifyContent: 'center',
       alignItems: 'center',
       padding: 20,
   },
   texto: {
      fontSize: 20,
      color: '#FFFFFF',
      fontWeight: 'bold',
      textAlign: "center",
      padding: 10
   },
   botaoContainer: {
      marginTop: 20,
      marginBottom: 20,
      marginLeft: 40,
      marginRight: 40,
      borderRadius: 20,
      height: 50,
      backgroundColor: '#61000D',
      justifyContent: 'center',
      alignItems: 'center',
   },
   botaoTexto: {
      fontSize: 18,
      color: '#FFFFFF',
      fontWeight: 'bold'
   },
      botaoLogo:{
       width: 150,
       height: 120,

    },

      centro: { 
      justifyContent: 'center',  
      alignItems: 'center',
      marginTop: 10,
      }
});

export default estiloItem;