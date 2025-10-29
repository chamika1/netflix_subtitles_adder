# 🇱🇰 Sinhala Subtitle Guide

A comprehensive guide for finding, downloading, and using Sinhala subtitles with Netflix.

## Where to Find Sinhala Subtitles

### 🌟 Recommended Sites

#### 1. OpenSubtitles.org
- **URL:** https://www.opensubtitles.org/
- **Features:**
  - Largest subtitle database
  - Multiple languages including Sinhala (සිංහල)
  - User ratings and comments
  - Free downloads
- **How to use:**
  1. Search for your movie/show name
  2. Filter by "Sinhala" language
  3. Check ratings and download count
  4. Download the .srt file

#### 2. Subscene.com
- **URL:** https://subscene.com/
- **Features:**
  - Clean interface
  - Good quality Sinhala subtitles
  - Active community
  - Regular updates
- **How to use:**
  1. Search for the title
  2. Look for Sinhala (සිංහල) in the language list
  3. Check uploader reputation
  4. Download and extract

#### 3. Baiscope.lk
- **URL:** https://www.baiscope.lk/ (if available)
- **Features:**
  - Dedicated Sinhala subtitle community
  - Latest movies and TV shows
  - Sinhala interface
  - Local content focus

#### 4. Zoom.lk Forums
- **URL:** https://www.zoom.lk/
- **Features:**
  - Sri Lankan community
  - Subtitle sharing sections
  - Discussion forums
  - Requests section

### 🔍 Search Tips

1. **Use original title:**
   - Search with English name first
   - Example: "The Dark Knight" not "ද ඩාර්ක් නයිට්"

2. **Include year:**
   - "Inception 2010"
   - Helps find correct version

3. **Check multiple sources:**
   - Different uploaders may have better timing
   - Compare ratings and comments

4. **Look for verified uploaders:**
   - ✅ marks or high reputation
   - Better quality translations

## Understanding Subtitle Formats

### SRT (SubRip) - Most Common ✅

**Structure:**
```
1
00:00:10,500 --> 00:00:13,000
ආයුබෝවන්

2
00:00:14,000 --> 00:00:16,500
මෙය පළමු උපසිරැසිය
```

**Benefits:**
- Universally supported
- Simple text format
- Easy to edit
- Smaller file size

### VTT (WebVTT) - Web Standard

**Structure:**
```
WEBVTT

00:00:10.500 --> 00:00:13.000
ආයුබෝවන්

00:00:14.000 --> 00:00:16.500
මෙය පළමු උපසිරැසිය
```

**Benefits:**
- Better for web players
- Supports styling
- Modern format

### Converting Between Formats

Use online converters:
- https://subtitletools.com/convert-to-srt-online
- https://gotranscript.com/subtitle-converter

## Quality Checklist

Before using a subtitle file, check:

### ✅ Translation Quality
- [ ] Natural Sinhala language
- [ ] Proper grammar
- [ ] Appropriate word choices
- [ ] Cultural context considered

### ✅ Timing/Synchronization
- [ ] Text appears when dialogue starts
- [ ] Disappears after dialogue ends
- [ ] Not too fast to read
- [ ] Not too slow (causing delay)

### ✅ Technical Aspects
- [ ] Correct file format (.srt or .vtt)
- [ ] UTF-8 encoding (for Sinhala characters)
- [ ] No corrupted characters (□□□)
- [ ] Proper line breaks

### ✅ Readability
- [ ] Not too many words per subtitle
- [ ] 1-2 lines maximum
- [ ] Complete sentences when possible
- [ ] Proper punctuation

## Common Issues & Solutions

### Issue: Corrupted Sinhala Characters (□□□ or ???)

**Cause:** Wrong text encoding

**Solution:**
1. Open subtitle in Notepad++ or Sublime Text
2. Change encoding to UTF-8
3. Save the file
4. Or re-download from a different source

### Issue: Subtitles Appear Too Early/Late

