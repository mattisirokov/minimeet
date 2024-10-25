import React, { createContext, useState, useContext, useEffect } from "react";

import { Session } from "@supabase/supabase-js";
import { supabase } from "@/config/supabase";

import { ExtendedUser } from "@/types";

// Define a default user object
const defaultUser: ExtendedUser = {
  id: "",
  app_metadata: {},
  user_metadata: {},
  aud: "",
  created_at: "",
  top_creator: false,
};

type AuthContextType = {
  session: Session | null;
  user: ExtendedUser;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
  loading: boolean;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [session, setSession] = useState<Session | null>(null);
  const [user, setUser] = useState<ExtendedUser>(defaultUser);
  const [loading, setLoading] = useState(true);

  // Add this function to fetch additional user data from a Users table
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
        console.log("Fetched user data:", userData);
        setUser({ ...session.user, ...userData });
      } else {
        setUser(defaultUser);
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
        setUser({ ...session.user, ...userData });
      } else {
        setUser(defaultUser);
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
    user,
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
