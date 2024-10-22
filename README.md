This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, download all of the neccessary packages:

```bash
npm i
```

Second, run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

The server will immeditaley boot up `app/page.tsx`. The pages auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Project File Structure

The project structure is organized as follows:

```
<PROJECT_NAME>/
├── public/
│   └── ...
├── src/
│   ├── app/
│   │   └── ...
│   ├── components/
│   │   └── ...
│   └── lib/
│       └── utils.ts
├── .eslintrc.json
├── .gitignore
├── components.json
├── next.config.js
├── package-lock.json
├── package.json
├── postcss.config.js
├── README.md
├── tailwind.config.js
└── tsconfig.json
```

## File Descriptions

- **public/**:
- **src/app/**: Contains all web pages, globalcss and the favicon
- **src/components/**: Contains all custom components and shadcn components
- **src/lib/utils.ts**: Combines and merges CSS class names using clsx and tailwind-merge
- **.eslintrc.json**: Nextjs configuration file for ESLint
- **.gitignore**: Specifies files and directories to be ignored by Git.
- **components.json**: Used to configure how we obtain shadcn components
- **next.config.js**: All of our top level nextjs configurations
- **package-lock.json**: Contains the detailed dependencies and peer dependencies that are downloaded to the project.
- **package.json**: Contains the project metadata and dependencies.
- **postcss.config.js**: Config file for PostCSS
- **README.md**: README for the project containing all baseline information on the repository
- **tailwind.config.js**: Our tailwind configuration file
- **tsconfig.json**: Our typescript configuration file
