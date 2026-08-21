import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import {
  ArrowRight,
  Clock3,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

function Contact() {
  const formRef = useRef(null);

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const sendEmail = async (e) => {
    e.preventDefault();

    if (loading) return;

    setLoading(true);
    setStatus("");

    try {
      await emailjs.sendForm(
        "service_cfugckb",
        "template_yevmlic",
        formRef.current,
        {
          publicKey: "U7750F8QwD9VNazRp",
        },
      );

      setStatus("success");
      formRef.current.reset();
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="overflow-hidden bg-white">
      {/* ================= CONTACT SECTION ================= */}

    <section className="relative bg-[#FFF7ED] py-16 sm:py-20 lg:py-24">
  {/* Background Decoration */}
  <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-orange-200/30 blur-3xl" />
  <div className="pointer-events-none absolute -right-32 bottom-20 h-72 w-72 rounded-full bg-orange-200/30 blur-3xl" />

  <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

    {/* ================= HEADING ================= */}
    <div className="mx-auto mb-14 max-w-3xl text-center">
      <span className="inline-flex rounded-full border border-orange-200 bg-orange-50 px-5 py-2 text-xs font-extrabold uppercase tracking-[0.2em] text-orange-500">
        Get In Touch
      </span>

      <h1 className="mt-5 text-4xl font-black tracking-tight text-gray-950 sm:text-5xl lg:text-6xl">
        Let's Start a <span className="text-orange-500">Conversation</span>
      </h1>

      <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base">
        Have a question, project idea, feedback, or business inquiry? Send us a message and we'll get back to you as soon as possible.
      </p>
    </div>

    {/* ================= MAIN GRID ================= */}
    <div className="grid items-stretch gap-8 lg:grid-cols-5 lg:gap-10">

      {/* ================= LEFT INFO ================= */}
      <div className="flex lg:col-span-2">
        <div className="flex h-full w-full flex-col rounded-[2rem] border border-orange-200 bg-[#FFF7ED] p-7 shadow-xl shadow-orange-900/5 sm:p-9">

          <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-orange-500">
            Contact Information
          </span>

          <h2 className="mt-4 text-3xl font-black leading-tight text-gray-950 sm:text-4xl">
            Let's talk about your <span className="text-orange-500">next idea.</span>
          </h2>

          <p className="mt-5 text-sm leading-7 text-gray-600">
            Whether you need help, want to discuss a project, or simply want to get in touch, feel free to contact me directly.
          </p>

          {/* EMAIL */}
          <a href="mailto:zaarkhan483@gmail.com" className="group mt-8 flex items-center gap-4 rounded-2xl border border-orange-200 bg-white/70 p-4 transition duration-300 hover:-translate-y-1 hover:border-orange-400 hover:bg-white hover:shadow-lg">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange-100 text-orange-500 transition group-hover:bg-orange-500 group-hover:text-white">
              <Mail size={21} />
            </div>
            <div className="min-w-0">
              <p className="text-xs font-bold uppercase tracking-wider text-gray-500">Email</p>
              <p className="mt-1 truncate text-sm font-bold text-gray-900 group-hover:text-orange-500">
                zaarkhan483@gmail.com
              </p>
            </div>
          </a>

          {/* PHONE */}
          <a href="tel:+923106276002" className="group mt-4 flex items-center gap-4 rounded-2xl border border-orange-200 bg-white/70 p-4 transition duration-300 hover:-translate-y-1 hover:border-orange-400 hover:bg-white hover:shadow-lg">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange-100 text-orange-500 transition group-hover:bg-orange-500 group-hover:text-white">
              <Phone size={21} />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-gray-500">Phone</p>
              <p className="mt-1 text-sm font-bold text-gray-900 group-hover:text-orange-500">
                +92 310 6276002
              </p>
            </div>
          </a>

          {/* LOCATION */}
          <div className="mt-4 flex items-center gap-4 rounded-2xl border border-orange-200 bg-white/70 p-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange-100 text-orange-500">
              <MapPin size={21} />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-gray-500">Location</p>
              <p className="mt-1 text-sm font-bold text-gray-900">Islamabad / Rawalpindi</p>
            </div>
          </div>

          {/* AVAILABILITY */}
          <div className="mt-6 rounded-2xl border border-green-200 bg-green-50 p-4">
            <div className="flex items-center gap-3">
              <span className="relative flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500" />
              </span>
              <span className="text-sm font-bold text-gray-900">Available for new projects</span>
            </div>
            <p className="mt-2 pl-6 text-xs leading-5 text-gray-500">
              Feel free to send your project details anytime.
            </p>
          </div>

          {/* WORKING HOURS */}
          <div className="mt-4 flex items-center gap-4 rounded-2xl border border-orange-200 bg-white/50 p-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange-100 text-orange-500">
              <Clock3 size={19} />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-gray-500">Working Hours</p>
              <p className="mt-1 text-sm font-bold text-gray-900">Monday – Friday · 9 AM – 6 PM</p>
            </div>
          </div>

        </div>
      </div>

      {/* ================= FORM ================= */}
      <div className="flex lg:col-span-3">
        <div className="flex h-full w-full flex-col rounded-[2rem] border border-orange-200 bg-[#FFF7ED] p-6 shadow-xl shadow-orange-900/5 sm:p-8 lg:p-10">

          {/* FORM HEADER */}
          <div className="mb-7 flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange-100 text-orange-500">
              <MessageCircle size={22} />
            </div>

            <div>
              <h2 className="text-2xl font-black text-gray-950 sm:text-3xl">Send Me a Message</h2>
              <p className="mt-1 text-sm text-gray-500">
                Complete the form and I'll receive your message directly in my email.
              </p>
            </div>
          </div>

          {/* SUCCESS */}
          {status === "success" && (
            <div className="mb-6 flex items-start gap-3 rounded-2xl border border-green-200 bg-green-50 p-4">
              <CheckCircle2 size={21} className="mt-0.5 shrink-0 text-green-600" />
              <div>
                <p className="font-bold text-green-800">Message Sent Successfully!</p>
                <p className="mt-1 text-sm text-green-700">
                  Thank you! Your message has been delivered successfully.
                </p>
              </div>
            </div>
          )}

          {/* ERROR */}
          {status === "error" && (
            <div className="mb-6 flex items-start gap-3 rounded-2xl border border-red-200 bg-red-50 p-4">
              <AlertCircle size={21} className="mt-0.5 shrink-0 text-red-600" />
              <div>
                <p className="font-bold text-red-800">Message Could Not Be Sent</p>
                <p className="mt-1 text-sm text-red-700">
                  Please try again. If the problem continues, check your EmailJS template settings.
                </p>
              </div>
            </div>
          )}

          {/* FORM */}
          <form ref={formRef} onSubmit={sendEmail} className="flex flex-1 flex-col space-y-5">

            {/* NAME + EMAIL */}
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="from_name" className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700">
                  Your Name
                </label>
                <input id="from_name" name="from_name" type="text" required minLength="2" placeholder="Enter your name"
                  className="h-12 w-full rounded-xl border border-orange-200 bg-white/70 px-4 text-sm text-gray-900 outline-none transition duration-300 placeholder:text-gray-400 focus:border-orange-400 focus:bg-white focus:ring-4 focus:ring-orange-500/10" />
              </div>

              <div>
                <label htmlFor="from_email" className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700">
                  Email Address
                </label>
                <input id="from_email" name="from_email" type="email" required placeholder="you@example.com"
                  className="h-12 w-full rounded-xl border border-orange-200 bg-white/70 px-4 text-sm text-gray-900 outline-none transition duration-300 placeholder:text-gray-400 focus:border-orange-400 focus:bg-white focus:ring-4 focus:ring-orange-500/10" />
              </div>
            </div>

            {/* PHONE + SUBJECT */}
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="phone" className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700">
                  Phone Number
                </label>
                <input id="phone" name="phone" type="tel" required placeholder="+92 310 6276002"
                  className="h-12 w-full rounded-xl border border-orange-200 bg-white/70 px-4 text-sm text-gray-900 outline-none transition duration-300 placeholder:text-gray-400 focus:border-orange-400 focus:bg-white focus:ring-4 focus:ring-orange-500/10" />
              </div>

              <div>
                <label htmlFor="subject" className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700">
                  Subject
                </label>
                <input id="subject" name="subject" type="text" required minLength="3" placeholder="Project / Inquiry"
                  className="h-12 w-full rounded-xl border border-orange-200 bg-white/70 px-4 text-sm text-gray-900 outline-none transition duration-300 placeholder:text-gray-400 focus:border-orange-400 focus:bg-white focus:ring-4 focus:ring-orange-500/10" />
              </div>
            </div>

            {/* MESSAGE */}
            <div>
              <label htmlFor="message" className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700">
                Your Message
              </label>
              <textarea id="message" name="message" required minLength="10" rows="6"
                placeholder="Tell me about your project or write your message..."
                className="w-full resize-none rounded-xl border border-orange-200 bg-white/70 p-4 text-sm text-gray-900 outline-none transition duration-300 placeholder:text-gray-400 focus:border-orange-400 focus:bg-white focus:ring-4 focus:ring-orange-500/10" />
            </div>

            {/* EMAIL RECEIVER */}
            <input type="hidden" name="to_email" value="zaarkhan483@gmail.com" />

            {/* SUBMIT */}
            <button type="submit" disabled={loading}
              className={`group flex h-13 w-full items-center justify-center gap-3 rounded-xl px-6 py-4 text-sm font-extrabold text-white transition duration-300 ${
                loading ? "cursor-not-allowed bg-gray-400" : "bg-orange-500 hover:-translate-y-1 hover:bg-orange-600 hover:shadow-xl hover:shadow-orange-500/20"
              }`}>
              {loading ? (
                <>
                  <span className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                  Sending Message...
                </>
              ) : (
                <>
                  <Send size={18} className="transition-transform duration-300 group-hover:-rotate-6" />
                  Send Message
                  <ArrowRight size={17} className="transition-transform duration-300 group-hover:translate-x-1" />
                </>
              )}
            </button>

            <p className="text-center text-[11px] leading-5 text-gray-400">
              Your information is securely used only to respond to your inquiry.
            </p>

          </form>
        </div>
      </div>

    </div>
  </div>
</section>

<section className="bg-[#fff7ed] px-4 py-14 sm:px-6 sm:py-16 lg:px-8">

  <div className="mx-auto max-w-7xl">

    {/* MAIN LOCATION BOX */}
    <div className="relative overflow-hidden rounded-[2rem] border border-orange-200 bg-white shadow-xl shadow-orange-900/5">

      <div className="relative grid lg:grid-cols-2">

        {/* =================================================
            LEFT SIDE - MAP
        ================================================= */}

        <div className="relative min-h-[320px] overflow-hidden lg:min-h-[390px]">

          <iframe
            title="Islamabad Rawalpindi Location"
            src="https://www.openstreetmap.org/export/embed.html?bbox=72.95%2C33.55%2C73.15%2C33.75&layer=mapnik&marker=33.6844%2C73.0479"
            className="absolute inset-0 h-full w-full border-0"
            loading="lazy"
          />

          {/* MAP LABEL */}

          <div className="absolute left-4 top-4 z-20">

            <div className="flex items-center gap-2 rounded-full border border-white/40 bg-white/90 px-4 py-2 shadow-lg backdrop-blur-md">

              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-orange-500 text-white">
                <MapPin size={14} />
              </div>

              <span className="text-xs font-extrabold text-gray-900">
                Islamabad / Rawalpindi
              </span>

            </div>

          </div>

          {/* MAP LOCATION BADGE */}

          <div className="absolute bottom-4 left-4 z-20">

            <div className="rounded-xl border border-white/30 bg-gray-950/85 px-4 py-3 shadow-xl backdrop-blur-md">

              <p className="text-[10px] font-bold uppercase tracking-wider text-orange-400">
                Current Location
              </p>

              <p className="mt-1 text-xs font-bold text-white">
                Pakistan
              </p>

            </div>

          </div>


          {/* =================================================
              CURVED DIVIDER
              DESKTOP ONLY
          ================================================= */}

          <div className="pointer-events-none absolute -right-[2px] top-0 z-10 hidden h-full w-[120px] lg:block">

            {/* Main curved white shape */}

            <div
              className="absolute inset-y-0 right-0 h-full w-full bg-white"
              style={{
                clipPath:
                  "ellipse(72% 75% at 100% 50%)",
              }}
            />

          </div>


          {/* =================================================
              DIAGONAL CURVE OVERLAY
          ================================================= */}

          <div className="pointer-events-none absolute -right-8 top-0 z-20 hidden h-full w-[100px] lg:block">

            <div
              className="absolute right-0 top-0 h-full w-full bg-white"
              style={{
                clipPath:
                  "ellipse(65% 78% at 100% 50%)",
              }}
            />

          </div>

        </div>


        {/* =================================================
            RIGHT SIDE - CONTACT INFORMATION
        ================================================= */}

        <div className="relative flex items-center overflow-hidden bg-white p-7 sm:p-9 lg:min-h-[390px] lg:p-10">

          {/* CURVED EDGE FROM RIGHT SIDE */}

          <div className="pointer-events-none absolute -left-16 top-0 hidden h-full w-32 lg:block">

            <div
              className="h-full w-full bg-white"
              style={{
                clipPath:
                  "ellipse(55% 72% at 0% 50%)",
              }}
            />

          </div>


          {/* CONTENT */}

          <div className="relative z-30 w-full">

            {/* BADGE */}

            <span className="inline-flex items-center rounded-full border border-orange-100 bg-orange-50 px-4 py-2 text-[10px] font-extrabold uppercase tracking-[0.2em] text-orange-500">
              Get In Touch
            </span>


            {/* HEADING */}

            <h2 className="mt-4 text-2xl font-black tracking-tight text-gray-950 sm:text-3xl">

              Let's connect and

              <span className="block text-orange-500">
                work together.
              </span>

            </h2>


            {/* DESCRIPTION */}

            <p className="mt-3 max-w-lg text-sm leading-6 text-gray-500">
              Based in Islamabad / Rawalpindi and available for
              projects, collaborations, and remote communication
              worldwide.
            </p>


            {/* =================================================
                CONTACT INFORMATION
            ================================================= */}

            <div className="mt-6 space-y-3">


              {/* LOCATION */}

              <div className="group flex items-center gap-3 rounded-2xl border border-gray-100 bg-gray-50 p-3.5 transition-all duration-300 hover:-translate-y-1 hover:border-orange-200 hover:bg-orange-50 hover:shadow-md">

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-100 text-orange-500 transition-all duration-300 group-hover:scale-110 group-hover:bg-orange-500 group-hover:text-white">

                  <MapPin size={18} />

                </div>

                <div>

                  <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400">
                    Location
                  </p>

                  <p className="mt-1 text-sm font-extrabold text-gray-900">
                    Islamabad / Rawalpindi, Pakistan
                  </p>

                </div>

              </div>


              {/* EMAIL */}

              <a
                href="mailto:zaarkhan483@gmail.com"
                className="group flex items-center gap-3 rounded-2xl border border-gray-100 bg-gray-50 p-3.5 transition-all duration-300 hover:-translate-y-1 hover:border-orange-200 hover:bg-orange-50 hover:shadow-md"
              >

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-100 text-orange-500 transition-all duration-300 group-hover:scale-110 group-hover:bg-orange-500 group-hover:text-white">

                  <Mail size={18} />

                </div>

                <div className="min-w-0">

                  <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400">
                    Email
                  </p>

                  <p className="mt-1 truncate text-sm font-extrabold text-gray-900">
                    zaarkhan483@gmail.com
                  </p>

                </div>

              </a>


              {/* PHONE */}

              <a
                href="tel:+923356481414"
                className="group flex items-center gap-3 rounded-2xl border border-gray-100 bg-gray-50 p-3.5 transition-all duration-300 hover:-translate-y-1 hover:border-orange-200 hover:bg-orange-50 hover:shadow-md"
              >

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-100 text-orange-500 transition-all duration-300 group-hover:scale-110 group-hover:bg-orange-500 group-hover:text-white">

                  <Phone size={18} />

                </div>

                <div>

                  <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400">
                    Phone
                  </p>

                  <p className="mt-1 text-sm font-extrabold text-gray-900">
                    +92 3356481414
                  </p>

                </div>

              </a>

            </div>


            {/* =================================================
                ACTION BUTTONS
            ================================================= */}

            <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-3">


              {/* CALL */}

              <a
                href="tel:+923356481414"
                className="group inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-orange-500 px-4 text-xs font-extrabold text-white shadow-lg shadow-orange-500/20 transition-all duration-300 hover:-translate-y-1 hover:bg-orange-600 hover:shadow-xl active:translate-y-0"
              >

                <Phone
                  size={15}
                  className="transition-transform duration-300 group-hover:scale-110"
                />

                Call Now

              </a>


              {/* WHATSAPP */}

              <a
                href="https://wa.me/923356481414?text=Hello%20I%20would%20like%20to%20discuss%20a%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-green-200 bg-green-50 px-4 text-xs font-extrabold text-green-700 transition-all duration-300 hover:-translate-y-1 hover:border-green-500 hover:bg-green-500 hover:text-white hover:shadow-lg active:translate-y-0"
              >

                <MessageCircle
                  size={15}
                  className="transition-transform duration-300 group-hover:scale-110"
                />

                WhatsApp

              </a>


              {/* GOOGLE MAPS */}

              <a
                href="https://www.google.com/maps/search/?api=1&query=Islamabad+Pakistan"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-gray-200 bg-gray-50 px-4 text-xs font-extrabold text-gray-800 transition-all duration-300 hover:-translate-y-1 hover:border-orange-300 hover:bg-orange-50 hover:text-orange-600 hover:shadow-lg active:translate-y-0"
              >

                <MapPin
                  size={15}
                  className="transition-transform duration-300 group-hover:scale-110"
                />

                Open Maps

              </a>

            </div>


            {/* STATUS */}

            <div className="mt-5 flex items-center gap-2 text-[11px] text-gray-400">

              <span className="h-2 w-2 animate-pulse rounded-full bg-green-500" />

              Available for new projects and collaborations

            </div>

          </div>

        </div>

      </div>

    </div>


    {/* =========================================================
        QUICK CONTACT CARDS
    ========================================================= */}

    <div className="mt-8 grid gap-4 sm:grid-cols-3">


      {/* WORLDWIDE CLIENTS */}

      <a
        href="https://www.google.com/maps/search/?api=1&query=Islamabad+Pakistan"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative overflow-hidden rounded-2xl border border-orange-100 bg-white p-5 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-orange-300 hover:shadow-xl hover:shadow-orange-500/10"
      >

        <div className="absolute -right-8 -top-8 h-20 w-20 rounded-full bg-orange-100 opacity-0 blur-2xl transition duration-500 group-hover:opacity-100" />

        <div className="relative z-10">

          <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl bg-orange-100 text-orange-500 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 group-hover:bg-orange-500 group-hover:text-white">

            <MapPin size={19} />

          </div>

          <h4 className="mt-4 text-sm font-extrabold text-gray-900">
            Worldwide Clients
          </h4>

          <p className="mt-2 text-xs leading-5 text-gray-500">
            Available for remote projects globally.
          </p>

          <span className="mt-3 inline-flex items-center gap-1 text-[11px] font-bold text-orange-500 opacity-0 transition-all duration-300 group-hover:opacity-100">

            View Location

            <ArrowRight size={13} />

          </span>

        </div>

      </a>


      {/* QUICK RESPONSE */}

      <a
        href="mailto:zaarkhan483@gmail.com"
        className="group relative overflow-hidden rounded-2xl border border-orange-100 bg-white p-5 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-orange-300 hover:shadow-xl hover:shadow-orange-500/10"
      >

        <div className="absolute -right-8 -top-8 h-20 w-20 rounded-full bg-orange-100 opacity-0 blur-2xl transition duration-500 group-hover:opacity-100" />

        <div className="relative z-10">

          <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl bg-orange-100 text-orange-500 transition-all duration-300 group-hover:scale-110 group-hover:-rotate-3 group-hover:bg-orange-500 group-hover:text-white">

            <Mail size={19} />

          </div>

          <h4 className="mt-4 text-sm font-extrabold text-gray-900">
            Quick Response
          </h4>

          <p className="mt-2 text-xs leading-5 text-gray-500">
            Send an email and I'll get back to you.
          </p>

          <span className="mt-3 inline-flex items-center gap-1 text-[11px] font-bold text-orange-500 opacity-0 transition-all duration-300 group-hover:opacity-100">

            Send Email

            <ArrowRight size={13} />

          </span>

        </div>

      </a>


      {/* DIRECT CONTACT */}

      <a
        href="tel:+923356481414"
        className="group relative overflow-hidden rounded-2xl border border-orange-100 bg-white p-5 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-orange-300 hover:shadow-xl hover:shadow-orange-500/10"
      >

        <div className="absolute -right-8 -top-8 h-20 w-20 rounded-full bg-orange-100 opacity-0 blur-2xl transition duration-500 group-hover:opacity-100" />

        <div className="relative z-10">

          <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl bg-orange-100 text-orange-500 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 group-hover:bg-orange-500 group-hover:text-white">

            <Phone size={19} />

          </div>

          <h4 className="mt-4 text-sm font-extrabold text-gray-900">
            Direct Contact
          </h4>

          <p className="mt-2 text-xs leading-5 text-gray-500">
            Call directly for project discussions.
          </p>

          <span className="mt-3 inline-flex items-center gap-1 text-[11px] font-bold text-orange-500 opacity-0 transition-all duration-300 group-hover:opacity-100">

            Call Now

            <ArrowRight size={13} />

          </span>

        </div>

      </a>

    </div>

  </div>

</section>

      {/* ================= BOTTOM CTA ================= */}
      <section className="bg-[#FFF7ED] px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="group relative overflow-hidden rounded-[2rem] border border-orange-200 bg-white px-6 py-12 text-center shadow-lg shadow-orange-900/5 transition-all duration-500 hover:-translate-y-1 hover:border-orange-300 hover:shadow-2xl hover:shadow-orange-500/10 sm:px-10 sm:py-14">
            {/* ================= BACKGROUND GLOW ================= */}

            <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-orange-100/70 blur-3xl transition-all duration-500 group-hover:bg-orange-200/70" />

            <div className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-orange-100/60 blur-3xl transition-all duration-500 group-hover:bg-orange-200/60" />

            {/* ================= DECORATIVE DOTS ================= */}

            <div className="absolute right-8 top-8 h-3 w-3 rounded-full bg-orange-400 opacity-80 transition-all duration-500 group-hover:scale-150 group-hover:opacity-100" />

            <div className="absolute bottom-8 left-8 h-2.5 w-2.5 rounded-full bg-orange-300 opacity-70 transition-all duration-500 group-hover:scale-150 group-hover:bg-orange-500" />

            <div className="absolute left-1/2 top-6 h-1.5 w-1.5 rounded-full bg-orange-300 opacity-60 transition-all duration-500 group-hover:scale-150" />

            {/* ================= CONTENT ================= */}

            <div className="relative z-10">
              {/* BADGE */}

              <span className="inline-flex items-center rounded-full border border-orange-200 bg-orange-50 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.2em] text-orange-500 shadow-sm transition-all duration-300 group-hover:border-orange-300 group-hover:bg-orange-100">
                Let's Work Together
              </span>

              {/* HEADING */}

              <h2 className="mt-5 text-3xl font-black tracking-tight text-gray-950 transition-colors duration-300 sm:text-4xl">
                Have a project in mind?
              </h2>

              {/* DESCRIPTION */}

              <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base">
                Let's discuss your idea and build something amazing together.
              </p>

              {/* ================= SEND MESSAGE BUTTON ================= */}

              <button
                type="button"
                onClick={() => {
                  const contactForm = document.getElementById("contact-form");

                  if (contactForm) {
                    const yOffset = -110;

                    const y =
                      contactForm.getBoundingClientRect().top +
                      window.scrollY +
                      yOffset;

                    window.scrollTo({
                      top: y,
                      behavior: "smooth",
                    });
                  }
                }}
                className="group/button mt-8 inline-flex h-12 items-center gap-2 rounded-xl bg-orange-500 px-7 text-sm font-extrabold text-white shadow-lg shadow-orange-500/20 transition-all duration-300 hover:-translate-y-1 hover:bg-orange-600 hover:shadow-xl hover:shadow-orange-500/30 active:translate-y-0"
              >
                <span>Send a Message</span>

                <ArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover/button:translate-x-1"
                />
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Contact;
