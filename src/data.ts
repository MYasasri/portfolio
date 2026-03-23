export interface Project {
  id: string;
  title: string;
  category: 'Data' | 'Web' | 'AI' | 'GUI';
  problem: string;
  approach: string;
  insight: string;
  impact: string;
  tools: string[];
  githubUrl: string;
  image: string;
  caption?: string;
  liveUrl?: string;
}

export interface Skill {
  name: string;
  category: 'Core Programming' | 'Data & Analytics' | 'AI / Applied Intelligence' | 'Development' | 'Tools';
  proof: string;
  level: number;
  sourceId?: string;
}

export interface Certification {
  id: string;
  title: string;
  platform: string;
  category: 'Programming' | 'AI / ML' | 'Other' | 'Computer Networks' | 'Computer Architecture';
  skills: string[];
  url: string;
  image: string;
  isVerified: boolean;
}

export interface Training {
  id: string;
  title: string;
  organization: string;
  duration: string;
  location: string;
  description: string[];
  certificateUrl: string;
}

export const projects: Project[] = [
  {
    id: 'predictive-insights',
    title: 'Predictive Insights',
    category: 'AI',
    problem: 'Leveraging machine learning to forecast future trends and behaviors from historical data patterns.',
    approach: 'Implemented various predictive models using Scikit-learn and evaluated performance metrics to ensure accuracy.',
    insight: 'Discovered that feature engineering and data preprocessing contribute more to model performance than hyperparameter tuning alone.',
    impact: 'Developed a robust framework for predictive modeling that can be adapted for various business forecasting needs.',
    tools: ['Python', 'Scikit-learn', 'Pandas', 'Matplotlib'],
    githubUrl: 'https://github.com/MYasasri/Predictive-Insights',
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=2070&auto=format&fit=crop',
    caption: 'Machine Learning Model Output'
  },
  {
    id: 'ev-analysis',
    title: 'Electric Vehicle Population Analysis',
    category: 'Data',
    problem: 'Analyzing the global shift towards electric mobility to identify adoption trends and infrastructure requirements.',
    approach: 'Designed an end-to-end Power BI dashboard that cleanses raw registration data and visualizes growth KPIs.',
    insight: 'Identified a strong correlation between government subsidies and the rate of EV adoption in urban centers.',
    impact: 'Provided a visual roadmap for policy makers to identify high-potential regions for charging station deployment.',
    tools: ['Power BI', 'Excel', 'Data Modeling'],
    githubUrl: 'https://github.com/MYasasri/Electric-Vehicle-Population-Analysis-Power-BI-Project',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
    caption: 'Power BI Dashboard Preview'
  },
  {
    id: 'gui-project',
    title: 'GUI Project',
    category: 'GUI',
    problem: 'Creating intuitive desktop interfaces for complex backend processes to improve user accessibility.',
    approach: 'Utilized Python and Tkinter to build a responsive graphical user interface with real-time feedback loops.',
    insight: 'User experience is significantly enhanced when visual progress indicators are provided for long-running tasks.',
    impact: 'Simplified the interaction with command-line tools for non-technical users through a clean, visual interface.',
    tools: ['Python', 'Tkinter', 'UI Design'],
    githubUrl: 'https://github.com/MYasasri/GUI',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop',
    caption: 'Python GUI Interface'
  },
  {
    id: 'web-hackathon',
    title: 'Web Hackathon Project',
    category: 'Web',
    problem: 'Rapidly developing a functional web solution for a specific social or business challenge under tight time constraints.',
    approach: 'Built a full-stack web application using modern frameworks, focusing on core features and responsive design.',
    insight: 'Agile development and modular component architecture are key to delivering a working prototype in 24-48 hours.',
    impact: 'Successfully presented a working prototype that addressed the hackathon theme, demonstrating quick learning and execution.',
    tools: ['React', 'Tailwind CSS', 'JavaScript', 'Node.js'],
    githubUrl: 'https://github.com/MYasasri/web-ka-hackathon-',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop',
    caption: 'Web UI Prototype'
  },
  {
    id: 'investment-advisor',
    title: 'Investment Portfolio Advisor',
    category: 'AI',
    problem: 'Providing personalized investment recommendations based on risk tolerance and historical market performance.',
    approach: 'Developed an AI-driven advisor that analyzes market data and suggests optimized portfolio allocations.',
    insight: 'Diversification strategies can be significantly improved by analyzing cross-asset correlations during market volatility.',
    impact: 'Empowered users with data-backed investment strategies, reducing the emotional bias in financial decision-making.',
    tools: ['Python', 'Finance APIs', 'Machine Learning', 'NumPy'],
    githubUrl: 'https://github.com/MYasasri/Investment-portfolio-advisor',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2070&auto=format&fit=crop',
    caption: 'AI Market Analysis Output'
  },
  {
    id: 'data-viz-python',
    title: 'Data Analysis & Visualization',
    category: 'Data',
    problem: 'Extracting meaningful stories from raw datasets through advanced statistical analysis and visual representation.',
    approach: 'Used Python libraries like Seaborn and Plotly to create interactive and static visualizations that highlight key trends.',
    insight: 'Visualizing data distributions often reveals outliers and anomalies that are missed in summary statistics.',
    impact: 'Created a comprehensive suite of visualization templates that can be reused for rapid exploratory data analysis.',
    tools: ['Python', 'Seaborn', 'Plotly', 'Pandas'],
    githubUrl: 'https://github.com/MYasasri/Data-Analysis-Visualization-with-Python',
    image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=2076&auto=format&fit=crop',
    caption: 'Python Data Visualizations'
  }
];

