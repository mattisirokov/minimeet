import React, { useMemo } from "react";
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  View,
  TouchableOpacity,
  Text,
  Image,
} from "react-native";
import FeatherIcon from "@expo/vector-icons/Feather";

const feed = [
  {
    img: "https://plus.unsplash.com/premium_photo-1661281316103-9aef5ad47c50?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
    title: "New Study Finds Link Between Exercise and Brain Function",
    author: "S. Lee",
    authorImg:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80",
    tag: "health",
    date: "Mar 24, 2023",
  },
  {
    img: "https://images.unsplash.com/photo-1519558260268-cde7e03a0152?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
    title: "Tech Giant Announces New Line of Smart Home Devices",
    author: "J. Smith",
    authorImg:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80",
    tag: "technology",
    date: "Mar 23, 2023",
  },
  {
    img: "https://images.unsplash.com/photo-1605367177286-f3d4789c47a0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2342&q=80",
    title: "City Council Approves Plan to Expand Public Transportation",
    author: "E. Chen",
    authorImg:
      "https://images.unsplash.com/photo-1515621061946-eff1c2a352bd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1389&q=80",
    tag: "politics",
    date: "Mar 22, 2023",
  },
  {
    img: "https://images.unsplash.com/photo-1565615833231-e8c91a38a012?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
    title: "Researchers Discover Potential Treatment for Alzheimer's",
    author: "S. Lee",
    authorImg:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80",
    tag: "health",
    date: "Mar 21, 2023",
  },
  {
    img: "https://images.unsplash.com/photo-1593941707874-ef25b8b4a92b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2344&q=80",
    title: "New Startup Aims to Revolutionize Electric Car Market",
    author: "J. Smith",
    authorImg:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80",
    tag: "technology",
    date: "Mar 20, 2023",
  },
  {
    img: "https://plus.unsplash.com/premium_photo-1663050986883-a5bdd99a7fa5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2362&q=80",
    title: "Local Election Results Are In: Democrats Retain Majority",
    author: "E. Chen",
    authorImg:
      "https://images.unsplash.com/photo-1515621061946-eff1c2a352bd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1389&q=80",
    tag: "politics",
    date: "Mar 19, 2023",
  },
];

export default function Example() {
  const rows = useMemo(() => {
    // group feed into rows of 2
    const rows = [];

    for (let i = 0; i < feed.length; i += 2) {
      rows.push(feed.slice(i, i + 2));
    }

    return rows;
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <View style={styles.header}>
        <View style={styles.headerTop}>
          <View style={styles.headerAction} />

          <View style={styles.headerAction}>
            <TouchableOpacity
              onPress={() => {
                // handle onPress
              }}
            >
              <FeatherIcon color="#1d1d1d" name="rss" size={21} />
            </TouchableOpacity>
          </View>
        </View>

        <Text style={styles.headerTitle}>News Feed</Text>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        {rows.map((row, rowIndex) => (
          <View key={rowIndex} style={styles.row}>
            {row.map(({ img, title, author, authorImg, tag, date }, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  onPress={() => {
                    // handle onPress
                  }}
                  style={styles.card}
                >
                  <View style={styles.cardTag}>
                    <Text style={styles.cardTagText}>{tag}</Text>
                  </View>

                  <Image
                    alt=""
                    resizeMode="cover"
                    source={{ uri: img }}
                    style={styles.cardImg}
                  />

                  <View style={styles.cardRow}>
                    <View style={styles.cardRowItem}>
                      <Image
                        alt=""
                        source={{ uri: authorImg }}
                        style={styles.cardRowItemImg}
                      />

                      <Text style={styles.cardRowItemText}>{author}</Text>
                    </View>

                    <Text style={styles.cardRowDivider}>·</Text>

                    <View style={styles.cardRowItem}>
                      <Text style={styles.cardRowItemText}>{date}</Text>
                    </View>
                  </View>

                  <Text style={styles.cardTitle}>{title}</Text>
                </TouchableOpacity>
              );
            })}
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  content: {
    paddingTop: 8,
    paddingHorizontal: 8,
  },
  row: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    flexDirection: "row",
  },
  /** Header */
  header: {
    paddingHorizontal: 16,
    marginBottom: 12,
  },
  headerTop: {
    marginHorizontal: -6,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerAction: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: "700",
    color: "#1d1d1d",
  },
  /** Card */
  card: {
    position: "relative",
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    padding: 4,
    flexDirection: "column",
    alignItems: "stretch",
    borderRadius: 12,
    marginBottom: 16,
    backgroundColor: "#fff",
  },
  cardTag: {
    position: "absolute",
    top: 5,
    right: 5,
    zIndex: 1,
    backgroundColor: "#fff",
    borderTopRightRadius: 7,
    borderBottomLeftRadius: 4,
    paddingHorizontal: 8,
  },
  cardTagText: {
    fontSize: 12,
    lineHeight: 20,
    fontWeight: "700",
    color: "#000",
    textTransform: "capitalize",
  },
  cardImg: {
    width: "100%",
    height: 150,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#e0e0e0",
    borderStyle: "solid",
  },
  cardRow: {
    marginTop: 8,
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  cardRowItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRightWidth: 1,
    borderColor: "transparent",
  },
  cardRowItemImg: {
    width: 22,
    height: 22,
    borderRadius: 9999,
    marginRight: 6,
  },
  cardRowItemText: {
    fontWeight: "400",
    fontSize: 13,
    color: "#939393",
  },
  cardRowDivider: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#939393",
    paddingHorizontal: 4,
  },
  cardTitle: {
    marginTop: 4,
    fontWeight: "700",
    fontSize: 15,
    lineHeight: 19,
    color: "#000",
    marginBottom: 8,
  },
});
