import { useAuth } from "@/contexts/AuthContext";

import HomeScreenLayout from "@/components/welcome/HomeScreenLayout";
import PopularEvents from "@/components/carousels/PopularEvents";

export default function HomeScreen() {
  const { userProfile } = useAuth();

  return (
    <HomeScreenLayout userProfile={userProfile}>
      <PopularEvents />
    </HomeScreenLayout>
  );
}
