# MediList

## 🛠 Tools & Libraries Used

* **Frontend**: React, TypeScript, Tailwind CSS
* **Backend**: Node.js, Express.js
* **Database**: SQLite (via `sqlite3` and `better-sqlite3`)
* **Others**: Stepper library (`react-form-stepper`), UUID for appointment IDs, Vite for development setup

---

## 🚀 Improvements With More Time

* Implement user authentication using Firebase Authentication or Google OAuth
* Add admin panel to manage doctors and appointments
* Integrate real-time availability updates with WebSockets
* Enable appointment filtering by date and time
* Send email confirmations using services like EmailJS or SendGrid
* Mobile responsiveness and accessibility improvements
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
Used `w-fit` with Tailwind CSS and adjusted inner component width using `max-w` and `min-w` utilities. This ensured consistent and responsive modal layout.

---

### 3. **Simple Challenge – Placeholder Styling**

**Challenge**:
Customizing the placeholder color to match the UI theme wasn’t working initially.

**Solution**:
Added a CSS rule using `::placeholder` to manually override the placeholder color while maintaining full visibility with `opacity: 1`.
