import axios, { AxiosInstance } from 'axios';

const API_BASE_URL = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';

class APIClient {
  private client: AxiosInstance;

  constructor() {
    this.client = axios.create({
      baseURL: `${API_BASE_URL}/api`,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    // Add auth token to requests
    this.client.interceptors.request.use((config) => {
      const token = typeof window !== 'undefined' ? localStorage.getItem('auth-token') : null;
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    });
  }

  // Project endpoints
  async createProject(data: any) {
    return this.client.post('/projects', data);
  }

  async getProjects() {
    return this.client.get('/projects');
  }

  async getProject(id: string) {
    return this.client.get(`/projects/${id}`);
  }

  async updateProject(id: string, data: any) {
    return this.client.patch(`/projects/${id}`, data);
  }

  async deleteProject(id: string) {
    return this.client.delete(`/projects/${id}`);
  }

  // Generation endpoints
  async generateVideo(projectId: string) {
    return this.client.post(`/projects/${projectId}/generate`);
  }

  async generateScenes(projectId: string, prompt: string) {
    return this.client.post(`/projects/${projectId}/generate-scenes`, { prompt });
  }

  async regenerateScene(sceneId: string) {
    return this.client.post(`/scenes/${sceneId}/regenerate`);
  }

  // Character endpoints
  async createCharacter(data: any) {
    return this.client.post('/characters', data);
  }

  async getCharacters() {
    return this.client.get('/characters');
  }

  async updateCharacter(id: string, data: any) {
    return this.client.patch(`/characters/${id}`, data);
  }

  async deleteCharacter(id: string) {
    return this.client.delete(`/characters/${id}`);
  }

  // AI endpoints
  async enhancePrompt(prompt: string) {
    return this.client.post('/ai/enhance-prompt', { prompt });
  }

  async generateScript(prompt: string) {
    return this.client.post('/ai/generate-script', { prompt });
  }

  async generateCaptions(videoId: string) {
    return this.client.post(`/videos/${videoId}/generate-captions`);
  }

  // Video endpoints
  async exportVideo(projectId: string, options: any) {
    return this.client.post(`/projects/${projectId}/export`, options);
  }
}

export const apiClient = new APIClient();
