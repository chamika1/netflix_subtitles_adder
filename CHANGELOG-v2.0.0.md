# Changelog - Version 2.0.0

## 🎉 Major Update: Multi-Platform Support

**Release Date**: October 2025  
**Version**: 2.0.0

This is a major update that expands the extension from Netflix-only to supporting both Netflix and Amazon Prime Video across all their global domains.

---

## 🌟 New Features

### Multi-Platform Support
- ✅ **Amazon Prime Video Support**: Extension now works on Prime Video!
- ✅ **Global Amazon Domains**: Support for all major Amazon regional sites
  - amazon.com (US)
  - amazon.co.uk (UK)
  - amazon.de (Germany)
  - amazon.fr (France)
  - amazon.it (Italy)
  - amazon.es (Spain)
  - amazon.ca (Canada)
  - amazon.co.jp (Japan)
  - amazon.in (India)
  - primevideo.com (all regions)

### Platform Detection
- ✅ **Automatic Platform Detection**: Extension automatically detects whether you're on Netflix or Prime Video
- ✅ **Platform-Specific Branding**: 
  - Netflix: Red button (#e50914)
  - Prime Video: Blue button (#00a8e1)
- ✅ **Smart Button Placement**: Optimized positioning for each platform's player

### Enhanced UI
- ✅ **Updated Extension Popup**: New dual-platform interface
  - Quick launch buttons for both Netflix and Prime Video
  - Platform-aware status display
  - Updated help text for both platforms
- ✅ **Gradient Branding**: Netflix red to Prime blue gradient in popup header
- ✅ **Platform Buttons**: Separate styled buttons for each platform

### Documentation
- ✅ **Multi-Platform README**: Comprehensive guide for both platforms
- ✅ **Installation Guide**: Step-by-step setup instructions
- ✅ **Troubleshooting**: Platform-specific troubleshooting tips

---

## 🔧 Technical Changes

### Core Functionality

#### manifest.json
```diff
- "name": "Netflix Sinhala Subtitles"
+ "name": "Netflix & Prime Video Subtitles"

- "version": "1.0.3"
+ "version": "2.0.0"

+ Added host permissions:
  + "*://*.primevideo.com/*"
  + "*://*.amazon.com/*"
  + "*://*.amazon.co.uk/*"
  + ... (all Amazon domains)

+ Added content script matches for all Prime Video domains
+ Updated web_accessible_resources for all platforms
```

#### content.js
```diff
- class NetflixSubtitleManager
+ class StreamingSubtitleManager

+ Added platform detection:
  + detectPlatform() method
  + getPlatformConfig() method
  + Platform-specific styling and colors

+ Enhanced initialization:
  + Platform-aware logging
  + Dynamic button colors based on platform
  + Platform-specific notifications

+ Updated class initialization:
  - new NetflixSubtitleManager()
  + new StreamingSubtitleManager()
```

#### popup.js
```diff
+ Added Prime Video button support
+ Updated URL detection for both platforms:
  + netflix.com
  + primevideo.com
  + amazon.* domains

+ Updated help text for multi-platform usage
+ Enhanced status checking for both platforms
```

#### popup.html
```diff
+ Updated title and branding
+ Added gradient header (Netflix red → Prime blue)
+ Added Prime Video button
+ Updated instructions for both platforms
+ New platform-specific button styles:
  + .button-netflix (red)
  + .button-prime (blue)
+ Updated version to 2.0.0
```

### File Changes Summary

| File | Status | Changes |
|------|--------|---------|
| `manifest.json` | Modified | Added Prime Video domains, updated name/version |
| `content.js` | Modified | Added platform detection, renamed class |
| `popup.js` | Modified | Added Prime Video support |
| `popup.html` | Modified | Updated UI for dual platform |
| `package-extension.bat` | Modified | Updated package name |
| `MULTI-PLATFORM-README.md` | New | Comprehensive multi-platform guide |
| `MULTI-PLATFORM-INSTALLATION.md` | New | Installation instructions |
| `CHANGELOG-v2.0.0.md` | New | This file |

---

## 🔄 Migration from v1.x

### For End Users
1. **Existing Installation**: No changes needed
2. **Subtitle Files**: All existing subtitle files will continue to work
3. **Settings**: No settings to migrate
4. **New Features**: Prime Video support is automatically available

### For Developers
1. **Class Name Changed**: `NetflixSubtitleManager` → `StreamingSubtitleManager`
2. **New Methods**: 
   - `detectPlatform()`
   - `getPlatformConfig()`
3. **Platform-Aware**: All methods now support both platforms

---

## 🐛 Bug Fixes

- ✅ Improved fullscreen subtitle positioning
- ✅ Enhanced platform-specific console logging
- ✅ Better error handling for different video player structures
- ✅ More robust video element detection

---

## 🎨 UI/UX Improvements

### Extension Popup
- **Before**: Netflix-only branding (red theme)
- **After**: Dual-platform gradient theme (red + blue)

### Load Button
- **Before**: Fixed red color
- **After**: Dynamic color based on platform
  - Netflix = Red (#e50914)
  - Prime Video = Blue (#00a8e1)

### Notifications
- **Before**: "Sinhala subtitles loaded successfully!"
- **After**: "Subtitles loaded successfully!" (more generic for all languages)

---

## 📊 Statistics

- **Supported Platforms**: 2 (Netflix + Prime Video)
- **Supported Domains**: 11+
  - 1 Netflix domain (*.netflix.com)
  - 10+ Amazon/Prime domains
- **Lines of Code Changed**: ~200+
- **New Files**: 3
- **Modified Files**: 5

---

## 🔜 Future Enhancements

Planned for future versions:
- [ ] Disney+ support
- [ ] Hulu support
- [ ] HBO Max support
- [ ] Apple TV+ support
- [ ] Subtitle customization (font, size, color, position)
- [ ] Subtitle offset adjustment (for out-of-sync files)
- [ ] Multiple subtitle tracks (show 2+ subtitles simultaneously)
- [ ] Auto-download subtitles from OpenSubtitles API
- [ ] Subtitle preview before loading

---

## 🧪 Testing

### Platforms Tested
- ✅ Netflix (US)
- ✅ Prime Video (primevideo.com)
- ✅ Amazon.com
- ✅ Amazon.co.uk

### Browsers Tested
- ✅ Chrome 120+
- ✅ Microsoft Edge 120+
- ⚠️ Firefox (temporary install)

### Subtitle Formats Tested
- ✅ .srt files
- ✅ .vtt files
- ✅ Various languages (Sinhala, English, Tamil, Hindi, etc.)

### Modes Tested
- ✅ Normal viewing
- ✅ Fullscreen mode
- ✅ Seeking/scrubbing
- ✅ Pause/resume
- ✅ Multiple episodes in a row

---

## 🙏 Credits

- **Original Version**: Netflix Sinhala Subtitles extension
- **v2.0.0 Update**: Multi-platform expansion
- **Community**: Feature requests and feedback

---

## 📝 Notes

### Breaking Changes
- **None**: This is a backward-compatible update
- Existing Netflix users will see no changes to their workflow
- Prime Video support is an addition, not a replacement

### Performance
- No performance impact on existing Netflix functionality
- Prime Video support uses the same efficient subtitle rendering
- Minimal memory footprint increase

### Compatibility
- Fully compatible with Manifest V3
- Meets all Chrome Web Store requirements
- Ready for Firefox Add-ons (with signing)

---

## 🔐 Security

- No new permissions required beyond domain access
- All processing remains local
- No external API calls
- No data collection
- Open source and auditable

---

## 📄 License

MIT License (unchanged from v1.x)

---

## 📞 Support

For issues with v2.0.0:
1. Check `MULTI-PLATFORM-README.md`
2. Review `MULTI-PLATFORM-INSTALLATION.md`
3. Check browser console for errors
4. Report issues with:
   - Platform (Netflix/Prime)
   - Browser and version
   - Subtitle format
   - Error messages

---

**Upgrade Recommended**: ⭐⭐⭐⭐⭐

All users are encouraged to upgrade to v2.0.0 to gain Prime Video support with no loss of Netflix functionality.

---

*Last Updated: October 29, 2025*  
*Version: 2.0.0*  
*Status: Stable Release* ✅

