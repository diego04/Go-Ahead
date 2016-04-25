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

    return {backgroundColor: '#283593'}
    //return {backgroundColor: color[Math.floor(Math.random() * ((color.length - 1)))]}

}

//http://stackoverflow.com/questions/6443990/javascript-calculate-brighter-colour
function increase_brightness(hex, percent){
    // strip the leading # if it's there
    hex = hex.replace(/^\s*#|\s*$/g, '');

    // convert 3 char codes --> 6, e.g. `E0F` --> `EE00FF`
    if(hex.length == 3){
        hex = hex.replace(/(.)/g, '$1$1');
    }

    var r = parseInt(hex.substr(0, 2), 16),
        g = parseInt(hex.substr(2, 2), 16),
        b = parseInt(hex.substr(4, 2), 16);

    return '#' +
        ((0|(1<<8) + r + (256 - r) * percent / 100).toString(16)).substr(1) +
        ((0|(1<<8) + g + (256 - g) * percent / 100).toString(16)).substr(1) +
        ((0|(1<<8) + b + (256 - b) * percent / 100).toString(16)).substr(1);
}

function* bright() {
    var index = 0
    while (true)
        yield (index++ *.3);
}

function* idMaker() {
    var index = 0;
    while (true)
        yield index++;
}

var gen = idMaker();
var brighten = bright();


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
            <View style={[styles.container,{backgroundColor:increase_brightness("#4A148C",brighten.next().value)}]}>

                <View style={[styles.infoContainer]}>
                    <Text style={[styles.alcoholCategory]}numberOfLines={3}>
                        {gen.next().value} {category.name}
                    </Text>
                </View>

                <View style={[styles.percentsContainer]}>
                    <View style={[styles.percentContainer,styles.maxContainer]}>
                        <Text style={styles.percentage}>
                            {category.max}
                        </Text>
                    </View>

                    <View style={[styles.percentContainer, styles.minContainer]} >
                        <Text style={styles.percentage}>
                            {category.min}
                        </Text>
                    </View>
                </View>


            </View>

        )
    }
}

const styles = StyleSheet.create({
    listView: {
        backgroundColor: '#4770f0'
    }
    , container: {
        flex: 1
        , justifyContent: 'center'
        , flexDirection: 'row'
        , alignItems: 'center'
        , backgroundColor: 'red'
        , borderRadius: 12
        , margin: 12
        , paddingHorizontal: 0
    }

    , infoContainer: {
        flex: 4
    }

    , alcoholCategory: {
        color: 'white'
        , textAlign: 'center'
        , fontFamily: 'Cochin'
        , fontSize: 20
        , fontWeight: 'bold'
    }
    , percentsContainer: {
        flex: 1
        , justifyContent: 'center'
        , alignItems: 'center'
        , flexDirection: 'column'
        , paddingHorizontal: 20
        , backgroundColor: 'transparent'
        , transform:[{translateY:7}]

    }
    , percentContainer: {
        flex: 1
        , backgroundColor: '#039BE5'
        , borderRadius: 12
        , borderWidth: 1
        , width: 55
        , height: 55
        , padding: 4
        , borderColor: 'black'
        , justifyContent: 'center'
        , alignItems: 'center'
        , flexDirection: 'row'
    }
    , percentage: {
        color: 'white'
        , textAlign: 'center'
        , flex: 1
        , fontFamily: 'Cochin'
        , fontSize: 20
        , fontWeight: 'bold'
    },
    maxContainer: {
        marginLeft: 20
    }
    ,minContainer: {
        marginRight: 20
        , transform:[{translateY:-15}]
    }
});

AppRegistry.registerComponent('GoAhead', () => GoAhead);