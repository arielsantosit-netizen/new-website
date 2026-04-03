'use client';

interface VideoModelCardProps {
  id: string;
  owner: string;
  name: string;
  description: string;
  url: string;
  coverImage: string | null;
  runCount: number;
  githubUrl: string | null;
}

/**
 * Reusable video model card component
 * Displays a single video model with its details
 */
export const VideoModelCard = ({
  name,
  owner,
  description,
  url,
  coverImage,
  runCount,
  githubUrl,
}: VideoModelCardProps) => {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden hover:shadow-lg transition-all duration-300">
      {/* Cover Image */}
      {coverImage ? (
        <div className="w-full h-48 bg-gray-50 relative">
          <img
            src={coverImage}
            alt={`${name} preview`}
            className="w-full h-full object-cover"
          />
        </div>
      ) : (
        <div className="w-full h-48 bg-gradient-to-br from-pink-50 to-blue-50 flex items-center justify-center border-b border-gray-100">
          <svg
            className="w-16 h-16 text-gray-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
            />
          </svg>
        </div>
      )}

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-serif-elegant text-[#111] font-medium tracking-wide">
            {name}
          </h3>
          <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] uppercase tracking-widest font-serif-elegant bg-green-50 text-green-700">
            Official
          </span>
        </div>

        <p className="text-sm font-serif-elegant text-gray-400 mb-4">
          by {owner}
        </p>

        <p className="text-gray-600 font-serif-elegant text-sm mb-6 leading-relaxed line-clamp-3">
          {description}
        </p>

        {/* Stats */}
        <div className="flex items-center font-serif-elegant text-sm text-gray-500 mb-6">
          <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
            <path
              fillRule="evenodd"
              d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
              clipRule="evenodd"
            />
          </svg>
          {runCount.toLocaleString()} runs
        </div>

        {/* Links */}
        <div className="flex gap-3">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center px-5 py-2.5 bg-[#111] text-white rounded-full hover:bg-[#333] transition-colors text-xs uppercase tracking-widest font-serif-elegant shadow-sm hover:shadow-md"
          >
            View Model
          </a>
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 bg-gray-50 text-gray-700 rounded-full hover:bg-gray-100 transition-colors border border-gray-200"
              aria-label="View on GitHub"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

