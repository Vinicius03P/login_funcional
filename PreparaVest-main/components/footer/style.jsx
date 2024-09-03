import { StyleSheet } from "react-native"

export const footerestilo = StyleSheet.create({

    root:{
        height: '100%',
        width: '100%',
        fontFamily: 'Kollektif',
        justifyContent: 'flex-end',
        flexDirection: 'column',
        
    },
    footer: {
        backgroundColor: '#38b6ff',
        height: '37%',
        justifyContent:'center',
        alignItems:'center',  
        padding:20
    },

    titulo: {
        fontSize: 30,
        fontWeight: 'bold',   
    },
    subtitulo:{
        fontSize: 20,
        fontWeight: 'bold'
    },
    textosuporte: {
        fontSize: 20,
        width: 370,
       
    },
   
})