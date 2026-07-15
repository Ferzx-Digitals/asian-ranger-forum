import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { registrationFaqs } from "../data";

export function RegistrationFaqs() {
  return (
    <Accordion type="single" collapsible className="space-y-3">
      {registrationFaqs.map((item, index) => (
        <AccordionItem
          key={item.question}
          value={`registration-faq-${index + 1}`}
          className="rounded-sm border border-border bg-card px-5 data-[state=open]:border-secondary/50 data-[state=open]:bg-secondary/5 sm:px-6"
        >
          <AccordionTrigger className="items-start gap-4 py-5 text-left font-body text-sm font-semibold leading-6 text-foreground hover:text-primary hover:no-underline sm:text-base">
            <span className="pr-2">{item.question}</span>
          </AccordionTrigger>
          <AccordionContent className="max-w-3xl pb-5 pt-0 font-body text-sm leading-7 text-muted-foreground">
            {item.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
