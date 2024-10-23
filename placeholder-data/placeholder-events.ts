export type EventType = {
  id: number;
  title: string;
  image: string;
  icon: string;
  category: string;
  city: string;
  coordinates: {
    latitude: number;
    longitude: number;
  };
  numberOfPeopleGoing: number;
};

export const events: EventType[] = [
  {
    id: 1,
    title: "Influencer Wellness Retreat: Sauna and Ice Plunge",
    image: "https://picsum.photos/200/300",
    icon: "tint",
    category: "Wellness",
    city: "Helsinki",
    coordinates: {
      latitude: 60.1699,
      longitude: 24.9384,
    },
    numberOfPeopleGoing: 15,
  },
  {
    id: 2,
    title: "Instagram-Worthy Helsinki Design Tour",
    image: "https://picsum.photos/200/300",
    icon: "map-signs",
    category: "Culture",
    city: "Helsinki",
    coordinates: {
      latitude: 60.162109908622945,
      longitude: 24.93292104437025,
    },
    numberOfPeopleGoing: 8,
  },
  {
    id: 3,
    title: "TikTok Chef's Nordic Cuisine Masterclass",
    image: "https://picsum.photos/200/300",
    icon: "cutlery",
    category: "Food",
    city: "Helsinki",
    coordinates: {
      latitude: 60.15693373727653,
      longitude: 24.92054189649431,
    },
    numberOfPeopleGoing: 12,
  },
  {
    id: 4,
    title: "Sunset Yacht Party with Top Travel Vloggers",
    image: "https://picsum.photos/200/300",
    icon: "ship",
    category: "Sightseeing",
    city: "Helsinki",
    coordinates: {
      latitude: 60.15643367426572,
      longitude: 24.937779634561355,
    },
    numberOfPeopleGoing: 25,
  },
];
