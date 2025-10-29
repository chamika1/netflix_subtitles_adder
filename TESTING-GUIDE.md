# Testing Guide - Netflix & Prime Video Subtitles Extension

This guide helps you verify that the extension is working correctly on both Netflix and Amazon Prime Video.

## 🧪 Pre-Testing Checklist

Before testing, ensure:
- ✅ Extension is installed and enabled
- ✅ You have a sample subtitle file (.srt or .vtt)
- ✅ You have active Netflix and/or Prime Video subscriptions
- ✅ Browser Developer Tools (F12) are open for debugging

## 📝 Sample Subtitle File

For testing, use the included `sample-subtitle.srt` file, or create a simple test file:

```srt
1
00:00:01,000 --> 00:00:05,000
This is a test subtitle
First line

2
00:00:10,000 --> 00:00:15,000
Second test subtitle
Testing Netflix & Prime Video

3
00:00:20,000 --> 00:00:25,000
Subtitles are working correctly!
✅ Success
```

Save as `test-subtitle.srt`

---

## 🎬 Netflix Testing

### Test 1: Basic Installation Verification

1. **Navigate to Netflix**
   - Go to https://www.netflix.com
   - Log in if needed

2. **Open Extension Popup**
   - Click the extension icon in browser toolbar
   - Verify the popup shows:
     - Title: "Netflix & Prime Video Subtitles"
     - Netflix button (red)
     - Prime Video button (blue)
     - Status: "Active"

3. **Check Console**
   - Press F12 to open DevTools
   - Look for: `Netflix Subtitles: Initializing...`

✅ **Pass Criteria**: Extension popup appears, console shows initialization

### Test 2: Video Player Detection

1. **Open Any Video**
   - Browse Netflix catalog
   - Open any movie or TV show
   - Let video start playing

