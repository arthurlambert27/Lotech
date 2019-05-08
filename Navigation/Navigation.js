import { createStackNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation'
import React from 'react'
import { Image, StyleSheet } from 'react-native'
import Search from '../Components/search'
import ProductDetail from '../Components/ProductDetail'
import ListeCategory from '../Components/ListeCategory'
import CategoryDetail from '../Components/CategoryDetail'

const SearchStackNavigator = createStackNavigator({
    Search: {
        screen: Search,
        navigationOptions: {
            title: "Rechercher"
        }
    },
    ProductDetail: {
       screen: ProductDetail 
    }
})

const CategoryStackNavigator = createStackNavigator({
    ListeCategory: {
        screen: ListeCategory,
        navigationOptions: {
            title: "Liste de catégories"
        }
    },
    CategoryDetail: {
        screen: CategoryDetail,
        
    }

})

const TabNavigator = createBottomTabNavigator({
    Search: {
        screen: SearchStackNavigator,
        navigationOptions: {
            tabBarIcon: () =>{
                return <Image source={require('../Images/search_icon.png')}
                style={styles.icon}/>
            }
        }
    },
    Category: {
        screen: CategoryStackNavigator,
        navigationOptions: {
            tabBarIcon: () =>{
                return <Image source={require('../Images/category_icon.png')}
                style={styles.icon}/>
            }
        }
    }
},
{
    tabBarOptions: {
        activeBackgroundColor: '#DDDDDD',
        inactiveBackgroundColor: '#FFFFFF',
        showLabel: false,
        showIcon: true
    }

    
    
    
})

const styles = StyleSheet.create({
    icon: {
        width: 30,
        height: 30
    }
})


export default createAppContainer(TabNavigator)