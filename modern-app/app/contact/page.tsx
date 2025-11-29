import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import ContactInfo from "../../components/sections/ContactInfo";
import ContactForm from "../../components/sections/ContactForm";

export default function Contact() {
  return (
    <div className="flex flex-col min-h-screen font-sans">
      <Header />
      <main className="flex-grow">
        <ContactInfo />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
