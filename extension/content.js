// Netflix & Prime Video Subtitles Extension - Content Script

class StreamingSubtitleManager {
  constructor() {
    this.subtitles = [];
    this.currentSubtitle = null;
    this.video = null;
    this.subtitleContainer = null;
    this.isActive = false;
    this.updateInterval = null;
    this.platform = this.detectPlatform();
    this.init();
  }

  detectPlatform() {
    const hostname = window.location.hostname;
    if (hostname.includes('netflix.com')) {
      return 'netflix';
    } else if (hostname.includes('primevideo.com') || hostname.includes('amazon.')) {
      return 'prime';
    }
    return 'unknown';
  }

  getPlatformConfig() {
    const configs = {
      netflix: {
        name: 'Netflix',
        color: '#e50914',
        buttonText: '📝 Load Subtitles'
      },
      prime: {
        name: 'Prime Video',
        color: '#00a8e1',
        buttonText: '📝 Load Subtitles'
      }
    };
    return configs[this.platform] || configs.netflix;
  }

  init() {
    const config = this.getPlatformConfig();
    console.log(`${config.name} Subtitles: Initializing...`);
    this.waitForVideo();
    this.createSubtitleUI();
    this.listenForMessages();
  }

  waitForVideo() {
    const config = this.getPlatformConfig();
    const checkVideo = setInterval(() => {
      this.video = document.querySelector('video');
      if (this.video) {
        console.log(`${config.name} Subtitles: Video element found`);
        clearInterval(checkVideo);
        this.setupVideoListeners();
      }
    }, 1000);
  }

  setupVideoListeners() {
    if (!this.video) return;

    this.video.addEventListener('timeupdate', () => {
      if (this.isActive && this.subtitles.length > 0) {
        this.updateSubtitle();
      }
    });

    this.video.addEventListener('seeked', () => {
      if (this.isActive) {
        this.updateSubtitle();
      }
    });

    // Listen for fullscreen changes
    document.addEventListener('fullscreenchange', () => this.handleFullscreenChange());
    document.addEventListener('webkitfullscreenchange', () => this.handleFullscreenChange());
    document.addEventListener('mozfullscreenchange', () => this.handleFullscreenChange());
    document.addEventListener('MSFullscreenChange', () => this.handleFullscreenChange());
  }

  handleFullscreenChange() {
    const config = this.getPlatformConfig();
    const isFullscreen = !!(
      document.fullscreenElement ||
      document.webkitFullscreenElement ||
      document.mozFullScreenElement ||
      document.msFullscreenElement
    );

    console.log(`${config.name} Subtitles: Fullscreen change detected, isFullscreen:`, isFullscreen);

    if (isFullscreen) {
      // Move subtitle container to fullscreen element
      const fullscreenElement = 
        document.fullscreenElement ||
        document.webkitFullscreenElement ||
        document.mozFullScreenElement ||
        document.msFullscreenElement;

      console.log('Fullscreen element:', fullscreenElement);

      if (fullscreenElement && this.subtitleContainer) {
        // Move to fullscreen container if not already there
        if (!fullscreenElement.contains(this.subtitleContainer)) {
          console.log('Moving subtitles to fullscreen container');
          fullscreenElement.appendChild(this.subtitleContainer);
        }

        // Apply fullscreen-specific styles
        this.subtitleContainer.style.position = 'absolute';
        this.subtitleContainer.style.bottom = '80px';
        this.subtitleContainer.style.left = '50%';
        this.subtitleContainer.style.transform = 'translateX(-50%)';
        this.subtitleContainer.style.zIndex = '2147483647';
        this.subtitleContainer.style.width = '80%';
        this.subtitleContainer.style.maxWidth = '1000px';
        this.subtitleContainer.style.pointerEvents = 'none';
        this.subtitleContainer.style.textAlign = 'center';
        
        console.log('Fullscreen styles applied, z-index:', this.subtitleContainer.style.zIndex);
        
        // Also ensure the subtitle text element has proper styling
        const subtitleText = document.getElementById('custom-subtitle');
        if (subtitleText) {
          subtitleText.style.zIndex = '2147483647';
          subtitleText.style.position = 'relative';
          console.log('Subtitle text element styled for fullscreen');
        }
        
        // Show a brief notification
        this.showNotification('Subtitles active in fullscreen mode ✅');
      }
    } else {
      // Return to normal mode
      console.log('Exiting fullscreen, returning to normal mode');
      
      if (this.subtitleContainer && !document.body.contains(this.subtitleContainer)) {
        document.body.appendChild(this.subtitleContainer);
      }

      if (this.subtitleContainer) {
        this.subtitleContainer.style.position = 'fixed';
        this.subtitleContainer.style.bottom = '80px';
        this.subtitleContainer.style.left = '50%';
        this.subtitleContainer.style.transform = 'translateX(-50%)';
        this.subtitleContainer.style.zIndex = '2147483647';
        this.subtitleContainer.style.width = '80%';
        this.subtitleContainer.style.maxWidth = '1000px';
        this.subtitleContainer.style.pointerEvents = 'none';
        this.subtitleContainer.style.textAlign = 'center';
      }
    }
  }

