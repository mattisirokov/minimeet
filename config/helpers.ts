// function to format the description of an event

export const formatDescription = (description: string) => {
  return description
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line.length > 0);
};

// function to assign an icon to a category

export const getCategoryIcon = (category: string) => {
  switch (category) {
    case "Music":
      return "music";
    case "Sports":
      return "futbol-o";
    case "Food":
      return "cutlery";
    case "Arts":
      return "paint-brush";
    case "Technology":
      return "laptop";
    case "Education":
      return "graduation-cap";
    case "Networking":
      return "users";
    case "Entertainment":
      return "star";
    case "Knitting":
      return "star";
    default:
      return "calendar";
  }
};

// function to format date from 2024-01-01 to January 1, 2024

export const formatDate = (date: string | null) => {
  if (!date) return null;

  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return new Date(date).toLocaleDateString("en-US", options);
};

// function to format time from 15:00:13 to 15:00

export const formatTime = (time: string | null) => {
  if (!time) return null;

  const timeParts = time.split(":");
  if (timeParts.length < 2) return null;

  return timeParts[0] + ":" + timeParts[1];
};
