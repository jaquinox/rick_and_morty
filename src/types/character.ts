

export type Character = {
    id: number;
    name: string;
    status: 'Alive' | 'Dead' | 'unknown'; // Tipo literal para status
    species: string;
    type: string;
    gender: "Female" | "Male" | "Genderless";
    origin: {
      name: string;
      url: string;
    };
    location: {
      name: string;
      url: string;
    };
    image: string;
    episode: string[]; // Array de URLs de episodios
    url: string; // URL del personaje
    created: string; // Fecha de creación en formato ISO
  };