<a id="readme-top"></a>

<h1 align="center">Evently | Event Management Platform :tada:</h1> 

<div align="center">

<img src="/public/assets/images/homepage.png" alt="Picture of Evently homepage">

<p align="center">Inspired by Eventbrite, Evently was built to enhance your ablity to create, organize, and manage events with features like authentication, search, dynamic categories, and seamless Stripe powered checkout.
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
    <li><a href="#special-considerations">Special Considerations</a></li>
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
- [Clerk](https://clerk.com/)
- [MongoDB](https://www.mongodb.com/)
- [Zod](https://zod.dev/)
- [UploadThing](https://uploadthing.com/)
- [Postman](https://www.postman.com/)
- [Stripe](https://stripe.com/)



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

    NEXT_PUBLIC_SERVER_URL=http://localhost:3000/ or your_custom_domain
   ``` 

5. **Add `.env.local` to `.gitignore`**

> [!CAUTION]
> To ensure your sensitive information does not get committed to version control:
  - Open (or create) the `.gitignore` file in the root directory.
  - Add the following line to the file:
   ```
   .env.local
   ```

This step will prevent the `.env.local` file from being tracked by Git and keep your sensitive credentials secure. 



## Special Considerations

Use the following links below to help you configure your project for seamless integrations.

### 1. Add custom session tokens to include additional claims in your application 

[Clerk - Customize Session Tokens](https://clerk.com/docs/backend-requests/making/custom-session-token)

Add any claim to your session token that you need -

<img src="/public/assets/images/custom_session_token.png" alt="Customized Session Token using Clerk's Dashboard">



### 2. Sync your Clerk data to your application using webhooks

[Clerk - Webhooks](https://clerk.com/docs/webhooks/sync-data)

Following the above documentation to subsribe to all <ins>user</ins> events - 

<img src="/public/assets/images/webhook_events.png" alt="Clerk Subscribed Webhook Events">



### 3. Secure your webhook enpoint to receive real-time event data from Stripe: 

Listen to events in your Stripe account on your webhook endpoint - 
[Stripe - Webhook Endpoint](https://stripe.com/docs/webhooks#verify-events)

Register your endpoint within [Stripe - Dashboard](https://dashboard.stripe.com/apikeys)

Follow [Stripe-hosted page (Next.js)](https://docs.stripe.com/checkout/quickstart?lang=node&client=next) using their interactive working code samples to integrate with Stripe Checkout. 

> [!WARNING]
> Make sure within your Stripe Dashboard it is set to "Test Mode"

Simulate payments with your integration using their test cards - 

[Stripe Test Cards](https://docs.stripe.com/testing)

<img src="/public/assets/images/stripe_test_card.png" alt="Stripe Test Card">

<p align="right">(<a href="#readme-top">top of page</a>)</p>



### How to Run the Application

1. Open your terminal in the project directory and run the following command: 
   ```bash
   npm run dev
   ```

2. Paste `http://localhost:3000` in your browser to view the project.

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

* [Full Stack Next 14 MERN Events App](https://youtu.be/zgGhzuBZOQg?si=9MwM9d9nYH3qgZXU) - Special thank you to _JavaScript Mastery_ for the tutorial!
* [Next.js deployment documentation](https://nextjs.org/docs/deployment)
* [Vercel Functions](https://vercel.com/docs/functions)
* [useDropzone - uploadthing for Next.js](https://v6.docs.uploadthing.com/api-reference/react#usedropzone)
* [Mongoose](https://www.npmjs.com/package/mongoose)
* [Best README Template](https://github.com/othneildrew/Best-README-Template)
* [Basic Syntax: Markdown Guide](https://www.markdownguide.org/basic-syntax/#reference-style-links)
* [Formatting Syntax: GitHub](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)
* [Choose an Open Source License](https://choosealicense.com)
* [GitHub Emoji Cheat Sheet](https://github.com/ikatyang/emoji-cheat-sheet/blob/master/README.md#animal-bug)

> [!TIP]
> Deploy your Next.js application using the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) directly from the creators of Next.js

<p align="right">(<a href="#readme-top">top of page</a>)</p>