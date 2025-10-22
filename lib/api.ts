// lib/api.ts
export type AccountMode = "personal" | "business";

type Profile = {
  id: string;
  initials: string;      // JA
  fullName: string;      // JAMAL AMIN
  username: string;      // jamin
  mode: AccountMode;     // personal | business
};

const BASE_URL = "https://example.mock.api"; // عدّلها لو عندك سيرفر حقيقي

// دوال API (في الحالة دي عاملين Mock داخلي)
let _profile: Profile = {
  id: "u_1",
  initials: "HD",
  fullName: "HOSSAM DIAB",
  username: "hosib",
  mode: "personal",
};

export async function getProfile(): Promise<Profile> {
  // simulate network
  await new Promise(r => setTimeout(r, 350));
  return _profile;
}

export async function setAccountMode(mode: AccountMode): Promise<Profile> {
  await new Promise(r => setTimeout(r, 250));
  _profile = { ..._profile, mode };
  return _profile;
}
