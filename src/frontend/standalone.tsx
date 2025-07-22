import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createRoot } from 'react-dom/client';
import './index.css';
import React from 'react';

const queryClient = new QueryClient();

/**
 * Cold Calling Coach - Standalone Web Interface
 */
function ColdCallingCoach() {
  // Apply dark mode to the root element
  React.useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-gray-900 text-white">
        <div className="container mx-auto px-4 py-8">
          <header className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Cold Calling Coach</h1>
            <p className="text-xl text-gray-300">
              Real Estate Training Assistant
            </p>
          </header>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gray-800 p-6 rounded-lg">
                <h2 className="text-2xl font-semibold mb-4 text-blue-400">
                  🎯 Coaching Mode
                </h2>
                <p className="text-gray-300 mb-4">
                  Get help with script questions, prequalifying techniques, and objection handling.
                </p>
                <ul className="text-sm text-gray-400 space-y-2">
                  <li>• Script guidance and techniques</li>
                  <li>• The 4 pillars of prequalifying</li>
                  <li>• Objection handling strategies</li>
                  <li>• Phone etiquette tips</li>
                </ul>
              </div>

              <div className="bg-gray-800 p-6 rounded-lg">
                <h2 className="text-2xl font-semibold mb-4 text-green-400">
                  🎭 Roleplay Mode
                </h2>
                <p className="text-gray-300 mb-4">
                  Practice with realistic homeowner personas to build confidence.
                </p>
                <ul className="text-sm text-gray-400 space-y-2">
                  <li>• Angry/hostile homeowners</li>
                  <li>• Suspicious homeowners</li>
                  <li>• Motivated sellers</li>
                  <li>• Price-focused homeowners</li>
                </ul>
              </div>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-semibold mb-4">📞 Cold Calling Script</h3>
              <div className="bg-gray-700 p-4 rounded text-sm font-mono">
                <p className="text-yellow-300 font-semibold mb-2">Opening:</p>
                <p className="mb-4">
                  "Hi, I am looking for [Name]. My name is [Your Name] and I am sorry this call is out of the blue...
                  but I was calling about a home I believe you own on [Address]. I am actually looking to buy a home 
                  in the neighborhood and wanted to see if you had thought about selling it.... or would consider an offer?"
                </p>
                
                <p className="text-blue-300 font-semibold mb-2">The 4 Pillars of Prequalifying:</p>
                <ol className="list-decimal list-inside space-y-1 text-gray-300">
                  <li>Condition of the home</li>
                  <li>Timeline to sell</li>
                  <li>Motivation</li>
                  <li>Price</li>
                </ol>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-blue-600 p-4 rounded-lg inline-block">
                <h3 className="text-lg font-semibold mb-2">Ready to Practice?</h3>
                <p className="text-sm">
                  This coach is designed to help real estate agents master cold calling through 
                  interactive coaching and realistic roleplay scenarios.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </QueryClientProvider>
  );
}

// Initialize the application
const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(<ColdCallingCoach />);
} 