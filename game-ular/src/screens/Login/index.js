import React, { Component } from 'react'
import {
    Container,
    Content,
    Form,
    Item,
    Label,
    Input,
    Button,
    Card,
    Text,
} from 'native-base'

export default class LoginScreen extends Component{
    static navigationOptions = {
        title: 'LOGIN'
    }

    constructor(){
        super()
        this.state = {
            username: ''
        }
    }

    render(){
        return(
            <Container>
                <Content>
                    <Card
                        style={{
                            margin: 5,
                        }}
                    >
                        <Form>
                            <Item fixedLabel>
                                <Label>Username</Label>
                                <Input
                                    placeholder="write username in here ..."
                                    onChangeText={(text)=> this.setState({ username: text })}
                                />
                            </Item>
                            <Button
                                full
                                style={{
                                    margin: 5
                                }}
                                onPress={()=> this.props.navigation.navigate('PageGame', {username: this.state.username}) }
                            >
                                <Text>Login</Text>
                            </Button>
                        </Form>
                    </Card>
                </Content>
            </Container>
        )
    }
}