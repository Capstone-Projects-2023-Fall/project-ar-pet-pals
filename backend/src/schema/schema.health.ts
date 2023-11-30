// schema.health.ts

export interface HealthScoreSchema {
    _id: { $oid: string };
    user_id: string;
    food: string;
    healthScore: number;
}
