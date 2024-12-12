import {
  StyleSheet,
  StatusBar,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Image,
} from "react-native";

const tags = ["ios", "android", "web", "ui", "ux"];

type CreatorOverviewProps = {
  creatorID: string;
};

export default function Example({ creatorID }: CreatorOverviewProps) {
  // function to get the user profile based on the userID
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <View style={styles.profile}>
          <View style={styles.profileTop}>
            <View style={styles.avatar}>
              <Image
                alt=""
                source={{
                  uri: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80",
                }}
                style={styles.avatarImg}
              />

              <View style={styles.avatarNotification} />
            </View>

            <View style={styles.profileBody}>
              <Text style={styles.profileTitle}>{"Matti\nSirokov"}</Text>

              <Text style={styles.profileSubtitle}>
                UI/UX Designer
                {" · "}
                <Text style={{ color: "#266EF1" }}>Time Studio</Text>
              </Text>
            </View>
          </View>

          <Text style={styles.profileDescription}>
            Skilled in user research, wireframing, prototyping, and
            collaborating with cross-functional teams.
          </Text>

          <View style={styles.profileTags}>
            {tags.map((tag, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => {
                  // handle onPress
                }}
              >
                <Text style={styles.profileTagsItem}>#{tag}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 5,
    paddingHorizontal: 0,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  /** Profile */
  profile: {
    backgroundColor: "transparent",
    padding: 24,
  },
  profileTop: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  profileBody: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    paddingLeft: 16,
  },
  profileTitle: {
    fontSize: 28,
    fontWeight: "bold",
    lineHeight: 32,
    color: "#121a26",
    marginBottom: 6,
  },
  profileSubtitle: {
    fontSize: 15,
    fontWeight: "600",
    color: "#778599",
  },
  profileDescription: {
    fontSize: 14,
    fontWeight: "500",
    lineHeight: 18,
    color: "#778599",
  },
  profileTags: {
    marginTop: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  profileTagsItem: {
    fontSize: 14,
    fontWeight: "600",
    lineHeight: 18,
    color: "#266ef1",
    marginRight: 4,
  },
  /** Avatar */
  avatar: {
    position: "relative",
  },
  avatarImg: {
    width: 80,
    height: 80,
    borderRadius: 9999,
  },
  avatarNotification: {
    position: "absolute",
    borderRadius: 9999,
    borderWidth: 2,
    borderColor: "#fff",
    bottom: 0,
    right: -2,
    width: 21,
    height: 21,
    backgroundColor: "#22C55E",
  },
});
