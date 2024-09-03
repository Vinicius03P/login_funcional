import { Text, Pressable, View ,Image, StyleSheet, Alert } from 'react-native';
import { style } from './style';
import { Input } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { useEffect,useState } from 'react';
import apiConfig from '../../utils/api';  // Certifique-se de que o apiConfig esteja importado corretamente

export default function Cadastro() {

    const navigation = useNavigation();

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmSenha, setConfirmSenha] = useState('');
    const [isEmailError, setIsEmailError] = useState(false);
    const [isPasswordError, setIsPasswordError] = useState(false);
    const [isConfirmPasswordError, setIsConfirmPasswordError] = useState(false);

    useEffect(() => {
        setIsEmailError(!email.trim().includes('@'));
        setIsPasswordError(senha.length < 6);
        setIsConfirmPasswordError(senha !== confirmSenha);
    }, [email, senha, confirmSenha]);

    async function storeUser() {
        if (!isEmailError && !isPasswordError && !isConfirmPasswordError && email && senha) {
            try {
                let res = await apiConfig.post('/user/novo', {
                    email: email,
                    senha: senha
                });

                if (res.status === 200) {
                    Alert.alert('Sucesso', 'Usuário cadastrado com sucesso!');
                    navigation.navigate('Login');
                } else if (res.status === 409) {
                    Alert.alert('Erro', 'Email já cadastrado!');
                } else {
                    Alert.alert('Erro', 'Ocorreu um erro. Tente novamente.');
                }
            } catch (error) {
                console.error(error);
                Alert.alert('Erro', 'Erro ao tentar cadastrar.');
            }
        } else {
            Alert.alert('Erro', 'Por favor, preencha os campos corretamente.');
        }
    }

    return (
        <View style={style.container}>
            <View style={style.header}>
                <View style={style.titulo}>
                    <View style={style.Logo}>
                        <Image source={require("../../assets/preparavestlogo.png")} style={style.imagemlogo} />
                    </View>
                    <Text style={style.titulo}>Cadastro</Text>
                </View>

                <View>
                    <Input
                        placeholder="Nome"
                        onChangeText={text => setEmail(text)}
                        errorMessage={isEmailError ? 'Email inválido!' : ''}
                        inputContainerStyle={isEmailError ? estilo.input_container_error : estilo.input_container}
                    />
                    <Input
                        placeholder="Senha"
                        onChangeText={text => setSenha(text)}
                        secureTextEntry={true}
                        errorMessage={isPasswordError ? 'Senha inválida!' : ''}
                        inputContainerStyle={isPasswordError ? estilo.input_container_error : estilo.input_container}
                    />
                    <Input
                        placeholder="Confirmar senha"
                        onChangeText={text => setConfirmSenha(text)}
                        secureTextEntry={true}
                        errorMessage={isConfirmPasswordError ? 'As senhas não conferem!' : ''}
                        inputContainerStyle={isConfirmPasswordError ? estilo.input_container_error : estilo.input_container}
                    />
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Pressable style={style.botao} onPress={storeUser}>
                            <Text style={{ color: '#fff', fontSize: 22 }}>Entrar</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </View>
    );
}

const estilo = StyleSheet.create({
    input_container_error: {
        borderWidth: 0,
        backgroundColor: "#ECECEC",
        height: 50,
        width: 300,
        borderRadius: 10,
        padding: 30,
        color: '#797976',
        fontSize: 18
    },
    input_container: {
        backgroundColor: "#ECECEC",
        height: 50,
        width: 300,
        borderRadius: 10,
        padding: 30,
        color: '#797976',
        fontSize: 18
    }
});
