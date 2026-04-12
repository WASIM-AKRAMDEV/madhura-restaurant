export default function Ornament({ className = '' }) {
  return (
    <div className={`flex items-center justify-center gap-3 ${className}`}>
      <span className="block w-16 h-px bg-gradient-to-r from-transparent to-gold-600"></span>
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-gold-500">
        <path d="M10 2L12 8H18L13 12L15 18L10 14L5 18L7 12L2 8H8L10 2Z" fill="currentColor" opacity="0.8"/>
      </svg>
      <span className="block w-16 h-px bg-gradient-to-l from-transparent to-gold-600"></span>
    </div>
  );
}
