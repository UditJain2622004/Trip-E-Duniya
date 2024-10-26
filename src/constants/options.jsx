export const SelectTravelesList = [
  {
    id: 1,
    title: "Just me",
    desc: "A sole travels in exploration",
    icon: "✈️",
    people: "1",
  },
  {
    id: 2,
    title: "A couple",
    desc: "Two traverles in tandem",
    icon: "🥂",
    people: "2 people",
  },
  {
    id: 3,
    title: "Family",
    dsec: "A group of fun loving adv",
    icon: "🏡",
    people: "3 to 5 people",
  },
  {
    id: 4,
    title: "Friends",
    desc: "A bunch of thrill-seekes",
    icon: "🙋🏼",
    people: "5 to 10 people",
  },
];

export const SelectBudgetOptions = [
  {
    id: 1,
    title: "Cheap",
    desc: "Stay concious of costs",
    icon: "🎃",
  },
  {
    id: 2,
    title: "Moderate",
    desc: "Keep cost on the average side",
    icon: "💰",
  },
  {
    id: 3,
    title: "Luxury",
    desc: "Do not worry about cost",
    icon: "💸",
  },
];
export const AI_PROMPT = `Generate Travel Plan for Location : {location}, for {noOfDays} days for {traveller} with a {budget} budget. Give me a hotel options list with Hotel Name, Hotel Address, Hotel Price, Hotel image url, geo coordinates, rating, descritions and suggest itinerary with placeName, place details, Place image url, geo coordinates, ticket pricing, rating, time to travel each of the location for {noOfDays} days with each day paln with best time visit in JSON format`;
