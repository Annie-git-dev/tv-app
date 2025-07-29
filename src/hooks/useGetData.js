import { useQuery } from "@tanstack/react-query";

export default function useGetData() {
  return useQuery({
    queryKey: ["data"],
    queryFn: async () => {
      const res = await fetch("/data/data.json");
      if (!res.ok) throw new Error("Failed to fetch");
      return res.json();
    },
  });
}