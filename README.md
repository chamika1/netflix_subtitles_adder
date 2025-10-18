# 🎬 Netflix Sinhala Subtitles Extension

A Chrome extension that allows you to add custom Sinhala subtitles to Netflix videos.

## 📋 Features

- ✅ Load custom Sinhala subtitle files (.srt or .vtt format)
- ✅ Automatic subtitle synchronization with video playback
- ✅ Beautiful subtitle overlay with customizable styling
- ✅ **Fullscreen mode support** - Subtitles visible in fullscreen!
- ✅ Easy-to-use interface with one-click subtitle loading
- ✅ Support for both SRT and WebVTT subtitle formats
- ✅ Works on all Netflix content

## 🚀 Installation

### Method 1: Load Unpacked Extension (For Development/Testing)

1. **Download or Clone** this repository to your computer

2. **Open Chrome Extensions Page**
   - Open Google Chrome
   - Navigate to `chrome://extensions/`
   - Or click the three dots menu → More Tools → Extensions

3. **Enable Developer Mode**
   - Toggle the "Developer mode" switch in the top-right corner

4. **Load the Extension**
   - Click "Load unpacked" button
   - Select the folder containing the extension files (where `manifest.json` is located)

5. **Verify Installation**
   - You should see "Netflix Sinhala Subtitles" extension card
   - Make sure it's enabled (toggle switch is ON)

### Method 2: Install Icons (Optional but Recommended)

The extension needs icon files. You can create simple icons or use the placeholder icons included.

## 📖 How to Use

### Step 1: Get Sinhala Subtitle Files

Download Sinhala subtitle files for your movie/show from:
- [OpenSubtitles.org](https://www.opensubtitles.org/)
- [Subscene.com](https://subscene.com/)
- Other subtitle websites

**Supported formats:**
- `.srt` (SubRip) - Most common
- `.vtt` (WebVTT)

**Important:** Make sure the subtitle file matches your Netflix video (same version/release).

### Step 2: Open Netflix

1. Go to [Netflix.com](https://www.netflix.com/)
2. Sign in to your account
3. Start playing any movie or TV show

### Step 3: Load Subtitles

1. Look for the red button **"📝 Load Sinhala Subtitles"** in the top-right corner
2. Click the button
3. Select your Sinhala subtitle file (.srt or .vtt)
4. The subtitles will load automatically

### Step 4: Enjoy!

The Sinhala subtitles will now appear on the video, synchronized with the audio.

## ⚙️ Features & Settings

### Subtitle Display
- **Position:** Bottom center of the screen (above Netflix controls)
- **Background:** Semi-transparent black for better readability
- **Font:** Bold white text with shadow for clarity
- **Size:** Large and easy to read

### Automatic Features
- ✅ Auto-sync with video playback
- ✅ Auto-hide when not needed
- ✅ Seek-friendly (subtitles update when you skip forward/backward)

## 🛠️ Troubleshooting

### Subtitles Not Appearing?

1. **Refresh the page** - Press F5 or reload the Netflix page
2. **Check the file format** - Make sure you're using .srt or .vtt files
3. **Verify video is playing** - The extension only works during video playback
4. **Check browser console** - Press F12 and look for error messages

### Subtitles Out of Sync?

This usually means the subtitle file doesn't match the Netflix video version. Try:
1. Finding a different subtitle file
2. Using subtitle editing software to adjust timing
3. Tools like [Subtitle Edit](https://www.nikse.dk/subtitleedit/) can help sync subtitles

### Button Not Visible?

1. Make sure you're on a Netflix video page (not the browse page)
2. Wait a few seconds for the page to fully load
3. Check if the extension is enabled in `chrome://extensions/`

### Extension Not Working?

1. **Reinstall the extension:**
   - Go to `chrome://extensions/`
   - Remove the extension
   - Load it again using "Load unpacked"

2. **Check Chrome version:**
   - This extension requires Chrome 88 or later
   - Update Chrome if needed

3. **Disable conflicting extensions:**
   - Other subtitle or Netflix extensions might conflict
   - Try disabling them temporarily

## 📁 File Structure

```
netflix-sinhala-subtitles/
├── manifest.json          # Extension configuration
├── content.js            # Main extension logic
├── styles.css            # Subtitle styling
├── popup.html            # Extension popup UI
├── popup.js              # Popup functionality
├── icon16.png            # Extension icon (16x16)
├── icon48.png            # Extension icon (48x48)
├── icon128.png           # Extension icon (128x128)
└── README.md             # This file
```

## 🔧 Technical Details

### How It Works

1. **Content Script Injection:** The extension injects code into Netflix pages
2. **Video Detection:** Automatically finds the Netflix video player
3. **Subtitle Parsing:** Parses .srt or .vtt files into timed segments
4. **Time Synchronization:** Listens to video time updates and shows matching subtitles
5. **Overlay Rendering:** Displays subtitles in a custom overlay above the video

### Supported Subtitle Formats

**SRT (SubRip):**
```
1
00:00:10,500 --> 00:00:13,000
First subtitle line

2
00:00:14,000 --> 00:00:16,500
Second subtitle line
```

**VTT (WebVTT):**
```
WEBVTT

00:00:10.500 --> 00:00:13.000
First subtitle line

00:00:14.000 --> 00:00:16.500
Second subtitle line
```

## 🌐 Browser Compatibility

- ✅ Google Chrome (v88+)
- ✅ Microsoft Edge (Chromium-based)
- ✅ Brave Browser
- ✅ Other Chromium-based browsers

**Note:** Firefox requires a different extension format (WebExtensions) and would need modifications.

## 🔒 Privacy & Permissions

### Required Permissions

- **storage:** Save extension settings
- **activeTab:** Access the current Netflix tab
- **host_permissions (netflix.com):** Inject subtitle functionality into Netflix

### Privacy Commitment

- ❌ No data collection
- ❌ No tracking
- ❌ No external server communication
- ✅ All processing happens locally in your browser
- ✅ Subtitle files never leave your computer

## 🐛 Known Issues

1. **Initial Load:** May take a few seconds to detect video on page load
2. **Page Navigation:** Subtitles reset when navigating to a new episode
3. **Picture-in-Picture:** Subtitles may not appear in PiP mode

### ✅ Recently Fixed

- **Fullscreen Mode (v1.0.1):** Subtitles now appear correctly in fullscreen mode! The extension automatically detects fullscreen changes and repositions subtitles accordingly.

## 🛣️ Future Improvements

- [ ] Subtitle position adjustment
- [ ] Font size customization
- [ ] Color and style options
- [ ] Subtitle timing adjustment (+/- seconds)
- [ ] Save subtitle preferences for specific shows
- [ ] Support for dual subtitles
- [ ] Subtitle search integration

## 💡 Tips

1. **Quality Subtitles:** Use reputable subtitle sites for accurate translations
2. **File Naming:** Keep subtitle files organized with movie/show names
3. **Backup:** Save your favorite subtitle files for rewatching
4. **Timing:** If subtitles are slightly off, some subtitle editors can shift timing

## 📞 Support

If you encounter issues:
1. Check the Troubleshooting section above
2. Open Chrome DevTools (F12) and check the Console tab for errors
3. Try disabling other extensions that might conflict

## 📜 License

This extension is provided as-is for personal use. Feel free to modify and improve it!

## 🙏 Credits

Created for the Sinhala-speaking community to enjoy Netflix content with native language subtitles.

**Note:** This extension is not affiliated with or endorsed by Netflix. It's a third-party tool created to enhance the viewing experience.

---

**Enjoy your Netflix movies with Sinhala subtitles! 🎉**

