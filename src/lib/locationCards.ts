import type { SiteIconName } from "../components/SiteIcon";

export type LocationCard = {
  title: string;
  distance: string;
  travel: string;
  description: string;
  icon: SiteIconName;
  image?: string;
  featured?: boolean;
  home?: boolean;
};

export type LocationCardSection = {
  title: string;
  intro: string;
  cards: LocationCard[];
};

export const locationCardSections: LocationCardSection[] = [
  {
    title: "Major Attractions",
    intro: "Family days, waterfront stops and Auckland icons with practical travel estimates from 224 Hobson Street.",
    cards: [
      {
        title: "Auckland Zoo",
        distance: "4.8 km",
        travel: "10-15 min drive",
        description: "A wildlife and conservation day out near Western Springs, with native and international animals.",
        icon: "tent",
        home: true,
      },
      {
        title: "Auckland Stardome Observatory",
        distance: "7.0 km",
        travel: "15-20 min drive",
        description: "Planetarium shows, astronomy exhibits and night-sky sessions near One Tree Hill.",
        icon: "sparkle",
      },
      {
        title: "Kelly Tarlton's Antarctic Encounter",
        distance: "7.2 km",
        travel: "12-18 min drive",
        description: "Aquarium tunnels, penguin encounters and Antarctic displays along Tamaki Drive.",
        icon: "compass",
      },
      {
        title: "New Zealand National Maritime Museum",
        distance: "1.7 km",
        travel: "20-25 min walk",
        description: "Harbour-side stories, maritime history and waterfront access near Viaduct Harbour.",
        icon: "museum",
        image: "/images/skytower.jpg",
        featured: true,
        home: true,
      },
      {
        title: "Mount Smart Stadium",
        distance: "11.5 km",
        travel: "18-25 min drive",
        description: "Large concerts, sports fixtures and entertainment events in Penrose.",
        icon: "calendar",
      },
    ],
  },
  {
    title: "City Centre & Shopping",
    intro: "CBD landmarks are close on foot, with Newmarket shopping and waterfront dining still easy to reach.",
    cards: [
      {
        title: "Auckland City, Sky Tower",
        distance: "650 m",
        travel: "8 min walk",
        description: "Auckland's skyline landmark, observation decks, restaurants and central entertainment.",
        icon: "tower",
        image: "/images/skytower.jpg",
        featured: true,
        home: true,
      },
      {
        title: "Westfield Shopping Centre",
        distance: "4.0 km",
        travel: "10-15 min drive",
        description: "Newmarket fashion, dining, rooftop restaurants, cinema access and retail essentials.",
        icon: "shopping",
      },
      {
        title: "Woolworths Supermarket",
        distance: "700 m",
        travel: "9 min walk",
        description: "A nearby grocery stop for snacks, supplies and shared-kitchen basics.",
        icon: "shopping",
        home: true,
      },
      {
        title: "Event Cinemas",
        distance: "900 m",
        travel: "12 min walk",
        description: "Central city movie sessions close to Queen Street dining and nightlife.",
        icon: "tv",
      },
      {
        title: "Princes Wharf",
        distance: "1.9 km",
        travel: "8-12 min drive",
        description: "Waterfront dining, harbour views, ferry links and downtown evening plans.",
        icon: "mapPin",
      },
      {
        title: "Mission Bay",
        distance: "8.5 km",
        travel: "15-22 min drive",
        description: "Beachfront dining, promenade walks and Waitemata Harbour views.",
        icon: "tent",
      },
    ],
  },
  {
    title: "Sports & Entertainment Venues",
    intro: "Central venues are close, with larger stadiums and event grounds across the city within driving range.",
    cards: [
      {
        title: "ASB Showground",
        distance: "6.4 km",
        travel: "12-18 min drive",
        description: "Exhibitions, shows and major public events near Greenlane and Epsom.",
        icon: "calendar",
      },
      {
        title: "One Tree Hill",
        distance: "7.0 km",
        travel: "15-20 min drive",
        description: "Historic volcanic parkland with walking tracks, open lawns and city views.",
        icon: "tent",
      },
      {
        title: "Ellerslie Racecourse",
        distance: "9.7 km",
        travel: "15-22 min drive",
        description: "Racing, events and conference facilities close to Greenlane.",
        icon: "calendar",
      },
      {
        title: "Eden Park",
        distance: "4.2 km",
        travel: "10-15 min drive",
        description: "New Zealand's national stadium for rugby, cricket, concerts and major fixtures.",
        icon: "calendar",
        image: "/images/3.jpg",
        featured: true,
        home: true,
      },
      {
        title: "Spark Arena",
        distance: "2.3 km",
        travel: "8-12 min drive",
        description: "Central Auckland arena for concerts, international acts, sports and large events.",
        icon: "calendar",
        home: true,
      },
    ],
  },
  {
    title: "Medical Facilities",
    intro: "Major hospitals and specialist facilities are reachable by short city drives from Hobson Lodge.",
    cards: [
      {
        title: "Greenlane Hospital",
        distance: "7.3 km",
        travel: "12-18 min drive",
        description: "Specialist outpatient services and clinical care near the Greenlane corridor.",
        icon: "shield",
      },
      {
        title: "Mercy Ascot Hospital Epsom",
        distance: "5.8 km",
        travel: "12-18 min drive",
        description: "Private healthcare, appointments and specialist services in Epsom.",
        icon: "shield",
      },
      {
        title: "Ascot Hospital",
        distance: "7.5 km",
        travel: "12-18 min drive",
        description: "Private surgical and medical care within easy driving reach from the CBD.",
        icon: "shield",
      },
      {
        title: "Auckland Hospital",
        distance: "2.2 km",
        travel: "6-10 min drive",
        description: "Major public hospital beside Auckland Domain and the central medical precinct.",
        icon: "shield",
        image: "/images/aucklandmuseum.jpg",
        featured: true,
      },
    ],
  },
  {
    title: "Educational Institutions",
    intro: "A useful city base for campus visits, interviews, school events and family appointments.",
    cards: [
      {
        title: "University of Auckland",
        distance: "1.3 km",
        travel: "17 min walk",
        description: "Central city campus for study trips, conferences, graduations and academic visits.",
        icon: "university",
        image: "/images/universityofauckland.jpg",
        featured: true,
        home: true,
      },
      {
        title: "Dilworth",
        distance: "5.4 km",
        travel: "12-18 min drive",
        description: "Independent boys' school in Epsom, reachable from the CBD by a short drive.",
        icon: "university",
      },
      {
        title: "Diocesan School for Girls",
        distance: "5.1 km",
        travel: "12-18 min drive",
        description: "Independent girls' school near Epsom and Remuera.",
        icon: "university",
      },
      {
        title: "St Cuthbert's College",
        distance: "6.2 km",
        travel: "12-18 min drive",
        description: "Independent girls' college on Market Road, south of Newmarket.",
        icon: "university",
      },
      {
        title: "Epsom Girls Grammar School",
        distance: "4.5 km",
        travel: "10-15 min drive",
        description: "Public girls' high school close to Epsom, Newmarket and the Domain side of town.",
        icon: "university",
      },
      {
        title: "Auckland Grammar School",
        distance: "3.0 km",
        travel: "8-12 min drive",
        description: "Public boys' high school beside Auckland Domain and central transport links.",
        icon: "university",
      },
      {
        title: "Auckland Museum & Domain",
        distance: "2.6 km",
        travel: "30 min walk",
        description: "Museum, war memorial, Wintergardens and open parkland above the city.",
        icon: "museum",
        image: "/images/aucklandmuseum.jpg",
        featured: true,
        home: true,
      },
    ],
  },
  {
    title: "Recommended Accommodation",
    intro: "Nearby accommodation options in central Auckland and Newmarket for easy comparison.",
    cards: [
      {
        title: "Best Western Newmarket",
        distance: "4.6 km",
        travel: "10-15 min drive",
        description: "Newmarket accommodation at 112 Great South Road, near shops, hospitals, schools and transport.",
        icon: "bed",
      },
      {
        title: "Alexander Inn",
        distance: "4.5 km",
        travel: "10-15 min drive",
        description: "Newmarket accommodation option near shopping, hospitals, schools and transport.",
        icon: "bed",
      },
    ],
  },
];

export const homeLocationCards = locationCardSections.flatMap((section) =>
  section.cards.filter((card) => card.home),
);
