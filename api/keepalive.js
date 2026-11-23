// Garde le projet Supabase actif : un petit appel de lecture, sans donnée sensible.
// La clé « publishable » est publique (déjà visible dans la page du site).
const URL_ = process.env.SUPABASE_URL || "https://gcsxyzmglbdarewsyoxl.supabase.co";
const KEY = process.env.SUPABASE_ANON_KEY || "sb_publishable_oVNzrR9jCvlAtcQV65XveA_5KgEf47Q";
module.exports = async (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.setHeader("Cache-Control", "no-store");
  try {
    const r = await fetch(URL_ + "/rest/v1/access_codes?select=reference&limit=1", { headers: { apikey: KEY, Authorization: "Bearer " + KEY } });
    res.statusCode = r.ok ? 200 : 502;
    res.end(JSON.stringify({ ok: r.ok, status: r.status, at: new Date().toISOString() }));
  } catch (e) {
    res.statusCode = 502;
    res.end(JSON.stringify({ ok: false }));
  }
};
