import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    header: {
      height: 450,
      width: 350,
      backgroundColor: "#FCFCFC",
      borderRadius: 20,
      justifyContent: "center",
      alignItems: 'center',
      fontFamily: 'Kollektif',
      paddingBottom: 20,
    },
    container: {
      flex: 1,
      backgroundColor:"#38B6FF",
      alignItems: 'center',
      justifyContent: 'center',
    },

    botao: {
      height: 50,
      width: 100,
      backgroundColor: '#4776DF',
      borderRadius: 30,
      alignItems: 'center',
      justifyContent: 'center',
      bottom: '10%'
    },

    cadastrar:{
      textDecorationLine: "underline",
      color: '#A2A3BB',   
      bottom: 60
    },

  texto: {
    color: "#000",
    fontSize: 40,   
    textAlign: 'center',
    bottom: 100
  },

  Logo: {
    width: 400,
    height: 200,
    bottom: '14%'
  },
  
});