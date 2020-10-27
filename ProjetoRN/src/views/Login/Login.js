import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, Alert, ImageBackground} from 'react-native';
import estiloLogin from './estiloLogin';
import { LinearGrandient, LinearGradient } from 'expo-linear-gradient';

import { Fontisto } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

function Login({ navigation }) {

    const [login, setLogin] = useState('');
    const [senha, setSenha] = useState('');

    const entrar = () => {
            navigation.replace('Inicial');
    }
    
    return (
        <View style={estiloLogin.container}>


                <ImageBackground source={require('../../../assets/Imagens/Cafeteria.jpg')} style={estiloLogin.fundo}>

                <View style={estiloLogin.centro}>
                    <ImageBackground source={require('../../../assets/Imagens/Logo.png')} style={estiloLogin.botaoLogo}>
                    </ImageBackground>
                </View>

                <TextInput
                    style={estiloLogin.campo}
                    placeholder="Usuário"
                    placeholderTextColor="#fff"
                    onChangeText={login => setLogin(login)}
                    value={login}
                />

                <TextInput
                    style={estiloLogin.campo}
                    placeholderTextColor="#fff"
                    placeholder="Senha"
                    onChangeText={senha => setSenha(senha)}
                    value={senha}
                />

                <TouchableOpacity style={estiloLogin.botaoContainer} onPress={entrar}>
                    <Entypo name="login" size={30} color="white"/>
                </TouchableOpacity>

                </ImageBackground>
        </View>
    )
}

export default Login;