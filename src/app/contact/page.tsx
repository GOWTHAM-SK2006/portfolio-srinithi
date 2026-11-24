import type { Metadata } from "next";
import ContactSections from "@/components/sections/ContactSections";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Srinithi Anand for live concert performances, musical collaborations, special events, and media enquiries in Chennai and worldwide.",
};

export default function ContactPage() {
  return <ContactSections />;
}
