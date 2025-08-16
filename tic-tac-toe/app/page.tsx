// Import the Game component from the components folder using the alias '@'
import Game from '@/components/Game';

// Define the default page component for the root route ('/')
export default function Page() {
  return (
    // Main container for the page content
    <main className="min-h-screen flex items-center justify-center p-4">
      {/* Card-style wrapper for the game board */}
      <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md">
        {/* Render the Game component */}
        <Game />
      </div>
    </main>
  );
}
