import clsx from "clsx";

function WrapperBill({ children }) {
    return (<ul
        className={clsx('border-t', 'border-[#dcdcdc]','border-dashed', 'px-2', 'py-4')}>
        {children}
    </ul>);
};

export default WrapperBill;