"use client";

interface UserBannerProps {brandColor?: string | null;}

export default function UserBanner({ brandColor }: UserBannerProps) {
  const color = brandColor ?? "#000000";
  return (
    <div
      className="h-40 w-full"
      style={{ backgroundColor: color }}
    />
  );
}