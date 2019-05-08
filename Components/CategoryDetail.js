import React from 'react'
import { StyleSheet, View, Text, Button, Linking, WebView, ScrollView, Image, FlatList } from 'react-native'
import  ProductItem  from '../Components/ProductItem'

class CategoryDetail extends React.Component {
   
  displayDetailForProduct = (Product) =>{
    this.props.navigation.navigate('ProductDetail', { Product: Product})
  }

  justCat(products, categoryIn){
    let newCat = []
    products.forEach((item) => {
      if (item.text_class === categoryIn.text_name){
        newCat.push(item)
      }
    
    });
    return newCat
  }
    
  render() {
    const Product = this.props.navigation.state.params.Product
    const Category = this.props.navigation.state.params.Category
    console.log(this.justCat(Product, Category))

    return (
      <ScrollView>
           <View style={{height: 35}}></View>
        <Text style={{flex: 1, textAlign: "center", fontSize: 24, fontWeight: 'bold'}}>Catégorie: {Category.text_name}</Text>
        <View style={{height: 25}}></View>
        <FlatList
          data={this.justCat(Product, Category)}
          keyExtractor={(item) => item.id}
          renderItem={({item}) => <ProductItem product={item} displayDetailForProduct={this.displayDetailForProduct}/>}
        />
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    
  },

  

})


export default CategoryDetail

