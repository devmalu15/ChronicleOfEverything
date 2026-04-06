export interface TimelineEvent {
  date: string;
  year: number; // Negative for BCE, positive for CE. Billions/Millions converted to numbers.
  event: string;
  details: string;
  category: 'cosmic' | 'geological' | 'biological' | 'prehistoric' | 'ancient' | 'medieval' | 'early-modern' | 'modern' | 'contemporary';
  emoji: string;
}

export const TIMELINE_DATA: TimelineEvent[] = [
  // COSMIC EVENTS
  {
    date: "13.8 Billion BCE",
    year: -13800000000,
    event: "The Big Bang",
    details: "The universe begins as an infinitely hot, dense singularity. Space, time, matter, and energy are created in a single moment. Temperature exceeds 10^32 K (Planck temperature).",
    category: 'cosmic',
    emoji: "💥"
  },
  {
    date: "13.8 Billion BCE (10^-43 sec)",
    year: -13799999999.9999,
    event: "Planck Epoch",
    details: "Earliest known period of the universe. All four fundamental forces (gravity, electromagnetism, strong & weak nuclear) are unified as one superforce.",
    category: 'cosmic',
    emoji: "🌌"
  },
  {
    date: "13.8 Billion BCE (10^-36 sec)",
    year: -13799999999.9998,
    event: "Cosmic Inflation",
    details: "The universe expands exponentially, doubling in size more than 90 times in a fraction of a second. Quantum fluctuations become seeds of future galaxies.",
    category: 'cosmic',
    emoji: "🎈"
  },
  {
    date: "13.8 Billion BCE (10^-32 sec)",
    year: -13799999999.9997,
    event: "Quark Epoch",
    details: "Quarks, leptons, and their antimatter counterparts fill the universe. Temperature ~10^27 K.",
    category: 'cosmic',
    emoji: "⚛️"
  },
  {
    date: "13.8 Billion BCE (10^-6 sec)",
    year: -13799999999.9996,
    event: "Hadron Epoch & Quark Confinement",
    details: "Quarks combine to form protons and neutrons. Matter slightly outnumbers antimatter (1 in 10 billion), leading to survival of matter.",
    category: 'cosmic',
    emoji: "🧬"
  },
  {
    date: "13.8 Billion BCE (1-3 min)",
    year: -13799999999.9995,
    event: "Big Bang Nucleosynthesis",
    details: "Protons and neutrons fuse to form hydrogen, deuterium, helium, and trace amounts of lithium. Universe is ~75% hydrogen, ~25% helium by mass.",
    category: 'cosmic',
    emoji: "🧪"
  },
  {
    date: "13.8 Billion BCE (380,000 years)",
    year: -13799620000,
    event: "Recombination & Cosmic Dark Ages",
    details: "Universe cools enough for electrons to bind to nuclei, forming neutral atoms. The universe becomes transparent. The Cosmic Microwave Background (CMB) radiation is released — the oldest light in the universe.",
    category: 'cosmic',
    emoji: "🌑"
  },
  {
    date: "13.6 Billion BCE",
    year: -13600000000,
    event: "First Stars (Population III Stars)",
    details: "Massive, short-lived stars of pure hydrogen and helium ignite. They forge the first heavy elements (carbon, oxygen, silicon, iron) through nuclear fusion. No planets exist yet.",
    category: 'cosmic',
    emoji: "✨"
  },
  {
    date: "13.4 Billion BCE",
    year: -13400000000,
    event: "First Galaxies Form",
    details: "Dark matter halos gravitationally attract gas clouds. First proto-galaxies emerge, hosting Population III stars. Epoch of Reionization begins.",
    category: 'cosmic',
    emoji: "🌀"
  },
  {
    date: "13.0 Billion BCE",
    year: -13000000000,
    event: "Epoch of Reionization",
    details: "Ultraviolet radiation from first stars ionizes neutral hydrogen. Universe transitions from foggy to clear. Lasts ~700 million years.",
    category: 'cosmic',
    emoji: "🔦"
  },
  {
    date: "12.8 Billion BCE",
    year: -12800000000,
    event: "First Quasars",
    details: "Supermassive black holes form and accrete matter at enormous rates, outshining entire galaxies. Quasar J0313-1806 dated to ~670 million years after Big Bang.",
    category: 'cosmic',
    emoji: "🕳️"
  },
  {
    date: "10 Billion BCE",
    year: -10000000000,
    event: "Milky Way Galaxy Forms",
    details: "Our galaxy begins assembling from smaller satellite galaxies merging over billions of years. The galactic disk takes shape over several billion years.",
    category: 'cosmic',
    emoji: "🌌"
  },
  {
    date: "9 Billion BCE",
    year: -9000000000,
    event: "First Supernovae Seeding Heavy Elements",
    details: "Massive stars explode as supernovae, scattering carbon, nitrogen, oxygen, iron, and heavier elements across the galaxy. These become building blocks for rocky planets.",
    category: 'cosmic',
    emoji: "🎇"
  },
  {
    date: "7 Billion BCE",
    year: -7000000000,
    event: "Solar System Proto-disk Begins",
    details: "A vast molecular cloud in the Milky Way begins concentrating due to gravitational instability, perhaps triggered by a nearby supernova shockwave.",
    category: 'cosmic',
    emoji: "💿"
  },
  {
    date: "4.6 Billion BCE",
    year: -4600000000,
    event: "Solar Nebula & Sun's Birth",
    details: "The solar nebula collapses under gravity. The central mass ignites nuclear fusion — our Sun (a 3rd-generation Population I star) is born. It comprises 99.86% of the solar system's mass.",
    category: 'cosmic',
    emoji: "☀️"
  },
  {
    date: "4.6–4.5 Billion BCE",
    year: -4550000000,
    event: "Planetesimal Formation",
    details: "Dust grains in the solar disk collide and clump, forming kilometer-sized planetesimals. These grow through accretion into protoplanets.",
    category: 'geological',
    emoji: "☄️"
  },
  {
    date: "4.5 Billion BCE",
    year: -4500000000,
    event: "Earth Forms (Accretion)",
    details: "Earth accumulates through repeated collisions of planetesimals over ~50 million years. Early Earth is a molten hellscape, bombarded continuously. No atmosphere; no oceans.",
    category: 'geological',
    emoji: "🌍"
  },
  {
    date: "4.5 Billion BCE",
    year: -4499000000,
    event: "Moon-Forming Impact (Theia Impact)",
    details: "A Mars-sized protoplanet called Theia collides with Earth at a glancing angle. Ejecta from both bodies orbit Earth and coalesce within ~1,000 years to form the Moon. The Moon is 60x closer than today.",
    category: 'geological',
    emoji: "🌙"
  },
  {
    date: "4.4 Billion BCE",
    year: -4400000000,
    event: "Earth's Crust Solidifies (Hadean Eon)",
    details: "Earth's molten surface begins to cool. First solid rocks — zircon crystals — form. The oldest known mineral grains on Earth date to ~4.4 billion years (Jack Hills, Australia).",
    category: 'geological',
    emoji: "💎"
  },
  {
    date: "4.1–3.8 Billion BCE",
    year: -3950000000,
    event: "Late Heavy Bombardment (LHB)",
    details: "A cataclysmic period of intense asteroid and comet impacts hits Earth, the Moon, and inner planets. The lunar craters visible today date largely from this era.",
    category: 'geological',
    emoji: "💣"
  },
  {
    date: "4.0 Billion BCE",
    year: -4000000000,
    event: "Water Arrives on Earth",
    details: "Water is delivered by carbonaceous chondrite asteroids and comets from the outer solar system. Additionally, water was trapped in Earth's mantle during formation and outgassed over time.",
    category: 'geological',
    emoji: "💧"
  },
  {
    date: "3.8 Billion BCE",
    year: -3800000000,
    event: "First Oceans Form",
    details: "Earth's surface cools below 100°C. Water vapor condenses. A global ocean covers much of the planet. Hydrothermal vents on the ocean floor may have hosted early chemical reactions.",
    category: 'geological',
    emoji: "🌊"
  },
  {
    date: "3.8 Billion BCE",
    year: -3799000000,
    event: "First Life: Abiogenesis",
    details: "The first self-replicating molecules (likely RNA) emerge in hydrothermal vents or warm shallow ponds (Miller-Urey conditions). RNA World hypothesis: RNA acts as both information carrier and enzyme.",
    category: 'biological',
    emoji: "🧬"
  },
  {
    date: "3.5 Billion BCE",
    year: -3500000000,
    event: "First Prokaryotes (Archaea & Bacteria)",
    details: "Single-celled organisms without nuclei. Stromatolites (layered microbial mats) appear in shallow seas — fossil evidence found in Western Australia (Pilbara Craton).",
    category: 'biological',
    emoji: "🧫"
  },
  {
    date: "3.0 Billion BCE",
    year: -3000000000,
    event: "Photosynthesis Begins (Anoxygenic)",
    details: "Early cyanobacteria-like organisms harvest sunlight. Initially anoxygenic (no oxygen released). Life spreads in shallow marine environments.",
    category: 'biological',
    emoji: "☀️"
  },
  {
    date: "2.4 Billion BCE",
    year: -2400000000,
    event: "Great Oxidation Event (GOE)",
    details: "Cyanobacteria develop oxygenic photosynthesis, releasing massive quantities of free oxygen. Oxygen is toxic to most existing life — the first mass extinction.",
    category: 'biological',
    emoji: "🍃"
  },
  {
    date: "2.1 Billion BCE",
    year: -2100000000,
    event: "First Eukaryotes",
    details: "Cells with nuclei emerge via endosymbiosis: a large cell engulfs smaller bacteria, which become mitochondria and chloroplasts. Sexual reproduction may begin.",
    category: 'biological',
    emoji: "🔬"
  },
  {
    date: "1.8 Billion BCE",
    year: -1800000000,
    event: "Nuna/Columbia Supercontinent",
    details: "First known supercontinent assembles, uniting nearly all of Earth's landmasses. Lasts until ~1.5 billion BCE.",
    category: 'geological',
    emoji: "🗺️"
  },
  {
    date: "1.0 Billion BCE",
    year: -1000000000,
    event: "Rodinia Supercontinent",
    details: "Second major supercontinent. Rifts and breaks up ~750 million BCE, triggering 'Snowball Earth' glaciations.",
    category: 'geological',
    emoji: "🧩"
  },
  {
    date: "750–635 Million BCE",
    year: -692000000,
    event: "Snowball Earth",
    details: "Global glaciation events (Sturtian and Marinoan glaciations). Ice possibly reaches the equator. CO2 buildup from volcanism eventually triggers rapid deglaciation.",
    category: 'geological',
    emoji: "❄️"
  },
  {
    date: "600 Million BCE",
    year: -600000000,
    event: "Ediacaran Biota",
    details: "First complex multicellular organisms appear: soft-bodied creatures like Dickinsonia, Charnia. No hard shells or skeletons yet. Life diversifies in the oceans.",
    category: 'biological',
    emoji: "🦠"
  },
  {
    date: "541 Million BCE",
    year: -541000000,
    event: "Cambrian Explosion",
    details: "In just ~20 million years, nearly all major animal body plans (phyla) appear in the fossil record. Trilobites, mollusks, echinoderms, early chordates emerge.",
    category: 'biological',
    emoji: "🐚"
  },
  {
    date: "485 Million BCE",
    year: -485000000,
    event: "Ordovician Period",
    details: "Marine life diversifies enormously. Graptolites, conodonts, and early fish appear. Ends with Ordovician-Silurian mass extinction (~444 Mya).",
    category: 'biological',
    emoji: "🐟"
  },
  {
    date: "443 Million BCE",
    year: -443000000,
    event: "Silurian Period & First Vascular Plants",
    details: "Sea levels rise. First vascular plants colonize land (Cooksonia). First jawed fish (placoderms) appear. Coral reefs diversify.",
    category: 'biological',
    emoji: "🌿"
  },
  {
    date: "419 Million BCE",
    year: -419000000,
    event: "Devonian Period – Age of Fishes",
    details: "Fish diversify explosively. First amphibians emerge from sea to land (~375 Mya — Tiktaalik). First forests of ferns and seed ferns.",
    category: 'biological',
    emoji: "🐸"
  },
  {
    date: "359 Million BCE",
    year: -359000000,
    event: "Carboniferous Period",
    details: "Vast coal swamp forests cover equatorial landmasses. First reptiles. Atmospheric oxygen reaches 35% (enabling giant insects).",
    category: 'biological',
    emoji: "🌳"
  },
  {
    date: "252 Million BCE",
    year: -252000000,
    event: "Permian-Triassic Mass Extinction (The Great Dying)",
    details: "Earth's worst mass extinction. ~96% of marine species and 70% of terrestrial vertebrates wiped out. Cause: massive Siberian Traps volcanic eruptions.",
    category: 'geological',
    emoji: "🌋"
  },
  {
    date: "235 Million BCE",
    year: -235000000,
    event: "Rise of Dinosaurs",
    details: "Life slowly recovers. First dinosaurs (~235 Mya). First mammals (~225 Mya, tiny shrew-like creatures). First pterosaurs.",
    category: 'biological',
    emoji: "🦖"
  },
  {
    date: "201 Million BCE",
    year: -201000000,
    event: "Jurassic Period – Age of Giants",
    details: "Dinosaurs dominate all continents. Sauropods (Brachiosaurus, Diplodocus) reach 30+ meters. Theropods (Allosaurus) apex predators.",
    category: 'biological',
    emoji: "🦕"
  },
  {
    date: "145 Million BCE",
    year: -145000000,
    event: "Cretaceous Period",
    details: "Dinosaurs at peak diversity. Flowering plants (angiosperms) appear and rapidly diversify. Tyrannosaurus rex (~68 Mya). First social insects.",
    category: 'biological',
    emoji: "🌸"
  },
  {
    date: "66 Million BCE",
    year: -66000000,
    event: "Chicxulub Impact & K-Pg Mass Extinction",
    details: "A 10-12 km asteroid strikes Yucatan Peninsula. Global firestorms, acid rain, 'impact winter' blocks sunlight. ~75% of species extinct.",
    category: 'geological',
    emoji: "☄️"
  },
  {
    date: "56 Million BCE",
    year: -56000000,
    event: "Paleocene-Eocene Thermal Maximum (PETM)",
    details: "Global temperatures spike 5–8°C over ~20,000 years due to massive carbon release. Oceans acidify. Fauna migrate toward poles.",
    category: 'geological',
    emoji: "🌡️"
  },
  {
    date: "34 Million BCE",
    year: -34000000,
    event: "Oligocene – Grasslands Spread",
    details: "Global cooling. Antarctica fully glaciates. Grasslands expand as forests shrink. Horses grow and diversify. Old World monkeys appear.",
    category: 'biological',
    emoji: "🌾"
  },
  {
    date: "7–4 Million BCE",
    year: -5500000,
    event: "Hominin-Chimp Split & Early Hominins",
    details: "Sahelanthropus tchadensis (~7 Mya) — earliest possible hominin. DNA divergence of humans and chimpanzees dates to 4–7 Mya.",
    category: 'biological',
    emoji: "🐒"
  },
  {
    date: "4–2 Million BCE",
    year: -3000000,
    event: "Australopithecus",
    details: "Genus Australopithecus flourishes in Africa. Bipedal walkers with small brains (~450 cc). Notable: Lucy (A. afarensis, 3.2 Mya).",
    category: 'biological',
    emoji: "🚶"
  },
  {
    date: "3.3 Million BCE",
    year: -3300000,
    event: "Oldest Stone Tools (Lomekwian)",
    details: "Lomekwian stone tools found in Kenya — oldest known, predating genus Homo. Attributed possibly to Kenyanthropus or late Australopithecus.",
    category: 'prehistoric',
    emoji: "🪨"
  },
  {
    date: "2.8 Million BCE",
    year: -2800000,
    event: "Homo Habilis – First of Genus Homo",
    details: "First member of genus Homo appears in East Africa. Brain ~600 cc. Makes Oldowan tools (sharp-edged flakes). Scavenges meat.",
    category: 'prehistoric',
    emoji: "🦴"
  },
  {
    date: "1.9 Million BCE",
    year: -1900000,
    event: "Homo Erectus – Out of Africa (First Wave)",
    details: "Homo erectus emerges in Africa. Taller body, larger brain (~900 cc). Spreads to Asia (Java Man ~1.8 Mya). Masters fire by ~1 Mya.",
    category: 'prehistoric',
    emoji: "🔥"
  },
  {
    date: "800,000 BCE",
    year: -800000,
    event: "Fire Controlled by Hominins",
    details: "Evidence of controlled fire use at Wonderwerk Cave, South Africa. Fire enables cooking, warmth, protection. Brain size begins accelerating.",
    category: 'prehistoric',
    emoji: "🍳"
  },
  {
    date: "400,000 BCE",
    year: -400000,
    event: "Neanderthals Emerge (Europe & West Asia)",
    details: "Homo neanderthalensis diverges in Europe/Western Asia. Robust physique adapted to cold climates. Buries dead, makes jewelry.",
    category: 'prehistoric',
    emoji: "❄️"
  },
  {
    date: "315,000 BCE",
    year: -315000,
    event: "Homo Sapiens Emerge",
    details: "Oldest known Homo sapiens fossils found at Jebel Irhoud, Morocco. Africa is the cradle of our species. Brain ~1350 cc.",
    category: 'prehistoric',
    emoji: "🧍"
  },
  {
    date: "70,000 BCE",
    year: -70000,
    event: "Toba Supervolcanic Eruption",
    details: "Mount Toba (Sumatra) erupts — largest volcanic eruption in past 2 million years. Possibly causes global 'volcanic winter.'",
    category: 'geological',
    emoji: "🌋"
  },
  {
    date: "50,000 BCE",
    year: -50000,
    event: "Upper Paleolithic Revolution",
    details: "Explosion of art, complex tools, symbolic behavior. Cave paintings, figurines, beaded jewelry. Modern cognition fully evident.",
    category: 'prehistoric',
    emoji: "🎨"
  },
  {
    date: "35,000 BCE",
    year: -35000,
    event: "Chauvet Cave Paintings (France)",
    details: "Some of the world's oldest and finest cave art. Lions, rhinos, bears, horses painted with sophisticated shading and perspective.",
    category: 'prehistoric',
    emoji: "🖌️"
  },
  {
    date: "20,000 BCE",
    year: -20000,
    event: "Humans Cross Beringia to Americas",
    details: "Humans migrate from Siberia across the Bering Land Bridge into North America. By ~14,000 BCE they reach South America.",
    category: 'prehistoric',
    emoji: "🏹"
  },
  {
    date: "12,000 BCE",
    year: -12000,
    event: "Göbekli Tepe (Turkey)",
    details: "World's oldest known monumental religious structure, built by hunter-gatherers. T-shaped limestone pillars up to 5.5 meters tall.",
    category: 'prehistoric',
    emoji: "🏛️"
  },
  {
    date: "10,000 BCE",
    year: -10000,
    event: "Neolithic Agricultural Revolution",
    details: "Wheat, barley, lentils domesticated in the Fertile Crescent. Goats and sheep domesticated. Humans transition from nomadic to settled lifestyles.",
    category: 'prehistoric',
    emoji: "🌾"
  },
  {
    date: "8,000 BCE",
    year: -8000,
    event: "Rice Domestication (China)",
    details: "Rice cultivated in the Yangtze River valley, China. Becomes the caloric foundation of East and Southeast Asian civilizations.",
    category: 'prehistoric',
    emoji: "🍚"
  },
  {
    date: "4,500 BCE",
    year: -4500,
    event: "Wheel Invented (Mesopotamia)",
    details: "Earliest evidence of wheel use in Mesopotamia and the Eurasian steppe — first as pottery wheels, then as transportation.",
    category: 'prehistoric',
    emoji: "🎡"
  },
  {
    date: "3,300 BCE",
    year: -3300,
    event: "Bronze Age Begins (Middle East)",
    details: "Copper alloyed with tin to produce bronze — harder and more durable. Enables superior weapons, tools, and armor.",
    category: 'ancient',
    emoji: "⚔️"
  },
  {
    date: "3,200 BCE",
    year: -3200,
    event: "Writing Invented – Cuneiform (Sumer)",
    details: "Cuneiform script develops from clay token accounting at Uruk. Humanity's memory begins.",
    category: 'ancient',
    emoji: "📜"
  },
  {
    date: "3,100 BCE",
    year: -3100,
    event: "Unification of Egypt",
    details: "Pharaoh Narmer (Menes) unifies Upper and Lower Egypt. First dynasty established. Memphis becomes capital.",
    category: 'ancient',
    emoji: "👑"
  },
  {
    date: "2,600 BCE",
    year: -2600,
    event: "Great Pyramid of Giza Built",
    details: "Pharaoh Khufu commissions the Great Pyramid. Height: 146.6 m (tallest structure on Earth for 3,800 years).",
    category: 'ancient',
    emoji: "📐"
  },
  {
    date: "2,350 BCE",
    year: -2350,
    event: "Akkadian Empire – World's First Empire",
    details: "Sargon of Akkad conquers all Sumerian city-states and creates the world's first empire, from the Persian Gulf to the Mediterranean.",
    category: 'ancient',
    emoji: "🛡️"
  },
  {
    date: "1,800 BCE",
    year: -1800,
    event: "Code of Hammurabi (Babylon)",
    details: "Babylonian King Hammurabi issues ~282 laws. Establishes principle of proportional justice ('an eye for an eye').",
    category: 'ancient',
    emoji: "⚖️"
  },
  {
    date: "1,274 BCE",
    year: -1274,
    event: "Battle of Kadesh",
    details: "Ramesses II of Egypt vs. Muwatalli II of the Hittites — the largest chariot battle in history. Results in the world's first recorded peace treaty.",
    category: 'ancient',
    emoji: "🐎"
  },
  {
    date: "1,200 BCE",
    year: -1200,
    event: "Bronze Age Collapse",
    details: "Nearly every major Bronze Age civilization collapses: Mycenaean Greece, Hittite Empire, Ugarit. Writing lost in Greece for ~400 years.",
    category: 'ancient',
    emoji: "🏚️"
  },
  {
    date: "776 BCE",
    year: -776,
    event: "First Olympic Games (Greece)",
    details: "First recorded Olympic Games held at Olympia in honor of Zeus. Only event: the stadion foot race.",
    category: 'ancient',
    emoji: "🏃"
  },
  {
    date: "753 BCE",
    year: -753,
    event: "Founding of Rome",
    details: "According to tradition, Romulus founds Rome on the Palatine Hill. Rome begins as a small Latin city-state.",
    category: 'ancient',
    emoji: "🏛️"
  },
  {
    date: "563 BCE",
    year: -563,
    event: "Siddhartha Gautama – The Buddha Born",
    details: "Born as a prince in Lumbini. Achieves awakening under the Bodhi Tree. Teaches the Four Noble Truths and Eightfold Path.",
    category: 'ancient',
    emoji: "🧘"
  },
  {
    date: "550 BCE",
    year: -550,
    event: "Achaemenid Persian Empire Founded",
    details: "Cyrus the Great founds the Achaemenid Persian Empire. At its height under Darius I, it spans 5.5 million km².",
    category: 'ancient',
    emoji: "🦁"
  },
  {
    date: "509 BCE",
    year: -509,
    event: "Roman Republic Founded",
    details: "Romans expel their last king and establish a republic governed by two annually elected consuls and a Senate.",
    category: 'ancient',
    emoji: "🏛️"
  },
  {
    date: "490 BCE",
    year: -490,
    event: "Battle of Marathon",
    details: "Athenians defeat the Persian invasion force of Darius I at Marathon. Inspires the modern marathon race.",
    category: 'ancient',
    emoji: "👟"
  },
  {
    date: "470 BCE",
    year: -470,
    event: "Socrates Born (Athens)",
    details: "Athenian philosopher Socrates develops the Socratic method — questioning assumptions to reach truth.",
    category: 'ancient',
    emoji: "🤔"
  },
  {
    date: "356 BCE",
    year: -356,
    event: "Alexander the Great Born (Macedon)",
    details: "Conquers from Greece to Egypt to Persia to India — the largest empire in Western history to that point.",
    category: 'ancient',
    emoji: "⚔️"
  },
  {
    date: "221 BCE",
    year: -221,
    event: "Qin Shihuangdi Unifies China",
    details: "Ying Zheng declares himself Qin Shi Huang ('First Sovereign Emperor'). Standardizes writing, currency, and weights. Begins Great Wall.",
    category: 'ancient',
    emoji: "🧱"
  },
  {
    date: "44 BCE",
    year: -44,
    event: "Assassination of Julius Caesar",
    details: "Caesar is stabbed 23 times by 60 senators. The assassination plunges Rome into renewed civil war.",
    category: 'ancient',
    emoji: "🗡️"
  },
  {
    date: "27 BCE",
    year: -27,
    event: "Roman Empire Founded – Augustus Caesar",
    details: "Octavian is declared 'Augustus'. The Pax Romana (Roman Peace) begins — ~200 years of relative stability.",
    category: 'ancient',
    emoji: "🦅"
  },
  {
    date: "4 BCE",
    year: -4,
    event: "Birth of Jesus of Nazareth",
    details: "Jesus born in Judea. His teachings form the foundation of Christianity, which will become the world's largest religion.",
    category: 'ancient',
    emoji: "✝️"
  },
  {
    date: "79 CE",
    year: 79,
    event: "Eruption of Vesuvius – Pompeii Destroyed",
    details: "Mount Vesuvius erupts, burying Pompeii, Herculaneum, and Stabiae under ash and pyroclastic flows.",
    category: 'ancient',
    emoji: "🌋"
  },
  {
    date: "105 CE",
    year: 105,
    event: "Paper Invented (China)",
    details: "Cai Lun standardizes papermaking from bark, hemp, and rags. Transforms record-keeping and communication.",
    category: 'ancient',
    emoji: "📄"
  },
  {
    date: "330 CE",
    year: 330,
    event: "Constantinople Founded",
    details: "Constantine moves the Roman capital to Byzantium, renamed Constantinople. Center of the Eastern Roman Empire for 1,123 years.",
    category: 'ancient',
    emoji: "🏰"
  },
  {
    date: "476 CE",
    year: 476,
    event: "Fall of Western Roman Empire",
    details: "Final Western Emperor Romulus Augustulus deposed by Odoacer. Traditional date for the end of antiquity.",
    category: 'ancient',
    emoji: "🏚️"
  },
  {
    date: "570 CE",
    year: 570,
    event: "Muhammad Born (Mecca, Arabia)",
    details: "Prophet and founder of Islam. Receives first revelation of the Quran at age 40. Foundation of the Islamic state.",
    category: 'medieval',
    emoji: "🌙"
  },
  {
    date: "622 CE",
    year: 622,
    event: "Hijra – Founding of the Islamic Community",
    details: "Muhammad's migration from Mecca to Medina marks Year 1 of the Islamic calendar.",
    category: 'medieval',
    emoji: "🕌"
  },
  {
    date: "800 CE",
    year: 800,
    event: "Charlemagne Crowned Holy Roman Emperor",
    details: "Pope Leo III crowns Frankish King Charlemagne on Christmas Day. Reconstituting the Western Empire.",
    category: 'medieval',
    emoji: "👑"
  },
  {
    date: "1000 CE",
    year: 1000,
    event: "Leif Eriksson Reaches North America",
    details: "Norse explorer lands in 'Vinland' (likely Newfoundland) ~500 years before Columbus.",
    category: 'medieval',
    emoji: "🛶"
  },
  {
    date: "1066 CE",
    year: 1066,
    event: "Norman Conquest of England",
    details: "William the Conqueror defeats King Harold II at the Battle of Hastings. Transforms English language and culture.",
    category: 'medieval',
    emoji: "🏰"
  },
  {
    date: "1096–1291 CE",
    year: 1193,
    event: "The Crusades",
    details: "Nine major Crusades launched by European Christians to recapture the Holy Land from Muslim control.",
    category: 'medieval',
    emoji: "🛡️"
  },
  {
    date: "1206 CE",
    year: 1206,
    event: "Mongol Empire Founded – Genghis Khan",
    details: "Temujin unifies Mongol tribes. Creates the world's greatest contiguous land empire (24 million km² at peak).",
    category: 'medieval',
    emoji: "🏹"
  },
  {
    date: "1215 CE",
    year: 1215,
    event: "Magna Carta",
    details: "English barons force King John to sign the Magna Carta. First formal limitation of royal power.",
    category: 'medieval',
    emoji: "📜"
  },
  {
    date: "1347 CE",
    year: 1347,
    event: "Black Death – Bubonic Plague Pandemic",
    details: "Yersinia pestis kills 30–60% of Europe's population. Transforms European society and religious authority.",
    category: 'medieval',
    emoji: "💀"
  },
  {
    date: "1440 CE",
    year: 1440,
    event: "Gutenberg's Printing Press",
    details: "Johannes Gutenberg develops movable metal type. Information spreads exponentially.",
    category: 'early-modern',
    emoji: "🖨️"
  },
  {
    date: "1453 CE",
    year: 1453,
    event: "Fall of Constantinople",
    details: "Ottoman Sultan Mehmed II conquers the city. The Eastern Roman Empire ends. Greek scholars flee to Italy.",
    category: 'early-modern',
    emoji: "💣"
  },
  {
    date: "1492 CE",
    year: 1492,
    event: "Columbus Reaches the Americas",
    details: "Voyages initiate sustained contact between the Old and New Worlds — the 'Columbian Exchange.'",
    category: 'early-modern',
    emoji: "⛵"
  },
  {
    date: "1517 CE",
    year: 1517,
    event: "Martin Luther & Protestant Reformation",
    details: "Martin Luther posts his 95 Theses in Wittenberg. Europe splits: Catholic vs. Protestant denominations.",
    category: 'early-modern',
    emoji: "⛪"
  },
  {
    date: "1543 CE",
    year: 1543,
    event: "Copernican Revolution – Heliocentric Model",
    details: "Nicolaus Copernicus proposes a sun-centered solar system. Contradicts 1,400 years of Ptolemaic geocentrism.",
    category: 'early-modern',
    emoji: "☀️"
  },
  {
    date: "1609 CE",
    year: 1609,
    event: "Galileo's Telescope & Jupiter's Moons",
    details: "Galileo builds an improved telescope and discovers Jupiter's four largest moons. Confirms heliocentrism.",
    category: 'early-modern',
    emoji: "🔭"
  },
  {
    date: "1666 CE",
    year: 1666,
    event: "Isaac Newton – Gravity & Laws of Motion",
    details: "Newton's 'Year of Wonders': develops calculus, theory of universal gravitation, and laws of motion.",
    category: 'early-modern',
    emoji: "🍎"
  },
  {
    date: "1760 CE",
    year: 1760,
    event: "Industrial Revolution Begins",
    details: "Steam power, textile machinery, and iron production transform Britain first. Population shifts from rural to urban.",
    category: 'early-modern',
    emoji: "⚙️"
  },
  {
    date: "1776 CE",
    year: 1776,
    event: "American Declaration of Independence",
    details: "The 13 American colonies declare independence from Britain. Echoes Enlightenment ideals.",
    category: 'early-modern',
    emoji: "🇺🇸"
  },
  {
    date: "1789 CE",
    year: 1789,
    event: "French Revolution",
    details: "Storming of the Bastille. Declaration of the Rights of Man and Citizen. Spreads ideas of liberty and equality.",
    category: 'early-modern',
    emoji: "🇫🇷"
  },
  {
    date: "1859 CE",
    year: 1859,
    event: "On the Origin of Species – Darwin",
    details: "Charles Darwin publishes his theory of evolution by natural selection. Explains diversity of life.",
    category: 'modern',
    emoji: "🧬"
  },
  {
    date: "1876 CE",
    year: 1876,
    event: "Telephone Invented – Alexander Graham Bell",
    details: "Patents the telephone. First call: 'Mr. Watson—Come here—I want to see you.' Transforms communication.",
    category: 'modern',
    emoji: "📞"
  },
  {
    date: "1903 CE",
    year: 1903,
    event: "Wright Brothers' First Flight",
    details: "Orville and Wilbur Wright achieve the first powered, controlled flight at Kitty Hawk.",
    category: 'modern',
    emoji: "✈️"
  },
  {
    date: "1905 CE",
    year: 1905,
    event: "Einstein's Annus Mirabilis",
    details: "Albert Einstein publishes four landmark papers including E=mc². Transforms physics.",
    category: 'modern',
    emoji: "🧠"
  },
  {
    date: "1914–1918 CE",
    year: 1916,
    event: "World War I (The Great War)",
    details: "Assassination of Archduke Franz Ferdinand triggers a cascade of alliances. Trench warfare, new weapons.",
    category: 'modern',
    emoji: "🪖"
  },
  {
    date: "1939–1945 CE",
    year: 1942,
    event: "World War II",
    details: "The deadliest conflict in human history. Total dead: ~70–85 million. Ends with atomic bombs and founding of UN.",
    category: 'modern',
    emoji: "🌍"
  },
  {
    date: "1945 CE",
    year: 1945,
    event: "United Nations Founded",
    details: "UN Charter signed in San Francisco. Replaces the failed League of Nations. 51 original member states.",
    category: 'contemporary',
    emoji: "🇺🇳"
  },
  {
    date: "1947 CE",
    year: 1947,
    event: "Cold War Begins / Truman Doctrine",
    details: "President Truman announces containment of Soviet communism. Defines global politics for 44 years.",
    category: 'contemporary',
    emoji: "🧊"
  },
  {
    date: "1953 CE",
    year: 1953,
    event: "DNA Double Helix Discovered",
    details: "James Watson and Francis Crick propose the double helix structure of DNA. Foundation of molecular biology.",
    category: 'contemporary',
    emoji: "🧬"
  },
  {
    date: "1957 CE",
    year: 1957,
    event: "Space Age Begins – Sputnik",
    details: "USSR launches Sputnik 1 — the first artificial satellite. Shocks the US and triggers the Space Race.",
    category: 'contemporary',
    emoji: "🛰️"
  },
  {
    date: "1969 CE",
    year: 1969,
    event: "Apollo 11 – Moon Landing",
    details: "Neil Armstrong and Buzz Aldrin land on the Moon. 'That's one small step for [a] man, one giant leap for mankind.'",
    category: 'contemporary',
    emoji: "🚀"
  },
  {
    date: "1971 CE",
    year: 1971,
    event: "Email Invented (Tomlinson)",
    details: "Ray Tomlinson sends the first network email and chooses the @ symbol for addressing.",
    category: 'contemporary',
    emoji: "📧"
  },
  {
    date: "1989 CE",
    year: 1989,
    event: "Fall of the Berlin Wall",
    details: "Symbol of Cold War division falls. Communist governments collapse across Eastern Europe.",
    category: 'contemporary',
    emoji: "🧱"
  },
  {
    date: "1991 CE",
    year: 1991,
    event: "World Wide Web Invented",
    details: "Tim Berners-Lee at CERN launches the first public web page. Transforms communication technology.",
    category: 'contemporary',
    emoji: "🌐"
  },
  {
    date: "1994 CE",
    year: 1994,
    event: "Amazon Founded",
    details: "Jeff Bezos founds Amazon as an online bookstore, eventually becoming the world's largest online retailer.",
    category: 'contemporary',
    emoji: "📦"
  },
  {
    date: "1998 CE",
    year: 1998,
    event: "Google Founded",
    details: "Larry Page and Sergey Brin found Google, revolutionizing how information is accessed on the internet.",
    category: 'contemporary',
    emoji: "🔍"
  },
  {
    date: "2001 CE",
    year: 2001,
    event: "9/11 – September 11 Attacks",
    details: "Al-Qaeda terrorists hijack four airplanes. Triggers the US War on Terror and invasions of Afghanistan and Iraq.",
    category: 'contemporary',
    emoji: "🏙️"
  },
  {
    date: "2004 CE",
    year: 2004,
    event: "Facebook Launched",
    details: "Mark Zuckerberg and co-founders launch TheFacebook at Harvard, starting the social media revolution.",
    category: 'contemporary',
    emoji: "👥"
  },
  {
    date: "2004 CE",
    year: 2004,
    event: "The developer of this website was born!",
    details: "A significant moment in history: the creator of this Chronicle of Everything was born into the world.",
    category: 'contemporary',
    emoji: "👶"
  },
  {
    date: "2005 CE",
    year: 2005,
    event: "YouTube Launched",
    details: "The first video 'Me at the zoo' is uploaded, beginning the era of user-generated video content.",
    category: 'contemporary',
    emoji: "📺"
  },
  {
    date: "2007 CE",
    year: 2007,
    event: "iPhone Launched – Smartphone Era",
    details: "Steve Jobs introduces the iPhone. Transforms computing, communication, and daily life globally.",
    category: 'contemporary',
    emoji: "📱"
  },
  {
    date: "2008 CE",
    year: 2008,
    event: "Bitcoin Whitepaper Released",
    details: "Satoshi Nakamoto publishes the Bitcoin whitepaper, introducing the first decentralized cryptocurrency.",
    category: 'contemporary',
    emoji: "₿"
  },
  {
    date: "2012 CE",
    year: 2012,
    event: "Higgs Boson Discovered (CERN)",
    details: "Scientists confirm the discovery of the Higgs boson, the particle that gives other particles mass.",
    category: 'contemporary',
    emoji: "⚛️"
  },
  {
    date: "2015 CE",
    year: 2015,
    event: "Gravitational Waves Detected",
    details: "LIGO detects ripples in spacetime for the first time, confirming a major prediction of Einstein's general relativity.",
    category: 'contemporary',
    emoji: "〰️"
  },
  {
    date: "2019–2023 CE",
    year: 2021,
    event: "COVID-19 Pandemic",
    details: "A novel coronavirus (SARS-CoV-2) declared a global pandemic. Accelerates digital adoption by years.",
    category: 'contemporary',
    emoji: "😷"
  },
  {
    date: "2022 CE",
    year: 2022,
    event: "ChatGPT & AI Revolution",
    details: "OpenAI releases ChatGPT, triggering a global race in large language models and generative AI.",
    category: 'contemporary',
    emoji: "🤖"
  },
  {
    date: "2023 CE",
    year: 2023,
    event: "James Webb Space Telescope First Images",
    details: "The most powerful space telescope ever built reveals the deepest and sharpest infrared images of the distant universe.",
    category: 'contemporary',
    emoji: "🔭"
  },
  {
    date: "2025 CE",
    year: 2025,
    event: "Ongoing: Climate Change & Geopolitics",
    details: "Global average temperature reaches 1.5°C above pre-industrial levels. Space exploration: Artemis program.",
    category: 'contemporary',
    emoji: "🌡️"
  }
];

