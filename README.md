# 📸 Photo Slideshow with Background Videos, Audio, and Messages  

This project is a **photo slideshow** that integrates **background videos, audio tracks, and text messages** for an immersive experience. It allows smooth transitions between slides, dynamic message display, synchronized audio playback, and supports both light and dark modes. The slideshow is designed to work with gestures and clicks for navigation.

---

## 🚀 Features  
✅ **Smooth Slideshow Transitions** – A three-card view with scaling effects for a seamless experience.  
✅ **Background Video Transitions** – Fade effect ensures smooth video transitions without blackouts.  
✅ **Audio Integration** – Each slide has an associated audio file, and background music plays on interaction.  
✅ **Dynamic Message Display** – Text messages change dynamically with slides and transition smoothly.  
✅ **Touch & Swipe Support** – Navigate slides on mobile with swipe gestures.  
✅ **Light/Dark Mode Support** – Automatic theme adjustment based on system preferences.  

---

## 🛠 Technologies Used  
- **HTML, CSS, JavaScript**  
- **CSS Animations & Transitions**  
- **JavaScript Audio & Video API**  
- **Fetch API for Dynamic Content Loading**  
- **Prefers-color-scheme media query** for light/dark mode support  

---

## 📂 Folder Structure

/project-root │── index.html          # Main HTML file
│── styles.css          # Stylesheet
│── script.js           # JavaScript for slideshow logic
│── README.md           # Project documentation
│── /images             # Folder for slideshow images
│── /audios             # Folder for audio files
│── /bgv                # Folder for background videos
│── messages.txt        # Text file containing slideshow messages

---

## 📌 Installation & Usage  

### **1️⃣ Clone the Repository:**  
```sh
git clone https://github.com/sugarcube08/Wish-Web
cd Wish-Web```

2️⃣ Open index.html in a browser

Simply double-click the index.html file or use a local server for best performance.


---

🔧 How to Customize

🔹 Adding More Images, Audios, or Videos

Ensure image, audio, and video files follow the correct naming convention:

/images/photo1.jpg, photo2.jpg, ...  
/audios/audio1.mp3, audio2.mp3, ...  
/bgv/bgv1.mp4, bgv2.mp4, ...

The script will dynamically load these files, so make sure the names are consistent.


🔹 Update messages.txt

Update messages.txt to include a message for each image (one per line). The messages will be displayed dynamically with each slide.



---

⚠️ Cautions & Potential Errors

🔸 Black screen between background video transitions?
➡ Ensure the video files exist and are named correctly in /bgv/.
➡ The fade effect in script.js might need a slight timing adjustment.

🔸 No audio playing?
➡ Ensure the correct filenames are used in /audios/.
➡ Some browsers block autoplay with sound; try interacting with the page first.

🔸 Messages not showing?
➡ Check if messages.txt is formatted correctly (one message per line).

🔸 Slow loading times?
➡ Reduce image/audio/video file sizes.
➡ Consider lazy loading or using compressed media formats.


---

🚀 Future Improvements

✅ Custom Volume Control UI
✅ More Transition Effects
✅ Lazy Loading for Performance Optimization
✅ Add Randomized Slide Transitions


---

🤝 Contributing

Feel free to open issues or submit pull requests to improve this project!


---

📜 License

This project is open-source and available under the MIT License.