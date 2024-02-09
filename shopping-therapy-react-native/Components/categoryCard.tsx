import React from "react";
import { TouchableOpacity, Image, Text } from "react-native";

interface CategoryCardProps {
  imgUrl: string; // Change 'any' to the appropriate type for imgUrl, such as string
  title: string;
}

export default function CategoryCard({ imgUrl, title }: CategoryCardProps) {
  console.log(imgUrl);
  return (
    <TouchableOpacity className="relative mr-2">
      {/* <Image source={image} className="h-20 w-20 rounded" /> */}
      <Text className="absolute bottom-1 left-1 text-white font-bold">
        {title}
      </Text>
    </TouchableOpacity>
  );
}
