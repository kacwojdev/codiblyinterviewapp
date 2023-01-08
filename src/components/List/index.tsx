import ListItem from '../ListItem'

import { connect } from "react-redux/es/exports";
import { useParams } from "react-router";
import { v4 as uuidv4 } from 'uuid';
import { Colors } from '../../types'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

import {
    ListContainer,
    ModalContainer,
    ModalContainerBackground,
    ModalItemSpecifics,
    ModalCloseBtn,
    ModalItemSpecificContainer
} from './style'
import Pagination from '../Pagination';

type ListProps  = {
    pageId?: string | undefined,
    colorId?: string | undefined,
    currentPage: number,
    data: Colors
}

type ModalContentProps = {
    id: number,
    name: string,
    color: string,
    year: number,
    pantoneValue: string
}

const List = ({ colorId, data }: ListProps) => {

    const { pageId } = useParams<"pageId">()

    return (
        <ListContainer>
            {data
                .map((item: any) => <ListItem 
                                        key={uuidv4()}
                                        id={item.id}
                                        name={item.name}
                                        year={item.year}
                                        color={item.color}
                                    />
                )}
            {colorId && (
                <>
                    <ModalContainer>
                        {data
                            .filter(item => item.id === Number(colorId))
                            .map(item => <ModalContent
                                            id={item.id}
                                            name={item.name}
                                            year={item.year}
                                            color={item.color}
                                            pantoneValue={item.pantone_value} 
                                            />
                        )}
                    </ModalContainer>
                    <ModalContainerBackground/>
                </>
            )}
            <Pagination pageId={pageId} />
        </ListContainer>
    )
}

const ModalContent = ({ id, name, color, year, pantoneValue }: ModalContentProps) => {
    return (
        <>
            <ModalItemSpecifics>
                <ModalItemSpecificContainer>
                    <span style={{fontSize: '2rem', fontWeight: '700'}}>{name}</span>
                </ModalItemSpecificContainer>
                <ModalItemSpecificContainer>
                    id: <span>{id}</span>
                </ModalItemSpecificContainer>
                <ModalItemSpecificContainer>
                    color: <span>{color}</span>
                </ModalItemSpecificContainer>
                <ModalItemSpecificContainer>
                    year: <span>{year}</span>
                </ModalItemSpecificContainer>
                <ModalItemSpecificContainer>
                    pantone value: <span>{pantoneValue}</span>
                </ModalItemSpecificContainer>
            </ModalItemSpecifics>
            <ModalCloseBtn>
                <FontAwesomeIcon icon={faXmark} />
            </ModalCloseBtn>
        </>
    )
}

const mapStateToProps = (state: {currentPage: number, data: Colors}) => ({
    currentPage: state.currentPage,
    data: state.data
})

export default connect(mapStateToProps)(List);