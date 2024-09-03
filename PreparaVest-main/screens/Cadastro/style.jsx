import { StyleSheet } from "react-native";

export const style = StyleSheet.create({

    header: {
      height:450,
      width:350,
      backgroundColor: "#FCFCFC",
      borderRadius: 20,
      justifyContent: "center",
      padding: 20,
      fontFamily: 'Kollektif',

  
    },
    container: {
      flex: 1,
      backgroundColor:"#38B6FF",
      alignItems: 'center',
      justifyContent: 'center',
    },
    
    TextInput: {
      backgroundColor: "#d9d9d9",
      height: 50,
      width: 280,
      borderRadius: 25,
      padding:20,
      color: '#797976',
      fontSize: 18,
      
    },
    botao: {
      height: 50,
      width: 100,
      backgroundColor: '#4776DF',
      borderRadius: 30,
      justifyContent: "center",
      alignItems: "center",
      bottom: '40%'
     
    },
  titulo: {
    textAlign: 'center',
    color: "#000",
    fontSize: 40,
    bottom: '5%'
  },

  Logo: {
    
    justifyContent:'center',
    alignItems:'center', 
  },

  imagemlogo:{
    width:400,
    height:150,
    bottom: "10%"
  }
  });
  