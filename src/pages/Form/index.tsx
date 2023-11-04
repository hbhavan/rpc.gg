import { Link, Flex, FormControl, Spacer } from "@chakra-ui/react"
import { ChangeEvent, useEffect, useState } from "react"
import { NavMenu } from "../../components/NavMenu"
import { gamerStore, sessionStore, toastStore } from "../../stores"
import { Game, Gamer } from "../../types/core"
import { AddButton } from "./addButton"
import { GamerSelect } from "../../components/Selects/gamerSelect"
import { GameSelect } from "../../components/Selects/gameSelect"
import { toJS } from 'mobx'
import { FormContainer, FPFormLabel, FPInput, FPSubmit, InputContainer, InputRow, MainContainer, Title } from "./styles"

interface FormValues {
    game: Game,
    sessions: string,
    wins: string,
    losses: string,
    eggs: string,
    gamers: Gamer[]
}

export const FormPage = () => {
    const [selectedGame, setSelectedGame] = useState<Game>({
        id: '',
        name: '',
    })
    const [selectedGamer, setSelectedGamer] = useState<Gamer[]>([])
    const [formData, setFormData] = useState<FormValues>({
        game: {id: '', name: ''},
        sessions: '',
        wins: '',
        losses: '',
        eggs: '',
        gamers: []
    })
    const [addEggs, setAddEggs] = useState('')

    const gamers = toJS(gamerStore.gamers)

    const handleAddClick = (value: string) => {
        if (value === '') 
            return '1'
        return '' + (parseInt(value) + 1)
    }

    const handleChange = (
        e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        })
    }

    const handleAddEggs = (
        e: ChangeEvent<HTMLInputElement>
    ) => {
        setAddEggs(e.target.value)
    }

    const handleAddEggsClick = (eggs: string) => {
        const addEggs = (parseInt(formData.eggs) + parseInt(eggs))
        if (formData.eggs === '') {
            setFormData({
                ...formData,
                eggs: eggs
            })
        } else if (addEggs > 0) {
            if (formData.eggs === '') {
                setFormData({
                    ...formData,
                    eggs: eggs
                })
            } else if (typeof addEggs === 'number') {
                setFormData({
                    ...formData,
                    eggs: '' + addEggs
            })}            
        }
        setAddEggs('')
    }

    const handleSelectGamer = () => {
        setFormData({
            ...formData,
            gamers: selectedGamer
        })
    }

    const handleSubmit = () => {
        let valid = true
        if (formData.game.id === '') {
            toastStore.customErrorToast("Select a game")
            valid = false
        }

        if (formData.gamers.length < 3 && formData.game.name != "Wheel Spin") {
            toastStore.customErrorToast("Select at least 3 gamers")
            valid = false
        }
        if (
            parseInt(formData.sessions) < 0 ||
            parseInt(formData.wins) < 0 ||
            parseInt(formData.losses) < 0 
        ) {
            toastStore.customErrorToast("Enter a valid number")
            valid = false
        }
        if (valid) {
            clearData()
            postData()
        }
    }

    const clearData = () => {
        setFormData({
            game: {id: '', name: ''},
            sessions: '',
            wins: '',
            losses: '',
            eggs: '',
            gamers: []
        })
        setSelectedGame({id: '', name: ''})
        setSelectedGamer([])
    }

    async function postData() {
        const curDate = new Date()
        try {
            const response = await sessionStore.submitSession({
                gameId: formData.game.id,
                wins: parseInt(formData.wins),
                losses: parseInt(formData.losses),
                eggs: parseInt(formData.eggs),
                sessions: parseInt(formData.sessions),
                date: curDate,
                gamers: formData.gamers
            })
            return response
        } catch (err) {
            toastStore.errorToast(err)
        }
    }

    useEffect(() => {
        gamerStore.getGamers()

    }, [])

    useEffect(() => {
        setFormData({
            ...formData,
            game: selectedGame
        })
    }, [selectedGame])

    return (
        <MainContainer>
            <NavMenu page={"form"}/>
            <FormContainer>
                <Title>
                    Add A Session
                </Title>
                <InputContainer>
                    <FormControl>
                        <FPFormLabel>Game</FPFormLabel>
                        <GameSelect
                            selected={selectedGame}
                            setSelected={setSelectedGame}
                        />
                    </FormControl>
                    <FormControl>
                        <Flex flexDir="row">
                            <FPFormLabel>Friends</FPFormLabel>
                            <Spacer />
                            <Link
                                alignSelf="center"
                                color="zara.200"
                                onClick={() => {
                                    setSelectedGamer([])
                                    formData.gamers = []
                                }}
                            >
                                Clear
                            </Link>
                        </Flex>
                        <GamerSelect
                            gamers={gamers}
                            selected={selectedGamer}
                            setSelected={setSelectedGamer}
                            onChange={handleSelectGamer}
                        />
                    </FormControl>
                    <FormControl>
                        <FPFormLabel>Sessions</FPFormLabel>
                        <InputRow>
                            <FPInput 
                                id="sessions"
                                placeholder="0"
                                value={formData.sessions}
                                onChange={handleChange}
                            />
                            <AddButton
                                onClick={() => setFormData({
                                    ...formData,
                                    sessions: handleAddClick(formData.sessions)
                                })} 
                            />
                        </InputRow>
                    </FormControl>
                    <FormControl>
                        <FPFormLabel>Victories</FPFormLabel>
                        <InputRow>
                            <FPInput 
                                id="wins"
                                placeholder="0"
                                value={formData.wins}
                                onChange={handleChange}
                            />
                            <AddButton
                                onClick={() => setFormData({
                                    ...formData,
                                    wins: handleAddClick(formData.wins)
                                })} 
                            />
                        </InputRow>
                    </FormControl>
                    <FormControl>
                        <FPFormLabel>Losses</FPFormLabel>
                        <InputRow>
                            <FPInput 
                                id="losses"
                                placeholder="0"
                                value={formData.losses}
                                onChange={handleChange}
                            />
                            <AddButton
                                onClick={() => setFormData({
                                    ...formData,
                                    losses: handleAddClick(formData.losses)
                                })} 
                            />
                        </InputRow>
                    </FormControl>
                    <FormControl>
                        <FPFormLabel>Eggs?</FPFormLabel>
                        <InputRow>
                            <FPInput 
                                id="eggs"
                                placeholder="0"
                                value={formData.eggs}
                                onChange={handleChange}
                            />
                            <FPInput 
                                id="addEggs"
                                placeholder="0"
                                value={addEggs}
                                onChange={handleAddEggs}
                                width="20%"
                            />
                            <AddButton
                                onClick={() => handleAddEggsClick(addEggs)} 
                            />
                        </InputRow>
                    </FormControl>
                    <FPSubmit
                        onClick={handleSubmit}
                    >
                        Submit
                    </FPSubmit>
                </InputContainer>
            </FormContainer>
        </MainContainer>
    )
}