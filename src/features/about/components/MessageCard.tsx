import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

interface MessageCardProps {
  name: string;
  title: string;
  message?: string;
  imageUrl?: string;
  placeholder?: boolean;
  maxLength?: number;
  reverse?: boolean;
}

export function MessageCard({
  name,
  title,
  message,
  imageUrl,
  placeholder,
  maxLength = 380,
  reverse = false,
}: MessageCardProps) {
  const isLongMessage = message && message.length > maxLength;
  const excerpt = message?.slice(0, maxLength);
  const displayMessage =
    isLongMessage && excerpt
      ? `${excerpt.replace(/\s+\S*$/, "").trimEnd()}…`
      : message;

  return (
    <div
      className={cn(
        "relative rounded-sm border border-border bg-card p-6 sm:p-8 flex flex-col gap-6 sm:gap-8 items-start",
        reverse ? "md:flex-row-reverse" : "md:flex-row",
      )}
    >
      <div className="flex flex-row items-center gap-4 text-left shrink-0 w-full md:w-48 md:flex-col md:text-center">
        <Avatar className="h-20 w-20 sm:h-28 sm:w-28 md:h-32 md:w-32 border border-border shrink-0">
          <AvatarImage src={imageUrl} alt={name} className="object-cover" />
          <AvatarFallback className="bg-muted text-muted-foreground font-display text-xl">
            {name
              .split(" ")
              .map((n) => n[0])
              .join("")
              .toUpperCase()}
          </AvatarFallback>
        </Avatar>
        <div className="space-y-1 md:mt-1">
          <p className="font-body text-base font-bold text-primary leading-tight">
            {name}
          </p>
          <p className="font-body text-sm text-muted-foreground leading-snug">
            {title}
          </p>
        </div>
      </div>

      <div className="relative flex-1 pt-2">
        <div
          className={cn(
            "absolute -top-2 font-display text-5xl text-secondary/15 leading-none select-none",
            reverse ? "-right-1 md:right-0" : "-left-1 md:left-0",
          )}
        >
          &ldquo;
        </div>
        <div className="relative z-10">
          {placeholder ? (
            <div className="space-y-3">
              <div className="h-4 bg-muted rounded w-full" />
              <div className="h-4 bg-muted rounded w-5/6" />
              <div className="h-4 bg-muted rounded w-4/5" />
              <div className="h-4 bg-muted rounded w-full" />
              <div className="h-4 bg-muted rounded w-3/4" />
              <p className="mt-4 font-body text-xs text-muted-foreground italic">
                Message to be confirmed
              </p>
            </div>
          ) : (
            <div className="space-y-4 pl-6 md:pl-8">
              <p
                className={cn(
                  "font-body text-base md:text-lg text-foreground/85 leading-7 md:leading-8 whitespace-pre-line",
                  reverse && "md:text-right",
                )}
              >
                {displayMessage}
              </p>
              {isLongMessage && (
                <div className={cn("flex", reverse && "md:justify-end")}>
                  <Dialog>
                    <DialogTrigger asChild>
                      <button
                        type="button"
                        className="text-sm font-bold text-secondary hover:underline transition-all"
                      >
                        Read full message
                      </button>
                    </DialogTrigger>
                    <DialogContent className="max-h-[calc(100dvh-2rem)] max-w-2xl overflow-hidden p-0 sm:max-h-[90dvh]">
                      <DialogHeader className="border-b p-8 pb-4">
                        <div className="flex items-center gap-4">
                          <Avatar className="h-12 w-12 border border-border">
                            <AvatarImage
                              src={imageUrl}
                              alt={name}
                              className="object-cover"
                            />
                            <AvatarFallback className="bg-muted text-muted-foreground font-display text-sm">
                              {name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")
                                .toUpperCase()}
                            </AvatarFallback>
                          </Avatar>
                          <div className="text-left">
                            <DialogTitle className="font-display text-xl text-primary">
                              {name}
                            </DialogTitle>
                            <DialogDescription className="sr-only">
                              Full welcome message from {name}
                            </DialogDescription>
                            <p className="font-body text-xs text-muted-foreground">
                              {title}
                            </p>
                          </div>
                        </div>
                      </DialogHeader>
                      <div className="max-h-[calc(100dvh-10rem)] overflow-y-auto overscroll-contain px-8 py-6 sm:max-h-[calc(90dvh-8rem)]">
                        <div className="relative pl-6">
                          <div className="absolute -left-1 -top-4 font-display text-6xl text-secondary/10 leading-none select-none">
                            &ldquo;
                          </div>
                          <p className="relative z-10 font-body text-base md:text-lg text-foreground/85 leading-7 md:leading-8 whitespace-pre-line">
                            {message}
                          </p>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
