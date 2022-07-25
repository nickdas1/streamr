import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchStream, deleteStream } from "../../actions";
import Modal from "../Modal";
import history from "../../history";

export default function StreamDelete() {
    const dispatch = useDispatch();
    const { id } = useParams();
    const stream = useSelector((state) => state.streams[id]);

    useEffect(() => {
        dispatch(fetchStream(id));
    }, [id, dispatch]);

    const onDelete = (id) => {
        dispatch(deleteStream(id));
    };

    const actions = (
        <>
            <button onClick={() => onDelete(id)} className="ui negative button">
                Delete
            </button>
            <Link to="/" className="ui button">
                Cancel
            </Link>
        </>
    );

    const renderContent = () => {
        if (!stream) {
            return "Are you sure you want to delete this stream?";
        }

        return (
            <div>
                <span>
                    Are you sure you want to delete the following stream:{" "}
                </span>
                <b>{stream.title}</b>
            </div>
        );
    };

    return (
        <Modal
            title="Delete Stream"
            content={renderContent()}
            actions={actions}
            onDismiss={() => history.push("/")}
        />
    );
}
