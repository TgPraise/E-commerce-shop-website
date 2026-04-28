import { Shield, FileCheck, Users, Anchor, SearchCheck, AlertTriangle, ClipboardList, UserCheck, ShieldCheck, FileSearch} from "lucide-react";
import securityConsulting1 from "../assets/services-imgs/security-consultancy.webp";
import securityConsulting2 from "../assets/services-imgs/security-consulting-2.webp";
import programdevelopment1 from "../assets/services-imgs/security-consulting-1.webp";
import security from "../assets/services-imgs/security-investigation-1.webp";
import cyber from "../assets/services-imgs/security-investigation-2.webp";
import escort from "../assets/services-imgs/escort.webp";
import emergency from "../assets/services-imgs/emergency-response.webp";
import audit from "../assets/services-imgs/audit.webp";
import maritime from "../assets/services-imgs/maritime.webp";
import event from "../assets/services-imgs/event.webp";
  

export const services = [
  {
    id: "security-consulting",
    title: "Security and safety consultancy.",
    shortDescription: "Security and safety consultancy helps organizations identify risks and protect people, assets, and operations through effective safety and security measures.",
    fullDescription: "Security and safety consultancy is a professional service that helps organizations identify risks, prevent hazards, and protect people, assets, and information. It involves assessing potential threats, developing effective safety measures, and implementing security systems to ensure a safe and secure environment in compliance with industry standards such as ISO guidelines.",
    icon: Shield,
    image1: securityConsulting1,
    features: [
      "Risk Assessment and Mitigation",
      "Safety Planning and Protocol Development",
      "Security Systems Design and Implementation",
      "Compliance Management and Regulatory Guidance",
      "Training & Awareness",
    ],
  },
  {
    id: "safety-investigation",
    title: "Security and safety Investigation.",
    shortDescription: "We carry out thorough security and safety investigations to uncover risks, incidents, and vulnerabilities affecting your people, assets, and operations.",
    fullDescription: "We help you get clear answers when something goes wrong—or before it does. Our security and safety investigation service focuses on identifying the root causes of incidents, breaches, or unsafe conditions within your organization. We carefully examine every detail, from on-site inspections to data analysis, so you understand what happened, why it happened, and how to prevent it from happening again. Our goal is not just to find problems, but to provide you with practical, reliable solutions that strengthen your overall safety and security system.",
    icon: SearchCheck,
    image1: securityConsulting2,
    features: [
      "Incident Investigation and Root Cause Analysis",
      "Risk Identification and Vulnerability Assessment",
      "Evidence-Based Reporting and Recommendations",
      "Preventive Recommendations and Corrective Action Planning",
      "On-Site & Digital Analysis",
    ],
  },
  {
    id: "program-development",
    title: "Security and safety program developer.",
    shortDescription: "We design customized security and safety programs that protect your people, assets, and daily operations.",
    fullDescription: "We work with you to build structured safety and security programs tailored to your organization. From policies and procedures to emergency plans, we create systems that help you prevent risks, respond effectively, and stay fully prepared. Our programs are designed to be practical, actionable, and compliant with industry standards, ensuring that your organization is protected against a wide range of safety and security threats.",
    icon: ClipboardList,
    image1: programdevelopment1,
    features: [
      "Customized Program Design and Development",
      "Policy & Procedure Development",
      "Emergency Planning",
      "Risk-Based Approach to Program Design",
      "Continuous Improvement and Program Evaluation",
    ],
  },
  {
    id: "physical-security",
    title: "Physical security.",
    shortDescription: "We provide physical security solutions that protect your premises, people, and assets from unauthorized access and threats.",
    fullDescription: "We help you secure your environment with reliable physical security measures tailored to your needs. From access control to surveillance systems, we design and implement solutions that prevent intrusion, monitor activities, and give you full control over your space.",
    icon: ShieldCheck,
    image1: security,
    features: [
      "Access Control Systems",
      "Surveillance Solutions",
      "Perimeter Protection",
      "Security Assessment and Vulnerability Analysis",
      "Integrated Security Design",
    ],
  },
  {
    id: "escorts-services",
    title: "Escorts services.",
    shortDescription: "We provide professional escort services to ensure the safe movement of individuals, assets, and sensitive operations.",
    fullDescription: "We support your safety during movements that require extra protection. Whether it’s personnel, high-value assets, or sensitive assignments, we provide trained escorts who ensure secure transit, minimize risks, and maintain full situational awareness from start to finish.",
    icon: UserCheck,
    image1: escort,
    features: [
      "Personal Protection Escorts",
      "Asset Escort Services",
      "Route Planning & Risk Assessment",
      "Trained Security Personnel ",
      "Real-Time Monitoring and Communication",
    ],
  },
  {
    id: "emergency-response",
    title: "Emergency Response Planning",
    shortDescription: "Develop and test emergency response procedures to ensure organizational readiness for any crisis.",
    fullDescription: "Our emergency response planning services help organizations prepare for, respond to, and recover from critical incidents. We develop comprehensive plans, conduct realistic drills, and train your teams to respond effectively under pressure.",
    icon: AlertTriangle,
    image1: emergency,
    features: [
      "Emergency response plan development",
      "Crisis management frameworks",
      "Tabletop and full-scale drills",
      "Business continuity planning",
      "Post-incident review and lessons learned",
    ],
  },
  {
    id: "Cyber-security-management.",
    title: "Cyber Security Management",
    shortDescription: "We provide cybersecurity management to protect your systems, data, and networks from digital threats and attacks.",
    fullDescription: "We help you secure your digital environment by managing and monitoring your cybersecurity systems. From preventing unauthorized access to detecting threats early, we ensure your data, networks, and operations stay safe from cyber risks and disruptions.",
    icon: Shield,
    image1: cyber,
    features: [
      "Threat Monitoring and Incident Response",
      "Data Protection and Encryption",
      "Network Security Management",
      "Risk Assessment and Vulnerability Management",
      "Incident Response Planning and Execution",
    ],
  },
  {
    id: "event-security",
    title: "Event security.",
    shortDescription: "We provide event security services that ensure the safety of guests, staff, and property at any type of event.",
    fullDescription: "Our event security services are designed to provide comprehensive protection for all attendees, staff, and assets during your event. We implement strategic security measures to prevent incidents and ensure a safe and enjoyable experience for everyone involved.",
    icon: Users,
    image1: event,
    features: [
      "Crowd Control Management",
      "Access Control and Screening",
      "Emergency Response Planning",
      "On-site security personnel",
      "Surveillance and Monitoring",
    ],
  },
  {
    id: "maritime-port-security",
    title: "Maritime and port security.",
    shortDescription: "We provide maritime and port security services to protect vessels, ports, and coastal operations from threats and illegal activities.",
    fullDescription: "We help ensure safe and secure maritime operations by safeguarding ports, ships, and coastal environments. Our services focus on preventing unauthorized access, monitoring port activities, and reducing risks associated with maritime operations so your assets and personnel remain protected at all times.",
    icon: Anchor,
    image1: maritime,
    features: [
      "Port Access Control",
      "Vessel Security Support",
      "Cargo Protection",
      "Surveillance & Monitoring",
      "Risk & Threat Assessment",
    ],
  },
  {
    id: "iso-systems-audit",
    title: "ISO systems audit",
    shortDescription: "We conduct ISO systems audits to ensure your organization meets required international safety and quality standards.",
    fullDescription: "We help you stay compliant and improve performance through detailed ISO systems audits. Our process evaluates your safety, security, and operational systems to ensure they align with international standards, identify gaps, and strengthen overall efficiency and compliance.",
    icon: FileSearch,
    image1: audit,
    features: [
      "Compliance Assessment",
      "System Evaluation",
      "Gap Analysis",
      "Corrective Action Recommendations",
      "Audit Reporting",
    ],
  },
];

