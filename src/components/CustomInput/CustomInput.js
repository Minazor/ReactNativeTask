import React from 'react';
import { View , Text, TextInput,StyleSheet} from 'react-native';


const CustomInput = ({value, setValue, placeholder, secureTextEntry}) => {
        return (
           <View style={styles.ccontainer}>
                <TextInput 
                value={value}
                onChangeText={setValue}
                placeholder={placeholder} 
                style={styles.input}
                secureTextEntry={secureTextEntry}/>
           </View>
        );
    
}
const styles=StyleSheet.create({
 ccontainer: {
    backgroundColor: '#F9F9F9',
    width: '90%',
    height: 35,

    borderColor: '#6F69AC',
    borderWidth: 1,
    borderRadius: 5,
   
    paddingHorizontal:10,
    marginVertical: 5,

   
  },
  input: {},
});
export default CustomInput;