**Cause:** Different video version or cut

**Solutions:**

**Option 1: Find Better Match**
- Look for subtitles specifically for Netflix version
- Check comments for "Netflix timing" mentions

**Option 2: Adjust Timing**
- Use [Subtitle Edit](https://www.nikse.dk/subtitleedit/) software
- Shift all subtitles forward or backward
- "Synchronization" → "Adjust all times"

**Option 3: Manual Sync**
1. Note where first subtitle should appear
2. Calculate time difference
3. Add/subtract from all timestamps

### Issue: Subtitles Too Fast/Slow

**Cause:** Frame rate mismatch

**Solution:**
- Use Subtitle Edit to change speed
- Tools → Change frame rate
- Common rates: 23.976, 24, 25, 29.97 fps

### Issue: Missing Subtitles for Some Dialogue

**Cause:** Incomplete subtitle file

**Solution:**
- Find a different version
- Check for "complete" or "full" tags
- Look for higher download counts

## Editing Sinhala Subtitles

### Recommended Software

#### 1. Subtitle Edit (Windows) ⭐ Best
- **Download:** https://www.nikse.dk/subtitleedit/
- **Features:**
  - Full Sinhala support
  - Visual sync with video
  - Auto-translate
  - Spell check
  - Timing adjustment

#### 2. Aegisub (Cross-platform)
- **Download:** http://www.aegisub.org/
- **Features:**
  - Advanced timing
  - Styling options
  - Waveform display
  - Karaoke effects

#### 3. Subtitle Workshop (Windows)
- **Download:** http://subworkshop.sourceforge.net/
- **Features:**
  - Classic interface
  - Reliable
  - Good for basic edits

#### 4. Online Tools
- **Kapwing:** https://www.kapwing.com/tools/subtitle-editor
- **SubtitleBee:** https://subtitlebee.com/
- **Amara:** https://amara.org/

### Basic Editing Tasks

#### Adjusting Timing
1. Open subtitle file in Subtitle Edit
2. Synchronization → Adjust all times
3. Enter seconds to shift (+/- value)
4. Apply and save

#### Fixing Text
1. Open in any text editor
2. Find the subtitle by timestamp
3. Edit the Sinhala text
4. Save with UTF-8 encoding

#### Splitting Long Subtitles
```
Before:
00:00:10,000 --> 00:00:15,000
මෙය ඉතා දිගු උපසිරැසියක් වන අතර එය කියවීමට අපහසුය

After:
00:00:10,000 --> 00:00:12,500
මෙය ඉතා දිගු උපසිරැසියක්

00:00:12,500 --> 00:00:15,000
වන අතර එය කියවීමට අපහසුය
```

## Creating Your Own Sinhala Subtitles

### If You Want to Translate

1. **Get the original English subtitles**
2. **Open in Subtitle Edit**
3. **Use Auto-translate as base:**
   - Tools → Auto-translate
   - Select Sinhala
   - Review and correct

4. **Manual translation:**
   - Maintain timing
   - Adapt cultural references
   - Keep it natural

5. **Review and test:**
   - Watch with subtitles
   - Check timing
   - Fix errors

6. **Share with community:**
   - Upload to OpenSubtitles
   - Share on Zoom.lk
   - Help others!

### Translation Tips

✅ **Do:**
- Use everyday Sinhala language
- Keep sentences short
- Match lip sync when possible
- Translate meaning, not word-by-word
- Consider context

❌ **Don't:**
- Use overly formal language
- Translate names (usually)
- Include every single word
- Make subtitles too long
- Use unclear abbreviations

## Sinhala Font Support

### Windows 10/11
- Built-in Sinhala support ✅
- No additional fonts needed

### Older Windows
- Download Noto Sans Sinhala
- Install from: https://fonts.google.com/noto/specimen/Noto+Sans+Sinhala

### macOS
- Built-in support ✅
- Good rendering

### Linux
- Install: `sudo apt-get install fonts-noto-sinhala`
- Or download from Google Fonts

## Legal Considerations

### ⚖️ Copyright Notice

- Subtitles are derivative works
- Use for personal viewing only
- Don't sell or monetize
- Respect translator credits
- Support official releases when available

### ✅ Acceptable Use

- Personal Netflix viewing
- Educational purposes
- Accessibility needs
- Learning language

### ❌ Not Acceptable

- Commercial distribution
- Selling subtitle files
- Removing translator credits
- Bundling with pirated content

## Popular Netflix Content with Sinhala Subtitles

### Often Available:
- Marvel movies
- Popular Hollywood blockbusters
- Netflix Originals (some)
- Classic films
- Popular TV series

### Less Common:
- Very new releases
- Niche indie films
- Some Netflix exclusives
- Regional content

### Request Subtitles:
If you can't find subtitles:
1. Request on OpenSubtitles
2. Ask on Zoom.lk forums
3. Consider translating yourself
4. Wait for community uploads

## Contributing to the Community

### Ways to Help:

1. **Create subtitles for new content**
2. **Improve existing translations**
3. **Fix timing issues**
4. **Report quality problems**
5. **Share good sources**
6. **Leave helpful comments**
7. **Rate accurate subtitles**
8. **Thank translators**

### Before Uploading:

- [ ] Test with actual video
- [ ] Check spelling
- [ ] Verify timing
- [ ] Include movie/show details
- [ ] Credit sources if adapted
- [ ] Use descriptive filename

## Subtitle File Naming Convention

**Good names:**
```
The.Dark.Knight.2008.1080p.NF.Sinhala.srt
Inception.2010.Netflix.WEB-DL.si.srt
Breaking.Bad.S01E01.NF.Sinhala.srt
```

**Include:**
- Movie/show name
- Year (movies)
- Season/Episode (TV shows)
- "Netflix" or "NF"
- "Sinhala" or "si"
- Quality if relevant

## Resources

### Learning Materials
- **Sinhala Unicode:** http://www.oshada.com/
- **Sinhala Typing:** Google Input Tools
- **Language Forums:** Zoom.lk

### Tools
- **Subtitle Edit:** Best editor
- **VLC Player:** Test subtitles
- **Notepad++:** Text editing
- **Google Translate:** Quick reference

### Communities
- OpenSubtitles Forums
- Zoom.lk (Sri Lankan forum)
- Reddit r/srilanka
- Facebook subtitle groups

## Frequently Asked Questions

### Q: Can I use these subtitles offline?
**A:** No, Netflix requires internet connection. The extension loads subtitles but Netflix itself needs connectivity.

### Q: Will this work on Netflix app?
**A:** No, only on Netflix website in Chrome browser.

### Q: Can I use multiple subtitle languages?
**A:** Currently only one custom subtitle at a time. You can enable Netflix's own subtitles alongside.

### Q: Are Sinhala subtitles available for all Netflix content?
**A:** No, it depends on community translators. Popular content usually has subtitles.

### Q: How do I type in Sinhala?
**A:** Use Google Input Tools or Windows Sinhala keyboard.

### Q: Can I edit subtitles while watching?
**A:** No, edit the file before loading it into the extension.

---

## Quick Reference Card

**Finding Subtitles:**
1. OpenSubtitles.org → Search → Sinhala
2. Check ratings and comments
3. Download .srt file

**Loading into Extension:**
1. Play Netflix video
2. Click "Load Sinhala Subtitles"
3. Select .srt file
4. Watch!

**If Out of Sync:**
1. Download Subtitle Edit
2. Open subtitle file
3. Sync → Adjust all times
4. Save and reload

**Creating Subtitles:**
1. Get English .srt
2. Open in Subtitle Edit
3. Auto-translate to Sinhala
4. Manually improve
5. Share with community

---

**Happy subtitle hunting! ගුඩ් ලක්! 🎬**

*This extension made for and by the Sinhala-speaking community.*

