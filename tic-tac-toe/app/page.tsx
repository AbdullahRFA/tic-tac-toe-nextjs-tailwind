// app/page.tsx
import Game from '@/components/Game';

export default function Page() {
  return (
    <main className="min-h-screen flex items-center justify-center p-4">
  <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md">
    <Game />
  </div>
</main>

  );
}
