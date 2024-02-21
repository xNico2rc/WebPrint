import Link from "next/link";
import { ArrowRight } from "@/components/svg/Arrowright";

export const ButtonDemo = () => {
  return (
    <Link
      href="/pagina2"
      className="size-[100px] flex justify-center items-center  rounded-full p-2 border-2 border-charade-950 dark:border-charade-50 relative after:inset-0 after:absolute after:[content:''] after:size-full after:rounded-full after:translate-y-28  after:-z-10 hover:after:translate-y-0 after:transition-all after:duration-300 after:bg-slate-700 after:dark:bg-slate-50 overflow-hidden hover:text-charade-50 dark:hover:text-charade-950 transition-all duration-300"
    >
      <ArrowRight />{" "}
    </Link>
  );
};
