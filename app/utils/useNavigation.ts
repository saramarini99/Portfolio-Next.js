"use client";
import { useRouter } from "next/navigation";

export const useNavigation = () => {
  const router = useRouter();

  const navigate = (path: string) => {
    router.push(path);
  };

  return { navigate };
};
