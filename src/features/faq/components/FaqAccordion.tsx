"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqGroups = [
  {
    group: "About the Congress",
    items: [
      {
        q: "What is the Asian Ranger Congress?",
        a: "The Asian Ranger Congress is a regional gathering of rangers, conservation professionals, and organisations from across Asia. It provides a platform for sharing experiences, knowledge, and best practices in protected area management and conservation.",
      },
      {
        q: "When and where is the 2nd Asian Ranger Congress?",
        a: "The 2nd Asian Ranger Congress will be held from 2–4 December 2026 at the Royal Institute of Management (RIM), Simtokha, Thimphu, Bhutan.",
      },
      {
        q: "Who organises the congress?",
        a: "The congress is jointly organised by the Ranger Federation of Asia (RFA), the International Rangers Federation (IRF), and the Society of Bhutanese Foresters (SBF), in collaboration with partner agencies and the Royal Government of Bhutan.",
      },
      {
        q: "What was the theme of the 1st Asian Ranger Congress?",
        a: "The 1st Asian Ranger Congress was held in 2018. Details about the theme and the Congress Declaration can be found in the congress archives. A download of the 1st Congress Declaration will be made available on this website.",
      },
    ],
  },
  {
    group: "Registration",
    items: [
      {
        q: "How do I register for the congress?",
        a: "Registration is a two-step process. First, submit your Expression of Interest (EOI) using the online form linked on the Register page. Once your interest has been reviewed, you will receive a formal invitation and payment instructions to complete your registration.",
      },
      {
        q: "What is the registration fee?",
        a: "The registration fee is USD 400 per participant. This includes accommodation for the duration of the congress (1–4 December 2026), all meals, local transportation, congress materials, and access to all sessions and field visits.",
      },
      {
        q: "Can I attend without paying the registration fee?",
        a: "The registration fee covers significant logistics including accommodation, meals, and transport. Exemptions or scholarships may be available in limited cases — please contact asianrangercongress@gmail.com to enquire.",
      },
      {
        q: "What is the deadline for registration?",
        a: "Registration deadlines will be communicated upon confirmation. We recommend submitting your Expression of Interest as early as possible to secure your place.",
      },
    ],
  },
  {
    group: "Travel & Visa",
    items: [
      {
        q: "Do I need a visa to visit Bhutan?",
        a: "Yes, most foreign nationals require a visa to enter Bhutan. Citizens of India, Bangladesh, and Maldives are exempt from visa requirements. Visa information and application links will be provided to confirmed participants.",
      },
      {
        q: "What is the Sustainable Development Fee (SDF)?",
        a: "Bhutan charges a Sustainable Development Fee (SDF) of USD 100 per night for most international visitors. Confirmed congress participants will be eligible for an SDF exemption for the duration of the congress (2–4 December 2026).",
      },
      {
        q: "How do I get to Thimphu?",
        a: "Thimphu is most easily reached by flying into Paro International Airport (PBH), which is approximately 1.5 hours by road from Thimphu. Druk Air and Bhutan Airlines operate flights from regional hubs including Delhi, Kolkata, Kathmandu, and Bangkok. Entry is also possible by road from India through Phuentsholing, Gelephu, or Samdrup Jongkhar.",
      },
      {
        q: "Will airport transfers be provided?",
        a: "Yes, airport transfers between Paro International Airport and the congress venue in Thimphu are included in the registration fee.",
      },
      {
        q: "What accommodation is provided?",
        a: "Accommodation is included in the registration fee. Participants will be accommodated at or near the Royal Institute of Management (RIM) in Simtokha, Thimphu, for the duration of the congress (1–4 December 2026).",
      },
    ],
  },
  {
    group: "At the Congress",
    items: [
      {
        q: "What language will the congress be held in?",
        a: "The congress will be conducted in English.",
      },
      {
        q: "Can I present a paper or lead a session?",
        a: "Yes! The congress includes a call for proposals for presentations, workshops, and training sessions. Details on submission requirements and deadlines are available on the Call for Proposals and Training Sessions pages.",
      },
      {
        q: "What are the field visits?",
        a: "Field visits are included in the congress programme and provide participants with an opportunity to experience Bhutan's remarkable conservation landscapes and ranger work first-hand. Three field visit options are being planned — details will be announced closer to the event.",
      },
      {
        q: "Who should I contact if I have more questions?",
        a: "For any queries not answered here, please email the congress secretariat at asianrangercongress@gmail.com. We will respond within 5 working days.",
      },
    ],
  },
];

export function FaqAccordion() {
  return (
    <div className="space-y-8">
      {faqGroups.map((group) => (
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
  );
}
