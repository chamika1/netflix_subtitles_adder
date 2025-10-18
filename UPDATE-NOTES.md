# 📝 Update Notes - Netflix Sinhala Subtitles Extension

## Version 1.0.1 (Latest)

### 🐛 Bug Fixes
- **Fixed fullscreen subtitle visibility** - Subtitles now appear correctly in fullscreen mode
  - Added fullscreen detection and automatic container repositioning
  - Increased z-index to maximum value (2147483647)
  - Subtitles automatically move to fullscreen element when entering fullscreen
  - Added CSS rules for cross-browser fullscreen support

### 🔧 Technical Changes
- Added fullscreen event listeners (fullscreenchange, webkitfullscreenchange, etc.)
- Implemented `handleFullscreenChange()` method
- Dynamic positioning: switches between `fixed` (normal) and `absolute` (fullscreen)
- Subtitle container now appends to fullscreen element when active

### 📦 How to Update

If you already have the extension installed:

1. **Pull/download the latest files**
2. **Go to** `chrome://extensions/`
3. **Click the refresh icon** (🔄) on "Netflix Sinhala Subtitles"
4. **Reload your Netflix page**

The extension will now work perfectly in fullscreen mode!

---

## Version 1.0.0 (Initial Release)

### ✨ Features
- Load custom Sinhala subtitles for Netflix videos
- Support for SRT and VTT subtitle formats
- Real-time synchronization with video playback
- Beautiful subtitle overlay with customizable appearance
- Easy file upload interface
- Full Sinhala Unicode support
- Cross-browser compatibility (Chrome, Edge, Brave)
- Privacy-focused: no data collection
- Works offline once installed

### 📁 Files Included
- Core extension files (manifest, content script, popup)
- Comprehensive documentation (README, guides, installation)
- Icon generator utility
- Sample Sinhala subtitle file
- Packaging script for distribution

---

## Upcoming Features (Planned)

### Version 1.1.0 (Next Release)
- [ ] Subtitle position adjustment (move up/down)
- [ ] Font size customization
- [ ] Color and style options
- [ ] Background opacity control
- [ ] Subtitle timing offset adjustment (+/- seconds)

### Version 1.2.0 (Future)
- [ ] Save subtitle preferences per movie/show
- [ ] Subtitle history/favorites
- [ ] Keyboard shortcuts
- [ ] Picture-in-Picture mode support
- [ ] Multiple subtitle language support (dual subtitles)

### Version 2.0.0 (Long-term)
- [ ] Cloud sync for preferences
- [ ] Integrated subtitle search
- [ ] Auto-download subtitles from popular sites
- [ ] Custom subtitle editor
- [ ] Community subtitle sharing

---

## Known Issues

### Currently Being Tracked:

1. **Picture-in-Picture Mode**
   - Status: Known limitation
   - Impact: Subtitles may not appear in PiP mode
   - Workaround: Exit PiP mode to see subtitles
   - Planned fix: Version 1.2.0

2. **Episode Auto-Play**
   - Status: By design
   - Impact: Subtitles reset when Netflix auto-plays next episode
   - Workaround: Reload subtitle file for each episode
   - Planned fix: Version 1.1.0 (auto-reload option)

3. **Initial Load Delay**
   - Status: Minor issue
   - Impact: May take 1-2 seconds to detect video on page load
   - Workaround: Wait a moment or refresh page
   - No fix needed (by design for performance)

### Resolved Issues:

✅ **Fullscreen Mode Visibility** (Fixed in v1.0.1)
- Issue: Subtitles disappeared in fullscreen mode
- Solution: Added fullscreen detection and dynamic positioning

---

## Changelog

### [1.0.1] - Current
**Fixed:**
- Fullscreen subtitle visibility issue
- Cross-browser fullscreen compatibility
- Z-index layering in fullscreen mode

**Added:**
- Fullscreen event detection
- Dynamic container repositioning
- Enhanced CSS rules for fullscreen

### [1.0.0] - Initial Release
**Added:**
- Complete extension functionality
- SRT and VTT parser
- Subtitle rendering engine
- User interface and controls
- Comprehensive documentation
- Icon generator utility

---

## Feedback & Bug Reports

Found a bug or have a suggestion?

1. **Document the issue:**
   - What happened?
   - What did you expect?
   - Steps to reproduce
   - Browser version
   - Error messages (if any)

2. **Share your feedback:**
   - Open an issue on the repository
   - Include screenshots if helpful
   - Mention your OS and browser

3. **Feature requests welcome!**
   - Describe the feature
   - Explain why it would be useful
   - Consider implementation complexity

---

## Thank You!

Thank you for using Netflix Sinhala Subtitles Extension! Your feedback helps make it better for the entire Sinhala-speaking community.

**ස්තූතියි! (Thank you!)** 🙏🎬

