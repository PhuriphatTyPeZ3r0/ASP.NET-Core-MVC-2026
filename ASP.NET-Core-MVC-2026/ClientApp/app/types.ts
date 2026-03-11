export interface FootballerSummary {
  id: number;
  name: string;
  position: string;
  rating: number;
  clubName: string | null;
}

export interface FootballerDetail {
  id: number;
  name: string;
  position: string;
  rating: number;
  matchesPlayed: number;
  goals: number;
  assists: number;
  yellowCards: number;
  redCards: number;
  personal: {
    birthDate: string;
    nationality: string;
    height: number;
    weight: number;
    preferredFoot: string;
    bio: string;
  } | null;
  club: {
    name: string;
    league: string;
    managerName: string;
    stadiumName: string;
    city: string;
  } | null;
}
