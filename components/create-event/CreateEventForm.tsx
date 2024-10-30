import { View, StyleSheet, Button, Alert } from "react-native";
import { useRouter } from "expo-router";

import { useEvents } from "@/contexts/EventsContext";
import { useForm } from "react-hook-form";

import { SupabaseEventType } from "@/types";

import FormInput from "@/components/form-components/FormInput";

const CreateEventForm = () => {
  const { control, handleSubmit, reset } = useForm<SupabaseEventType>();
  const { createNewEvent } = useEvents();
  const router = useRouter();

  const onSubmit = async (data: SupabaseEventType) => {
    try {
      await createNewEvent(data);
      reset();
      router.push("/explore");
    } catch (error) {
      Alert.alert("Error", (error as Error).message);
    }
  };

  return (
    <View style={styles.container}>
      <FormInput control={control} name="title" label="Name of Minimeet" />
      <FormInput control={control} name="category" label="Category" />
      <FormInput control={control} name="city" label="City" />
      <FormInput
        control={control}
        name="street_address"
        label="Street Address"
      />
      <FormInput control={control} name="postal_code" label="Postal Code" />
      <FormInput
        control={control}
        name="number_of_attendees"
        label="Number of attendees"
      />

      <Button title="Create Event" onPress={handleSubmit(onSubmit)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});

export default CreateEventForm;
