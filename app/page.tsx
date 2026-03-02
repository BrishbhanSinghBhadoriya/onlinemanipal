"use client";

import { useState, ChangeEvent, useEffect } from "react";
import InquiryModal from "@/components/InquiryModal";

interface FormData {
  fullName: string;
  email: string;
  mobile: string;
  course: string;
  state: string;
}


interface RankingItem {
  logo: string;
  text: string;
}

interface CourseItem {
  title: string;
  duration: string;
  rating: string;
  students: string;
  tag: string;
  color: string;
}

interface AdvantageItem {
  icon: string;
  title: string;
}

interface ManipalAdvItem {
  icon: string;
  title: string;
  desc: string;
}

interface TestimonialItem {
  text: string;
  name: string;
  course: string;
  img: string;
}

export default function OnlineManipalPage() {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    mobile: "",
    course: "",
    state: "",
  });
  const masterCourses = [
  { title: "MBA", tag: "Most Popular", duration: "2 Years", rating: "4.8", students: "12,400", img: "/MBA.png" },
  { title: "MCA", tag: "Trending",     duration: "2 Years", rating: "4.7", students: "9,800",  img: "/mca.png" },
  { title: "M.Com", tag: "Finance",    duration: "2 Years", rating: "4.6", students: "7,200",  img: "/MCOM.png" },
  { title: "MSc", tag: "Science",      duration: "2 Years", rating: "4.7", students: "5,500",  img: "/ma.png" },
  { title: "MA",   tag: "Arts",        duration: "2 Years", rating: "4.5", students: "6,100",  img: "/ma.png" },
];

