# Interactive Kaleidoscope

A simple, web-based interactive application that allows users to create beautiful and intricate kaleidoscopic patterns through mouse movements. This project is built using vanilla HTML, CSS, and JavaScript, with the p5.js library for creative coding and canvas manipulation.

## Key Features

* **Interactive Drawing**: Create dynamic patterns by simply clicking and dragging your mouse on the canvas.
* **Symmetrical Generation**: Automatically generates symmetrical patterns, mimicking a real kaleidoscope.
* **Responsive Design**: The canvas adapts to your window size, providing a full-screen experience.
* **Simple and Lightweight**: No complex dependencies or build processes required.

---

## Badges

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

---

## Table of Contents

* [Installation Instructions](#installation-instructions)
* [Usage Guide](#usage-guide)
* [Features](#features)
* [Technical Documentation](#technical-documentation)
    * [Architecture Overview](#architecture-overview)
    * [Configuration](#configuration)
    * [Development Setup](#development-setup)
    * [Deployment](#deployment)
    * [Testing](#testing)
* [Contributing](#contributing)
* [License](#license)
* [Acknowledgments](#acknowledgments)

---

## Installation Instructions

### Prerequisites

* A modern web browser (e.g., Chrome, Firefox, Safari).
* An internet connection is required to load the p5.js library from the CDN.

### Step-by-step Installation

1.  **Clone or download the repository:**
    ```bash
    git clone [https://github.com/your-username/interactive-kaleidoscope.git](https://github.com/your-username/interactive-kaleidoscope.git)
    ```
    Alternatively, you can download the project files as a ZIP archive.

2.  **Navigate to the project directory:**
    ```bash
    cd interactive-kaleidoscope
    ```

3.  **Open the `index.html` file in your web browser.**
    You can simply double-click the file, or right-click and choose "Open with" your preferred browser. For the best experience and to avoid potential browser security restrictions, it's recommended to serve the files using a local web server.

---

## Usage Guide

Once you have opened the `index.html` file in your browser, you can start creating patterns immediately.

* **Drawing**: Click and hold the left mouse button while moving the mouse across the canvas to draw. The color and thickness of the lines will change based on the cursor's position.
* **Reset**: Click the "Reset" button in the top-left corner of the screen to clear the canvas and start over.

### Code Snippet Example

The core drawing logic is handled in `sketch.js`. The `draw()` function uses the mouse coordinates to draw symmetrical lines.

```javascript
function draw() {
  translate(width / 2, height / 2);

  if (mouseIsPressed) {
    for (let i = 0; i < symmetry; i++) {
      rotate(360 / symmetry);

      let colorValue = map(mouseX, 0, width, 0, 300);
      stroke(colorValue, colorValue, 255);
      strokeWeight(mouseY / 30);

      line(mouseX - width / 2, mouseY - height / 2, pmouseX - width / 2, pmouseY - height / 2);
      push();
      scale(1, -1);
      line(mouseX - width / 2, mouseY - height / 2, pmouseX - width / 2, pmouseY - height / 2);
      pop();
    }
  }
}

