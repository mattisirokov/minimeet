import {
  StyleSheet,
  Dimensions,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";

import FeatherIcon from "react-native-vector-icons/Feather";

const songs = [
  [
    {
      img: "https://images.unsplash.com/photo-1503248947681-3198a7abfcc9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80",
      name: "Levitating",
      artist: "Dua Lipa",
      year: "2020",
    },
    {
      img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
      name: "drivers license",
      artist: "Olivia Rodrigo",
      year: "2021",
    },
  ],
  [
    {
      img: "https://images.unsplash.com/photo-1516900448138-898720b936c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
      name: "Leave The Door Open",
      artist: "Silk Sonic",
      year: "2021",
    },
    {
      img: "https://images.unsplash.com/photo-1438762398043-ac196c2fa1e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
      name: "Save Your Tears",
      artist: "The Weeknd",
      year: "2021",
    },
  ],
];
const songs_2 = [
  [
    {
      img: "https://images.unsplash.com/photo-1438762398043-ac196c2fa1e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
      name: "Peaches",
      artist: "Justin Bieber",
      year: "2021",
    },
    {
      img: "https://images.unsplash.com/photo-1503248947681-3198a7abfcc9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80",
      name: "Kiss Me More",
      artist: "Doja Cat ft. SZA",
      year: "2021",
    },
  ],
  [
    {
      img: "https://images.unsplash.com/photo-1516900448138-898720b936c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
      name: "good 4 u",
      artist: "Olivia Rodrigo",
      year: "2021",
    },
    {
      img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
      name: "MONTERO (Call Me By Your Name)",
      artist: "Lil Nas X",
      year: "2021",
    },
  ],
];
const songs_3 = [
  [
    {
      img: "https://images.unsplash.com/photo-1438762398043-ac196c2fa1e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
      name: "Dance Monkey",
      artist: "Tones and I",
      year: 2019,
    },
    {
      img: "https://images.unsplash.com/photo-1516900448138-898720b936c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
      name: "Blinding Lights",
      artist: "The Weeknd",
      year: 2020,
    },
  ],
  [
    {
      img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
      name: "Uptown Funk",
      artist: "Mark Ronson ft. Bruno Mars",
      year: 2014,
    },
    {
      img: "https://images.unsplash.com/photo-1503248947681-3198a7abfcc9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80",
      name: "Shape of You",
      artist: "Ed Sheeran",
      year: 2017,
    },
  ],
];
const CARD_WIDTH = Math.min(Dimensions.get("screen").width * 0.75, 400);

export default function PopularEvents() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <View style={styles.container}>
        <Text style={styles.title}>Popular Events</Text>

        <View style={styles.list}>
          <View style={styles.listHeader}>
            <Text style={styles.listTitle}>Sports</Text>

            <TouchableOpacity
              onPress={() => {
                // handle onPress
              }}
            >
              <Text style={styles.listAction}>View All</Text>
            </TouchableOpacity>
          </View>

          <ScrollView
            contentContainerStyle={styles.listContent}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          >
            {songs.map((stack, stackIndex) => {
              return (
                <View key={stackIndex}>
                  {stack.map(({ img, name: title, artist, year }, index) => {
                    const subtitle = `${artist} · ${year}`;
                    return (
                      <TouchableOpacity
                        key={index}
                        onPress={() => {
                          // handle onPress
                        }}
                      >
                        <View style={styles.card}>
                          <Image
                            alt=""
                            source={{ uri: img }}
                            style={styles.cardCover}
                          />

                          <View style={styles.cardBody}>
                            <Text style={styles.cardTitle}>{title}</Text>

                            <Text style={styles.cardSubtitle}>{subtitle}</Text>
                          </View>

                          <View style={styles.cardAction}>
                            <FeatherIcon
                              color="#6A6D70"
                              name="more-vertical"
                              size={20}
                            />
                          </View>
                        </View>
                      </TouchableOpacity>
                    );
                  })}
                </View>
              );
            })}
          </ScrollView>
        </View>

        <View style={styles.list}>
          <View style={styles.listHeader}>
            <Text style={styles.listTitle}>Listen again</Text>

            <TouchableOpacity
              onPress={() => {
                // handle onPress
              }}
            >
              <Text style={styles.listAction}>View All</Text>
            </TouchableOpacity>
          </View>

          <ScrollView
            contentContainerStyle={styles.listContent}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          >
            {songs_2.map((stack, stackIndex) => {
              return (
                <View key={stackIndex}>
                  {stack.map(({ img, name: title, artist, year }, index) => {
                    const subtitle = `${artist} · ${year}`;
                    return (
                      <TouchableOpacity
                        key={index}
                        onPress={() => {
                          // handle onPress
                        }}
                      >
                        <View style={styles.card}>
                          <Image
                            alt=""
                            source={{ uri: img }}
                            style={styles.cardCover}
                          />

                          <View style={styles.cardBody}>
                            <Text style={styles.cardTitle}>{title}</Text>

                            <Text style={styles.cardSubtitle}>{subtitle}</Text>
                          </View>

                          <View style={styles.cardAction}>
                            <FeatherIcon
                              color="#6A6D70"
                              name="more-vertical"
                              size={20}
                            />
                          </View>
                        </View>
                      </TouchableOpacity>
                    );
                  })}
                </View>
              );
            })}
          </ScrollView>
        </View>

        <View style={styles.list}>
          <View style={styles.listHeader}>
            <Text style={styles.listTitle}>Trending songs</Text>

            <TouchableOpacity
              onPress={() => {
                // handle onPress
              }}
            >
              <Text style={styles.listAction}>View All</Text>
            </TouchableOpacity>
          </View>

          <ScrollView
            contentContainerStyle={styles.listContent}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          >
            {songs_3.map((stack, stackIndex) => {
              return (
                <View key={stackIndex}>
                  {stack.map(({ img, name: title, artist, year }, index) => {
                    const subtitle = `${artist} · ${year}`;
                    return (
                      <TouchableOpacity
                        key={index}
                        onPress={() => {
                          // handle onPress
                        }}
                      >
                        <View style={styles.card}>
                          <Image
                            alt=""
                            source={{ uri: img }}
                            style={styles.cardCover}
                          />

                          <View style={styles.cardBody}>
                            <Text style={styles.cardTitle}>{title}</Text>

                            <Text style={styles.cardSubtitle}>{subtitle}</Text>
                          </View>

                          <View style={styles.cardAction}>
                            <FeatherIcon
                              color="#6A6D70"
                              name="more-vertical"
                              size={20}
                            />
                          </View>
                        </View>
                      </TouchableOpacity>
                    );
                  })}
                </View>
              );
            })}
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 24,
    paddingHorizontal: 0,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  title: {
    paddingHorizontal: 24,
    fontSize: 32,
    fontWeight: "700",
    color: "#1d1d1d",
    marginBottom: 12,
  },
  /** List */
  list: {
    marginBottom: 24,
  },
  listHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 24,
  },
  listTitle: {
    fontWeight: "600",
    fontSize: 20,
    lineHeight: 25,
    letterSpacing: 0.38,
    color: "#000",
  },
  listAction: {
    fontWeight: "500",
    fontSize: 15,
    lineHeight: 20,
    textAlign: "right",
    letterSpacing: -0.24,
    color: "#0067ff",
  },
  listContent: {
    paddingTop: 12,
    paddingHorizontal: 18,
    paddingBottom: 0,
  },
  /** Card */
  card: {
    width: CARD_WIDTH,
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 6,
    marginBottom: 12,
  },
  cardCover: {
    width: 74,
    height: 74,
    borderRadius: 18,
    marginRight: 12,
  },
  cardBody: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  cardTitle: {
    fontWeight: "500",
    fontSize: 19,
    lineHeight: 25,
    letterSpacing: 0.38,
    color: "#070b11",
    marginBottom: 6,
  },
  cardSubtitle: {
    fontWeight: "400",
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: -0.24,
    color: "#070b11",
    opacity: 0.6,
  },
  cardAction: {
    paddingHorizontal: 8,
  },
});
