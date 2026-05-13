"use client";

import { useState, useMemo } from "react";
import { Search } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";

const faqGroups = [
  {
    group: "About the Congress",
    items: [
      {
        q: "What is the 2nd Asian Ranger Congress?",
        a: "The 2nd Asian Ranger Congress is a regional gathering of rangers, conservation professionals, and organisations from across Asia. Building on the success of the 1st Asian Ranger Forum held in Guwahati, India in 2023, the 2026 Congress will be hosted in Thimphu, Bhutan and will provide a platform for knowledge sharing, capacity building, and strengthening the ranger community across Asia.",
      },
      {
        q: "Who can attend the Congress?",
        a: "The Congress is open to rangers, conservation professionals, ranger associations, conservation organisations, and researchers from across Asia. Priority will be given to frontline rangers to ensure the Congress remains a truly ranger-centered event.",
      },
      {
        q: "What language will the Congress be conducted in?",
        a: "The Congress will be conducted in English.",
      },
    ],
  },
  {
    group: "Registration",
    items: [
      {
        q: "How do I register?",
        a: "Registration is a two-step process. You must first submit an Expression of Interest (EOI). Following a review of all EOIs, selected participants will be invited to complete the formal registration and payment process. Please see the Register Now section for full details.",
      },
      {
        q: "What does the registration fee cover?",
        a: "The registration fee of USD 400 per participant covers accommodation, all meals (working lunches, dinners, and daily tea/coffee breaks), transportation to and from the venue, a welcome kit, and access to all Congress sessions, field visits, and social events. A dedicated medical team will also be on-site throughout the event. Please note that a bank transaction fee will apply on top of the registration fee and is the responsibility of the participant.",
      },
      {
        q: "Can my organisation submit an EOI on behalf of multiple participants?",
        a: "Yes, organisations are welcome to submit EOIs on behalf of multiple participants. Please ensure that individual details are provided for each person.",
      },
      {
        q: "When will I know if my EOI has been successful?",
        a: "The Organising Committee will review all EOIs and notify applicants of the outcome as soon as possible after the EOI deadline. Confirmed participants will then receive instructions to complete their formal registration.",
      },
      {
        q: "Is financial support available to attend?",
        a: "We understand that travel and participation costs can be a barrier for many rangers. If you require support to attend, please indicate this in your EOI and we will do our best to connect you with available funding opportunities. You can also contact us at asianrangercongress@gmail.com for more information.",
      },
    ],
  },
  {
    group: "Travel & Visa",
    items: [
      {
        q: "Do I need a visa to enter Bhutan?",
        a: "Most international visitors require a visa to enter Bhutan. Indian nationals may enter with a valid passport or Voter ID card. All other nationalities must obtain a visa in advance through the Organising Committee. The Organising Committee will provide visa guidance and support to all confirmed registered participants.",
      },
      {
        q: "How do I get to Thimphu?",
        a: "Thimphu can be reached by air via Paro International Airport (approximately 1.5 hours from Thimphu by road), or by road through land border crossings from India at Phuentsholing, Gelephu, or Samdrup Jongkhar. Please see the Plan Your Travel section for full details.",
      },
      {
        q: "Will airport transfers be arranged?",
        a: "Shuttle transportation will be arranged for registered participants between Paro International Airport and Thimphu. Details will be shared with confirmed participants closer to the event.",
      },
      {
        q: "What is the Sustainable Development Fee (SDF) and do I need to pay it?",
        a: "Bhutan's Sustainable Development Fee (SDF) is a fee charged to international visitors. Confirmed registered participants will benefit from an SDF exemption for the duration of the Congress, which the Organising Committee is arranging with the Royal Government of Bhutan. If you wish to extend your stay beyond the official Congress dates, the SDF will apply and you will be responsible for making your own arrangements.",
      },
    ],
  },
  {
    group: "At the Congress",
    items: [
      {
        q: "Will there be field visits?",
        a: "Yes! A ranger-led field visit day is included in the programme. Participants will visit Lamperi Recreational Park, the Takin Preserve at Motithang, and the Gidakom Forest Management Unit. Full details are available in the Field Visits section.",
      },
      {
        q: "Will there be an opportunity to present my work?",
        a: "Yes. We welcome proposals for presentations, talks, and posters from rangers, researchers, and conservation organisations. Please see the Call for Proposals section for more information.",
      },
      {
        q: "Is there a medical team on-site?",
        a: "Yes, a dedicated medical team will be present throughout the Congress. Emergency services are also available across Bhutan — please refer to the Plan Your Travel section for emergency contact numbers.",
      },
      {
        q: "I have a question not answered here — who do I contact?",
        a: "Please get in touch with us at asianrangercongress@gmail.com and a member of the team will get back to you as soon as possible.",
      },
    ],
  },
];

export function FaqSearch() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredGroups = useMemo(() => {
    if (!searchQuery.trim()) {
      return faqGroups;
    }

    const query = searchQuery.toLowerCase();
    return faqGroups
      .map((group) => ({
        ...group,
        items: group.items.filter(
          (item) =>
            item.q.toLowerCase().includes(query) ||
            item.a.toLowerCase().includes(query),
        ),
      }))
      .filter((group) => group.items.length > 0);
  }, [searchQuery]);

  const totalResults = filteredGroups.reduce(
    (sum, group) => sum + group.items.length,
    0,
  );

  return (
    <div>
      <div className="mb-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
          <Input
            type="search"
            placeholder="Search FAQs..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 py-2 text-base font-body"
          />
        </div>
        {searchQuery && (
          <p className="mt-2 text-sm text-muted-foreground">
            Found {totalResults} result{totalResults !== 1 ? "s" : ""}
          </p>
        )}
      </div>

      {filteredGroups.length > 0 ? (
        <div className="space-y-8">
          {filteredGroups.map((group) => (
            <div key={group.group}>
              <h2 className="font-display text-xl font-bold text-primary mb-4 pb-2 border-b border-border">
                {group.group}
              </h2>
              <Accordion type="single" collapsible className="space-y-2">
                {group.items.map((item, i) => (
                  <AccordionItem
                    key={i}
                    value={`${group.group}-${i}`}
                    className="border border-border rounded-sm px-4"
                  >
                    <AccordionTrigger className="font-body text-sm font-medium text-foreground/90 hover:text-primary py-4 text-left">
                      {item.q}
                    </AccordionTrigger>
                    <AccordionContent className="font-body text-sm text-muted-foreground leading-relaxed pb-4">
                      {item.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="font-body text-muted-foreground mb-2">
            No FAQs found matching "{searchQuery}"
          </p>
          <p className="font-body text-sm text-muted-foreground">
            Try different keywords or contact us at
            asianrangercongress@gmail.com
          </p>
        </div>
      )}
    </div>
  );
}
