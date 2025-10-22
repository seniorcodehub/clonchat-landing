# Clonchat Landing Page

A modern, production-ready landing page for **Clonchat** - a platform for creating custom chatbots for businesses.

## 🚀 Features

- **Next.js 15.5.6** with React 19.1.0
- **TypeScript** with strict mode
- **Tailwind CSS 4** for styling
- **Framer Motion** for smooth animations
- **Bilingual Support** (Spanish/English)
- **Mobile-responsive** design
- **White & Blue** color scheme
- **AI-Powered Chatbot** - Interactive assistant using GROQ AI to answer business questions

## 📋 What is Clonchat?

Clonchat allows businesses to create custom chatbots in minutes without any coding knowledge. Perfect for:

- Order management for restaurants and cafes
- Reservation systems for hotels and services
- Customer engagement 24/7
- Automatic subdomain generation
- PDF document upload with RAG technology
- Full customization (colors, logo, prompt)
- Multi-channel deployment (Web, WhatsApp, Telegram, Shopify)

## 🎨 Sections

1. **Hero** - Video showcase with main CTA
2. **Features** - 6 key features with icons
3. **How It Works** - 3-step process
4. **Stats** - Key metrics
5. **Testimonials** - Customer success stories
6. **CTA** - Call to action
7. **Footer** - Links and contact info
8. **Floating Chatbot** - AI assistant available on all pages

## 🛠️ Getting Started

### Prerequisites

1. **GROQ API Key**: Get your free API key from [https://console.groq.com/keys](https://console.groq.com/keys)

### Installation

```bash
npm install
```

### Environment Setup

Create a `.env.local` file in the root directory:

```env
GROQ_API_KEY=your_groq_api_key_here
```

**Important**: Replace `your_groq_api_key_here` with your actual GROQ API key.

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the landing page.

### Build

```bash
npm run build
```

### Start Production

```bash
npm start
```

## 📁 Project Structure

```
clonchat-landing/
├── app/
│   ├── api/
│   │   └── chat/
│   │       └── route.ts  # GROQ AI chat endpoint
│   ├── globals.css       # Global styles with white/blue theme
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Main page
├── components/
│   ├── ui/               # Reusable UI components
│   │   ├── chat-widget.tsx  # Chat interface
│   │   └── ...
│   ├── floating-chatbot.tsx # Floating chat button
│   ├── navbar.tsx        # Navigation bar
│   ├── hero-section.tsx  # Hero with video
│   ├── features-section.tsx
│   ├── how-it-works-section.tsx
│   ├── stats-section.tsx
│   ├── testimonials-section.tsx
│   ├── cta-section.tsx
│   └── footer.tsx
├── lib/
│   ├── i18n.tsx          # Internationalization
│   └── utils.ts          # Utility functions
├── .env.local            # Environment variables (create this)
└── package.json
```

## 🤖 AI Chatbot

The landing page includes a floating chatbot powered by GROQ AI (llama-3.3-70b-versatile model). The chatbot:

- Appears as a floating button in the bottom-right corner
- Opens an animated chat interface when clicked
- Answers questions about Clonchat's features, pricing, and functionality
- Uses session-based storage (resets on page reload)
- Provides contextual information about:
  - Registration and onboarding process
  - Chatbot templates (appointments/orders)
  - RAG knowledge base with PDF support
  - Management dashboard features
  - Pricing plans (Freemium model)
  - Deployment options (subdomain, widget, QR code)

## 🌐 Internationalization

The landing page supports both Spanish and English. Switch between languages using the globe icon in the navbar.

Translations are managed in `lib/i18n.tsx`.

## 🎨 Color Scheme

- **Primary Blue**: `#2563eb`
- **Primary Blue Hover**: `#1d4ed8`
- **Background**: `#ffffff`
- **Text**: `#171717`
- **Accent Light**: `#dbeafe`

## 📧 Contact

- **Email**: info@clonchat.com
- **Website**: clonchat.com

## 📝 License

© 2025 Clonchat. All rights reserved.
