# 🤖 AlphaBOT - Your Next AI Assistant

Welcome to **AlphaBOT**, an intelligent, real-time AI chatbot built with modern web technologies. AlphaBOT provides a sleek interface for chatting, speaking, and listening using powerful web APIs and AI backend capabilities.

![AlphaBOT Screenshot](https://storage.googleapis.com/gweb-uniblog-publish-prod/images/IO24_WhatsInAName_SocialShare_S96SOzG.width-1300.png)

---

## 🚀 Features

- 💬 Real-time AI chatbot interaction
- 🗣️ Text-to-Speech (TTS)
- 🎙️ Speech-to-Text (voice input)
- ⚡ Fast, responsive UI with Tailwind CSS + shadcn/ui
- 🌙 Dark mode ready
- 🧠 Markdown formatted responses
- 📱 Fully responsive (mobile, tablet, desktop)
- 📎 Copy & Reset buttons for chat

---

## 🛠 Tech Stack

**Frontend:**
- [Next.js](https://nextjs.org/) (App Router)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [React Markdown](https://github.com/remarkjs/react-markdown)

**Voice Support:**
- Web Speech API (Text-to-Speech + Speech Recognition)

---

## 📦 Installation

### 1. Clone the Repository
```bash
git clone https://github.com/whiffCODE/AlphaBOT-AI-Chatbot.git
cd AlphaBOT-AI-Chatbot
```
### 2. Install Dependencies
```bash
npm install
# or
yarn install
```
### 3. Environment Variables
Create an ```.env``` file in the main
```bash
touch .env
```
Paste the environment variable in the ```.env``` file
```
NEXT_PUBLIC_AI_API_KEY=your_gemini_api_key_here
```
### 4. Run Locally
```bash
npm run dev
# or
yarn dev
```
Open your browser at:
```
 http://localhost:3000
```

### 📁 Folder Structure
```bash
AlphaBOT-AI-Chatbot/
│
├── app/                  # App router pages and layout
│   ├── page.tsx          # Main chat UI
│   └── layout.tsx        # Shared layout and fonts
│
├── components/
│   ├── Toolbar.tsx       # Action buttons (Speak, Reset, Copy)
│   ├── ResponseBox.tsx   # Response display and TTS
│
├── lib/
│   └── speech.ts         # Speech synthesis & recognition
│
├── public/               # Public assets
│
├── styles/               # Tailwind and global styles
│
├── tailwind.config.ts   # Tailwind config
├── tsconfig.json         # TypeScript config
├── README.md
└── package.json
```
----

### 🧠 Usage
Type your prompt in the input box.
Click the Ask Alpha button or press Enter.
The response is spoken aloud and also shown in Markdown.
Use:
  -  🎤 Mic button to voice your query.
  -  🗣️ Speak to replay the response.
  -  🔄 Reset to clear.
  -  📋 Copy to copy the full response.
  -  🧪 Coming Soon
        -  GPT integration with API backend
        -  Chat history & sessions
        -  PDF/Image/Audio response support
        -  Voice personality customization
        -  Real-time streaming answers

---

### 🤝 Contributing
Contributions are welcome! Please fork the repository and submit a pull request with your enhancements.

----

### ⚖️ License
This project is licensed under the MIT License.

Copyright (c) 2025 Subhadip Samanta.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


----

### 🙋‍♂️ Author

Subhadip Samanta

-  🔗 GitHub: @[whiffCODE](https://github.com/whiffCODE)
-  🔗 LinkedIn: @[Subhadip Samanta](https://linkedin.com/in/subhadip-samanta-24a49623a)
-  🔗 E-mail: @subhadip360work@gmai.com

## Credits

Developed by whiffCODE.

---

<<<<<<< HEAD
© 2025 AlphaBOT - Your Intelligent AI  Assistant.
=======
© 2025 AlphaBOT - Your Intelligent AI  Assistant.
>>>>>>> 5fab2e1f2681a0708ebe569a63a57ca0b87cca22
