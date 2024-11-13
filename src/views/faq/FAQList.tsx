import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQList = () => {
  return (
    <div className="mt-10 text-base">
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-left text-xl">
            What are the main products offered by Gistara Geya Samasta Jaya?
          </AccordionTrigger>
          <AccordionContent className="text-left text-base">
            Gistara Geya Samasta Jaya provides a variety of high quality
            agricultural and marine products, including organic vegetables,
            fresh fruit and seafood directly from trusted sources.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="text-left text-xl">
            How do I order products?
          </AccordionTrigger>
          <AccordionContent className="text-left text-base">
            Orders can be made through our official online platform. You can
            also contact Gistara Geya Samasta Jaya customer service for further
            assistance.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="text-left text-xl">
            What about guaranteed product safety?
          </AccordionTrigger>
          <AccordionContent className="text-left text-base">
            We guarantee the safety of our products. All products go through a
            strict quality control process to ensure cleanliness and safety
            before reaching you.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger className="text-left text-xl">
            What is the product return policy at Gistara Geya Samasta Jaya?
          </AccordionTrigger>
          <AccordionContent className="text-left text-base">
            We have an adequate return policy. If there is a problem with the
            product you received, please contact us for a return or replacement
            process.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default FAQList;
