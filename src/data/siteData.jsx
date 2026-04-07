import { Shield, Eye, FileCheck, Users, Building, Flame, Lock, AlertTriangle, HardHat } from "lucide-react";
  

export const services = [
  {
    id: "safety-audits",
    title: "Safety Audits & Inspections",
    shortDescription: "Comprehensive safety audits to identify hazards and ensure compliance with local and international regulations.",
    fullDescription: "Our rigorous safety audit methodology examines every aspect of your operations to identify potential hazards, regulatory gaps, and areas for improvement. We deliver actionable reports with prioritized recommendations that help you maintain the highest safety standards across your entire organization.",
    icon: FileCheck,
    features: [
      "Full facility safety inspections",
      "Regulatory compliance gap analysis",
      "Hazard identification and risk ranking",
      "Detailed remediation roadmaps",
      "Follow-up verification audits",
    ],
  },
  {
    id: "security-consulting",
    title: "Security Risk Assessment",
    shortDescription: "Strategic security assessments to protect your people, assets, and operations from evolving threats.",
    fullDescription: "Our security risk assessment service provides a comprehensive evaluation of your organization's vulnerability to internal and external threats. We combine on-site analysis with intelligence-driven methodologies to deliver a security posture that is both resilient and proportionate to your risk profile.",
    icon: Shield,
    features: [
      "Threat and vulnerability analysis",
      "Physical security evaluations",
      "Access control system review",
      "Security personnel assessment",
      "Executive protection planning",
    ],
  },
  {
    id: "fire-safety",
    title: "Fire Safety Management",
    shortDescription: "End-to-end fire safety solutions including prevention, detection, and emergency response planning.",
    fullDescription: "We provide comprehensive fire safety management services that cover prevention strategies, detection systems evaluation, emergency response planning, and staff training. Our fire safety experts ensure your organization meets all regulatory requirements while minimizing fire risk.",
    icon: Flame,
    features: [
      "Fire risk assessments",
      "Emergency evacuation planning",
      "Fire detection system audits",
      "Fire safety training programs",
      "Regulatory compliance certification",
    ],
  },
  {
    id: "hse-management",
    title: "HSE Management Systems",
    shortDescription: "Design and implement robust Health, Safety & Environment management systems tailored to your industry.",
    fullDescription: "Our HSE management system consultancy helps organizations build, implement, and maintain world-class health, safety, and environment frameworks. We align your systems with ISO 45001, ISO 14001, and industry-specific standards to create a culture of continuous improvement.",
    icon: HardHat,
    features: [
      "HSE policy development",
      "Management system design (ISO 45001 / ISO 14001)",
      "Incident investigation and reporting",
      "Performance monitoring and KPI frameworks",
      "Management review and continuous improvement",
    ],
  },
  {
    id: "surveillance-systems",
    title: "Surveillance & Monitoring",
    shortDescription: "Design, installation, and management of advanced surveillance and monitoring solutions.",
    fullDescription: "We design and implement state-of-the-art surveillance and monitoring systems tailored to your specific security requirements. From CCTV networks to integrated monitoring platforms, we ensure comprehensive coverage and real-time threat detection capabilities.",
    icon: Eye,
    features: [
      "CCTV system design and specification",
      "Access control integration",
      "Remote monitoring solutions",
      "System performance audits",
      "Technology upgrade advisory",
    ],
  },
  {
    id: "emergency-response",
    title: "Emergency Response Planning",
    shortDescription: "Develop and test emergency response procedures to ensure organizational readiness for any crisis.",
    fullDescription: "Our emergency response planning services help organizations prepare for, respond to, and recover from critical incidents. We develop comprehensive plans, conduct realistic drills, and train your teams to respond effectively under pressure.",
    icon: AlertTriangle,
    features: [
      "Emergency response plan development",
      "Crisis management frameworks",
      "Tabletop and full-scale drills",
      "Business continuity planning",
      "Post-incident review and lessons learned",
    ],
  },
  {
    id: "training",
    title: "Safety & Security Training",
    shortDescription: "Professional training programs that empower your workforce with essential safety and security competencies.",
    fullDescription: "We deliver targeted training programs designed to elevate your team's safety awareness and security capabilities. Our courses are developed by industry professionals and can be customized to address your organization's specific risks and operational context.",
    icon: Users,
    features: [
      "Workplace safety awareness training",
      "First aid and emergency response",
      "Security guard certification courses",
      "Management-level safety leadership",
      "Customized industry-specific programs",
    ],
  },
  {
    id: "facility-security",
    title: "Facility Security Design",
    shortDescription: "Integrate security into the design of your facilities from the ground up for maximum protection.",
    fullDescription: "Our facility security design service integrates protective measures into the architectural and operational planning of your facilities. We apply Crime Prevention Through Environmental Design (CPTED) principles and industry best practices to create secure environments that don't compromise functionality or aesthetics.",
    icon: Building,
    features: [
      "CPTED analysis and implementation",
      "Perimeter security design",
      "Secure access point planning",
      "Lighting and landscape security review",
      "Integration with building management systems",
    ],
  },
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
    name: "Engr. Chibueze Archivers",
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