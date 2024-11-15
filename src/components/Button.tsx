import * as React from "react";
import Link from "next/link";

interface IButtonComponentProps {
  href: string;
  className?: string;
  children: React.ReactNode;
}

const ButtonCTA: React.FunctionComponent<IButtonComponentProps> = ({
  href,
  className,
  children,
}) => {
  return (
    <div
      className={`${className} h-fit w-fit rounded-full border-2 border-default bg-accent px-3 py-2 font-semibold transition-all hover:bg-foreground hover:text-white`}
    >
      <Link href={href} aria-label="call to action and navigate">
        {children}
      </Link>
    </div>
  );
};

export default ButtonCTA;
