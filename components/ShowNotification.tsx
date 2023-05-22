"use client";
import { Button } from "./ui/button";
import { ToastAction } from "./ui/toast";
import { toast } from "./ui/use-toast";

function ShowNotification() {
  if (false) {
    return (
      <>
        <div>Halo</div>
      </>
    );
  }

  return (
    <div className="flex gap-1 ">
      <Button
        variant="outline"
        onClick={() => {
          toast({
            duration: 3000,
            title: "Uh oh! Something went wrong.",
            description: "There was a problem with your request.",
          });
        }}
      >
        Show Toast
      </Button>

      <Button
        variant="default"
        className=" bg-sky-500 hover:bg-sky-600"
        onClick={() => {
          toast({
            variant: "destructive",
            title: "Uh oh! Something went wrong.",
            description: "There was a problem with your request.",
            action: <ToastAction altText="Try again">Try again</ToastAction>,
          });
        }}
      >
        Show Toast
      </Button>

      <Button
        variant="secondary"
        onClick={() => {
          toast({
            title: "Uh oh! Something went wrong.",
            description: "There was a problem with your request.",
            action: (
              <ToastAction
                onClick={() => console.log("coba lagi ya")}
                altText="Try again"
              >
                Try again
              </ToastAction>
            ),
          });
        }}
      >
        Show Toast
      </Button>
    </div>
  );
}

export default ShowNotification;
