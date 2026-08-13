LOCAL VERSION OF THE RECOVERED VERCEL FRONTEND
===============================================

Open index.html in a browser.

IMPORTANT:
- The original deployed source capture did not include the site's complete image/photos and music directories.
- This package therefore contains the recovered HTML/CSS/animation JS plus local placeholders for the missing book images.
- Put your own music at: music/music.mp3
- Replace: image/photos/b1.png ... b4.png and image/theend.jpg
- You only need to edit the LOCAL_CUSTOMIZATION block near the top of index.html for text/settings.

The original devtools-blocking script, Firebase login, payment/order infrastructure and remote API bootstrapping were removed because they are not needed for a local personal copy. The visual animation engine in ui.js and the original settings engine are retained.

For best browser behavior, serve the folder from a local web server rather than opening file:// directly:
  python -m http.server 8000
then visit http://localhost:8000/
