import { TouchableOpacity, View, Image, Text, StyleSheet } from "react-native";
import { UserProfile } from "@/types";

type CreatorProps = {
  user: UserProfile;
};

export default function CreatorCard({ user }: CreatorProps) {
  return (
    <TouchableOpacity
      key={user.id}
      onPress={() => {
        // handle onPress
      }}
    >
      <View style={styles.card}>
        <View style={styles.cardTop}>
          <Image
            alt=""
            resizeMode="cover"
            source={{ uri: user.avatar_url }}
            style={styles.cardImg}
          />

          <View style={styles.cardTopPills}>
            <View style={[styles.cardTopPill, { paddingLeft: 6 }]}>
              <Image
                alt=""
                source={{ uri: user.avatar_url }}
                style={styles.cardTopPillImg}
              />

              <Text style={styles.cardTopPillText}>{user.first_name}</Text>
            </View>

            <View style={styles.cardTopPill}>
              <Text style={styles.cardTopPillText}>{user.last_name}</Text>
            </View>
          </View>
        </View>

        <View style={styles.cardBody}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardTitle}>{user.first_name}</Text>

            <Text style={styles.cardDuration}>{user.last_name}</Text>
          </View>

          <Text style={styles.cardDescription}>{user.last_name}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  /** Card */
  card: {
    padding: 12,
    borderRadius: 24,
    marginBottom: 24,
    minWidth: 250,
    marginRight: 12,
    backgroundColor: "#fff",
  },
  cardTop: {
    position: "relative",
    borderRadius: 24,
  },
  cardImg: {
    width: "100%",
    height: 180,
    borderRadius: 24,
  },
  cardTopPills: {
    position: "absolute",
    right: 0,
    left: 0,
    bottom: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 12,
  },
  cardTopPill: {
    height: 36,
    paddingHorizontal: 14,
    backgroundColor: "#fff",
    borderRadius: 24,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  cardTopPillImg: {
    width: 24,
    height: 24,
    borderRadius: 9999,
    marginRight: 8,
  },
  cardTopPillText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#222",
  },
  cardBody: {
    paddingVertical: 16,
    paddingHorizontal: 12,
  },
  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  cardTitle: {
    fontSize: 19,
    fontWeight: "700",
    color: "#222",
  },
  cardDuration: {
    fontSize: 16,
    fontWeight: "700",
    color: "#6a6bff",
  },
  cardDescription: {
    fontSize: 15,
    letterSpacing: 0.25,
    lineHeight: 22,
    fontWeight: "500",
    color: "#545454",
  },
});
