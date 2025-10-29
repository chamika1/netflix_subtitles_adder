# Installation Guide - Netflix & Prime Video Subtitles Extension

This guide will help you install the extension to add custom subtitles to both Netflix and Amazon Prime Video.

## 🚀 Quick Install (Chrome/Edge)

### Step 1: Download the Extension
1. Download this repository as a ZIP file or clone it
2. Extract the ZIP file to a folder on your computer
3. Locate the `extension` folder inside

### Step 2: Enable Developer Mode
1. Open your browser (Chrome, Edge, Brave, or Opera)
2. Navigate to extensions page:
   - **Chrome**: `chrome://extensions/`
   - **Edge**: `edge://extensions/`
   - **Brave**: `brave://extensions/`
   - **Opera**: `opera://extensions/`
3. Toggle **"Developer mode"** ON (usually in the top-right corner)

### Step 3: Load the Extension
1. Click **"Load unpacked"** button
2. Navigate to and select the `extension` folder
3. Click **"Select Folder"**

### Step 4: Verify Installation
1. You should see the extension card appear
2. The extension should be enabled (toggle should be ON)
3. You should see the extension icon in your toolbar

## 🔥 Quick Install (Firefox)

### Temporary Installation (For Testing)
1. Open Firefox
2. Navigate to: `about:debugging#/runtime/this-firefox`
3. Click **"Load Temporary Add-on"**
4. Navigate to the `extension` folder
5. Select the `manifest.json` file
6. Click **"Open"**

**Note**: Temporary add-ons are removed when Firefox is closed.

