import { DeleteIcon } from "@chakra-ui/icons"
import { Spacer, useDisclosure } from "@chakra-ui/react"
import { Dispatch, FC, SetStateAction, useState } from "react"
import { GamerTag } from "../../components/GamerTag"
import { CustomModal } from "../../components/Modal"
import { sessionStore, toastStore } from "../../stores"
import { Session } from "../../types/core"
import { DeleteButton, GamerTagContainer, SessionDetail, SessionDetailContainer, SessionDetailText, SessionDetailTitle, SessionFriends, SessionStats } from "./styles"

interface ISessionDetailsProps {
    sessions: Session[],
    setSessions: Dispatch<SetStateAction<Session[]>>
}

export const SessionDetails: FC<ISessionDetailsProps> = ({
    sessions,
    setSessions,
}) => {
    const {isOpen, onOpen, onClose} = useDisclosure()
    const [sessionToDelete, setSessionToDelete] = useState('')

    const handleDelete = (sessionId: string) => {
        if (sessionId !== '') {
            deleteSession(sessionId).then(() => {
                const updatedSessions = sessions.filter(session => session.id !== sessionId)
                setSessions(updatedSessions)
        })}
    }

    const handleOpenModal = (sessionId: string) => {
        setSessionToDelete(sessionId)
        onOpen()
    }

    async function deleteSession(sessionId: string) {
        try {
            const response = await sessionStore.deleteSession(sessionId)
            return response
        } catch (err) {
            toastStore.errorToast(err)
        }
    }

    return (
        <SessionDetailContainer>
            {!!sessions && sessions.map((session, i) => (
                <SessionDetail
                    key={session.id}
                >
                    <SessionStats>
                    <SessionDetailTitle>
                        {'Session ' + (i + 1)}
                    </SessionDetailTitle>
                    <SessionDetailText>
                        {'Wins: ' + session.wins}
                    </SessionDetailText>
                    <SessionDetailText>
                        {'Losses: ' + session.losses}
                    </SessionDetailText>
                    <SessionDetailText>
                        {'Sessions: ' + session.sessions}
                    </SessionDetailText>
                    <SessionDetailText>
                        {'Eggs: ' + session.eggs}
                    </SessionDetailText>
                    <Spacer />
                    <DeleteButton
                        aria-label="delete"
                        icon={<DeleteIcon />}
                        onClick={() => handleOpenModal(session.id || '')}
                    />
                    </SessionStats>
                    <SessionFriends>
                        <SessionDetailText>
                            {'Friends:'}
                        </SessionDetailText>
                        <GamerTagContainer>
                            {session.gamers.map((gamer) => (
                                <GamerTag 
                                    key={gamer.id}
                                    gamer={gamer}
                                />
                            ))}
                        </GamerTagContainer>
                    </SessionFriends>
                </SessionDetail>
            ))}
            <CustomModal
                isOpen={isOpen}
                onClose={onClose}
                onConfirm={() => handleDelete(sessionToDelete)}
                title={'Delete'}
                body={'Are you sure you want to delete this session?'}
            />
        </SessionDetailContainer>
    )
}