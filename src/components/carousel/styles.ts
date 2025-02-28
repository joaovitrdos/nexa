import { StyleSheet } from 'react-native';
import { theme } from '../../theme';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.colors.GRAY,
        marginVertical: 50
      },
      flatListContainer: {
        paddingHorizontal: 20, // Espaço nas bordas
      },
      carouselItem: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        width:  330,
        height: 100, // Largura de cada item
        marginRight: 15,
        backgroundColor: theme.colors.WHITE,
        borderRadius: 20 // Espaçamento entre os itens
      },
      img:{
        width: '100%', // Garante que a imagem preencha o espaço disponível
        height: undefined, // Mantém a proporção da imagem
        aspectRatio: 3, // Define a proporção da imagem original
        resizeMode: 'contain',
      }
});