<a id="readme-top"></a>

<h1 align="center">Evently | Event Management Platform :tada:</h1> 

<div align="center">

<img src="/public/assets/images/homepage.png" alt="Picture of Evently homepage">

<p align="center">Inspired by Eventbrite, Evently was built to enhance your ablity to create, organize, and manage events with features like authentication, smart search & filters, dynamic categories, and seamless Stripe-powered checkout.
<br/>
<br/>
Built with cutting-edge tools like Next.js 14, Tailwind CSS, and Clerk for a secure, scalable, and user-friendly experience.
<br />

<a href="https://evently-pink-sigma.vercel.app/">Evently Live Link</a>



<br />
<a href="https://github.com/AmberForrester/evently">Source Code</a>
.
<a href="https://github.com/AmberForrester/evently/issues/new?assignees=&labels=bug&projects=&template=bug-report-%F0%9F%90%9E.md&title=">Report Bug</a>
.
<a href="https://github.com/AmberForrester/evently/issues/new?assignees=&labels=enhancement&projects=&template=feature-request-%F0%9F%9A%80.md&title=">Request Feature</a>
</p>
</div>

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#project-structure">Project Structure</a></li>
    <li><a href="#features">Features</a></li>
    <li><a href="#installation">Installation</a></li>
    <li><a href="#steps-to-install">Steps to Install</a></li>
    <li><a href="#how-to-run-the-application">How to Run the Application</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>
<br />



## Features
- **...:** ...


<p align="right">(<a href="#readme-top">top of page</a>)</p>



## Project Structure

<img src="/public/assets/images/project-structure.png" alt="Picture of the project structure in Visual Studio Code">

<p align="right">(<a href="#readme-top">top of page</a>)</p>



## Installation

### Prerequisites
- [Next.js](https://nextjs.org/)
- [React](https://react.dev/)
- [Nodejs](https://nodejs.org/en)
- [npm](https://www.npmjs.com/)
- [Shadcn/ui](https://ui.shadcn.com/docs)
- [Tailwind CSS](https://tailwindcss.com/)
- [Clerk](https://clerk.com/) - Authentication and User Management
- [MongoDB](https://www.mongodb.com/) - Utilizing a mongoose connection
- [Zod](https://zod.dev/) - TypeScript-first schema validation
- [Postman](https://www.postman.com/) - Collaborative API development
- []() - Create an account to receive your credentials, and create a new project.



### Steps to Install

Set up the project locally on your machine by following these steps. 
Keep in mind, they are specific to using Windows.

1. **Clone the Repository:**
  ```bash
  git clone https://github.com/AmberForrester/evently
  ```

2. **Navigate to the project directory:**
  ```bash
  cd evently
  ```

3. **Install Required Dependencies:** 

Run the following command to install the project dependencies using npm:
  ```bash
  npm install
  ```

4. **Set Up Environment Variables:**

Create a new file named `.env.local` in the root of your project directory and add the following:
   ```bash
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
    CLERK_SECRET_KEY=
    SIGNING_SECRET=

    NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
    NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

    MONGODB_URI=

    UPLOADTHING_SECRET=
    UPLOADTHING_APP_ID=
    UPLOADTHING_TOKEN=''

    NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=

    STRIPE_WEBHOOK_SECRET=

    NEXT_PUBLIC_SERVER_URL=http://localhost:3000/
   ```

Use the key provided after creating your account and new project with [](). 

5. **Add `.env.local` to `.gitignore`**

> [!CAUTION]
> To ensure your sensitive information does not get committed to version control:
  - Open (or create) the `.gitignore` file in the root directory.
  - Add the following line to the file:
   ```
   .env.local
   ```

This step will prevent the `.env.local` file from being tracked by Git and keep your sensitive credentials secure. 



### How to Run the Application

1. Open your terminal in the project directory and run the following command: 
   ```bash
   npm run dev
   ```

2. Paste `http://localhost:3000` in your browser to view the project.

<p align="right">(<a href="#readme-top">top of page</a>)</p>



# Home Page 
<img src="/public/assets/images/StoreItHome.png" alt="StoreIt home page">

# OTP Verification
<img src="/public/assets/images/OTPVerification.png" alt="OTP Verfication page">

# Storage Dashboard
<img src="/public/assets/images/StorageDashboard.png" alt="Storage Dashboard">

<p align="right">(<a href="#readme-top">top of page</a>)</p>



### Contributing

I have learned that contributions are the heart of what makes the open source community such an amazing place! We are constantly able to learn, grow, inspire eachother, and create incredible things. Any contributions you make are **greatly appreciated**, we are so lucky to be here together.

If you have a suggestion that would make this project better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

Please, don't forget to give the project a :star:! 

I appreciate you!

<p align="right">(<a href="#readme-top">top of page</a>)</p>



### License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">top of page</a>)</p>



### Acknowledgments

Please take some time to check out the links below! I found value in each and every one of them while creating this project, so my hope is that you will to!

* [Google Drive Clone with Next.js 15](https://youtu.be/lie0cr3wESQ?si=2ec5nZEWd7a7sYll) - Special thank you to _JavaScript Mastery_ for the tutorial!
* [Best README Template](https://github.com/othneildrew/Best-README-Template)
* [Basic Syntax: Markdown Guide](https://www.markdownguide.org/basic-syntax/#reference-style-links)
* [Formatting Syntax: GitHub](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)
* [Choose an Open Source License](https://choosealicense.com)
* [GitHub Emoji Cheat Sheet](https://github.com/ikatyang/emoji-cheat-sheet/blob/master/README.md#animal-bug)

> [!TIP]
> The most efficient way to deploy your Next.js application is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) directly from the creators of Next.js 

For more details, check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment).

<p align="right">(<a href="#readme-top">top of page</a>)</p>




* [Clerk - Webhooks](https://clerk.com/docs/webhooks/sync-data)
* [Clerk - Customize Session Tokens](https://clerk.com/docs/backend-requests/making/custom-session-token)
* [Vercel Functions](https://vercel.com/docs/functions)
* [useDropzone - uploadthing for Next.js](https://v6.docs.uploadthing.com/api-reference/react#usedropzone)
* [Mongoose](https://www.npmjs.com/package/mongoose)
* [react-datepicker](https://www.npmjs.com/package/react-datepicker)
* [Stripe](https://stripe.com/)
* [Stripe-hosted page Docs(Next.js)](https://docs.stripe.com/checkout/quickstart?lang=node&client=next)

Stripe Test Card
https://docs.stripe.com/testing

# https://dashboard.stripe.com/apikeys

# Set this environment variable to support webhooks — https://stripe.com/docs/webhooks#verify-events