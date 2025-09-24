export type Tradition = {
  name: string
  description: string
}

export type Country = {
  id: string
  country: string
  flag: string
  place_image: string
  traditions: Tradition[]
}

export type Countries = Country[]

export const COUNTRIES: Countries = [
  {
    id: "1",
    country: "Nigeria",
    flag: "https://upload.wikimedia.org/wikipedia/commons/7/79/Flag_of_Nigeria.svg",
    place_image: "https://i.imgur.com/XL2sK65.png",
    traditions: [
      { name: "Kola Nut Ceremony", description: "In many Nigerian ethnic groups (especially Igbo and Yoruba), the kola nut is broken and shared as a symbol of hospitality, respect, and social unity." },
      { name: "Pre-marital Introduction", description: "Before formal marriage ceremonies, families of the bride and groom meet for an introduction and negotiation of bride price." },
      { name: "Omugwo (After-Birth Care)", description: "A postpartum tradition among Igbo people where the mother’s own mother helps care for the new mother and baby." },
      { name: "Boat Regatta Festival", description: "Decorated boats race and display cultural heritage in Niger Delta river communities." },
      { name: "Gèlèdé Festival", description: "A Yoruba festival celebrating women and ancestral spiritual powers with masquerades and dance." }
    ]
  },
  {
    id: "2",
    country: "Japan",
    flag: "https://upload.wikimedia.org/wikipedia/en/9/9e/Flag_of_Japan.svg",
    place_image: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Kiyomizu-dera_in_spring.jpg",
    traditions: [
      { name: "Hanami", description: "People picnic under cherry blossoms to celebrate the beauty and transience of life." },
      { name: "Tea Ceremony", description: "A ritualized preparation of matcha tea emphasizing harmony, respect, and purity." },
      { name: "Obon Festival", description: "A Buddhist-Confucian custom to honor ancestors with lanterns and grave visits." },
      { name: "Shichi-Go-San", description: "Children aged 3, 5, and 7 visit shrines in kimono to pray for growth and health." },
      { name: "Setsubun", description: "People throw roasted soybeans to drive away evil spirits on the eve of spring." }
    ]
  },
  {
    id: "3",
    country: "India",
    flag: "https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg",
    place_image: "https://upload.wikimedia.org/wikipedia/commons/1/16/Taj_Mahal_from_the_Mehtab_Garden.jpg",
    traditions: [
      { name: "Diwali", description: "Festival of Lights marked by lamps, fireworks, sweets, and prayers." },
      { name: "Holi", description: "Festival of Colors where people throw colored powders and water to welcome spring." },
      { name: "Raksha Bandhan", description: "Sisters tie a rakhi on their brothers' wrists, symbolizing protection and love." },
      { name: "Navaratri / Durga Puja", description: "Nine nights of goddess worship, dance, fasting, and cultural celebrations." },
      { name: "Pongal", description: "Harvest festival in South India, giving thanks to the Sun and nature." }
    ]
  },
  {
    id: "4",
    country: "Brazil",
    flag: "https://upload.wikimedia.org/wikipedia/en/0/05/Flag_of_Brazil.svg",
    place_image: "https://upload.wikimedia.org/wikipedia/commons/6/6c/Cristo_Redentor_-_Rio_de_Janeiro%2C_Brazil.jpg",
    traditions: [
      { name: "Carnival", description: "Massive festival before Lent with parades, samba, and street parties." },
      { name: "Festa Junina", description: "Rural-themed June celebrations with food, bonfires, and folk dances." },
      { name: "Capoeira", description: "A martial art blending dance, acrobatics, and music." },
      { name: "Candomblé Rituals", description: "Afro-Brazilian spiritual practices honoring deities through dance and drumming." },
      { name: "Bumba Meu Boi", description: "A folkloric play with music and dance about a bull’s death and resurrection." }
    ]
  },
  {
    id: "5",
    country: "Mexico",
    flag: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Flag_of_Mexico.svg",
    place_image: "https://upload.wikimedia.org/wikipedia/commons/e/e4/Chichen_Itza_3.jpg",
    traditions: [
      { name: "Día de los Muertos", description: "Families honor deceased loved ones with altars, marigolds, and sugar skulls." },
      { name: "Quinceañera", description: "A girl’s 15th birthday celebrated with a religious ceremony and big party." },
      { name: "Las Posadas", description: "Reenactments of Mary and Joseph’s search for lodging during Christmas." },
      { name: "Grito de Dolores", description: "Independence Day celebrations with reenactments and fireworks." },
      { name: "Piñata", description: "Decorated containers filled with treats, broken open at celebrations." }
    ]
  },
  {
    id: "6",
    country: "Italy",
    flag: "https://upload.wikimedia.org/wikipedia/en/0/03/Flag_of_Italy.svg",
    place_image: "https://upload.wikimedia.org/wikipedia/commons/6/6d/Colosseum_in_Rome%2C_Italy_-_April_2007.jpg",
    traditions: [
      { name: "Ferragosto", description: "A summer holiday in August celebrated with feasts and fireworks." },
      { name: "Venice Carnival", description: "Masks, parades, and performances before Lent." },
      { name: "La Befana", description: "An old woman delivers gifts to children on Epiphany." },
      { name: "Opera and Music", description: "Opera and classical music deeply embedded in Italian culture." },
      { name: "Sunday Family Lunch", description: "Families gather weekly for a large shared meal." }
    ]
  },
  {
    id: "7",
    country: "France",
    flag: "https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg",
    place_image: "https://upload.wikimedia.org/wikipedia/commons/a/a8/Tour_Eiffel_Wikimedia_Commons.jpg",
    traditions: [
      { name: "Bastille Day", description: "National day on July 14 with fireworks and parades." },
      { name: "Wine and Cheese Culture", description: "Wine and cheese form a central part of meals and gatherings." },
      { name: "Epiphany Cake (Galette des Rois)", description: "Cake eaten in January, with a hidden charm inside." },
      { name: "Beaujolais Nouveau", description: "Celebration of the year’s first wine in November." },
      { name: "Sunday Market Shopping", description: "Visiting outdoor markets for fresh produce is a weekly tradition." }
    ]
  },
  {
    id: "8",
    country: "China",
    flag: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Flag_of_the_People%27s_Republic_of_China.svg",
    place_image: "https://upload.wikimedia.org/wikipedia/commons/1/10/Great_Wall_of_China_July_2006.JPG",
    traditions: [
      { name: "Chinese New Year", description: "Fireworks, dragon dances, red envelopes, and family feasts." },
      { name: "Dragon Boat Festival", description: "Boat races and rice dumplings (zongzi) to honor poet Qu Yuan." },
      { name: "Mid-Autumn Festival", description: "Mooncakes and lanterns celebrating family reunion." },
      { name: "Ancestor Worship", description: "Burning incense and offerings to honor ancestors." },
      { name: "Tea Culture", description: "Tea drinking is a symbol of hospitality and health." }
    ]
  },
  {
    id: "9",
    country: "Egypt",
    flag: "https://upload.wikimedia.org/wikipedia/commons/f/fe/Flag_of_Egypt.svg",
    place_image: "https://upload.wikimedia.org/wikipedia/commons/e/e3/Kheops-Pyramid.jpg",
    traditions: [
      { name: "Sham El-Nessim", description: "Spring festival with outdoor picnics and traditional foods." },
      { name: "Eid Celebrations", description: "Feasts and charity during Eid al-Fitr and Eid al-Adha." },
      { name: "Ramadan Iftar", description: "Breaking the fast with family and community meals." },
      { name: "Henna Nights", description: "Decorating brides’ hands before weddings." },
      { name: "Pharaonic Festivals", description: "Modern revivals of ancient rituals celebrating history." }
    ]
  },
  {
    id: "10",
    country: "South Africa",
    flag: "https://upload.wikimedia.org/wikipedia/commons/a/af/Flag_of_South_Africa.svg",
    place_image: "https://upload.wikimedia.org/wikipedia/commons/1/16/Table_Mountain_from_Bloubergstrand.jpg",
    traditions: [
      { name: "Braai", description: "Barbecue gatherings with family and friends." },
      { name: "Heritage Day", description: "Celebrating diverse cultures and traditions." },
      { name: "Zulu Reed Dance", description: "Young women present reeds to the king in a coming-of-age ceremony." },
      { name: "Rugby Culture", description: "Sports traditions strongly tied to national identity." },
      { name: "Ubuntu Philosophy", description: "A belief in community and shared humanity." }
    ]
  },
  {
    id: "11",
    country: "Spain",
    flag: "https://upload.wikimedia.org/wikipedia/en/9/9a/Flag_of_Spain.svg",
    place_image: "https://upload.wikimedia.org/wikipedia/commons/8/89/Plaza_Mayor_Madrid.jpg",
    traditions: [
      { name: "La Tomatina", description: "Tomato-throwing festival in Buñol every August." },
      { name: "Running of the Bulls", description: "Participants run with bulls in Pamplona." },
      { name: "Flamenco", description: "Dance and music tradition with deep cultural roots." },
      { name: "Semana Santa", description: "Holy Week processions across Spanish cities." },
      { name: "Siesta", description: "Afternoon rest as part of the daily rhythm." }
    ]
  },
  {
    id: "12",
    country: "Germany",
    flag: "https://upload.wikimedia.org/wikipedia/en/b/ba/Flag_of_Germany.svg",
    place_image: "https://upload.wikimedia.org/wikipedia/commons/7/79/Brandenburg_Gate_in_Berlin_2020.jpg",
    traditions: [
      { name: "Oktoberfest", description: "Beer festival in Munich with music, food, and parades." },
      { name: "Christmas Markets", description: "Outdoor stalls selling crafts, food, and mulled wine." },
      { name: "Karneval", description: "Colorful parades before Lent, especially in Cologne." },
      { name: "Easter Fires", description: "Bonfires lit at Easter to welcome spring." },
      { name: "Schultüte", description: "A decorated cone filled with gifts for children starting school." }
    ]
  },
  {
    id: "13",
    country: "United States",
    flag: "https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg",
    place_image: "https://upload.wikimedia.org/wikipedia/commons/a/a1/Statue_of_Liberty_7.jpg",
    traditions: [
      { name: "Thanksgiving", description: "A November holiday with feasts of turkey and family gatherings." },
      { name: "Fourth of July", description: "Independence Day with fireworks and barbecues." },
      { name: "Halloween", description: "Costume parties, trick-or-treating, and pumpkin carving." },
      { name: "Super Bowl Sunday", description: "Watching the football final with snacks and parties." },
      { name: "Black Friday", description: "Shopping tradition after Thanksgiving with big discounts." }
    ]
  },
  {
    id: "14",
    country: "Turkey",
    flag: "https://upload.wikimedia.org/wikipedia/commons/b/b4/Flag_of_Turkey.svg",
    place_image: "https://upload.wikimedia.org/wikipedia/commons/b/b4/Hagia_Sophia_Mars_2013.jpg",
    traditions: [
      { name: "Whirling Dervishes", description: "Sufi ritual of spinning dance symbolizing spiritual ascent." },
      { name: "Ramadan Iftar", description: "Evening meals with family and neighbors during fasting month." },
      { name: "Oil Wrestling", description: "Traditional sport where wrestlers are covered in olive oil." },
      { name: "Turkish Tea Culture", description: "Tea served in tulip glasses is central to hospitality." },
      { name: "Henna Nights", description: "Pre-wedding ritual where brides' hands are decorated." }
    ]
  },
  {
    id: "15",
    country: "Australia",
    flag: "https://upload.wikimedia.org/wikipedia/en/b/b9/Flag_of_Australia.svg",
    place_image: "https://upload.wikimedia.org/wikipedia/commons/6/6e/Sydney_Opera_House_-_Dec_2008.jpg",
    traditions: [
      { name: "Australia Day", description: "January 26 celebrations with fireworks and barbecues." },
      { name: "ANZAC Day", description: "Commemorating fallen soldiers with dawn services and marches." },
      { name: "Surf Life Saving Culture", description: "Volunteer surf rescue is part of community identity." },
      { name: "Christmas on the Beach", description: "Celebrating Christmas outdoors in summer weather." },
      { name: "Aboriginal Corroboree", description: "Indigenous ceremonies with dance, song, and storytelling." }
    ]
  }
]
