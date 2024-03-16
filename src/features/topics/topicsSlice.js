import { createSlice } from "reduxjs/toolkit";

export const topicSlice = createSlice({
    name: "topics",
    initialState: {
        topics: {}
    },
    reducers: {
        addTopic: (state, action) => {
            const { id, name, icon } = action.payload;
            state.topics[id] = {
                id: id,
                name: name,
                icon,
                quizIds: []
            };
        }
    },
    extraReducers: {
        "quizzes/addQuiz": (state, action) => {
            const { topicId, id } = action.payload;
            state.topics[topicId].quizIds.push(id);
        }
    }
});

export const { addTopic, addQuizIdForTopic } = topicSlice.actions;
export const selectTopics = (state) => state.topics.topics;
export default topicSlice.reducer;