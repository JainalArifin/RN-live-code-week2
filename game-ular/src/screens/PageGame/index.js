import React, { Component } from 'react'
import { StyleSheet, Alert } from 'react-native'
import { Container, Text, Card, Button, CardItem, List, ListItem, Left, Thumbnail, Body, View } from 'native-base';

// table
import { Table, Row, Rows } from 'react-native-table-component';

export default class PageGameScreen extends Component {
    static navigationOptions = {
        title: 'PageGame'
    }

    constructor(props) {
        super(props);
        this.state = {
          randomNumber: 0,
          menang: false,
          tableData: [
              ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12','13','14','15','16','17','18','19','20']
          ]
        }
    }

    randomNum = () =>{
        const randomNum = Math.floor(Math.random() * 20) + 1;
        this.setState({
            randomNumber: randomNum
        })
        if(randomNum == '20'){
            this.setState({
                menang: true,
            })
            Alert.alert('Selamat anda telah menang')
            this.props.navigation.navigate('Login')
        }
    }
    andaKalah = async() => {
        await Alert.alert('anda telah kalah')
        this.props.navigation.navigate('Login')
    }

    componentDidMount (){
        Alert.alert('waktu anda 20 detik')
        setTimeout(()=> {
            if(this.state.menang == false){
                this.andaKalah()
            }
        }, 20000)
    }

    render () {
        const usernameParam = this.props.navigation.getParam('username', 'Peter');
        const state = this.state;
        return (
            <Container>
                <Card>
                    <Text
                        style={{
                            margin: 10
                        }}
                    >username: {usernameParam}</Text>
                    <Button
                        full
                        style={{
                            margin: 10
                        }}
                        onPress={()=>this.randomNum()}
                    >
                        <Text>click me for random dadu</Text>
                    </Button>
                        <List>
                            <Text
                                style={{
                                    margin:10,
                                    borderWidth: 3,
                                    padding: 5,
                                }}
                            >angka dadu anda: {this.state.randomNumber}</Text>
                        </List>
                    <Text
                        style={{
                            marginLeft: 10,
                            marginRight: 10,
                        }}
                    >jika angka dadu anda 6, 12 atau 18 anda akan mundur 5 langkah</Text>
                    {this.state.randomNumber == '6' || this.state.randomNumber == '12' || this.state.randomNumber == '18' ?
                            <Text
                                style={{
                                    margin: 10,
                                    borderWidth: 3,
                                    padding: 5,
                                    color: 'red'
                                }}
                            >anda di tangga ke => : {this.state.randomNumber - 5 } anda mundur 5 langkah</Text>
                        :
                            <Text
                            style={{
                                margin: 10,
                                borderWidth: 3,
                                padding: 5,
                            }}
                            >anda di tangga ke => : {this.state.randomNumber}</Text>
                    }

                </Card>
                <Card>
                    <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
                        {/* <Row data={state.tableHead} style={styles.head} textStyle={styles.text}/> */}
                        <Rows data={state.tableData} textStyle={styles.text}/>
                    </Table>
                </Card>
                <Card>
                    <View
                        style={{
                            flex:1,
                            flexDirection: 'row'
                        }}
                    >
                    </View>
                </Card>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
    head: { height: 40, backgroundColor: '#f1f8ff' },
    text: { margin: 6, width: 20, }
  });