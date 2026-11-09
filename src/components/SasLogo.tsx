import Image from "next/image";

type SasLogoProps = {
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  alt?: string;
};

export function SasLogo({
  className,
  width = 56,
  height = 28,
  priority = false,
  alt = "South America Server",
}: SasLogoProps) {
  return (
    <Image
      src="/images/logo-sas.webp"
      alt={alt}
      width={width}
      height={height}
      className={className}
      priority={priority}
      style={{
        width: "auto",
        height: "auto",
        maxWidth: `${width}px`,
        maxHeight: `${Math.round(width * (82 / 162))}px`,
        objectFit: "contain",
      }}
    />
  );
}