export const skills: Skill[] = [
  // Core Programming
  { 
    name: 'Python', 
    category: 'Core Programming', 
    proof: 'Used in Investment Advisor & Python Internship',
    level: 90,
    sourceId: 'python-internship'
  },
  { 
    name: 'Object-Oriented Programming', 
    category: 'Core Programming', 
    proof: 'Applied in Python Bootcamp & GUI Project',
    level: 85,
    sourceId: 'udemy-python-bootcamp'
  },
  { 
    name: 'File Handling', 
    category: 'Core Programming', 
    proof: 'Implemented in Python Internship assignments',
    level: 80,
    sourceId: 'python-internship'
  },

  // Data & Analytics
  { 
    name: 'Data Analysis (Pandas, NumPy)', 
    category: 'Data & Analytics', 
    proof: 'Core of EV Analysis & Investment Advisor',
    level: 88,
    sourceId: 'ev-analysis'
  },
  { 
    name: 'Data Visualization (Matplotlib, Seaborn)', 
    category: 'Data & Analytics', 
    proof: 'Used in Data Analysis & Visualization project',
    level: 85,
    sourceId: 'data-viz-python'
  },
  { 
    name: 'Dashboarding (Power BI)', 
    category: 'Data & Analytics', 
    proof: 'Built EV Population Analysis Dashboard',
    level: 92,
    sourceId: 'ev-analysis'
  },
  { 
    name: 'Exploratory Data Analysis (EDA)', 
    category: 'Data & Analytics', 
    proof: 'Performed on multiple datasets in Google Data Analytics Spec',
    level: 86,
    sourceId: 'google-data-analytics-spec'
  },

  // AI / Applied Intelligence
  { 
    name: 'Basic Machine Learning Concepts', 
    category: 'AI / Applied Intelligence', 
    proof: 'Learned in Advanced ML Specialization',
    level: 75,
    sourceId: 'drive-cert-1'
  },
  { 
    name: 'Predictive Analysis', 
    category: 'AI / Applied Intelligence', 
    proof: 'Implemented in Predictive Insights project',
    level: 82,
    sourceId: 'predictive-insights'
  },

  // Development
  { 
    name: 'Web Development (Basic)', 
    category: 'Development', 
    proof: 'Used in Web Hackathon Project',
    level: 70,
    sourceId: 'web-hackathon'
  },
  { 
    name: 'GUI Development (Python)', 
    category: 'Development', 
    proof: 'Built desktop interface in GUI Project',
    level: 85,
    sourceId: 'gui-project'
  },

  // Tools
  { 
    name: 'Git & GitHub', 
    category: 'Tools', 
    proof: 'Used for version control across all projects',
    level: 88,
    sourceId: 'web-hackathon'
  },
  { 
    name: 'Jupyter Notebook', 
    category: 'Tools', 
    proof: 'Primary environment for Data Analysis projects',
    level: 90,
    sourceId: 'data-viz-python'
  },
  { 
    name: 'Power BI', 
    category: 'Tools', 
    proof: 'Used for EV Population Analysis',
    level: 92,
    sourceId: 'ev-analysis'
  },
];