### Permanent Installation (Advanced)
For permanent installation in Firefox, you'll need to:
1. Package the extension as an XPI file
2. Sign it through Mozilla Add-ons
3. See [Mozilla's guide](https://extensionworkshop.com/documentation/publish/) for details

## ✅ Verify It's Working

### Test on Netflix
1. Go to [Netflix.com](https://www.netflix.com)
2. Open any video
3. Look for the **red "📝 Load Subtitles"** button in the top-right corner
4. If you see it, the extension is working!

### Test on Prime Video
1. Go to [Prime Video](https://www.primevideo.com) or your regional Amazon site
2. Open any video
3. Look for the **blue "📝 Load Subtitles"** button in the top-right corner
4. If you see it, the extension is working!

## 🌍 Supported Amazon Domains

The extension works on all these Amazon domains:
- 🇺🇸 amazon.com (United States)
- 🇬🇧 amazon.co.uk (United Kingdom)
- 🇩🇪 amazon.de (Germany)
- 🇫🇷 amazon.fr (France)
- 🇮🇹 amazon.it (Italy)
- 🇪🇸 amazon.es (Spain)
- 🇨🇦 amazon.ca (Canada)
- 🇯🇵 amazon.co.jp (Japan)
- 🇮🇳 amazon.in (India)
- primevideo.com (All regions)

## 📝 First Use

### Getting Subtitle Files
1. Find subtitle files for your content:
   - [OpenSubtitles.org](https://www.opensubtitles.org/)
   - [Subscene.com](https://subscene.com/)
   - [YIFY Subtitles](https://yifysubtitles.org/)

2. Download the subtitle file (`.srt` or `.vtt` format)
3. Make sure the subtitle file matches the video you're watching

### Loading Subtitles
1. Open Netflix or Prime Video
2. Start playing a video
3. Click the **"📝 Load Subtitles"** button (top-right)
4. Select your subtitle file
5. Subtitles will appear at the bottom of the video

## 🔧 Troubleshooting Installation

### Extension Not Loading
**Issue**: "Load unpacked" doesn't work  
**Solution**: 
- Make sure you selected the `extension` folder (not the parent folder)
- Check that `manifest.json` exists in the selected folder
- Verify Developer Mode is enabled

### Extension Loads but Button Doesn't Appear
**Issue**: Extension installed but no button on Netflix/Prime  
**Solution**:
- Refresh the Netflix/Prime page (F5)
- Make sure you're on an actual video page (not browse page)
- Check extension is enabled in `chrome://extensions/`
- Open browser console (F12) and look for errors

### Permission Errors
**Issue**: "This extension may not have permission to run on this site"  
**Solution**:
- This is normal for some pages
- The extension only works on:
  - `*.netflix.com/*`
  - `*.primevideo.com/*`
  - `*.amazon.*/*` domains
- It won't run on other sites

### Icon Not Showing in Toolbar
**Issue**: Extension installed but no icon  
**Solution**:
- The icon should appear automatically
- Click the puzzle piece icon in toolbar to see all extensions
- Pin the extension to make it always visible

## 🎯 Platform-Specific Notes

### Netflix
- Works on all Netflix regional sites (.com, .co.uk, .fr, etc.)
- Button appears in **red** (Netflix brand color)
- Optimized for Netflix player controls
- Works with Netflix's fullscreen mode

### Prime Video
- Works on primevideo.com and all Amazon domains
- Button appears in **blue** (Prime Video brand color)
- Optimized for Prime Video player controls
- Compatible with Amazon's X-Ray feature

## 🔄 Updating the Extension

When a new version is released:

1. Download the new version
2. Extract to a new folder
3. Go to your browser's extensions page
4. Find the old extension and click **"Remove"**
5. Follow installation steps again with new folder

**OR** (Easier method):

1. Download new version
2. Extract and replace old `extension` folder
3. Go to extensions page
4. Click the **reload icon** ⟳ on the extension card

## 🛡️ Security & Privacy

This extension:
- ✅ Only runs on Netflix and Prime Video domains
- ✅ Requires minimal permissions
- ✅ Doesn't collect or transmit any data
- ✅ All processing happens locally in your browser
- ✅ Subtitle files never leave your computer
- ✅ Open source - you can review all code

### Required Permissions Explained

**Storage**: Save your subtitle preferences  
**ActiveTab**: Access the current video page  
**Host Permissions**: 
- `*.netflix.com/*` - To work on Netflix
- `*.primevideo.com/*` - To work on Prime Video
- `*.amazon.*/*` - To work on all Amazon regional sites

## 📦 Packaging for Distribution

If you want to package the extension:

### Windows
Run the included script:
```bash
package-extension.bat
```

### Mac/Linux
Create a ZIP manually:
```bash
cd extension
zip -r ../netflix-prime-subtitles.zip ./*
```

### What to Include
The package should contain:
- `manifest.json`
- `content.js`
- `popup.html`
- `popup.js`
- `styles.css`
- `subtitle-parser.js`
- `icon16.png`
- `icon48.png`
- `icon128.png`

## 🎓 Advanced Configuration

### Custom Icon Colors
You can customize the extension icon by editing the PNG files in the `extension` folder or using the included `create-icons.html` tool.

### Modify Button Position
Edit `content.js` and change the button style:
```javascript
// Look for this section:
button style="
  position: fixed;
  top: 20px;      // Change these values
  right: 20px;    // to move the button
```

### Change Button Colors
The button colors are automatically set based on the platform:
- Netflix: `#e50914` (red)
- Prime Video: `#00a8e1` (blue)

To change these, edit the `getPlatformConfig()` function in `content.js`.

## 📱 Browser Recommendations

**Best Experience**:
- ✅ Chrome (version 88+)
- ✅ Microsoft Edge (version 88+)

**Also Works**:
- ✅ Brave
- ✅ Opera
- ⚠️ Firefox (temporary install only)

## 🆘 Getting Help

If you encounter issues:

1. **Check the main README**: See `MULTI-PLATFORM-README.md`
2. **Browser Console**: Press F12 and check for errors
3. **Reinstall**: Remove and reinstall the extension
4. **Report Issue**: Create an issue on GitHub with:
   - Your browser and version
   - Platform (Netflix/Prime Video)
   - Error messages
   - Screenshots if possible

## 🎉 You're All Set!

Once installed, you can:
1. ✅ Watch Netflix with custom subtitles
2. ✅ Watch Prime Video with custom subtitles
3. ✅ Use any language subtitles (.srt or .vtt)
4. ✅ Switch between different subtitle files
5. ✅ Enjoy fullscreen mode with subtitles

---

**Version**: 2.0.0  
**Installation Difficulty**: Easy ⭐  
**Time Required**: 2-5 minutes

Happy streaming! 🎬📺

