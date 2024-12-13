import React, { createContext, useState, useContext, useEffect } from "react";

import { Session } from "@supabase/supabase-js";
import { supabase } from "@/config/supabase";

import { AuthContextType, LoadingStatus, UserProfile } from "@/types";

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [session, setSession] = useState<Session | null>(null);
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [status, setStatus] = useState<LoadingStatus>("fetching");

  const fetchUserData = async (userId: string) => {
    console.log(`Fetching user data for userId: ${userId}...`);
    const { data, error } = await supabase
      .from("Users")
      .select("*")
      .eq("user_id", userId)
      .single();

    if (error) {
      console.error("Error fetching user data:", error);
      return null;
    }

    console.log("Successfully fetched user data");
    return data;
  };

  useEffect(() => {
    const fetchSessionAndUser = async () => {
      console.log("Fetching session and user data...");
      setStatus("fetching");
      try {
        const {
          data: { session },
        } = await supabase.auth.getSession();
        setSession(session);
        if (session?.user) {
          const userData = await fetchUserData(session.user.id);
          setUserProfile({ ...session.user, ...userData });
        }
        setStatus("complete");
        console.log("Successfully fetched session and user data");
      } catch (error) {
        setStatus("error");
        console.error("Error fetching session:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSessionAndUser();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (_event, session) => {
      console.log("Auth state changed, updating session and user data...");
      setStatus("fetching");
      try {
        setSession(session);
        if (session?.user) {
          const userData = await fetchUserData(session.user.id);
          setUserProfile({ ...session.user, ...userData });
        }
        setStatus("complete");
        console.log(
          "Successfully updated session and user data after auth change"
        );
      } catch (error) {
        setStatus("error");
        console.error("Error during auth state change:", error);
      } finally {
        setLoading(false);
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  const getSingleUserProfile = async (userId: string) => {
    const { data, error } = await supabase
      .from("Users")
      .select("*")
      .eq("user_id", userId)
      .single();

    if (error) {
      console.error("Error fetching user profile:", error);
      return null;
    }

    return data;
  };

  const signIn = async (email: string, password: string) => {
    console.log("Attempting to sign in...");
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) {
      console.error("Sign in failed:", error);
      throw error;
    }
    console.log("Successfully signed in");
  };

  const signOut = async () => {
    console.log("Attempting to sign out...");
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error("Sign out failed:", error);
      throw error;
    }
    console.log("Successfully signed out");
  };

  const value: AuthContextType = {
    session,
    userProfile,
    getSingleUserProfile,
    signIn,
    signOut,
    loading,
    status,
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
