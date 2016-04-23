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

    ListView


} from 'react-native';

import Categories from './vendor/categoryInfo'

class GoAhead extends Component {

    constructor(props){
        super(props);
        this.state = {
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2,
            })
        };
    }

    componentDidMount(){
        this.fetchData();
    }

    fetchData(){
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

    renderCategory(category){
        return(
            <Text>{category.name}</Text>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
        , justifyContent: 'center'
        , flexDirection: 'row'
        , alignItems: 'center'
    },
    listView: {
        paddingTop: 20
        ,backgroundColor: '#FFFFFF'

    }
});

AppRegistry.registerComponent('GoAhead', () => GoAhead);
