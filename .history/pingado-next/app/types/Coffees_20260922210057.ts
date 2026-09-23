export interface Coffee {
    id: number;
    name: string;
    description: string;
    sensoryNotes: string;
    image: string;
    regionId: number;
    monthlySelectionId: number | null;
}