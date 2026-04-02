# Sign Language Learning Assistant

An interactive AI-powered application that helps users learn Sign language through speech recognition, text input, grammar conversion and voice-based instructions.

---

## Features

- 🎤 **Voice Recognition**: Speak sentences and convert them into text  
- 📝 **Text Input**: Type input manually  
- 🔄 **ISL Grammar Conversion**: Converts English text into structured grammar 
- 🔊 **Voice Instructions**: Step-by-step gesture guidance using TTS  
- 💬 **Chat Interface**: Maintains conversation history 
- 🎯 **Real-time Processing**: Instant conversion and learning feedback  
- 🧠 **Quiz Module**: Test understanding and improve retention  
- 📚 **Resources Section**: Access learning materials and references  

---

## Supported Functionalities

- Sentence to ISL conversion  
- Grammar-aware translation  
- Voice-based learning guidance  
- Interactive quizzes  
- History tracking  

---

## Getting Started

### 1️⃣ Clone the repository
```bash
git clone https://github.com/Aazma11/SignLearn.git
cd SignLearn
```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   - Navigate to `http://localhost:3000`
   - Start speaking or typing to learn Sign Language

## Usage

1. **Voice Input**: Click the microphone button and speak words like "hello"
2. **Text Input**: Type words in the text field and press Enter
3. **Grammar Conversion**: View Structured Grammar formats
4. **Learn Signs**: listen to detailed Voice instructions for each word
5. **Practice** : Take quizzes and improve skills

## Project Structure

```
Sign Learn/
├── src/
│   ├── pages/
│   │   ├── Home.tsx               # Landing page
│   │   ├── Login.tsx              # User login
│   │   ├── Register.tsx           # User registration
│   │   ├── Dashboard.tsx          # Main dashboard
│   │   ├── Practice.tsx           # Learning & practice module
│   │   └── Resources.tsx          # Learning resources
│   ├── components/
│   │   ├── VoiceInput.tsx         # Speech recognition input
│   │   ├── ChatInterface.tsx      # Chat UI & interaction
│   │   └── GestureGuide.tsx       # Sign learning instructions
│   ├── hooks/
│   │   ├── useSpeechRecognition.ts # Voice input handling
│   │   └── useMurfTTS.ts           # Text-to-speech (voice guidance)
│   ├── providers/
│   │   ├── AuthProvider.tsx       # Authentication state
│   │   └── ChatProvider.tsx       # Chat state management
│   ├── utils/
│   │   ├── aslMapping.ts          # Sign mapping logic
│   │   └── islMapping.ts          # ISL grammar/mapping
│   ├── App.tsx                   # Root component
│   └── main.tsx                  # Entry point
```

## License

MIT License
