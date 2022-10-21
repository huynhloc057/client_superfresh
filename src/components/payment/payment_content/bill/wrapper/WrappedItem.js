import clsx from "clsx";

function WrappedItem({ children }) {
    return (<li className={clsx('flex', 'items-center',
        'justify-between', 'cursor-default')}>
        {children}
    </li>);
};

export default WrappedItem;