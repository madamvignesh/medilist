<<<<<<< HEAD
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
=======
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
>>>>>>> 7c9937e (Initial commit for MediList full stack app)
