export default function Hero() {
  return (
    <section className="pt-[150px] pb-12 flex flex-col items-center text-center px-6">
      <h1 className="text-[46px] leading-[1.18] font-bold text-[#1a1a2e] tracking-[-0.025em] max-w-[580px]">
        Stop typing. Start writing
        <br />
        5x faster with voice.
      </h1>

      <p className="mt-5 text-[15.5px] leading-[1.65] text-[#777] max-w-[380px]">
        AI-powered voice dictation that&apos;s so powerful it can
        replace your keyboard.
      </p>

      <button className="mt-7 flex items-center gap-2 bg-[#4b4acf] hover:bg-[#4140b8] text-white text-[14px] font-medium rounded-full px-7 py-[11px] transition-colors shadow-lg shadow-indigo-200/60 cursor-pointer">
        <AppleIcon />
        Download for Free
      </button>

      <p className="mt-4 text-[12px] text-[#aaa] tracking-[0.01em]">
        Available on Mac, iPhone, and Windows for free
      </p>
    </section>
  );
}

function AppleIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 14 17" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M11.182 8.894c-.02-1.825 1.49-2.702 1.558-2.744-.848-1.24-2.168-1.41-2.638-1.43-1.123-.114-2.193.662-2.764.662-.57 0-1.452-.645-2.386-.628-1.228.018-2.36.714-2.993 1.813-1.275 2.213-.327 5.493.917 7.292.608.88 1.332 1.868 2.284 1.833.916-.037 1.263-.593 2.371-.593 1.109 0 1.418.593 2.382.575.986-.017 1.607-.897 2.211-1.78.697-1.021.983-2.01 1-2.061-.022-.01-1.92-.737-1.942-2.939zM9.355 3.603C9.856 2.994 10.197 2.162 10.107 1.5c-.718.029-1.588.478-2.103 1.082-.462.534-.866 1.387-.758 2.205.8.062 1.618-.407 2.109-1.184z" />
    </svg>
  );
}
