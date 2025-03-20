# 📸 **Photo Slideshow with Background Video and Music**

This project implements a dynamic photo slideshow with background video and music. The slideshow is interactive, supports touch/swipe gestures, and adapts to the user's light/dark mode preferences. It plays background music and synchronizes images, audio, and video in a seamless visual experience.

## Features ✨
- **Dynamic Slideshow**: Automatically transitions through images with smooth animations. 🎥
- **Background Video**: Displays a full-screen background video with a subtle blur effect. 🎬
- **Background Music**: Plays background music that starts with user interaction (click or tap). 🎶
- **Audio Synchronization**: Each image can have its own associated audio, which plays as the image is displayed. 🔊
- **Touch/Swipe Support**: Allows users to navigate through the slideshow by swiping on mobile devices. 📱
- **Light/Dark Mode Support**: Automatically adjusts the theme based on the user's system preferences. 🌞🌙

## How It Works 🛠️
- The slideshow consists of three images at a time: the current image in the center, a previous image to the left, and the next image to the right.
- The images, audios, and background videos are preloaded in sequence based on the `media.json` file.
- The background video plays in a loop and fades in/out when transitioning between images.
- The slideshow progresses automatically based on the audio associated with each image, or users can manually navigate the slideshow via swipes or clicks.

### Interaction Flow 🔄:
1. **User Interaction**: Background music starts playing upon user interaction (click or tap). 🎵
2. **Image Transition**: Images, audio, and videos transition seamlessly when the audio finishes or the user swipes through the slideshow. ⏳
3. **Message Display**: Each image has an associated message that appears at the bottom of the screen with a fade-in effect. 💬

## Folder Structure 📂
- **`index.html`**: Main HTML file containing the structure and layout of the page.
- **`styles.css`**: CSS file for styling the slideshow, background video, and other elements.
- **`script.js`**: JavaScript file handling the functionality, such as image transitions, background music, audio synchronization, and swipe support.
- **`images/`**: Directory containing the images for the slideshow.
- **`audios/`**: Directory containing the audio files (optional, associated with each image).
- **`bgv/`**: Directory containing background videos (optional, associated with each image).
- **`messages.txt`**: Text file containing the messages that appear at the bottom of the screen.
- **`media.json`**: New JSON file that manages the sequential media (images, audios, videos) and their order in the slideshow.

## Installation & Usage 💻

1. Clone the repository or download the files to your local machine.
2. Ensure that you have the required folders (`images/`, `audios/`, `bgv/`) containing the appropriate media files:
   - Images should be in `.jpg`, `.jpeg`, `.png`, or `.gif` format.
   - Audio files should be in `.mp3` format.
   - Background videos should be in `.mp4` format.
   - Messages should be stored in `messages.txt`, with each line containing one message.
3. Open the `index.html` file in a web browser to view the slideshow.
4. The slideshow will automatically start with background music, and the images will transition based on the audio track associated with each image.

## Customization ✨
- **Update the `media.json` file**: This is the new configuration file that defines the sequence of media items in the slideshow. Each entry contains the paths to the image, audio, and background video:
    ```json
    [
        {
            "image": "images/photo1.jpg",
            "audio": "audios/audio1.mp3",
            "video": "bgv/video1.mp4"
        },
        {
            "image": "images/photo2.jpg",
            "audio": "audios/audio2.mp3",
            "video": "bgv/video2.mp4"
        }
    ]
    ```
    - Update the paths with your media files and ensure the sequence matches your intended order.
  
- **Update the `messages.txt` file**: Each line in this file corresponds to a message that will appear with the respective image/audio/video:
    ```
    This is photo 1
    This is photo 2
    ...
    ```

- **CSS Customization**: To change the appearance of the slideshow, edit the `styles.css` file. 🎨
- **Replace Media Files**: To update the images, audio, and background videos, simply replace the files in the `images/`, `audios/`, and `bgv/` folders.
- **Background Music**: Update the `bgm/bgm.mp3` file to change the background music.

## Technologies Used 🛠️
- **HTML**: For the structure and layout of the page.
- **CSS**: For styling the page, including transitions, animations, and responsiveness.
- **JavaScript**: For handling the slideshow functionality, media preloading, user interactions, and synchronization of images, audio, and video.

## Cautions ⚠️
- **Media Files**: Ensure that the media files in `media.json` are correctly named and the paths are accurate.
- **Message Synchronization**: Each line in `messages.txt` corresponds to a media entry in `media.json`. Ensure the number of lines in `messages.txt` matches the number of entries in `media.json`.
- **Folder Structure**: Maintain the proper folder structure (images, audios, bgv) to ensure the correct file paths.

## License 📝
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements 🙏
- The slideshow and video functionality rely on the HTML5 `video` and `audio` elements.
- Background music and audio synchronization are powered by JavaScript's `Audio` API.
- The project uses the `prefers-color-scheme` media query to support both light and dark modes.


---
## Made with ❤️ by SugarCube
---
## ☕ Support Me
If you like this project, consider buying me
 a coffee!
[![Buy Me a Coffee](https://img.shields.io/badge/Buy%20Me%20a%20Coffee-Support%20Me-orange?style=flat-square&logo=buy-me-a-coffee)](https://www.buymeacoffee.com/sugarcube08)   ---
