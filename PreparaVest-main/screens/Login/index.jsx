import { View, TextInput, TouchableOpacity, Text, Image, Pressable, Alert, StyleSheet } from "react-native";
import { styles } from "./style";
import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from "react";
import { Input } from "react-native-elements";
import apiConfig from '../../utils/api';  // Certifique-se de que o apiConfig esteja importado corretamente

export default function Login() {

    const navigation = useNavigation();

    // States para controlar o ícone e o secureTextEntry no campo de senha
    const [passwordVisible, SetPasswordVisible] = useState(true);

    // States para controlar o que o usuário está digitando nos Inputs
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // Campos para controlar se há erros nos campos
    const [isEmailError, setIsEmailError] = useState(false);
    const [isPasswordError, setIsPasswordError] = useState(false);

    useEffect(() => {
        setIsEmailError(!email.trim().includes('@'));
        setIsPasswordError(password.length < 6);
    }, [email, password]);

    // Função para enviar o POST para a rota da API responsável pelo login
    async function login() {
        if (!isPasswordError && !isEmailError && email && password) {
            try {
                let res = await apiConfig.post('/login', {
                    email: email,
                    senha: password
                });

                if (res.status === 200) {
                    // Navegar para a tela Home ou outra tela após o login
                    navigation.navigate('Home');
                } else if (res.status === 401) {
                    Alert.alert('Ops...', 'Usuário ou senha incorretos!');
                } else {
                    Alert.alert('Erro', 'Ocorreu um erro. Tente novamente.');
                }
            } catch (error) {
                console.error(error);
                Alert.alert('Erro', 'Erro ao tentar logar.');
            }
        } else {
            Alert.alert('Erro', 'Por favor, preencha os campos corretamente.');
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image style={styles.Logo} source={require('../../assets/preparavestlogo.png')} />
                <Text style={styles.texto}>Login</Text>

                <Input
                    placeholder="Email"
                    onChangeText={text => setEmail(text)}
                    errorMessage={isEmailError ? 'Email inválido!' : ''}
                    inputContainerStyle={isEmailError ? estilo.input_container_error : estilo.input_container}
                />

                <Input
                    placeholder="Senha"
                    onChangeText={text => setPassword(text)}
                    secureTextEntry={passwordVisible}
                    errorMessage={isPasswordError ? 'Senha inválida!' : ''}
                    maxLength={10}
                    inputContainerStyle={isPasswordError ? estilo.input_container_error : estilo.input_container}
                />

                <Pressable style={styles.cadastrar}>
                    <Text style={{ fontSize: 22, color: '#45455F' }} onPress={() => navigation.navigate("Cadastro")}>Cadastre-se</Text>
                </Pressable>

                <Pressable style={styles.botao} onPress={login}>
                    <Text style={{ color: '#fff', fontSize: 22 }}>Entrar</Text>
                </Pressable>
            </View>
        </View>
    );
}

const estilo = StyleSheet.create({
    input_container_error: {
        borderWidth: 0,
        backgroundColor: "#ECECEC",
        height: 70,
        width: 300,
        borderRadius: 10,
        padding: 10,
        bottom: 60,
        color: '#797976',
        fontSize: 18,
    },
    input_container: {
        backgroundColor: "#ECECEC",
        height: 70,
        width: 300,
        borderRadius: 10,
        padding: 10,
        bottom: 60,
        color: '#797976',
        fontSize: 18,
    }
});
