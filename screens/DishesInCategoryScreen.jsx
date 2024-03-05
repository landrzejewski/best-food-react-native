import React, { useLayoutEffect } from "react";
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {DISHES} from '../data/Data';
import DishCell from "../components/DishCell";

const DishesInCategory = ({navigation, route, name}) => {
  const category = route.params.category;
  const dishesInCategory = DISHES.filter(
    dish => dish.categoryId === category.id,
  );

  useLayoutEffect(() => {
    navigation.setOptions({
      title: category.title + ' dishes',
    });
  }, [category.title, navigation]);

  return (
    <View style={styles.container}>
      <FlatList
        data={dishesInCategory}
        renderItem={data => <DishCell {...data.item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 8,
  },
});

export default DishesInCategory;
