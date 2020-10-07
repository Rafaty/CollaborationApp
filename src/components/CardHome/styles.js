import { StyleSheet } from 'react-native';
import colors from '../../colors';

export default StyleSheet.create({

    ContainerGeral: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        backgroundColor: colors.colorPrimary,
    },

    Card: {
        flex: 1,
        minWidth: 100,
        height: 100,
        justifyContent: 'center',
        backgroundColor: colors.colorSecondary,
        borderRadius: 15,
        margin: 10,
        shadowColor: 'black',
        shadowOffset: {
            width: 10,
            height: 30,
        },
        shadowOpacity: 0.9,
        shadowRadius: 5.0,

        elevation: 10,
    },

    TextTitleCard: {
    fontSize: 16,
    textAlign: 'center',
},

    TextItemCard: {
    fontSize: 14,
    color: 'green',
    textAlign: 'center',
}
});
