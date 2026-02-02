"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  Calendar as CalendarIcon,
  Users,
  MapPin,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const destinations = [
  { id: "paris", name: "Paris 1889", price: 12500 },
  { id: "cretace", name: "Cretace -65M", price: 25000 },
  { id: "florence", name: "Florence 1504", price: 15000 },
];

export default function Reservation() {
  const [formData, setFormData] = useState({
    destination: "",
    travelers: "1",
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const selectedDestination = destinations.find(
    (d) => d.id === formData.destination,
  );
  const totalPrice = selectedDestination
    ? selectedDestination.price * parseInt(formData.travelers || "1")
    : 0;

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.destination)
      newErrors.destination = "Selectionnez une destination";
    if (!selectedDate) newErrors.date = "Selectionnez une date";
    if (!formData.name) newErrors.name = "Entrez votre nom";
    if (!formData.email) newErrors.email = "Entrez votre email";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Email invalide";
    if (!formData.phone) newErrors.phone = "Entrez votre telephone";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitted(true);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  return (
    <section id="reservation" className="py-24 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <span className="text-[#d4af37] uppercase tracking-[0.3em] text-sm font-medium">
            Reservation
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Reservez votre{" "}
            <span className="gradient-text">voyage temporel</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Remplissez le formulaire ci-dessous et notre equipe vous contactera
            sous 24h pour finaliser votre reservation.
          </p>
        </motion.div>

        {!isSubmitted ? (
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="grid lg:grid-cols-3 gap-8"
          >
            {/* Form Fields */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-[#12121a] rounded-2xl border border-[#1f1f2e] p-6 md:p-8">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-[#d4af37]" />
                  Details du voyage
                </h3>

                <div className="grid md:grid-cols-2 gap-4">
                  {/* Destination */}
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">
                      Destination *
                    </label>
                    <select
                      name="destination"
                      value={formData.destination}
                      onChange={handleChange}
                      className={`w-full bg-[#1f1f2e] border ${errors.destination ? "border-red-500" : "border-[#2f2f4e]"} rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#d4af37] transition-colors`}
                    >
                      <option value="">Choisir une destination</option>
                      {destinations.map((dest) => (
                        <option key={dest.id} value={dest.id}>
                          {dest.name} - {dest.price.toLocaleString()} €
                        </option>
                      ))}
                    </select>
                    {errors.destination && (
                      <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.destination}
                      </p>
                    )}
                  </div>

                  {/* Date Picker with shadcn/ui */}
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">
                      Date de depart *
                    </label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-full justify-start text-left font-normal h-12 bg-[#1f1f2e] border-[#2f2f4e] hover:bg-[#2a2a3e] hover:border-[#d4af37] rounded-xl",
                            !selectedDate && "text-gray-500",
                            errors.date && "border-red-500",
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4 text-[#d4af37]" />
                          {selectedDate ? (
                            format(selectedDate, "dd MMMM yyyy", { locale: fr })
                          ) : (
                            <span>Choisir une date</span>
                          )}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent
                        className="w-auto p-0 bg-[#12121a] border-[#2f2f4e]"
                        align="start"
                      >
                        <Calendar
                          mode="single"
                          selected={selectedDate}
                          onSelect={(date) => {
                            setSelectedDate(date);
                            if (errors.date) {
                              setErrors((prev) => ({ ...prev, date: "" }));
                            }
                          }}
                          locale={fr}
                          disabled={{ before: new Date() }}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                    {errors.date && (
                      <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.date}
                      </p>
                    )}
                  </div>

                  {/* Travelers */}
                  <div className="md:col-span-2">
                    <label className="block text-sm text-gray-400 mb-2">
                      Nombre de voyageurs
                    </label>
                    <select
                      name="travelers"
                      value={formData.travelers}
                      onChange={handleChange}
                      className="w-full bg-[#1f1f2e] border border-[#2f2f4e] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#d4af37] transition-colors"
                    >
                      {[1, 2, 3, 4, 5, 6].map((num) => (
                        <option key={num} value={num}>
                          {num} voyageur{num > 1 ? "s" : ""}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              <div className="bg-[#12121a] rounded-2xl border border-[#1f1f2e] p-6 md:p-8">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <Users className="w-5 h-5 text-[#d4af37]" />
                  Vos coordonnees
                </h3>

                <div className="grid md:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Jean Dupont"
                      className={`w-full bg-[#1f1f2e] border ${errors.name ? "border-red-500" : "border-[#2f2f4e]"} rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#d4af37] transition-colors`}
                    />
                    {errors.name && (
                      <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="jean@exemple.com"
                      className={`w-full bg-[#1f1f2e] border ${errors.email ? "border-red-500" : "border-[#2f2f4e]"} rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#d4af37] transition-colors`}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Phone */}
                  <div className="md:col-span-2">
                    <label className="block text-sm text-gray-400 mb-2">
                      Telephone *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+33 6 12 34 56 78"
                      className={`w-full bg-[#1f1f2e] border ${errors.phone ? "border-red-500" : "border-[#2f2f4e]"} rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#d4af37] transition-colors`}
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.phone}
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div className="md:col-span-2">
                    <label className="block text-sm text-gray-400 mb-2">
                      Message (optionnel)
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Des questions ou demandes particulieres ?"
                      rows={3}
                      className="w-full bg-[#1f1f2e] border border-[#2f2f4e] rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#d4af37] transition-colors resize-none"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Summary */}
            <div className="lg:col-span-1">
              <div className="bg-[#12121a] rounded-2xl border border-[#1f1f2e] p-6 sticky top-24">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <CalendarIcon className="w-5 h-5 text-[#d4af37]" />
                  Recapitulatif
                </h3>

                {selectedDestination ? (
                  <div className="space-y-4">
                    <div className="flex justify-between text-gray-400">
                      <span>Destination</span>
                      <span className="text-white">
                        {selectedDestination.name}
                      </span>
                    </div>
                    <div className="flex justify-between text-gray-400">
                      <span>Prix unitaire</span>
                      <span className="text-white">
                        {selectedDestination.price.toLocaleString()} €
                      </span>
                    </div>
                    <div className="flex justify-between text-gray-400">
                      <span>Voyageurs</span>
                      <span className="text-white">{formData.travelers}</span>
                    </div>
                    {selectedDate && (
                      <div className="flex justify-between text-gray-400">
                        <span>Date</span>
                        <span className="text-white">
                          {format(selectedDate, "dd MMM yyyy", { locale: fr })}
                        </span>
                      </div>
                    )}
                    <div className="border-t border-[#1f1f2e] pt-4 mt-4">
                      <div className="flex justify-between">
                        <span className="text-lg font-bold">Total</span>
                        <span className="text-2xl font-bold text-[#d4af37]">
                          {totalPrice.toLocaleString()} €
                        </span>
                      </div>
                    </div>
                  </div>
                ) : (
                  <p className="text-gray-500 text-center py-8">
                    Selectionnez une destination pour voir le recapitulatif
                  </p>
                )}

                <motion.button
                  type="submit"
                  className="btn-gold w-full mt-6"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={!selectedDestination}
                >
                  Demander un devis
                </motion.button>

                <p className="text-xs text-gray-500 text-center mt-4">
                  Paiement securise. Annulation gratuite sous 48h.
                </p>
              </div>
            </div>
          </motion.form>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-[#12121a] rounded-2xl border border-[#1f1f2e] p-12 text-center max-w-2xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <CheckCircle className="w-10 h-10 text-white" />
            </motion.div>
            <h3 className="text-3xl font-bold mb-4">Demande envoyee !</h3>
            <p className="text-gray-400 mb-6">
              Merci {formData.name} ! Votre demande de reservation pour{" "}
              <span className="text-[#d4af37]">
                {selectedDestination?.name}
              </span>{" "}
              a bien ete enregistree. Notre equipe vous contactera sous 24h a
              l&apos;adresse {formData.email}.
            </p>
            <motion.button
              onClick={() => {
                setIsSubmitted(false);
                setFormData({
                  destination: "",
                  travelers: "1",
                  name: "",
                  email: "",
                  phone: "",
                  message: "",
                });
                setSelectedDate(undefined);
              }}
              className="btn-gold"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Nouvelle reservation
            </motion.button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
