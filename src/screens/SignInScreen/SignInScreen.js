import React from "react";
import { View,Text,Image,StyleSheet,useWindowDimensions} from "react-native";
import Logo from '../../../assets/images/M-Letter.png'
import CustomInput from "../../components/CustomInput";
import { useState } from "react";
import reactDom from "react-dom";

const SignInScreen = () => {
    const [username, setUsername]=useState('');
    const [password, setPassword]=useState('');
    
    const {height}=useWindowDimensions();
    return(
        <View style={styles.root}>
            <Image 
              source={Logo} 
              style={[styles.logo, {height:height*0.3}]} 
              resizeMode="contain" 
            />

            <CustomInput placeholder="Username" value={username} setValue={setUsername} />
            <CustomInput placeholder="Password" value={password} setUsername={setPassword} secureTextEntry={true}/>
            
        </View>
    )
}
const styles= StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 20,
    },
    logo: {
        width: '70%',
        maxWidth: 300,
        height:100,
        maxHeight: 300,
    },
});

export default SignInScreen