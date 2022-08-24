import React from "react";
import { View,Text,Image,StyleSheet,useWindowDimensions} from "react-native";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomInput/CustomButton/CustomButton";
import { useState } from "react";
import reactDom from "react-dom";

import { useNavigation } from "@react-navigation/native";

const SignUpScreen = () => {
    const [username, setUsername]=useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword]=useState('');
    const [phone, setPhone]=useState('');

    const {height}=useWindowDimensions();

    const navigation=useNavigation();

    const onRegisterPressed= () => {
        console.warn('Registered!')
        navigation.navigate('Map')
    }

    const onForgotPressed= () => {
        console.warn('forgot?')
    }

    const onSignInPressed= () => {
        console.warn('Sign In Pressed')
        navigation.navigate('SignIn')
    }

    const onTermsOfUsePressed= () => {
        console.warn('TOU')
    }

    const onPrivacyPolicyPressed= () => {
        console.warn('PP')
    }
    return(
        <View style={styles.root}>
            <Text style={styles.title}>Create an account</Text>
            
            <Text>Username:</Text>
            <CustomInput 
                placeholder="Username"
                value={username} 
                setValue={setUsername} />

            <Text>E-Mail:</Text>
            <CustomInput 
                placeholder="Email" 
                value={email} 
                setValue={setEmail} />

            
            <Text>Phone:</Text>
            <CustomInput 
                placeholder="Phone" 
                value={phone} 
                setValue={setPhone} />

<           Text>Password:</Text>
            <CustomInput 
                placeholder="Password" 
                value={password} 
                setValue={setPassword}
                secureTextEntry={true} />

            <CustomButton text="Register" onPress={onRegisterPressed}/>
            <Text style={styles.text}>By regitering, you confirm that you accept our 
            <Text style={styles.link} onPress={onTermsOfUsePressed}> Terms of Use</Text>  and 
            <Text style={styles.link} onPress={onPrivacyPolicyPressed}> Privacy Policy</Text> 
            </Text>
           
            <CustomButton
            text="Have an account? Sign in"
            onPress={onSignInPressed}
            type="TERTIARY"
            />
        </View>
    );
};

const styles= StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#051C60',
        margin: 10,
    },
    text: {
        fontSize: 14,
        color: 'gray',
        marginVertical: 10,
    },
    link: {
        color:'#52006A',
    },
    
});

export default SignUpScreen