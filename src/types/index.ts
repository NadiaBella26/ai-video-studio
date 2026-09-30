export type VideoFormat = 
  | 'auto'
  | 'shorts'
  | 'reels'
  | 'portrait'
  | 'landscape'
  | 'square'
  | 'youtube'
  | 'advertisement'
  | 'story'
  | 'explainer'
  | 'educational'
  | 'promotion'
  | 'talking-character'
  | 'avatar'
  | 'cinematic'
  | 'comedy'
  | 'custom';

export type AspectRatio = '9:16' | '16:9' | '1:1' | '4:5' | 'custom';

export type VoiceType = 'male' | 'female' | 'child' | 'young' | 'mature' | 'energetic' | 'calm' | 'funny' | 'professional' | 'storytelling';

export type Language = 'en' | 'yo' | 'ig' | 'ha' | 'fr' | 'es' | 'ar' | 'pidgin';

export type GenerationStatus = 'idle' | 'preparing' | 'creating-scenes' | 'generating-visuals' | 'generating-voice' | 'adding-music' | 'synchronizing' | 'rendering' | 'finalizing' | 'completed' | 'failed';

export interface VideoProject {
  id: string;
  title: string;
  description?: string;
  thumbnail?: string;
  status: 'draft' | 'generating' | 'completed' | 'failed';
  prompt?: string;
  videoType: VideoFormat;
  aspectRatio: AspectRatio;
  duration: number;
  language: Language;
  voiceType: VoiceType;
  scenes: VideoScene[];
  video?: {
    id: string;
    url: string;
    duration: number;
  };
  createdAt: Date;
  updatedAt: Date;
}

export interface VideoScene {
  id: string;
  sceneIndex: number;
  title: string;
  description?: string;
  script?: string;
  characterId?: string;
  backgroundUrl?: string;
  cameraAngle?: string;
  cameraMovement?: string;
  lighting?: string;
  duration: number;
  musicUrl?: string;
  soundEffects?: string[];
  status: 'pending' | 'generating' | 'completed' | 'failed';
  generatedUrl?: string;
}

export interface AICharacter {
  id: string;
  name: string;
  description?: string;
  appearance?: string;
  age?: string;
  outfit?: string;
  personality?: string;
  voiceType?: VoiceType;
  expressions?: string[];
  speakingStyle?: string;
  imageUrl?: string;
  modelType: 'human' | 'cartoon' | 'animal' | 'fantasy';
  isPublic?: boolean;
}

export interface Caption {
  id: string;
  text: string;
  startTime: number;
  endTime: number;
  position: 'top' | 'center' | 'bottom';
  style?: {
    fontSize: number;
    fontFamily: string;
    color: string;
    backgroundColor?: string;
  };
}