export const ERAS = [
  { id: 'cosmic-1', name: 'Cosmic Era', color: 'bg-slate-950', textColor: 'text-indigo-300', startYear: -13800000000 },
  { id: 'cosmic-2', name: 'Cosmic Era', color: 'bg-indigo-950', textColor: 'text-indigo-200', startYear: -10000000000 },
  { id: 'geological-1', name: 'Geological Era', color: 'bg-stone-950', textColor: 'text-orange-300', startYear: -4500000000 },
  { id: 'geological-2', name: 'Geological Era', color: 'bg-orange-950', textColor: 'text-orange-200', startYear: -2500000000 },
  { id: 'biological-1', name: 'Biological Era', color: 'bg-emerald-950', textColor: 'text-green-300', startYear: -3800000000 },
  { id: 'biological-2', name: 'Biological Era', color: 'bg-green-950', textColor: 'text-green-200', startYear: -1000000000 },
  { id: 'prehistoric-1', name: 'Prehistoric Era', color: 'bg-amber-950', textColor: 'text-amber-200', startYear: -315000 },
  { id: 'prehistoric-2', name: 'Prehistoric Era', color: 'bg-yellow-950', textColor: 'text-yellow-200', startYear: -50000 },
  { id: 'ancient-1', name: 'Ancient Era', color: 'bg-orange-950', textColor: 'text-orange-100', startYear: -3200 },
  { id: 'ancient-2', name: 'Ancient Era', color: 'bg-red-950', textColor: 'text-red-100', startYear: -500 },
  { id: 'medieval-1', name: 'Medieval Era', color: 'bg-rose-950', textColor: 'text-rose-200', startYear: 500 },
  { id: 'medieval-2', name: 'Medieval Era', color: 'bg-purple-950', textColor: 'text-purple-200', startYear: 1000 },
  { id: 'early-modern-1', name: 'Early Modern', color: 'bg-blue-950', textColor: 'text-blue-200', startYear: 1450 },
  { id: 'early-modern-2', name: 'Early Modern', color: 'bg-cyan-950', textColor: 'text-cyan-200', startYear: 1700 },
  { id: 'modern-1', name: 'Modern Era', color: 'bg-zinc-950', textColor: 'text-zinc-200', startYear: 1800 },
  { id: 'modern-2', name: 'Modern Era', color: 'bg-slate-900', textColor: 'text-slate-200', startYear: 1900 },
  { id: 'contemporary-1', name: 'Contemporary', color: 'bg-neutral-950', textColor: 'text-neutral-100', startYear: 1950 },
  { id: 'contemporary-2', name: 'Contemporary', color: 'bg-black', textColor: 'text-white', startYear: 2000 }
];
