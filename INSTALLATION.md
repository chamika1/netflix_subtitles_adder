# 📦 Installation Guide - Netflix Sinhala Subtitles Extension

## Quick Start Guide

Follow these simple steps to install and use the extension:

### Step 1: Generate Icons

1. Open `create-icons.html` in your web browser (Chrome, Edge, etc.)
2. Click the "Download" button under each icon size (16x16, 48x48, 128x128)
3. Save all three icon files to the extension folder:
   - `icon16.png`
   - `icon48.png`
   - `icon128.png`

### Step 2: Install Extension in Chrome

1. **Open Chrome Extensions Page:**
   - Type `chrome://extensions/` in your address bar and press Enter
   - OR: Click Menu (⋮) → More Tools → Extensions

2. **Enable Developer Mode:**
   - Look for the toggle switch in the top-right corner
   - Turn ON "Developer mode"

3. **Load the Extension:**
   - Click the "Load unpacked" button
   - Browse to and select the folder containing all your extension files
   - The folder should contain:
     - manifest.json
     - content.js
     - popup.html
     - popup.js
     - styles.css
     - icon16.png
     - icon48.png
     - icon128.png

4. **Verify Installation:**
   - You should see "Netflix Sinhala Subtitles" in your extensions list
   - Make sure it's enabled (toggle is ON)
   - Pin it to your toolbar for easy access

### Step 3: Test the Extension

1. Go to [Netflix.com](https://www.netflix.com/)
2. Sign in to your account
3. Start playing any video
4. Look for the red "📝 Load Sinhala Subtitles" button in the top-right corner
5. If you see the button, the extension is working! ✅

## Finding Sinhala Subtitles

### Recommended Subtitle Sites:

1. **OpenSubtitles.org**
   - URL: https://www.opensubtitles.org/
   - Large collection of subtitles
   - Search by movie/show name
   - Look for Sinhala language option

2. **Subscene.com**
   - URL: https://subscene.com/
   - Popular for Asian language subtitles
   - Good quality Sinhala subtitles
   - Easy to download

3. **Baiscope.lk** (Sinhala site)
   - Dedicated Sinhala subtitle community
   - Latest movie subtitles

### Tips for Finding the Right Subtitles:

✅ **Match the release version** - Make sure subtitle matches your Netflix version
✅ **Check the year** - Some movies have remakes, ensure correct year
✅ **Read comments** - Other users often mention if timing is good
✅ **Download both SRT and VTT** if available - Try both formats

## Using the Extension

### Loading Subtitles:

1. **Start playing a Netflix video**
2. **Click the red button** "📝 Load Sinhala Subtitles" (top-right corner)
3. **Select your subtitle file** (.srt or .vtt format)
4. **Wait for confirmation** - You'll see a notification when subtitles are loaded
5. **Watch your movie!** - Subtitles will appear automatically

### Keyboard Shortcuts:

While watching:
- **Spacebar** - Play/Pause (Netflix default)
- **F** - Fullscreen (Netflix default)
- **M** - Mute (Netflix default)
- **Arrow Keys** - Seek forward/backward (Netflix default)

The extension works with all Netflix controls!

## Troubleshooting Common Issues

### Issue: "Load Subtitles" Button Not Visible

**Solutions:**
- Wait 5-10 seconds for the page to fully load
- Refresh the Netflix page (F5)
- Make sure you're on a video playback page (not browsing)
- Check extension is enabled in chrome://extensions/

### Issue: Subtitles Not Appearing After Loading

**Solutions:**
- Make sure the file format is .srt or .vtt
- Try refreshing the page and loading again
- Open Chrome DevTools (F12) and check Console for errors
- Try a different subtitle file to rule out file corruption

### Issue: Subtitles Out of Sync

**Solutions:**
- This means the subtitle file doesn't match the Netflix version
- Try finding a different subtitle file
- Use [Subtitle Edit](https://www.nikse.dk/subtitleedit/) to adjust timing
- Add/subtract seconds to sync properly

### Issue: Extension Not Working After Chrome Update

**Solutions:**
- Go to chrome://extensions/
- Click "Remove" on the extension
- Click "Load unpacked" and reload the extension folder
- Chrome updates sometimes require reinstallation

### Issue: Subtitles Appearing Behind Video

**Solutions:**
- This is rare but can happen with certain Netflix updates
- Try refreshing the page
- Check if Netflix's own subtitles are enabled (disable them)
- Report the issue if it persists

## Advanced Configuration

### Editing Subtitle Appearance

You can customize how subtitles look by editing `content.js`:

**Change subtitle position:**
```javascript
// Find this line in content.js (around line 35)
bottom: 80px;
// Change to adjust vertical position
```

**Change subtitle size:**
```javascript
// Find this line (around line 41)
font-size: 28px;
// Change to make text larger or smaller
```

**Change subtitle color:**
```javascript
// Find this line (around line 40)
color: white;
// Change to any color (e.g., 'yellow', '#00ff00')
```

**Change background transparency:**
```javascript
// Find this line (around line 39)
background-color: rgba(0, 0, 0, 0.8);
// Last number (0.8) is opacity: 0 = invisible, 1 = solid
```

After making changes:
1. Save the file
2. Go to chrome://extensions/
3. Click the refresh icon on your extension
4. Reload the Netflix page

## System Requirements

### Browser:
- ✅ Google Chrome 88 or newer
- ✅ Microsoft Edge (Chromium) 88 or newer
- ✅ Brave Browser
- ✅ Any Chromium-based browser

### Operating System:
- ✅ Windows 7/8/10/11
- ✅ macOS 10.12 or newer
- ✅ Linux (most distributions)

### Internet:
- Required for Netflix streaming (obviously! 😄)
- Extension works offline once installed

## Privacy & Security

### What the Extension Can Access:
- ✅ Netflix pages only (not other websites)
- ✅ Local storage for settings
- ✅ Subtitle files you explicitly choose to load

### What the Extension Does NOT Do:
- ❌ Does not collect any data
- ❌ Does not track your viewing
- ❌ Does not send information anywhere
- ❌ Does not access your Netflix account
- ❌ Does not modify Netflix's own content

Everything happens locally in your browser!

## Updating the Extension

If you make changes or get updates:

1. Go to `chrome://extensions/`
2. Find "Netflix Sinhala Subtitles"
3. Click the refresh/reload icon (🔄)
4. Extension will reload with new changes

## Uninstalling

To remove the extension:

1. Go to `chrome://extensions/`
2. Find "Netflix Sinhala Subtitles"
3. Click "Remove"
4. Confirm removal

Your Netflix experience will return to normal immediately.

## Getting Help

If you're still having issues:

1. **Check the main README.md** for detailed technical information
2. **Open Chrome DevTools** (F12) and look for error messages in Console
3. **Try incognito mode** to rule out conflicts with other extensions
4. **Disable other extensions** temporarily to check for conflicts

## Tips for Best Experience

1. 📁 **Organize your subtitles** - Keep them in a dedicated folder
2. 🔍 **Name files clearly** - Use movie name + year in filename
3. ⏱️ **Check timing first** - Watch first 2-3 minutes to verify sync
4. 💾 **Save favorites** - Keep subtitle files for shows you rewatch
5. 🎨 **Customize appearance** - Adjust colors/size to your preference

---

**Enjoy Netflix with Sinhala Subtitles! 🎉🎬**

For more information, see the main [README.md](README.md) file.

