export const CATEGORIES = [
  { key: "all", label: "All work", blurb: "A selection of products across every category we design and engineer." },
  { key: "saas", label: "SaaS", blurb: "Subscription software products with multi-tenancy, billing, and analytics built in." },
  { key: "marketplace", label: "Marketplace", blurb: "Two-sided platforms connecting buyers, sellers, and operators." },
  { key: "ecommerce", label: "E-commerce", blurb: "High-performance online stores designed for fast browsing and smooth checkout." },
  { key: "erp", label: "ERP & CRM", blurb: "Mission-critical business systems for operations, sales, and resource management." },
  { key: "edtech", label: "EdTech & LMS", blurb: "Modern learning management systems, live virtual classrooms, and examination engines." }
];

export const CAT_LABEL = {
  ecommerce: "E-commerce",
  saas: "SaaS",
  marketplace: "Marketplace",
  erp: "ERP & CRM",
  edtech: "EdTech & LMS"
};

export const PROJECTS = [
  {
    id: "billwise",
    cat: "saas",
    name: "Billwise",
    text: "Subscription billing and invoicing platform for agencies, with recurring plans, tax automation, and instant payment reminders.",
    tags: ["Multi-tenant", "Recurring billing", "Financial Reports", "Stripe API"],
    client: "FinTech Scaleup",
    year: "2024",
    impact: "+45% cashflow turnaround"
  },
  {
    id: "planfolio",
    cat: "saas",
    name: "Planfolio",
    text: "Project and resource planning workspace for professional consulting teams, featuring Gantt timelines, capacity views, and timesheets.",
    tags: ["Team Roles", "Timesheets", "Live Dashboards", "Kanban Engine"],
    client: "Global Advisory Group",
    year: "2024",
    impact: "Used by 12,000+ daily consultants"
  },
  {
    id: "clinicflow",
    cat: "saas",
    name: "Clinicflow",
    text: "Smart appointment booking and electronic medical records (EMR) for independent clinics, with SMS reminders and automated billing.",
    tags: ["Scheduling", "HIPAA Ready", "Patient Records", "Auto Reminders"],
    client: "Healthcare Network",
    year: "2023",
    impact: "Reduced patient no-shows by 60%"
  },
  {
    id: "craftly-market",
    cat: "marketplace",
    name: "Craftly Market",
    text: "Artisan e-commerce marketplace where independent makers host custom storefronts and receive automated split payouts.",
    tags: ["Vendor Storefronts", "Split Payments", "Reviews & Ratings", "Escrow"],
    client: "Artisan Guild Collective",
    year: "2024",
    impact: "$3.5M GMV processed"
  },
  {
    id: "tradeline-b2b",
    cat: "marketplace",
    name: "Tradeline B2B",
    text: "Industrial wholesale marketplace connecting manufacturers with retailers, featuring dynamic RFQs, bulk volume pricing, and shipping tracking.",
    tags: ["Custom Quotes", "Bulk Pricing", "Freight Logistics", "KYB Verification"],
    client: "Manufacturing Alliance",
    year: "2023",
    impact: "Over 800 certified suppliers"
  },
  {
    id: "rentora",
    cat: "marketplace",
    name: "Rentora",
    text: "Heavy equipment & machinery rental marketplace with live availability calendars, security deposits, and contractor identity verification.",
    tags: ["Bookings Calendar", "Security Deposits", "ID Verification", "Damage Claims"],
    client: "Heavy Equipment Syndicate",
    year: "2024",
    impact: "Over 45,000 rental hours booked"
  },
  {
    id: "threadhouse",
    cat: "ecommerce",
    name: "Threadhouse",
    text: "Direct-to-consumer apparel brand with interactive 3D size guides, synchronized wishlists, and lightning-quick one-page checkout.",
    tags: ["Headless Next.js", "Sub-second Load", "Wishlists", "Cart Recovery"],
    client: "Apparel Brand Co.",
    year: "2024",
    impact: "+28% checkout conversion rate"
  },
  {
    id: "freshcrate",
    cat: "ecommerce",
    name: "FreshCrate",
    text: "Hyper-local grocery delivery storefront with delivery time slot booking, dynamic item substitutions, and automatic repeat subscriptions.",
    tags: ["Slot Booking", "Repeat Subscriptions", "Mobile First", "Route Sync"],
    client: "Organic Retailers Group",
    year: "2023",
    impact: "15,000 orders/day at peak"
  },
  {
    id: "gearlane",
    cat: "ecommerce",
    name: "Gearlane",
    text: "Consumer electronics superstore with an extensive 50,000+ SKU catalog, side-by-side spec comparisons, and real-time stock sync.",
    tags: ["Product Compare", "Elasticsearch", "Filters", "ERP Sync"],
    client: "Gearlane Tech Retail",
    year: "2023",
    impact: "Search latency reduced to 30ms"
  },
  {
    id: "stockline-erp",
    cat: "erp",
    name: "Stockline ERP",
    text: "Comprehensive inventory, procurement, and sales orders platform for nationwide distribution, with wireless barcode scanning and low-stock alerts.",
    tags: ["Warehouse Barcodes", "Procurement", "Live Reordering", "Multi-branch"],
    client: "Apex Distribution Ltd.",
    year: "2024",
    impact: "99.8% inventory audit accuracy"
  },
  {
    id: "clientgrid-crm",
    cat: "erp",
    name: "Clientgrid CRM",
    text: "Visual deal pipeline, automated follow-up cadences, and instant proposal generator designed specifically for field sales teams.",
    tags: ["Pipeline Stages", "PDF Quotations", "Follow-up Automations", "VoIP Sync"],
    client: "SaaS Enterprise Sales",
    year: "2024",
    impact: "Cut proposal generation time by 75%"
  },
  {
    id: "peopledesk",
    cat: "erp",
    name: "PeopleDesk",
    text: "Modern HR and workforce portal covering geo-tagged attendance, flexible leave policies, approval ladders, and automated salary payroll batches.",
    tags: ["Geo Attendance", "Leave Approval", "Payroll Engine", "Tax Slips"],
    client: "Global Logistics Corp",
    year: "2023",
    impact: "Managing 3,500+ employees"
  },
  {
    id: "learnloop-lms",
    cat: "edtech",
    name: "Learnloop LMS",
    text: "Modern learning management system for enterprise training, complete with interactive video player, gated quizzes, student progress, and certs.",
    tags: ["Video Streaming", "Interactive Quizzes", "Certificates", "Gamification"],
    client: "Corporate Training Academy",
    year: "2024",
    impact: "Completed 250,000+ course lessons"
  },
  {
    id: "classroom-live",
    cat: "edtech",
    name: "Classroom Live",
    text: "Virtual live classroom ecosystem with interactive whiteboard, automated student attendance, cloud recordings, and homework grading.",
    tags: ["WebRTC Video", "Live Whiteboard", "Cloud Recordings", "Grading Rubrics"],
    client: "EdTech Institute",
    year: "2024",
    impact: "Over 500,000 hours of live classes"
  },
  {
    id: "examprep-hub",
    cat: "edtech",
    name: "ExamPrep Hub",
    text: "National competitive exam test engine featuring timed mock exams, negative marking rules, percentile ranking analytics, and question banks.",
    tags: ["Mock Tests", "Percentile Analytics", "Question Bank", "Cheat Detection"],
    client: "National Test Foundation",
    year: "2023",
    impact: "Handled 80,000 concurrent test-takers"
  }
];

export const FEATURED_PROJECT_IDS = ["billwise", "craftly-market", "learnloop-lms"];
