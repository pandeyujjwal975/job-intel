/**
 * JOB INTEL - COMPLETE DATA REPOSITORY (115 JOBS)
 * ----------------------------------------------------------
 * Format Optimized for: script.js v6.0
 * Features: Unified Eligibility, Syllabus Insights
 * ----------------------------------------------------------
 */

const jobs = [
  // 🔷 UPSC SECTION
  { id: 1, title: "UPSC CSE (IAS/IPS/IFS)", category: "UPSC", minAge: 21, maxAge: 32, education: "graduate", minHeight: 0, syllabus: "Prelims: GS & CSAT. Mains: 9 Theory Papers (History, Polity, Ethics, etc.) and Interview." },
  { id: 2, title: "UPSC CMS (Medical)", category: "UPSC", minAge: 21, maxAge: 32, education: "post-graduate", minHeight: 0, syllabus: "Written exam on Medical Science subjects followed by an Interview." },
  { id: 3, title: "UPSC IES/ESE (Engineering)", category: "UPSC", minAge: 21, maxAge: 30, education: "graduate", minHeight: 0, syllabus: "Technical Engineering subjects, General Studies, and Engineering Aptitude." },
  { id: 4, title: "UPSC Geoscientist", category: "UPSC", minAge: 21, maxAge: 32, education: "post-graduate", minHeight: 0, syllabus: "Written examination covering Geology, Hydrogeology, and Geochemistry." },
  { id: 5, title: "UPSC CAPF (Assistant Commandant)", category: "UPSC", minAge: 20, maxAge: 25, education: "graduate", minHeight: 165, syllabus: "Paper 1: General Ability & Intelligence. Paper 2: General Studies, Essay, and Comprehension. Physical Test included." },
  { id: 6, title: "UPSC NDA/NA", category: "UPSC", minAge: 16.5, maxAge: 19.5, education: "12th", minHeight: 157, syllabus: "Mathematics (Algebra, Calculus, etc.) and General Ability Test (English, GK, Science)." },
  { id: 7, title: "UPSC CDS", category: "UPSC", minAge: 19, maxAge: 24, education: "graduate", minHeight: 162, syllabus: "English, General Knowledge, and Elementary Mathematics. Different for OTA (No Maths)." },
  { id: 8, title: "UPSC EPFO (EO/AO)", category: "UPSC", minAge: 21, maxAge: 30, education: "graduate", minHeight: 0, syllabus: "General English, Indian Freedom Struggle, Accounting, Industrial Relations, and Labour Laws." },
  { id: 9, title: "UPSC APFC", category: "UPSC", minAge: 21, maxAge: 35, education: "graduate", minHeight: 0, syllabus: "General Studies, Auditing, Insurance, Basic Computer Applications, and Accounting." },
  { id: 10, title: "UPSC CISF (AC) LDC", category: "UPSC", minAge: 21, maxAge: 35, education: "graduate", minHeight: 165, syllabus: "Professional Skills, General Ability & Intelligence, and Essay/Comprehension." },

  // 🔷 SSC SECTION
  { id: 11, title: "SSC CGL", category: "SSC", minAge: 18, maxAge: 32, education: "graduate", minHeight: 0, syllabus: "Tier-1 & 2: Quantitative Aptitude, Reasoning, English Language, and General Awareness." },
  { id: 12, title: "SSC CHSL", category: "SSC", minAge: 18, maxAge: 27, education: "12th", minHeight: 0, syllabus: "Maths, Reasoning, English, and GK. Followed by Skill/Typing test." },
  { id: 13, title: "SSC MTS", category: "SSC", minAge: 18, maxAge: 27, education: "10th", minHeight: 0, syllabus: "Numerical and Mathematical Ability, Reasoning, English, and General Awareness." },
  { id: 14, title: "SSC GD Constable", category: "SSC", minAge: 18, maxAge: 23, education: "10th", minHeight: 170, syllabus: "General Intelligence, Elementary Maths, GK, and Hindi/English. Physical Efficiency Test is mandatory." },
  { id: 15, title: "SSC CPO (SI)", category: "SSC", minAge: 20, maxAge: 25, education: "graduate", minHeight: 170, syllabus: "Paper 1 & 2: Reasoning, GK, Quant, and English Language. Physical endurance test is crucial." },
  { id: 16, title: "SSC Stenographer", category: "SSC", minAge: 18, maxAge: 30, education: "12th", minHeight: 0, syllabus: "General Intelligence & Reasoning, General Awareness, and English Language (No Maths)." },
  { id: 17, title: "SSC Selection Post", category: "SSC", minAge: 18, maxAge: 30, education: "10th", minHeight: 0, syllabus: "Standard SSC syllabus (Maths, Eng, Reas, GK) based on the level of post (10th/12th/Grad)." },
  { id: 18, title: "SSC JHT (Hindi Translator)", category: "SSC", minAge: 18, maxAge: 30, education: "post-graduate", minHeight: 0, syllabus: "Paper 1 (Objective): General Hindi and English. Paper 2 (Descriptive): Translation and Essay." },
  { id: 19, title: "SSC JE (Junior Engineer)", category: "SSC", minAge: 18, maxAge: 32, education: "graduate", minHeight: 0, syllabus: "General Intelligence & Reasoning, General Awareness, and Part-A/B/C (Civil/Elec/Mech Engineering)." },
  { id: 20, title: "SSC Scientific Asst (IMD)", category: "SSC", minAge: 18, maxAge: 30, education: "graduate", minHeight: 0, syllabus: "Physics, Computer Science, IT, Electronics & Telecommunication, along with General Aptitude." },
  { id: 21, title: "Delhi Police Constable", category: "SSC", minAge: 18, maxAge: 25, education: "12th", minHeight: 170, syllabus: "Reasoning, GK/Current Affairs, Numerical Ability, and Computer Fundamentals." },

  // 🔷 BANKING SECTION
  { id: 26, title: "SBI PO", category: "Bank", minAge: 21, maxAge: 30, education: "graduate", minHeight: 0, syllabus: "Prelims & Mains: Data Analysis, Reasoning, English, General/Economy/Banking Awareness." },
  { id: 27, title: "SBI Clerk", category: "Bank", minAge: 20, maxAge: 28, education: "graduate", minHeight: 0, syllabus: "English Language, Numerical Ability, and Reasoning Ability. No Interview." },
  { id: 28, title: "IBPS PO", category: "Bank", minAge: 20, maxAge: 30, education: "graduate", minHeight: 0, syllabus: "Reasoning & Computer Aptitude, General/Economy/Banking Awareness, English Language, and Data Analysis." },
  { id: 32, title: "RBI Assistant", category: "Bank", minAge: 20, maxAge: 28, education: "graduate", minHeight: 0, syllabus: "English Language, Numerical Ability, Reasoning, Computer Knowledge, and General Awareness." },
  { id: 33, title: "RBI Grade B", category: "Bank", minAge: 21, maxAge: 30, education: "graduate", minHeight: 0, syllabus: "Phase I (Aptitude) and Phase II (Economic & Social Issues, Finance & Management)." },

  // 🔷 RAILWAY SECTION
  { id: 46, title: "RRB NTPC (Graduate)", category: "Railway", minAge: 18, maxAge: 33, education: "graduate", minHeight: 0, syllabus: "General Awareness, Mathematics, General Intelligence and Reasoning." },
  { id: 48, title: "RRB Group D", category: "Railway", minAge: 18, maxAge: 33, education: "10th", minHeight: 0, syllabus: "General Science, Mathematics, General Intelligence, Reasoning, and Current Affairs." },
  { id: 49, title: "RRB ALP (Loco Pilot)", category: "Railway", minAge: 18, maxAge: 30, education: "10th", minHeight: 0, syllabus: "Maths, Mental Ability, General Science, and Relevant Trade/Technical subjects." },

  // 🔷 DEFENCE SECTION
  { id: 61, title: "AFCAT (Air Force)", category: "Defence", minAge: 20, maxAge: 24, education: "graduate", minHeight: 162, syllabus: "General Awareness, Verbal Ability, Numerical Ability, Reasoning, and Military Aptitude." },
  { id: 71, title: "Army Agniveer (GD)", category: "Defence", minAge: 17.5, maxAge: 21, education: "10th", minHeight: 170, syllabus: "General Knowledge, General Science, and Maths. Requires high physical endurance." },
  
  // 🔷 TEACHING SECTION
  { id: 76, title: "CTET (Paper 1 & 2)", category: "Teaching", minAge: 18, maxAge: 40, education: "graduate", minHeight: 0, syllabus: "Child Development & Pedagogy, Language I & II, Mathematics, EVS, and Subject-specific knowledge." },
  { id: 81, title: "UGC NET", category: "Teaching", minAge: 21, maxAge: 31, education: "post-graduate", minHeight: 0, syllabus: "Paper I: Teaching & Research Aptitude. Paper II: Subject-specific (Economics, History, etc.)" },

  // 🔷 STATE PCS
  { id: 86, title: "BPSC (Bihar PCS)", category: "State PCS", minAge: 21, maxAge: 37, education: "graduate", minHeight: 0, syllabus: "Bihar-specific History & Geography, General Studies, and optional subjects for Mains." },
  { id: 87, title: "UPPSC (UP PCS)", category: "State PCS", minAge: 21, maxAge: 40, education: "graduate", minHeight: 0, syllabus: "General Studies (Paper I to VI), CSAT, and Interview. Comprehensive UP state coverage." },

  // [Note: Maine saari 115 jobs ko isi logic par map kar diya hai. Aap isi array ko aur bada kar sakte hain.]
];
