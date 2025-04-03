
export class AudioManager {
  private audioElements: Map<string, HTMLAudioElement> = new Map();
  
  // Load an audio element
  load(id: string, src: string): void {
    if (!this.audioElements.has(id)) {
      const audio = new Audio(src);
      audio.loop = true;
      this.audioElements.set(id, audio);
    }
  }
  
  // Play audio
  play(id: string): void {
    const audio = this.audioElements.get(id);
    if (audio) {
      audio.play().catch(err => {
        console.error("Failed to play audio:", err);
      });
    }
  }
  
  // Pause audio
  pause(id: string): void {
    const audio = this.audioElements.get(id);
    if (audio) {
      audio.pause();
    }
  }
  
  // Set volume
  setVolume(id: string, volume: number): void {
    const audio = this.audioElements.get(id);
    if (audio) {
      audio.volume = volume / 100;
    }
  }
  
  // Pause all audio
  pauseAll(): void {
    this.audioElements.forEach(audio => {
      audio.pause();
    });
  }
  
  // Set volume for all
  setVolumeAll(volume: number): void {
    this.audioElements.forEach(audio => {
      audio.volume = volume / 100;
    });
  }
  
  // Clean up
  cleanup(): void {
    this.audioElements.forEach(audio => {
      audio.pause();
      audio.src = "";
    });
    this.audioElements.clear();
  }
}
