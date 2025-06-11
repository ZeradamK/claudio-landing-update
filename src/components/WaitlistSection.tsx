import React, { useState, useEffect } from 'react';
import { Button } from '@/ui/button';
import { AvatarCircles } from '@/components/magicui/avatar-circles';

const avatars = [
  {
    imageUrl: "https://avatars.githubusercontent.com/u/16860528",
    profileUrl: "https://github.com/dillionverma",
  },
  {
    imageUrl: "https://avatars.githubusercontent.com/u/20110627",
    profileUrl: "https://github.com/tomonarifeehan",
  },
  {
    imageUrl: "https://avatars.githubusercontent.com/u/106103625",
    profileUrl: "https://github.com/BankkRoll",
  },
  {
    imageUrl: "https://avatars.githubusercontent.com/u/59228569",
    profileUrl: "https://github.com/safethecode",
  },
  {
    imageUrl: "https://avatars.githubusercontent.com/u/59442788",
    profileUrl: "https://github.com/sanjay-mali",
  },
  {
    imageUrl: "https://avatars.githubusercontent.com/u/89768406",
    profileUrl: "https://github.com/itsarghyadas",
  },
];

export default function WaitlistSection() {
  const [waitlistCount, setWaitlistCount] = useState(1000); // Static fallback

  // Simulate async fetch for demo
  useEffect(() => {
    setTimeout(() => setWaitlistCount(1123), 1000);
  }, []);

  const [email, setEmail] = useState('');
  const [pending, setPending] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setPending(true);
    setTimeout(() => {
      setPending(false);
      setSuccess(true);
      setEmail('');
      setWaitlistCount((c) => c + 1);
    }, 1200);
  };

  return (
    <div className="w-full max-w-3xl mx-auto px-2 sm:px-8 py-8 flex flex-col items-center relative" style={{ zIndex: 1 }}>
      <div className="relative z-10 w-full flex flex-col items-center">
        <h1 className="text-3xl sm:text-5xl font-bold text-white mb-4 text-center">Join the Waitlist</h1>
        <p className="text-[14px] font-light text-white/80 text-center mb-8 max-w-xl">
          Be part of something truly extraordinary. Join thousands of others already gaining early access to our revolutionary new platform.
        </p>
        <form onSubmit={handleSubmit} className="w-full space-y-4 mb-8">
          <div className="flex overflow-hidden rounded-xl p-1 border border-[rgba(200,200,220,0.15)] focus-within:border-[rgba(200,200,220,0.35)] transition-colors duration-200">
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-describedby="email-error"
              className="w-full border-0 bg-transparent text-white placeholder:text-white/60 focus:ring-0 focus:border-transparent focus-visible:border-transparent focus:outline-none active:ring-0 active:outline-none focus-visible:ring-0 focus-visible:outline-none active:border-transparent focus-visible:ring-offset-0"
              style={{ boxShadow: 'none' }}
            />
            <Button
              type="submit"
              disabled={pending}
              className="bg-white text-black font-semibold px-4 rounded-xl transition-all duration-300 ease-in-out focus:outline-none w-[120px] hover:bg-gray-100 hover:text-black border border-white/20 shadow-sm"
            >
              {pending ? 'Loading...' : 'Get Notified'}
            </Button>
          </div>
          {success && <div className="text-green-600 text-sm text-center">You have been added to the waitlist!</div>}
        </form>
        <div className="flex items-center justify-center mt-2 mb-6 gap-4">
          <AvatarCircles numPeople={waitlistCount - avatars.length} avatarUrls={avatars} />
          <p className="text-white font-semibold">{waitlistCount}+ people on the waitlist</p>
        </div>
      </div>
    </div>
  );
} 