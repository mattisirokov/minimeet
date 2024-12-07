import { View, Text } from "react-native";

import { SupabaseEventType } from "@/types";

interface BottomSheetContentProps {
  events: SupabaseEventType[];
}

export default function BottomSheetContent({
  events,
}: BottomSheetContentProps) {
  return (
    <View>
      {events.map((event) => (
        <Text key={event.id}>{event.title}</Text>
      ))}
    </View>
  );
}
