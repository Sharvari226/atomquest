# ⚛️ AtomQuest - Goal Setting & Tracking Portal

**A complete, production-ready Goal & OKR Management System** built for the **AtomQuest Hackathon 1.0**.

Fully implements **Phase 1 & Phase 2** requirements with excellent UX and several **Good-to-Have** features.
 
---

### ✨ Key Features Implemented

- Employee Goal Sheet creation with **Thrust Areas**, UoM, Targets & Weightage
- **Strict Validation**: 100% total weightage, min 10% per goal, max 8 goals
- Manager Approval Workflow + Return for Rework
- Goals get **locked** after approval
- Real-time **Score Calculation** (Min/Max/Percentage/Timeline/Zero)
- Quarterly Check-ins with manager comments
- Role-based dashboards (Employee, Manager, Admin)
- Audit Trail & Notifications
- CSV Export for Appraisal Reports
- Kanban + List view toggle
- Shared Goals functionality
- Escalation & Workflow Engine UI
- Analytics Dashboard with heatmaps & trends
- AI Integration ready (LangChain prompts included)
- Beautiful Notion-style inline editing UI
- Complete Cycle Management view

---

### 🛠️ Tech Stack

- **Frontend**: React 18 + Vite (Single File → easily splittable)
- **Styling**: Modern inline + CSS design (Notion-inspired)
- **State**: React `useState` (easily upgradable to Zustand)
- **Backend Ready**: Designed for **FastAPI + PostgreSQL + LangChain**
- **AI**: LangChain agents prepared for goal quality check & smart escalation

---

### 🚀 Quick Start

```bash
# Clone
git clone https://github.com/yourusername/atomquest-portal.git
cd atomquest-portal

# Frontend
cd frontend
npm install
npm run dev

# Backend (Optional)
cd backend
pip install -r requirements.txt
uvicorn app:app --reload

#Users
Demo Users (Switch via top-right button):

Priya Sharma → Employee
Vikram Nair → Manager
Deepika Iyer → Admin