export const certifications: Certification[] = [
  {
    id: 'google-data-analytics-spec',
    title: 'Computer Communications',
    platform: 'Coursera',
    category: 'Computer Networks',
    skills: ['TCP/IP',
  'OSI Model',
  'Computer Networks',
  'Packet Switching',
  'Network Protocols',
  'LAN',
  'Peer-to-Peer Networks',
  'Routing Basics',
  'Network Architecture',
  'Data Communication'],
    url: 'https://www.coursera.org/account/accomplishments/specialization/42OE0RP3I79A',
    image: 'https://picsum.photos/seed/google-data/400/300',
    isVerified: true
  },
  {
    id: 'google-data-analytics-1',
    title: 'Digital Systems: From Logic Gates to Processors',
    platform: 'Coursera',
    category: 'Computer Architecture',
    skills: ['Logic Gates',
  'Boolean Algebra',
  'Combinational Circuits',
  'Sequential Circuits',
  'Flip-Flops',
  'Digital Design',
  'Computer Architecture',
  'Processor Basics',
  'Binary Systems',
  'Finite State Machines'],
    url: 'https://www.coursera.org/account/accomplishments/verify/QZH5JLYUAFSO',
    image: 'https://picsum.photos/seed/data1/400/300',
    isVerified: true
  },
  {
    id: 'google-data-analytics-2',
    title: 'Introduction to Hardware and Operating Systems',
    platform: 'Coursera',
    category: 'Computer Architecture',
    skills: ['Operating Systems',
  'Process Management',
  'Memory Management',
  'CPU Scheduling',
  'File Systems',
  'System Calls',
  'Computer Hardware Basics',
  'I/O Systems',
  'Virtual Memory',
  'Multitasking'],
    url: 'https://www.coursera.org/account/accomplishments/verify/CSORDXUZU9SE',
    image: 'https://picsum.photos/seed/data2/400/300',
    isVerified: true
  },
  {
    id: 'google-data-analytics-3',
    title: 'Packet Switching Networks and Algorithms',
    platform: 'Coursera',
    category: 'Computer Networks',
    skills: ['Packet Switching',
  'Network Algorithms',
  'Routing Algorithms',
  'TCP/IP',
  'Network Protocols',
  'Congestion Control',
  'Data Transmission',
  'Network Performance',
  'Internet Architecture',
  'Latency & Throughput'],
    url: 'https://www.coursera.org/account/accomplishments/verify/WXX1D1S3T7ST',
    image: 'https://picsum.photos/seed/data3/400/300',
    isVerified: true
  },
  {
    id: 'google-data-analytics-4',
    title: 'Fundamentals of Network Communication',
    platform: 'Coursera',
    category: 'Computer Networks',
    skills: ['Computer Networks',
  'Network Fundamentals',
  'OSI Model',
  'TCP/IP',
  'Data Communication',
  'Network Protocols',
  'LAN',
  'Bandwidth & Latency',
  'Signal Transmission',
  'Network Topologies'],
    url: 'https://www.coursera.org/account/accomplishments/verify/9V4M83SCKRU9',
    image: 'https://picsum.photos/seed/data4/400/300',
    isVerified: true
  },
  {
    id: 'google-data-analytics-5',
    title: 'Peer-to-Peer Protocols and Local Area Networks',
    platform: 'Coursera',
    category: 'Computer Networks',
    skills: ['Peer-to-Peer Networks',
  'Local Area Networks',
  'Network Topologies',
  'Ethernet',
  'MAC Addressing',
  'Network Protocols',
  'Decentralized Systems',
  'Data Sharing Models',
  'LAN Design',
  'Network Communication'],
    url: 'https://www.coursera.org/account/accomplishments/verify/RDHA1Q8CRSP3',
    image: 'https://picsum.photos/seed/data5/400/300',
    isVerified: true
  },
  {
    id: 'google-data-analytics-6',
    title: 'TCP/IP and Advanced Topics',
    platform: 'Coursera',
    category: 'Computer Networks',
    skills: ['TCP/IP Suite',
  'IP Addressing',
  'Subnetting',
  'Transport Layer Protocols',
  'Routing Protocols',
  'Network Layer',
  'Congestion Control',
  'Flow Control',
  'Packet Transmission',
  'Network Security Basics'],
    url: 'https://www.coursera.org/account/accomplishments/verify/WOX3JIRAI3Q6',
    image: 'https://picsum.photos/seed/data6/400/300',
    isVerified: true
  },
  {
    id: 'udemy-python-bootcamp',
    title: 'Master Generative AI & Generative AI tools (ChatGPT and more)',
    platform: 'Udemy',
    category: 'AI / ML',
    skills: ['Generative AI',
  'Prompt Engineering',
  'ChatGPT',
  'AI Tools',
  'Content Generation',
  'AI Workflows',
  'Text Generation',
  'Automation with AI',
  'Conversational AI',
  'AI Productivity'],
    url: 'https://www.udemy.com/certificate/UC-628e3b0a-f8a2-4f9f-88e9-80f19b3f7472/',
    image: 'https://picsum.photos/seed/python-udemy/400/300',
    isVerified: false
  },
  {
    id: 'udemy-web-dev',
    title: 'Chatgpt Made Easy: AI Essentials for beginners',
    platform: 'Udemy',
    category: 'AI / ML',
    skills: ['Prompt Engineering',
  'ChatGPT',
  'AI Tools Usage',
  'Text Generation',
  'Content Automation',
  'Conversational AI',
  'AI Productivity Tools',
  'Basic NLP Concepts'],
    url: 'https://www.udemy.com/certificate/UC-66213dd5-6c67-4ea3-823e-767df9ea4f73/',
    image: 'https://picsum.photos/seed/web-udemy/400/300',
    isVerified: false
  },
  {
    id: 'drive-cert-1',
    title: 'Introduction to Large Language Models (LLMs)',
    platform: 'NPTEL',
    category: 'AI / ML',
    skills: ['Large Language Models',
  'Generative AI',
  'Prompt Engineering',
  'Transformers',
  'Natural Language Processing',
  'Text Generation',
  'Tokenization',
  'Model Fine-tuning',
  'AI Applications',
  'Ethics in AI'],
    url: 'https://drive.google.com/file/d/1yyO5SeFs55fa_zHnfG6Y0f1STvqeXa3r/view?usp=sharing',
    image: 'https://picsum.photos/seed/ml-drive/400/300',
    isVerified: false
  },
  {
    id: 'drive-cert-2',
    title: 'Data Structure and Algorithms (DSA)',
    platform: 'iamneo',
    category: 'Programming',
    skills: ['Data Structures',
  'Algorithms',
  'Arrays',
  'Linked Lists',
  'Stacks & Queues',
  'Trees',
  'Sorting Algorithms',
  'Searching Algorithms',
  'Time Complexity',
  'Problem Solving'],
    url: 'https://drive.google.com/file/d/1Hv16wv11cl2ghia8KGg7Kh7rhVJmCBWy/view?usp=drive_link',
    image: 'https://picsum.photos/seed/cloud-drive/400/300',
    isVerified: false
  },
  {
    id: 'drive-cert-3',
    title: 'Object Oriented Programming using C++',
    platform: 'iamneo',
    category: 'Programming',
    skills: ['C++',
  'Object-Oriented Programming',
  'Classes & Objects',
  'Encapsulation',
  'Inheritance',
  'Polymorphism',
  'Abstraction',
  'Constructors & Destructors',
  'Operator Overloading',
  'Function Overloading'],
    url: 'https://drive.google.com/file/d/1tTuccmeQFFWB24V83kEFoPTb3beXaVTG/view?usp=drive_link',
    image: 'https://picsum.photos/seed/cyber-drive/400/300',
    isVerified: false
  },
  {
    id: 'drive-cert-4',
    title: 'Java Programming',
    platform: 'iamneo',
    category: 'Programming',
    skills: ['Java',
  'Object-Oriented Programming',
  'Data Structures',
  'Exception Handling',
  'Collections Framework',
  'Multithreading',
  'File Handling',
  'JDBC',
  'Debugging',
  'Problem Solving'],
    url: 'https://drive.google.com/file/d/1FYKtkvT054rlpIDF5ujFYG1qIRxntpkl/view?usp=drive_link',
    image: 'https://picsum.photos/seed/db-drive/400/300',
    isVerified: false
  }
];

export const trainingData: Training[] = [
  {
    id: 'python-internship',
    title: 'Python Programming Internship',
    organization: 'Harsha Informatics',
    duration: 'Jun 2025 – Jul 2025',
    location: 'Tirupati, Andhra Pradesh (On-site)',
    description: [
      'Hands-on experience with core Python concepts (data types, control structures, OOP, file handling)',
      'Solved real-world programming problems and assignments',
      'Collaborated with mentors and team members',
      'Recognized for active participation and professionalism'
    ],
    certificateUrl: 'https://drive.google.com/file/d/1c02IpOAO3zlxmqLMjKI-yMcIw1xMkbxl/view?usp=sharing'
  }
];