export const otherServices = [ 
  "Security guard & safety officers deployment",
  "Electronic gadget & installation service", 
  "V.I.P protection",
  "Security logistics & safety equipment outsourcing",
  "Journey management",
  "Armed escorts services",
  "Information security management", 
  "Aviation security",
  "Spy police guards", 
  "Spy police drivers", 
  "Forensic investigation service",
  "Security background checks", 
  "Security & safety training", 
  "Electronic access control", 
  "Intelligence services", 
  "Patrol services", 
  "Close body protection", 
  "Dog service", 
  "Fire & incident emergency response", 
  "CCTV & fire alarm installation, maintenance & monitoring",
  "Drone service",
  "Manpower outsourcing", 
  "Monitoring & compliance consultancy", 
  "ISO systems certification", 
];

export const certifications = [
  { name: "ISO 45001:2018", issuer: "International Organization for Standardization", description: "Occupational Health & Safety Management" },
  { name: "ISO 14001:2015", issuer: "International Organization for Standardization", description: "Environmental Management Systems" },
  { name: "ISO 9001:2015", issuer: "International Organization for Standardization", description: "Quality Management Systems" },
  { name: "NEBOSH IGC", issuer: "National Examination Board in Occupational Safety and Health", description: "International General Certificate" },
  { name: "OSHA Certified", issuer: "Occupational Safety and Health Administration", description: "Workplace Safety Standards" },
  { name: "ASIS CPP", issuer: "ASIS International", description: "Certified Protection Professional" },
  { name: "NFPA Compliance", issuer: "National Fire Protection Association", description: "Fire Safety Standards" },
  { name: "IOSH Managing Safely", issuer: "Institution of Occupational Safety and Health", description: "Safety Management Certification" },
];

export const teamMembers = [
  {
    name: "Mr Imoh Udofa",
    role: "CEO / Founder",
    bio: "A seasoned safety and security professional with over 15 years of experience in the oil & gas, construction, and maritime industries.",
    isFounder: true,
  },
  {
    name: "Amaka Okonkwo",
    role: "Head of Safety Operations",
    bio: "Expert in HSE management systems with 10+ years in the energy sector.",
    isFounder: false,
  },
  {
    name: "David Nwosu",
    role: "Senior Security Consultant",
    bio: "Former military intelligence officer specializing in corporate security risk assessment.",
    isFounder: false,
  },
  {
    name: "Grace Eze",
    role: "Training & Development Lead",
    bio: "Certified safety trainer with expertise in curriculum development and adult learning.",
    isFounder: false,
  },
  {
    name: "Emeka Obi",
    role: "Fire Safety Specialist",
    bio: "NFPA-certified fire protection engineer with extensive field experience.",
    isFounder: false,
  },
];