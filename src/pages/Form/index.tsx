import { Link, Flex, FormControl, Spacer } from "@chakra-ui/react"
import { ChangeEvent, useState } from "react"
import { NavMenu } from "../../components/NavMenu"
import { Game, Gamer } from "../../types/core"
import { AddButton } from "./addButton"
import { GamerSelect } from "./gamerSelect"
import { GameSelect } from "./gameSelect"
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
        if (typeof addEggs === 'number' && addEggs > 0) {
            setFormData({
                ...formData,
                eggs: '' + addEggs
            })
            setAddEggs('')
        }
    }

    const handleSelectGame = () => {
        setFormData({
            ...formData,
            game: selectedGame
        })
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
            alert("Select a game")
            valid = false
        }

        if (formData.gamers.length < 3) {
            alert("Select at least 3 gamers")
            valid = false
        }
        if (
            parseInt(formData.sessions) < 0 &&
            parseInt(formData.wins) < 0 &&
            parseInt(formData.losses) < 0 &&
            parseInt(formData.eggs) < 0
        ) {
            alert("Select a valid number")
            valid = false
        }
        if (valid) {
            alert("Submitted")
        }
        console.log(formData)
    }

    return (
        <MainContainer>
            <NavMenu page={"form"}/>
            <FormContainer>
                <Title>
                    Add A Session
                </Title>
                <InputContainer>
                    <FormControl isRequired>
                        <FPFormLabel>Game</FPFormLabel>
                        <GameSelect
                            selected={selectedGame}
                            setSelected={setSelectedGame}
                            onChange={handleSelectGame}
                        />
                    </FormControl>
                    <FormControl isRequired>
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
                            selected={selectedGamer}
                            setSelected={setSelectedGamer}
                            onChange={handleSelectGamer}
                        />
                    </FormControl>
                    <FormControl isRequired>
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
                                    sessions: '' + (parseInt(formData.sessions) + 1)
                                })} 
                            />
                        </InputRow>
                    </FormControl>
                    <FormControl isRequired>
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
                                    wins: '' + (parseInt(formData.wins) + 1)
                                })} 
                            />
                        </InputRow>
                    </FormControl>
                    <FormControl isRequired>
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
                                    losses: '' + (parseInt(formData.losses) + 1)
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