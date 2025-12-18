import trophyAfcon from "@/assets/trophy-afcon.jpg";
import stadiumAccra from "@/assets/stadium-accra.jpg";
import blackStarsCelebration from "@/assets/black-stars-celebration.jpg";
import vintageMemorabilia from "@/assets/vintage-memorabilia.jpg";

export interface ArchiveItem {
  id: number;
  title: string;
  type: string;
  image: string;
  description: string;
  year: number;
}

export const archives: ArchiveItem[] = [
  {
    id: 1,
    title: "1963 AFCON Trophy",
    type: "trophy",
    image: trophyAfcon,
    description: "Ghana's historic first Africa Cup of Nations victory, held on home soil. The Black Stars defeated Sudan 3-0 in the final.",
    year: 1963,
  },
  {
    id: 2,
    title: "1965 AFCON Defense",
    type: "trophy",
    image: trophyAfcon,
    description: "Ghana successfully defended their continental title in Tunisia, showcasing dominance in African football.",
    year: 1965,
  },
  {
    id: 3,
    title: "Accra Sports Stadium",
    type: "stadium",
    image: stadiumAccra,
    description: "The iconic home of Ghana football, witness to countless historic moments and legendary matches.",
    year: 1952,
  },
  {
    id: 4,
    title: "Black Stars 2010 World Cup",
    type: "match",
    image: blackStarsCelebration,
    description: "Ghana became only the third African nation to reach the World Cup quarter-finals in South Africa.",
    year: 2010,
  },
  {
    id: 5,
    title: "Vintage Memorabilia Collection",
    type: "memorabilia",
    image: vintageMemorabilia,
    description: "Original jerseys, match balls, and memorabilia from Ghana's football golden era in the 1960s and 70s.",
    year: 1970,
  },
  {
    id: 6,
    title: "1978 AFCON Championship",
    type: "trophy",
    image: trophyAfcon,
    description: "Ghana claimed their third continental title on home soil, defeating Uganda 2-0 in the final.",
    year: 1978,
  },
  {
    id: 7,
    title: "1982 AFCON Victory",
    type: "trophy",
    image: trophyAfcon,
    description: "The Black Stars secured their fourth Africa Cup of Nations trophy in Libya.",
    year: 1982,
  },
  {
    id: 8,
    title: "Olympic Bronze 1992",
    type: "match",
    image: blackStarsCelebration,
    description: "Ghana's U-23 team won bronze at the Barcelona Olympics, marking a historic Olympic achievement.",
    year: 1992,
  },
  {
    id: 9,
    title: "Cape Coast Stadium",
    type: "stadium",
    image: stadiumAccra,
    description: "Modern 15,000-seat stadium in Cape Coast, hosting international matches and local competitions.",
    year: 2016,
  },
  {
    id: 10,
    title: "Golden Generation Jerseys",
    type: "memorabilia",
    image: vintageMemorabilia,
    description: "Match-worn jerseys from Abedi Pele, Tony Yeboah, and the golden generation of Ghanaian football.",
    year: 1995,
  },
  {
    id: 11,
    title: "FIFA U-20 World Cup 2009",
    type: "trophy",
    image: trophyAfcon,
    description: "Ghana became the first African nation to win the FIFA U-20 World Cup in Egypt.",
    year: 2009,
  },
  {
    id: 12,
    title: "2006 World Cup Debut",
    type: "match",
    image: blackStarsCelebration,
    description: "Ghana's historic first World Cup appearance in Germany, reaching the Round of 16.",
    year: 2006,
  },
];

export const archiveTypes = ["all", "trophy", "player", "stadium", "memorabilia", "match"];
