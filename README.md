# subscription-tracker API

## Introduction

 **Subscription Management System API** that handles real users, real money, and real business logic.

This API will authenticate users using **JWTs**, connect to a **MongoDB** database, and include models and schemas integrated with **ORMs**. The architecture will be structured to ensure **scalability** and **seamless communication** with the front end.

---

## Tech Stack

The project uses the following technologies:

- **Node.js**
- **Express.js**
- **MongoDB** 

---

## Third-Party Services

This project integrates or uses the following third-party services:

- **Arcjet**: Advanced Rate Limiting and Bot Protection: with Arcjet that helps you secure the whole app. [arcjet.com](https://arcjet.com/).
- **Upstash**: Automating smart email reminders with workflows using Upstash. [Upstash.com](https://upstash.com/)


---

## Project Structure

```
subscription-tracker API
│
├── /node_modules
│
├── /config
│   ├── arcject.js
│   ├── env.js
│   ├── nodemailer.js
│   └── upstash.js
│
├── /controllers
│   ├── auth.controllers.js
│   ├── subscription.controllers.js
│   ├── user.controllers.js
│   └── workflow.controllers.js
│
├── /database
│   └── mongodb.js
│
├── /middlewares
│   ├── arcjet.middlewares.js
│   ├── auth.middlewares.js
│   └── error.middlewares.js
│
├── /models
│   ├── subscription.model.js
│   ├── token.model.js
│   └── user.model.js
│
├── /routes
│   ├── auth.routes.js
│   ├── subscription.routes.js
│   ├── user.routes.js
│   └── workflow.routes.js
│
├── /utils
│   ├── email-template.js
│   └── send-email.js
│
├── app.js
├── .env.development.local
├── .env.production.local
├── .gitattributes
├── .gitignore
├── package-lock.json
├── package.json
└── README.md
```

## Quick Start

Follow these steps to set up the project locally on your machine.

### Prerequisites

Make sure you have the following installed on your machine:

- Git
- Node.js
- npm (Node Package Manager)

### Cloning the Repository

Clone the repository to your local machine:

```bash
git clone https://github.com/adrianhajdin/subscription-tracker-api.git
cd subscription-tracker-api
```

## Installation

Install the project dependencies using npm:

```bash
npm install
```

## Set Up Environment Variables

Create a new file named `.env.local` in the root of your project and add the following content:

```
# PORT
PORT=5500
SERVER_URL="http://localhost:5500"

# ENVIRONMENT
NODE_ENV=development

# DATABASE
DB_URI=

# JWT AUTH
JWT_SECRET=
JWT_EXPIRES_IN="1d"

# ARCJET
ARCJET_KEY=
ARCJET_ENV="development"

# UPSTASH
QSTASH_URL=http://127.0.0.1:8080
QSTASH_TOKEN=

# NODEMAILER
EMAIL_PASSWORD=

```


## Running the Project

Run the project in development mode:

```bash
npm run dev
```

## Special Thanks 

A special thanks to the [JavaScript Mastery Backend Course](https://youtu.be/rOpEN1JDaD0?si=u8BmlYOQiddaWmQg) for providing the foundation and valuable insights into building backend applications using Node.js, Express, and other technologies.









