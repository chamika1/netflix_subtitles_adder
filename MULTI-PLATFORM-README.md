# Netflix & Prime Video Custom Subtitles Extension

A browser extension that allows you to add custom subtitle files (.srt or .vtt) to Netflix and Amazon Prime Video. Perfect for adding subtitles in languages not natively supported by these platforms, including Sinhala, Tamil, and other regional languages.

## 🌟 Features

- ✅ **Multi-Platform Support**: Works on both Netflix and Amazon Prime Video
- ✅ **Multiple Formats**: Supports both .srt (SubRip) and .vtt (WebVTT) subtitle formats
- ✅ **Fullscreen Compatible**: Subtitles work in both normal and fullscreen modes
- ✅ **Real-time Sync**: Subtitles automatically sync with video playback
- ✅ **Easy to Use**: Simple upload button on video player
- ✅ **Global Amazon Support**: Works on all Amazon domains (US, UK, Germany, France, Italy, Spain, Canada, Japan, India)

## 🎯 Supported Platforms

### Netflix
- netflix.com (all regions)

### Amazon Prime Video
- primevideo.com
- amazon.com
- amazon.co.uk
- amazon.de (Germany)
- amazon.fr (France)
- amazon.it (Italy)
- amazon.es (Spain)
- amazon.ca (Canada)
- amazon.co.jp (Japan)
- amazon.in (India)

## 📦 Installation

### Chrome/Edge (Developer Mode)

1. **Download the Extension**
   - Download or clone this repository
   - Navigate to the `extension` folder

2. **Load the Extension**
   - Open Chrome/Edge and go to `chrome://extensions/` or `edge://extensions/`
   - Enable "Developer mode" (toggle in top-right corner)
   - Click "Load unpacked"
   - Select the `extension` folder

3. **Verify Installation**
   - You should see the extension icon in your browser toolbar
   - The extension should show as "Active"

### Firefox (Developer Mode)

1. **Download the Extension**
   - Download or clone this repository
   - Navigate to the `extension` folder

2. **Load the Extension**
   - Open Firefox and go to `about:debugging#/runtime/this-firefox`
   - Click "Load Temporary Add-on"
   - Navigate to the `extension` folder and select `manifest.json`

3. **Note**: In Firefox, the extension will be removed when you close the browser. For permanent installation, you'll need to package and sign it.

## 🚀 How to Use

### Step 1: Find Subtitle Files

