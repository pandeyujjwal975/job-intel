/* 🚀 JOB INTEL 8.0 - THE HYBRID INTELLIGENCE ENGINE
   ----------------------------------------------------------
   Logic: Firebase Cloud + Local Job-List Sync
   Features: Smart Insight Filtering, No Status Tags, Hybrid Search
   ----------------------------------------------------------
*/

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, collection, onSnapshot, query, orderBy } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// 🔥 FIREBASE CONFIG (Connected to your Job Intel Project)
const firebaseConfig = {
  apiKey: "AIzaSyAYa9HkQnvfS-7jotgUuuyuVT4m9mVK45I",
  authDomain: "jobintel-admin.firebaseapp.com",
  projectId: "jobintel-admin",
  storageBucket: "jobintel-admin.firebasestorage.app",
  messagingSenderId: "238487111199",
  appId: "1:238487111199:web:74ef4b93b72be2f723b72a"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
let combinedData = [];

// ✅ 1. RENDER CARDS (Status Open Removed & Clean UI)
function renderJobs(dataList) {
    const container = document.getElementById('results');
    if (!container) return;

    if (dataList.length === 0) {
        container.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 60px; color: var(--text-dim);">No Intelligence Data Found.</div>`;
        return;
    }

    container.innerHTML = dataList.map(job => {
        const jobId = job.id || job.title;
        return `
        <div class="job-card">
            <span class="source-tag">${job.source === 'fb' ? 'Cloud Intelligence' : 'Local Archive'}</span>
            <h3>${job.title}</h3>
            <button class="view-insights-btn" onclick="openInsights('${jobId}')">VIEW INSIGHTS</button>
        </div>
        `;
    }).join('');
}

// ✅ 2. VIEW INSIGHTS (Smart Field Filtering)
window.openInsights = function(id) {
    const job = combinedData.find(j => j.id == id || j.title == id);
    if (!job) return;

    const modal = document.getElementById('jobModal');
    const modalBody = document.getElementById('modal-body');
    document.getElementById('modalTitle').innerText = job.title;

    // 🔥 Sirf wahi rows dikheingi jo Admin ne update ki hain
    let rows = "";
    if (job.category) rows += `<tr><td>CATEGORY</td><td>${job.category}</td></tr>`;
    if (job.lastDate) rows += `<tr><td>LAST DATE</td><td style="color:var(--secondary); font-weight:800;">${job.lastDate}</td></tr>`;
    if (job.fee) rows += `<tr><td>EXAM FEE</td><td>${job.fee}</td></tr>`;

    modalBody.innerHTML = `
        <div style="animation: fadeIn 0.4s ease;">
            <table class="modal-table">${rows}</table>
            
            <div style="display:flex; gap:12px; margin: 25px 0;">
                ${job.notification ? `<a href="${job.notification}" target="_blank" class="scan-btn" style="flex:1; font-size:0.75rem; text-align:center; text-decoration:none; background:var(--accent); color:#000;">NOTIFICATION</a>` : ''}
                ${job.syllabusLink ? `<a href="${job.syllabusLink}" target="_blank" class="scan-btn" style="flex:1; font-size:0.75rem; text-align:center; text-decoration:none; background:var(--primary);">SYLLABUS PDF</a>` : ''}
            </div>

            ${job.syllabus ? `<div style="background:rgba(255,255,255,0.03); padding:20px; border-radius:20px; border:1px solid var(--glass-border);">
                <p style="white-space:pre-wrap; color:var(--text-dim); font-size:0.9rem; line-height:1.6;">${job.syllabus}</p>
            </div>` : ''}
            
            <br>
            <a href="${job.link}" target="_blank" class="scan-btn" style="display:block; text-align:center; text-decoration:none; background:#fff; color:#000;">APPLY OFFICIAL LINK</a>
        </div>
    `;
    modal.classList.add('active');
};

// ✅ 3. SEARCH & FILTERS
document.getElementById('searchBtn')?.addEventListener('click', () => {
    const term = document.getElementById('search').value.toLowerCase();
    const filtered = combinedData.filter(j => j.title.toLowerCase().includes(term));
    renderJobs(filtered);
});

document.querySelectorAll('.chip').forEach(chip => {
    chip.addEventListener('click', () => {
        document.querySelector('.chip.active')?.classList.remove('active');
        chip.classList.add('active');
        const filter = chip.getAttribute('data-filter');
        
        if (filter === 'all') {
            renderJobs(combinedData);
        } else {
            const filtered = combinedData.filter(j => j.category && j.category.toUpperCase().includes(filter.toUpperCase()));
            renderJobs(filtered);
        }
    });
});

// ✅ 4. SCANNER LOGIC
document.getElementById('form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const age = parseInt(document.getElementById('age').value);
    const height = parseInt(document.getElementById('height').value);
    
    // Scanner runs on local repository (job-list.js)
    const eligible = jobs.filter(j => age <= (j.age || 40) && height >= (j.height || 0));
    renderJobs(eligible.map(j => ({ ...j, id: j.title, source: 'local' })));
    
    window.scrollTo({ top: document.getElementById('results').offsetTop - 100, behavior: 'smooth' });
});

// ✅ 5. INITIALIZE PORTAL (Hybrid Sync)
async function initPortal() {
    // Load Local Data
    const localJobs = typeof jobs !== 'undefined' ? jobs.map(j => ({ ...j, id: j.title, source: 'local' })) : [];
    
    // Sync Firebase Cloud
    const q = query(collection(db, "jobs"), orderBy("createdAt", "desc"));
    onSnapshot(q, (snapshot) => {
        const fbJobs = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data(), source: 'fb' }));
        combinedData = [...fbJobs, ...localJobs];
        renderJobs(combinedData);
        
        // Update Ticker with Latest 5 Cloud Jobs
        const ticker = document.getElementById('latest-menu');
        if (ticker) {
            ticker.innerHTML = fbJobs.slice(0, 5).map(j => `<a href="#" class="menu-item" onclick="openInsights('${j.id}')">${j.title}</a>`).join('');
        }
    });
}

// Close Modal Logic
document.querySelector('.close-modal')?.addEventListener('click', () => {
    document.getElementById('jobModal').classList.remove('active');
});

initPortal();
