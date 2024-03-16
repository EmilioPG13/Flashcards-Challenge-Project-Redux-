# **Codecademy Flashcards Starter Challenge**

## **Overview**

This project was developed as a part of Codecademy's Full-Stack Engineer Path curriculum.

## **Objectives**

The primary goal is to apply knowledge of React-Redux and Redux Toolkit. The objectives include:

- Setting up individual slices modules using **createSlice()** from '@reduxjs/toolkit'.
- Configuring a store module with **configureStore()** and the individual slice modules.
- Utilizing **useSelector()** along with the selectors defined in each individual state slices to access the **Store** from 'react-redux'.
- Creating **selectors** for state manipulation.
- Using **useDispatch()** to dispatch actions to the store for rendering updates.
- Comprehending the Redux workflow from view to middleware to Action (dispatch) to view.

---

## **Execution**

To launch the app, run `npm start` in the project root, and it will be available on port 3000.

### **State Configuration**

The application's state is entirely normalized, with slices for topics, quizzes, and cards.

### **Navigation Routes**

- `/new-topic` – A form to create a new topic.
- `/topics` – An index of all topics.
- `/topics/:topicId` – A dedicated page for each topic.
- `/new-quiz` – A form to create a new quiz.
- `/quizzes` – An index of all quizzes.
- `/quizzes/:quizId` – A dedicated page for each quiz.

### **Testing Procedures**

1. Generate topics.
2. Create quizzes.
3. Navigate to a specific quiz page and flip the cards over.