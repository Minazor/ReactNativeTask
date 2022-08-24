import React from "react";
import { View,Text,Image,StyleSheet,useWindowDimensions} from "react-native";
import Logo from '../../../assets/images/M-Letter.png'
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomInput/CustomButton/CustomButton";
import { useState } from "react";
import reactDom from "react-dom";
import { useNavigation } from "@react-navigation/native";

const SignInScreen = () => {
    const [username, setUsername]=useState('');
    const [password, setPassword]=useState('');
    
    const {height}=useWindowDimensions();
    const navigation=useNavigation();

    const onSignInPressed= () => {
        console.warn('Sign in!')
        navigation.navigate('Map');
    }

    const onForgotPressed= () => {
        console.warn('forgot?')
    }

    const onSignUpPressed= () => {
        console.warn('Sign Up')
        navigation.navigate('SignUp')
    }

    return(
        <View style={styles.root}>
            <Image 
              source={Logo} 
              style={[styles.logo, {height:height*0.3}]} 
              resizeMode="contain" 
            />
            <Text>Username:</Text>
            <CustomInput 
                placeholder="Username" 
                value={username} 
                setValue={setUsername} />
            <Text>Password:</Text>
            <CustomInput 
                placeholder="Password" 
                value={password} 
                setValue={setPassword}
                secureTextEntry={true} />

            <CustomButton text="Sign In" onPress={onSignInPressed}/>
            <CustomButton text="Forgot Password?" onPress={onForgotPressed} type="TERTIARY"/>
            <CustomButton text="Don't have an account? Sign Up" onPress={onSignUpPressed} type="TERTIARY"/>
            
        </View>
    );
};

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