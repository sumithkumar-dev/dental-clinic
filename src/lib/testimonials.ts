export type Testimonial = {
  name: string;
  initials: string;
  color: string;
  date: string;
  text: string;
  treatment: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Priya Reddy",
    initials: "PR",
    color: "oklch(0.7 0.15 30)",
    date: "2 weeks ago",
    text: "Got my smile makeover done at SmileCraft and I cannot stop smiling! Dr. Rajesh is incredibly patient and explained every step. The clinic is spotless and the staff treats you like family. Easily the best dental clinic in Jubilee Hills.",
    treatment: "Smile Makeover",
  },
  {
    name: "Arjun Mehta",
    initials: "AM",
    color: "oklch(0.6 0.16 250)",
    date: "1 month ago",
    text: "I was terrified of root canals after a bad experience years ago. Dr. Rajesh did mine in a single sitting and I felt absolutely nothing. Honestly painless. Highly recommend SmileCraft to anyone with dental anxiety.",
    treatment: "Root Canal",
  },
  {
    name: "Sneha Iyer",
    initials: "SI",
    color: "oklch(0.65 0.14 320)",
    date: "3 weeks ago",
    text: "Finished my Invisalign treatment here. The 3D scan and digital preview blew my mind — I literally saw my final smile before starting. 14 months later, the result is exactly what they promised. Worth every rupee.",
    treatment: "Clear Aligners",
  },
  {
    name: "Vikram Naidu",
    initials: "VN",
    color: "oklch(0.6 0.15 150)",
    date: "1 week ago",
    text: "Got two implants done last year and they feel exactly like my natural teeth. Eating, talking, everything is perfect. The whole process was smooth and the follow-up care has been excellent. Thank you doctor!",
    treatment: "Dental Implants",
  },
  {
    name: "Kavya Sharma",
    initials: "KS",
    color: "oklch(0.65 0.16 60)",
    date: "2 months ago",
    text: "Took my 7-year-old daughter for a cavity filling. She was so scared but Dr. Rajesh was amazing with her — even gave her a little reward at the end. She actually asks when we're going back! Beautiful clinic, great with kids.",
    treatment: "Pediatric Care",
  },
  {
    name: "Rohit Kapoor",
    initials: "RK",
    color: "oklch(0.6 0.15 200)",
    date: "5 days ago",
    text: "Laser teeth whitening session was just 45 minutes and the difference is night and day. Six shades brighter, no sensitivity at all. The clinic itself feels like a 5-star hotel. Loved the experience.",
    treatment: "Teeth Whitening",
  },
  {
    name: "Anjali Pillai",
    initials: "AP",
    color: "oklch(0.65 0.15 0)",
    date: "3 weeks ago",
    text: "Had bleeding gums for years and tried everything. Dr. Rajesh did laser gum treatment and it's been months — zero bleeding, zero bad breath. He really knows what he's doing. Genuinely grateful.",
    treatment: "Gum Treatment",
  },
  {
    name: "Karthik Subramanian",
    initials: "KS",
    color: "oklch(0.55 0.18 270)",
    date: "1 month ago",
    text: "Booked an appointment via WhatsApp on a Sunday and got a slot Monday morning. Punctual, professional, transparent pricing — no upselling whatsoever. This is how every clinic should be run.",
    treatment: "Consultation",
  },
];
