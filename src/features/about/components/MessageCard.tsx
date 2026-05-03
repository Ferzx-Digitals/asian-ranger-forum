import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
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
  maxLength = 280,
  reverse = false,
}: MessageCardProps) {
  const isLongMessage = message && message.length > maxLength;
  const displayMessage = isLongMessage
    ? `${message.substring(0, maxLength)}...`
    : message;

  return (
    <div
      className={cn(
        "relative rounded-sm border border-border bg-card p-8 flex flex-col gap-8 items-start",
        reverse ? "md:flex-row-reverse" : "md:flex-row",
      )}
    >
      <div className="flex flex-col items-center text-center shrink-0 w-full md:w-48">
        <Avatar className="h-24 w-24 mb-4 border border-border">
          <AvatarImage src={imageUrl} alt={name} className="object-cover" />
          <AvatarFallback className="bg-muted text-muted-foreground font-display text-xl">
            {name
              .split(" ")
              .map((n) => n[0])
              .join("")
              .toUpperCase()}
          </AvatarFallback>
        </Avatar>
        <div className="space-y-1">
          <p className="font-body text-sm font-bold text-primary leading-tight">
            {name}
          </p>
          <p className="font-body text-xs text-muted-foreground leading-snug">
            {title}
          </p>
        </div>
      </div>

      <div className="relative flex-1 pt-2">
        <div
          className={cn(
            "absolute -top-4 font-display text-6xl text-secondary/20 leading-none select-none",
            reverse ? "-right-2" : "-left-2",
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
            <div className="space-y-4">
              <p
                className={cn(
                  "font-body text-base text-foreground/80 leading-relaxed whitespace-pre-line",
                  reverse && "md:text-right",
                )}
              >
                {displayMessage}
              </p>
              {isLongMessage && (
                <div className={cn("flex", reverse && "md:justify-end")}>
                  <Dialog>
                    <DialogTrigger asChild>
                      <button className="text-sm font-bold text-secondary hover:underline transition-all">
                        Read more...
                      </button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl max-h-[90vh] flex flex-col p-0 overflow-hidden">
                      <DialogHeader className="p-8 pb-4 border-b">
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
                            <p className="font-body text-xs text-muted-foreground">
                              {title}
                            </p>
                          </div>
                        </div>
                      </DialogHeader>
                      <ScrollArea className="flex-1 p-8 pt-6">
                        <div className="relative">
                          <div className="absolute -top-4 -left-2 font-display text-6xl text-secondary/10 leading-none select-none">
                            &ldquo;
                          </div>
                          <p className="relative z-10 font-body text-base text-foreground/80 leading-relaxed whitespace-pre-line">
                            {message}
                          </p>
                        </div>
                      </ScrollArea>
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
