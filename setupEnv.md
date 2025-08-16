# 🛠 Project Setup: Tic-Tac-Toe with Next.js + Tailwind

This guide walks you through setting up the Tic-Tac-Toe project using **Next.js App Router**, **TypeScript**, and **Tailwind CSS**.

---

## 📦 1. Create the Project

Use the following command to scaffold the project with Tailwind and ESLint preconfigured:

```bash
npx create-next-app@latest tic-tac-toe --ts --tailwind --eslint
```

### ✅ Answers to prompts:
- **Would you like your code inside a `src/` directory?** → No
- **Would you like to use App Router?** → Yes
- **Would you like to use Turbopack for `next dev`?** → No
- **Would you like to customize the import alias (`@/*` by default)?** → No

This will automatically set up:
- Tailwind CSS
- ESLint
- App Router structure (`app/` folder)
- TypeScript support

---

## 📂 2. Open the Project

Navigate into the project folder and open it in VS Code:

```bash
cd tic-tac-toe
code .
```

---

## 🧹 3. Clean the Boilerplate

Inside `app/page.tsx`, remove the default placeholder content (e.g. welcome message, links).  
Keep the following files:

- `app/layout.tsx` → Global layout and HTML structure
- `app/globals.css` → Tailwind directives and global styles

---

## 🎨 4. Verify Tailwind Configuration

Ensure the following files exist:

- `tailwind.config.ts`
- `postcss.config.js`
- `app/globals.css`

### ✅ Tailwind directives in `globals.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

These enable Tailwind’s styling system across your app.

---

You're now ready to start building your Tic-Tac-Toe game!


## 💻 2. Install Node.js (via nvm — Node Version Manager)
This keeps your Node versions clean and up‑to‑date.

```bash
brew install nvm
mkdir ~/.nvm
```

Add to your shell config (`.zshrc` on macOS Catalina+):

```bash
export NVM_DIR="$HOME/.nvm"
source "$(brew --prefix nvm)/nvm.sh"
```

**Then install Node 18+**:

```bash
nvm install 18
nvm use 18
```

---

## 🔗 3. Install Git (if not already)
macOS often ships with an older Git — update it:

```bash
brew install git
```

**Verify**:  
```bash
git --version
```

---

## 📝 4. Set up VS Code “code” command
1. Open VS Code.
2. Press **⇧⌘P** (Shift + Command + P).
3. Search: `Shell Command: Install 'code' command in PATH` → hit Enter.

Now you can open folders from Terminal:  
```bash
code .
```

---

## ☁️ 5. Log in / create accounts
- **GitHub:** [github.com](https://github.com) — host your repo.
- **Vercel:** [vercel.com](https://vercel.com) — deploy directly from GitHub.
- Link GitHub to Vercel in your Vercel settings for 1‑click deployments.

---

## 🌐 6. Quick test to ensure all’s well
Run these in order:

```bash
node -v       # should be v18.x.x
npm -v        # should be 9.x or newer
git --version # shows git version
code -v       # VS Code version output
```

If all return versions, your environment is ready.

---




## 🧭 Step-by-step: Add `nvm` config to your shell

### 1. **Determine your shell**
Most modern macOS systems use **zsh** by default (especially macOS Catalina and later).  
To confirm, run:

```bash
echo $SHELL
```

If it returns something like `/bin/zsh`, you’re using zsh. If it says `/bin/bash`, you’re on bash.

---

### 2. **Edit the correct config file**

| Shell | Config File         | Command to open it |
|-------|---------------------|--------------------|
| zsh   | `~/.zshrc`          | `code ~/.zshrc`    |
| bash  | `~/.bash_profile`   | `code ~/.bash_profile` |

> If `code` doesn’t work, use `nano ~/.zshrc` or `nano ~/.bash_profile` instead.

---

### 3. **Paste the lines at the bottom**

```bash
export NVM_DIR="$HOME/.nvm"
source "$(brew --prefix nvm)/nvm.sh"
```

Then save and close the file.

---

### 4. **Apply the changes**

Run this to reload your shell config:

```bash
source ~/.zshrc   # or source ~/.bash_profile
```

Now you can use `nvm` normally:

```bash
nvm install 18
nvm use 18
```

---

