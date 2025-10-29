# 🔍 Fullscreen Troubleshooting Guide

## Quick Fix Steps

### Step 1: Update the Extension ⚡

1. **Go to:** `chrome://extensions/`
2. **Find:** "Netflix Sinhala Subtitles"
3. **Click:** The refresh/reload icon 🔄
4. **Check version:** Should show **1.0.1** or higher

### Step 2: Reload Netflix Page

1. **Go to your Netflix tab**
2. **Hard refresh:** Press `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)
3. **Wait:** 5 seconds for the page to fully load

### Step 3: Correct Testing Order ⚠️

**IMPORTANT:** Follow this exact order!

1. ✅ **FIRST:** Start playing a Netflix video
2. ✅ **SECOND:** Click "📝 Load Sinhala Subtitles" button
3. ✅ **THIRD:** Select your subtitle file
4. ✅ **FOURTH:** Wait for "Subtitles loaded successfully! ✅"
5. ✅ **FIFTH:** Verify subtitles appear in normal mode
6. ✅ **SIXTH:** Now press F (or click fullscreen button)

**DO NOT go fullscreen before loading subtitles!**

### Step 4: Check Console Logs 🔎

1. **Press F12** to open Developer Tools
2. **Click "Console" tab**
3. **Enter fullscreen mode**
4. **Look for these messages:**

```
Netflix Sinhala Subtitles: Fullscreen change detected, isFullscreen: true
Fullscreen element: <div>...</div>
Moving subtitles to fullscreen container
Fullscreen styles applied, z-index: 2147483647
Subtitle text element styled for fullscreen
```

5. **If you see these messages:** The extension is working correctly!
6. **If you DON'T see these messages:** See "Advanced Troubleshooting" below

---

## Common Issues & Solutions

### Issue 1: "No messages in console"

**Cause:** Extension not loaded or page not refreshed

**Solution:**
```
1. Go to chrome://extensions/
2. Click refresh icon on the extension
3. Close and reopen Netflix tab
4. Try again
```

### Issue 2: "Subtitles work in normal mode but not fullscreen"

**Cause:** Fullscreen event not triggering

**Solution:**
```
1. Check console for fullscreen messages
2. Try pressing F key instead of clicking button
3. Try Alt+Enter
4. Check if other extensions are interfering
```

### Issue 3: "Can't see subtitles at all (even in normal mode)"

**Cause:** Subtitles not loaded properly

**Solution:**
```
1. Make sure file is .srt or .vtt format
2. Check for success notification
3. Look for "Load Sinhala Subtitles" button
4. Try a different subtitle file
5. Check console for errors
```

### Issue 4: "Error: Could not establish connection"

**Cause:** Extension popup trying to communicate before content script is ready

**Solution:**
```
This error is now fixed in the latest version.
1. Update extension (reload in chrome://extensions/)
2. This error can be safely ignored
3. It won't affect subtitle functionality
```

### Issue 5: "Subtitles appear but are behind the video"

**Cause:** Z-index issue

**Solution:**
```
1. Check console log shows: z-index: 2147483647
2. If not, extension needs updating
3. Reload extension
4. Hard refresh Netflix page
```

---

## Advanced Troubleshooting

### Test 1: Check if subtitle container exists

**In Console (F12), run:**
```javascript
document.getElementById('custom-subtitle-container')
```

**Expected:** Should return a div element
**If null:** Extension not initialized properly

### Test 2: Check z-index

**In Console, run:**
```javascript
document.getElementById('custom-subtitle-container').style.zIndex
```

**Expected:** Should show `"2147483647"`
**If different:** Extension not updated properly

### Test 3: Check if subtitles are loaded

**In Console, run:**
```javascript
document.getElementById('custom-subtitle').textContent
```

**Expected:** Should show current subtitle text or empty
**If null:** Subtitle element not created

### Test 4: Manually trigger fullscreen detection

**In Console, run:**
```javascript
document.fullscreenElement
```

**When in fullscreen, expected:** Should return the fullscreen div element
**If null:** Browser fullscreen API not working

### Test 5: Force subtitle to show

**In Console, run:**
```javascript
const sub = document.getElementById('custom-subtitle');
sub.textContent = 'TEST SUBTITLE';
sub.style.display = 'block';
sub.style.zIndex = '2147483647';
```

**Expected:** "TEST SUBTITLE" should appear on screen
**If not visible:** Something is overriding the styles

---

## Netflix-Specific Issues

### Netflix's Video Player

Netflix uses a complex video player structure. The fullscreen element might be:
- `<div class="watch-video">`
- `<div class="NFPlayer">`
- `<div class="PlayerControlsNeo__layout"`

Our extension automatically detects whichever element goes fullscreen.

### Check what's in fullscreen

**When in fullscreen, run in console:**
```javascript
console.log(document.fullscreenElement || document.webkitFullscreenElement);
```

This will show you exactly what element is fullscreen.

---

## Browser-Specific Issues

### Google Chrome
- Usually works best
- Make sure you're on version 88 or higher
- Check: `chrome://version/`

### Microsoft Edge
- Should work identically to Chrome
- Uses same rendering engine
- May need to restart browser after installing extension

### Brave Browser
- Check Shields settings
- Allow extension on Netflix
- Brave Shield -> Advanced Controls -> Allow

---

## Step-by-Step Debug Session

If nothing else works, follow this complete debug process:

### Part 1: Clean Install

1. **Remove extension:**
   - `chrome://extensions/`
   - Click "Remove" on Netflix Sinhala Subtitles

2. **Close all Netflix tabs**

3. **Reinstall extension:**
   - `chrome://extensions/`
   - Enable "Developer mode"
   - Click "Load unpacked"
   - Select extension folder

4. **Verify installation:**
   - Extension should appear in list
   - Version should be 1.0.1 or higher
   - Toggle should be ON (blue)

### Part 2: Fresh Test

1. **Open NEW Netflix tab**

2. **Open Console (F12) BEFORE playing**

3. **Look for initialization message:**
   ```
   Netflix Sinhala Subtitles: Initializing...
   Netflix Sinhala Subtitles: Video element found
   ```

4. **Start playing a video**

5. **Look for "Load Sinhala Subtitles" button** (top-right, red)

6. **Click button and load subtitle file**

7. **Wait for success message**

8. **Verify subtitle appears in normal mode**
   - Should see text at bottom of video
   - Text should sync with audio

9. **NOW enter fullscreen (F key)**

10. **Check console for fullscreen messages**

11. **Look for notification:** "Subtitles active in fullscreen mode ✅"

12. **Check if subtitles are visible**

### Part 3: Report Results

If it's STILL not working, please provide:

1. **Console output** (copy all messages)
2. **Browser name and version**
3. **Operating system**
4. **Extension version**
5. **Screenshot (if possible)**
6. **Results from Test 1-5 above**

---

## Possible Conflicts

### Other Extensions That Might Interfere:

- **Netflix extensions** (subtitle downloaders, enhancers)
- **Ad blockers** (uBlock, AdBlock)
- **Video enhancers**
- **Screen capture extensions**

**To test:**
1. Disable all other extensions
2. Test Netflix Sinhala Subtitles alone
3. If it works, re-enable extensions one by one to find the conflict

---

## System Requirements Check

### Minimum Requirements:
- ✅ Chrome 88+ (or Edge 88+)
- ✅ Netflix subscription
- ✅ Subtitle file (.srt or .vtt)
- ✅ JavaScript enabled
- ✅ Cookies enabled for Netflix

### Check Your Chrome Version:
1. Go to: `chrome://version/`
2. Look for "Google Chrome" version number
3. Must be 88 or higher

---

## Last Resort: Manual Testing

If automated fullscreen detection isn't working, try this workaround:

1. Load subtitles normally
2. Press F11 (browser fullscreen) instead of Netflix fullscreen
3. Then click Netflix's fullscreen button

Or:

1. Load subtitles
2. Use Picture-in-Picture mode (if supported)
3. Then make PiP window fullscreen

---

## Working Configuration (Verified)

For reference, this is a known working setup:
- **Browser:** Google Chrome 120+
- **OS:** Windows 10/11
- **Netflix:** Standard HD plan
- **Extension:** v1.0.1
- **Subtitle:** UTF-8 encoded .srt file
- **Result:** ✅ Subtitles visible in fullscreen

---

## Get Help

If you've tried everything above:

1. **Check UPDATE-NOTES.md** for latest fixes
2. **Read CHANGES-v1.0.1.md** for technical details
3. **Check FULLSCREEN-FIX-TEST.md** for testing guide
4. **Review README.md** for general troubleshooting

---

## Expected Console Output (Working State)

When everything is working correctly, you should see:

```
Netflix Sinhala Subtitles: Initializing...
Netflix Sinhala Subtitles: Video element found
[User clicks load button]
Loaded 50 subtitle entries
[User enters fullscreen]
Netflix Sinhala Subtitles: Fullscreen change detected, isFullscreen: true
Fullscreen element: <div class="watch-video">...</div>
Moving subtitles to fullscreen container
Fullscreen styles applied, z-index: 2147483647
Subtitle text element styled for fullscreen
```

---

**If you're still having issues after following this guide, please provide the console output for further assistance.**

---

**Good luck! We'll get those subtitles working in fullscreen! 🎬**

