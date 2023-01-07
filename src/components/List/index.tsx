import { connect } from "react-redux/es/exports";
import { v4 as uuidv4 } from 'uuid';
import { Colors } from '../../types'

type ListProps  = {
    pageId?: string | undefined,
    colorId?: string | undefined,
    currentPage: number,
    data: Colors
}

const List = ({ colorId, data }: ListProps) => {
    return (
        <div>
            {data.map((item: any) => (
                <div key={uuidv4()}>
                    ID: {item.id}
                    NAME: {item.name}
                    YEAR: {item.year}
                </div>
            ))}
            {colorId && (
                <div>
                    Modal
                    {colorId}
                </div>
            )}
        </div>
    )
}

const mapStateToProps = (state: {currentPage: number, data: Colors}) => ({
    currentPage: state.currentPage,
    data: state.data
})

export default connect(mapStateToProps)(List);