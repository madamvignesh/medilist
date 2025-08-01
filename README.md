# MediList

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
