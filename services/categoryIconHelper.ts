import { EventCategory } from "@/types";

import FontAwesome from "@expo/vector-icons/FontAwesome";

export const getCategoryIcon = (
  category: EventCategory
): keyof typeof FontAwesome.glyphMap => {
  switch (category.title) {
    case "Music":
      return "music";
    case "Sports":
      return "futbol-o";
    case "Art":
      return "paint-brush";
    case "Food":
      return "cutlery";
    case "Technology":
      return "laptop";
    case "Beauty":
      return "eye";
    default:
      return "question-circle";
  }
};
