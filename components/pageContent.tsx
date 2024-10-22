import { ScrollView } from "react-native";

export default function PageContent({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ScrollView
      style={{
        marginBottom: 20,
        borderWidth: 4,
        borderColor: "red",
      }}
    >
      {children}
    </ScrollView>
  );
}
