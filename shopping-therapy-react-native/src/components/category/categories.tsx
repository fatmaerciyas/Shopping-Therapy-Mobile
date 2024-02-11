import { ScrollView, Text, View } from "react-native";
import { useEffect, useState } from "react";
import { Category } from "../../models/Category";
import axios from "axios";
import { baseUrl } from "../../api/url.contants";
import CategoryCard from "./categoryCard";

export default function Categories() {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    async function fetchdata() {
      const response = await axios.get<Category[]>(baseUrl + "Category");
      setCategories(response.data);
      console.log(categories);
    }
    fetchdata();
  }, []);

  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {categories.map((category) => (
        <CategoryCard
          imgUrl={category.image}
          key={category.name}
          title={category.name}
        />
      ))}
    </ScrollView>
  );
}
