export const profile = {
  name: 'Ankitha V Chandan',
  role: 'AI/ML Engineer | Backend Developer',
  tagline: 'I build production-style APIs, intelligent applications, and modular backend systems that move from idea → development → deployed software.',
  email: 'ankithachandann@gmail.com',
  phone: '+91 8310554698',
  location: 'Udupi, Karnataka',
  linkedin: 'https://www.linkedin.com/in/ankitha-chandan-03a82b411',
  github: 'https://github.com/ankithavc14-maker',
}

export const skills = [
  ['Python', 'Language', '🐍'], ['FastAPI', 'Backend', '⚡'], ['Flask', 'Backend', '◉'], ['Django', 'Backend', '◆'],
  ['PyTorch', 'Deep Learning', '◈'], ['OpenCV', 'Computer Vision', '◎'], ['scikit-learn', 'Machine Learning', '◇'],
  ['PostgreSQL', 'Database', '▦'], ['MySQL', 'Database', '▤'], ['SQLite', 'Database', '▥'],
  ['NumPy', 'Data', 'N'], ['Pandas', 'Data', 'P'], ['ChromaDB', 'Vector DB', '◌'], ['RAG', 'AI Systems', '↗'],
  ['LLM Integration', 'AI Systems', 'AI'], ['Agentic AI', 'AI Systems', 'AG'], ['LangChain', 'AI Framework', 'LC'],
  ['Docker', 'DevOps', '◇'], ['Git / GitHub', 'Version Control', '⌘'], ['Postman', 'API Testing', '→'],
  ['pytest', 'Testing', '◫'], ['Pydantic', 'Validation', '✓'],
]

export const projects = [
  {
    id: 'luminary', title: 'LuminaryAI Studio v3', category: 'AI PLATFORM', accent: 'violet',
    description: 'A modular AI platform with conversational assistance, resume analysis, content generation, and context-aware document retrieval.',
    stack: ['Python', 'FastAPI', 'ChromaDB', 'Sentence Transformers', 'Gemini', 'OpenAI', 'Docker'],
    details: ['10+ REST API tools', 'Pydantic request/response validation', 'ChromaDB retrieval pipeline', 'Streaming third-party AI responses', 'Dockerized modular backend'],
    live: 'https://luminary-ai-eight.vercel.app/', github: 'https://github.com/ankithavc14-maker/LuminaryAI', image: '/assets/project-covers/luminary.svg',
  },
  {
    id: 'leafguard', title: 'LeafGuard AI', category: 'COMPUTER VISION', accent: 'lime',
    description: 'A lightweight FastAPI inference service for real-time plant disease predictions with confidence scoring.',
    stack: ['Python', 'FastAPI', 'PyTorch', 'MobileNetV2', 'Transfer Learning'],
    details: ['20,000+ images across 15 categories', '94% test accuracy', 'Precision / recall / F1 evaluation', 'Production-style REST inference endpoint'],
    live: 'https://leafguard77.onrender.com/', github: '', image: '/assets/leafguard-cover.png',
  },
  {
    id: 'attendai', title: 'AttendAI Sync Pro', category: 'FACE RECOGNITION', accent: 'blue',
    description: 'An AI attendance platform using face recognition, analytics, reporting, and secure check-in workflows.',
    stack: ['Python', 'Flask', 'OpenCV', 'face_recognition', 'SQLite'],
    details: ['128-D face embeddings', 'Attendance analytics', 'CSV / PDF reporting', 'REST API design', 'Recognition-based check-in'],
    live: 'https://attendai-inky.vercel.app/', github: '', image: '/assets/attendai-cover.png',
  },
  {
    id: 'faceauth', title: 'FaceAuthBank', category: 'BIOMETRIC BACKEND', accent: 'cyan',
    description: 'A Flask REST API backend for biometric banking and transaction workflows with authentication, audit trails, and supporting ML analytics.',
    stack: ['Python', 'Flask', 'MySQL', 'OpenCV', 'Scikit-learn'],
    details: ['Deposit / withdrawal / transfer flows', 'NEFT, FD and RD transaction modules', 'Authentication + audit trail', 'IsolationForest / KMeans / Linear Regression', 'dlib 128-D face embeddings'],
    live: '', github: '', image: '/assets/project-covers/faceauth.svg',
  },
  {
    id: 'chromavision', title: 'ChromaVision', category: 'COMPUTER VISION', accent: 'cyan',
    description: 'A computer-vision color analysis application built around image processing and color classification workflows.',
    stack: ['Python', 'OpenCV', 'K-Means', 'SQLite'],
    details: ['Color detection and analysis', 'Computer-vision processing', 'K-Means based color grouping', 'SQLite-backed application workflow'],
    live: '', github: '', image: '/assets/project-covers/chromavision.svg',
  },
  {
    id: 'employee', title: 'Employee Training System', category: 'DESKTOP APPLICATION', accent: 'violet',
    description: 'A training management application covering courses, enrollments, quizzes, progress, certificates and QR-based verification.',
    stack: ['Python', 'Tkinter', 'SQLite', 'ReportLab', 'QR'],
    details: ['Course and enrollment management', 'Quiz workflows', 'Certificate generation', 'QR verification support', 'SQLite persistence'],
    live: '', github: '', image: '/assets/project-covers/employee.svg',
  },
  {
    id: 'face-recognition', title: 'Face Recognition System', category: 'COMPUTER VISION', accent: 'blue',
    description: 'A focused face-recognition application for identity matching and computer-vision based recognition workflows.',
    stack: ['Python', 'OpenCV', 'face_recognition', 'NumPy'],
    details: ['Face detection and matching', '128-D face embeddings', 'Camera-based recognition workflow', 'Computer-vision preprocessing'],
    live: '', github: '', image: '/assets/project-covers/face-recognition.svg',
  },
  {
    id: 'ghibli', title: 'Ghibli Art Generator', category: 'AI / IMAGE', accent: 'violet',
    description: 'An image-generation application combining a web interface with image processing and AI-assisted transformation workflows.',
    stack: ['Python', 'Django', 'OpenCV', 'Claude', 'AWS S3'],
    details: ['Web-based image workflow', 'Image processing pipeline', 'AI-assisted transformation', 'Cloud asset storage integration'],
    live: '', github: '', image: '/assets/project-covers/ghibli.svg',
  },
]

