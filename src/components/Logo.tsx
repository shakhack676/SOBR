import Image from "next/image";

type LogoProps = {
  className?: string;
  size?: number;
  priority?: boolean;
  alt?: string;
};

export function Logo({
  className,
  size = 52,
  priority = false,
  alt = "Emblema СОБР",
}: LogoProps) {
  return (
    <Image
      src="/images/logo-sobr.webp"
      alt={alt}
      width={size}
      height={size}
      className={className}
      priority={priority}
      sizes={`${size}px`}
    />
  );
}
