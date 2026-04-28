import {
  Activity,
  Shield,
  Smile,
  Sparkles,
  Wand2,
  Stethoscope,
  type LucideIcon,
} from "lucide-react";

import rootCanalImg from "@/assets/treatments/root-canal.jpg";
import implantsImg from "@/assets/treatments/implants.webp";
import alignersImg from "@/assets/treatments/aligners.jpg";
import whiteningImg from "@/assets/treatments/whitening.jpg";
import smileMakeoverImg from "@/assets/treatments/smile-makeover.jpg";
import gumTreatmentImg from "@/assets/treatments/gum-treatment.webp";

export type Treatment = {
  slug: string;
  title: string;
  icon: LucideIcon;
  image: string;
  description: string;
  long: string;
  price: string;
  duration: string;
};

export const TREATMENTS: Treatment[] = [
  {
    slug: "root-canal",
    title: "Root Canal Treatment",
    icon: Activity,
    image: rootCanalImg,
    description: "Painless single-sitting root canals using rotary endodontics and digital imaging.",
    long: "Modern rotary endodontics, apex locators and microscopic precision let us save your natural tooth in a single, comfortable visit.",
    price: "₹3,500",
    duration: "45–60 min",
  },
  {
    slug: "implants",
    title: "Dental Implants",
    icon: Shield,
    image: implantsImg,
    description: "Permanent tooth replacement with premium global implant systems and lifetime warranty.",
    long: "Replace missing teeth with titanium implants from globally trusted brands — a natural look, full chewing strength and a lifetime warranty.",
    price: "₹25,000",
    duration: "Multi-visit",
  },
  {
    slug: "braces-aligners",
    title: "Braces & Aligners",
    icon: Smile,
    image: alignersImg,
    description: "Clear aligners and modern braces for a perfectly aligned, confident smile.",
    long: "Choose between metal, ceramic or fully invisible aligners. We plan every smile digitally so you see your future smile before treatment begins.",
    price: "₹35,000",
    duration: "6–18 months",
  },
  {
    slug: "teeth-whitening",
    title: "Teeth Whitening",
    icon: Sparkles,
    image: whiteningImg,
    description: "In-clinic laser whitening that brightens teeth up to 6 shades in a single visit.",
    long: "Professional, enamel-safe whitening that lifts coffee, tea and tobacco stains in under an hour — for a brilliant, confident smile.",
    price: "₹6,500",
    duration: "60 min",
  },
  {
    slug: "smile-makeover",
    title: "Smile Makeover",
    icon: Wand2,
    image: smileMakeoverImg,
    description: "Custom veneers, crowns and contouring designed around your unique facial features.",
    long: "A bespoke combination of veneers, crowns and gum contouring — digitally designed to complement your face shape, smile line and personality.",
    price: "₹12,000",
    duration: "2–3 visits",
  },
  {
    slug: "gum-treatment",
    title: "Gum Treatment",
    icon: Stethoscope,
    image: gumTreatmentImg,
    description: "Laser gum therapy and deep cleaning for healthy, pink and pain-free gums.",
    long: "Advanced laser periodontal therapy treats bleeding gums, recession and bad breath gently — with zero cuts and minimal downtime.",
    price: "₹2,500",
    duration: "30–45 min",
  },
];
