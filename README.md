# 🚀 Portfolio — React + Tailwind CSS + Vite

Modern, dark, aurora-animated personal portfolio for a CS student.

---

## ⚡ Quick Start

```bash
cd portfolio
npm install
npm run dev
# → Open http://localhost:5173
```

---

## 🔧 Personalise in 5 Minutes

### 1. Your Name
Search & replace `YourName` in all files.

### 2. GitHub + LinkedIn
In these 3 files, replace `YOUR_USERNAME`:
- `src/components/Navbar.jsx`
- `src/pages/Contact.jsx`
- `src/components/Footer.jsx`

### 3. Your Projects
Open `src/pages/Projects.jsx` → edit the `PROJECTS` array at the top.
Fill in title, description, tags, GitHub link, live demo link.

### 4. Your Resume PDF
Place your file at: `public/resume.pdf`

OR use the drag-and-drop uploader on the Resume page to preview any PDF.

### 5. Your Photo
Place photo at `public/photos/me.jpg`
In `src/pages/About.jsx` change:
```jsx
src="https://ui-avatars.com/..."
// to:
src="/photos/me.jpg"
```

### 6. Accent Color
In `index.html` Tailwind config, change:
```js
accent: '#7c3aed',  // violet — change to any hex
```

---

## 🌐 Deploy Free

### Vercel (recommended)
```bash
npm run build
# Upload /dist to vercel.com OR run: npx vercel
```

### Netlify
Drag & drop the `/dist` folder at netlify.com

---

## 📁 Structure

```
portfolio/
├── public/
│   ├── resume.pdf        ← your resume here
│   └── photos/me.jpg     ← your photo here
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Projects.jsx  ← add your projects here
│   │   ├── Resume.jsx
│   │   └── Contact.jsx
│   ├── App.jsx
│   └── main.jsx
├── index.html            ← Tailwind config + fonts here
└── package.json
```
