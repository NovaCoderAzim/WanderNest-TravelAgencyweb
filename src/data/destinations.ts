export interface Attraction {
  name: string;
  description: string;
  image?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Destination {
  id: string;
  name: string;
  tagline: string;
  image: string;
  duration: string;
  bestFor: string[];
  bestSeason: string;
  startingPrice: number;
  overview: string;
  attractions: Attraction[];
  recommendedDuration: string;
  travelTips: string[];
  faq: FAQItem[];
}

export const destinations: Destination[] = [
  {
    id: "ooty",
    name: "Ooty",
    tagline: "Queen of the Hill Stations",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDBPJp31M0w2MLPKPzOUEzpvecvO15byCKgI_TAHwmT8c5GziNkiSNOdfeN8ULTnDlx2YqOYw8MHiEhpZx35Dg5bYCQzvr5QP4Uj37TgIT6AacHdHMOWKm8_Z1JHCtkUw-d_o2V-07r_m5wEAFScAXEqRTFAc0kC8FfBDYYx3xzOqgPu-bByu_Esf1EFAVEwJkXI9nyUc03sDSoJDbHrixGQV1sbA1ig5kQhgVR_hQqPFLDDvfJwgW3",
    duration: "3 Days / 2 Nights",
    bestFor: ["Hill Stations", "Family Trips", "Honeymoon"],
    bestSeason: "October to June",
    startingPrice: 9999,
    overview: "Nestled in the beautiful Nilgiri Hills, Ooty (short for Ootacamund) is South India's most popular hill station. Boasting lush green tea gardens, misty winding roads, colonial architecture, and a cool climate, it offers a soothing escape from the bustling city life of Chennai.",
    attractions: [
      {
        name: "Ooty Botanical Gardens",
        description: "Spread over 55 hectares, this terraced garden houses thousands of exotic plant species and a fossilized tree trunk estimated to be 20 million years old.",
        image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=800&q=80"
      },
      {
        name: "Doddabetta Peak",
        description: "The highest point in South India at 2,637 meters, offering breathtaking panoramic views of the entire Nilgiri mountain range.",
        image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80"
      },
      {
        name: "Nilgiri Mountain Railway",
        description: "A UNESCO World Heritage steam toy train that chugs through deep pine forests, misty dark tunnels, and steep cliffs from Mettupalayam to Ooty.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBZ9rWlVjkoGKaiyqCLz6ajXLMLeSVbI6KwkslfXQWA7ETnvrQxB09bxymJ77PEZIY2oA0fjEDO6alQ23ZHt8TJcjR94jKock_Qoc1V-4zFxGj-YrlZO0sEYFL47uBT1Mx-sMBHRxJYJxti2b17Hk-BZ1Iex06-rRbK0JsQy2QbwlZ2p-BKy4jV4bfkQpVzL68sEKQrYsEXHKChXkha_GX5vAG5qfVpsH-elUiNmbJgj627sopk_gPF"
      }
    ],
    recommendedDuration: "2 to 4 Days",
    travelTips: [
      "Carry light woolens even in summer, as evenings can get quite cool.",
      "Book the toy train tickets well in advance as seats sell out fast.",
      "Try the local Nilgiri tea varieties and freshly baked homemade chocolates."
    ],
    faq: [
      {
        question: "What is the best time to visit Ooty?",
        answer: "The best time to visit is from October to June when the weather is pleasant and ideal for sightseeing."
      },
      {
        question: "How long does it take to travel from Chennai to Ooty by road?",
        answer: "It takes about 9-10 hours to cover the 550 km distance via the Bangalore highway, including the winding hill road section."
      }
    ]
  },
  {
    id: "kodaikanal",
    name: "Kodaikanal",
    tagline: "Princess of Hill Stations",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAsBWoyxhA95vsTyp2TPV8gkYLTtIjRvls2Z8Xfx2eipHSt1blmXEdaVHJPsDHN0LpdQKE2gQs8Ul_KPVGy0igP-QFukmgDMfFmfYRmnRBxRwaNOKrbkZgMlBHH0eeoJCqLLq45Zmox9uD3yLg1fifMDck8mXGtuaooYyCYfGcX5peneUWx_xxSZgwInUr6wBba4yjdzzD8PXclerx8uuAYH7_Ehht5KfVMaz0XMKnKQgQIiKrGZVWf",
    duration: "3 Days / 2 Nights",
    bestFor: ["Nature", "Family Trips", "Couples"],
    bestSeason: "September to May",
    startingPrice: 10999,
    overview: "Set on an alpine plateau at an elevation of 2,133 meters, Kodaikanal is a serene haven of dense pine forests, misty valleys, cold creeks, and spectacular viewpoints. Known for its star-shaped man-made lake and tranquil walking trails.",
    attractions: [
      {
        name: "Kodaikanal Lake",
        description: "A gorgeous star-shaped lake in the center of the town. Tourists can rent rowboats, pedal boats, or ride bicycles along the outer edge.",
        image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=800&q=80"
      },
      {
        name: "Coaker's Walk",
        description: "A paved pedestrian path along steep mountain ridges, offering dramatic views of plains, valleys, and clouds floating directly below.",
        image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=80"
      },
      {
        name: "Pine Forest",
        description: "A majestic, preserved forest of towering pine trees, providing an ethereal, atmospheric setting for photographers and film shoots.",
        image: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=800&q=80"
      }
    ],
    recommendedDuration: "2 to 3 Days",
    travelTips: [
      "Carry an umbrella or raincoat as brief mountain showers are common year-round.",
      "Check out the Kurinji flower museum if you are interested in botany.",
      "Buy fresh plums, pears, and local natural oils during your trip."
    ],
    faq: [
      {
        question: "How is Kodaikanal different from Ooty?",
        answer: "Kodaikanal is generally quieter, less commercial, and has a wilder, forest-rich landscape compared to Ooty's extensive tea gardens."
      }
    ]
  },
  {
    id: "pondicherry",
    name: "Pondicherry",
    tagline: "French Charm by the Coast",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDxhPmvAXO95AqPSiETaxzQn7cYzhyYr3Rfqv3fj_sxiU3uDQRwSnB17XvoRtI3kmfJy8xc1Vh0aIaLbjUPnr4RxfUOkYTJN2kiX6UwgPKKwPSbGg5OWbE2-f3D5r41VvWIjLYiUZedMUxuCTbc_ZI2ExMfugLd8HozEK1rsry3BBXbCmWFLO0Spm0xQr14NEbcvzd3dLFniRBx1OoNsBgbk0qvIULQp2fA23p478Om5n40FZu_fxKN",
    duration: "2 Days / 1 Night",
    bestFor: ["Weekend Getaways", "Couples", "Friends"],
    bestSeason: "October to March",
    startingPrice: 7999,
    overview: "Pondicherry (Puducherry) is a charming coastal enclave that blends French colonial heritage with classic South Indian culture. With yellow stucco houses, vibrant bougainvillea walls, quiet beaches, and delicious fusion bakeries, it is a perfect weekend getaway from Chennai.",
    attractions: [
      {
        name: "The French Quarter (White Town)",
        description: "Known for its clean cobblestone streets, colonial-style villas, cute French cafes, boutique shops, and historical government monuments.",
        image: "https://images.unsplash.com/photo-1601999109332-542b18dbec57?auto=format&fit=crop&w=800&q=80"
      },
      {
        name: "Promenade Beach",
        description: "A beautiful 1.5 km long rock-lined shoreline walk, closing to vehicle traffic in the evenings to allow relaxing beach walks.",
        image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80"
      },
      {
        name: "Auroville",
        description: "An experimental township dedicated to human unity. Features the Matrimandir, a massive, golden-domed meditation sphere.",
        image: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=800&q=80"
      }
    ],
    recommendedDuration: "1 to 2 Days",
    travelTips: [
      "Rent a bicycle or electric scooter to explore the French Quarter at your own pace.",
      "Visit Baker Street or Cafe des Arts for authentic croissants and french pastries.",
      "Maintain quiet decorum when visiting Sri Aurobindo Ashram."
    ],
    faq: [
      {
        question: "How far is Pondicherry from Chennai?",
        answer: "It is about 150 km away and takes roughly 3 hours to travel along the scenic East Coast Road (ECR)."
      }
    ]
  },
  {
    id: "madurai",
    name: "Madurai",
    tagline: "Temple City & Cultural Capital",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBmuRkXT9wbk0Uy4-MTp6dtOYzjPth8uToR47G3bQNkFCfd0eDdJ81ROKWEPcXApPom_GOupPnW1gIu0qQY4njKKMQplPmiB_9-ePx_3ECJG29XrYgczizLMhBcfFanBtXm4J06tg9xcFe9Idlucf1H_kD3pnstL3T8URDbO2gps4LXnhbORlSdwMc3Yh5fenKR8YCKFF4e3gH07pqUVorYkNJXLf7sqH-BFDRvnb60XoyojBT3QQoQ",
    duration: "2 Days / 1 Night",
    bestFor: ["Pilgrimage", "Culture", "Family Trips"],
    bestSeason: "October to March",
    startingPrice: 6999,
    overview: "Madurai is one of the oldest continuously inhabited cities in the world. Centered around the architectural masterpiece of the Meenakshi Temple, the city is a vibrant, bustling hub of ancient South Indian history, famous cuisine, and heritage.",
    attractions: [
      {
        name: "Meenakshi Amman Temple",
        description: "An ancient temple dedicated to Parvati and Shiva, featuring 14 towering gopurams decorated with thousands of colorful stone deities.",
        image: "https://images.unsplash.com/photo-1608958416710-bb2e20ffc059?auto=format&fit=crop&w=800&q=80"
      },
      {
        name: "Thirumalai Nayakkar Mahal",
        description: "A 17th-century palace built by the Nayak Dynasty, renowned for its massive, white circular pillars and spectacular light and sound show.",
        image: "https://images.unsplash.com/photo-1600100397608-f010e427eb72?auto=format&fit=crop&w=800&q=80"
      }
    ],
    recommendedDuration: "1 to 2 Days",
    travelTips: [
      "Follow temple dress codes: shoulders and knees must be fully covered, and leather items are prohibited.",
      "Don't miss trying the famous Madurai Jigarthanda, a cool, sweet almond gum beverage."
    ],
    faq: [
      {
        question: "Can this package be combined with Rameswaram?",
        answer: "Yes, many travelers book a 3-4 day combined trip covering both Madurai and Rameswaram, which are about 170 km apart."
      }
    ]
  },
  {
    id: "yercaud",
    name: "Yercaud",
    tagline: "Jewel of the Shevaroys",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    duration: "2 Days / 1 Night",
    bestFor: ["Hill Stations", "Weekend Getaways"],
    bestSeason: "October to June",
    startingPrice: 5999,
    overview: "A quieter and budget-friendly hill station located in the Shevaroy Hills. Known for its extensive coffee plantations, scenic loop roads, and a beautiful central lake.",
    attractions: [
      {
        name: "Yercaud Lake & Loop Road",
        description: "Enjoy boating in the emerald lake, followed by a scenic drive through a 32-km loop road bordered by coffee estates.",
        image: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=800&q=80"
      }
    ],
    recommendedDuration: "1 to 2 Days",
    travelTips: ["Visit the Silk Farm and Rose Garden to see botanical displays."],
    faq: []
  },
  {
    id: "rameswaram",
    name: "Rameswaram",
    tagline: "Holy Island of Devotion",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDhABxPL40PmI6oLg8XaGJmwts2aD2HeiW3Z8StSEaYizHAVSYL2gOZ7Y33tVhDNFip0CSbg_fGvh3cHoHCea_YWTSLEzEGu5-EIjIPfGfE8mvUstR8e7HBlg0Ryb_mHEV-sX20SY9ZaCqfou36bFl1PPsp0FLewV3akNT7kVj1MypPXGOsvFHX7ClqVPn8F9vD_Ib-Q_2BxGXZ2LIkZZHw_D3BUHrPxOzCuOGcy4MAKH5qeHN5nLQV",
    duration: "3 Days / 2 Nights",
    bestFor: ["Pilgrimage", "Heritage"],
    bestSeason: "October to March",
    startingPrice: 8999,
    overview: "An island town connected to mainland India by the historic Pamban Bridge. A major pilgrimage destination containing sacred beaches, holy wells, and the Ramanathaswamy Temple.",
    attractions: [
      {
        name: "Pamban Bridge & Dhanushkodi",
        description: "Dhanushkodi is a ghost town at the edge of the island, separating the Bay of Bengal and Indian Ocean. The Pamban railway bridge is an engineering marvel.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDhABxPL40PmI6oLg8XaGJmwts2aD2HeiW3Z8StSEaYizHAVSYL2gOZ7Y33tVhDNFip0CSbg_fGvh3cHoHCea_YWTSLEzEGu5-EIjIPfGfE8mvUstR8e7HBlg0Ryb_mHEV-sX20SY9ZaCqfou36bFl1PPsp0FLewV3akNT7kVj1MypPXGOsvFHX7ClqVPn8F9vD_Ib-Q_2BxGXZ2LIkZZHw_D3BUHrPxOzCuOGcy4MAKH5qeHN5nLQV"
      }
    ],
    recommendedDuration: "2 Days",
    travelTips: ["Dhanushkodi is best visited in the early morning or late afternoon for cooler weather."],
    faq: []
  },
  {
    id: "kanyakumari",
    name: "Kanyakumari",
    tagline: "Land's End of India",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80",
    duration: "3 Days / 2 Nights",
    bestFor: ["Nature", "Heritage", "Pilgrimage"],
    bestSeason: "October to March",
    startingPrice: 9499,
    overview: "Located at the southernmost tip of the Indian peninsula, Kanyakumari is where the Arabian Sea, the Indian Ocean, and the Bay of Bengal meet. Famous for its spectacular sunrises and sunsets over the water.",
    attractions: [
      {
        name: "Vivekananda Rock Memorial",
        description: "A monument built on a small rock island just off the shoreline, dedicated to Swami Vivekananda's meditation in 1892.",
        image: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=800&q=80"
      }
    ],
    recommendedDuration: "2 Days",
    travelTips: ["Take the early morning ferry to the rock memorial to beat the long lines."],
    faq: []
  },
  {
    id: "mahabalipuram",
    name: "Mahabalipuram",
    tagline: "UNESCO Stone Heritage Coast",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80",
    duration: "1 Day Trip",
    bestFor: ["Weekend Getaways", "Heritage"],
    bestSeason: "September to April",
    startingPrice: 3499,
    overview: "Located just 60 km from Chennai along the ECR, Mahabalipuram is a historic town boasting spectacular rock-cut monuments, temples, and monolithic sculptures carved in the 7th and 8th centuries during the Pallava dynasty.",
    attractions: [
      {
        name: "Shore Temple & Pancha Rathas",
        description: "Gorgeous structural temples overlooking the Bay of Bengal, and five monolithic stone structures resembling chariots.",
        image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80"
      }
    ],
    recommendedDuration: "1 Day",
    travelTips: ["Hire a local guide at the monument site to appreciate the historic carvings and stories."],
    faq: []
  }
];
