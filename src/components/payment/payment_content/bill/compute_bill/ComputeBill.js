import clsx from "clsx";

function ComputeBill({ context }) {
    return (<span className={clsx('text-sm', 'font-normal',
        'text-[#808089]')}>
        {context}
    </span>);
};

export default ComputeBill;