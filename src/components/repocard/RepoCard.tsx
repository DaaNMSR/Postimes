import React, {useState} from "react";
import {IRepo} from "../../models/models";
import {useActions} from "../../hooks/actions";
import {useAppSelector} from "../../hooks/redux";
import Button from "../../UI/Button";


const RepoCard = ({repo}: { repo: IRepo }) => {

    const {addFavorite, removeFavorite} = useActions()
    const {favorites} = useAppSelector(state => state.github)
    const [isFav, setIsFav] = useState(favorites.includes(repo.html_url))

    const addToFavorite = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        addFavorite(repo.html_url)
        setIsFav(true)
    }
    const removeFromFavorite = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        removeFavorite(repo.html_url)
        setIsFav(false)
    }

    return (
        <div className='border py-3 px-5 rounded mb-2 hover:shadow-md hover:bg-gray-100 transition-all'>
            <a href={`https://github.com/${repo.full_name}`} target='_blank' rel="noreferrer">
                <h2 className='text-lg '>{repo.full_name}</h2>
                <p className="text-sm">
                    Forks: <span className="font-bold mr-2">{repo.forks}</span>
                    Watchers: <span className="font-bold">{repo.watchers}</span>
                </p>
                <p className="text-sm font-thin">{repo?.description}</p>
            </a>
            <div className='flex justify-end'>
                {!isFav &&
                    <Button
                        onClick={addToFavorite}
                        className='py-1 px-3 mr-4 bg-green-500 text-white hover:shadow-md transition-all rounded-2xl mt-2 hover:bg-green-400 hover:text-gray-950'
                        text='Add'
                    />
                }
                {isFav &&
                    <Button
                            onClick={removeFromFavorite}
                            className='py-1 px-3 bg-red-500 text-white hover:shadow-md transition-all rounded-2xl mt-2 hover:bg-red-400 hover:text-gray-950'
                            text='Remove'
                    />
                }
            </div>

        </div>

    );
};

export default RepoCard;

