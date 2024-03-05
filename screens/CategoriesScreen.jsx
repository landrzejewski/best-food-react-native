import React from 'react';
import {FlatList} from 'react-native';
import {CATEGORIES} from '../data/Data';
import CategoryTile from '../components/CategoryTile';

const CategoriesScreen = ({navigation}) => {
  return (
    <FlatList
      data={CATEGORIES}
      renderItem={({item}) => (
        <CategoryTile
          {...item}
          onPress={() =>
            navigation.navigate('DishesInCategory', {category: item})
          }
        />
      )}
      numColumns={2}
    />
  );
};

export default CategoriesScreen;
