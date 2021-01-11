import React, { Component } from 'react'
import {View, Text} from 'react-native'
import {Button} from 'react-native-elements'

 class ReviewScreen extends Component {
 
    static navigationOptions =({ navigation }) =>{
        return {
        title: 'Review Jobs',
        headerRight : () =>(
        <Button
        onPress={() => navigation.navigate('setting')}
        title="Settings"
        type="clear"
        icon={{
            name: "arrow-right",
            size: 15,
            color: "white"
          }}
         
      />
      )
        }
  }
  
    render() {
        return (
           <View>
               <Text>ReviewScreen</Text>
            
           </View>
        )
    }
}
export default ReviewScreen;