Get subtitle files for your content from popular sites:
- [OpenSubtitles.org](https://www.opensubtitles.org/)
- [Subscene.com](https://subscene.com/)
- [YIFY Subtitles](https://yifysubtitles.org/)

**Important**: Make sure the subtitle file timing matches the video you're watching.

### Step 2: Watch a Video

1. Open Netflix or Prime Video
2. Start playing any movie or TV show
3. Wait for the video to load completely

### Step 3: Load Subtitles

1. Look for the **"📝 Load Subtitles"** button in the top-right corner of the page
   - Netflix: Red button
   - Prime Video: Blue button

2. Click the button and select your subtitle file (.srt or .vtt)

3. You'll see a notification: **"Subtitles loaded successfully! ✅"**

4. Subtitles will appear at the bottom of the video

### Step 4: Enjoy!

- Subtitles will automatically sync with the video
- Works in fullscreen mode
- Subtitles persist for the entire video duration

## 🎨 Platform-Specific Features

### Netflix
- **Button Color**: Red (#e50914) - Netflix brand color
- **Position**: Optimized for Netflix player controls
- **Compatibility**: Tested on all Netflix regional sites

### Prime Video
- **Button Color**: Blue (#00a8e1) - Prime Video brand color
- **Position**: Optimized for Prime Video player controls
- **Compatibility**: Works across all Amazon international sites

## 🔧 Troubleshooting

### Subtitles Not Appearing

1. **Refresh the page** and try loading subtitles again
2. Make sure you're on an actual video playback page (not browse page)
3. Check browser console (F12) for any error messages
4. Ensure the subtitle file is in .srt or .vtt format

### Subtitles Out of Sync

- The subtitle file timing must match your video
- Different releases (Blu-ray, WEB-DL, etc.) may have different timings
- Try finding a subtitle file specifically for the streaming version

### Button Not Visible

1. Make sure the extension is enabled in your browser
2. Check that you're on a supported domain
3. Try refreshing the page
4. Verify the extension is loaded: Check `chrome://extensions/`

### Fullscreen Issues

- Subtitles should automatically move to fullscreen mode
- If they don't appear, exit and re-enter fullscreen
- Check console for any fullscreen-related errors

### Prime Video Specific Issues

If subtitles don't work on Prime Video:
1. Make sure you're using a supported Amazon domain
2. Some Prime Video originals may have different player structures
3. Try pausing and resuming the video after loading subtitles

## 📝 Supported Subtitle Formats

### SRT (SubRip)
```
1
00:00:01,000 --> 00:00:04,000
First subtitle line
Second subtitle line

2
00:00:05,000 --> 00:00:08,000
Next subtitle
```

### VTT (WebVTT)
```
WEBVTT

00:00:01.000 --> 00:00:04.000
First subtitle line
Second subtitle line

00:00:05.000 --> 00:00:08.000
Next subtitle
```

## 🌍 Language Support

This extension works with subtitles in **any language**, including:
- Sinhala (සිංහල)
- Tamil (தமிழ்)
- Hindi (हिन्दी)
- Arabic (العربية)
- Chinese (中文)
- Japanese (日本語)
- Korean (한국어)
- And hundreds more!

## 🎯 Use Cases

1. **Regional Languages**: Add Sinhala, Tamil, or other regional language subtitles
2. **Learning**: Use subtitles in your native language while learning a new one
3. **Accessibility**: Add custom subtitles for better accessibility
4. **Fan Translations**: Use community-created subtitle translations
5. **Multiple Languages**: Switch between different subtitle files as needed

## 🔒 Privacy & Security

- ✅ No data collection
- ✅ No external servers
- ✅ All processing happens locally in your browser
- ✅ Subtitle files are never uploaded anywhere
- ✅ Open source - you can review the code

## 🛠️ Technical Details

### Files Structure
```
extension/
├── manifest.json          # Extension configuration
├── content.js            # Main subtitle management logic
├── popup.html            # Extension popup interface
├── popup.js              # Popup functionality
├── styles.css            # Subtitle styling
├── subtitle-parser.js    # Subtitle parsing utilities
└── icons/                # Extension icons
```

### Browser Compatibility
- ✅ Chrome 88+
- ✅ Edge 88+
- ✅ Firefox 78+ (temporary install only)
- ✅ Opera 74+
- ✅ Brave (Chromium-based)

### Manifest Version
- Uses Manifest V3 (latest Chrome extension standard)

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Report bugs
- Suggest new features
- Submit pull requests
- Improve documentation

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Credits

Originally created for Netflix Sinhala subtitles, now expanded to support multiple platforms.

## 📞 Support

If you encounter any issues:
1. Check the Troubleshooting section above
2. Review existing GitHub issues
3. Create a new issue with:
   - Platform (Netflix/Prime Video)
   - Browser and version
   - Subtitle format (.srt/.vtt)
   - Error messages from console (if any)

## 🚀 Future Enhancements

Potential features for future versions:
- [ ] Disney+ support
- [ ] Hulu support
- [ ] HBO Max support
- [ ] Subtitle customization (font, size, color)
- [ ] Subtitle offset adjustment
- [ ] Multiple subtitle tracks
- [ ] Automatic subtitle download integration

---

**Version**: 2.0.0  
**Last Updated**: October 2025  
**Platforms**: Netflix, Amazon Prime Video

Made with ❤️ for global streaming audiences

