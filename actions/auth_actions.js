import { FACEBOOK_LOGIN_SUCCESS} from './types';
import {AsyncStorage} from '@react-native-community/async-storage'

// how to use AsyncStorage
// AsyncStorage.setItem('fb_token', token)
// AsyncStorage.getItem('fb_token')

export const facebookLogin = () => {
 return async (dispatch) =>{
  let token = await AsyncStorage.getItem('fb_token');
  if(token) {
     // dispatch an action saying FB login is done 


  } else {
      // Start up FB login process
  }
  }
};