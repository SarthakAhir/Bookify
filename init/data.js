const sampleListings = [
  {
    title: "Luxury Seaside Villa",
    description: "Spacious villa overlooking the Arabian Sea with a private pool and modern interiors.",
    image: "https://www.summertimegoa.com/img/Summertime-Winner_of_the_World_Boutique_Hotel_Award_2016.jpg",
    price: 2500,
    location: "Candolim, Goa",
    country: "India"
  },
  {
    title: "Desert Mirage Resort",
    description: "Exclusive stay near the dunes, featuring luxury tents and cultural experiences.",
    image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.jetsetandtravel.com%2Fjetset-highlights%2F2018%2F9%2F17%2Fdesert-relaxation-at-ritz-carlton-rancho-mirage-palm-desert-h35h7&psig=AOvVaw1I0pgyYJC88Fw9ft1y5Q88&ust=1761924633448000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCLjWhP6ezJADFQAAAAAdAAAAABAL",
    price: 1800,
    location: "Jaisalmer, Rajasthan",
    country: "India"
  },
  {
    title: "Skyline Penthouse",
    description: "Modern penthouse with panoramic city views and rooftop garden.",
    image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.timeoutdubai.com%2Ffood-drink%2Ffeatures%2F410426-skyline-thursdays-at-the-penthouse&psig=AOvVaw2_Nt3YoTT4t6BOLwd22thv&ust=1761924524828000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCMiK-syezJADFQAAAAAdAAAAABAL",
    price: 3500,
    location: "Dubai Marina",
    country: "UAE"
  },
  {
    title: "Tropical Retreat Bungalow",
    description: "Cozy bungalow surrounded by palm trees and crystal-clear beaches.",
    image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fphanganist.com%2Fkoh-phangan-hotel-bungalow-article%2Fmoonway-bungalows-koh-phangan-your-tropical-retreat&psig=AOvVaw0ECQ7ULfRvBeTLPP-HMV3w&ust=1761924360621000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCPivgv-dzJADFQAAAAAdAAAAABAE",
    price: 1500,
    location: "Phuket",
    country: "Thailand"
  },
  {
    title: "Mountain View Chalet",
    description: "Wooden chalet with fireplace and stunning views of the snow-capped Alps.",
    image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.airbnb.co.in%2Frooms%2F53029200&psig=AOvVaw16FsHRyZgEc2nRYeEwA6TQ&ust=1761924189778000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCNC_sqCdzJADFQAAAAAdAAAAABAE",
    price: 2700,
    location: "Interlaken",
    country: "Switzerland"
  },
  {
    title: "Hilltop Heritage Villa",
    description: "A serene villa nestled in lush greenery with an infinity pool overlooking the hills.",
    image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fhill-top-homes.allkeralahotels.net%2Fen%2F&psig=AOvVaw2q7yj-FmD0_6pFe1Qjcr1T&ust=1761968803166000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCKiUqvXDzZADFQAAAAAdAAAAABAE",
    price: 2200,
    location: "Munnar, Kerala",
    country: "India"
  },
  {
    title: "Lakeview Cottage",
    description: "Charming wooden cottage with a cozy fireplace and peaceful lake views.",
    image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.tripadvisor.com%2FLocationPhotoDirectLink-g679051-d1206083-i410750779-Neelesh_Inn_Luxury_on_the_Lake-Bhimtal_Nainital_District_Uttarakhand.html&psig=AOvVaw0yAL7LJa80AHhs4jP9wY5X&ust=1761969056201000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCJiN_LPEzZADFQAAAAAdAAAAABAp",
    price: 1700,
    location: "Nainital, Uttarakhand",
    country: "India"
  },
  {
    title: "Urban Studio Apartment",
    description: "Compact yet stylish apartment in the heart of the city, ideal for solo travelers.",
    image: "https://images.unsplash.com/photo-1586105251261-72a756497a12https://www.google.com/url?sa=i&url=https%3A%2F%2Fhousing.com%2Fin%2Fbuy%2Fbangalore%2Fstudio-bangalore_urban%3Fpage%3D2&psig=AOvVaw33nk_XC6sWg8WJdgCHCTb7&ust=1761969447069000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCMDd9PfFzZADFQAAAAAdAAAAABAE",
    price: 900,
    location: "Bangalore, Karnataka",
    country: "India"
  },
  {
    title: "Safari Lodge Retreat",
    description: "Luxury tented camp offering a unique wildlife experience with modern amenities.",
    image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.marriott.com%2Fen-us%2Fhotels%2Fnbomj-jw-marriott-masai-mara-lodge%2Foverview%2F&psig=AOvVaw0EAv1YAoHxsi4Qc6UlTcQ1&ust=1761969746013000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCKDNpI3HzZADFQAAAAAdAAAAABAE",
    price: 2600,
    location: "Maasai Mara",
    country: "Kenya"
  },
  {
    title: "Beachfront Paradise Villa",
    description: "Elegant property with direct beach access, private bar, and ocean-facing rooms.",
    image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fpropertyfinderbali.com%2Flisting%2Fbeachfront-paradise-villa-in-balian-stunning-ocean-views%2F&psig=AOvVaw24cN7J9zhRZQKp00TZ_hoS&ust=1761969893837000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCPCBtcnHzZADFQAAAAAdAAAAABAE",
    price: 3200,
    location: "Bali",
    country: "Indonesia"
  },
    {
    title: "Countryside Farm Stay",
    description: "Rustic farm experience with organic meals, open fields, and animal interactions.",
    image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.smh.com.au%2Ftraveller%2Finspiration%2Fthe-cheap-way-to-holiday-in-italy-is-charming-and-unpretentious-20240326-p5ffg2.html&psig=AOvVaw26LtatLmo3sYfkMJMCXs7f&ust=1761970087482000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCIjY0qTIzZADFQAAAAAdAAAAABAE",
    price: 1100,
    location: "Tuscany",
    country: "Italy"
  },
  {
    title: "City Lights Hotel Suite",
    description: "High-rise hotel suite offering skyline views, modern decor, and rooftop dining.",
    image: "https://hoteldesigns.net/wp-content/uploads/2019/12/Park-Hyatt-New-York-Manhattan-Sky-Suite-Master-Bedroom-Central-Park-View.jpg",
    price: 2800,
    location: "New York City",
    country: "USA"
  }
]

module.exports = { data: sampleListings };