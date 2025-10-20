// Subtitle Parser Module
// This file provides utility functions for parsing subtitle files

class SubtitleParser {
  /**
   * Parse SRT subtitle format
   * @param {string} text - The SRT file content
   * @returns {Array} Array of subtitle objects
   */
  static parseSRT(text) {
    const subtitles = [];
    const blocks = text.trim().split(/\n\s*\n/);

    blocks.forEach(block => {
      const lines = block.trim().split('\n');
      if (lines.length >= 3) {
        const timeMatch = lines[1].match(
          /(\d{2}):(\d{2}):(\d{2}),(\d{3})\s*-->\s*(\d{2}):(\d{2}):(\d{2}),(\d{3})/
        );
        
        if (timeMatch) {
          const startTime = this.timeToSeconds(
            parseInt(timeMatch[1]),
            parseInt(timeMatch[2]),
            parseInt(timeMatch[3]),
            parseInt(timeMatch[4])
          );
          const endTime = this.timeToSeconds(
            parseInt(timeMatch[5]),
            parseInt(timeMatch[6]),
            parseInt(timeMatch[7]),
            parseInt(timeMatch[8])
          );

          const text = lines.slice(2).join('\n').replace(/<[^>]*>/g, '');
          
          subtitles.push({
            start: startTime,
            end: endTime,
            text: text
          });
        }
      }
    });

    return subtitles;
  }

  /**
   * Parse VTT subtitle format
   * @param {string} text - The VTT file content
   * @returns {Array} Array of subtitle objects
   */
  static parseVTT(text) {
    const subtitles = [];
    const lines = text.split('\n');
    let i = 0;

    // Skip WEBVTT header
    while (i < lines.length && !lines[i].includes('-->')) {
      i++;
    }

    while (i < lines.length) {
      const line = lines[i].trim();
      
      if (line.includes('-->')) {
        const timeMatch = line.match(
          /(\d{2}):(\d{2}):(\d{2})\.(\d{3})\s*-->\s*(\d{2}):(\d{2}):(\d{2})\.(\d{3})/
        );
        
        if (timeMatch) {
          const startTime = this.timeToSeconds(
            parseInt(timeMatch[1]),
            parseInt(timeMatch[2]),
            parseInt(timeMatch[3]),
            parseInt(timeMatch[4])
          );
          const endTime = this.timeToSeconds(
            parseInt(timeMatch[5]),
            parseInt(timeMatch[6]),
            parseInt(timeMatch[7]),
            parseInt(timeMatch[8])
          );

          i++;
          let text = '';
          while (i < lines.length && lines[i].trim() !== '') {
            text += (text ? '\n' : '') + lines[i].trim();
            i++;
          }

          // Remove VTT formatting tags
          text = text.replace(/<[^>]*>/g, '');

          subtitles.push({
            start: startTime,
            end: endTime,
            text: text
          });
        }
      }
      i++;
    }

    return subtitles;
  }

  /**
   * Convert time components to seconds
   * @param {number} hours
   * @param {number} minutes
   * @param {number} seconds
   * @param {number} milliseconds
   * @returns {number} Total time in seconds
   */
  static timeToSeconds(hours, minutes, seconds, milliseconds) {
    return hours * 3600 + minutes * 60 + seconds + milliseconds / 1000;
  }

  /**
   * Convert seconds to time string
   * @param {number} seconds
   * @param {string} format - 'srt' or 'vtt'
   * @returns {string} Formatted time string
   */
  static secondsToTime(seconds, format = 'srt') {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = Math.floor(seconds % 60);
    const milliseconds = Math.floor((seconds % 1) * 1000);

    const pad = (num, size) => String(num).padStart(size, '0');

    if (format === 'vtt') {
      return `${pad(hours, 2)}:${pad(minutes, 2)}:${pad(secs, 2)}.${pad(milliseconds, 3)}`;
    } else {
      return `${pad(hours, 2)}:${pad(minutes, 2)}:${pad(secs, 2)},${pad(milliseconds, 3)}`;
    }
  }

  /**
   * Find subtitle at specific time
   * @param {Array} subtitles
   * @param {number} currentTime
   * @returns {Object|null} Subtitle object or null
   */
  static findSubtitleAtTime(subtitles, currentTime) {
    return subtitles.find(sub => 
      currentTime >= sub.start && currentTime <= sub.end
    ) || null;
  }

  /**
   * Validate subtitle file content
   * @param {string} text
   * @returns {Object} Validation result
   */
  static validate(text) {
    const result = {
      valid: false,
      format: null,
      error: null
    };

    if (!text || text.trim().length === 0) {
      result.error = 'Empty file';
      return result;
    }

    // Check for SRT format
    if (text.match(/\d{2}:\d{2}:\d{2},\d{3}\s*-->\s*\d{2}:\d{2}:\d{2},\d{3}/)) {
      result.valid = true;
      result.format = 'srt';
      return result;
    }

    // Check for VTT format
    if (text.includes('WEBVTT') || text.match(/\d{2}:\d{2}:\d{2}\.\d{3}\s*-->\s*\d{2}:\d{2}:\d{2}\.\d{3}/)) {
      result.valid = true;
      result.format = 'vtt';
      return result;
    }

    result.error = 'Unknown format';
    return result;
  }
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = SubtitleParser;
}

