import { useMemo } from "react";

import { StyleSheet } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import BottomSheet, {
  BottomSheetView,
  BottomSheetBackdrop,
} from "@gorhom/bottom-sheet";

interface BottomDrawerProps {
  children: React.ReactNode;
}

export default function BottomDrawer({ children }: BottomDrawerProps) {
  const snapPoints = useMemo(() => ["10%", "50%", "75%"], []);

  const renderBackdrop = useMemo(
    () => (props: any) =>
      (
        <BottomSheetBackdrop
          {...props}
          disappearsOnIndex={0}
          appearsOnIndex={1}
          pressBehavior="collapse"
          opacity={0.7}
        />
      ),
    []
  );

  return (
    <GestureHandlerRootView style={styles.container}>
      <BottomSheet
        snapPoints={snapPoints}
        backdropComponent={renderBackdrop}
        enableOverDrag={false}
        enablePanDownToClose={false}
      >
        <BottomSheetView style={styles.contentContainer}>
          {children}
        </BottomSheetView>
      </BottomSheet>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    overflow: "hidden",
  },
});
