import React from 'react';
import { StatusBar, Text, View, TouchableOpacity, ImageBackground} from 'react-native';
import estiloPerfil from './estiloPerfil';
import { LinearGrandient, LinearGradient } from 'expo-linear-gradient';

import { Fontisto } from '@expo/vector-icons';

function Perfil({ navigation }) {

    const voltar = () => {
        navigation.navigate('Inicial')
    }
    
    return (
        <View style={estiloPerfil.container}>

                
                <ImageBackground source={require('../../../assets/Imagens/Cafeteria.jpg')} style={estiloPerfil.fundo}>
                
                <View style={estiloPerfil.centro}>
                    <ImageBackground source={require('../../../assets/Imagens/Logo.png')} style={estiloPerfil.botaoLogo}>
                    </ImageBackground>
                </View>

                <View style={estiloPerfil.textoContainer}>
                    <Text style={estiloPerfil.textoTexto}>
                    Nome: Cauã A. Morales da Silva
                    <br/>
                    Sala: 3MIA
                    </Text>
                    <View style={estiloPerfil.imagePerfil}>
                        <ImageBackground source={require('../../../assets/Imagens/Law.jpg')} style={estiloPerfil.botaoBG}>
                        </ImageBackground>
                    </View>
                </View>

                <TouchableOpacity style={estiloPerfil.botaoContainer} onPress={voltar}>
                    <Text style={estiloPerfil.botaoTexto}>Voltar</Text>
                </TouchableOpacity>

                </ImageBackground>
        </View>
    )
}

export default Perfil;