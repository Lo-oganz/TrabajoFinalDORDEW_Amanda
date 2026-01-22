// src/data/styles.ts
export type Style = {
  id: string;
  name: string;
  description: string;
  shortBio: string;
  tag?: string;
  image?: string; // opcional, luego se pueden añadir imágenes
};

export const styles: Style[] = [
  {
    id: "scene",
    name: "Scene",
    description: "Estilo colorido, llamativo y caótico nacido en internet.",
    shortBio: "Pelo cardado, rayas, colores neón y actitud intensa.",
    tag: "Scene",
  },
  {
    id: "gyaru",
    name: "Gyaru",
    description: "Moda japonesa basada en rebeldía, glamour y exceso.",
    shortBio: "Pestañas XXL, uñas decoradas y confianza absoluta.",
    tag: "Gyaru",
  },
  {
    id: "emo",
    name: "Emo",
    description: "Estética oscura centrada en emociones y expresión personal.",
    shortBio: "Negro, rayas, maquillaje marcado y sensibilidad.",
    tag: "Emo",
  },
  {
    id: "kawaii",
    name: "Kawaii",
    description: "Estilo adorable con colores pastel y detalles dulces.",
    shortBio: "Tierna, suave y visualmente cute.",
    tag: "Kawaii",
  },
  {
    id: "cyber",
    name: "Cyber",
    description: "Fusión futurista de moda digital y estética rave.",
    shortBio: "Neón, pelucas llamativas y vibes tecnológicas.",
    tag: "Cyber",
  },
  {
    id: "alt",
    name: "Alternative",
    description: "Estilo alternativo que mezcla influencias punk y goth.",
    shortBio: "Capas, accesorios, actitud rebelde.",
    tag: "Alt",
  },
  {
    id: "dark-gyaru",
    name: "Dark Gyaru",
    description: "Versión más oscura y edgy del gyaru clásico.",
    shortBio: "Glamour, negro y presencia fuerte.",
    tag: "Dark",
  },
  {
    id: "pastel-scene",
    name: "Pastel Scene",
    description: "Scene suavizado con tonos pastel y estética cute.",
    shortBio: "Colorido pero dulce y menos agresivo.",
    tag: "Pastel",
  },
];
