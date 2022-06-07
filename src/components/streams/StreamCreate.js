import React from "react";
import { connect, useDispatch } from "react-redux";
import { createStream } from "../../actions";
import StreamForm from "./StreamForm";

function StreamCreate() {
    const dispatch = useDispatch();
    const onSubmit = (formValues) => {
        dispatch(createStream(formValues));
    };

    return (
        <div>
            <h3>Create a Stream</h3>
            <StreamForm onSubmit={onSubmit} />
        </div>
    );
}

export default connect(null, { createStream })(StreamCreate);
