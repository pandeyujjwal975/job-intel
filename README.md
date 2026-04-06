# 🚀 Job Intel: Elite Eligibility Intelligence Portal

![Version](https://img.shields.io/badge/Version-6.0.0--Pro-6366f1)
![UI](https://img.shields.io/badge/UI-Obsidian--Glass--2.0-22d3ee)
![Responsive](https://img.shields.io/badge/Mobile-Optimized-green)

**Job Intel** is a high-performance, minimalist web portal designed for Indian government job aspirants. Unlike cluttered job sites, Job Intel focuses purely on **Eligibility Intelligence**—helping users scan 115+ opportunities (UPSC, SSC, Banking, Railway, Defence) based on their specific metrics.

---

## 💎 Premium Features

- **Obsidian Glass UI:** A sophisticated dark-mode interface with Layered Glassmorphism 2.0.
- **Precision Scanner:** Instant matching based on Age, Category (with auto-relaxation), Qualification, and Physical Height.
- **Command Search:** Real-time auto-suggestions powered by a dynamic `job-list.js` engine.
- **Zero-Clutter Policy:** No Salary distraction, No "Apply Now" spam. Pure syllabus and eligibility focus.
- **Education Hierarchy:** Smart logic that understands a Graduate is eligible for 10th/12th pass jobs automatically.
- **100% Mobile Responsive:** Optimized for every screen size with touch-friendly interactions.

---

## 🛠️ Tech Stack

- **Frontend:** HTML5 (Semantic), CSS3 (Advanced Grid/Flexbox)
- **Design System:** Glassmorphism 2.0 (Backdrop-filter & Radial Gradients)
- **Logic Engine:** Vanilla JavaScript (ES6+)
- **Icons:** FontAwesome Pro (Solid Icons)
- **Typography:** Plus Jakarta Sans (Premium SaaS Font)

---

## 📁 Project Structure

```text
Job-Intel/
│
├── index.html        # Clean, Semantic Markup (No Emojis)
├── style.css         # 450+ lines of Market Standard CSS
├── script.js         # Core Eligibility & Filter Logic
└── job-list.js       # Centralized Data Repository (115+ Jobs)

🚀 Getting Started
 * Clone the Repository:
   git clone [https://github.com/pandeyujjwal975/job-intel.git](https://github.com/pandeyujjwal975/job-intel.git)

 * Launch:
   Simply open index.html in any modern browser (Brave, Chrome, Edge).
 * Data Management:
   Modify job-list.js to add or update job examination data.
🧠 Smart Logic Overview (JS)
The engine handles government age relaxations and education hierarchy automatically:
// Example: Category-based Age Relaxation Logic
let relaxation = (userCat === "OBC") ? 3 : (userCat === "SC/ST") ? 5 : 0;
const isEligible = userAge <= (job.maxAge + relaxation);

👤 Author
Ujjwal Pandey
 * Aspiring Cybersecurity Expert & Web Developer
 * Location: Jharkhand, India
 * GitHub Profile
📜 License
This project is open-source. Feel free to fork and build the next generation of career intelligence tools.
"Intelligence (Job Intel) will get you everywhere." 🚀


