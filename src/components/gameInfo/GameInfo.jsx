import Icon from '../icon/Icon'

import styles from './GameInfo.module.css'
import Button from '../button/Button'

function GameInfo ({currentPlayer, winner, onReset, isDraw}) {

    const shouldEnableButton = () => {
        if (winner !== 0) return true
        if (isDraw) return true
    }

    return (
        <div className={styles.gameInfo}>
                {
                    !isDraw && winner === 0 && 
                        <>
                            <h4>Próximo a Jogar:</h4>
                            {
                                currentPlayer === 1 && <Icon iconName="circle"/>
                            }
                            {
                                currentPlayer === -1 && <Icon iconName="x"/>
                            }
                        </>
                }
                {
                   !isDraw &&  winner !== 0 &&
                    <>
                        <h4>Fim de Jogo! Vencedor :</h4>
                        {
                            winner === 1 && <Icon iconName="circle"/>
                        }
                        {
                            winner === -1 && <Icon iconName="x"/>
                        }
                    </>
                }
                {
                    isDraw && <h4>Empate!</h4>
                }
                <Button
                    onClick={onReset}
                    disabled={!shouldEnableButton()}
                >
                    Reiniciar
                </Button>

                
            </div>
    )
}

export default GameInfo