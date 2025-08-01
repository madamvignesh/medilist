<<<<<<< HEAD

# 💊 MediList – Connecting You to Care, One Click at a Time

MediList is a smart, full-stack healthcare management app built using **Next.js**. It goes beyond medication tracking by simplifying doctor bookings and appointment management — all from a single platform.

🔗 **Live Demo**: [https://medilist-six.vercel.app](https://medilist-six.vercel.app)

---

## ✨ Key Features


### 👨‍⚕️ One-Click Doctor Booking

* Easily book appointments with doctors through a simplified one-click process
* Smart filtering and UI make booking smooth and fast

### 📅 View All Appointments in One Go

* Access and manage all booked appointments in a clean, unified dashboard
* Time-based sorting for better visibility

### 🏥 Doctor Availability Management

* Admins or doctors can update their availability
* Access control built-in for secure management of schedules and appointments

### 📱 Modern, Responsive UI

* Mobile-first design with Tailwind CSS
* Interactive modals, stepper navigation, and real-time feedback

## 🛠 Tools & Libraries Used

* **Frontend**: React, TypeScript, Tailwind CSS
* **Backend**: Node.js, Express.js
* **Database**: SQLite (`sqlite3`)
* **Others**: Stepper library (`react-form-stepper`), UUID for appointment IDs, Next.js for development setup

---

## 🚀 Improvements With More Time

* Implement user authentication using Firebase Authentication or Google OAuth
* Add admin panel to manage doctors and appointments
* Enable appointment filtering by date and time
* Send email confirmations using services like EmailJS or SendGrid
* Persistent data storage using Firestore instead of SQLite

---

## 🧩 Challenges Faced & Solutions

### 1. **Stepper Integration in React**

**Challenge**:
Integrating the multi-step form (`Stepper`) was tricky, especially when trying to trigger the final API call only on the last step. Also, syncing dynamic state like `patientName`, `email`, etc., across steps while maintaining component reusability was not straightforward.

**Solution**:
Handled state lifting and ensured final step triggers the `bookAppointment()` function. Added form validation and UI feedback using simple conditionals and alerts.

---

### 2. **Handling Dynamic Modals and Content Resizing**

**Challenge**:
Content inside the modal changed dynamically depending on the step, which made the modal size inconsistent.

**Solution**:
Instead of relying on w-fit, max-w, or min-w utilities, I simplified the layout by expanding the parent container to cover the full screen width. This approach provided enough space for any child content variation, ensuring the modal remained stable and visually consistent throughout the step transitions.

---

### 3. **Simple Challenge – Placeholder Styling**

**Challenge**:
Customizing the placeholder color to match the UI theme wasn’t working initially.

**Solution**:
Added a CSS rule using `::placeholder` to manually override the placeholder color while maintaining full visibility with `opacity: 1`.

Here's a rewritten and polished version of your **"Getting Started"** and **"Deployment"** sections, personalized for your MediList project and including your Vercel URL:

---

## 🚀 Getting Started

To run the development server locally:

```bash
npm run dev
# or
yarn dev
```

Open your browser and visit [http://localhost:3000](http://localhost:3000) to view the app.

You can start editing the app by modifying the `app/page.tsx` file. The changes will be reflected automatically during development.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to load [Geist](https://vercel.com/font), a modern font optimized for web.

---

## 🌐 Live Demo

Check out the live deployed version of MediList here:
🔗 [https://medilist-six.vercel.app/](https://medilist-six.vercel.app/)

---

## 📘 Learn More

Explore official resources to dive deeper into Next.js:

* 📄 [Next.js Docs](https://nextjs.org/docs) – Comprehensive guide to Next.js features.
* 🧠 [Next.js Learn](https://nextjs.org/learn) – Interactive hands-on tutorials.
* 💻 [Next.js GitHub](https://github.com/vercel/next.js) – Source code and community contributions.

---

## 🚢 Deployment

This project was deployed using [Vercel](https://vercel.com), the official platform from the creators of Next.js. For guidance on deploying your own project, visit the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying).

