import React from "react";
import './form-error-summary.scss'
export default function FormErrorSummary({errors}) {
    const jumpToFirstError = () => {
        const firstError = document.getElementById(Object.keys(errors)[0]);
        if (firstError) {
            firstError.focus();
            firstError.scrollIntoView({behavior: "smooth", block: "center"})
        }
    };

    return (
        <div id={Object.keys(errors).length > 0 ? "form-values-error" : ""}>
            {Object.keys(errors).length > 0 &&
            <div className="form-error">
                <div className="form-error__image"></div>
                <div className="form-error__content">
                    <p>
                        Please Correct {Object.keys(errors).length === 1 ? `${Object.keys(errors).length} Error` :
                        ` ${Object.keys(errors).length} Errors`} <a className="form-error__error-link"
                                                                    onClick={jumpToFirstError}>Jump to First Error</a>
                    </p>
                </div>
            </div>}
        </div>
    )
};
