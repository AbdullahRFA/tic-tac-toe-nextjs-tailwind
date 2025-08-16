
# 🎮 Tic-Tac-Toe Game

A responsive, two-player Tic-Tac-Toe game built with **Next.js App Router** and **Tailwind CSS**.  
Play locally, track turns, detect wins or draws, and reset the board — all in a clean, mobile-friendly UI.

---

## 🚀 Live Demo

🔗 [Play the game on Vercel](https://tic-tac-toe-nextjs-tailwind.vercel.app)

---

## 📸 Screenshots

### 🏠 Home Screen

| Start State | Draw State |
|-------------|-------------|
| ![Start State](/SS/starting.png) | ![Draw State](/SS/Draw.png) |

### 📊 Winning State

| X Win | O win |
|--------------|------------------|
| ![X win](/SS/X%20win.png) | ![O win](/SS/O%20win.png) |

---

## 🧰 Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (App Router)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Language:** TypeScript
- **Deployment:** [Vercel](https://vercel.com)

---

## ✨ Features

- ✅ Two-player local game (X vs O)
- 🔄 Turn indicator
- 🏆 Win detection with highlight
- 🤝 Draw detection
- 🔁 Reset button
- 📱 Responsive design (mobile & desktop)
- 🎨 Clean UI with animations and color-coded marks

---

## 📦 Installation

Clone the repo and install dependencies:

```bash
git clone https://github.com/AbdullahRFA/tic-tac-toe-nextjs-tailwind.git
cd tic-tac-toe-nextjs-tailwind
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to play locally.

---

## 🛠 Project Structure

```
tic-tac-toe-nextjs-tailwind/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   └── Game.tsx
├── public/
├── tailwind.config.ts
├── tsconfig.json
├── package.json
```

---

## 📤 Deployment

This project is deployed on [Vercel](https://vercel.com) using GitHub integration.  
Every push to `main` triggers an automatic build and deployment.

---

## 🧭 Roadmap

Planned enhancements:

- 🎨 Theme toggle (light/dark mode)
- 🧩 Component split: `Board` and `Square`
- 🕹️ Keyboard support (arrow keys + Enter)
- 📱 Mobile vibration feedback
- 🔊 Sound effects on move and win
- 🧠 AI opponent (Minimax)
- 🌍 Online multiplayer (WebSocket)

---

## 📈 Changelog

**v1.0.0** — Initial release  
- Game board with win/draw detection  
- Responsive layout  
- Color-coded marks and animations  
- Vercel deployment

---

## 🤝 Contributing

Contributions are welcome! If you'd like to improve the game, follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m 'Add your feature'`)
4. Push to your branch (`git push origin feature/your-feature`)
5. Open a Pull Request

Please follow the existing code style and include clear commit messages.

---

## 👤 Author and Contact

**Abdullah Nazmus Sakib**  
Computer Science & Engineering @ Jahangirnagar University  
Passionate about clean UI, scalable systems, and delightful user experiences.

🔗 [LinkedIn](https://www.linkedin.com/in/abdullah-nazmus-sakib-04024b261/)  
🐙 [GitHub](https://github.com/AbdullahRFA)

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).