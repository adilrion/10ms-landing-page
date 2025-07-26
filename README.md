# 10 Minute IELTS - Landing Page

A modern, responsive landing page for 10 Minute IELTS course built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Live Demo

Visit the live application: [https://10-minute-ielts.vercel.app/](https://10-minute-ielts.vercel.app/)

## 📋 Table of Contents

-   [Features](#features)
-   [Tech Stack](#tech-stack)
-   [Getting Started](#getting-started)
    -   [Prerequisites](#prerequisites)
    -   [Installation](#installation)
    -   [Development](#development)
-   [Docker Setup](#docker-setup)
    -   [Production Build](#production-build)
    -   [Development with Docker](#development-with-docker)
-   [Project Structure](#project-structure)
-   [Components](#components)
-   [Deployment](#deployment)
-   [Contributing](#contributing)

## ✨ Features

-   📱 Responsive design optimized for all devices
-   ⚡ Fast and optimized with Next.js 13
-   🎨 Modern UI with Tailwind CSS
-   🔧 TypeScript for type safety
-   📊 Interactive components and animations
-   🎯 SEO optimized
-   🌙 Theme support
-   📈 Course promotion and testimonials
-   ⏱️ Countdown timers
-   📋 FAQ sections
-   👨‍🏫 Instructor profiles
-   🎬 Video trailer integration

## 🛠️ Tech Stack

-   **Framework:** Next.js
-   **Language:** TypeScript
-   **Styling:** Tailwind CSS
-   **UI Components:** Radix UI
-   **Icons:** Lucide React
-   **Deployment:** Vercel
-   **Container:** Docker

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

-   [Node.js](https://nodejs.org/) (version 18 or higher)
-   [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
-   [Docker](https://www.docker.com/) (optional, for containerized development)

### Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/adilrion/10ms-landing-page.git
    cd 10ms-landing-page
    ```

2. **Install dependencies:**
    ```bash
    npm install
    ```

### Development

1. **Start the development server:**

    ```bash
    npm run dev
    ```

2. **Open your browser and visit:**
    ```
    http://localhost:3000
    ```

The page will reload automatically when you make changes to the code.

## 🐳 Docker Setup

This project includes Docker configuration for both development and production environments.

### Production Build

1. **Build the Docker image:**

    ```bash
    docker build -t 10-minute-ielts .
    ```

2. **Run the container:**
    ```bash
    docker run -p 3000:3000 10-minute-ielts
    ```

### Development with Docker

1. **Using Docker Compose for development:**

    ```bash
    docker-compose up dev
    ```

2. **Using Docker Compose for production:**

    ```bash
    docker-compose up app
    ```

3. **Build and run in detached mode:**

    ```bash
    docker-compose up -d app
    ```

4. **Stop the containers:**
    ```bash
    docker-compose down
    ```

## 📁 Project Structure

```
├── app/                    # Next.js 13 app directory
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout component
│   └── page.tsx           # Home page component
├── components/            # Reusable UI components
│   ├── ui/               # Base UI components
│   ├── AboutSection.tsx
│   ├── HeroSection.tsx
│   ├── Navbar.tsx
│   └── ...               # Other page sections
├── lib/                  # Utility functions
│   └── utils.ts          # Helper utilities
├── public/               # Static assets
│   └── logo.png
├── types/                # TypeScript type definitions
│   └── product.ts
├── Dockerfile            # Production Docker configuration
├── Dockerfile.dev        # Development Docker configuration
├── docker-compose.yml    # Docker Compose configuration
└── README.md            # Project documentation
```

## 🧩 Components

The application is built with modular components:

-   **HeroSection**: Main banner with call-to-action
-   **AboutSection**: Course overview and benefits
-   **InstructorsSection**: Instructor profiles and credentials
-   **TestimonialsSection**: Student reviews and feedback
-   **FAQSection**: Frequently asked questions
-   **CourseDetailsSection**: Detailed course information
-   **CTASection**: Call-to-action sections
-   **Footer**: Site footer with links and information

## 📱 Available Scripts

-   `npm run dev` - Start development server with Turbo
-   `npm run build` - Build the application for production
-   `npm run start` - Start the production server
-   `npm run lint` - Run ESLint for code quality

## 🚀 Deployment

### Vercel (Recommended)

The easiest way to deploy this Next.js app is using [Vercel](https://vercel.com/):

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically with each push to main branch

### Docker Deployment

1. **Build the production image:**

    ```bash
    docker build -t 10-minute-ielts .
    ```

2. **Deploy to your preferred container platform:**
    - AWS ECS
    - Google Cloud Run
    - Azure Container Instances
    - DigitalOcean App Platform

## 🔧 Environment Variables

Create a `.env.local` file in the root directory for environment-specific variables:

```env
# Add your environment variables here
NEXT_PUBLIC_API_URL=your_api_url
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Team

-   **Developer**: [Adil Rion](https://github.com/adilrion)

## 📞 Support

For support and questions:

-   Email: support@10minuteielts.com
-   GitHub Issues: [Create an issue](https://github.com/adilrion/10ms-landing-page/issues)

---

Made with ❤️ by the 10 Minute IELTS team
