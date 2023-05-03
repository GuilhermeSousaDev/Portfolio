import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { skillset } from "../../config/skillsetData";

type ISkillPayload = {
    languageName: string;
    skillName: 'frontend' | 'backend' | 'mobile' | 'database';
}

const SkillsSlice = createSlice({
    name: 'skills',
    initialState: skillset,
    reducers: {
        changeIsSelectedSkillState(state, action: PayloadAction<ISkillPayload>) {
            const { languageName, skillName } = action.payload;

            state[skillName] = state[skillName]
            .map(skill => skill.name === languageName ? { ...skill, isSelected: true } : skill);
        }
    },
});

export default SkillsSlice.reducer;
export const { changeIsSelectedSkillState } = SkillsSlice.actions;