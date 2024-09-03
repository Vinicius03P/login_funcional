import {StyleSheet} from 'react-native'

export const paginapv = StyleSheet.create({

    root:{
        flex: 1,
        fontFamily: 'Kollektif',
        flexDirection: 'column',
    },

    container: {
        justifyContent: 'center',
        alignItems: 'center',
        gap: 50,
     
        
    },

    titulo:{
        fontSize:40,
        fontWeight: 'bold'
    },

    texto:{
        textAlign:'center',
        fontSize:20,
        width: 400
    },

    butao:{
        height: 40,
        width: 100,
        backgroundColor:'#38B6FF',
        paddingTop:8,
        borderRadius:10,
        border:'solid'
    },


    sombrab:{

        shadowColor:'#000' ,
        shadowOffset:{width:0 , height:10} ,
        shadowRadius:20,
        shadowOpacity:0.5,
        elevation:5
    },



    Banner:{
        height: 190,
        width: 400,     
         

    },

    enemTexto:{
        textAlign: 'center', 
        fontWeight: 'bold',
        fontSize: 20,
        
    }

   
    
})