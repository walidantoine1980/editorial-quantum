export interface Video {
  id: string;
  originalTitle: string;
  editorialTitle: {
    en: string;
    fr: string;
  };
  editorialChoice: {
    en: string;
    fr: string;
  };
  category: 'Computing' | 'Physics' | 'Biology' | 'Philosophy';
  thumbnailUrl: string;
  channelName: string;
  channelAvatar: string;
  views: string;
  publishedAt: string;
  duration: string;
}

export const mockVideos: Video[] = [
  {
    id: '1',
    originalTitle: "Quantum Computers Explained – Limits of Human Technology",
    editorialTitle: {
      en: "The Silicon Horizon: Beyond Classical Computing",
      fr: "L'Horizon de Silicium : Au-delà du Calcul Classique"
    },
    editorialChoice: {
      en: "A magisterial breakdown of why quantum bits are the inevitable successors to binary logic in the age of extreme data.",
      fr: "Une analyse magistrale expliquant pourquoi les bits quantiques sont les successeurs inévitables de la logique binaire."
    },
    category: 'Computing',
    thumbnailUrl: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=1600',
    channelName: 'Kurzgesagt',
    channelAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Kurz',
    views: '12M',
    publishedAt: '2h ago',
    duration: '10:15'
  },
  {
    id: '2',
    originalTitle: "Is Quantum Biology Real?",
    editorialTitle: {
      en: "Life's Quantum heartbeat: The photosynthesis paradox",
      fr: "Le battement quantique de la vie : Le paradoxe de la photosynthèse"
    },
    editorialChoice: {
      en: "Exploring how nature mastered superposition eons before our labs, optimizing energy transfer with staggering precision.",
      fr: "Découvrez comment la nature a maîtrisé la superposition bien avant nos laboratoires, optimisant le transfert d'énergie."
    },
    category: 'Biology',
    thumbnailUrl: 'https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&q=80&w=800',
    channelName: 'Veritasium',
    channelAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Veri',
    views: '4.5M',
    publishedAt: '5h ago',
    duration: '15:42'
  },
  {
    id: '3',
    originalTitle: "Quantum Mechanics for Beginners",
    editorialTitle: {
      en: "The Architecture of Reality: A Primer on Waves",
      fr: "L'Architecture de la Réalité : Une Introduction aux Ondes"
    },
    editorialChoice: {
      en: "A refined look at the fundamental principles that govern everything, presented with unprecedented clarity and poise.",
      fr: "Un regard raffiné sur les principes fondamentaux qui régissent tout, présenté avec une clarté et une élégance inédites."
    },
    category: 'Physics',
    thumbnailUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800',
    channelName: 'Domain of Science',
    channelAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Science',
    views: '2.1M',
    publishedAt: 'Yesterday',
    duration: '22:10'
  },
  {
    id: '4',
    originalTitle: "The Many Worlds Interpretation of Quantum Mechanics",
    editorialTitle: {
      en: "Parallel Echoes: The Many-Worlds Dilemma",
      fr: "Échos Parallèles : Le Dilemme des Mondes Multiples"
    },
    editorialChoice: {
      en: "A philosophical journey into the multiverse, questioning the very nature of existence through the lens of probability.",
      fr: "Un voyage philosophique dans le multivers, questionnant la nature même de l'existence par le prisme des probabilités."
    },
    category: 'Philosophy',
    thumbnailUrl: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&q=80&w=800',
    channelName: 'Sean Carroll',
    channelAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sean',
    views: '890K',
    publishedAt: 'Yesterday',
    duration: '18:30'
  },
  {
    id: '5',
    originalTitle: "Quantum Entanglement - Spooky Action at a Distance",
    editorialTitle: {
      en: "Spectral Bonds: The Entanglement Symphony",
      fr: "Liens Spectraux : La Symphonie de l'Intrication"
    },
    editorialChoice: {
      en: "Einstein's nightmare turned into a computational revolution; why non-locality changes everything we knew about space.",
      fr: "Le cauchemar d'Einstein transformé en révolution computationnelle ; pourquoi la non-localité change notre vision de l'espace."
    },
    category: 'Physics',
    thumbnailUrl: 'https://images.unsplash.com/photo-1534991715367-0c33403bcc27?auto=format&fit=crop&q=80&w=800',
    channelName: 'Physics Girl',
    channelAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Girl',
    views: '3.2M',
    publishedAt: '2 days ago',
    duration: '14:05'
  },
  {
    id: '6',
    originalTitle: "How Quantum Teleportation Works",
    editorialTitle: {
      en: "The Vanishing Act: Teleporting Information",
      fr: "L'Acte de Disparition : Téléporter l'Information"
    },
    editorialChoice: {
      en: "Moving information without moving matter: the cornerstone of the future quantum internet, explained with surgical precision.",
      fr: "Déplacer l'information sans déplacer la matière : la pierre angulaire du futur internet quantique, expliquée avec précision."
    },
    category: 'Computing',
    thumbnailUrl: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&q=80&w=800',
    channelName: 'Science Insider',
    channelAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Insider',
    views: '1.5M',
    publishedAt: '3 days ago',
    duration: '12:55'
  },
  {
    id: '7',
    originalTitle: "String Theory - The Multiverse Explained",
    editorialTitle: {
      en: "Cosmic Symphony: The Strings of Reality",
      fr: "Symphonie Cosmique : Les Cordes de la Réalité"
    },
    editorialChoice: {
      en: "A mesmerizing visualization of 11-dimensional space where particles dissolve into vibrating loops of pure energy.",
      fr: "Une visualisation fascinante d'un espace à 11 dimensions où les particules se dissolvent en boucles d'énergie pure."
    },
    category: 'Physics',
    thumbnailUrl: 'https://images.unsplash.com/photo-1464802686167-b939a6910659?auto=format&fit=crop&q=80&w=1600',
    channelName: 'PBS Space Time',
    channelAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=PBS',
    views: '2.8M',
    publishedAt: '4 days ago',
    duration: '16:45'
  },
  {
    id: '8',
    originalTitle: "What is Consciousness in a Quantum World?",
    editorialTitle: {
      en: "The Observer Effect: Mind Meets Matter",
      fr: "L'Effet Observateur : L'Esprit Rencontre la Matière"
    },
    editorialChoice: {
      en: "Do we create reality by looking at it? A profound dive into the Penrose-Hameroff Orchestrated Objective Reduction theory.",
      fr: "Créons-nous la réalité en la regardant ? Une plongée profonde dans la théorie de la réduction objective orchestrée."
    },
    category: 'Philosophy',
    thumbnailUrl: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800',
    channelName: 'Closer To Truth',
    channelAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Truth',
    views: '950K',
    publishedAt: '1 week ago',
    duration: '25:10'
  },
  {
    id: '9',
    originalTitle: "Quantum Machine Learning Algorithms",
    editorialTitle: {
      en: "Algorithmic Alchemy: Qubits & AI",
      fr: "Alchimie Algorithmique : Qubits et IA"
    },
    editorialChoice: {
      en: "How quantum neural networks are poised to solve computational problems that would take classical computers millennia.",
      fr: "Comment les réseaux de neurones quantiques s'apprêtent à résoudre des problèmes qui prendraient des millénaires aux ordinateurs classiques."
    },
    category: 'Computing',
    thumbnailUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800',
    channelName: 'Lex Fridman',
    channelAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Lex',
    views: '4.1M',
    publishedAt: '2 weeks ago',
    duration: '1:45:00'
  },
  {
    id: '10',
    originalTitle: "Photosynthesis and Quantum Coherence",
    editorialTitle: {
      en: "The Green Quantum Machine",
      fr: "La Machine Quantique Verte"
    },
    editorialChoice: {
      en: "Leaves perform quantum computations every second. Understanding coherence in biology changes our view of nature.",
      fr: "Les feuilles effectuent des calculs quantiques à chaque seconde. Comprendre la cohérence biologique change notre vision de la nature."
    },
    category: 'Biology',
    thumbnailUrl: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&q=80&w=800',
    channelName: 'MIT OpenCourseWare',
    channelAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=MIT',
    views: '320K',
    publishedAt: '3 weeks ago',
    duration: '55:20'
  },
  {
    id: '11',
    originalTitle: "Dark Matter & Quantum Gravity",
    editorialTitle: {
      en: "The Invisible Weight of the Universe",
      fr: "Le Poids Invisible de l'Univers"
    },
    editorialChoice: {
      en: "Reconciling the very large and the incredibly small: the ultimate quest to merge general relativity with quantum mechanics.",
      fr: "Réconcilier l'infiniment grand et l'incroyablement petit : la quête ultime pour fusionner la relativité générale et la mécanique quantique."
    },
    category: 'Physics',
    thumbnailUrl: 'https://images.unsplash.com/photo-1454789548928-9efd52dc4031?auto=format&fit=crop&q=80&w=800',
    channelName: 'Quanta Magazine',
    channelAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Quanta',
    views: '1.2M',
    publishedAt: '1 month ago',
    duration: '19:00'
  },
  {
    id: '12',
    originalTitle: "Free Will in a Deterministic Universe",
    editorialTitle: {
      en: "Heisenberg's Choice: The Illusion of Destiny",
      fr: "Le Choix d'Heisenberg : L'Illusion du Destin"
    },
    editorialChoice: {
      en: "If quantum events are truly random, does randomness grant us free will? A debate between physicists and neuroscientists.",
      fr: "Si les événements quantiques sont vraiment aléatoires, le hasard nous accorde-t-il le libre arbitre ? Un débat entre physiciens et neuroscientifiques."
    },
    category: 'Philosophy',
    thumbnailUrl: 'https://images.unsplash.com/photo-1499209974431-9dddcece7f88?auto=format&fit=crop&q=80&w=800',
    channelName: 'Big Think',
    channelAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Think',
    views: '2.5M',
    publishedAt: '2 months ago',
    duration: '11:30'
  }
];