2. **Check for Button**
   - Look in top-right corner of page
   - You should see: **"📝 Load Subtitles"** button
   - Button should be RED (#e50914)

3. **Check Console**
   - Look for: `Netflix Subtitles: Video element found`

✅ **Pass Criteria**: Red button visible, console confirms video detected

### Test 3: Subtitle Loading

1. **Load Subtitle File**
   - Click the "📝 Load Subtitles" button
   - Select your test subtitle file
   - Click "Open"

2. **Check Notification**
   - You should see: "Subtitles loaded successfully! ✅"
   - Notification appears in top-right
   - Notification disappears after 3 seconds

3. **Check Console**
   - Look for: `Loaded X subtitle entries`

✅ **Pass Criteria**: Notification appears, console shows subtitle count

### Test 4: Subtitle Display

1. **Watch Video**
   - Let video play from the beginning
   - Subtitles should appear at bottom of video
   - Subtitles should have:
     - Black background with transparency
     - White text
     - Text shadow for readability

2. **Verify Timing**
   - Subtitles appear at correct times
   - Subtitles disappear when expected
   - No overlapping subtitles

✅ **Pass Criteria**: Subtitles visible and properly timed

### Test 5: Seeking/Scrubbing

1. **Scrub Timeline**
   - Drag the video progress bar
   - Jump to different parts of video
   - Subtitles should update immediately

2. **Click Timeline**
   - Click various points on timeline
   - Subtitles should match current time

✅ **Pass Criteria**: Subtitles update correctly when seeking

### Test 6: Fullscreen Mode

1. **Enter Fullscreen**
   - Click fullscreen button or press F
   - Subtitles should remain visible
   - Subtitles should be at bottom of screen

2. **Check Console**
   - Look for: `Netflix Subtitles: Fullscreen change detected`
   - Look for: `Subtitles active in fullscreen mode ✅`

3. **Exit Fullscreen**
   - Press ESC or click exit button
   - Subtitles should remain visible
   - Console should log fullscreen exit

✅ **Pass Criteria**: Subtitles work in both modes

### Test 7: Pause/Resume

1. **Pause Video**
   - Press spacebar or click pause
   - Current subtitle should remain visible

2. **Resume Video**
   - Press spacebar or click play
   - Subtitles should continue normally

✅ **Pass Criteria**: Subtitles handle pause/resume correctly

---

## 📺 Prime Video Testing

### Test 1: Basic Installation Verification

1. **Navigate to Prime Video**
   - Go to https://www.primevideo.com
   - OR your regional Amazon site (amazon.com, amazon.co.uk, etc.)
   - Log in if needed

2. **Open Extension Popup**
   - Click extension icon
   - Click "📺 Open Prime Video" button
   - Verify it opens Prime Video

3. **Check Console**
   - Press F12
   - Look for: `Prime Video Subtitles: Initializing...`

✅ **Pass Criteria**: Extension recognizes Prime Video

### Test 2: Video Player Detection

1. **Open Any Video**
   - Browse Prime Video catalog
   - Open any movie or TV show
   - Let video start playing

2. **Check for Button**
   - Look in top-right corner of page
   - You should see: **"📝 Load Subtitles"** button
   - Button should be BLUE (#00a8e1)

3. **Check Console**
   - Look for: `Prime Video Subtitles: Video element found`

✅ **Pass Criteria**: Blue button visible, console confirms video detected

### Test 3: Subtitle Loading

1. **Load Subtitle File**
   - Click the "📝 Load Subtitles" button
   - Select your test subtitle file
   - Click "Open"

2. **Check Notification**
   - You should see: "Subtitles loaded successfully! ✅"

3. **Check Console**
   - Look for: `Loaded X subtitle entries`

✅ **Pass Criteria**: Subtitles load successfully

### Test 4: Subtitle Display

1. **Watch Video**
   - Let video play
   - Subtitles should appear at bottom
   - Same styling as Netflix (black bg, white text)

2. **Verify Rendering**
   - Subtitles are readable
   - No overlap with Prime Video controls
   - Text is properly centered

✅ **Pass Criteria**: Subtitles display correctly

### Test 5: Prime Video Specific Features

1. **X-Ray Feature**
   - Open X-Ray (if available)
   - Subtitles should still be visible
   - No interference with X-Ray overlay

2. **Language/Subtitle Menu**
   - Open Prime's native subtitle menu
   - Custom subtitles should remain independent
   - No conflicts with native subs

✅ **Pass Criteria**: No conflicts with Prime features

### Test 6: Fullscreen Mode

1. **Enter Fullscreen**
   - Click fullscreen button
   - Subtitles should move to fullscreen container

2. **Check Console**
   - Look for: `Prime Video Subtitles: Fullscreen change detected`

3. **Exit Fullscreen**
   - Press ESC
   - Subtitles should return to normal position

✅ **Pass Criteria**: Fullscreen works on Prime Video

---

## 🌍 Regional Testing

### Amazon Regional Domains

Test on different Amazon domains to ensure global support:

| Domain | Country | Status |
|--------|---------|--------|
| amazon.com | USA | ☐ |
| amazon.co.uk | UK | ☐ |
| amazon.de | Germany | ☐ |
| amazon.fr | France | ☐ |
| amazon.it | Italy | ☐ |
| amazon.es | Spain | ☐ |
| amazon.ca | Canada | ☐ |
| amazon.co.jp | Japan | ☐ |
| amazon.in | India | ☐ |

**For each domain:**
1. Navigate to the domain
2. Open a video
3. Verify button appears (blue)
4. Load test subtitles
5. Confirm subtitles display

---

## 🔍 Advanced Testing

### Test 1: Multiple Subtitle Files

1. Load subtitle file A
2. Verify it works
3. Load subtitle file B (different file)
4. Verify it replaces subtitle file A
5. Subtitles should update to new file

✅ **Pass Criteria**: Can switch between subtitle files

### Test 2: Different Formats

Test both formats:
1. **SRT Format**: Load .srt file
2. **VTT Format**: Load .vtt file
3. Both should work identically

✅ **Pass Criteria**: Both formats supported

### Test 3: Long Subtitle Lines

Test with subtitles containing:
- Very long text (100+ characters)
- Multiple lines (3-4 lines)
- Special characters (émojis, ñ, é, etc.)

✅ **Pass Criteria**: All text displays correctly

### Test 4: Edge Cases

1. **Empty subtitle file**: Should show error
2. **Invalid format**: Should show error
3. **Wrong file type (.txt)**: Should be rejected by file picker
4. **Corrupted subtitle file**: Should show parsing error

✅ **Pass Criteria**: Proper error handling

### Test 5: Performance

1. **Large subtitle file**: Load file with 1000+ entries
2. **Rapid seeking**: Scrub timeline quickly
3. **Quick pause/resume**: Pause and resume rapidly

✅ **Pass Criteria**: No lag or stuttering

---

## 🐛 Common Issues & Solutions

### Button Doesn't Appear

**Symptoms**: No load button on video page

**Check**:
1. Extension is enabled
2. You're on a video playback page (not browse page)
3. Page has fully loaded
4. Console for errors

**Solution**:
- Refresh page (F5)
- Disable and re-enable extension
- Check if video element exists in page

### Subtitles Not Displaying

**Symptoms**: File loads but no subtitles appear

**Check**:
1. Subtitle timing matches video timing
2. Video current time overlaps subtitle time range
3. Console for parsing errors
4. Subtitle element exists in DOM

**Solution**:
- Check subtitle file is valid
- Verify subtitle timing is correct
- Try a different subtitle file

### Wrong Platform Color

**Symptoms**: Netflix shows blue button or Prime shows red button

**Check**:
1. Console log for platform detection
2. URL hostname

**Solution**:
- Platform detection may have failed
- Check hostname includes 'netflix' or 'amazon'/'primevideo'

### Fullscreen Issues

**Symptoms**: Subtitles disappear in fullscreen

**Check**:
1. Console logs for fullscreen events
2. Subtitle container parent element

**Solution**:
- Exit and re-enter fullscreen
- Reload subtitles
- Check z-index in console

---

## ✅ Testing Checklist

### Netflix
- [ ] Extension initializes
- [ ] Red button appears
- [ ] Subtitles load
- [ ] Subtitles display
- [ ] Seeking works
- [ ] Fullscreen works
- [ ] Pause/resume works

### Prime Video
- [ ] Extension initializes
- [ ] Blue button appears
- [ ] Subtitles load
- [ ] Subtitles display
- [ ] Seeking works
- [ ] Fullscreen works
- [ ] X-Ray compatible

### General
- [ ] .srt files work
- [ ] .vtt files work
- [ ] Multiple languages work
- [ ] Long text works
- [ ] Error handling works
- [ ] Performance is good

---

## 📊 Test Report Template

Use this template to report test results:

```
TESTING REPORT
===============

Date: [Date]
Version: 2.0.0
Browser: [Chrome/Edge/Firefox] [Version]
OS: [Windows/Mac/Linux]

NETFLIX TESTS:
- Basic Installation: [PASS/FAIL]
- Video Detection: [PASS/FAIL]
- Subtitle Loading: [PASS/FAIL]
- Subtitle Display: [PASS/FAIL]
- Seeking: [PASS/FAIL]
- Fullscreen: [PASS/FAIL]

PRIME VIDEO TESTS:
- Basic Installation: [PASS/FAIL]
- Video Detection: [PASS/FAIL]
- Subtitle Loading: [PASS/FAIL]
- Subtitle Display: [PASS/FAIL]
- Seeking: [PASS/FAIL]
- Fullscreen: [PASS/FAIL]

NOTES:
[Any additional observations]

ISSUES FOUND:
[List any bugs or problems]
```

---

## 🎯 Success Criteria

For release, the extension should:
- ✅ Work on Netflix (all regions)
- ✅ Work on Prime Video (all domains)
- ✅ Support .srt and .vtt formats
- ✅ Display subtitles correctly
- ✅ Handle fullscreen mode
- ✅ Handle seeking/scrubbing
- ✅ Show proper error messages
- ✅ Have acceptable performance

---

## 🔬 Automated Testing (Future)

Future versions may include:
- Unit tests for subtitle parsing
- Integration tests for video detection
- E2E tests with Selenium/Puppeteer
- Performance benchmarks
- Cross-browser automated testing

---

**Happy Testing!** 🧪

If you find any issues, please report them with:
1. Platform (Netflix/Prime)
2. Browser and version
3. Steps to reproduce
4. Expected vs actual behavior
5. Console errors/logs
6. Screenshots if applicable

---

*Version: 2.0.0*  
*Last Updated: October 29, 2025*

