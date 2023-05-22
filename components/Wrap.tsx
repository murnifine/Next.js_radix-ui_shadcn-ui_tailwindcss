import { cn } from "@/lib/utils";
import { Separator } from "./ui/separator";

type Card = {
  children: React.ReactNode;
  as?: String;
  er?: Boolean;
  isClient?: Boolean;
  isWide?: boolean;
};

export default function Wrap({ as, er, isClient, isWide, children }: Card) {
  return (
    <div
      className={cn(
        "flex flex-col shadow-md items-center grow ring-2 rounded-sm",
        isClient ? "ring-sky-400 " : "ring-purple-400",
        isWide && "col-span-2"
      )}
    >
      {/* <div
      className={`
        flex flex-col   shadow-md items-center grow ring-2 ${
          client ? "ring-sky-400 " : "ring-purple-400"
        } rounded-sm`}
    > */}
      <div className="flex justify-between w-full p-5">
        <small className="font-bold ">{as}</small>
        {/* <small
          className={` font-bold ${
            client ? "text-blue-500" : "text-purple-500"
          }`}
        >
          {client ? "Client" : "Server"}
        </small> */}
      </div>

      {er && <span className="text-red-500">Bermasalah</span>}
      <Separator />
      <div className="flex flex-col items-center justify-center w-full gap-2 p-5 grow">
        {children}
      </div>
    </div>
  );
}
