import ListItem from '../ListItem'

import { connect } from "react-redux/es/exports";
import { useParams } from "react-router";
import { v4 as uuidv4 } from 'uuid';
import { Colors } from '../../types'

import {
    ListContainer
} from './style'
import Pagination from '../Pagination';

type ListProps  = {
    pageId?: string | undefined,
    colorId?: string | undefined,
    currentPage: number,
    data: Colors
}

const List = ({ colorId, data }: ListProps) => {

    const { pageId } = useParams<"pageId">()

    return (
        <ListContainer>
            {data.map((item: any) => <ListItem 
                                        key={uuidv4()}
                                        id={item.id}
                                        name={item.name}
                                        year={item.year}
                                        color={item.color}
                                    />)}
            {colorId && (
                <div>
                    Modal
                    {colorId}
                </div>
            )}
            <Pagination pageId={pageId} />
        </ListContainer>
    )
}

const mapStateToProps = (state: {currentPage: number, data: Colors}) => ({
    currentPage: state.currentPage,
    data: state.data
})

export default connect(mapStateToProps)(List);