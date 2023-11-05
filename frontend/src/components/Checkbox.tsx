type CheckboxProps = {
    functionName: string;
}

const Checkbox: React.FC<CheckboxProps> = ({ functionName }: CheckboxProps) => {

    return (

        <>
            <input type="checkbox" className="h-4 w-4 cursor-pointer" />
            <h4 className="text-lg">{ functionName }</h4>
        </>
    
    )
}

export default Checkbox