export type ClassProps = {
  id: string;
  flightClass: string;
};

export const flightClass : ClassProps[] = [
  { id: "1", flightClass: "Business Class" },
  { id: "2", flightClass: "First Class" },
];

export type Tradition = {
  name: string;
  description: string;
};

export type Country = {
  id: string;
  country: string;
  capital: string;
  flag: string;
  place_image: string;
  traditions: Tradition[];
};

export type Countries = Country[];

export const COUNTRIES: Countries = [
  {
    id: "1",
    country: "Nigeria",
     capital: "Abuja",
    flag: "https://upload.wikimedia.org/wikipedia/commons/7/79/Flag_of_Nigeria.svg",
    place_image:
      "https://images.unsplash.com/photo-1594538756542-8c88bda491c5?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bmlnZXJpYXxlbnwwfDB8MHx8fDA%3D",
    traditions: [
      {
        name: "Kola Nut Ceremony",
        description:
          "In many Nigerian ethnic groups, particularly among the Igbo and Yoruba, the kola nut is broken and shared during gatherings. This ritual goes beyond hospitality — it symbolizes respect, community unity, and spiritual blessings. Elders usually lead the ceremony, praying for health, prosperity, and peace. Guests are expected to accept the kola nut as a gesture of goodwill. The act carries deep cultural meaning and reinforces bonds of kinship and friendship.",
      },
      {
        name: "Pre-marital Introduction",
        description:
          "Before a formal marriage can take place, Nigerian families engage in an introduction ceremony known as 'introduction' or 'knocking on the door'. This is when the groom’s family formally visits the bride’s family to declare their intentions. Gifts are exchanged, discussions of dowry or bride price begin, and family ties are established. It is not just transactional but a warm, celebratory occasion that blends tradition, laughter, and shared meals. This moment formally unites two families into a larger community.",
      },
      {
        name: "Omugwo (After-Birth Care)",
        description:
          "Among the Igbo people, Omugwo is a postpartum practice where the grandmother comes to care for her daughter and newborn. She provides guidance on baby care, traditional health practices, and household support. The period also allows the new mother to rest and regain strength while being pampered with special meals. Herbal baths, massages, and cultural rituals ensure both mother and child remain healthy. Beyond care, Omugwo reinforces generational bonds and preserves traditional knowledge.",
      },
      {
        name: "Boat Regatta Festival",
        description:
          "In the riverine communities of Nigeria’s Niger Delta, boat regattas are vibrant cultural displays. Decorated boats with dancers, musicians, and masquerades sail through waterways to the rhythm of drums. The event celebrates heritage, bravery, and unity among fishing communities. Each clan or group competes for the most beautiful boat and most spirited performance. Spectators gather on the riverbanks, enjoying food, music, and festivities. It’s both a cultural expression and a joyful community gathering.",
      },
      {
        name: "Gèlèdé Festival",
        description:
          "Among the Yoruba, the Gèlèdé festival is a spectacular celebration of women, ancestors, and spiritual forces. Colorful masquerades with elaborate masks dance through villages to honor mothers and female deities. Music, drumming, and chants accompany the performances, often mixing humor with moral lessons. The festival serves as both entertainment and cultural preservation. It reminds communities of the importance of women’s roles in society. It’s a striking blend of art, spirituality, and communal joy.",
      },
    ],
  },
  {
    id: "2",
    country: "Japan",
     capital: "Tokyo",
    flag: "https://upload.wikimedia.org/wikipedia/en/9/9e/Flag_of_Japan.svg",
    place_image:
      "https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8amFwYW58ZW58MHwwfDB8fHww",
    traditions: [
      {
        name: "Hanami",
        description:
          "Every spring, Japan celebrates Hanami, the viewing of cherry blossoms, which represent the fleeting nature of life. Families and friends gather under blooming trees to share food, drinks, and laughter. Parks become filled with colorful picnics, traditional songs, and even lanterns at night. The blossoms last only a short while, reminding everyone of impermanence. This custom connects nature, community, and philosophy. Hanami is both a joyous festival and a contemplative tradition.",
      },
      {
        name: "Tea Ceremony",
        description:
          "The Japanese tea ceremony, or 'chanoyu,' is a ritualized preparation and drinking of matcha tea. Every movement — from arranging utensils to serving tea — is performed with grace and mindfulness. It reflects Zen principles of harmony, purity, respect, and tranquility. Guests sit in silence, appreciating not just the tea but also the art of simplicity. The ritual is deeply spiritual, blending aesthetics with philosophy. It transforms an ordinary act into a meditative experience.",
      },
      {
        name: "Obon Festival",
        description:
          "Obon is a Buddhist-Confucian custom to honor ancestors, held during summer. Families light lanterns to guide spirits back home, clean graves, and make offerings of food. Communities gather for Bon Odori dances, accompanied by taiko drums and colorful yukata. Streets and temples glow with festive lights, symbolizing remembrance and joy. It’s both a solemn and lively occasion, blending spirituality with celebration. Obon strengthens family ties and cultural continuity across generations.",
      },
      {
        name: "Shichi-Go-San",
        description:
          "Shichi-Go-San, meaning 'seven-five-three,' is a rite of passage for children of those ages. Families dress children in kimono or suits and visit shrines to pray for their growth and health. It is a moment of pride for parents, who often commemorate it with photos and gifts. Traditional sweets called 'Chitose Ame' are given to symbolize longevity. The celebration combines joy with cultural preservation. It highlights the importance of family milestones in Japanese society.",
      },
      {
        name: "Setsubun",
        description:
          "Held on the eve of spring, Setsubun is a tradition to drive away evil spirits. Families throw roasted soybeans while chanting 'Oni wa soto! Fuku wa uchi!' (Demons out! Luck in!). People also eat the same number of beans as their age for health and fortune. Shrines and temples host large ceremonies with costumed 'demons.' The practice reflects a blend of superstition and festivity. Setsubun is a cheerful yet symbolic way to welcome the new season.",
      },
    ],
  },
  {
    id: "4",
    country: "Brazil",
     capital: "Brasilia",
    flag: "https://upload.wikimedia.org/wikipedia/en/0/05/Flag_of_Brazil.svg",
    place_image:
      "https://images.unsplash.com/photo-1516306580123-e6e52b1b7b5f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YnJhemlsfGVufDB8fDB8fHww",
    traditions: [
      {
        name: "Carnival",
        description:
          "Brazil’s Carnival is one of the most famous celebrations in the world. Samba schools spend months preparing elaborate parades with costumes, floats, and music. Streets come alive with dancing, singing, and the rhythm of drums that seem to shake the earth. Communities, both rich and poor, join together in celebration. Carnival is not just entertainment; it reflects Brazil’s cultural fusion of African, Portuguese, and Indigenous traditions. It’s a dazzling display of joy, identity, and freedom that unites millions.",
      },
      {
        name: "Festa Junina",
        description:
          "Festa Junina is celebrated in June to honor Saint John and rural life. Towns are decorated with colorful flags, bonfires, and traditional costumes like straw hats and plaid shirts. People dance quadrilha, a folk dance, and enjoy foods made of corn such as pamonha and canjica. Fireworks light the sky as families and neighbors celebrate together. It pays homage to Brazil’s agricultural roots and Christian faith. Festa Junina combines spirituality, community, and rustic joy in a beloved tradition.",
      },
      {
        name: "Capoeira",
        description:
          "Capoeira is a Brazilian martial art that blends dance, acrobatics, and music. It was developed by enslaved Africans as a form of resistance disguised as dance. Participants form a circle called 'roda,' where two players engage while musicians play berimbau instruments and sing. It is a celebration of agility, rhythm, and community spirit. Today, Capoeira is practiced worldwide as both art and sport. It preserves history while teaching discipline, resilience, and cultural pride.",
      },
      {
        name: "Candomblé Rituals",
        description:
          "Candomblé is an Afro-Brazilian religion that honors orixás, or deities linked to nature and human life. Rituals involve drumming, dancing, singing in Yoruba or Kikongo, and animal offerings. Practitioners wear colorful garments symbolizing their orixá and enter trances during ceremonies. It is a deeply spiritual experience rooted in African heritage. These rituals also serve as resistance against centuries of cultural suppression. Candomblé preserves ancestral memory and emphasizes balance with nature, community, and the divine.",
      },
      {
        name: "Bumba Meu Boi",
        description:
          "Bumba Meu Boi is a theatrical folk festival that tells the story of a resurrected ox through song, dance, and performance. Originating in Maranhão, it combines Indigenous, African, and Portuguese influences. Communities create elaborate costumes and lively music with drums and tambourines. The story teaches themes of life, death, and rebirth while entertaining audiences. It is performed in streets and squares, often lasting for days of celebration. Bumba Meu Boi is both cultural storytelling and communal festivity.",
      },
    ],
  },
  {
    id: "5",
    country: "Mexico",
     capital: "Mexico City",
    flag: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Flag_of_Mexico.svg",
    place_image:
      "https://images.unsplash.com/photo-1545243424-0ce743321e11?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWV4aWNvfGVufDB8MHwwfHx8",
    traditions: [
      {
        name: "Día de los Muertos",
        description:
          "The Day of the Dead is a vibrant celebration of life and remembrance. Families create altars (ofrendas) decorated with flowers, candles, photos, and favorite foods of deceased loved ones. Cemeteries glow with candles as people sing, eat, and honor the departed. Marigolds, sugar skulls, and skeleton imagery fill the streets with color. It reflects the belief that death is part of the cycle of life. Día de los Muertos is a joyful reunion of families across worlds, honoring love that never dies.",
      },
      {
        name: "Las Posadas",
        description:
          "Las Posadas reenacts Mary and Joseph’s search for shelter before Jesus’ birth. For nine nights in December, children and adults form processions with candles and songs. At each house, the group is denied entry until finally welcomed with celebration. Piñatas, food, and prayers mark the joyful end of each night. It blends faith with community hospitality and generosity. Las Posadas is both a religious devotion and a cherished family tradition.",
      },
      {
        name: "Guelaguetza Festival",
        description:
          "Held in Oaxaca, Guelaguetza celebrates Indigenous culture through dance, music, and traditional dress. Communities from across the region showcase their heritage on a grand stage. Performers bring gifts of food and handmade items, reflecting a spirit of sharing. Bright costumes and energetic dances tell stories of history and resilience. The festival draws visitors from around the world yet remains deeply rooted in local pride. Guelaguetza is a living expression of Mexico’s cultural richness and diversity.",
      },
      {
        name: "Mariachi Music",
        description:
          "Mariachi is more than music; it is a symbol of Mexican identity and pride. Dressed in charro suits, mariachi bands perform with violins, trumpets, and guitars. Songs range from love ballads to revolutionary anthems, often accompanied by dancing. Mariachi bands are present at weddings, birthdays, and national celebrations. Their music tells stories of passion, struggle, and joy. The tradition carries Mexico’s spirit to the world, uniting communities through melody and pride.",
      },
      {
        name: "Charreada",
        description:
          "Charreada is Mexico’s national rodeo, showcasing horsemanship, skill, and tradition. Riders perform synchronized maneuvers, rope tricks, and daring stunts. Participants wear traditional charro outfits decorated with embroidery and silver. The event is festive, with food, music, and family gatherings surrounding the arena. It honors Mexico’s ranching heritage and cowboy culture. The charreada embodies courage, artistry, and respect for tradition.",
      },
    ],
  },
  {
    id: "6",
    country: "China",
    capital: "Beijing",
    flag: "https://upload.wikimedia.org/wikipedia/commons/2/20/Flag_of_China.svg",
    place_image:
      "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2hpbmF8ZW58MHwwfDB8fHww",
    traditions: [
      {
        name: "Chinese New Year",
        description:
          "Also known as Spring Festival, Chinese New Year is the most important holiday in China. Families reunite for large feasts, exchange red envelopes with money, and decorate homes with lanterns. Firecrackers and dragon dances fill the streets with excitement. Each year is associated with a zodiac animal, shaping festivities and beliefs. The celebration emphasizes family unity, good fortune, and renewal. It is both a joyous cultural festival and a deeply spiritual observance.",
      },
      {
        name: "Mid-Autumn Festival",
        description:
          "The Mid-Autumn Festival celebrates the harvest and the full moon. Families gather to eat mooncakes, admire the moon, and share stories of Chang’e, the moon goddess. Lanterns of all shapes and colors light up parks and streets. It is a time for gratitude, family togetherness, and poetic reflection. Communities host performances, dragon dances, and cultural displays. The festival connects people to nature, myth, and one another in a warm, shared experience.",
      },
      {
        name: "Dragon Boat Festival",
        description:
          "The Dragon Boat Festival honors the poet Qu Yuan, who drowned in protest centuries ago. Communities race dragon-shaped boats to the beat of drums, symbolizing rescue efforts. Families eat sticky rice dumplings wrapped in bamboo leaves called zongzi. The event is both athletic and cultural, strengthening bonds between participants and spectators. It combines sport, history, and ritual in a thrilling tradition. Dragon Boat Festival is a celebration of loyalty, perseverance, and unity.",
      },
      {
        name: "Ancestor Worship",
        description:
          "Ancestor worship is a long-standing Chinese tradition practiced during Qingming Festival and other times. Families visit ancestral graves, clean them, and make offerings of food, incense, and joss paper. It reflects deep respect for family heritage and continuity between generations. These rituals strengthen bonds between the living and the departed. It is both spiritual and cultural, emphasizing duty and remembrance. Ancestor worship is a cornerstone of Chinese identity and values.",
      },
      {
        name: "Lantern Festival",
        description:
          "The Lantern Festival marks the end of Lunar New Year celebrations. Streets are decorated with glowing lanterns carrying riddles for people to solve. Families eat glutinous rice balls called tangyuan, symbolizing unity. Performances of lion dances and acrobatics entertain crowds. The night sky glows with floating lanterns, creating a magical atmosphere. It is a joyful event blending play, food, and tradition. The Lantern Festival closes the new year with beauty, laughter, and hope.",
      },
    ],
  },
  {
    id: "7",
    country: "France",
    capital: "Paris",
    flag: "https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg",
    place_image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZnJhbmNlfGVufDB8MHwwfHx8",
    traditions: [
      {
        name: "Bastille Day",
        description:
          "Celebrated on July 14th, Bastille Day marks the French Revolution and the spirit of liberty. Military parades march along the Champs-Élysées in Paris. Fireworks, concerts, and communal meals light up towns across the country. Citizens wave flags, sing, and reflect on their national identity. It is both patriotic and festive, uniting people across generations. Bastille Day is a celebration of freedom, democracy, and France’s enduring cultural pride.",
      },
      {
        name: "Wine Harvest Festivals",
        description:
          "France’s wine regions celebrate harvest season with festivals full of music, dancing, and feasting. Communities gather to stomp grapes, sample wine, and honor centuries-old traditions. Parades showcase costumes, local produce, and regional pride. Visitors and locals alike join in merriment under autumn skies. These festivals connect culture, agriculture, and artistry in joyful expression. They preserve France’s wine-making heritage while uniting communities in celebration.",
      },
      {
        name: "Galette des Rois",
        description:
          "Galette des Rois, or King’s Cake, is eaten on Epiphany in January. The cake contains a hidden figurine called a fève. Whoever finds it in their slice becomes king or queen for the day and wears a golden crown. Families and friends gather to share laughter, cake, and tradition. It is playful yet meaningful, symbolizing luck and blessing. Galette des Rois blends culinary delight with cultural ritual in a cherished French custom.",
      },
      {
        name: "Beaujolais Nouveau Day",
        description:
          "On the third Thursday of November, France celebrates the release of Beaujolais Nouveau wine. Bars and restaurants host tastings with food, music, and dancing. The tradition began as a local festivity but has spread internationally. It highlights France’s wine culture and joie de vivre. Communities gather to toast the new vintage together. Beaujolais Nouveau Day is a spirited celebration of harvest, friendship, and French identity.",
      },
      {
        name: "Carnaval de Nice",
        description:
          "The Nice Carnival is one of Europe’s grandest, featuring floats, costumes, and flower parades. Streets fill with confetti, music, and masked performers. The Battle of Flowers, where participants throw blossoms into the crowd, is a highlight. Tourists and locals alike join the spectacle. The festival celebrates creativity, joy, and Mediterranean culture. Carnaval de Nice is a dazzling showcase of French festivity and artistry.",
      },
    ],
  },
  {
    id: "8",
    country: "Italy",
      capital: "Rome",
    flag: "https://upload.wikimedia.org/wikipedia/en/0/03/Flag_of_Italy.svg",
    place_image:
      "https://images.unsplash.com/photo-1528127269322-539801943592?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aXRhbHl8ZW58MHwwfDB8fHww",
    traditions: [
      {
        name: "Carnevale di Venezia",
        description:
          "Venice’s Carnival is famous for its elaborate masks and costumes. Streets and canals come alive with music, dancing, and theatrical performances. Masked balls take place in palaces, reviving centuries-old traditions. Each mask carries historical and cultural significance. The festival attracts visitors from around the globe, yet remains deeply Venetian. Carnevale is a dazzling mix of mystery, art, and celebration.",
      },
      {
        name: "Ferragosto",
        description:
          "Ferragosto, celebrated on August 15th, marks the Assumption of Mary and the peak of summer holidays. Families and friends gather for picnics, beach outings, and feasts. Towns host fireworks, parades, and local festivities. It is both religious and secular, honoring tradition and leisure. Ferragosto is a time of joy, rest, and connection. The holiday unites Italians across regions in shared celebration.",
      },
      {
        name: "La Befana",
        description:
          "On January 6th, Italians celebrate Epiphany with the legend of La Befana, a kind witch. She rides her broomstick to deliver gifts and sweets to children. Families hang stockings by the fireplace to receive her surprises. The tradition blends folklore with Christian faith. Streets and markets come alive with festivals, sweets, and parades. La Befana is a beloved figure who brings warmth and joy after Christmas.",
      },
      {
        name: "Palio di Siena",
        description:
          "The Palio is a thrilling horse race held twice yearly in Siena’s main square. Riders represent different city districts, competing fiercely in colorful pageantry. The event includes parades, medieval costumes, and days of feasting. It is both sport and ritual, with strong community pride at stake. The Palio embodies rivalry, tradition, and passion. Siena’s heart beats with excitement during this centuries-old spectacle.",
      },
      {
        name: "Opera and Music",
        description:
          "Italy, the birthplace of opera, maintains a rich musical tradition. Cities like Milan and Verona host performances in grand theaters and ancient arenas. Opera festivals celebrate composers like Verdi and Puccini with passion and artistry. Music fills public squares during cultural events and holidays. Italians cherish music as part of daily life and identity. Opera remains a symbol of Italy’s cultural excellence and global influence.",
      },
    ],
  },
  {
    id: "9",
    country: "Egypt",
      capital: "Cairo",
    flag: "https://upload.wikimedia.org/wikipedia/commons/f/fe/Flag_of_Egypt.svg",
    place_image:
      "https://images.unsplash.com/photo-1600520611035-84157ad4084d?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZWd5cHR8ZW58MHwwfDB8fHww",
    traditions: [
      {
        name: "Sham El-Nessim",
        description:
          "Sham El-Nessim is an ancient spring festival celebrated since the time of the pharaohs. Families gather outdoors for picnics in gardens, parks, or along the Nile River. Traditional foods like salted fish (feseekh), green onions, and lettuce are eaten. The holiday marks renewal, fertility, and the welcoming of warmer days. It is a moment of togetherness, joy, and cultural continuity. Sham El-Nessim connects modern Egyptians with their deep ancestral past.",
      },
      {
        name: "Eid Celebrations",
        description:
          "Eid al-Fitr and Eid al-Adha are two of the most important festivals in Egypt. Families gather for prayers, exchange gifts, and share lavish meals with neighbors and relatives. Children wear new clothes and receive money as presents. Streets fill with festive decorations, laughter, and generosity. Eid emphasizes gratitude, community, and faith. It is a powerful expression of both religious devotion and family unity.",
      },
      {
        name: "Ramadan Iftar",
        description:
          "During Ramadan, Muslims in Egypt fast from dawn to sunset. At sunset, families and friends gather for iftar, the meal to break the fast. Dates, soup, and traditional dishes are shared with warmth and generosity. Communities often organize large communal meals for the poor and needy. Streets light up with lanterns and decorations. Ramadan iftar embodies spirituality, hospitality, and the joy of togetherness.",
      },
      {
        name: "Henna Nights",
        description:
          "Henna nights are pre-wedding celebrations for brides. Women gather to sing, dance, and apply intricate henna designs on the bride’s hands and feet. It is a joyful event full of music, laughter, and blessings. The night strengthens bonds among women in the family and community. It also serves as a symbolic preparation for the bride’s new life. Henna nights blend beauty, tradition, and cultural pride.",
      },
      {
        name: "Pharaonic Festivals",
        description:
          "Egypt also celebrates its ancient heritage with modern revivals of pharaonic rituals and festivals. Events often include reenactments of historic processions, music, and dance. These traditions honor Egypt’s identity as a cradle of civilization. They remind citizens and visitors of the timelessness of Egyptian culture. Such festivals bridge the gap between ancient glory and modern pride. They celebrate resilience, history, and cultural depth.",
      },
    ],
  },
  {
    id: "10",
    country: "South Africa",
      capital: "Pretoria",
    flag: "https://upload.wikimedia.org/wikipedia/commons/a/af/Flag_of_South_Africa.svg",
    place_image:
      "https://plus.unsplash.com/premium_photo-1697730061063-ad499e343f26?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c291dGglMjBhZnJpY2F8ZW58MHwwfDB8fHww",
    traditions: [
      {
        name: "Braai",
        description:
          "A braai is a South African barbecue, but it is more than just cooking meat. It is a gathering of family and friends around an open fire. People grill boerewors, steaks, and chicken while enjoying drinks and conversation. Braais happen at homes, beaches, and public parks, uniting communities across backgrounds. It symbolizes hospitality, togetherness, and national identity. A braai is a true taste of South African culture.",
      },
      {
        name: "Heritage Day",
        description:
          "Heritage Day, celebrated on September 24th, honors the diversity of South Africa’s cultures. People wear traditional clothing, cook indigenous dishes, and share stories of their heritage. Festivals, parades, and concerts take place across cities and towns. It encourages pride in cultural identity while promoting unity. Heritage Day reminds South Africans of their motto: 'Unity in Diversity.' It is both celebratory and deeply meaningful.",
      },
      {
        name: "Zulu Reed Dance",
        description:
          "The Zulu Reed Dance is a traditional ceremony where thousands of young women present reeds to the Zulu king. Dressed in vibrant attire, they sing and dance in unison. The event celebrates purity, respect for women, and cultural pride. Families and communities gather to witness the colorful spectacle. It is a cherished tradition passed down through generations. The reed dance reinforces values of respect, dignity, and heritage.",
      },
      {
        name: "Rugby Culture",
        description:
          "Rugby is more than a sport in South Africa—it is a unifying national passion. Matches bring together fans of all ages and backgrounds. The Springboks, the national team, hold symbolic importance in the nation’s history. Celebrations around games include barbecues, music, and spirited camaraderie. Rugby reflects resilience, pride, and the spirit of community. It is an essential part of South African cultural life.",
      },
      {
        name: "Ubuntu Philosophy",
        description:
          "Ubuntu is a philosophy that emphasizes humanity, compassion, and interconnectedness. The phrase 'I am because we are' defines this worldview. It shapes social relationships, community values, and daily life. Ubuntu encourages generosity, forgiveness, and collective well-being. It is celebrated not only in rituals but also in everyday interactions. Ubuntu is a cornerstone of South African identity and moral heritage.",
      },
    ],
  },
  {
    id: "11",
    country: "Spain",
    capital: "Madrid",
    flag: "https://upload.wikimedia.org/wikipedia/en/9/9a/Flag_of_Spain.svg",
    place_image:
      "https://plus.unsplash.com/premium_photo-1754265633089-580f5867b801?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2FudGlhZ28lMjBiZXJuYWIlQzMlQTl1fGVufDB8MHwwfHx8MA%3D%3D",
    traditions: [
      {
        name: "La Tomatina",
        description:
          "La Tomatina is a world-famous tomato-throwing festival held in Buñol every August. Thousands of participants gather in the streets to hurl ripe tomatoes at each other. The messy battle creates a sea of red, followed by music, dancing, and feasting. It is playful, chaotic, and full of laughter. The festival brings locals and tourists together in a unique spirit of joy. La Tomatina is both a spectacle and a celebration of fun.",
      },
      {
        name: "Running of the Bulls",
        description:
          "The Running of the Bulls, or San Fermín, takes place in Pamplona each July. Brave participants run alongside charging bulls through narrow streets. The event is dangerous yet thrilling, attracting global attention. Festivities include parades, fireworks, and traditional music. It is both a cultural ritual and a daring adventure. The tradition reflects Spain’s spirit of courage, excitement, and tradition.",
      },
      {
        name: "Flamenco",
        description:
          "Flamenco is an art form blending dance, music, and song, deeply rooted in Andalusian culture. Performers express intense emotions through dramatic movement, guitar, and soulful singing. Audiences are captivated by the passion and rhythm. Flamenco is both performance and heritage, passed down through families. It is recognized by UNESCO as intangible cultural heritage. Flamenco embodies Spain’s artistic soul and cultural pride.",
      },
      {
        name: "Semana Santa",
        description:
          "Semana Santa, or Holy Week, is one of Spain’s most solemn and spectacular traditions. Cities hold religious processions with statues of the Virgin Mary and Christ carried on ornate floats. Participants wear robes and hoods, marching to the sound of drums and hymns. Streets fill with candles, prayers, and devotion. The week is both spiritual and cultural, attracting millions of visitors. Semana Santa expresses faith, sacrifice, and artistic devotion.",
      },
      {
        name: "Siesta",
        description:
          "The siesta is Spain’s famous afternoon rest, traditionally taken after lunch. Shops and businesses close as people relax or nap. It reflects a rhythm of life connected to climate, health, and balance. Though less common in modern cities, it remains a cherished cultural practice. The siesta emphasizes rest, family time, and well-being. It is symbolic of Spain’s relaxed and joyful lifestyle.",
      },
    ],
  },
  {
    id: "12",
    country: "Germany",
    capital: "Berlin",
    flag: "https://upload.wikimedia.org/wikipedia/en/b/ba/Flag_of_Germany.svg",
    place_image:
      "https://images.unsplash.com/photo-1501952476817-d7ae22e8ee4e?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzYWNlbnR8N3x8Z2VybWFueXxlbnwwfDB8fHww",
    traditions: [
      {
        name: "Oktoberfest",
        description:
          "Oktoberfest in Munich is the world’s largest beer festival, attracting millions of visitors. People wear traditional Bavarian outfits such as lederhosen and dirndls. Massive beer tents serve local brews alongside pretzels, sausages, and roasted chicken. Music, folk dancing, and parades create a festive atmosphere. The celebration lasts more than two weeks, blending tradition and modern fun. Oktoberfest is a global symbol of German hospitality and culture.",
      },
      {
        name: "Christmas Markets",
        description:
          "Germany’s Christmas markets are enchanting events held in town squares during Advent. Wooden stalls sell handcrafted ornaments, toys, and festive decorations. Visitors enjoy mulled wine (Glühwein), roasted nuts, and gingerbread cookies. Choirs sing carols while twinkling lights brighten cold winter nights. Each region adds its unique traditions, from Erzgebirge woodwork to Nuremberg’s famous Lebkuchen. Christmas markets bring warmth, joy, and community spirit to the holiday season.",
      },
      {
        name: "Karneval",
        description:
          "Karneval, or Fasching, is Germany’s carnival season before Lent. Cities like Cologne and Mainz host parades with floats, costumes, and music. People wear masks and satirical outfits, poking fun at politics and society. Street parties last for days, full of laughter, dancing, and food. Karneval represents freedom, creativity, and reversal of social roles. It’s a beloved tradition where communities come alive with color and energy.",
      },
      {
        name: "Easter Fires",
        description:
          "Easter fires are a long-standing springtime tradition in many German regions. Communities gather to light large bonfires on Easter Saturday or Sunday. The flames symbolize the victory of light over darkness and the arrival of spring. People sing, dance, and share food around the fire. Children often play nearby, enjoying sweets and games. The Easter fire unites villages in warmth, joy, and renewal.",
      },
      {
        name: "Schultüte",
        description:
          "On their first day of school, German children receive a Schultüte, a large decorated cone filled with gifts and sweets. It marks the transition from home to school life in a joyful way. Parents often prepare them with stationery, books, and little toys. The tradition reduces anxiety and makes the day memorable. Photos are taken as children proudly hold their cones. Schultüte symbolizes support, excitement, and new beginnings.",
      },
    ],
  },
  {
    id: "13",
    country: "United States",
     capital: "Washington, D.C.",
    flag: "https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg",
    place_image:
      "https://images.unsplash.com/photo-1633864528487-514c23f2b184?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHVuaXRlZCUyMHN0YXRlc3xlbnwwfDB8MHx8fDA%3D",
    traditions: [
      {
        name: "Thanksgiving",
        description:
          "Thanksgiving, celebrated in November, is one of America’s most important holidays. Families gather for a feast of turkey, stuffing, cranberry sauce, and pumpkin pie. The day emphasizes gratitude, family unity, and reflection. Parades like Macy’s Thanksgiving Day Parade add festive cheer. Football games are watched across households as part of the tradition. Thanksgiving blends history, culture, and modern celebration in a single day of togetherness.",
      },
      {
        name: "Fourth of July",
        description:
          "Independence Day on July 4th commemorates the founding of the United States. Fireworks light up the sky in cities and towns nationwide. Families host barbecues, picnics, and outdoor parties with patriotic music. Parades feature marching bands, floats, and community pride. The day symbolizes freedom, history, and national unity. It is a colorful reminder of the country’s struggle for independence and its enduring values.",
      },
      {
        name: "Halloween",
        description:
          "Halloween on October 31st is a playful and spooky tradition. Children dress in costumes and go trick-or-treating, collecting candy from neighbors. Haunted houses, pumpkin carving, and ghost stories add to the excitement. Adults also join with themed parties, parades, and decorations. The holiday blends Celtic origins with modern creativity. Halloween is a celebration of imagination, community fun, and festive chills.",
      },
      {
        name: "Super Bowl Sunday",
        description:
          "Super Bowl Sunday is more than just a sports event—it’s a cultural phenomenon. Families and friends gather to watch the NFL championship game. The day includes massive feasts of wings, pizza, chips, and dips. Commercials and halftime shows are as anticipated as the game itself. Parties bring people together regardless of team loyalty. Super Bowl Sunday symbolizes entertainment, food, and community celebration.",
      },
      {
        name: "Black Friday",
        description:
          "Black Friday, the day after Thanksgiving, marks the start of the holiday shopping season. Retailers offer huge discounts, and crowds line up before dawn. Shoppers hunt for bargains on electronics, clothes, and gifts. Online sales have also become a massive part of the tradition. While chaotic at times, the day represents excitement and consumer culture. Black Friday highlights America’s love of shopping and festive preparation.",
      },
    ],
  },
  {
    id: "14",
    country: "Turkey",
     capital: "Ankara",
    flag: "https://upload.wikimedia.org/wikipedia/commons/b/b4/Flag_of_Turkey.svg",
    place_image:
      "https://images.unsplash.com/photo-1623621534850-d325a1980c7e?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHR1cmtleXxlbnwwfDB8MHx8fDA%3D",
    traditions: [
      {
        name: "Whirling Dervishes",
        description:
          "The Whirling Dervishes are a spiritual practice of the Sufi order in Turkey. Dancers spin in white robes with tall hats, symbolizing a journey to divine truth. The ritual combines music, prayer, and meditation in a mesmerizing performance. Audiences witness a mix of art and spirituality. It emphasizes discipline, devotion, and unity with the divine. The Whirling Dervishes are an iconic cultural expression of Turkey’s spiritual heritage.",
      },
      {
        name: "Ramadan Iftar",
        description:
          "During Ramadan, Turkish families gather to break the fast at sunset with iftar meals. Tables are filled with soups, bread, olives, dates, and sweets. Neighborhoods often host communal dinners where everyone is welcome. The atmosphere is festive, with lights, prayers, and family bonding. It is a time of generosity, reflection, and gratitude. Iftar is central to Turkish hospitality and religious devotion.",
      },
      {
        name: "Oil Wrestling",
        description:
          "Oil wrestling, or Yağlı Güreş, is one of Turkey’s oldest sports. Wrestlers cover themselves in olive oil and compete in fields, making it both challenging and exciting. Matches are accompanied by traditional music and cheering crowds. The sport reflects strength, skill, and cultural pride. Festivals such as Kırkpınar host grand tournaments that attract thousands of spectators. Oil wrestling symbolizes endurance, tradition, and honor.",
      },
      {
        name: "Turkish Tea Culture",
        description:
          "Tea, or 'çay,' is at the heart of Turkish daily life. Served in small tulip-shaped glasses, it is offered to guests, neighbors, and friends. Conversations often revolve around tea, whether in homes or bustling tea gardens. Brewing and sharing tea is considered an act of hospitality. It is more than a beverage; it is a cultural bond. Turkish tea culture reflects warmth, community, and tradition.",
      },
      {
        name: "Henna Nights",
        description:
          "Henna nights, or 'Kına Gecesi,' are traditional pre-wedding ceremonies in Turkey. The bride’s hands are decorated with henna while women sing, dance, and offer blessings. The atmosphere is emotional, combining joy with tears as the bride prepares for marriage. Traditional songs and rituals highlight family ties. The event blends beauty, symbolism, and cultural pride. Henna nights remain a cherished part of Turkish weddings.",
      },
    ],
  },
  {
    id: "15",
    country: "Australia",
      capital: "Canberra",
    flag: "https://upload.wikimedia.org/wikipedia/en/b/b9/Flag_of_Australia.svg",
    place_image:
      "https://images.unsplash.com/photo-1548296404-93c7694b2f91?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF1c3RyYWxpYXxlbnwwfDB8MHx8fDA%3D",
    traditions: [
      {
        name: "Australia Day",
        description:
          "Australia Day on January 26th marks the arrival of the First Fleet in 1788. Celebrations include fireworks, concerts, and community events. Families gather for barbecues at beaches and parks. It is also a time of reflection on history and Indigenous heritage. Many Australians use the day to discuss identity and unity. The holiday blends celebration with cultural dialogue.",
      },
      {
        name: "ANZAC Day",
        description:
          "ANZAC Day on April 25th honors Australian and New Zealand soldiers. Dawn services are held across the country, followed by marches and parades. Families lay wreaths and remember loved ones. The day emphasizes sacrifice, courage, and national pride. Traditional games like 'two-up' are played in memory of soldiers. ANZAC Day is solemn yet unifying, connecting past and present generations.",
      },
      {
        name: "Surf Life Saving Culture",
        description:
          "Surf life saving is a proud part of Australian coastal communities. Volunteer lifeguards patrol beaches, ensuring safety for swimmers and surfers. Clubs train young people in swimming, rescue, and teamwork. Surf carnivals showcase competitions, rescues, and ocean skills. The culture represents community service, resilience, and love of the sea. It is an iconic aspect of Australia’s identity and lifestyle.",
      },
      {
        name: "Christmas on the Beach",
        description:
          "In Australia, Christmas is celebrated in summer, often outdoors. Families gather at beaches or parks for festive picnics and barbecues. Santa Claus may even arrive on a surfboard in coastal towns. Traditional foods are blended with summer favorites like seafood and salads. The atmosphere is relaxed, joyful, and unique to the southern hemisphere. Christmas on the beach reflects Australia’s sunny and laid-back culture.",
      },
      {
        name: "Aboriginal Corroboree",
        description:
          "Corroborees are traditional Aboriginal ceremonies involving song, dance, and storytelling. They share ancestral knowledge, history, and spiritual beliefs. Participants paint their bodies with symbolic designs and perform to the rhythm of didgeridoos. Corroborees connect people to the land, ancestors, and Dreamtime stories. They remain an essential practice for preserving Indigenous culture. These gatherings are both sacred and celebratory, highlighting identity and continuity.",
      },
    ],
  },
];
