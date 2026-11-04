// Accès PUBLIC (lecture seule) à la base Jovial, pour les pages du site qui affichent
// des données publiques (ex. nom et photo d'un lieu sur getjovial.fr/v/<id>).
// Clé « anon » = clé PUBLIQUE, la même que celle embarquée dans l'appli : elle ne donne
// accès qu'à ce que les règles RLS autorisent (lieux approuvés et actifs, etc.).
export const SUPABASE_URL = "https://luwspwiibxzzjvbtklbo.supabase.co";
export const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx1d3Nwd2lpYnh6emp2YnRrbGJvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc1NDMzNDUsImV4cCI6MjA3MzExOTM0NX0.cD3SpHJgyzxsJwfw5a2gDseih7A8giU_thIrQAGcXgg";

/** Lecture REST publique (PostgREST). Renvoie null en cas d'erreur. */
export async function publicSelect<T>(table: string, query: string): Promise<T[] | null> {
  try {
    const res = await fetch(`${SUPABASE_URL}/rest/v1/${table}?${query}`, {
      headers: { apikey: SUPABASE_ANON_KEY, Authorization: `Bearer ${SUPABASE_ANON_KEY}` },
    });
    if (!res.ok) return null;
    return (await res.json()) as T[];
  } catch {
    return null;
  }
}
