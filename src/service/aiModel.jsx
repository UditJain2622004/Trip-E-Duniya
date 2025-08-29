// let prompt = `Generate Travel Plan for Location : Las Vegas, for 3 days for couple with a cheap budget. Give me a hotel options list with Hotel Name, Hotel Address, Price, Hotel image url, geo coordinates, rating, descritions and suggest itinerary with placeName, place details, Place image url, geo coordinates, ticket pricing,rating, time to travel each of the location for 3 days with each day paln with best time visit in JSON format`;

/*
 * Install the Generative AI SDK
 *
 * $ npm install @google/generative-ai
 */

// const {
//   GoogleGenerativeAI,
//   HarmCategory,
//   HarmBlockThreshold,
// } = require("@google/generative-ai");

import {
  GoogleGenerativeAI,
  //   HarmCategory,
  //   HarmBlockThreshold,
} from "@google/generative-ai";

const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
// console.log(apiKey);

const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-2.5-flash-lite",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
};

export const chatSession = model.startChat({
  generationConfig,
  // safetySettings: Adjust safety settings
  // See https://ai.google.dev/gemini-api/docs/safety-settings
  history: [
    {
      role: "user",
      parts: [
        {
          text: "Generate Travel Plan for Location : Las Vegas, for 3 days for couple with a cheap budget. Give me a hotel options list with Hotel Name, Hotel Address, Price, Hotel image url, geo coordinates, rating, descritions and suggest itinerary with placeName, place details, Place image url, geo coordinates, ticket pricing,rating, time to travel each of the location for 3 days with each day paln with best time visit in JSON format",
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: '```json\n{\n  "hotel_options": [\n    {\n      "name": "The D Las Vegas",\n      "address": "301 Fremont Street, Las Vegas, NV 89101",\n      "price": "100$",\n      "image_url": "https://images.trvl-media.com/media/content/hotels/15782/1485772668.jpg",\n      "geo_coordinates": [36.1699, -115.1423],\n      "rating": 4.0,\n      "description": "A downtown hotel with a retro vibe, offering affordable rooms, a casino, and a rooftop pool."\n    },\n    {\n      "name": "Circus Circus Hotel & Casino",\n      "address": "2880 S Las Vegas Blvd, Las Vegas, NV 89109",\n      "price": "150$",\n      "image_url": "https://images.trvl-media.com/media/content/hotels/3836/1537807870.jpg",\n      "geo_coordinates": [36.1024, -115.1712],\n      "rating": 3.5,\n      "description": "A budget-friendly option known for its circus-themed entertainment, casino, and a variety of dining options."\n    },\n    {\n      "name": "Golden Nugget Hotel & Casino",\n      "address": "129 E Fremont St, Las Vegas, NV 89101",\n      "price": "250$",\n      "image_url": "https://images.trvl-media.com/media/content/hotels/1413/1598533007.jpg",\n      "geo_coordinates": [36.1695, -115.1426],\n      "rating": 4.5,\n      "description": "A historic hotel with a luxurious feel, featuring a casino, a shark tank, and a variety of restaurants."\n    },\n    {\n      "name": "The Orleans Hotel & Casino",\n      "address": "4500 W Tropicana Ave, Las Vegas, NV 89103",\n      "price": "125$",\n      "image_url": "https://images.trvl-media.com/media/content/hotels/1497/1579421020.jpg",\n      "geo_coordinates": [36.0936, -115.2054],\n      "rating": 4.0,\n      "description": "A large resort with a casual atmosphere, offering a casino, multiple dining options, and entertainment."\n    },\n    {\n      "name": "South Point Hotel, Casino & Spa",\n      "address": "9777 Las Vegas Blvd S, Las Vegas, NV 89183",\n      "price": "50$",\n      "image_url": "https://images.trvl-media.com/media/content/hotels/1601/1485499013.jpg",\n      "geo_coordinates": [35.9886, -115.1117],\n      "rating": 4.0,\n      "description": "A sprawling resort with a focus on entertainment, featuring a casino, a bowling alley, and a spa."\n    }\n  ],\n  "itinerary": [\n    {\n      "day": 1,\n      "theme": "Downtown Delights",\n      "plan": [\n        {\n          "time": "10:00 AM",\n          "placeName": "Fremont Street Experience",\n          "placeDetails": "A pedestrian mall with a canopy of lights, live music, street performers, and casinos.",\n          "placeImageUrl": "https://www.vegasexperience.com/media/2166/freemont-street-experience-las-vegas-banner.jpg",\n          "geo_coordinates": [36.1697, -115.1435],\n          "ticketPricing": "Free",\n          "rating": 4.5,\n          "timeToTravel": "2 hours"\n        },\n        {\n          "time": "12:00 PM",\n          "placeName": "Heart Attack Grill",\n          "placeDetails": "A quirky restaurant known for its outrageous burgers and calorie-laden food.",\n          "placeImageUrl": "https://media-cdn.tripadvisor.com/media/photo-s/10/2b/0e/13/heart-attack-grill-las.jpg",\n          "geo_coordinates": [36.1695, -115.1438],\n          "ticketPricing": "35$",\n          "rating": 4.0,\n          "timeToTravel": "1 hour"\n        },\n        {\n          "time": "2:00 PM",\n          "placeName": "Mob Museum",\n          "placeDetails": "A museum dedicated to the history of organized crime in Las Vegas.",\n          "placeImageUrl": "https://www.mobmuseum.org/media/2020/12/Mob-Museum-Exterior-Daylight.jpg",\n          "geo_coordinates": [36.1688, -115.1445],\n          "ticketPricing": "20$",\n          "rating": 4.5,\n          "timeToTravel": "2 hours"\n        },\n        {\n          "time": "6:00 PM",\n          "placeName": "Binions Gambling Hall",\n          "placeDetails": "A historic casino with a classic atmosphere and a famous poker room.",\n          "placeImageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Binion%27s_Horseshoe_Las_Vegas_2008.jpg/1280px-Binion%27s_Horseshoe_Las_Vegas_2008.jpg",\n          "geo_coordinates": [36.1691, -115.1435],\n          "ticketPricing": "Free",\n          "rating": 4.0,\n          "timeToTravel": "1 hour"\n        },\n        {\n          "time": "8:00 PM",\n          "placeName": "Four Queens Hotel & Casino",\n          "placeDetails": "A downtown hotel with a classic casino and a variety of dining options.",\n          "placeImageUrl": "https://images.trvl-media.com/media/content/hotels/1583/1485772681.jpg",\n          "geo_coordinates": [36.1694, -115.1422],\n          "ticketPricing": "Free",\n          "rating": 4.0,\n          "timeToTravel": "1 hour"\n        }\n      ]\n    },\n    {\n      "day": 2,\n      "theme": "Strip Spectacle",\n      "plan": [\n        {\n          "time": "10:00 AM",\n          "placeName": "Bellagio Conservatory & Botanical Garden",\n          "placeDetails": "A stunning display of flowers, plants, and sculptures.",\n          "placeImageUrl": "https://www.bellagio.com/content/dam/bellagio/images/explore/conservatory-and-botanical-garden/Conservatory-Garden-01.jpg",\n          "geo_coordinates": [36.1135, -115.1728],\n          "ticketPricing": "Free",\n          "rating": 4.5,\n          "timeToTravel": "1 hour"\n        },\n        {\n          "time": "11:00 AM",\n          "placeName": "The Venetian and The Palazzo",\n          "placeDetails": "A luxurious resort with a replica of Venice, including canals, gondolas, and shops.",\n          "placeImageUrl": "https://www.venetian.com/content/dam/venetian/images/explore/venetian-and-palazzo/Venetian_Palazzo-01.jpg",\n          "geo_coordinates": [36.1138, -115.1722],\n          "ticketPricing": "Free",\n          "rating": 4.0,\n          "timeToTravel": "2 hours"\n        },\n        {\n          "time": "1:00 PM",\n          "placeName": "The LINQ Promenade",\n          "placeDetails": "An outdoor shopping and dining area with attractions like the High Roller observation wheel.",\n          "placeImageUrl": "https://www.caesars.com/content/dam/caesars/linq/images/linq-promenade.jpg",\n          "geo_coordinates": [36.1189, -115.1725],\n          "ticketPricing": "Free",\n          "rating": 4.0,\n          "timeToTravel": "2 hours"\n        },\n        {\n          "time": "5:00 PM",\n          "placeName": "Fountains of Bellagio",\n          "placeDetails": "A choreographed water and light show set to music.",\n          "placeImageUrl": "https://www.bellagio.com/content/dam/bellagio/images/explore/fountains-of-bellagio/Fountains-of-Bellagio-01.jpg",\n          "geo_coordinates": [36.1135, -115.1728],\n          "ticketPricing": "Free",\n          "rating": 4.5,\n          "timeToTravel": "1 hour"\n        },\n        {\n          "time": "7:00 PM",\n          "placeName": "The Mirage Volcano",\n          "placeDetails": "A nightly eruption of fire and water set to music.",\n          "placeImageUrl": "https://www.mirage.com/content/dam/mirage/images/explore/volcano/Volcano-01.jpg",\n          "geo_coordinates": [36.1165, -115.1746],\n          "ticketPricing": "Free",\n          "rating": 4.0,\n          "timeToTravel": "1 hour"\n        }\n      ]\n    },\n    {\n      "day": 3,\n      "theme": "Nature and Culture",\n      "plan": [\n        {\n          "time": "9:00 AM",\n          "placeName": "Red Rock Canyon National Conservation Area",\n          "placeDetails": "A scenic desert landscape with hiking trails and rock formations.",\n          "placeImageUrl": "https://www.nps.gov/redr/learn/nature/images/Red-Rock-Canyon-Skyline-View.jpg",\n          "geo_coordinates": [36.1535, -115.2730],\n          "ticketPricing": "150$",\n          "rating": 4.5,\n          "timeToTravel": "4 hours"\n        },\n        {\n          "time": "1:00 PM",\n          "placeName": "Neon Museum",\n          "placeDetails": "A museum of historic Las Vegas neon signs.",\n          "placeImageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Neon_Museum_Las_Vegas.jpg/1280px-Neon_Museum_Las_Vegas.jpg",\n          "geo_coordinates": [36.1756, -115.1565],\n          "ticketPricing": "50$",\n          "rating": 4.0,\n          "timeToTravel": "2 hours"\n        },\n        {\n          "time": "4:00 PM",\n          "placeName": "The Arts Factory",\n          "placeDetails": "A complex of galleries, studios, and shops showcasing local artists.",\n          "placeImageUrl": "https://www.theartsfactory.com/wp-content/uploads/2019/01/arts-factory-gallery-space.jpg",\n          "geo_coordinates": [36.1715, -115.1555],\n          "ticketPricing": "Free",\n          "rating": 4.0,\n          "timeToTravel": "1 hour"\n        },\n        {\n          "time": "6:00 PM",\n          "placeName": "Downtown Container Park",\n          "placeDetails": "A unique shopping and dining area with repurposed shipping containers.",\n          "placeImageUrl": "https://www.containerpark.com/wp-content/uploads/2018/09/CONTAINER-PARK-LAS-VEGAS.jpg",\n          "geo_coordinates": [36.1697, -115.1415],\n          "ticketPricing": "Free",\n          "rating": 4.0,\n          "timeToTravel": "1 hour"\n        }\n      ]\n    }\n  ]\n}\n```\n\n**Notes:**\n\n* The budget is assumed to be around $100-$150 per day per person.\n* Food costs are not included in the itinerary.\n* Ticket prices are approximate and subject to change.\n* You can adjust the itinerary based on your interests and time constraints.\n* Consider using public transportation or ride-sharing services to save on costs.\n* Look for discounts and free events to maximize your experience.\n* Remember to pack comfortable shoes and sunscreen.\n* Have fun and enjoy Las Vegas!',
        },
      ],
    },
  ],
});

// const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
// console.log(result.response.text());
