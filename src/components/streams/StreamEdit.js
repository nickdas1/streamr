import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchStream, editStream } from "../../actions";
import StreamForm from "./StreamForm";

export default function StreamEdit() {
    const dispatch = useDispatch();
    const { id } = useParams();
    const stream = useSelector((state) => state.streams[id]);

    useEffect(() => {
        dispatch(fetchStream(id));
    }, [id, dispatch]);

    const onSubmit = (formValues) => {
        dispatch(editStream(id, formValues));
    };

    const renderContent = () => {
        if (!stream) {
            return <div>Loading...</div>;
        }

        const {title, description} = stream;

        return (
            <div>
                <h3>Edit a Stream</h3>
                <StreamForm
                    initialValues={{title, description}}
                    onSubmit={onSubmit}
                />
            </div>
        );
    };

    return renderContent();
}
