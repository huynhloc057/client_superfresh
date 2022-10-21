import clsx from "clsx";

function ChoosePay({ data, index, indexMethod, setIndexMethod }) {
    return (<div className={clsx('flex', 'items-center')}>
        <input
            className={clsx('mr-2')}
            id={index + '-method'}
            type={'radio'}
            checked={indexMethod === index}
            onChange={() => setIndexMethod(index)}
        />
        <label
            className={clsx('flex', 'items-center')}
            htmlFor={index + '-method'}
        >
            <img
                className={clsx('mr-3')}
                src={data.src}
                alt={data.title}
                width='32'
                height='32'
            />
            <span>
                <div>{data.title}</div>
                {data.subSrc && <img
                    src={data.subSrc}
                    alt={data.title}
                    width='24'
                    height='24'
                />}

            </span>
        </label>
    </div >);
};

export default ChoosePay;