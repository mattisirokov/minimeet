import { useState } from "react";

import { View, Text } from "react-native";
import { useRouter } from "expo-router";

import { useEvents } from "@/contexts/EventsContext";
import { useForm, useWatch } from "react-hook-form";

import CreateEventStarterScreen from "../screens/CreateEventStarterScreen";
import CreateEventFormStep from "./CreateEventFormStep";
import DatePicker from "../form-components/DatePicker";

import { SupabaseEventType } from "@/types";
import MultilineInput from "../form-components/MultilineInput";

export default function CreateEventForm() {
  const { control, handleSubmit, reset, setValue } =
    useForm<SupabaseEventType>();

  const { createNewEvent } = useEvents();

  const [currentStep, setCurrentStep] = useState(0);

  const router = useRouter();

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

  const handleNextStep = () => {
    setCurrentStep((current) => current + 1);
  };

  const handlePreviousStep = () => {
    setCurrentStep((current) => current - 1);
  };

  const handleSubmitEvent = (data: SupabaseEventType) => {
    // createNewEvent(data);
    console.log(data);
    // reset();
    // router.push("/explore");
  };

  return (
    <>
      {currentStep === 0 && (
        <CreateEventStarterScreen onStartClick={handleNextStep} />
      )}
      {currentStep === 1 && (
        <CreateEventFormStep
          backButtonPress={() => {
            handlePreviousStep();
            reset();
          }}
          buttonPress={handleNextStep}
          stepTitle="Minimeet details"
          buttonText="Next"
          formInputs={[
            {
              label: "Title",
              inputProps: {
                placeholder: "Enter event title",
                value: formData.title,
                onChangeText: (text) => setValue("title", text),
                autoCapitalize: "words",
                autoComplete: "off",
                multiline: false,
              },
            },
            {
              label: "Description",
              inputProps: {
                placeholder: "Enter event description",
                multiline: true,
                // value: formData.description,
                // onChangeText: (text) => setValue("description", text),
                autoCapitalize: "words",
                autoComplete: "off",
              },
            },
          ]}
        />
      )}
      {currentStep === 2 && (
        <DatePicker
          title={"Select date"}
          buttonText={"Next"}
          backButtonPress={() => {
            handlePreviousStep();
          }}
          buttonPress={handleNextStep}
          onChange={(date) => setValue("date_of_event", date)}
        />
      )}
      {currentStep === 3 && (
        <CreateEventFormStep
          backButtonPress={handlePreviousStep}
          buttonPress={handleNextStep}
          stepTitle="Location details"
          buttonText="Next"
          formInputs={[
            {
              label: "Street address",
              inputProps: {
                placeholder: "Enter street address",
                value: formData.street_address,
                onChangeText: (text) => setValue("street_address", text),
                autoCapitalize: "words",
                autoComplete: "street-address",
              },
            },
            {
              label: "Postal code",
              inputProps: {
                placeholder: "Enter postal code",
                value: formData.postal_code,
                onChangeText: (text) => setValue("postal_code", text),
                autoComplete: "postal-code",
              },
            },
            {
              label: "City",
              inputProps: {
                placeholder: "Enter city",
                value: formData.city,
                onChangeText: (text) => setValue("city", text),
                autoCapitalize: "words",
              },
            },
          ]}
        />
      )}
      {currentStep === 4 && (
        <CreateEventFormStep
          backButtonPress={handlePreviousStep}
          buttonPress={handleNextStep}
          stepTitle="Event details"
          buttonText="Next"
          formInputs={[
            {
              label: "Category",
              inputProps: {
                placeholder: "Select event category",
                value: formData.category,
                onChangeText: (text) => setValue("category", text),
                autoComplete: "off",
              },
            },
            {
              label: "Max. number of people",
              inputProps: {
                placeholder: "Max. number of people",
                value: formData.number_of_attendees?.toString() || "",
                onChangeText: (text) =>
                  setValue("number_of_attendees", parseInt(text)),
                keyboardType: "numeric",
              },
            },
          ]}
        />
      )}
      {currentStep === 5 && (
        <CreateEventFormStep
          backButtonPress={handlePreviousStep}
          buttonPress={handleSubmit(handleSubmitEvent)}
          stepTitle="Review & Submit"
          buttonText="Create Event"
          formInputs={[]}
          eventSummary={
            <View style={{ gap: 8 }}>
              <Text>Event Summary</Text>
              <Text>Title: {formData.title}</Text>
              <Text>Date: {formData.date_of_event}</Text>
              <Text>Time: {formData.time_of_event}</Text>
              <Text>Location: {formData.street_address}</Text>
              <Text>Category: {formData.category}</Text>
              <Text>Max Attendees: {formData.number_of_attendees}</Text>
            </View>
          }
        />
      )}
    </>
  );
}
