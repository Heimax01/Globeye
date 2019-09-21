import React, {Component} from 'react';
import { View,Text,StyleSheet,Button,Image } from 'react-native';

export default class Teste extends Component {




    constructor(props){

      super(props);

      this.state = {};

    }

     onPressLearnMore (){

            alert("OI");

      }




  render(){

    return(


      <View style={styles.body}>

      <View style={styles.imagem}>
       <Image
          style={{width: 250, height: 250}}
          source={{uri: 'https://cmkt-image-prd.freetls.fastly.net/0.1.0/ps/1974526/910/607/m1/fpnw/wm0/2-.png?1480665804&s=2c5e34b5948af207be24250c9ef2e37e'}}
        />
      </View>


      




    <View style={styles.botao}>
      <Button
      onPress={this.onPressLearnMore}
      title="OI"
      color="#841584"
      accessibilityLabel="Aperte aqui"
      />
    </View>  

      </View>

    );


  }



}

const styles = StyleSheet.create({


  body:{

    flex:2,
    justifyContent:'center',
    alignItems:'center'


  },

  imagem:{

      flex:1,
      paddingTop:30

  },

  botao:{
    marginTop:20,
    width:170,
    marginBottom:20
  }


});