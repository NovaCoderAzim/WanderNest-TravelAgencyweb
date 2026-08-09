export interface ItineraryDay {
  dayNumber: number;
  title: string;
  description: string;
  activities: string[];
  image?: string;
}

export interface TourPackage {
  id: string;
  name: string;
  destinationId: string;
  duration: string;
  startingPrice: number;
  rating: number;
  reviewsCount: number;
  inclusions: string[];
  exclusions: string[];
  summary: string;
  itinerary: ItineraryDay[];
  hotelOptions: {
    budget: string;
    standard: string;
    premium: string;
  };
  vehicleOptions: string[];
  gallery: string[];
  faqs: { question: string; answer: string }[];
}

export const packages: TourPackage[] = [
  {
    id: "ooty-escape",
    name: "Ooty Escape",
    destinationId: "ooty",
    duration: "3 Days / 2 Nights",
    startingPrice: 9999,
    rating: 4.8,
    reviewsCount: 124,
    inclusions: [
      "AC Vehicle for all transfers & sightseeing from Chennai",
      "2 Nights accommodation in a highly rated resort",
      "Daily breakfast at the hotel",
      "All toll taxes, parking fees, and driver allowances",
      "Local sightseeing as per itinerary"
    ],
    exclusions: [
      "Toy train tickets (must be booked in advance)",
      "Lunch and dinner meals",
      "Entrance fees to botanical gardens, parks, and museums",
      "Camera fees, boating charges, and personal horse rides"
    ],
    summary: "Refresh your senses in the misty hills of Ooty and Coonoor. This 3-day trip includes comfortable private transport from Chennai, scenic sightseeing tours, and comfortable lodging amidst lush Nilgiri tea estates.",
    itinerary: [
      {
        dayNumber: 1,
        title: "Chennai to Ooty & Evening Boating",
        description: "Depart early morning from Chennai in a comfortable private vehicle. Enjoy a scenic journey crossing plains and climbing the gorgeous winding Ghat roads with 36 hairpin bends. Arrive in Ooty in the afternoon, check in to your resort and refresh. In the evening, visit Ooty Lake for a relaxing boat ride. Enjoy the cool breeze and sunset view over the water.",
        activities: ["Scenic Ghat road drive", "Hotel check-in", "Ooty Lake boating"],
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBlJB0SjqcLoVLDxq-rpM2yFDJN-TuKFqUBRyVDgRn2mgC2F6Hn2P-2jTUx_P_JV7dIgKLcQ7WXfD2CDZnPt3pYWHS7yorOs6Wf-Rw8m_KAt6pULmD2DcJ00FDsBFQOoiNoU1qia2QMIg_KMXaZUw8XBUMjhaLbOGyB3NIb6PSOw9dEpWN4ALSNZoXMcyFHueLrgNb8-IADIIDMuiz3y_WSj_iI3RmCHK_eZzbUXxTYzmXP53e6czuj"
      },
      {
        dayNumber: 2,
        title: "Explore Ooty's Botanical Wonders & High Peaks",
        description: "After a delicious breakfast, set out to explore Ooty's best attractions. Visit the famous terraced Botanical Garden housing exotic plants and the Rose Garden with thousands of blooming varieties. Next, drive up to Doddabetta Peak, the highest point in the region, to enjoy majestic views of the valleys. End the day with a tour of a local Tea Factory to see tea processing and taste fresh brews.",
        activities: ["Government Botanical Garden", "Doddabetta Peak View", "Tea Factory & Chocolate Museum"],
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDBPJp31M0w2MLPKPzOUEzpvecvO15byCKgI_TAHwmT8c5GziNkiSNOdfeN8ULTnDlx2YqOYw8MHiEhpZx35Dg5bYCQzvr5QP4Uj37TgIT6AacHdHMOWKm8_Z1JHCtkUw-d_o2V-07r_m5wEAFScAXEqRTFAc0kC8FfBDYYx3xzOqgPu-bByu_Esf1EFAVEwJkXI9nyUc03sDSoJDbHrixGQV1sbA1ig5kQhgVR_hQqPFLDDvfJwgW3"
      },
      {
        dayNumber: 3,
        title: "Coonoor Heritage Train Sightseeing & Return",
        description: "Check out from the resort and drive to Coonoor. Board the historic Nilgiri Mountain Railway toy train for a short, beautiful ride (subject to availability). Visit Sim's Park to see unique plant species, and check out Dolphin's Nose viewpoint. After lunch, start your return journey back to Chennai, carrying wonderful memories.",
        activities: ["Nilgiri Toy Train ride", "Sim's Park", "Dolphin's Nose viewpoint", "Return drive to Chennai"],
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBZ9rWlVjkoGKaiyqCLz6ajXLMLeSVbI6KwkslfXQWA7ETnvrQxB09bxymJ77PEZIY2oA0fjEDO6alQ23ZHt8TJcjR94jKock_Qoc1V-4zFxGj-YrlZO0sEYFL47uBT1Mx-sMBHRxJYJxti2b17Hk-BZ1Iex06-rRbK0JsQy2QbwlZ2p-BKy4jV4bfkQpVzL68sEKQrYsEXHKChXkha_GX5vAG5qfVpsH-elUiNmbJgj627sopk_gPF"
      }
    ],
    hotelOptions: {
      budget: "Zostel Ooty or similar standard room",
      standard: "Preethi Classic Towers or similar 3-star",
      premium: "Savoy - IHCL SeleQtions or Sterling Elixir Hills"
    },
    vehicleOptions: ["Maruti Dzire (up to 3 pax)", "Toyota Innova Crysta (4-7 pax)", "Tempo Traveller (8-12 pax)"],
    gallery: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBlJB0SjqcLoVLDxq-rpM2yFDJN-TuKFqUBRyVDgRn2mgC2F6Hn2P-2jTUx_P_JV7dIgKLcQ7WXfD2CDZnPt3pYWHS7yorOs6Wf-Rw8m_KAt6pULmD2DcJ00FDsBFQOoiNoU1qia2QMIg_KMXaZUw8XBUMjhaLbOGyB3NIb6PSOw9dEpWN4ALSNZoXMcyFHueLrgNb8-IADIIDMuiz3y_WSj_iI3RmCHK_eZzbUXxTYzmXP53e6czuj",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDBPJp31M0w2MLPKPzOUEzpvecvO15byCKgI_TAHwmT8c5GziNkiSNOdfeN8ULTnDlx2YqOYw8MHiEhpZx35Dg5bYCQzvr5QP4Uj37TgIT6AacHdHMOWKm8_Z1JHCtkUw-d_o2V-07r_m5wEAFScAXEqRTFAc0kC8FfBDYYx3xzOqgPu-bByu_Esf1EFAVEwJkXI9nyUc03sDSoJDbHrixGQV1sbA1ig5kQhgVR_hQqPFLDDvfJwgW3",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBZ9rWlVjkoGKaiyqCLz6ajXLMLeSVbI6KwkslfXQWA7ETnvrQxB09bxymJ77PEZIY2oA0fjEDO6alQ23ZHt8TJcjR94jKock_Qoc1V-4zFxGj-YrlZO0sEYFL47uBT1Mx-sMBHRxJYJxti2b17Hk-BZ1Iex06-rRbK0JsQy2QbwlZ2p-BKy4jV4bfkQpVzL68sEKQrYsEXHKChXkha_GX5vAG5qfVpsH-elUiNmbJgj627sopk_gPF"
    ],
    faqs: [
      {
        question: "Does the package price include toy train tickets?",
        answer: "No, toy train tickets are highly subject to availability and should be booked directly by the clients via IRCTC at least 30-60 days in advance."
      },
      {
        question: "Can we customize the pick-up location in Chennai?",
        answer: "Yes, our driver can pick you up from your doorstep anywhere in Chennai, including the airport, railway stations, or residential addresses."
      }
    ]
  },
  {
    id: "kodaikanal-getaway",
    name: "Kodaikanal Getaway",
    destinationId: "kodaikanal",
    duration: "3 Days / 2 Nights",
    startingPrice: 10999,
    rating: 4.7,
    reviewsCount: 92,
    inclusions: [
      "AC Sedan or SUV from Chennai for all travels",
      "2 Nights stay in a scenic forest view cottage",
      "Breakfast on all days",
      "Sightseeing around Kodaikanal lake and pine forests",
      "Driver beta and parking charges"
    ],
    exclusions: [
      "Lunch, dinner, and personal refreshments",
      "Entry fees at viewpoints and parks",
      "Boating, cycling, and horse riding fees"
    ],
    summary: "Unwind in the misty alpine highlands of Kodaikanal. Travel smoothly in your private vehicle from Chennai, relax in a forest resort, and explore pristine lakes, pine forests, and cloud-swept cliffs.",
    itinerary: [
      {
        dayNumber: 1,
        title: "Drive from Chennai & Lake Side Evening",
        description: "Early morning boarding from Chennai. Drive towards the south, stopping for lunch near Trichy. Climb the scenic Kodai Ghat road with spectacular valley vistas. Upon arrival, check in to your forest resort. Spend your evening taking a peaceful walk around the star-shaped Kodai Lake, renting a boat, or cycling along the lake perimeter.",
        activities: ["Outstation road trip", "Forest cottage check-in", "Kodai Lake boating/cycling"],
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAsBWoyxhA95vsTyp2TPV8gkYLTtIjRvls2Z8Xfx2eipHSt1blmXEdaVHJPsDHN0LpdQKE2gQs8Ul_KPVGy0igP-QFukmgDMfFmfYRmnRBxRwaNOKrbkZgMlBHH0eeoJCqLLq45Zmox9uD3yLg1fifMDck8mXGtuaooYyCYfGcX5peneUWx_xxSZgwInUr6wBba4yjdzzD8PXclerx8uuAYH7_Ehht5KfVMaz0XMKnKQgQIiKrGZVWf"
      },
      {
        dayNumber: 2,
        title: "Pine Forests, Pillars Rocks & Coaker's Walk",
        description: "Enjoy a fresh breakfast. Set out for a full day of sightseeing in Kodaikanal. Walk among towering tall pines at the Pine Forest. Visit Pillar Rocks to see three massive granite pillars rising from the cliffs. Walk along Coaker's Walk for an amazing view of valleys and clouds. End the afternoon with a visit to Bryant Park and Guna Caves.",
        activities: ["Pine Forest walk", "Pillar Rocks viewpoint", "Coaker's Walk", "Bryant Park"],
        image: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=800&q=80"
      },
      {
        dayNumber: 3,
        title: "Silver Cascade Falls & Return to Chennai",
        description: "Enjoy breakfast, check out of your resort, and begin the descent down the mountains. Stop for photos at the Silver Cascade Waterfall. Drive back to Chennai, stopping for dinner enroute. Arrive in Chennai late in the evening.",
        activities: ["Silver Cascade Falls", "Return journey to Chennai"],
        image: "https://images.unsplash.com/photo-1590050752117-238cb0612b1b?auto=format&fit=crop&w=800&q=80"
      }
    ],
    hotelOptions: {
      budget: "Zostel Kodaikanal or similar cottage room",
      standard: "Hotel Kodai International or similar 3-star",
      premium: "The Carlton (Lake-facing luxury resort)"
    },
    vehicleOptions: ["Maruti Dzire", "Toyota Innova Crysta", "Tempo Traveller"],
    gallery: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAsBWoyxhA95vsTyp2TPV8gkYLTtIjRvls2Z8Xfx2eipHSt1blmXEdaVHJPsDHN0LpdQKE2gQs8Ul_KPVGy0igP-QFukmgDMfFmfYRmnRBxRwaNOKrbkZgMlBHH0eeoJCqLLq45Zmox9uD3yLg1fifMDck8mXGtuaooYyCYfGcX5peneUWx_xxSZgwInUr6wBba4yjdzzD8PXclerx8uuAYH7_Ehht5KfVMaz0XMKnKQgQIiKrGZVWf",
      "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=800&q=80"
    ],
    faqs: [
      {
        question: "Is Kodaikanal very cold?",
        answer: "Kodaikanal is cool throughout the year. Temperatures range between 8°C and 20°C. Sweaters are recommended, especially for evening walks."
      }
    ]
  },
  {
    id: "pondicherry-weekend",
    name: "Pondicherry French Weekend",
    destinationId: "pondicherry",
    duration: "2 Days / 1 Night",
    startingPrice: 7999,
    rating: 4.9,
    reviewsCount: 156,
    inclusions: [
      "AC transportation via scenic East Coast Road (ECR)",
      "1 Night stay in a boutique hotel in White Town",
      "French breakfast at the hotel",
      "Sightseeing and Auroville visit"
    ],
    exclusions: [
      "Meals (lunch and dinners)",
      "Entry tickets and boat rides",
      "Personal shopping and watersports"
    ],
    summary: "Discover French colonial heritage, quiet cobbled streets, sandy beaches, and gourmet bakeries in Pondicherry on this quick and refreshing 2-day trip starting directly from Chennai.",
    itinerary: [
      {
        dayNumber: 1,
        title: "ECR Scenic Drive & White Town Heritage Walk",
        description: "Depart from Chennai early morning. Drive along the scenic East Coast Road, stopping for a quick tea break with beach views. Arrive in Pondicherry, check in to your boutique heritage hotel in the French Quarter. After refreshing, start a guided walking tour of White Town: see French-style villas, colonial government offices, and the Sacred Heart Basilica. In the evening, walk along Promenade Beach and enjoy dinner at a local French restaurant.",
        activities: ["ECR Road Trip", "White Town heritage tour", "Promenade Beach sunset walk", "Gourmet dining"],
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDxhPmvAXO95AqPSiETaxzQn7cYzhyYr3Rfqv3fj_sxiU3uDQRwSnB17XvoRtI3kmfJy8xc1Vh0aIaLbjUPnr4RxfUOkYTJN2kiX6UwgPKKwPSbGg5OWbE2-f3D5r41VvWIjLYiUZedMUxuCTbc_ZI2ExMfugLd8HozEK1rsry3BBXbCmWFLO0Spm0xQr14NEbcvzd3dLFniRBx1OoNsBgbk0qvIULQp2fA23p478Om5n40FZu_fxKN"
      },
      {
        dayNumber: 2,
        title: "Auroville Meditation & Beach Outing",
        description: "After breakfast, check out and drive to Auroville. See the magnificent golden Matrimandir sphere from the visitor center viewpoint and learn about the township's philosophy. Next, head to Paradise Beach or Serenity Beach to enjoy the waves. After lunch, start your drive back to Chennai, arriving by late evening.",
        activities: ["Auroville visitor center walk", "Matrimandir viewpoint", "Paradise Beach beach time", "Return drive via ECR"],
        image: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=800&q=80"
      }
    ],
    hotelOptions: {
      budget: "La Maison Radha or similar homestay",
      standard: "Hotel de l'Orient or Palais de Mahe (boutique hotel)",
      premium: "Villa Shanti or The Promenade (sea view luxury)"
    },
    vehicleOptions: ["Maruti Dzire", "Honda Amaze", "Toyota Innova Crysta"],
    gallery: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDxhPmvAXO95AqPSiETaxzQn7cYzhyYr3Rfqv3fj_sxiU3uDQRwSnB17XvoRtI3kmfJy8xc1Vh0aIaLbjUPnr4RxfUOkYTJN2kiX6UwgPKKwPSbGg5OWbE2-f3D5r41VvWIjLYiUZedMUxuCTbc_ZI2ExMfugLd8HozEK1rsry3BBXbCmWFLO0Spm0xQr14NEbcvzd3dLFniRBx1OoNsBgbk0qvIULQp2fA23p478Om5n40FZu_fxKN",
      "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=800&q=80"
    ],
    faqs: [
      {
        question: "Can we enter the Matrimandir inner meditation chamber?",
        answer: "Entering the inner chamber requires booking passes in person at least 1-2 days in advance. Our standard package includes access to the visitor center viewpoint only."
      }
    ]
  },
  {
    id: "madurai-temple-trail",
    name: "Madurai Temple Trail & Culture",
    destinationId: "madurai",
    duration: "2 Days / 1 Night",
    startingPrice: 6999,
    rating: 4.8,
    reviewsCount: 84,
    inclusions: [
      "Private AC transport from Chennai & back",
      "1 Night stay at a 3-star hotel near Meenakshi Temple",
      "Daily breakfast and local culinary guide assistance",
      "Local temple transfers and sightseeing"
    ],
    exclusions: [
      "Temple special entry tickets",
      "Local lunches/dinners",
      "Personal tour guide services"
    ],
    summary: "Immerse yourself in ancient Tamil culture. Travel comfortably from Chennai to Madurai, witness the spectacular night ceremony at the Meenakshi Temple, and taste historic street food.",
    itinerary: [
      {
        dayNumber: 1,
        title: "Chennai to Madurai & Thirumalai Palace",
        description: "Depart early morning from Chennai. Travel down south via the national highway. Reach Madurai in the afternoon and check in to your hotel. Visit the 17th-century Thirumalai Nayakkar Palace, admiring its massive pillars and arches. In the evening, visit the historic Meenakshi Amman Temple to marvel at its towers and attend the unique night procession ceremony where Lord Shiva is carried to Meenakshi's shrine.",
        activities: ["Outstation road travel", "Palace architecture walk", "Meenakshi Temple evening darshan"],
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBmuRkXT9wbk0Uy4-MTp6dtOYzjPth8uToR47G3bQNkFCfd0eDdJ81ROKWEPcXApPom_GOupPnW1gIu0qQY4njKKMQplPmiB_9-ePx_3ECJG29XrYgczizLMhBcfFanBtXm4J06tg9xcFe9Idlucf1H_kD3pnstL3T8URDbO2gps4LXnhbORlSdwMc3Yh5fenKR8YCKFF4e3gH07pqUVorYkNJXLf7sqH-BFDRvnb60XoyojBT3QQoQ"
      },
      {
        dayNumber: 2,
        title: "Alagar Kovil & Return to Chennai",
        description: "Wake up early for a traditional breakfast. Visit Alagar Kovil Temple situated on scenic green hills just outside Madurai. See the carvings and holy spring. After a lunch of traditional Madurai meals and trying the cold Jigarthanda dessert, start your journey back to Chennai, arriving late in the night.",
        activities: ["Alagar Kovil Temple", "Traditional lunch & Jigarthanda drink", "Return drive to Chennai"],
        image: "https://images.unsplash.com/photo-1600100397608-f010e427eb72?auto=format&fit=crop&w=800&q=80"
      }
    ],
    hotelOptions: {
      budget: "Hotel Supreme or similar",
      standard: "Heritage Madurai or Hotel Sangam",
      premium: "The Gateway Hotel Pasumalai (Taj group resort)"
    },
    vehicleOptions: ["Maruti Dzire", "Toyota Innova Crysta", "Tempo Traveller"],
    gallery: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBmuRkXT9wbk0Uy4-MTp6dtOYzjPth8uToR47G3bQNkFCfd0eDdJ81ROKWEPcXApPom_GOupPnW1gIu0qQY4njKKMQplPmiB_9-ePx_3ECJG29XrYgczizLMhBcfFanBtXm4J06tg9xcFe9Idlucf1H_kD3pnstL3T8URDbO2gps4LXnhbORlSdwMc3Yh5fenKR8YCKFF4e3gH07pqUVorYkNJXLf7sqH-BFDRvnb60XoyojBT3QQoQ",
      "https://images.unsplash.com/photo-1600100397608-f010e427eb72?auto=format&fit=crop&w=800&q=80"
    ],
    faqs: [
      {
        question: "What is the dress code for Meenakshi Temple?",
        answer: "Dhoti/pyjama with shirt for men, and saree/salwar with dupatta for women. Jeans, shorts, skirts, sleeveless tops, and tight outfits are strictly prohibited."
      }
    ]
  },
  {
    id: "yercaud-loop-road-escape",
    name: "Yercaud Loop Road Escape",
    destinationId: "yercaud",
    duration: "2 Days / 1 Night",
    startingPrice: 5999,
    rating: 4.6,
    reviewsCount: 52,
    inclusions: [
      "Private AC vehicle from Chennai to Salem/Yercaud and back",
      "1 Night stay in a beautiful lake view resort",
      "Breakfast and evening snacks included",
      "Loop Road coffee plantation tour"
    ],
    exclusions: [
      "Sightseeing entry charges and boating tickets",
      "All dinners and lunches",
      "Tips and personal expenses"
    ],
    summary: "Take a refreshing weekend road trip from Chennai to the serene Shevaroy Hills. Enjoy panoramic drives along the famous 32-km loop road, coffee plantation walks, and pleasant boating.",
    itinerary: [
      {
        dayNumber: 1,
        title: "Chennai to Yercaud Hill Drive & Boating",
        description: "Depart from Chennai early morning via the National Highway. Take a break near Salem for authentic South Indian breakfast, then start climbing the 20 hairpin curves up to Yercaud. Check in to your resort, refresh, and visit the Emerald Yercaud Lake for boating. Enjoy sunset views at Lady's Seat.",
        activities: ["Ghat road hill drive", "Resort check-in", "Yercaud Lake boating", "Lady's Seat view"],
        image: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=800&q=80"
      },
      {
        dayNumber: 2,
        title: "32-Km Loop Road Plantation & Kiliyur Falls",
        description: "After breakfast, check out. Drive through the scenic 32-km loop road, surrounded by cardamom and coffee estates. Visited the silk farm and botanical rose garden. Take a short trek down to Kiliyur Waterfalls. Descend to Salem and travel back to Chennai, arriving by 10 PM.",
        activities: ["32-km Loop Road Drive", "Silk Farm & Rose Garden", "Kiliyur Falls visit", "Return travel to Chennai"],
        image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
      }
    ],
    hotelOptions: {
      budget: "Yercaud Rock Perch or similar homestay",
      standard: "Sterling Yercaud or Grand Palace Hotel",
      premium: "Grange Resort or Great Trails Yercaud by GRT Hotels"
    },
    vehicleOptions: ["Maruti Dzire", "Honda Amaze", "Toyota Innova Crysta"],
    gallery: [
      "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
    ],
    faqs: [
      {
        question: "Is Yercaud colder than Ooty?",
        answer: "No, Yercaud is at a lower elevation (1,515m) compared to Ooty (2,240m), so the climate is milder. It is pleasantly cool but rarely very cold."
      }
    ]
  },
  {
    id: "rameswaram-dhanushkodi-pilgrimage",
    name: "Rameswaram & Dhanushkodi Spiritual Trail",
    destinationId: "rameswaram",
    duration: "3 Days / 2 Nights",
    startingPrice: 12999,
    rating: 4.8,
    reviewsCount: 76,
    inclusions: [
      "AC Chauffeur driven vehicle from Chennai",
      "2 Nights accommodation in a highly rated hotel close to temple",
      "Daily breakfast at the hotel",
      "Pamban Bridge crossing sightseeing and Dhanushkodi private Jeep transfer"
    ],
    exclusions: [
      "Temple special darshan entry cards",
      "Lunch, dinners, and mineral water bottles",
      "Temple ritual expenses"
    ],
    summary: "A divine and coastal journey from Chennai. Cross the historic Pamban sea bridge, bathe in the 22 holy wells of Ramanathaswamy Temple, and explore the mystical ghost town of Dhanushkodi.",
    itinerary: [
      {
        dayNumber: 1,
        title: "Chennai to Rameswaram Island & Pamban Crossing",
        description: "Depart early morning from Chennai. Journey through historical Tamil Nadu plains, stopping at Devipattinam. Cross the spectacular Pamban sea bridge linking the mainland to Rameswaram island. Reach your hotel, check in, and spend the evening watching the waves at Agni Theertham beach.",
        activities: ["Outstation highway drive", "Pamban Bridge photo stop", "Agni Theertham Beach walk"],
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDhABxPL40PmI6oLg8XaGJmwts2aD2HeiW3Z8StSEaYizHAVSYL2gOZ7Y33tVhDNFip0CSbg_fGvh3cHoHCea_YWTSLEzEGu5-EIjIPfGfE8mvUstR8e7HBlg0Ryb_mHEV-sX20SY9ZaCqfou36bFl1PPsp0FLewV3akNT7kVj1MypPXGOsvFHX7ClqVPn8F9vD_Ib-Q_2BxGXZ2LIkZZHw_D3BUHrPxOzCuOGcy4MAKH5qeHN5nLQV"
      },
      {
        dayNumber: 2,
        title: "Holy Bathing, Temple Darshan & Dhanushkodi Tour",
        description: "Wake up early for holy bathing at the 22 sacred wells inside the Ramanathaswamy Temple, followed by darshan of the main deity. In the afternoon, board a specialized coastal vehicle to visit Dhanushkodi, the ghost town destroyed in the 1964 cyclone. See the Ram Sethu vantage point where the Bay of Bengal meets the Indian Ocean.",
        activities: ["22 Wells Holy Bath", "Ramanathaswamy Temple Darshan", "Dhanushkodi ruins visit", "Ram Sethu point view"],
        image: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=800&q=80"
      },
      {
        dayNumber: 3,
        title: "Dr. APJ Abdul Kalam Memorial & Return",
        description: "Enjoy breakfast. Visit the Dr. APJ Abdul Kalam House and Memorial to pay tributes. Check out and start your road trip back to Chennai, arriving late at night.",
        activities: ["Kalam House & Memorial", "Return drive to Chennai"],
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDhABxPL40PmI6oLg8XaGJmwts2aD2HeiW3Z8StSEaYizHAVSYL2gOZ7Y33tVhDNFip0CSbg_fGvh3cHoHCea_YWTSLEzEGu5-EIjIPfGfE8mvUstR8e7HBlg0Ryb_mHEV-sX20SY9ZaCqfou36bFl1PPsp0FLewV3akNT7kVj1MypPXGOsvFHX7ClqVPn8F9vD_Ib-Q_2BxGXZ2LIkZZHw_D3BUHrPxOzCuOGcy4MAKH5qeHN5nLQV"
      }
    ],
    hotelOptions: {
      budget: "Hotel Queen Palace or homestay",
      standard: "Daiwik Hotels or Hotel Rameswaram Grand",
      premium: "Hyatt Place Rameswaram or JKR Resort & Spa"
    },
    vehicleOptions: ["Toyota Innova Crysta", "Tempo Traveller", "Force Urbania"],
    gallery: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDhABxPL40PmI6oLg8XaGJmwts2aD2HeiW3Z8StSEaYizHAVSYL2gOZ7Y33tVhDNFip0CSbg_fGvh3cHoHCea_YWTSLEzEGu5-EIjIPfGfE8mvUstR8e7HBlg0Ryb_mHEV-sX20SY9ZaCqfou36bFl1PPsp0FLewV3akNT7kVj1MypPXGOsvFHX7ClqVPn8F9vD_Ib-Q_2BxGXZ2LIkZZHw_D3BUHrPxOzCuOGcy4MAKH5qeHN5nLQV"
    ],
    faqs: [
      {
        question: "Is bathing in the 22 wells compulsory?",
        answer: "It is a highly popular spiritual tradition, but entirely optional. Changing rooms are available on-site at the temple."
      }
    ]
  },
  {
    id: "kanyakumari-lands-end-explorer",
    name: "Kanyakumari Land's End Explorer",
    destinationId: "kanyakumari",
    duration: "3 Days / 2 Nights",
    startingPrice: 14499,
    rating: 4.7,
    reviewsCount: 65,
    inclusions: [
      "AC sedan or SUV from Chennai for all transfers",
      "2 Nights hotel stay with sea views",
      "Daily breakfast at the resort",
      "Ferry tickets to Vivekananda Rock Memorial"
    ],
    exclusions: [
      "Lunch, dinner, and personal expenses",
      "Entry fees to palace and museum monuments",
      "Boating charges"
    ],
    summary: "Travel to the southernmost tip of mainland India. Stand at the confluence of three seas, visit the Vivekananda Rock Memorial, explore the historical Padmanabhapuram Wooden Palace, and view sunrises.",
    itinerary: [
      {
        dayNumber: 1,
        title: "Chennai to Kanyakumari Travel",
        description: "Depart early morning from Chennai in a comfortable sedan or SUV. Travel down the scenic southern highway, passing Trichy and Madurai. Reach Kanyakumari in the evening, check in to your sea-view hotel, and watch the beautiful sunset from the Sunset Point Beach.",
        activities: ["Outstation highway travel", "Hotel check-in", "Sunset View Beach"],
        image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80"
      },
      {
        dayNumber: 2,
        title: "Vivekananda Rock Memorial & Thiruvalluvar Statue",
        description: "Watch a spectacular sunrise over the ocean directly from your hotel balcony. After breakfast, board the ferry to the Vivekananda Rock Memorial and the massive 133-ft stone Thiruvalluvar Statue. In the afternoon, visit the Gandhi Memorial Mandapam and the Kanyakumari Amman Temple.",
        activities: ["Ferry ride", "Vivekananda Rock Memorial", "Thiruvalluvar Statue", "Gandhi Memorial"],
        image: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=800&q=80"
      },
      {
        dayNumber: 3,
        title: "Padmanabhapuram Palace & Return to Chennai",
        description: "Check out. Drive to Padmanabhapuram Palace, a spectacular 16th-century wooden palace of the Travancore kings. After touring the palace, start the long return journey back to Chennai.",
        activities: ["Padmanabhapuram Palace tour", "Return drive to Chennai"],
        image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80"
      }
    ],
    hotelOptions: {
      budget: "Hotel Sunrise or similar standard room",
      standard: "Hotel Sea View or Sparsa Resorts",
      premium: "Anantya Resorts or Annai Resorts & Spa"
    },
    vehicleOptions: ["Maruti Dzire", "Toyota Innova Crysta", "Tempo Traveller"],
    gallery: [
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=800&q=80"
    ],
    faqs: [
      {
        question: "Can we see both sunrise and sunset in Kanyakumari?",
        answer: "Yes! Because of its unique geographical position at the confluence of three oceans, both sunrise and sunset are clearly visible over the sea."
      }
    ]
  },
  {
    id: "mahabalipuram-shore-heritage",
    name: "Mahabalipuram Shore Heritage Day-Trip",
    destinationId: "mahabalipuram",
    duration: "1 Day Tour",
    startingPrice: 3499,
    rating: 4.9,
    reviewsCount: 110,
    inclusions: [
      "Doorstep pickup and drop in Chennai via private AC sedan",
      "Full-day guided sightseeing of UNESCO monuments",
      "Fresh coconut water and local guide fees"
    ],
    exclusions: [
      "Lunch, snacks, and personal buying",
      "Monument entry ticketing"
    ],
    summary: "Take a beautiful day-trip from Chennai down the East Coast Road to Mahabalipuram. Learn the secrets of 7th-century rock carvings, visit the Shore Temple, and enjoy fresh seafood by the beach.",
    itinerary: [
      {
        dayNumber: 1,
        title: "Chennai - ECR - Monuments Sightseeing - Chennai",
        description: "Chauffeur picks you up at 7:30 AM in Chennai. Drive down the beautiful ECR, stopping at DakshinaChitra heritage museum. Arrive in Mahabalipuram, visit the Shore Temple overlooking the sea, the monolithic Pancha Rathas (Five Chariots), and Arjuna's Penance (a giant rock bas-relief). Enjoy a fresh lunch at a beach-side restaurant, see Krishna's Butterball, and return to Chennai by 6:00 PM.",
        activities: ["ECR coastal drive", "Shore Temple", "Pancha Rathas tour", "Arjuna's Penance", "Beach lunch"],
        image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80"
      }
    ],
    hotelOptions: {
      budget: "Day trip (No hotel accommodation included)",
      standard: "Day trip (No hotel accommodation included)",
      premium: "Day trip (No hotel accommodation included)"
    },
    vehicleOptions: ["Maruti Dzire", "Honda Amaze", "Toyota Innova Crysta"],
    gallery: [
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80"
    ],
    faqs: [
      {
        question: "Is this package customizable for a weekend stay?",
        answer: "Yes! We can easily upgrade this into a 2-day package including a night stay at a premium beachfront resort like Radisson Blu Temple Bay or InterContinental Resort."
      }
    ]
  }
];
