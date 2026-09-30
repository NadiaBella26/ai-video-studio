export const VIDEO_FORMATS = {
  auto: { label: 'Auto Detect', icon: 'Wand2' },
  shorts: { label: 'YouTube Shorts', icon: 'Play' },
  reels: { label: 'Instagram Reels', icon: 'Film' },
  portrait: { label: 'Portrait Video', icon: 'Smartphone' },
  landscape: { label: 'Landscape Video', icon: 'Monitor' },
  square: { label: 'Square Video', icon: 'Square' },
  youtube: { label: 'YouTube Video', icon: 'Youtube' },
  advertisement: { label: 'Advertisement', icon: 'Megaphone' },
  story: { label: 'Story', icon: 'BookOpen' },
  explainer: { label: 'Explainer', icon: 'HelpCircle' },
  educational: { label: 'Educational', icon: 'GraduationCap' },
  promotion: { label: 'Promotion', icon: 'TrendingUp' },
  'talking-character': { label: 'Talking Character', icon: 'Users' },
  avatar: { label: 'AI Avatar', icon: 'Smile' },
  cinematic: { label: 'Cinematic', icon: 'Clapperboard' },
  comedy: { label: 'Comedy', icon: 'Laugh' },
  custom: { label: 'Custom', icon: 'Settings' },
};

export const ASPECT_RATIOS = {
  '9:16': { label: 'Portrait (9:16)', dimensions: [360, 640] },
  '16:9': { label: 'Landscape (16:9)', dimensions: [1280, 720] },
  '1:1': { label: 'Square (1:1)', dimensions: [1080, 1080] },
  '4:5': { label: 'Social Portrait (4:5)', dimensions: [1080, 1350] },
  custom: { label: 'Custom', dimensions: null },
};

export const DURATIONS = [
  { value: 5, label: '5 seconds' },
  { value: 10, label: '10 seconds' },
  { value: 15, label: '15 seconds' },
  { value: 30, label: '30 seconds' },
  { value: 45, label: '45 seconds' },
  { value: 60, label: '1 minute' },
  { value: 90, label: '1.5 minutes' },
  { value: 120, label: '2 minutes' },
  { value: 300, label: '5 minutes' },
  { value: 600, label: '10 minutes' },
];

export const LANGUAGES = [
  { value: 'en', label: 'English' },
  { value: 'pidgin', label: 'Nigerian Pidgin' },
  { value: 'yo', label: 'Yoruba' },
  { value: 'ig', label: 'Igbo' },
  { value: 'ha', label: 'Hausa' },
  { value: 'fr', label: 'French' },
  { value: 'es', label: 'Spanish' },
  { value: 'ar', label: 'Arabic' },
];

export const VOICE_TYPES: Record<string, string> = {
  male: 'Male',
  female: 'Female',
  child: 'Child-like',
  young: 'Young',
  mature: 'Mature',
  energetic: 'Energetic',
  calm: 'Calm',
  funny: 'Funny',
  professional: 'Professional',
  storytelling: 'Storytelling',
};

export const CHARACTER_MODELS = [
  { value: 'human', label: 'Human' },
  { value: 'cartoon', label: 'Cartoon' },
  { value: 'animal', label: 'Animal' },
  { value: 'fantasy', label: 'Fantasy' },
];

export const CAMERA_ANGLES = [
  'Wide',
  'Medium',
  'Close-up',
  'POV',
];

export const CAMERA_MOVEMENTS = [
  'Static',
  'Pan',
  'Zoom',
  'Dolly',
  'Orbit',
];

export const VIDEO_STYLES = [
  'Realistic',
  'Cinematic',
  'Documentary',
  'Cartoon',
  '3D',
  'Anime-inspired',
  'Educational',
  'Commercial',
  'Minimal',
  'Social-media',
  'Vintage',
  'Futuristic',
];

export const EXAMPLE_PROMPTS = [
  {
    title: 'Funny Nigerian Baby Ad',
    content: `Create a funny, lively 45–60 second AI video featuring a cute Nigerian baby as the main character. The baby should look adorable, expressive, playful, and confident, speaking directly to the camera like a tiny adult. Use natural Nigerian Pidgin throughout.

OUTFIT:
The baby is wearing a traditional Nigerian wrapper with beautiful faded/mixed colours and a simple matching shebi-style shirt.

SETTING:
A cosy Nigerian home with a warm family atmosphere.

VIDEO STYLE:
Funny, energetic, highly expressive, family-friendly, realistic lip-sync, natural Nigerian mannerisms, clear voice, good facial expressions, and playful comedy.

Add cheerful Nigerian-style background music and funny sound effects.`,
  },
  {
    title: 'Product Explainer',
    content: 'Create a 30-second professional product explainer video for a mobile app. Include animated transitions, clear text overlays, and a professional male voiceover in English.',
  },
  {
    title: 'Educational Story',
    content: 'Make a 1-minute educational video about climate change, featuring animated visuals, engaging narration, and colorful graphics. Use a calm, professional storytelling voice.',
  },
];