const bachelorCourses = [
  { title: "BBA",   tag: "Most Popular", duration: "3 Years", rating: "4.8", students: "15,000", img: "/BBA.png" },
  { title: "BCA",   tag: "Trending",     duration: "3 Years", rating: "4.7", students: "11,500", img: "/BCA.webp" },
  { title: "B.Com", tag: "Finance",      duration: "3 Years", rating: "4.6", students: "9,000",  img: "/bcom.png" },
  { title: "BA",    tag: "Arts",         duration: "3 Years", rating: "4.5", students: "7,800",  img: "/ba.png" },
];
const course = [
"MBA", "MCA", "MCom","MSc","MA","BBA", "BCA", "BCom", "BA"
]
const VISIBLE = 3;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState("");
  const [afterAction, setAfterAction] = useState<"call" | "chat" | undefined>(undefined);
  const [slidesPerView, setSlidesPerView] = useState<number>(3);

  const openInquiry = (courseName: string = "") => {
    setSelectedCourse(courseName);
    setIsModalOpen(true);
  };

  const handleInput = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>): void => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
     const [activeTab, setActiveTab] = useState<"master" | "bachelor">("master");
  const [index, setIndex] = useState(0);

  const courses = activeTab === "master" ? masterCourses : bachelorCourses;
  const maxIndex = Math.max(0, courses.length - slidesPerView);

  const handleTab = (tab: "master" | "bachelor") => {
    setActiveTab(tab);
    setIndex(0);
  };

  const states = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Delhi",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal"
];

  useEffect(() => {
    const updateSlides = () => {
      const w = window.innerWidth;
      setSlidesPerView(w <= 640 ? 1 : w <= 900 ? 2 : 3);
    };
    updateSlides();
    window.addEventListener("resize", updateSlides);
    return () => window.removeEventListener("resize", updateSlides);
  }, []);

  useEffect(() => {
    if (index > maxIndex) {
      setIndex(maxIndex);
    }
  }, [slidesPerView, activeTab]);

  const rankings: RankingItem[] = [
    { logo: "🏫", text: "Amongst Worlds Top 400 Universities (2025)" },
    { logo: "📋", text: "Degrees Evaluated by World Education Services" },
    { logo: "🏆", text: "Amongst India's Top 10 Universities (Management) 2024" },
    { logo: "📊", text: "Ranked 4th among all private universities in India by NIRF 2023" },
  ];

 

  const advantages: AdvantageItem[] = [
    { icon: "🌐", title: "Globally recognized Prestigious Degree" },
    { icon: "📚", title: "Industry relevant curriculum" },
    { icon: "💼", title: "100% placement assistance" },
    { icon: "💳", title: "Easy Financing Options" },
  ];

  const manipalAdvantages: ManipalAdvItem[] = [
    { icon: "🗓️", title: "Flexible & convenient schedule", desc: "Learn at your own pace with our flexible online learning platform that fits your busy lifestyle and work commitments." },
    { icon: "👨‍🏫", title: "Experienced faculty & mentors", desc: "Learn from industry experts and experienced faculty members who bring real-world insights to your learning experience." },
    { icon: "🎓", title: "At par with on-campus degrees", desc: "Our online degrees maintain the same academic rigor and quality as our on-campus programs, ensuring you receive world-class education." },
    { icon: "🤝", title: "Prestigious Manipal alumni Network", desc: "Join a network of over 360,000 Manipal alumni worldwide and leverage connections for career growth and opportunities." },
  ];

  const testimonials: TestimonialItem[] = [
    {
      text: "With over 2 years of work experience in accounting, I wanted to pursue an online M.Com degree to boost my career further and get a higher salary. Thanks to Online Manipal, I'm able to manage my work life and academics through flexible live classes and recorded sessions which are available on the portal.",
      name: "Syed Abdul Faizan",
      course: "M.COM",
      img: "👨‍💼",
    },
    {
      text: "I always wanted to pursue my higher education dream without quitting my job, and MU has made it possible for me through their online degrees. My online MCM degree has given me wings to fly and chase my career aspirations.",
      name: "Monika Sharma",
      course: "MCA Graduate",
      img: "👩‍💻",
    },
    {
      text: "Funding my undergraduate degree and my younger brother's education has been possible only because of Manipal University Jaipur's affordable online B.Com degree. Thanks to Online Manipal, I'm able to manage my work and academics.",
      name: "Sahana K",
      course: "B.COM",
      img: "👩‍🎓",
    },
  ];

  return (
    <div className="page-root">
      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html, body, .page-root { width: 100%; max-width: 100%; overflow-x: hidden; }
        img { max-width: 100%; height: auto; display: block; }

        /* ── Page root ── */
        .page-root { font-family: 'Segoe UI', sans-serif; color: #222; background: #fff; }

        /* ─────────────────────────────────────
           NAVBAR
           • position: fixed  → always on top while scrolling
           • top: 18px        → gap from top of viewport
           • left/right: 8px  → gap from sides
           • border-radius    → rounded pill look
           • backdrop-filter  → frosted glass effect over hero image
        ───────────────────────────────────── */
        .navbar {
          position: fixed;
          top: 18px;
          left: 8px;
          right: 8px;
          z-index: 1000;
          border-radius: 18px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 14px 28px;
          background: rgba(255, 255, 255, 0.92);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          box-shadow: 0 4px 28px rgba(0, 0, 0, 0.13);
        }

        /* Logo text inside navbar */
        .navbar .logo { font-size: 1.4rem; font-weight: 900; }
        .navbar .logo .logo-orange { color: #e85d26; }
        .navbar .logo .logo-dark { color: #1a1a2e; }

        /* Navbar Apply Now button — auto width override */
        .navbar .btn-navbar { width: auto; padding: 10px 24px; display: inline-flex; align-items: center; justify-content: center; }

        /* ─────────────────────────────────────
           HERO SECTION
           • padding-top: 90px  → clears the fixed navbar
           • background-image   → manipal_frame.png
           • ::before overlay   → dark gradient for readability
        ───────────────────────────────────── */
        .hero {
          position: relative;
          padding: 90px 40px 60px;
          display: flex;
          gap: 60px;
          align-items: flex-start;
          flex-wrap: wrap;

          /* Background image */
          background-image: url('manipal_frame.png');
          background-size: cover;
          background-position: center center;
          background-repeat: no-repeat;
          background-attachment: scroll;
        }

        /* Dark gradient overlay — so text/form stay readable on top of image */
        .hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            120deg,
            rgba(0, 0, 0, 0.70) 0%,
            rgba(0, 0, 0, 0.40) 55%,
            rgba(0, 0, 0, 0.15) 100%
          );
          z-index: 0;
        }

        /* Hero left and form card must sit above the overlay */
        .hero-left {
          flex: 1;
          min-width: 320px;
          color: white;
          position: relative;
          z-index: 1;
        }

        .hero-left h1 { font-size: 2.2rem; font-weight: 800; line-height: 1.2; margin-bottom: 20px; margin-top: 20px; }

        /* University name badge pill */
        .university-badge {
          display: inline-block;
          background: white;
          color: #e85d26;
          padding: 5px 16px;
          border-radius: 20px;
          font-size: 0.85rem;
          font-weight: 700;
          margin-bottom: 16px;
        }
/* Section Background */
.advantage-section{
  background: linear-gradient(
    90deg,
    #f4d58d 0%,
    #eab79a 45%,
    #e5a88e 100%
  );
  padding: 80px 20px;
  text-align: center;
}

/* Images Row */
.advantage-images{
  display:flex;
  justify-content:center;
  align-items:center;
  gap:20px;
  flex-wrap:wrap;   /* mobile me neeche aa jayengi */
  margin-top:30px;
}
.manipal-adv-images{
  display:flex;
  justify-content:center;
  align-items:center;
  gap:30px;
  flex-wrap:wrap;      /* mobile me wrap */
  margin-top:25px;
}

/* desktop me ek row */
@media (min-width:768px){
  .manipal-adv-images{
    flex-wrap:nowrap;
  }
}

.manipal-img{
  max-width:70%;
  height:auto;
  border-radius:12px;   /* optional rounded corners */
}
/* Individual Images */
.adv-img{
  height:auto;
  width:auto;
  object-fit:contain;
}

/* Desktop me ek hi line force */
@media (min-width:768px){
  .advantage-images{
    flex-wrap:nowrap;
  }
}
        .tags { display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 30px; margin-top: 20px; }

        /* Course tag pills */
        .tag {
          background: rgba(255, 255, 255, 0.9);
          color: black;
          border: 1px solid rgba(255,255,255,0.5);
          padding: 4px 12px;
          border-radius: 4px;
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.5px;
        }

        .btn-outline { border: 2px solid white; background: white; color: black; padding: 10px 24px; border-radius: 6px; cursor: pointer; font-weight: 600; font-size: 0.9rem; margin-bottom: 28px; }

       .badges-row{
  display:flex;
  gap:0px;
  flex-wrap:nowrap;      /* sab same line me */
}

.badge-card{
  background:rgba(255, 255, 255, 1);
  border:2px solid hsla(0, 0%, 99%, 0.89);
  border-radius:6px;
  padding:16px 20px;      /* size */
  text-align:center;
  width:95px;            /* equal width */
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
}

.b-icon-img{
  width:100px;            /* image  */
  height:100px;
  object-fit:contain;
  margin-bottom:4px;
}

.badge-card span{
  font-size:10px;
  line-height:1.2;
  color:#000;      /* black text */
}
.ranking-image-wrapper{
  display:flex;
  justify-content:center;
  align-items:center;
  gap:40px;
  flex-wrap:wrap;
}

/* desktop par ek row */
@media (min-width:768px){
  .ranking-image-wrapper{
    flex-wrap:nowrap;
  }
}
.ranking-slider-outer {
  overflow: hidden;
  width: 100%;
}

.ranking-slider-track {
  display: flex;
  width: max-content;
  animation: slideInfinite 15s linear infinite;
}

.ranking-slider-track .ranking-image {
  width: 200px;        /* apni image size ke hisab se adjust karo */
  height: auto;
  object-fit: contain;
  margin: 0 24px;
  flex-shrink: 0;
}

@keyframes slideInfinite {
  0%   { transform: translateX(0); }
  100% { transform: translateX(-50%); } /* -50% kyunki images duplicate hain */
}
.ranking-image{
  height:310px;        
  width:auto;
  object-fit:contain;
  border-radius:12px;  /*  rounded corner */
}
        /* ── Form card — sits above the overlay ── */
        .form-card {
          background: white;
          border-radius: 12px;
          padding: 28px;
          width: 340px;
          color: #222;
          flex-shrink: 0;
          margin-top: 20px;
          position: relative;
          z-index: 1;
        }

        .form-card h3 { font-size: 1.3rem; font-weight: 800; color: #1a1a2e; margin-bottom: 4px; }
        .form-card p { font-size: 0.8rem; color: #666; margin-bottom: 16px; }
        .form-card input, .form-card select { width: 100%; border: 1px solid #ddd; border-radius: 6px; padding: 10px 12px; font-size: 0.9rem; margin-bottom: 10px; outline: none; }
        .form-card input:focus, .form-card select:focus { border-color: #e85d26; }

        /* ── Shared buttons ── */
        .btn-primary { width: 100%; background: #e85d26; color: white; border: none; padding: 12px; border-radius: 6px; font-weight: 700; font-size: 1rem; cursor: pointer; }
        .form-note { font-size: 0.7rem; color: #999; text-align: center; margin-top: 8px; }

        /* ── Rankings ── */
        .section { padding: 60px 40px; max-width: 1200px; margin: 0 auto; }
        .section-title { text-align: center; font-size: 1.8rem; font-weight: 800; color: #1a1a2e; margin-bottom: 40px; }
        .rankings-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px; }
        .rank-card { border: 1px solid #eee; border-radius: 10px; padding: 20px; text-align: center; box-shadow: 0 2px 8px rgba(0,0,0,0.05); }
        .rank-card .icon { font-size: 2rem; margin-bottom: 10px; }
        .rank-card p { font-size: 0.85rem; color: #444; font-weight: 600; }

        /* ── Course tabs ── */
        .tabs { display: flex; gap: 4px; margin-bottom: 24px; }
        .tab { padding: 8px 20px; border-radius: 6px; cursor: pointer; font-weight: 600; font-size: 0.9rem; border: 1px solid #ddd; background: white; }
        .tab.active { background: #e85d26; color: white; border-color: #e85d26; }

        /* ── Course cards ── */
        .courses-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(380px, 1fr)); gap: 24px; }
        .course-card { border: 1px solid #eee; border-radius: 12px; overflow: hidden; box-shadow: 0 2px 12px rgba(0,0,0,0.08); display: flex; flex-direction: column; }
        .course-img { width: 100%; height: 220px; object-fit: contain; margin: 0; background: transparent; }
        .course-img .course-icon { font-size: 3rem; }
        .course-tag { position: absolute; top: 10px; left: 10px; background: #e85d26; color: white; font-size: 0.7rem; padding: 3px 10px; border-radius: 20px; font-weight: 600; }
        .course-body { padding: 20px; flex: 1; }
        .course-body h4 { font-size: 1.15rem; font-weight: 700; margin-bottom: 12px; color: #1a1a2e; }
        .course-meta { display: flex; gap: 16px; font-size: 0.9rem; color: #666; margin-bottom: 14px; }
        .course-meta span { display: flex; align-items: center; gap: 4px; }
        .course-students { font-size: 0.9rem; color: #666; margin-bottom: 14px; }
        .btn-enroll { width: 100%; background: #e85d26; color: white; border: none; padding: 12px; border-radius: 6px; font-weight: 700; cursor: pointer; font-size: 1rem; }

        /* ── One-row slider for courses ── */
        .courses-slider-wrapper { display: flex; align-items: center; gap: 12px; width: 100%; }
        .slider-arrow { background: white; border: 1px solid #ddd; color: #222; padding: 8px 12px; border-radius: 6px; cursor: pointer; font-weight: 700; }
        .slider-arrow:disabled { opacity: 0.4; cursor: not-allowed; }
        .courses-slider-outer { overflow: hidden; width: 100%; max-width: 100%; }
        .courses-slider-track { display: flex; gap: 16px; flex-wrap: nowrap; transition: transform 300ms ease; will-change: transform; }
        .course-card { flex: 0 0 calc(33.333% - 10px); } /* show exactly 3 cards per row on desktop */
        @media (max-width: 900px) {
          .course-card { flex: 0 0 calc(50% - 8px); }   /* 2 cards per row on tablet */
        }
        @media (max-width: 640px) {
          .course-card { flex: 0 0 100%; }              /* 1 card per row on mobile */
        }
        .course-img-wrapper { position: relative; height: 220px; background: linear-gradient(135deg, #1a1a2e, #0f3460); display: flex; align-items: center; justify-content: center; }

        /* ── Advantage section ── */
        .advantage-section { background: linear-gradient(135deg, #fff8f5, #fff3ee); padding: 60px 40px; }
        .advantage-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 24px; max-width: 1200px; margin: 0 auto; }
        .adv-card { background: white; border-radius: 12px; padding: 28px 20px; text-align: center; box-shadow: 0 2px 12px rgba(232,93,38,0.1); }
        .adv-card .icon { font-size: 2.5rem; margin-bottom: 12px; }
        .adv-card h4 { font-size: 0.95rem; font-weight: 700; color: #1a1a2e; }
        .adv-btn { display: block; text-align: center; background: #e85d26; color: white; border: none; padding: 12px 32px; border-radius: 6px; font-weight: 700; cursor: pointer; font-size: 0.95rem; margin: 30px auto 0; }

        /* ── Manipal advantages ── */
        .manipal-adv-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 28px; }
        .manipal-adv-item { display: flex; gap: 14px; align-items: flex-start; }
        .manipal-adv-item .icon { font-size: 1.8rem; flex-shrink: 0; margin-top: 4px; }
        .manipal-adv-item h4 { font-weight: 700; margin-bottom: 6px; color: #1a1a2e; }
        .manipal-adv-item p { font-size: 0.85rem; color: #555; line-height: 1.6; }

        /* ── Testimonials ── */
        .testimonials-section { background: #f9f9f9; padding: 60px 40px; }
        .testimonials-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 24px; max-width: 1200px; margin: 0 auto; }
        .testimonial-card { background: white; border-radius: 12px; padding: 24px; box-shadow: 0 2px 12px rgba(0,0,0,0.07); }
        .testimonial-card p { font-size: 0.85rem; color: #555; line-height: 1.7; margin-bottom: 20px; font-style: italic; }
        .testimonial-author { display: flex; align-items: center; gap: 12px; }
        .author-avatar { width: 48px; height: 48px; border-radius: 50%; background: linear-gradient(135deg, #e85d26, #ff8c5a); display: flex; align-items: center; justify-content: center; font-size: 1.5rem; }
        .author-name { font-weight: 700; font-size: 0.9rem; }
        .author-course { font-size: 0.75rem; color: #e85d26; font-weight: 600; }
         .testimonial-card{
  text-align:center;
  padding:25px 20px;        /* card height badhegi */
  min-height:260px;         /* fixed taller card */
}

.testimonial-img{
  margin-bottom:18px;
}

.testimonial-img img{
  width:90px;               /* image bigger */
  height:90px;
  border-radius:50%;
  object-fit:cover;
}

.testimonial-text{
  margin-bottom:15px;
  font-size:16px;           /* text bigger */
  line-height:1.6;
}
        /* ── Footer & utility ── */
        footer { background: #1a1a2e; color: #aaa; text-align: center; padding: 20px; font-size: 0.75rem; }
        .footer-copy { margin-top: 8px; }
        .section-bg-white { background: white; }
        .section-bg-grey { background: #f9f9f9; }
        .sticky-contact { position: fixed; bottom: 0; left: 0; right: 0; z-index: 1000; background: #ffffff; border-top: 1px solid #eee; padding: 10px 16px; display: none; gap: 12px; }
        .sticky-contact .sc-btn { flex: 1; display: inline-flex; align-items: center; justify-content: center; gap: 8px; text-decoration: none; color: white; padding: 12px; border-radius: 8px; font-weight: 700; font-size: 1rem; }
        .sticky-contact .sc-call { background: #e85d26; }
        .sticky-contact .sc-chat { background: #25D366; }

        /* ── Responsive ── */
        @media (max-width: 768px) {
          .hero { padding: 100px 20px 40px; flex-direction: column; }
          .form-card { width: 100%; }
          .hero-left h1 { font-size: 1.6rem; }
          .section { padding: 40px 20px; }
          .advantage-section { padding: 40px 20px; }
          .testimonials-section { padding: 40px 20px; }
          .navbar { padding: 12px 18px; }
          .navbar .btn-navbar { display: none; }
          .sticky-contact { display: flex; }
          .page-root { padding-bottom: 84px; }
        }
      `}</style>

      {/* ══════════════════════════════════
          NAVBAR
          Fixed • top 18px • left/right 8px
          Rounded • glass blur effect
      ══════════════════════════════════ */}
      <div className="navbar">
        <div className="logo">
        <img src="/logo.webp" alt="Company Logo" className="logo" />
        </div>
        <button className="btn-primary btn-navbar" onClick={() => openInquiry()}>
          Apply Now
        </button>
      </div>

      {/* ══════════════════════════════════
          HERO SECTION
          Background: manipal_frame.png
          Overlay: dark gradient for readability
      ══════════════════════════════════ */}
      <div className="hero">

        {/* Dark overlay — sits between bg image and content */}
        <div className="hero-overlay" />

        {/* Hero Left — headline, tags, badges */}
        <div className="hero-left">
          <h1>NAAC A+ Accredited Online Degrees from</h1>
          <span className="university-badge">Manipal University Jaipur (MUJ)</span>
          <div className="tags">
            {["MBA", "BBA", "MCA", "BCA", "BCOM", "MCOM", "MA/MSC"].map((t) => (
              <span key={t} className="tag">{t}</span>
            ))}
          </div>
          <button className="btn-outline" onClick={() => openInquiry()}>Download Brochure</button>
          <div className="badges-row">

 <div className="block">
  <img
    src="/muj1.png"
    alt="NAAC"
    className="h-auto w-auto max-w-full"
  />
</div>

 

</div>
        </div>

        {/* Lead Capture Form */}
        <div className="form-card">
          <h3>Join 50,000+<br />Learners Across India</h3>
          <p>Get expert guidance and career placement assistance</p>
          <input name="fullName" placeholder="Full Name*" value={formData.fullName} onChange={handleInput} />
          <input name="email" placeholder="Email ID*" value={formData.email} onChange={handleInput} />
          <input name="mobile" placeholder="Mobile Number*" value={formData.mobile} onChange={handleInput} />
          <select name="course" value={formData.course} onChange={handleInput}>
            <option value="">Select Course*</option>
            {[...masterCourses, ...bachelorCourses].map((c) => (
              <option key={c.title} value={c.title}>
                {c.title}
              </option>
            ))}
          </select>
          <select name="state" value={formData.state} onChange={handleInput}>
            <option value="">Select State*</option>
            {states.map((s) => <option key={s}>{s}</option>)}
          </select>
          <p className="form-note">Your personal information is secure with us</p>
          <button className="btn-primary" onClick={() => openInquiry(formData.course)}>Apply Now</button>
        </div>
      </div>

      {/* Rankings & Accreditations */}
     <div className="section-bg-white">
  <div className="section">

   

    <div className="ranking-image-wrapper">
      <img src="/online_learning.png" alt="Online Learning" className="ranking-image" />
      <img src="/student_support.png" alt="Student Support" className="ranking-image" />
      <img src="/job_assistance.png" alt="Job Assistance" className="ranking-image" />
      <img src="/ugc_apporved.png" alt="UGC Approved" className="ranking-image" />
    </div>

  </div>
</div>

<div className="section-bg-white">
  <div className="section">

    <h2 className="section-title">Rankings & Accreditations</h2>

    <div className="ranking-slider-outer">
      <div className="ranking-slider-track">
        {/* Original set */}
        <img src="/wes_accredation.png" alt="Wes Accredation" className="ranking-image" />
        <img src="/Accredation2.png" alt="Student Support" className="ranking-image" />
        <img src="/3accredation.png" alt="Job Assistance" className="ranking-image" />
        <img src="/4accredation.png" alt="UGC Approved" className="ranking-image" />
        <img src="/5accredation.png" alt="Fifth Badge" className="ranking-image" />

       
        <img src="/6Accredation.png" alt="Online Learning" className="ranking-image" />
        <img src="/accredattion7.png" alt="Student Support" className="ranking-image" />
        <img src="/8accredation.png" alt="Job Assistance" className="ranking-image" />
        
      </div>
    </div>

  </div>
</div>
      {/* Explore Top Online Courses */}
   <div className="section-bg-grey">
      <div className="section">

        <h2 className="section-title">Explore Our Top Online Degree Courses</h2>

        {/* Tabs */}
        <div className="tabs">
          <button
            className={`tab ${activeTab === "master" ? "active" : ""}`}
            onClick={() => handleTab("master")}
          >
            Master
          </button>
          <button
            className={`tab ${activeTab === "bachelor" ? "active" : ""}`}
            onClick={() => handleTab("bachelor")}
          >
            Bachelor&apos;s
          </button>
        </div>

        {/* Slider */}
        <div className="courses-slider-wrapper">

          {/* Left Arrow */}
          <button
            className="slider-arrow"
            onClick={() => setIndex((i) => Math.max(i - 1, 0))}
            disabled={index === 0}
          >
            &#8592;
          </button>

          {/* Sliding Track */}
          <div className="courses-slider-outer">
            <div
              className="courses-slider-track"
              style={{
                transform: `translateX(calc(-${index * (100 / slidesPerView)}% - ${index * 16}px))`,
              }}
            >
              {courses.map((c, i) => (
                <div key={i} className="course-card">

                  {/* Image */}
                  <div className="course-img-wrapper">
                    <img src={c.img} alt={c.title} className="course-img" />
                    <span className="course-tag">{c.tag}</span>
                  </div>

                  {/* Body */}
                  <div className="course-body">
                    <h4>{c.title}</h4>
                    <div className="course-meta">
                      <span>🕐 {c.duration}</span>
                      <span>⭐ {c.rating} Rating</span>
                    </div>
                    <div className="course-students">👥 {c.students} Students</div>
                    <button className="btn-enroll" onClick={() => openInquiry(c.title)}>
                      Enroll Now
                    </button>
                  </div>

                </div>
              ))}
            </div>
          </div>

          {/* Right Arrow */}
          <button
            className="slider-arrow"
            onClick={() => setIndex((i) => Math.min(i + 1, maxIndex))}
            disabled={index === maxIndex}
          >
            &#8594;
          </button>

        </div>

      </div>
    </div>

      {/* Unlock 360 Advantage */}
     <div className="advantage-section">
  <h2 className="section-title">Unlock The 360° Advantage</h2>

  <div className="advantage-images">

    <img src="/360_1.png" alt="adv1" className="adv-img" />
    <img src="/360_2.png" alt="adv2" className="adv-img" />
    <img src="/360_3.png" alt="adv3" className="adv-img" />
    <img src="/360_4.png" alt="adv4" className="adv-img" />

  </div>

  <div>
    <button className="adv-btn" onClick={() => openInquiry()}>
      Download our Brochure
    </button>
  </div>
</div>

      {/* Online Manipal Advantages */}
     <div className="section-bg-white">
  <div className="section">
    <h2 className="section-title">Online Manipal Advantages</h2>

    <div className="manipal-adv-images">
      <img src="/manipal_advantage1.png" alt="Advantage 1" className="manipal-img" />
      <img src="/manipal_advantage2.png" alt="Advantage 2" className="manipal-img" />
    </div>

  </div>
</div>

      {/* Real Stories */}
      {/* Real Stories */}
<div className="testimonials-section">
  <h2 className="section-title">Real Stories, Real Impact</h2>

  <div className="testimonials-grid">
    {testimonials.map((t, i) => (
      <div key={i} className="testimonial-card">

        {/* Image Top */}
        <div className="testimonial-img">
          {t.img}
        </div>

        {/* Text */}
        <p className="testimonial-text">{t.text}</p>

        {/* Name + Course */}
        <div className="testimonial-author-info">
          <div className="author-name">{t.name}</div>
          <div className="author-course">{t.course}</div>
        </div>

      </div>
    ))}
  </div>
</div>

      {/* Footer */}
      <footer>
        <p>Disclaimer: We act as a marketing service partner only. Manipal University hold full rights to request change or removal of any less relevant content. Images used are for illustrative purposes and do not directly represent the respective colleges or universities.</p>
        <p className="footer-copy">© 2025 degree-admission.online All rights reserved.</p>
      </footer>

      <div className="sticky-contact">
        <button className="sc-btn sc-call" onClick={() => openInquiry()}>
          <span>📞</span>
          <span>Call Now</span>
        </button>
        <button className="sc-btn sc-chat" onClick={() => openInquiry()}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-7 h-7">
            <path d="M20.52 3.48A11.91 11.91 0 0012.05 0C5.47 0 .1 5.37.1 11.95c0 2.1.55 4.15 1.6 5.97L0 24l6.26-1.64a11.9 11.9 0 005.8 1.48h.01c6.58 0 11.95-5.37 11.95-11.95 0-3.19-1.24-6.19-3.5-8.41z"/>
          </svg>
          <span>Live Chat</span>
        </button>
      </div>

      <InquiryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} defaultCourse={selectedCourse} />
    </div>
  );
}
