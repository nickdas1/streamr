import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchStream } from "../../actions";

export default function StreamShow() {
    const dispatch = useDispatch();
    const { id } = useParams();
    const stream = useSelector((state) => state.streams[id]);

    useEffect(() => {
        dispatch(fetchStream(id));
    }, [id, dispatch]);

    const renderContent = () => {
        if (!stream) {
            return <div>Loading...</div>;
        }

        const { title, description } = stream;

        return (
            <div>
                <h1>{title}</h1>
                <h5>{description}</h5>
            </div>
        );
    };

    return renderContent();
}
