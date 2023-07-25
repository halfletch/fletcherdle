import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="About" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Hi! I'm just a member of the fletchfam that wanted a Wordle-inspired
        game with FLETCHER-related words (proper nouns included). If you find
        a word that is invalid that you think should be valid,{' '}
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSc5gDrNzeVpXwEpLAv_ig_LRobQ7tPKpZF4NEam_d_4XxyZYg/viewform?usp=sf_link"
          target="_blank"
          className="underline font-bold"
        >
          let me know!
        </a>
      </p>
      <p className="text-sm text-gray-500 dark:text-gray-300 mt-2">
        <em>How to play: </em>Guess the word in 6 tries. After each guess, the color of the tiles will
        change to show how close your guess was to the word.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="T"
          status="correct"
        />
        <Cell value="O" />
        <Cell value="U" />
        <Cell value="R" />
        <Cell value="S" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The letter T is in the word and in the correct spot.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="S" />
        <Cell value="O" />
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="N"
          status="present"
        />
        <Cell value="G" />
        <Cell value="S" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The letter N is in the word but in the wrong spot.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="V" />
        <Cell value="E" />
        <Cell value="N" />
        <Cell isRevealing={true} isCompleted={true} value="U" status="absent" />
        <Cell value="E" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The letter U is not in the word in any spot.
      </p>

      <p className="text-sm text-gray-500 dark:text-gray-300 mt-4">
        Stream FLETCHER's music -{' '}
        <a 
          href="https://open.spotify.com/artist/5qa31A9HySw3T7MKWI9bGg"
          target="_blank"
          className="underline font-bold"
        >
          Spotify
        </a>
        ,{' '}
        <a 
          href="https://itunes.apple.com/us/artist/fletcher/1131301545?app=music&ign-mpt=uo%3D4" 
          target="_blank"
          className="underline font-bold"
        >
          Apple Music
        </a>
        . Follow her on social media -{' '}
        <a 
          href="https://www.instagram.com/findingxfletcher/"
          target="_blank"
          className="underline font-bold"
        >
          Instagram
        </a>
        ,{' '}
        <a 
          href="https://www.tiktok.com/@fletcher?u_code=d8d4kaf1h8472k&preview_pb=0&language=en&timestamp=1579373893&utm_campaign=client_share&app=musically&utm_medium=ios&user_id=6740378791023182854&tt_from=twitter&utm_source=twitter&source=h5_m" 
          target="_blank"
          className="underline font-bold"
        >
          TikTok
        </a>
        ,{' '}
        <a 
          href="https://twitter.com/findingfletcher" 
          target="_blank"
          className="underline font-bold"
        >
          Twitter
        </a>
        . Watch music videos and more on her{' '}
        <a 
          href="https://www.youtube.com/channel/UCin7zH66ec9PCy3e-ykMpCg" 
          target="_blank"
          className="underline font-bold"
        >
          YouTube channel
        </a>
        . Visit her{' '}
        <a 
          href="http://www.findingfletcher.com/" 
          target="_blank"
          className="underline font-bold"
        >
          website
        </a>
        , and buy her{' '}
        <a 
          href="https://shop.findingfletcher.com/" 
          target="_blank"
          className="underline font-bold"
        >
          merch
        </a>
        !
      </p>
    </BaseModal>
  )
}
