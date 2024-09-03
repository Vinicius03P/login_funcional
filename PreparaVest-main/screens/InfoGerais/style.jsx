import { StyleSheet } from "react-native";

export const estilo = StyleSheet.create({

    root:{
        flexDirection: 'row',
        
    }, 

    textStyle: {
        color: 'black',
        fontFamily: 'KollektifBold',
        fontSize: 25,

      },

    espacopv1:{
        fontFamily: 'KollektifBold',
        textAlign:'left',
        
      
    },

    //style desta pagina//

    titulos:{
        fontFamily: 'KollektifBold',
        fontSize: 20,
        marginTop: "2%"
    },

    textos:{

       fontFamily: 'Kollektif',
        fontSize: 20,
        justifyContent: 'center',
        alignItems: 'center',
        width: "26%",
        marginTop: '1%'
        
       
    
    },

    linkEnem: {
        fontFamily: 'KollektifBold',
        fontSize: 20,
        textDecorationLine: 'underline',
        color: '#FFB74B',
       
    }
 
})