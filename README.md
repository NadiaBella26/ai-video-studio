# AI Video Studio

A professional AI-powered video creation platform that transforms text prompts into high-quality videos with support for multiple formats, languages, voices, and customization options.

## Features

✨ **Text-to-Video Generation**
- Convert detailed text prompts into professional videos
- Support for 13+ video formats (Shorts, Reels, Portrait, Landscape, Ads, etc.)
- Multiple aspect ratios and duration options

🎬 **Video Editor**
- Scene-by-scene editing interface
- Timeline-based editing
- Real-time preview with multiple aspect ratios
- Add captions, music, and sound effects

🗣️ **Advanced Voice & Language Support**
- 8+ languages including Nigerian Pidgin, Yoruba, Igbo, Hausa
- Multiple voice types (male, female, child, energetic, calm, etc.)
- Automatic lip-sync for talking characters

👥 **Character System**
- Create and reuse AI characters
- Multiple model types (human, cartoon, animal, fantasy)
- Consistent character appearance across scenes

🎨 **Customization**
- AI Script Writer for prompt enhancement
- Prompt Enhancer for detailed video descriptions
- Video styles (cinematic, cartoon, documentary, etc.)
- Branding and watermarks

💾 **Project Management**
- Save and resume projects
- Template library
- Generation history
- Draft management

📤 **Export Options**
- Multiple resolutions (480p, 720p, 1080p)
- Social media formats
- Custom aspect ratios

## Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript, Tailwind CSS
- **State Management**: Zustand
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: Supabase
- **Video Processing**: (API-based integration)
- **UI Components**: Lucide React, Framer Motion

## Getting Started

### Prerequisites
- Node.js 18+
- PostgreSQL database
- Supabase account (for authentication)

### Installation

```bash
# Clone the repository
git clone https://github.com/NadiaBella26/ai-video-studio.git
cd ai-video-studio

# Install dependencies
npm install

# Setup environment variables
cp .env.example .env.local

# Update .env.local with your credentials:
# - Supabase URL and keys
# - Video generation API keys
# - Database URL
# - TTS API keys

# Setup database
npx prisma db push

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
ai-video-studio/
├── src/
│   ├── app/              # Next.js app directory
│   ├── pages/            # API routes
│   ├── components/       # React components
│   ├── lib/              # Utilities and helpers
│   ├── store/            # Zustand stores
│   ├── types/            # TypeScript types
│   └── hooks/            # Custom React hooks
├── prisma/               # Database schema
├── public/               # Static assets
└── package.json
```

## Core Workflow

1. **Home Dashboard** - Browse projects, templates, characters
2. **Create Project** - Enter prompt or select template
3. **Configure** - Choose video type, aspect ratio, duration, language, voice
4. **Generate** - AI creates scenes automatically
5. **Edit** - Customize scenes, characters, dialogue, music
6. **Preview** - Review in multiple formats
7. **Export** - Download in desired resolution/format

## API Integration

The platform uses a provider-based architecture for video generation APIs. Current support includes:

- Placeholder for video generation service
- Placeholder for text-to-speech
- Placeholder for scene generation

To connect a specific provider:
1. Update `/src/lib/video-providers.ts`
2. Implement provider interface
3. Update `.env.local` with API credentials

## Development

```bash
# Run tests
npm run test

# Build for production
npm run build

# Start production server
npm run start

# Lint code
npm run lint

# Manage database
npx prisma studio
```

## Roadmap

- [ ] Advanced video effects library
- [ ] Collaboration features
- [ ] API for third-party integrations
- [ ] Mobile app
- [ ] Real-time collaboration
- [ ] More AI character presets
- [ ] Advanced analytics

## License

MIT

## Support

For issues and feature requests, please visit the [Issues](https://github.com/NadiaBella26/ai-video-studio/issues) page.
