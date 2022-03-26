import React from "react";
import "./QuestionAnswer.css";

const QuestionAnswer = () => {
    return (
        <div className="row my-5 pb-5">
            <h2>Question and Answer Section</h2>
            <div className="col-md-4">
                <div className="q-a-section m-3">
                    <h4>How React js work?</h4>
                    <p className="text-start">
                        React reads all objects and uses them to create HTML
                        elements on the virtual DOM. When the state changes,
                        React goes through its virtual DOM, creates a list of
                        those changes that need to be made to the real DOM and
                        then it all in one single process.{" "}
                    </p>
                </div>
            </div>
            <div className="col-md-4">
                <div className="q-a-section m-3">
                    <h4>Props VS state?</h4>
                    <p className="text-start">
                        Props are read-only but State changes can be
                        asynchronous. Props allow to pass data from one
                        component to other component but State hols information
                        about the components. Props are communicate between
                        components. States can be used for rendering dynamic
                        changes. Props cannot change inside Component but State
                        can change inside Component.
                    </p>
                </div>
            </div>
            <div className="col-md-4">
                <div className="q-a-section m-3">
                    <h4>How useState work?</h4>
                    <p className="text-start">
                        The State is a updatable structure that is used to
                        contain data the component and can change over time. It
                        is heart of the react component which determines the
                        behavior of the component. It can only be accessed or
                        modified inside the component.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default QuestionAnswer;
