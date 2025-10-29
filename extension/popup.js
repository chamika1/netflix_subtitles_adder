// Popup script for Netflix & Prime Video Subtitles Extension

document.addEventListener('DOMContentLoaded', () => {
  // Open Netflix button
  document.getElementById('open-netflix').addEventListener('click', () => {
    chrome.tabs.create({ url: 'https://www.netflix.com' });
  });

  // Open Prime Video button (if it exists)
  const primeButton = document.getElementById('open-prime');
  if (primeButton) {
    primeButton.addEventListener('click', () => {
      chrome.tabs.create({ url: 'https://www.primevideo.com' });
    });
  }

  // Help button
  document.getElementById('help').addEventListener('click', () => {
    alert(`Netflix & Prime Video Subtitles - Help

How to get subtitles:
1. Find subtitle files (.srt or .vtt) for your movie/show
2. Popular sites: opensubtitles.org, subscene.com
3. Make sure the subtitle file matches your video

Supported formats:
- .srt (SubRip)
- .vtt (WebVTT)

Supported platforms:
- Netflix
- Amazon Prime Video

Tips:
- Subtitle timing should match the video
- If subtitles are out of sync, you may need to adjust the subtitle file
- Works in both normal and fullscreen mode

Troubleshooting:
- Refresh the page if subtitles don't appear
- Make sure you're on a video playback page
- Check browser console for any errors`);
  });

  // Check subtitle status (if on Netflix or Prime Video page)
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    if (tabs[0] && tabs[0].url && 
        (tabs[0].url.includes('netflix.com') || 
         tabs[0].url.includes('primevideo.com') || 
         tabs[0].url.includes('amazon.'))) {
      chrome.tabs.sendMessage(tabs[0].id, { action: 'getStatus' }, (response) => {
        // Check for errors (content script might not be loaded yet)
        if (chrome.runtime.lastError) {
          // Silently ignore - page might still be loading
          console.log('Content script not ready:', chrome.runtime.lastError.message);
          document.getElementById('subtitles-status').innerHTML = 
            '<span class="status-indicator status-inactive"></span>Loading...';
          return;
        }
        
        if (response && response.subtitlesLoaded) {
          document.getElementById('subtitles-status').innerHTML = 
            '<span class="status-indicator status-active"></span>Loaded';
        } else {
          document.getElementById('subtitles-status').innerHTML = 
            '<span class="status-indicator status-inactive"></span>None';
        }
      });
    }
  });
});

