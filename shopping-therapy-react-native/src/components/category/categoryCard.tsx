import React from "react";
import { TouchableOpacity, Image, Text } from "react-native";

interface CategoryCardProps {
  imgUrl: any;
  title: string;
}

export default function CategoryCard({ imgUrl, title }: CategoryCardProps) {
  return (
    <TouchableOpacity className="relative mr-2">
      <Image
        source={require("/Users/fatma/OneDrive/Desktop/Repositories/Shopping-Therapy-Mobile/shopping-therapy-react-native/src/assets/images/categories/fashion.jpg")}
        className="h-20 w-20 rounded"
      />
      <Text className="absolute bottom-1 left-1 text-white font-bold">
        {title}
      </Text>
    </TouchableOpacity>
  );
}
