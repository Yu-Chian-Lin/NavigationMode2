import React, { Component } from "react";
import { StyleSheet, Slider, View,LayoutAnimation } from 'react-native';
import {
  Thumbnail,
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  Badge,
  Text,
  Left,
  Right,
  Body,
  Item,
  Input
} from "native-base";

import VerticalSlider from 'rn-vertical-slider'
import Animation from 'lottie-react-native';
import LottieView from 'lottie-react-native';
//import styles from "./styles";
const styles=StyleSheet.create({
  text:{
    color:"#ffffff",
    fontSize: 20,
    justifyContent: 'space-between'
  },

  container: {
    backgroundColor: "#484848"  // 背景色
  },
  header: {
    backgroundColor: "#000000"  // 背景色
  },
  animationContainer: {
      zIndex:90,
      alignSelf:'center',
      backgroundColor: 'rgba(255, 255, 255, 0.0)',
      marginTop:0,
      position:'absolute'

  },
  mb: {
    marginBottom: 10
  }
});
const logo = require("../../../assets/record.png");


class Mastermode extends Component {


  constructor() {
      super();
      this.state = { iconName: logo, volumn: 0, hvolumn: 0 };
    }
    componentDidMount() {
        this.initAnimation();
    }

    initAnimation(){
      if (!this.animation){
        setTimeout(() => {
          this.initAnimation();
        }, 100);
      } else {
          this.animation.play();
      }
    }


  render() {
    console.log('now', this.state.volumn);
    return (
      <Container style={styles.container}>
        <Header style={styles.header}>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.openDrawer()}
            >
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>Master</Title>
          </Body>
          <Right />
        </Header>

        <Content padder>

        <Text  style={styles.text}> 00:00:00  </Text>



        <Button
          transparent
          onPress={ () =>{ this.setState({iconName: require("../../../assets/camera.png") });
          this.props.navigation.navigate("Recordermode")}}
        >
              <Thumbnail square small source={this.state.iconName} style={{marginBottom: 10}} />
          </Button>

          <Badge
            style={{ backgroundColor: "black" }}
            textStyle={{ color: "white" }}
          >
            <Text>1866</Text>
          </Badge>


          <VerticalSlider
          value={0}
          disabled={false}
          min={0}
          max={4}
          onChange={(value) => {
            console.log('CHANGE', value);

            this.setState({volumn: value });
          }}
          onComplete={(value) => {
            console.log("COMPLETE", value);

          }}
          width={15}
          height={200}
          step={0.1}
          borderRadius={5}
          minimumTrackTintColor={"#33d9e1"}
          maximumTrackTintColor={"#000000"}
          showBallIndicator
          ballIndicatorColor={"gray"}
          ballIndicatorTextColor={"white"}
        />

        <Badge
          style={{ backgroundColor: "black" }}
          textStyle={{ color: "white" }}
        >
          <Text>{Number((this.state.volumn).toFixed(1))}</Text>
        </Badge>

        <Slider
            style={{width: 200, height: 40}}
            minimumValue={0}
            maximumValue={4}
            minimumTrackTintColor="#33d9e1"
            maximumTrackTintColor="#000000"
            thumbTintColor="#33d9e1"
            onValueChange={(value) => {
              console.log('CHANGE', value);

              this.setState({hvolumn: value });
            }}
          />

          <Badge
            style={{ backgroundColor: "black" }}
            textStyle={{ color: "white" }}
          >
            <Text>{Number((this.state.hvolumn).toFixed(1))}</Text>
          </Badge>


             <Animation
                ref={animation => { this.animation = animation; }}
                loop={true}
                style={{
                  width: 60,
                  height: 60,
                }}
                source={require('../../../assets/animation/logo.json')}
              />


              <Item style={{width:200}}>
                <Input placeholder="Record Title"
                 onChangeText={val => this.setState({ user: val })}
                 style={{marginBottom: 0, fontSize:20, color:'#ffff'}}
                />
              </Item>

              <Badge
                style={{ backgroundColor: "black" }}
                textStyle={{ color: "white" }}
              >
                <Text>{this.state.user}</Text>
              </Badge>


        </Content>
      </Container>
    );

    debugger;
  }
}

export default Mastermode;
