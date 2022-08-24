import React from 'react';
import { View , Text, TextInput,StyleSheet} from 'react-native';


const CustomInput = ({value, setValue, placeholder,secureTextEntry}) => {
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
    backgroundColor: 'white',
    width: '90%',
    height: 35,

    borderColor: '#e8e8e8',
    borderWidth: 1,
    borderRadius: 5,
   
    paddingHorizontal:10,
    marginVertical: 5,
  },
  input: {},
});
export default CustomInput;