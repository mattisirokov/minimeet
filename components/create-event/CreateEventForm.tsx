import CreateEventStarterScreen from "../screens/CreateEventStarterScreen";

export default function CreateEventForm() {
  return <CreateEventStarterScreen onStartClick={() => console.log("key")} />;
}
