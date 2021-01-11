import React, { Component } from 'react'
import {View, Text} from 'react-native'
import Slides from '../components/Slides'

const SLIDE_DATA = [
   {id:1, text: 'Hi Welcome to JobApp', color:'#03A9F4'},
   {id:2, text: 'Set your location, then just simply swipe away', color:'#009688'},
   {id:3, text: 'Set your location, then just simply swipe away' , color:'#03A9F4'},
];

 class WelcomeScreen extends Component {
   
    onSlideComplete=()=>{
      this.props.navigation.navigate('auth');
    }

    render() {
        return (
         <Slides data={SLIDE_DATA} onComplete = {this.onSlideComplete}/>
        )
    }
}



export default WelcomeScreen;