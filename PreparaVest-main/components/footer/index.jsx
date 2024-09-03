import { View, Text, TextInput, TouchableOpacity, Image, Linking} from "react-native";
import {Icon} from 'react-native-elements'
import { footerestilo } from "./style";

export default function FooterComponent(){
    return(
            <View style={footerestilo.footer}>
                <View >
                    <View>
                        <Text style={footerestilo.titulo}>Sobre nós</Text>
                        <Text style={footerestilo.textosuporte}>
                            O PreparaVest oferece suporte educacional a estudantes enfrentando desafios devido à qualidade insatisfatória 
                            do ensino público. Nossa equipe de alunos comprometidos proporciona recursos abrangentes, como questões 
                            desafiadoras, simulados e videoaulas. Priorizamos a personalização do aprendizado para que os alunos 
                            desenvolvam suas habilidades no próprio ritmo. Nosso objetivo é capacitar todos os alunos a alcançarem o 
                            sucesso nos vestibulares. Junte-se a nós nesta jornada educacional!
                        </Text>
                    </View>
                    <View>
                    <Text style={footerestilo.titulo}>Contatos</Text>
                    <Text style={footerestilo.textosuporte}> 
                        <Icon
                        name='phone'
                        type='material'
                        color='#000'
                        /> (12)123456789
                        </Text>
                        <Text style={footerestilo.textosuporte}>
                        <Icon
                        name='email'
                        type='material'
                        color='#000'
                        />mariazinha@gmail.com
                        </Text>
                    </View>
                </View>
               
            </View>
    );
}