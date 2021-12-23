export const Card = (props) => (
    <div className="card">
        <div>{props.header}</div>

        <div>{props.body}</div>

        <div>{props.footer}</div>
    </div>
);
