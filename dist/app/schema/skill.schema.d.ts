import { Document } from 'mongoose';
export declare type SkillDocument = Skill & Document;
export declare class Skill {
    profileKey: string;
    subSkill: string;
}
export declare const SkillSchema: import("mongoose").Schema<Document<Skill, any, any>, import("mongoose").Model<Document<Skill, any, any>, any, any, any>, {}>;
