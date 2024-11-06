import React, { createContext, useState, useContext, useEffect } from "react";

import { Session } from "@supabase/supabase-js";
import { supabase } from "@/config/supabase";

import { AuthContextType, UserProfile } from "@/types";

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [session, setSession] = useState<Session | null>(null);

  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);

  const [loading, setLoading] = useState(true);

  const fetchUserData = async (userId: string) => {
    const { data, error } = await supabase
      .from("Users")
      .select("*")
      .eq("user_id", userId)
      .single();

    if (error) {
      console.error("Error fetching user data:", error);
      return null;
    }

    return data;
  };

  useEffect(() => {
    const fetchSessionAndUser = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      setSession(session);
      if (session?.user) {
        const userData = await fetchUserData(session.user.id);
        setUserProfile({ ...session.user, ...userData });
      }
      setLoading(false);
    };

    fetchSessionAndUser();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (_event, session) => {
      setSession(session);
      if (session?.user) {
        const userData = await fetchUserData(session.user.id);
        setUserProfile({ ...session.user, ...userData });
      }
      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  const signIn = async (email: string, password: string) => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) throw error;
  };

  const signOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
  };

  const value: AuthContextType = {
    session,
    userProfile,
    signIn,
    signOut,
    loading,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

type AuthenticatedContextType = Omit<
  AuthContextType,
  "session" | "userProfile"
> & {
  session: Session;
  userProfile: UserProfile;
};

export const useAuthenticatedUser = () => {
  const context = useAuth();
  return context as AuthenticatedContextType;
};