export const experience = [
  { date: 'DEC 2025 — JUN 2026', title: 'AI/ML Engineer Intern', org: 'UptoSkills · New Delhi · Remote', text: 'Designed and developed a FastAPI + PostgreSQL task management backend with 10+ REST endpoints, CRUD operations, automated reminder and priority workflows, and API validation using Postman and pytest.' },
  { date: '2024 — 2026', title: 'MCA · CGPA 8.76', org: 'Kristu Jayanti (Deemed University), Bengaluru', text: 'Advanced study across software engineering, AI/ML, backend development, databases, and application development.' },
  { date: '2021 — 2024', title: 'BCA · CGPA 8.80', org: "Dr. G. Shankar Government Women's College, Udupi", text: 'Built the programming and application-development foundation that led into backend engineering and AI/ML.' },
]

export const certifications = [
  ['AWS Certified Solutions Architect', '/assets/certificates/aws-solutions-architect.pdf', 'CERTIFICATION', '/assets/certificate-thumbs/aws-solutions-architect.png'],
  ['Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate', '/assets/certificates/oracle-ai-foundations.pdf', 'CERTIFICATION', '/assets/certificate-thumbs/oracle-ai-foundations.png'],
  ['UiPath — Agentic Prompt Engineering', '/assets/certificates/uipath-agentic-prompt-engineering.pdf', 'CERTIFICATION', '/assets/certificate-thumbs/uipath-agentic-prompt-engineering.png'],
  ['Introduction to Artificial Intelligence', '/assets/certificates/introduction-to-artificial-intelligence.pdf', 'CERTIFICATION', '/assets/certificate-thumbs/introduction-to-artificial-intelligence.png'],
  ['Java Programming Fundamentals', '/assets/certificates/java-programming-fundamentals.pdf', 'CERTIFICATION', '/assets/certificate-thumbs/java-programming-fundamentals.png'],
  ['Programming Fundamentals: Systematic Design with Pseudocode', '/assets/certificates/programming-fundamentals-pseudocode.pdf', 'CERTIFICATION', '/assets/certificate-thumbs/programming-fundamentals-pseudocode.png'],
  ['National Student Research Symposium — Face Authenticated Banking System', '/assets/certificates/srs-face-authenticated-banking.pdf', 'RESEARCH / ACHIEVEMENT', '/assets/certificate-thumbs/srs-face-authenticated-banking.png'],
]
