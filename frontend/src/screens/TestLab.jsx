import React, { useState, useEffect } from 'react';
import Question from '../components/Question';
import questionsData from '../lab.json'; // Assuming the JSON file is in the same folder

function TextLab() {
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        setQuestions(questionsData.questions);
    }, []);

    return (
        <div>
            {questions.map((question) => (
                <div key={question.id}>
                    <Question description={question.description} expected_output={question.expected_output}/>
                    <br/>
                </div>
            ))}
        </div>
    );
}

export default TextLab;
