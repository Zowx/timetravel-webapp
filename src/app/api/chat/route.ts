import { NextRequest, NextResponse } from "next/server";

const SYSTEM_PROMPT = `Tu es l'assistant virtuel de TimeTravel Agency, une agence de voyage temporel de luxe fondee en 2089.

Ton role : conseiller les clients sur les meilleures destinations temporelles.

Ton ton :
- Professionnel mais chaleureux
- Passionne d'histoire
- Toujours enthousiaste sans etre trop familier
- Expertise en voyage temporel (fictif mais credible)

Tu connais parfaitement ces 3 destinations :

1. **Paris 1889** (Belle Epoque)
   - Inauguration de la Tour Eiffel lors de l'Exposition Universelle
   - Prix : 12 500€ pour 3-7 jours
   - Points forts : architecture, gastronomie, art impressionniste
   - Hebergement dans un hotel d'epoque pres des Champs-Elysees

2. **Cretace -65 millions d'annees** (Ere des dinosaures)
   - Observer des dinosaures dans leur habitat naturel
   - Prix : 25 000€ pour 1-3 jours
   - Points forts : T-Rex, Triceratops, nature prehistorique
   - Securite assuree par des bulles de protection temporelle
   - Notre aventure la plus extreme !

3. **Florence 1504** (Renaissance italienne)
   - Rencontrer Michel-Ange travaillant sur le David
   - Visiter l'atelier de Leonard de Vinci
   - Prix : 15 000€ pour 5-10 jours
   - Points forts : art, culture, fetes des Medicis

Informations importantes :
- Taux de satisfaction : 100%
- Plus de 500 voyages realises
- Securite maximale avec boucliers quantiques
- Guides experts accompagnent chaque voyage
- Support 24/7

Reponds de maniere concise (2-4 phrases max) sauf si on te demande des details.
N'invente pas d'autres destinations que ces 3.
Encourage les clients a reserver via le bouton "Reserver" sur le site.`;

export async function POST(request: NextRequest) {
  try {
    const { messages } = await request.json();

    const apiKey = process.env.GROQ_API_KEY;

    if (!apiKey) {
      // Fallback si pas de clé API - réponses basiques
      return NextResponse.json({
        message: getFallbackResponse(
          messages[messages.length - 1]?.content || "",
        ),
      });
    }

    const response = await fetch(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: "llama-3.1-8b-instant",
          messages: [{ role: "system", content: SYSTEM_PROMPT }, ...messages],
          temperature: 0.7,
          max_tokens: 500,
        }),
      },
    );

    if (!response.ok) {
      const error = await response.text();
      console.error("Groq API error:", error);
      return NextResponse.json({
        message: getFallbackResponse(
          messages[messages.length - 1]?.content || "",
        ),
      });
    }

    const data = await response.json();
    const assistantMessage =
      data.choices[0]?.message?.content ||
      "Desolee, je n'ai pas compris. Pouvez-vous reformuler ?";

    return NextResponse.json({ message: assistantMessage });
  } catch (error) {
    console.error("Chat API error:", error);
    return NextResponse.json(
      { message: "Une erreur est survenue. Veuillez reessayer." },
      { status: 500 },
    );
  }
}

// Fallback responses si pas de clé API
function getFallbackResponse(message: string): string {
  const lowerMessage = message.toLowerCase();

  if (
    lowerMessage.includes("paris") ||
    lowerMessage.includes("1889") ||
    lowerMessage.includes("eiffel")
  ) {
    return "Paris 1889 est une destination fascinante ! Vous pourrez assister a l'inauguration de la Tour Eiffel lors de l'Exposition Universelle. Prix : 12 500€ pour 3-7 jours.";
  }
  if (lowerMessage.includes("cretace") || lowerMessage.includes("dinosaure")) {
    return "Le Cretace est notre aventure la plus extreme ! Observez des dinosaures en toute securite grace a nos bulles de protection. Prix : 25 000€ pour 1-3 jours.";
  }
  if (
    lowerMessage.includes("florence") ||
    lowerMessage.includes("renaissance") ||
    lowerMessage.includes("1504")
  ) {
    return "Florence 1504, l'apogee de la Renaissance ! Rencontrez Michel-Ange et visitez l'atelier de Leonard de Vinci. Prix : 15 000€ pour 5-10 jours.";
  }
  if (
    lowerMessage.includes("prix") ||
    lowerMessage.includes("tarif") ||
    lowerMessage.includes("combien")
  ) {
    return "Nos tarifs : Paris 1889 (12 500€), Cretace (25 000€), Florence 1504 (15 000€). Tous incluent transport temporel, hebergement et guide expert.";
  }
  if (lowerMessage.includes("bonjour") || lowerMessage.includes("salut")) {
    return "Bonjour ! Bienvenue chez TimeTravel Agency. Quelle epoque vous fait rever ? Paris 1889, le Cretace ou Florence 1504 ?";
  }

  return "Je serais ravi de vous aider ! Posez-moi des questions sur nos destinations : Paris 1889, le Cretace (-65M annees), ou Florence 1504.";
}
