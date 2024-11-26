import { useState } from "react";

import { View, StyleSheet, Alert, Text, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

import { useEvents } from "@/contexts/EventsContext";
import { useForm, useWatch } from "react-hook-form";

import { SupabaseEventType } from "@/types";

import FormInput from "@/components/form-components/FormInput";
import Button from "@/components/buttons/Button";

const CreateEventForm = () => {
  const { control, handleSubmit, reset } = useForm<SupabaseEventType>();
  const { createNewEvent } = useEvents();
  const router = useRouter();

  const [currentStep, setCurrentStep] = useState(0);
  const totalSteps = 4;

  const formData = useWatch({
    control,
    defaultValue: {
      title: "",
      date_of_event: "",
      time_of_event: "",
      number_of_attendees: 0,
      street_address: "",
      postal_code: "",
      city: "",
      category: "",
    },
  });

  const handleFormSubmission = async (data: SupabaseEventType) => {
    try {
      console.log("event has been created: ", data);
      // await createNewEvent(data);
      reset();
      router.push("/explore");
    } catch (error) {
      Alert.alert("Error", (error as Error).message);
    }
  };

  const handleNextStep = () => {
    setCurrentStep((current) => current + 1);
  };

  const handlePreviousStep = () => {
    setCurrentStep((current) => current - 1);
  };

  return (
    <View style={styles.container}>
      <View style={styles.progressBar}>
        <View
          style={[
            styles.progressFill,
            { width: `${(currentStep / totalSteps) * 100}%` },
          ]}
        />
      </View>

      <View style={styles.contentContainer}>
        {currentStep === 0 && (
          <View style={styles.welcomeStepItem}>
            <Text style={styles.welcomeText}>
              Let's create a Minimeet to remember!
            </Text>
            <Text>Create your event in just a few simple steps.</Text>
          </View>
        )}

        {currentStep === 1 && (
          <View>
            <FormInput
              control={control}
              name="title"
              label="Name of Minimeet"
            />
            <FormInput control={control} name="date_of_event" label="Date" />
            <FormInput control={control} name="time_of_event" label="Time" />
          </View>
        )}

        {currentStep === 2 && (
          <View>
            <FormInput
              control={control}
              name="number_of_attendees"
              label="Max. number of attendees"
            />
            <FormInput
              control={control}
              name="street_address"
              label="Street Address"
            />
            <FormInput
              control={control}
              name="postal_code"
              label="Postal Code"
            />
            <FormInput control={control} name="city" label="City" />
          </View>
        )}

        {currentStep === 3 && (
          <View>
            <FormInput control={control} name="category" label="Category" />
          </View>
        )}

        {currentStep === 4 && (
          <View>
            <Text style={styles.overviewTitle}>Event Overview</Text>
            <Text>Name: {formData.title}</Text>
            <Text>Date: {formData.date_of_event}</Text>
            <Text>Time: {formData.time_of_event}</Text>
            <Text>Max Attendees: {formData.number_of_attendees}</Text>
            <Text>Address: {formData.street_address}</Text>
            <Text>Postal Code: {formData.postal_code}</Text>
            <Text>City: {formData.city}</Text>
            <Text>Category: {formData.category}</Text>
          </View>
        )}
      </View>

      <View style={styles.buttonContainer}>
        {currentStep > 0 && (
          <TouchableOpacity
            onPress={() => {
              if (currentStep === 1) {
                reset(); // Reset form if on step 1
              }
              handlePreviousStep();
            }}
            style={[styles.button, styles.backButton]}
          >
            <Text style={styles.buttonText}>Back</Text>
          </TouchableOpacity>
        )}
        {currentStep < totalSteps ? (
          <TouchableOpacity
            onPress={handleNextStep}
            style={[styles.button, styles.nextButton]}
          >
            <Text style={styles.buttonText}>Next</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={handleSubmit(handleFormSubmission)}
            style={[styles.button, styles.nextButton]}
          >
            <Text style={styles.buttonText}>Create Event</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  welcomeStepItem: {
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
    gap: 20,
  },
  container: {
    padding: 20,
    gap: 10,
    flex: 1,
  },
  contentContainer: {
    flex: 1,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  button: {
    padding: 15,
    borderRadius: 8,
    minWidth: 100,
    alignItems: "center",
  },
  backButton: {
    backgroundColor: "#E0E0E0",
  },
  nextButton: {
    backgroundColor: "#007AFF",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },
  progressBar: {
    height: 4,
    backgroundColor: "#E0E0E0",
    borderRadius: 2,
    marginBottom: 20,
  },
  progressFill: {
    height: "100%",
    backgroundColor: "#007AFF",
    borderRadius: 2,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  overviewTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
  },
});

export default CreateEventForm;
