export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  category: "destinations" | "vehicles" | "trips" | "hotels" | "travel";
  title: string;
}

export const galleryItems: GalleryItem[] = [
  {
    id: "g-ooty-tea",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDBPJp31M0w2MLPKPzOUEzpvecvO15byCKgI_TAHwmT8c5GziNkiSNOdfeN8ULTnDlx2YqOYw8MHiEhpZx35Dg5bYCQzvr5QP4Uj37TgIT6AacHdHMOWKm8_Z1JHCtkUw-d_o2V-07r_m5wEAFScAXEqRTFAc0kC8FfBDYYx3xzOqgPu-bByu_Esf1EFAVEwJkXI9nyUc03sDSoJDbHrixGQV1sbA1ig5kQhgVR_hQqPFLDDvfJwgW3",
    alt: "Beautiful view of rolling green tea gardens of Ooty under golden morning light.",
    category: "destinations",
    title: "Ooty Tea Estates"
  },
  {
    id: "g-kodai-lake",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAsBWoyxhA95vsTyp2TPV8gkYLTtIjRvls2Z8Xfx2eipHSt1blmXEdaVHJPsDHN0LpdQKE2gQs8Ul_KPVGy0igP-QFukmgDMfFmfYRmnRBxRwaNOKrbkZgMlBHH0eeoJCqLLq45Zmox9uD3yLg1fifMDck8mXGtuaooYyCYfGcX5peneUWx_xxSZgwInUr6wBba4yjdzzD8PXclerx8uuAYH7_Ehht5KfVMaz0XMKnKQgQIiKrGZVWf",
    alt: "Calm water of star-shaped Kodaikanal Lake surrounded by pine forest.",
    category: "destinations",
    title: "Kodaikanal Lake"
  },
  {
    id: "g-pondicherry-street",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDxhPmvAXO95AqPSiETaxzQn7cYzhyYr3Rfqv3fj_sxiU3uDQRwSnB17XvoRtI3kmfJy8xc1Vh0aIaLbjUPnr4RxfUOkYTJN2kiX6UwgPKKwPSbGg5OWbE2-f3D5r41VvWIjLYiUZedMUxuCTbc_ZI2ExMfugLd8HozEK1rsry3BBXbCmWFLO0Spm0xQr14NEbcvzd3dLFniRBx1OoNsBgbk0qvIULQp2fA23p478Om5n40FZu_fxKN",
    alt: "Vibrant yellow colonial house on a clean street of French Quarter in Pondicherry.",
    category: "destinations",
    title: "Pondicherry French Quarter"
  },
  {
    id: "g-madurai-temple",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBmuRkXT9wbk0Uy4-MTp6dtOYzjPth8uToR47G3bQNkFCfd0eDdJ81ROKWEPcXApPom_GOupPnW1gIu0qQY4njKKMQplPmiB_9-ePx_3ECJG29XrYgczizLMhBcfFanBtXm4J06tg9xcFe9Idlucf1H_kD3pnstL3T8URDbO2gps4LXnhbORlSdwMc3Yh5fenKR8YCKFF4e3gH07pqUVorYkNJXLf7sqH-BFDRvnb60XoyojBT3QQoQ",
    alt: "Towers of Meenakshi Temple intricately carved with colorful stone statues.",
    category: "destinations",
    title: "Madurai Meenakshi Temple"
  },
  {
    id: "g-pamban-bridge",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDhABxPL40PmI6oLg8XaGJmwts2aD2HeiW3Z8StSEaYizHAVSYL2gOZ7Y33tVhDNFip0CSbg_fGvh3cHoHCea_YWTSLEzEGu5-EIjIPfGfE8mvUstR8e7HBlg0Ryb_mHEV-sX20SY9ZaCqfou36bFl1PPsp0FLewV3akNT7kVj1MypPXGOsvFHX7ClqVPn8F9vD_Ib-Q_2BxGXZ2LIkZZHw_D3BUHrPxOzCuOGcy4MAKH5qeHN5nLQV",
    alt: "Sweeping rail bridge stretching across azure sea to Rameswaram island.",
    category: "travel",
    title: "Pamban Bridge Rameswaram"
  },
  {
    id: "g-yercaud-hills",
    src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    alt: "Misty overlook of coffee plantations and loop roads in Yercaud.",
    category: "destinations",
    title: "Yercaud Coffee Plantations"
  },
  {
    id: "g-rameswaram-dhanushkodi",
    src: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=800&q=80",
    alt: "The ghost town ruins of Dhanushkodi with sand and azure ocean waves.",
    category: "destinations",
    title: "Dhanushkodi Coastal Ruins"
  },
  {
    id: "g-kanyakumari-sunrise",
    src: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80",
    alt: "Beautiful sunrise over Vivekananda Rock Memorial island in Kanyakumari.",
    category: "destinations",
    title: "Vivekananda Rock Memorial"
  },
  {
    id: "g-mahabalipuram-shore",
    src: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80",
    alt: "Golden sunset over the historical carved stone Shore Temple at Mahabalipuram.",
    category: "destinations",
    title: "Mahabalipuram Shore Temple"
  },
  {
    id: "g-innova-crysta",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDTjX44g6NfLXhaKO5MWXXQKR1FZOWt7EYv3VFXVXtut70JQMUCFdVRku5egmHZoZWG1NKemADnDoYkUfJOQxQVjW5ibFSskJFMohjxiJhfg4Cba2VuHH41ZOEduhYgdjLmsjmkhogBw6SUIgSk1m-egBmk8Qr4HAlxxEnBo5OAg0hBH8AeTaljKrUF2nHQyKz5AvTJ9lWQ6VViTxWFVRKlaLyirLrnxUgTxQTi51bxkELJaN72mUac",
    alt: "Clean white Toyota Innova Crysta parked on a scenic paved driveway.",
    category: "vehicles",
    title: "Toyota Innova Crysta"
  },
  {
    id: "g-dzire-sedan",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuABr2Jdatp9a6bwmEjFDsuGoVtRYBi5KdbCB4riLtETO81C9eHFMW6EqqAm_y6RvoUpawiii4uKtIZUo6WfrOPMSqd4AvdSuEi-Lk9R8E0lU1YmIjofqqWlYDlQ09BLiSC-u9s_zg_sGhbvpA5w-zlhviMs5358ZyioMQ0cOUFvEGHoiV6_Af3uA9mTOC187dOq4BNmHo_VnuC4Bw6jgW3UR7ecP4CIZ3lf6VMe4Mw-qZGMBtyrFapw",
    alt: "Sleek silver Maruti Dzire sedan on a neat street with modern buildings.",
    category: "vehicles",
    title: "Maruti Dzire Sedan"
  },
  {
    id: "g-tempo-traveller",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAfkeoRFQaxlGpSp3WRhMJP3hTJZcQr8Alu7sDexUxmWk47PgMm6uCgqjfohh7lwNUQZTnCaqwfdSNOafHpIbvFrJLjo9X77kafCLGMgO7f6qwb5Srkfi2Xm061eEAhttWZ67alB6xLlnFQeW8m6Lvr_jmov5pTI3v7ux0ZZL18KeBCW8gC5_8l9GdSlTZAM_K3s0aadA4XmzX60HgIyt6MriZiRvR7LjPPdWrvChk7Qu_C4BnsaryL",
    alt: "White Tempo Traveller parked near a scenic green mountain overlook.",
    category: "vehicles",
    title: "Tempo Traveller"
  },
  {
    id: "g-force-urbania",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBLG_MZdDpd8RZO3r-Snj0BCERbvClgofBtjD1Gow9EpK09EMXK7cKVBx3GEsqsoOOTECHxNxlcpfsQoXC98yVwTUCXx24xRVr_xQjVok3C_yN6nvl1F2kwI3wB4Dhi2yieFXmZ1_3j6eng_djqY5pQ4UW7hIWIJihnc0qKnkBeCgK_2x3fSxD2BMcAmTL1JzJNty3sL8_zTTJOu3Oyj8ntvcWIly08IE70IP3yDxBKuauXchgTJyyf",
    alt: "Premium Force Urbania luxury van parked in front of a hotel entrance.",
    category: "vehicles",
    title: "Force Urbania"
  },
  {
    id: "g-mercedes-e-class",
    src: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=800&q=80",
    alt: "A sleek black Mercedes Benz E-Class sedan parked on a luxury hotel driveway.",
    category: "vehicles",
    title: "Mercedes Benz E-Class"
  },
  {
    id: "g-xuv700-suv",
    src: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80",
    alt: "Mahindra XUV700 driving down a scenic highway line.",
    category: "vehicles",
    title: "Mahindra XUV700 SUV"
  },
  {
    id: "g-family-vacation",
    src: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=800&q=80",
    alt: "A happy family enjoying their vacation outdoors in a lush green park.",
    category: "trips",
    title: "Family Getaway"
  },
  {
    id: "g-couple-honeymoon",
    src: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80",
    alt: "A couple standing on a mountain cliff, overlooking scenic vistas.",
    category: "trips",
    title: "Honeymoon Retreat"
  },
  {
    id: "g-corporate-retreat",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAqMhTLGJHuzyZEfL98n55D8XSI8L6k7z7UVOAUYv_H1HLZTfbj0SiQsGOfmx5Qu5PW8zbFgk5Zz1yv6zosm8EGNIZVwGVv5E56keLINKgnrS2J-pZIjdRBbhSckgDKzxyUmE9F-jEbYXu2gdEHntIZf4NUK8a_wkHnvodGpl5pNNXVFkXMEOyLPfUr5dHKFKUVR19gUsuFtZ_6ozERe6V_raWJ44ZAYk7ZMeOeJB7I1_iTKKLuTQCe",
    alt: "A corporate team standing together outside their retreat hotel lounge.",
    category: "trips",
    title: "Corporate Outing"
  },
  {
    id: "g-premium-hotel",
    src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
    alt: "A stunning premium hotel resort pool area with sun loungers.",
    category: "hotels",
    title: "Luxury Resorts"
  },
  {
    id: "g-heritage-resort",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBmuRkXT9wbk0Uy4-MTp6dtOYzjPth8uToR47G3bQNkFCfd0eDdJ81ROKWEPcXApPom_GOupPnW1gIu0qQY4njKKMQplPmiB_9-ePx_3ECJG29XrYgczizLMhBcfFanBtXm4J06tg9xcFe9Idlucf1H_kD3pnstL3T8URDbO2gps4LXnhbORlSdwMc3Yh5fenKR8YCKFF4e3gH07pqUVorYkNJXLf7sqH-BFDRvnb60XoyojBT3QQoQ",
    alt: "A beautiful courtyard heritage resort in Madurai.",
    category: "hotels",
    title: "Madurai Heritage Stays"
  }
];
