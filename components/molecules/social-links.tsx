import { SocialIcon } from '@/components/atoms/social-icon';
import { Github, Linkedin, Mail } from 'lucide-react';

export function SocialLinks() {
  return (
    <div className="flex items-center gap-4">
      <SocialIcon
        href="https://github.com/ollehmichael"
        icon={Github}
        label="GitHub"
      />
      <SocialIcon
        href="https://www.linkedin.com/in/byong-cheol-han-60127b1b7/"
        icon={Linkedin}
        label="LinkedIn"
      />
      <SocialIcon
        href="mailto:byongcheolhan@gmail.com"
        icon={Mail}
        label="Email"
      />
    </div>
  );
}
