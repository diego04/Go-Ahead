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
    Dimensions,
    Image,

    ListView


} from 'react-native';

import Categories from './vendor/categoryInfo'


class GoAhead extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2,
            })
        };
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData() {
        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(Categories),
        });
    }


    render() {
        return (
            <ListView
                style={styles.listView}
                dataSource={this.state.dataSource}
                renderRow={this.renderCategory}

            />
        );
    }

    renderCategory(category) {

        return (
            <View style={[styles.container,randomColor()]}>
                <View style={[styles.rowItemLeft, styles.rowItem, randomColor()]}>
                    <Text style={styles.percentage}>{category.min}</Text>
                </View>
                <View style={[styles.rowItemLeft, randomColor()]}>
                    <Text style={styles.percentage}>{category.max}</Text>
                </View>

                <View style={[styles.rowItemRight, styles.rowItem]}>
                    <Text style={styles.alcoholCategory} numberOfLines={5}>
                        {category.name}
                    </Text>
                </View>
            </View>

        )
    }
}

function randomColor() {
    /*
     choose all colors at the 500 level:
     https://www.google.com/design/spec/style/color.html#color-color-palette
     */
    var color = ['#F44336', '#E91E63', '#9C27B0', '#673AB7', '#3F51B5', '#2196F3'
        , '#03A9F4', '#00BCD4', '#009688', '#4CAF50', '#8BC34A', '#CDDC39'
        , '#FFC107', '#FF9800', '#FF5722', '#795548', '#9E9E9E'
        , '#607D8B'
    ]

    return {backgroundColor: color[Math.floor(Math.random() * ((color.length - 1)))]}

}


const styles = StyleSheet.create({
    listView: {
        backgroundColor: '#4770f0'
    }
    , container: {
        flex: 1
        , justifyContent: 'center'
        , flexDirection: 'row'
        , alignItems: 'stretch'
        , backgroundColor: 'red'
        //, padding: 15

    }
    , rowItemLeft: {
        flex: 1
        , justifyContent: 'center'
        , alignItems: 'center'
        , flexDirection: 'row'
        , backgroundColor: '#EBFFF8'
        , paddingHorizontal: 15

    }

    , rowItem: {
        paddingVertical: 30

    }
    , percentage: {
        fontSize: 20
        , color: 'white'

    },
    alcoholCategory: {
        color: 'white'
        , justifyContent: 'center'
        , alignItems: 'center'
        , flex: 1

    }

    , rowItemRight: {
        flex: 4
        , justifyContent: 'center'
        , alignItems: 'center'
        , margin: 15
    }
    , baseText: {
        fontFamily: 'Cochin',
    },
    titleText: {
        fontSize: 20,
        fontWeight: 'bold',
    }
});

AppRegistry.registerComponent('GoAhead', () => GoAhead);