export interface Coffee {
    id: number;
    name: string;
    description: string;
    sensoryNotes: string;
    image: string;
    regionName: string;
    monthlySelectionId: number | null;
}