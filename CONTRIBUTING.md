# 🤝 Contributing to Netflix Sinhala Subtitles Extension

Thank you for your interest in improving this extension! This document provides guidelines for contributing.

## How You Can Help

### 1. Report Bugs 🐛

If you find a bug:
- Check if it's already reported in existing issues
- Provide clear steps to reproduce
- Include browser version and OS
- Share error messages from console (F12)

### 2. Suggest Features 💡

Have an idea?
- Describe the feature clearly
- Explain why it would be useful
- Consider implementation complexity

### 3. Improve Code 💻

Want to contribute code?
- Fork the repository
- Create a feature branch
- Make your changes
- Test thoroughly
- Submit a pull request

### 4. Improve Documentation 📚

- Fix typos
- Add missing information
- Translate to Sinhala
- Add examples

### 5. Help Others 🙋

- Answer questions
- Share tips and tricks
- Help troubleshoot issues

## Development Setup

### Prerequisites

- Google Chrome (v88+)
- Basic knowledge of JavaScript
- Text editor (VS Code, Sublime, etc.)

### Getting Started

1. **Clone or download** the repository

2. **Load extension** in Chrome:
   ```
   1. Go to chrome://extensions/
   2. Enable Developer mode
   3. Click "Load unpacked"
   4. Select the extension folder
   ```

3. **Make changes** to the code

4. **Test** your changes:
   - Click refresh icon in chrome://extensions/
   - Go to Netflix and test functionality
   - Check browser console for errors

5. **Document** your changes in code comments

## Code Style Guidelines

### JavaScript

- Use clear, descriptive variable names
- Add comments for complex logic
- Keep functions small and focused
- Handle errors gracefully
- Use modern ES6+ syntax

Example:
```javascript
// Good
function parseSubtitleTimestamp(timeString) {
  // Convert HH:MM:SS,mmm to seconds
  const parts = timeString.split(':');
  // ... implementation
}

// Avoid
function parse(t) {
  var x = t.split(':');
  // ...
}
```

### HTML/CSS

- Use semantic HTML
- Keep styling in CSS files
- Use descriptive class names
- Maintain responsive design

### Comments

```javascript
// Single line for brief explanation

/**
 * Multi-line for complex functions
 * @param {string} text - The subtitle file content
 * @returns {Array} Parsed subtitle objects
 */
```

## Testing Checklist

Before submitting changes, test:

- [ ] Extension loads without errors
- [ ] Button appears on Netflix pages
- [ ] SRT files load correctly
- [ ] VTT files load correctly
- [ ] Subtitles sync with video
- [ ] Subtitles display correctly in Sinhala
- [ ] Works after page refresh
- [ ] Works after seeking in video
- [ ] No console errors
- [ ] Popup interface works

## Feature Ideas

### Planned Features
- Subtitle position adjustment
- Font size customization
- Color themes
- Timing offset adjustment
- Subtitle history/favorites

### Open for Discussion
- Multiple subtitle tracks
- Subtitle editor integration
- Cloud sync for preferences
- Keyboard shortcuts

## Bug Priorities

1. **Critical:** Extension breaks or doesn't load
2. **High:** Core features not working
3. **Medium:** Usability issues
4. **Low:** Minor UI glitches

## Pull Request Process

1. **Fork** the repository

2. **Create a branch**:
   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Make your changes**:
   - Write clear code
   - Add comments
   - Follow style guidelines

4. **Test thoroughly**

5. **Commit with clear message**:
   ```bash
   git commit -m "Add subtitle position adjustment feature"
   ```

6. **Push to your fork**:
   ```bash
   git push origin feature/your-feature-name
   ```

7. **Create Pull Request**:
   - Describe what changed
   - Explain why it's needed
   - Reference any related issues

## Code Review

Your PR will be reviewed for:
- Code quality and style
- Functionality
- Performance impact
- Security considerations
- Documentation

## Documentation Standards

When adding features, update:
- README.md (if user-facing)
- Code comments (for developers)
- INSTALLATION.md (if setup changes)
- SINHALA-SUBTITLE-GUIDE.md (if subtitle-related)

## Community Guidelines

- Be respectful and constructive
- Help others learn
- Give credit where due
- Focus on the code, not the person
- Welcome newcomers

## Questions?

Feel free to:
- Open an issue for discussion
- Comment on existing issues
- Reach out to maintainers

## Recognition

Contributors will be recognized in:
- README.md contributors section
- Release notes
- Project documentation

Thank you for making this extension better for the Sinhala-speaking community! 🙏

---

**ගුඩ් ලක්! (Good luck!)** 🎉

