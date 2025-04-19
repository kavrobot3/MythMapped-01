// MythMapped Full Quiz Data (100 Questions)

const quizDatabase = {
  easy: [
    { q: "Who is the spider trickster god in West African folklore?", options: ["Anubis", "Anansi", "Shango", "Nzambi"], answer: "Anansi" },
    { q: "Which Egyptian curse is said to protect royal tombs?", options: ["Curse of Osiris", "Curse of the Nile", "Curse of the Pharaohs", "Curse of the Pyramids"], answer: "Curse of the Pharaohs" },
    { q: "What bird in Zulu mythology is linked to lightning and treasure?", options: ["Phoenix", "Firebird", "Lightning Bird", "Storm Owl"], answer: "Lightning Bird" },
    { q: "Who is the rabbit said to live on the moon in East Asian myth?", options: ["Celestial Hare", "Moon Rabbit", "Jade Bunny", "Lunar Fox"], answer: "Moon Rabbit" },
    { q: "What demon king with ten heads appears in the Ramayana?", options: ["Kumbhakarna", "Hiranyakashipu", "Mahishasura", "Ravana"], answer: "Ravana" },
    { q: "Who are the serpent beings guarding temples in Southeast Asia?", options: ["Rakshasas", "Nagas", "Yakshas", "Asuras"], answer: "Nagas" },
    { q: "What mythical beings are made from smokeless fire in Arabian lore?", options: ["Ifrit", "Djinn", "Ghouls", "Seraphim"], answer: "Djinn" },
    { q: "What Norse event signals the end of the gods and the world?", options: ["Midgardfall", "Niflheim Rise", "Ragnarök", "Fimbulwinter"], answer: "Ragnarök" },
    { q: "What myth involves opening a box that unleashed all evils into the world?", options: ["Pandora’s Box", "Persephone’s Garden", "Athena’s Chest", "Medusa’s Mirror"], answer: "Pandora’s Box" },
    { q: "Which spirit from Irish mythology wails before someone dies?", options: ["Kelpie", "Sidhe", "Banshee", "Dullahan"], answer: "Banshee" },
    { q: "Who is the witch of Slavic folklore who lives in a hut on chicken legs?", options: ["Morana", "Baba Yaga", "Lada", "Domovoi"], answer: "Baba Yaga" },
    { q: "What animal is the Native American trickster Coyote based on?", options: ["Fox", "Wolf", "Rabbit", "Coyote"], answer: "Coyote" },
    { q: "Which Canadian myth warns about cannibalism and greed?", options: ["Thunderbird", "Wendigo", "Sasquatch", "Skinwalker"], answer: "Wendigo" },
    { q: "Who is the Incan creator god?", options: ["Pachacamac", "Viracocha", "Inti", "Supay"], answer: "Viracocha" },
    { q: "What Amazon river creature transforms into a man to seduce women?", options: ["Yacuruna", "Mapinguari", "Pink River Dolphin", "Caipora"], answer: "Pink River Dolphin" },
    { q: "Which Aboriginal being shaped the land during Dreamtime?", options: ["Wandjina", "Rainbow Serpent", "Tiddalik", "Baiame"], answer: "Rainbow Serpent" },
    { q: "What Polynesian demigod pulled up islands from the ocean floor?", options: ["Tiki", "Tāwhaki", "Māui", "Rongo"], answer: "Māui" },
    { q: "What prince rescued Sita from Ravana in the Ramayana?", options: ["Karna", "Rama", "Arjuna", "Krishna"], answer: "Rama" },
    { q: "Who delivered the Bhagavad Gita to Arjuna?", options: ["Vishnu", "Shiva", "Krishna", "Indra"], answer: "Krishna" },
    { q: "What South Indian folk hero is known for his wit in King Krishnadevaraya’s court?", options: ["Birbal", "Chanakya", "Tenali Raman", "Tansen"], answer: "Tenali Raman" },
    { q: "What battle is central to the Mahabharata?", options: ["Lanka War", "Battle of Hastinapura", "Kurukshetra War", "Battle of Dwaraka"], answer: "Kurukshetra War" },
    { q: "What is the name of Krishna’s divine dance with Radha and the gopis?", options: ["Tandava", "Ras Lila", "Nritya Leela", "Bhakti Nritya"], answer: "Ras Lila" },
    { q: "What goddess slew the demon Mahishasura?", options: ["Kali", "Parvati", "Durga", "Saraswati"], answer: "Durga" },
    { q: "Who is the snake goddess worshipped in Bengal known for her conflict with a merchant?", options: ["Kamakhya", "Manasa Devi", "Ganga", "Lakshmi"], answer: "Manasa Devi" },
    { q: "In Norse mythology, who fights the Midgard serpent at Ragnarök?", options: ["Odin", "Loki", "Thor", "Balder"], answer: "Thor" }
  ],

  medium: [
    { q: "What is the purpose of Shiva's Tandava dance?", options: ["To impress Parvati", "To end time", "To balance creation and destruction", "To summon rain"], answer: "To balance creation and destruction" },
    { q: "What are the Jataka Tales about?", options: ["The adventures of Hindu gods", "Historical kings of India", "Buddha’s past lives", "Magical animals"], answer: "Buddha’s past lives" },
    { q: "Who is the wise advisor in Mughal court stories known for solving riddles?", options: ["Tansen", "Birbal", "Chanakya", "Vishnu Sharma"], answer: "Birbal" },
    { q: "What is the name of the celestial chariot Krishna drives in the Mahabharata?", options: ["Pushpak Vimana", "Sudarshan Rath", "Gandiva Cart", "Arjuna's Chariot"], answer: "Arjuna's Chariot" },
    { q: "What South Asian goddess is often depicted riding a tiger or lion?", options: ["Saraswati", "Durga", "Kali", "Lakshmi"], answer: "Durga" },
    { q: "In the Ramayana, who builds the bridge to Lanka?", options: ["Sugriva", "Hanuman", "Lakshmana", "Nala"], answer: "Nala" },
    { q: "What is the sacred epic that contains the Bhagavad Gita?", options: ["Ramayana", "Mahabharata", "Rigveda", "Vishnu Purana"], answer: "Mahabharata" },
    { q: "What city sank beneath the waves according to legend?", options: ["Troy", "Atlantis", "Lemuria", "Babylon"], answer: "Atlantis" },
    { q: "Which figure from Maori mythology slowed the sun?", options: ["Tāwhaki", "Māui", "Tane Mahuta", "Rangi"], answer: "Māui" },
    { q: "What region’s mythology includes the goddess Manasa Devi?", options: ["South India", "Rajasthan", "Bengal", "Kashmir"], answer: "Bengal" },
    { q: "In Hindu myth, who drank poison during the churning of the ocean?", options: ["Vishnu", "Shiva", "Brahma", "Indra"], answer: "Shiva" },
    { q: "What are the Yaksha and Yakshini in Hindu and Buddhist traditions?", options: ["Warriors", "Demons", "Nature spirits", "Snake gods"], answer: "Nature spirits" },
    { q: "What is the main lesson in most Jataka Tales?", options: ["Political tactics", "Historical truth", "Moral or virtue", "Supernatural powers"], answer: "Moral or virtue" },
    { q: "What is the name of the powerful sun god in Inca mythology?", options: ["Supay", "Pachacamac", "Inti", "Viracocha"], answer: "Inti" },
    { q: "What do the Wendigo and Mahishasura both symbolize?", options: ["Deceit", "Insatiable desire", "Nature’s fury", "Forgotten ancestry"], answer: "Insatiable desire" },
    { q: "What tragic love story appears in the Mahabharata involving Nala and Damayanti?", options: ["They are separated by war", "He loses her in a dice game", "She is abducted by demons", "He forgets her after being cursed"], answer: "He loses her in a dice game" },
    { q: "What is the sacred mountain often associated with Lord Shiva?", options: ["Mount Meru", "Mount Everest", "Mount Kailash", "Mount Mandara"], answer: "Mount Kailash" },
    { q: "Which Tirthankara in Jainism is considered the 24th and most recent?", options: ["Parshvanatha", "Neminatha", "Rishabhanatha", "Mahavira"], answer: "Mahavira" },
    { q: "How does Krishna reveal his cosmic form to Arjuna?", options: ["By touching his forehead", "By meditation", "Through divine vision", "During a storm"], answer: "Through divine vision" },
    { q: "Who are the Kauravas in the Mahabharata?", options: ["Kings of Lanka", "Allies of Rama", "Sons of Gandhari", "Followers of Shiva"], answer: "Sons of Gandhari" },
    { q: "What ancient demon did Durga have to be created to defeat?", options: ["Shumbha", "Mahishasura", "Raktabija", "Hiranyaksha"], answer: "Mahishasura" },
    { q: "Who is the consort of Manasa Devi and often opposes her?", options: ["Kartikeya", "Chand Saudagar", "Vasuki", "Daksha"], answer: "Chand Saudagar" },
    { q: "What role do Garuda and Naga play in Hindu-Buddhist myth?", options: ["They are allies", "They symbolize birth and death", "They are eternal enemies", "They created the world together"], answer: "They are eternal enemies" },
    { q: "In Egyptian mythology, who judges souls with a feather?", options: ["Ra", "Anubis", "Osiris", "Ma’at"], answer: "Ma’at" },
    { q: "What Slavic myth figure rides a mortar instead of a broomstick?", options: ["Kikimora", "Morana", "Baba Yaga", "Alkonost"], answer: "Baba Yaga" }
  ],  

  // Add remaining levels similarly
  hard: [
    { q: "What tragic love story appears in the Mahabharata involving Nala and Damayanti?", options: ["They are separated by war", "He loses her in a dice game", "She is abducted by demons", "He forgets her after being cursed"], answer: "He loses her in a dice game" },
    { q: "What is the sacred mountain often associated with Lord Shiva?", options: ["Mount Meru", "Mount Everest", "Mount Kailash", "Mount Mandara"], answer: "Mount Kailash" },
    { q: "Which Tirthankara in Jainism is considered the 24th and most recent?", options: ["Parshvanatha", "Neminatha", "Rishabhanatha", "Mahavira"], answer: "Mahavira" },
    { q: "How does Krishna reveal his cosmic form to Arjuna?", options: ["By touching his forehead", "By meditation", "Through divine vision", "During a storm"], answer: "Through divine vision" },
    { q: "Who are the Kauravas in the Mahabharata?", options: ["Kings of Lanka", "Allies of Rama", "Sons of Gandhari", "Followers of Shiva"], answer: "Sons of Gandhari" },
    { q: "What ancient demon did Durga have to be created to defeat?", options: ["Shumbha", "Mahishasura", "Raktabija", "Hiranyaksha"], answer: "Mahishasura" },
    { q: "Who is the consort of Manasa Devi and often opposes her?", options: ["Kartikeya", "Chand Saudagar", "Vasuki", "Daksha"], answer: "Chand Saudagar" },
    { q: "What role do Garuda and Naga play in Hindu-Buddhist myth?", options: ["They are allies", "They symbolize birth and death", "They are eternal enemies", "They created the world together"], answer: "They are eternal enemies" },
    { q: "In Egyptian mythology, who judges souls with a feather?", options: ["Ra", "Anubis", "Osiris", "Ma’at"], answer: "Ma’at" },
    { q: "What Slavic myth figure rides a mortar instead of a broomstick?", options: ["Kikimora", "Morana", "Baba Yaga", "Alkonost"], answer: "Baba Yaga" }
  ],
  
  
  extreme: [
    { q: "What does the Rainbow Serpent primarily represent in Aboriginal Dreamtime stories?", options: ["Death and decay", "Weather and war", "Creation and fertility", "Dreams and prophecy"], answer: "Creation and fertility" },
    { q: "What does the name “Ragnarök” literally translate to in Old Norse?", options: ["Twilight of the Gods", "Day of Chaos", "End of Men", "Wrath of the Giants"], answer: "Twilight of the Gods" },
    { q: "What is the name of the magical weapon used by Lord Rama?", options: ["Gandiva", "Vajra", "Sudarshana", "Brahmastra"], answer: "Brahmastra" },
    { q: "Who is said to have cursed the moon, causing its phases in some Native American stories?", options: ["Raven", "Coyote", "Bear", "Thunderbird"], answer: "Coyote" },
    { q: "In the Bhagavata Purana, what form does Vishnu take to save the Vedas?", options: ["Kurma the Tortoise", "Matsya the Fish", "Narasimha the Lion-Man", "Varaha the Boar"], answer: "Matsya the Fish" },
    { q: "According to Polynesian myth, why did Māui try to enter the goddess Hine-nui-te-pō?", options: ["To retrieve fire", "To learn prophecy", "To achieve immortality", "To defeat death"], answer: "To achieve immortality" },
    { q: "What material was used to create Pandora in Greek mythology?", options: ["Clay and water", "Gold", "Fire and smoke", "Earth and starlight"], answer: "Clay and water" },
    { q: "What happened to the Turkic people in the Ergenekon legend?", options: ["They turned to stone", "They disappeared into mist", "They were reborn from wolves", "They emerged from a hidden valley"], answer: "They emerged from a hidden valley" },
    { q: "What philosophical idea does the Kurukshetra War symbolically represent?", options: ["Dharma vs Karma", "Mind vs Body", "Duty vs Attachment", "Truth vs Lies"], answer: "Duty vs Attachment" },
    { q: "In Slavic folklore, what is Baba Yaga’s hut powered by?", options: ["Horse skulls", "Magic mushrooms", "Chicken legs", "Ghost fire"], answer: "Chicken legs" },
    { q: "Which Hindu mythic event caused the splitting of the Mandara mountain?", options: ["Krishna lifting Govardhan", "Sagar Manthan (Churning of the Ocean)", "Rama’s arrow", "Vamana’s steps"], answer: "Sagar Manthan (Churning of the Ocean)" },
    { q: "What creature in Zulu myth lays eggs underground and causes storms?", options: ["Impundulu", "Tokoloshe", "Lightning Bird", "Sangoma Owl"], answer: "Lightning Bird" },
    { q: "In Jain cosmology, where do souls reside after liberation (moksha)?", options: ["Devaloka", "Siddhashila", "Kalpa", "Svarga"], answer: "Siddhashila" },
    { q: "What is the significance of Krishna lifting the Govardhan Hill?", options: ["Punishment of Indra", "Shelter from storm", "Teaching faith", "All of the above"], answer: "All of the above" },
    { q: "What is the symbolic meaning of the Moon Rabbit pounding the elixir of life?", options: ["Peace and silence", "Eternal hard work", "Immortality and sacrifice", "Lunar loneliness"], answer: "Immortality and sacrifice" },
    { q: "What did the goddess Ma’at’s feather represent in Egyptian judgment?", options: ["Power", "Knowledge", "Truth", "Honor"], answer: "Truth" },
    { q: "What river is crossed in the Norse afterlife journey?", options: ["Gjöll", "Styx", "Lethe", "Elivagar"], answer: "Gjöll" },
    { q: "What is the name of the plant that Gilgamesh seeks for immortality?", options: ["The Herb of Rebirth", "Lotus of the Deep", "Flower of the Gods", "Plant of Heartbeat"], answer: "Plant of Heartbeat" },
    { q: "In Celtic myth, what realm lies beyond the sea and time?", options: ["Tir Na Nog", "Annwn", "Avalon", "Faery Hollow"], answer: "Tir Na Nog" },
    { q: "In Hindu cosmology, what age follows the Kali Yuga?", options: ["Satya Yuga", "Krita Yuga", "Treta Yuga", "Dvapara Yuga"], answer: "Satya Yuga" }
  ],  
  insanity: [
    { q: "In some oral retellings, what did Anansi the Spider have to collect to gain all stories from Nyame?", options: ["Golden web silk", "Snake, leopard, hornets, and fairy", "Seven riddles of the jungle", "Moonlight trapped in a jar"], answer: "Snake, leopard, hornets, and fairy" },
    { q: "What is the symbolic meaning of the Wendigo's endless hunger?", options: ["Fear of the supernatural", "Winter’s cruelty", "Spiritual imbalance and greed", "Cannibalistic ritual practices"], answer: "Spiritual imbalance and greed" },
    { q: "In Ramayana variations across Southeast Asia, which local hero sometimes replaces Hanuman?", options: ["Garuda", "Phra Lak", "Sang Kancil", "Sugriva"], answer: "Phra Lak" },
    { q: "What is the metaphorical interpretation of Sita’s trial by fire?", options: ["Rebirth through suffering", "Divine anger", "Separation of sin and purity", "Feminine sacrifice"], answer: "Separation of sin and purity" },
    { q: "In Norse mythology, what survives after Ragnarök to repopulate the world?", options: ["A single tree", "A golden egg", "Two humans—Líf and Lífthrasir", "Odin’s spear"], answer: "Two humans—Líf and Lífthrasir" },
    { q: "Which Jataka tale features a monkey king who sacrifices himself for his people?", options: ["The Banyan Deer", "The Brave Parrot", "Monkey King’s Bridge", "The Golden Goose"], answer: "Monkey King’s Bridge" },
    { q: "In Hinduism, which cosmic serpent supports the universe as Vishnu rests upon it?", options: ["Vasuki", "Shesha", "Kaliya", "Ananta"], answer: "Shesha" },
    { q: "In the myth of Ergenekon, how do the people escape the hidden valley?", options: ["A white deer leads them", "A blacksmith melts the mountain", "An eagle shows them the path", "A wolf speaks prophecy"], answer: "A blacksmith melts the mountain" },
    { q: "Which Polynesian figure stole fire from the underworld for mankind?", options: ["Tāne", "Māui", "Pele", "Hina"], answer: "Māui" },
    { q: "In Baba Yaga’s lore, what must visitors do to avoid being eaten?", options: ["Answer a riddle", "Cook her a meal", "Complete impossible tasks", "Kiss her hut"], answer: "Complete impossible tasks" },
    { q: "What aspect of the Djinn distinguishes them from demons in Islamic folklore?", options: ["They are made of clay", "They can be converted to Islam", "They cannot lie", "They are always evil"], answer: "They can be converted to Islam" },
    { q: "What role do Naga serve in Cambodian temple iconography?", options: ["Represent royalty", "Guard sacred thresholds", "Symbolize fallen angels", "Connect sky and water"], answer: "Guard sacred thresholds" },
    { q: "What does the churning of the ocean (Samudra Manthan) metaphorically represent?", options: ["Economic rivalry", "Political upheaval", "Internal spiritual struggle", "Historical tsunami"], answer: "Internal spiritual struggle" },
    { q: "In African mythology, what lesson does Anansi often teach through failure?", options: ["Never trust animals", "Wisdom requires humility", "Trickery is power", "Storytelling is sacred"], answer: "Wisdom requires humility" },
    { q: "What is the Sanskrit term for the cyclical process of cosmic creation and destruction?", options: ["Dharma", "Moksha", "Samsara", "Kalpa"], answer: "Kalpa" },
    { q: "In Slavic folklore, what does the Banshee’s wail most closely parallel in Irish myth?", options: ["The Morrígan’s cries", "The Song of Brigid", "The Tuatha’s horn", "The keening druids"], answer: "The Morrígan’s cries" },
    { q: "According to some Inca stories, what did Viracocha create first?", options: ["Stars", "Giants", "Humans", "Fire"], answer: "Giants" },
    { q: "In Jain cosmology, what is unique about time?", options: ["It has a beginning and end", "It spirals infinitely in dual cycles", "It only moves forward", "It is controlled by karma beings"], answer: "It spirals infinitely in dual cycles" },
    { q: "What ancient text contains one of the first versions of a flood myth?", options: ["Popol Vuh", "Rigveda", "Epic of Gilgamesh", "Edda"], answer: "Epic of Gilgamesh" },
    { q: "Why is Krishna’s flute often interpreted as a symbol of spiritual longing?", options: ["It controls weather", "It echoes the call of the divine", "It defeats demons", "It leads cows to safety"], answer: "It echoes the call of the divine" },
    { q: "In Celtic lore, what does the Otherworld’s timelessness symbolize?", options: ["Escaping fate", "Divine punishment", "The subconscious mind", "Desire for immortality"], answer: "Desire for immortality" },
    { q: "Which regional variant of Durga is worshipped during Navratri in Gujarat?", options: ["Mahakali", "Amba", "Bhadrakali", "Parvati Devi"], answer: "Amba" },
    { q: "In the Mahabharata, who alone sees Krishna’s Vishvarupa and survives?", options: ["Bhishma", "Karna", "Arjuna", "Vyasa"], answer: "Arjuna" },
    { q: "In Amazonian legend, how does the Pink River Dolphin seduce humans?", options: ["By whistling lullabies", "By entering dreams", "By transforming into a man", "By casting moonlit spells"], answer: "By transforming into a man" },
    { q: "What is the original sin in the myth of Pandora’s Box?", options: ["Betrayal", "Curiosity", "Envy", "Wrath"], answer: "Curiosity" },
    { q: "What symbol is common between the Egyptian goddess Isis and the Hindu goddess Parvati?", options: ["Throne", "Serpent", "Motherhood", "Fire"], answer: "Motherhood" },
    { q: "In Jain tales, what role do elephants often play?", options: ["Omens of war", "Symbols of illusion", "Obstacles or trials", "Vehicles of wisdom"], answer: "Obstacles or trials" },
    { q: "Which myth explains the origin of the Polynesian Islands?", options: ["Māui fishing up land", "Pele carving volcanoes", "Hina weeping land", "Ku building stone by stone"], answer: "Māui fishing up land" },
    { q: "In Yoruba myth, who is the god of language and communication?", options: ["Ogun", "Obatala", "Eshu", "Shango"], answer: "Eshu" },
    { q: "What is the symbolic meaning of the serpent in global mythologies (e.g., Naga, Rainbow Serpent, Jörmungandr)?", options: ["Peace and serenity", "Immortality and chaos", "Servitude and protection", "Love and resurrection"], answer: "Immortality and chaos" }
  ]
  
};

