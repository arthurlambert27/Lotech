import React from 'react'
import { StyleSheet, View, Text, Button, Linking, WebView, ScrollView, Image } from 'react-native'


class ProductDetail extends React.Component {
  render() {
    const Product = this.props.navigation.state.params.Product
    return (
      <ScrollView>
        <View style={{flex: 1}}>
          <View style={{height: 12}}></View>
          <Text style={styles.title}>{Product.name}</Text>
          <View style={{height: 12}}></View>
          <Text style={styles.price}>Disponible pour un prix de: {Product.price}€</Text>
          <View style={{height: 12}}></View>
          <Image
            source={{ uri: Product.url_picture }}
            style={{flex:1, height: 300 }}
          />
          
          <View style={styles.description}>
            <Text >{Product.description}</Text>
          </View>
    
        
        <View style={{height: 17}}></View>

        </View>
        <View style={{flexDirection: 'row', margin: 10}}>
          <View style={styles.info}>
            <Text style={{color: '#666666', fontWeight: 'bold', fontSize: 15}}>Info supplémentaires:</Text>
            <Text style={{color: '#666666'}}>•Lien sponsorisé: {Product.sponso_link}</Text>
            <Text style={{color: '#666666'}}>•Partenariat: {Product.partenariat}</Text>
          </View>
          <View style={styles.buy}>
            <View style={{height: 70}}></View>
            <Button  title="Acheter sur Amazon" onPress={() =>{Linking.openURL(Product.amazon_url)}}/>
          </View>
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    height: 130,
    marginLeft: 10,
    marginRight: 10
  },

  title: {
    color: "red",
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  price: {
    color: '#666666',
    fontSize: 9,
    marginLeft: 10,
  },
  description: {
    flex: 1,
    margin: 15,
    fontSize: 18,
    

  },
  buy: {
    flex: 1,
    marginLeft: 10,
  },
  info: {
    flex: 1,
    color: '#666666',
    fontSize: 13,
    
  }

})


export default ProductDetail

