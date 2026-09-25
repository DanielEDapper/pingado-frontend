export interface Region {
    id: number;
    name: string;
    state: string;
    description: string;
    averageAltitude: number;
    sensoryProfile: string;
}

export interface Coffee {
    id: number;
    name: string;
    description: string;
    sensoryNotes: string;
    image: string;
    region: Region;
    monthlySelectionId: number | null;
}