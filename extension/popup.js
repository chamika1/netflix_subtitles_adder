// Popup script for Netflix Sinhala Subtitles Extension

document.addEventListener('DOMContentLoaded', () => {
  // Open Netflix button
  document.getElementById('open-netflix').addEventListener('click', () => {
    chrome.tabs.create({ url: 'https://www.netflix.com' });
  });

  // Help button
  document.getElementById('help').addEventListener('click', () => {
    alert(`Netflix Sinhala Subtitles - Help

How to get Sinhala subtitles:
1. Find Sinhala subtitle files (.srt or .vtt) for your movie/show
2. Popular sites: opensubtitles.org, subscene.com
3. Make sure the subtitle file matches your video

Supported formats:
- .srt (SubRip)
- .vtt (WebVTT)

Tips:
- Subtitle timing should match Netflix video
- If subtitles are out of sync, you may need to adjust the subtitle file
- You can adjust subtitle position and size if needed

Troubleshooting:
- Refresh the Netflix page if subtitles don't appear
- Make sure you're on a video playback page
- Check browser console for any errors`);
  });

  // Check subtitle status (if on Netflix page)
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    if (tabs[0] && tabs[0].url && tabs[0].url.includes('netflix.com')) {
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

