import React from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native'

class ProductItem extends React.Component {
  render() {
    const { product, displayDetailForProduct } = this.props
    return (
      <TouchableOpacity style={styles.main_container} onPress={() => displayDetailForProduct(product)}>
        <View style={{flex:1, flexDirection: 'row'}}>
          <Image style={styles.item_image} source={{uri: product.url_picture}}/>
          <View style={{flex:4, marginLeft: 17}}>
            <View style={{flex: 2, flexDirection: 'row'}}>
              <Text style={styles.title_text}>{product.name}</Text>
              <Text style={styles.price}>{product.price}€</Text>
            </View>
            <Text style={styles.description_text} numberOfLines={4}>{product.description}</Text>
            <Text style={styles.class_text}>Catégorie: {product.text_class}</Text>
          </View>
        </View>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    height: 130,
    marginLeft: 10,
    marginRight: 10
  },
  title_text: {
    flex: 4,
    fontWeight: 'bold',
    fontSize: 17
  },
  class_text: {
    textAlign: 'right',
    fontStyle: 'italic',
    fontSize: 10,
    flex:1,
    color: '#666666'
  },
  description_text: {
    flex: 4,
    color: '#666666'
  },
  price: {
    flex: 1.5,
    fontWeight: 'bold',
    textAlign: 'right',
    fontSize: 20,
    color: 'red'
  },
  item_image:{
    flex: 2,
    marginTop: 5,
    marginBottom: 5,
    borderRadius: 10 / 2
    
  }

})

export default ProductItem