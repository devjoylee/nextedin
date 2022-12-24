<!-- PROJECT LOGO -->
<div align="center">
  <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="Logo" width="50">
  <h1>Linkedin Clone Project</h1>
  <p>
    <a href="https://nextedin.vercel.app/home" target="_blank">View Demo</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details align="right">
  <summary>Table of Contents</summary>
    <div><a href="#About-The-Project">About The Project</a></div>
    <div><a href="#Built-With">Built With</a></div>
    <div><a href="#Getting-Started">Getting Started</a></div>
    <div><a href="#Main-Features">Main Features</a></div>
    <div><a href="#Commit-Convention">Commit Convention</a></div>
</details>

## About The Project

> It is a clone project that implements Linkedin website. The website is responsive on all screen sizes and server side rendered with NextJS. Also it is connected to database management system called MongoDB and manage all data from the website.

- Production Period : 2022.08 - 2022.11

<br/>

## Built With

<img src="https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white">&nbsp;&nbsp;<img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=Next.js&logoColor=white"/>&nbsp;&nbsp;<img src="https://img.shields.io/badge/Tailwind CSS-06B6D4?style=for-the-badge&logo=Tailwind CSS&logoColor=white"/>&nbsp;&nbsp;<img src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=MongoDB&logoColor=white"/>

<br/>

## Getting Started

You are able to start the app by typing the following commands in the command line:

```bash
git clone https://github.com/devjoylee/nextedin.git
npm install
npm run dev
```

<br/>

## Main Features

### 1. Google Authentication by Next-Auth

- Implemented Google sign-in using next-auth API provider
- Access to the google provider from a component by rendering the next-auth provider on server-side <br/>
  **_[📝 Read More in my blog](https://devjoylee.github.io/series/NextJS)_**
- Code Preview

```tsx
// pages/api/auth/[...nextauth].ts
import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    // add more providers here
  ],
});
```

```tsx
// pages/home/index.ts
import { getProviders } from 'next-auth/react';
import type { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next';

export type ProviderType = InferGetServerSidePropsType<typeof getServerSideProps>;
const Home: NextPage = ({ providers }: ProviderType) => {
  return (
    <div className='space-y-10 relative h-full'>
      {/* LoginHeader 
					SignIn by accessing to the google provider on server side */}
      {Object.values(providers).map((provider: any) => (
        <div key={provider.name}>
          <button onClick={() => signIn(provider.id, { callbackUrl: '/' })}>Sign In</button>
        </div>
      ))}
    </div>
  );
};
export default Home;

// 👉 get providers from next-auth API
export const getServerSideProps: GetServerSideProps = async (context) => {
  const providers = await getProviders();
  return { props: { providers } };
};
```

<br/>

### 2. Fetching data using useSession hook after logged in

- Managed the user data (such as name, email..) on the server side by the `useSession` hook
- Code Preview

```tsx
// components/Feed/SideBar
export const SideBar = () => {
  const { data: session } = useSession();
  const { image: profile, name, email } = session?.user!;

  return (
    <div className='space-y-2 min-w-max md:max-w-lg'>
      <Avatar src={profile as string} w='60' h='60' />
      <div className='mt-5 py-4 space-x-0.5'>
        <p className='...'>{name}</p>
        <p className='...'>{email}</p>
      </div>
      // ...
    </div>
  );
};
```

<br/>

### 3. Running POST & GET API when uploading feeds

- POST

```tsx
// components/Feed/Modal/PostCreateModal.tsx
const uploadPost = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  const response = await fetch('/api/posts', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      text: text,
      image: image,
      profile: profile as string,
      username: name as string,
      createAt: new Date().toString(),
    }),
  });
  const responseData = await response.json();
  closeModal();
};
//...
<form onSubmit={uploadPost}></form>;
```

- GET

```tsx
// components/Feed/PostList/PostList.tsx
useEffect(() => {
  const fetchPosts = async () => {
    const response = await fetch('/api/posts', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });

    const responseData = await response.json();
    setRealtimePost(responseData);
    setLoadPost(false);
    setSSRPost(false);
  };

  fetchPosts();
}, [loadPost]);
```

<br/>

### 4. Dark Theme by Next-Themes

- Created an animated custom button for switching light & dark theme
- Rendered different classes by theme using **Tailwind CSS**

<div align="center">
<img src="https://user-images.githubusercontent.com/68415905/221759411-47d5c056-feaa-4cab-a9b8-176881f824df.gif" alt=""></div>

- Code Preview

```jsx
// components/Feed/Header/ThemeButton.tsx
import { useTheme } from 'next-themes';

export const ThemeButton = () => {
  const { setTheme, resolvedTheme: theme } = useTheme();
  const handleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');

  return (
    <button onClick={handleTheme} className='theme-btn'>
      <input type='checkbox' id='theme' defaultChecked={theme === 'dark'} />
      <span></span>
    </button>
  );
};
```

```jsx
// tailwind.config.js
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        black: '#21252b',
        white: '#fcfcfc',
```

```css
/* TailwindCSS theme style */
@layer components {
  .theme-btn {
    --white: theme(colors.black);
    --black: theme(colors.white);
    //...
  }
}
```

<br/>

## Commit Convention

The commit message is written with the GITMOJI icons in order to make commit messages more intuitive.

| Gitmoji | Meaning                     |
| ------- | --------------------------- |
| 🎉      | Init or begin a project.    |
| 🚚      | Move or rename resources    |
| ✨      | Introduce new features      |
| 💄      | Add the UI and style files  |
| ♻️      | Refactor code               |
| 📝      | Add or update documentation |
| ➕      | Add a dependency            |
| 🐛      | Fix a bug                   |
| 🚀      | Deploy stuff                |

REFERENCE : Gitmoji (http://gitmoji.dev/)

<br/>

<p align="right">(<a href="#top">back to top</a>)</p>
