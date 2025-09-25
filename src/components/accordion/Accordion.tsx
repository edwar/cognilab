import {
  Accordion as BaseAccordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface Props {
  data: {
    title: string;
    description: string;
  }[];
}

export function Accordion({ data }: Props) {
  return (
    <BaseAccordion type="single" collapsible className="w-full">
      {data.map((item, i) => {
        return (
          <AccordionItem value={`item-${i.toFixed()}`} className="border-primary">
            <AccordionTrigger className="text-foreground w-full cursor-pointer no-underline! px-4 hover:font-bold hover:text-primary" aria-label={item.title}>{item.title}</AccordionTrigger>
            <AccordionContent className="text-foreground px-4">{item.description}</AccordionContent>
          </AccordionItem>
        );
      })}
    </BaseAccordion>
  );
}