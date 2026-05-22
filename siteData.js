// ============================================================
// POLAR BEAR DETAILING — SITE DATA
// ============================================================
// Edit this file to update all content on your website.
// No need to touch index.html, styles.css, or script.js!
// ============================================================

const SITE_DATA = {

  // ── Contact Information ──────────────────────────────────
  business: {
    name: "Polar Bear Detailing",
    tagline: "Premium Care • Est. 2026",
    phone: "747-270-4553",
    phoneFormatted: "(747) 270-4553",
    email: "", // Add your email here, e.g. "info@polarbeardetailing.com"
    instagram: "POLAR_BEAR_DETAILING",
    instagramUrl: "https://www.instagram.com/POLAR_BEAR_Detailing",
    facebook: "", // Add Facebook URL if you have one
    tiktok: "",   // Add TikTok URL if you have one
    logo: "Logo/photo_2026-04-29_18-53-47 (1).png",
  },

  // ── Hero Section ─────────────────────────────────────────
  hero: {
    title: "Premium Mobile Detailing",
    subtitle: "Arctic-Clean Results, At Your Door",
    description: "Professional mobile auto detailing serving Marlboro, Old Bridge & surrounding areas. We bring the shine to you.",
    ctaText: "Schedule a Visit",
    heroImage: "images/hero-car.png",
  },

  // ── Trust Badges ─────────────────────────────────────────
  trustBadges: [
    { icon: "✓", text: "Fully Insured", desc: "Fully insured for your peace of mind" },
    { icon: "🌿", text: "Eco-Friendly", desc: "Premium pH-neutral & eco-safe products" },
    { icon: "⚡", text: "Express Service", desc: "Same-day availability when possible" },
    { icon: "⭐", text: "5-Star Service", desc: "Consistent 5-star rated results" },
  ],

  // ── Statistics (animated counters) ───────────────────────
  stats: [
    { number: 5, suffix: "★", label: "Average Rating" },
    { number: 100, suffix: "%", label: "Satisfaction" },
    { number: 7, suffix: "/7", label: "Days Available" },
    { number: 1, suffix: "", label: "Free Quotes" },
  ],

  // ── Why Choose Us ───────────────────────────────────────
  whyUs: [
    { icon: "🏠", title: "We Come to You", desc: "No need to drive anywhere. We bring our professional-grade equipment right to your home, office, or anywhere you need us." },
    { icon: "💎", title: "Premium Products Only", desc: "We use only top-tier, pH-neutral, and eco-friendly products that protect your paint while delivering a showroom finish." },
    { icon: "🔒", title: "Fully Insured", desc: "Your vehicle is in safe hands. We're fully insured and trained to handle everything from daily drivers to luxury cars." },
    { icon: "⚡", title: "Same-Day Available", desc: "Need it done today? We offer same-day appointments when available. Text us and we'll get you on the schedule." },
  ],

  // ── How It Works ────────────────────────────────────────
  howItWorks: [
    { step: "01", title: "Book Your Service", desc: "Call, text, or DM us on Instagram. Tell us about your vehicle and pick a package." },
    { step: "02", title: "We Come to You", desc: "Our fully-equipped mobile unit arrives at your location at the scheduled time." },
    { step: "03", title: "Enjoy the Results", desc: "Sit back and relax while we transform your car. It'll look and smell brand new." },
  ],

  // ── Services ─────────────────────────────────────────────
  services: [
    {
      name: "Interior Detail",
      icon: "🧹",
      description: "A deep clean that restores your cabin to like-new condition.",
      items: [
        "Full Vacuum & Debris Removal",
        "Dashboard, Trim & Console Wipe-Down",
        "Seats Cleaned & Conditioned",
        "Windows & Mirrors Polished",
        "Door Jambs & Crevice Detail",
      ],
    },
    {
      name: "Exterior Detail",
      icon: "✨",
      description: "Hand wash and protection that brings back the showroom shine.",
      items: [
        "Foam Cannon Pre-Soak",
        "Hand Wash with Premium Shampoo",
        "Wheels, Tires & Wheel Wells",
        "Tire Dressing",
        "Exterior Windows Cleaned",
        "Dry & Final Inspection",
      ],
    },
    {
      name: "Full Detail",
      icon: "💎",
      description: "The complete transformation — inside and out.",
      items: [
        "Everything in Interior Detail",
        "Everything in Exterior Detail",
        "Shampoo Carpets & Floor Mats",
        "Leather Conditioning",
        "Paint Decontamination",
        "Spray Sealant Protection",
      ],
      popular: true,
    },
  ],

  pricingNote: "Every vehicle is different. We price based on size, condition, and scope of work — so you only pay for what you need. Our rates are competitive and fair. Text or call us for a quick, no-obligation quote.",

  // ── Gallery ──────────────────────────────────────────────
  // Items with a `before` field will open a before/after comparison slider.
  // Items without `before` just open the image in a regular lightbox.
  gallery: [
    { before: "images/before1.png", after: "images/after1.png", caption: "Full Exterior Detail" },
    { before: "images/before-interior.png", after: "images/gallery-interior.png", caption: "Interior Detail" },
    { before: "images/before-ceramic.png", after: "images/gallery-ceramic.png", caption: "Ceramic Coating" },
    { before: "images/before-exterior.png", after: "images/hero-car.png", caption: "Exterior Shine" },
    // Add more:
    // { before: "images/before2.jpg", after: "images/after2.jpg", caption: "Interior Revival" },
    // { after: "images/your-photo.jpg", caption: "Description" },
  ],

  // ── Reviews ──────────────────────────────────────────────
  // Add real reviews here — they'll show in the carousel
  reviews: [
    {
      name: "Michael R.",
      location: "Marlboro, NJ",
      stars: 5,
      text: "Incredible job on my BMW! The paint looks better than when I bought it. Super convenient that they come right to my driveway. Will definitely be a regular customer.",
    },
    {
      name: "Sarah K.",
      location: "Old Bridge, NJ",
      stars: 5,
      text: "I've tried several detailers in the area and Polar Bear is by far the best. They're thorough, professional, and my interior has never looked this clean. Highly recommend!",
    },
    {
      name: "David L.",
      location: "Sayreville, NJ",
      stars: 5,
      text: "Got the ceramic coating done and wow — my car literally repels water now. The team was on time, explained everything, and the results speak for themselves. 10/10.",
    },
    {
      name: "Jennifer M.",
      location: "Holmdel, NJ",
      stars: 5,
      text: "As a busy mom, I love that they come to me. My minivan went from chaos to showroom-clean. The kids couldn't believe it was the same car! Amazing service.",
    },
    // Add more reviews:
    // { name: "Name", location: "City", stars: 5, text: "Review text..." },
  ],

  // ── Service Areas ────────────────────────────────────────
  serviceAreas: [
    { area: "Marlboro & Old Bridge", detail: "Marlboro, Morganville, Old Bridge & nearby", primary: true },
    { area: "Bayshore Area", detail: "Matawan, Aberdeen, Holmdel, Hazlet & nearby" },
    { area: "Middlesex Route", detail: "Sayreville, Parlin, East Brunswick & nearby" },
  ],

  // ── FAQ ──────────────────────────────────────────────────
  faq: [
    {
      q: "Do you need access to water and electricity?",
      a: "Yes, we require access to a standard outdoor water faucet (spigot) and a regular 120V electrical outlet within range of your driveway. We bring our own professional-grade hoses, extension cords, and equipment, so all you need to provide is the access!"
    },
    {
      q: "How long does a detailing service take?",
      a: "It depends on the package and the vehicle's size. An Interior Detail usually takes 2 to 3 hours, an Exterior Detail takes about 1.5 to 2 hours, and a Full Detail can take 3 to 5 hours. We take our time to ensure perfection."
    },
    {
      q: "What is your weather policy?",
      a: "Since we operate outdoors, heavy rain or freezing temperatures may prevent us from doing exterior work. If the weather is bad, we will contact you to reschedule for the next available slot at no extra charge, or we can focus on interior detailing if you have a covered garage."
    },
    {
      q: "How do I pay for the service?",
      a: "We accept Cash, Venmo, and Zelle. Payment is only due after the job is completed and you have fully inspected your vehicle and approved our work."
    }
  ],

  // ── SEO Content ──────────────────────────────────────────
  seoText: "Looking for the best mobile auto detailing in Marlboro or Old Bridge, NJ? Polar Bear Detailing is your local go-to professional service. We specialize in bringing showroom-quality exterior washes, paint protection, and deep interior cleaning right to your driveway. Whether you are in Morganville, Matawan, Holmdel, Sayreville, or surrounding Middlesex and Monmouth County towns, we make car care effortless. Contact us today for a free estimate!",

  // ── Footer ───────────────────────────────────────────────
  footer: {
    copyright: "© 2026 Polar Bear Detailing. All rights reserved.",
    tagline: "Marlboro & Old Bridge's Premier Mobile Auto Detailing",
  },
};