  createSubtitleUI() {
    // Create subtitle container overlay
    this.subtitleContainer = document.createElement('div');
    this.subtitleContainer.id = 'custom-subtitle-container';
    this.subtitleContainer.style.cssText = `
      position: fixed;
      bottom: 80px;
      left: 50%;
      transform: translateX(-50%);
      z-index: 2147483647;
      pointer-events: none;
      text-align: center;
      width: 80%;
      max-width: 1000px;
    `;

    const subtitle = document.createElement('div');
    subtitle.id = 'custom-subtitle';
    subtitle.style.cssText = `
      background-color: rgba(0, 0, 0, 0.8);
      color: white;
      font-size: 28px;
      font-weight: bold;
      padding: 10px 20px;
      border-radius: 5px;
      display: none;
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.9);
      line-height: 1.4;
      font-family: Arial, sans-serif;
      position: relative;
      z-index: 2147483647;
    `;

    this.subtitleContainer.appendChild(subtitle);
    document.body.appendChild(this.subtitleContainer);

    // Create control button
    this.createControlButton();
  }

  createControlButton() {
    const config = this.getPlatformConfig();
    const button = document.createElement('div');
    button.id = 'subtitle-upload-button';
    button.innerHTML = `
      <button style="
        position: fixed;
        top: 20px;
        right: 20px;
        z-index: 10000;
        background-color: ${config.color};
        color: white;
        border: none;
        padding: 10px 20px;
        border-radius: 5px;
        cursor: pointer;
        font-weight: bold;
        font-size: 14px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.3);
      ">
        ${config.buttonText}
      </button>
      <input type="file" id="subtitle-file-input" accept=".srt,.vtt" style="display: none;">
    `;

    document.body.appendChild(button);

    const fileInput = document.getElementById('subtitle-file-input');
    const uploadButton = button.querySelector('button');

    uploadButton.addEventListener('click', () => {
      fileInput.click();
    });

    fileInput.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (file) {
        this.loadSubtitleFile(file);
      }
    });
  }

  async loadSubtitleFile(file) {
    try {
      const text = await file.text();
      const fileExtension = file.name.split('.').pop().toLowerCase();
      
      if (fileExtension === 'srt') {
        this.subtitles = this.parseSRT(text);
      } else if (fileExtension === 'vtt') {
        this.subtitles = this.parseVTT(text);
      }

      if (this.subtitles.length > 0) {
        this.isActive = true;
        this.showNotification('Subtitles loaded successfully! ✅');
        console.log(`Loaded ${this.subtitles.length} subtitle entries`);
      } else {
        this.showNotification('Failed to parse subtitle file ❌');
      }
    } catch (error) {
      console.error('Error loading subtitle file:', error);
      this.showNotification('Error loading subtitle file ❌');
    }
  }

  parseSRT(text) {
    const subtitles = [];
    const blocks = text.trim().split(/\n\s*\n/);

    blocks.forEach(block => {
      const lines = block.trim().split('\n');
      if (lines.length >= 3) {
        const timeMatch = lines[1].match(/(\d{2}):(\d{2}):(\d{2}),(\d{3})\s*-->\s*(\d{2}):(\d{2}):(\d{2}),(\d{3})/);
        
        if (timeMatch) {
          const startTime = this.timeToSeconds(
            parseInt(timeMatch[1]),
            parseInt(timeMatch[2]),
            parseInt(timeMatch[3]),
            parseInt(timeMatch[4])
          );
          const endTime = this.timeToSeconds(
            parseInt(timeMatch[5]),
            parseInt(timeMatch[6]),
            parseInt(timeMatch[7]),
            parseInt(timeMatch[8])
          );

          // Remove HTML tags from subtitle text
          const text = lines.slice(2).join('\n').replace(/<[^>]*>/g, '');
          
          subtitles.push({
            start: startTime,
            end: endTime,
            text: text
          });
        }
      }
    });

    return subtitles;
  }

  parseVTT(text) {
    const subtitles = [];
    const lines = text.split('\n');
    let i = 0;

    // Skip WEBVTT header
    while (i < lines.length && !lines[i].includes('-->')) {
      i++;
    }

    while (i < lines.length) {
      const line = lines[i].trim();
      
      if (line.includes('-->')) {
        const timeMatch = line.match(/(\d{2}):(\d{2}):(\d{2})\.(\d{3})\s*-->\s*(\d{2}):(\d{2}):(\d{2})\.(\d{3})/);
        
        if (timeMatch) {
          const startTime = this.timeToSeconds(
            parseInt(timeMatch[1]),
            parseInt(timeMatch[2]),
            parseInt(timeMatch[3]),
            parseInt(timeMatch[4])
          );
          const endTime = this.timeToSeconds(
            parseInt(timeMatch[5]),
            parseInt(timeMatch[6]),
            parseInt(timeMatch[7]),
            parseInt(timeMatch[8])
          );

          i++;
          let text = '';
          while (i < lines.length && lines[i].trim() !== '') {
            text += (text ? '\n' : '') + lines[i].trim();
            i++;
          }

          // Remove HTML tags from subtitle text
          text = text.replace(/<[^>]*>/g, '');

          subtitles.push({
            start: startTime,
            end: endTime,
            text: text
          });
        }
      }
      i++;
    }

    return subtitles;
  }

  timeToSeconds(hours, minutes, seconds, milliseconds) {
    return hours * 3600 + minutes * 60 + seconds + milliseconds / 1000;
  }

  updateSubtitle() {
    if (!this.video || !this.isActive) return;

    const currentTime = this.video.currentTime;
    const subtitleElement = document.getElementById('custom-subtitle');

    // Find the current subtitle
    const currentSub = this.subtitles.find(sub => 
      currentTime >= sub.start && currentTime <= sub.end
    );

    if (currentSub) {
      subtitleElement.textContent = currentSub.text;
      subtitleElement.style.display = 'block';
    } else {
      subtitleElement.style.display = 'none';
    }
  }

  showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
      position: fixed;
      top: 80px;
      right: 20px;
      z-index: 10001;
      background-color: #333;
      color: white;
      padding: 15px 25px;
      border-radius: 5px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.4);
      font-size: 14px;
      animation: slideIn 0.3s ease-out;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => {
      notification.style.animation = 'slideOut 0.3s ease-in';
      setTimeout(() => notification.remove(), 300);
    }, 3000);
  }

  listenForMessages() {
    chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
      if (request.action === 'toggleSubtitles') {
        this.isActive = !this.isActive;
        sendResponse({ active: this.isActive });
      } else if (request.action === 'getStatus') {
        sendResponse({ 
          active: this.isActive, 
          subtitlesLoaded: this.subtitles.length > 0 
        });
      }
    });
  }
}

// Initialize the subtitle manager when the page loads
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    new StreamingSubtitleManager();
  });
} else {
  new StreamingSubtitleManager();
}

