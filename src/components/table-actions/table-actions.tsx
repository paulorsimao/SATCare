import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { MouseEventHandler, ReactNode } from "react";

type ActionProps = {
    onClick: MouseEventHandler<HTMLAnchorElement> & MouseEventHandler<HTMLButtonElement>
}

type Props = {
    children: ReactNode
}

const DeleteAction = ({ onClick }: ActionProps) => {
    return (
        <Button
            danger
            className="btn-icon"
            shape="circle"
            type="text"
            onClick={onClick}
        >
            <DeleteOutlined size={16} />
        </Button>
    );
};

const EditAction = ({ onClick }: ActionProps) => {
    return (
        <Button
            className="btn-icon"
            type="text"
            
            shape="circle"
            onClick={onClick}
        >
            <EditOutlined size={16} />
        </Button>
    );
};

const TableActions = ({ children }: Props) => {
    return <>{children}</>;
};

export { DeleteAction, EditAction };
export default TableActions;