let currentLevel = "";
let currentIndex = 0;
let score = 0;

function startQuiz() {
  currentLevel = document.getElementById("difficulty").value;
  if (!currentLevel || !quizDatabase[currentLevel]) return;
  currentIndex = 0;
  score = 0;
  document.getElementById("quiz-container").style.display = "block";
  loadQuestion();
}

function loadQuestion() {
  const questionData = quizDatabase[currentLevel][currentIndex];
  document.getElementById("question").innerText = questionData.q;

  const optionsContainer = document.getElementById("options");
  optionsContainer.innerHTML = "";
  questionData.options.forEach(option => {
    const btn = document.createElement("button");
    btn.textContent = option;
    btn.onclick = () => {
      if (option === questionData.answer) score++;
      nextQuestion();
    };
    optionsContainer.appendChild(btn);
  });
}

function nextQuestion() {
  currentIndex++;
  if (currentIndex < quizDatabase[currentLevel].length) {
    loadQuestion();
  } else {
    document.getElementById("quiz-container").innerHTML = `
      <p>Your final score: ${score}/${quizDatabase[currentLevel].length}</p>
      <button onclick="location.reload()">Try Another Level</button>
    `;
  }
}

// Custom pointer (keep this if already added)
document.addEventListener('mousemove', (e) => {
  const pointer = document.getElementById('custom-pointer');
  pointer.style.left = `${e.clientX}px`;
  pointer.style.top = `${e.clientY}px`;
});
