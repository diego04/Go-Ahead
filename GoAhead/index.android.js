/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
    AppRegistry,
    Component,
    StyleSheet,
    Text,
    View,
    ScrollView,
    Dimensions
} from 'react-native';

const CARD_PREVIEW_WIDTH = 20
const CARD_MARGIN = 5;
const CARD_WIDTH = Dimensions.get('window').width - (CARD_MARGIN + CARD_PREVIEW_WIDTH) * 2;


class GoAhead extends Component {

    render() {
        return (
            <ScrollView
                style={styles.container}
                automaticallyAdjustInsets={false}
                horizontal={true}
                decelerationRate={0}
                snapToInterval={CARD_WIDTH + CARD_MARGIN*2}
                snapToAlignment="start"
                contentContainerStyle={styles.content}>
                <View style={styles.card}>
                    <Text>Card 1</Text>
                </View>
                <View style={styles.card}>
                    <Text>Card 2</Text>
                </View>
                <View style={styles.card}>
                    <Text>Card 3</Text>
                </View>
                <View style={styles.card}>
                    <Text>Card 4</Text>
                </View>
            </ScrollView>
        );
    }
}


/*
 container: {
 flex: 1,
 justifyContent: 'center',
 alignItems: 'center',
 backgroundColor: '#F5FCFF',
 flexDirection: 'row',
 },
 box: {
 fontSize: 20,
 textAlign: 'center',
 margin: 1,
 backgroundColor: '#35465c',
 flex: 1,

 },

 roundImg: {
 height: 100,
 borderRadius: 50,
 width: 100
 }*/


const styles = StyleSheet.create({
    content: {
        marginTop: 20,
        paddingHorizontal: CARD_PREVIEW_WIDTH,
        alignItems: 'center',
        flex: 1,
    },
    card: {
        flex: 1,
        backgroundColor: '#ccc',
        width: CARD_WIDTH,
        margin: CARD_MARGIN,
        height: CARD_WIDTH,
        alignItems: 'center',
        justifyContent: 'center',
    },
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF'
    }
});


AppRegistry.registerComponent('GoAhead', () => GoAhead);
