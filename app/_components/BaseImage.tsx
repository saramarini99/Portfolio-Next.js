import Image from "next/image";

type Props = {
  src: string;
  width?: number;
  height?: number;
  alt: string;
  className?: string;
};

export default function BaseImage({
  src,
  alt,
  width,
  height,
  className,
  ...rest
}: Props) {
  return (
    <Image
      src={src}
      width={width}
      height={height}
      alt={alt}
      className={className}
      {...rest}
    />
  );
}
