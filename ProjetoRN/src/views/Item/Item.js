import React, { useState } from 'react';
import { Text, View, TouchableOpacity, ImageBackground, FlatList} from 'react-native';
import estiloItem from './estiloItem';
import Lista from '../../components/Lista/Lista';
import { LinearGrandient, LinearGradient } from 'expo-linear-gradient';

import { Fontisto } from '@expo/vector-icons';

function Item({ navigation }) {

    const [colecao, setColecao] = useState( [
        {
            id: '1',
            nome: 'Pão Frances',
            foto: require('../../../assets/Itens/frances.jpg'),
        },
        {
            id: '2',
            nome: 'Pão de Queijo',
            foto: require('../../../assets/Itens/Queijo.jpg'),
        },
        {
            id: '3',
            nome: 'Pão de Leite',
            foto: require('../../../assets/Itens/leite.jpg'),
        },
        {
            id: '4',
            nome: 'Pão de Alho',
            foto: require('../../../assets/Itens/alho.jpg'),
        },
    ]    )

    const voltar = () => {
        navigation.navigate('Inicial')
    }
    
    return (
        <View style={estiloItem.container}>

                <ImageBackground source={require('../../../assets/Imagens/Cafeteria.jpg')} style={estiloItem.fundo}>
                
                <View style={estiloItem.centro}>
                    <ImageBackground source={require('../../../assets/Imagens/Logo.png')} style={estiloItem.botaoLogo}>
                    </ImageBackground>
                </View>

                <FlatList
                    showsHorizontalScrollIndicator = {false}
                    data={colecao}
                    keyExtractor = {(item) => item.id}
                    renderItem = { ({item}) => <Lista data={item} />}
                />
                <TouchableOpacity style={estiloItem.botaoContainer} onPress={voltar}>
                    <Text style={estiloItem.botaoTexto}>Voltar</Text>
                </TouchableOpacity>

                </ImageBackground>
        </View>
    )
}

export default Item;